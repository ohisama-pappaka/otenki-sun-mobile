import os
from fastapi import FastAPI
from starlette.responses import FileResponse
from requests.sessions import cookiejar_from_dict
import requests
import json
from datetime import datetime
# from dateutil import tz


# 環境変数を .env から読み込む
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()
favicon_path = 'favicon.ico'

# API_KEY = os.environ["API_KEY"]
# city_name = "Ube"


@app.get('/favicon.ico')
async def favicon():
    return FileResponse(favicon_path)


  

@app.get("/{param}")
def home(param: int):
  # api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"# 都市名から、座標を求めるAPI
  # pre_api = "https://weather.tsukumijima.net/api/forecast/city/350010" # 降水確率を求める
  # local_url = api.format(city = city_name, key = API_KEY)


  # response = requests.get(local_url)   
  # pre_res = requests.get(pre_api)
  # data = response.json()
  # weather_json=pre_res.json()

  # lat = data["coord"]["lat"]  # 座標獲得
  # lon = data["coord"]["lon"]  # 座標獲得

  # main_api = "https://api.openweathermap.org/data/2.5/onecall?lat={city_lat}&lon={city_lon}&units=metric&lang=ja&appid={key}"

  # main_url = main_api.format(city_lat=lat,city_lon=lon,key = API_KEY)
  # main_response = requests.get(main_url)
  # main_data = main_response.json()
  # time_zone = tz.gettz('Asia/Tokyo')

  # now_hour = datetime.now().hour+9
  
  
  # def precipitation(time,cnt): # 降水確率求める
  #   if 0 <= time and time < 6:
  #         cor = weather_json['forecasts'][cnt]['chanceOfRain']['T00_06']
  #   elif 6 <= time and time < 12:
  #         cor = weather_json['forecasts'][cnt]['chanceOfRain']['T06_12']
  #   elif 12 <= time and time < 18:
  #         cor = weather_json['forecasts'][cnt]['chanceOfRain']['T12_18']
  #   else:
  #         cor = weather_json['forecasts'][cnt]['chanceOfRain']['T18_24']
  #   return format(cor)

  # for time_cnt in range(0,48,6) :
  #   now_from_ts = datetime.fromtimestamp(data["hourly"][time_cnt]["dt"],time_zone) #天気
  #   main_weather=data["hourly"][time_cnt]["weather"][0]["main"] #天気情報
  #   main_temp = data["hourly"][time_cnt]["temp"]
  #   main_humidity = data["hourly"][time_cnt]["humidity"]
  #   extra_time = now_hour+time_cnt
  #   cnt = 0
  #   if extra_time > 24:
  #     cnt = 1
  #     extra_time = now_hour+time_cnt-24
  #   elif extra_time > 48:
  #     cnt = 1
  #     extra_time = now_hour+time_cnt-48
  #   main_precipitation=(precipitation(extra_time,cnt))

    
  return param*10
