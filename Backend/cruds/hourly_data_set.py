import datetime
import cruds.hourly_api_set as hourly_api_set
import cruds.day_precipitation as day_precipitation


def data_set(prefecture_name: str, city_name: str):
    precipitation_data, hourly_input_data, date = hourly_api_set.api_set(
        prefecture_name, city_name
    )
    output_data = []
    for time_cnt in range(0, 48, 6):
        today_date = datetime.date.today()
        if (date.hour + time_cnt) > 24:
            day_after = today_date.day + 1
        else:
            day_after = today_date.day
        time = f"{today_date.month}/{day_after}"  # 日付
        hours = f"{time}/{(date.hour + time_cnt) % 24 }:00"  # 時間
        weather = hourly_input_data["hourly"][time_cnt]["weather"][0][
            "icon"
        ]  # 天気情報
        temperature = round(hourly_input_data["hourly"][time_cnt]["temp"])  #  気温
        humidity = hourly_input_data["hourly"][time_cnt]["humidity"]  # 湿度
        extra_time = date.hour + time_cnt
        cnt = 0
        if extra_time > 24:  # 時間が24を超えた時0にリセット
            cnt = 1
            extra_time = date.hour + time_cnt - 24
        elif extra_time > 48:  # 時間が48を超えた時0にリセット
            cnt = 2
            extra_time = date.hour + time_cnt - 48
        pre = day_precipitation.day_precipitation(
            extra_time, cnt, precipitation_data
        )  # 降水確率

        icon_url = f"http://openweathermap.org/img/w/{hourly_weather}.png"

        hourly_data = [
            time,
            hours,
            icon_url,
            temperature,
            humidity,
            pre,
        ]
        # 日付、時刻（時のみ）、天候のアイコンURL、気温、湿度、降水確率で出力

        output_data.append(hourly_data)

    return output_data