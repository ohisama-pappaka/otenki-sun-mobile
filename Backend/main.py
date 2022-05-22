import os
from unicodedata import name
from fastapi import FastAPI
from starlette.responses import FileResponse
from requests.sessions import cookiejar_from_dict
import requests
import json
from datetime import datetime
from dateutil import tz
import numpy as np
import datetime
from dateutil import relativedelta
import city_data_file

# 環境変数を .env から読み込む
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
favicon_path = "favicon.ico"

API_KEY = os.environ["API_KEY"]


def api_set(prefecture_name: str, city_name: str):
    ID, city_name = city_data_file.FetchCityData(prefecture_name, city_name)
    api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"  # 都市名から、座標を求めるAPI
    pre_api = f"https://weather.tsukumijima.net/api/forecast/city/{ID}"  # 降水確率を求める
    local_url = api.format(city=city_name, key=API_KEY)

    response = requests.get(local_url)
    pre_res = requests.get(pre_api)
    weather_data = response.json()
    weather_json = pre_res.json()

    lat = weather_data["coord"]["lat"]  # 座標獲得
    lon = weather_data["coord"]["lon"]  # 座標獲得

    week_lat = float(lat)
    week_lon = float(lon)
    main_api = "https://api.openweathermap.org/data/2.5/onecall?lat={city_lat}&lon={city_lon}&units=metric&lang=ja&appid={key}"

    week_api = f"https://api.open-meteo.com/v1/forecast?latitude={week_lat}&longitude={week_lon}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&timezone=Asia%2FTokyo"

    main_url = main_api.format(city_lat=lat, city_lon=lon, key=API_KEY)
    main_response = requests.get(main_url)
    main_data = main_response.json()
    week_response = requests.get(week_api)
    week_data = week_response.json()
    date = datetime.datetime.now()

    return weather_json, main_data, week_data, date


def precipitation(time, cnt, weather_json):  # 降水確率求める
    if 0 <= time and time < 6:
        cor = weather_json["forecasts"][cnt]["chanceOfRain"]["T00_06"]
    elif 6 <= time and time < 12:
        cor = weather_json["forecasts"][cnt]["chanceOfRain"]["T06_12"]
    elif 12 <= time and time < 18:
        cor = weather_json["forecasts"][cnt]["chanceOfRain"]["T12_18"]
    else:
        cor = weather_json["forecasts"][cnt]["chanceOfRain"]["T18_24"]
    return format(cor)


@app.get("/")
def root():
    return {"Hello FastAPI!!"}


@app.get("/favicon.ico")
async def favicon():
    return FileResponse(favicon_path)


@app.get("/city/{name}")
def root(name: str):
    main_list = city_data_file.FetchCityList(name)
    prefecture_name = name
    # main_list = city_data_file.city_list
    return main_list


@app.get("/daily/{prefecture_name}/{city_name}")
def day(prefecture_name: str, city_name: str):
    weather_json, main_data, week_data, date = api_set(prefecture_name, city_name)
    daily_data = []
    for time_cnt in range(0, 48, 6):
        today = datetime.date.today()
        if (date.hour + time_cnt) > 24:
            day_after = today.day + 1
        else:
            day_after = today.day
        output_time = f"{today.month}/{day_after}"  # 日付
        output_hours = f"{(date.hour + time_cnt) % 24 }:00"  # 時間
        output_weather = main_data["hourly"][time_cnt]["weather"][0]["icon"]  # 　天気情報
        output_temp = main_data["hourly"][time_cnt]["temp"]  # 　気温
        output_humidity = main_data["hourly"][time_cnt]["humidity"]  # 湿度
        extra_time = date.hour + time_cnt
        cnt = 0
        if extra_time > 24:
            cnt = 1
            extra_time = date.hour + time_cnt - 24
        elif extra_time > 48:
            cnt = 1
            extra_time = date.hour + time_cnt - 48
        output_pre = precipitation(extra_time, cnt, weather_json)

        icon_url = f"http://openweathermap.org/img/w/{output_weather}.png"

        miner_data = [
            output_time,
            output_hours,
            icon_url,
            output_temp,
            output_humidity,
            output_pre,
        ]
        #   日付、時刻（時のみ）、天候のアイコンURL、気温、湿度、降水確率で出力

        daily_data.append(miner_data)

    return daily_data


@app.get("/weekly/{prefecture_name}/{city_name}")
def week(prefecture_name: str, city_name: str):
    today = datetime.date.today()
    weather_json, main_data, week_data, date = api_set(prefecture_name, city_name)
    weekly_data = []
    for time_cnt in range(0, 6):

        day_after = datetime.timedelta(days=time_cnt)
        day_month = today.month
        day_day = (today.day + time_cnt) % 31
        week_time = f"{day_month}/{day_day}"
        week_weather = main_data["daily"][time_cnt]["weather"][0]["icon"]  # 天気アイコン
        week_max = week_data["daily"]["temperature_2m_max"][time_cnt]  # 最高気温
        week_min = week_data["daily"]["temperature_2m_min"][time_cnt]  # 最低気温
        week_pre_sum = round(
            min(100, week_data["daily"]["precipitation_sum"][time_cnt] * 5)
        )  #  降水
        icon_url = f"http://openweathermap.org/img/w/{week_weather}.png"
        miner_data = [week_time, icon_url, week_max, week_min, week_pre_sum]

        weekly_data.append(miner_data)

    return weekly_data
