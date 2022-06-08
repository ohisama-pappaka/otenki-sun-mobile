import requests
import datetime
import cruds.city_data_file
import os
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.environ["API_KEY"]


def api_set(prefecture_name: str, city_name: str):
    id, city_name = cruds.city_data_file.fetch_city_data(prefecture_name, city_name)
    city_api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"  # 都市名から、座標を求めるAPI
    pre_api = f"https://weather.tsukumijima.net/api/forecast/city/{id}"  # 降水確率を求める
    local_url = city_api.format(city=city_name, key=API_KEY)

    city_response = requests.get(local_url)
    pre_response = requests.get(pre_api)
    city_data = city_response.json()
    precipitation_json = pre_response.json()

    lat = city_data["coord"]["lat"]  # 座標獲得
    lon = city_data["coord"]["lon"]  # 座標獲得

    hourly_api = "https://api.openweathermap.org/data/2.5/onecall?lat={city_lat}&lon={city_lon}&units=metric&lang=ja&appid={key}"  # 毎時の天気情報の出力
    hourly_url = hourly_api.format(city_lat=lat, city_lon=lon, key=API_KEY)

    hourly_response = requests.get(hourly_url)
    hourly_json = hourly_response.json()
    date = datetime.datetime.now()

    return precipitation_json, hourly_json, date
