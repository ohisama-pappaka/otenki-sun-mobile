from fastapi import FastAPI
from starlette.responses import FileResponse
import datetime
import cruds.weekly_api_set as weekly_api_set
import cruds.hourly_api_set as hourly_api_set
import cruds.day_precipitation as day_precipitation
import cruds.city_data_file as city_data_file
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
favicon_path = "favicon.ico"


@app.get("/")
def root():
    return {"Hello FastAPI!!"}


@app.get("/favicon.ico")
async def favicon():
    return FileResponse(favicon_path)


@app.get("/city/{name}")
def root(name: str):
    main_list = city_data_file.fetch_city_list(name)
    return main_list


@app.get("/daily/{prefecture_name}/{city_name}")
def day(prefecture_name: str, city_name: str):
    precipitation_data, hourly_input_data, date = hourly_api_set.api_set(
        prefecture_name, city_name
    )
    hourly_output_data = []
    for time_cnt in range(0, 48, 6):
        today_date = datetime.date.today()
        if (date.hour + time_cnt) > 24:
            day_after = today_date.day + 1
        else:
            day_after = today_date.day
        hourly_time = f"{today_date.month}/{day_after}"  # 日付
        hourly_hours = f"{hourly_time}/{(date.hour + time_cnt) % 24 }:00"  # 時間
        hourly_weather = hourly_input_data["hourly"][time_cnt]["weather"][0][
            "icon"
        ]  # 天気情報
        hourly_temperature = round(hourly_input_data["hourly"][time_cnt]["temp"])  #  気温
        hourly_humidity = hourly_input_data["hourly"][time_cnt]["humidity"]  # 湿度
        extra_time = date.hour + time_cnt
        cnt = 0
        if extra_time > 24:  # 時間が24を超えた時0にリセット
            cnt = 1
            extra_time = date.hour + time_cnt - 24
        elif extra_time > 48:  # 時間が48を超えた時0にリセット
            cnt = 2
            extra_time = date.hour + time_cnt - 48
        hourly_pre = day_precipitation.day_precipitation(
            extra_time, cnt, precipitation_data
        )  # 降水確率

        icon_url = f"http://openweathermap.org/img/w/{hourly_weather}.png"

        hourly_data = [
            hourly_time,
            hourly_hours,
            icon_url,
            hourly_temperature,
            hourly_humidity,
            hourly_pre,
        ]
        # 日付、時刻（時のみ）、天候のアイコンURL、気温、湿度、降水確率で出力

        hourly_output_data.append(hourly_data)

    return hourly_output_data


@app.get("/weekly/{prefecture_name}/{city_name}")
def week(prefecture_name: str, city_name: str):
    today = datetime.date.today()
    weekly_weather_data, week_data = weekly_api_set.weekly_api_set(
        prefecture_name, city_name
    )
    weekly_output_data = []
    for time_cnt in range(0, 6):

        month_date = today.month
        day_date = (today.day + time_cnt) % 31
        week_time = f"{month_date}/{day_date}"
        icon_path = weekly_weather_data["daily"][time_cnt]["weather"][0][
            "icon"
        ]  # 天気アイコン
        week_max = round(week_data["daily"]["temperature_2m_max"][time_cnt])  # 最高気温
        week_min = round(week_data["daily"]["temperature_2m_min"][time_cnt])  # 最低気温
        week_pre = round(
            min(100, week_data["daily"]["precipitation_sum"][time_cnt] * 10)
        )  #  降水
        week_pre_sum = f"{week_pre}%"
        icon_url = f"http://openweathermap.org/img/w/{icon_path}.png"
        weekly_data = [week_time, icon_url, week_max, week_min, week_pre_sum]

        weekly_output_data.append(weekly_data)

    return weekly_output_data
