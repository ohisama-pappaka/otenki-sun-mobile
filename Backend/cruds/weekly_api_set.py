import requests
import datetime
import cruds.city_data_file
import os
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.environ["API_KEY"]


def weekly_api_set(prefecture_name: str, city_name: str):
    id, city_name = cruds.city_data_file.fetch_city_data(prefecture_name, city_name)
    city_api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"  # 都市名から、座標を求めるAPI
    local_url = city_api.format(city=city_name, key=API_KEY)

    city_response = requests.get(local_url)
    city_data = city_response.json()

    lat = city_data["coord"]["lat"]  # 座標獲得
    lon = city_data["coord"]["lon"]  # 座標獲得

    weekly_lat = float(lat)
    weekly_lon = float(lon)
    hourly_api = "https://api.openweathermap.org/data/2.5/onecall?lat={city_lat}&lon={city_lon}&units=metric&lang=ja&appid={key}"  # 毎時の天気情報の出力
    weekly_api = f"https://api.open-meteo.com/v1/forecast?latitude={weekly_lat}&longitude={weekly_lon}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&timezone=Asia%2FTokyo"  # 週間の天気情報

    hourly_url = hourly_api.format(city_lat=lat, city_lon=lon, key=API_KEY)

    hourly_response = requests.get(hourly_url)
    hourly_json = hourly_response.json()
    weekly_response = requests.get(weekly_api)
    weekly_json = weekly_response.json()

    return hourly_json, weekly_json
