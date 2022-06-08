import json


def day_precipitation(time, cnt, weather_json):  # 降水確率求める
    if 0 <= time and time < 6:
        precipitation = weather_json["forecasts"][cnt]["chanceOfRain"]["T00_06"]
    elif 6 <= time and time < 12:
        precipitation = weather_json["forecasts"][cnt]["chanceOfRain"]["T06_12"]
    elif 12 <= time and time < 18:
        precipitation = weather_json["forecasts"][cnt]["chanceOfRain"]["T12_18"]
    else:
        precipitation = weather_json["forecasts"][cnt]["chanceOfRain"]["T18_24"]
    return format(precipitation)
