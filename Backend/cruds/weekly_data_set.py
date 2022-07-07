import requests
import datetime
import cruds.weekly_api_set as weekly_api_set
import cruds.hourly_api_set as hourly_api_set
import cruds.day_precipitation as day_precipitation

def data_set(prefecture_name: str, city_name: str):
    today = datetime.date.today()
    weekly_weather_data, week_data = weekly_api_set.weekly_api_set(
        prefecture_name, city_name
    )
    output_data = []
    for time_cnt in range(0, 6):

        month_date = today.month
        day_date = (today.day + time_cnt) % 31
        week_time = f"{month_date}/{day_date}"
        icon_path = weekly_weather_data["daily"][time_cnt]["weather"][0][
            "icon"
        ]  # 天気アイコン
        temp_max = round(week_data["daily"]["temperature_2m_max"][time_cnt])  # 最高気温
        temp_min = round(week_data["daily"]["temperature_2m_min"][time_cnt])  # 最低気温
        rain_pre = round(
            min(100, week_data["daily"]["precipitation_sum"][time_cnt] * 10)
        )  #  降水
        pre_sum = f"{rain_pre}%"
        icon_url = f"http://openweathermap.org/img/w/{icon_path}.png"
        weekly_data = [week_time, icon_url, temp_max, temp_min, pre_sum]

        output_data.append(weekly_data)

    return output_data
