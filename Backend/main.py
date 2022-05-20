import os
from fastapi import FastAPI
from starlette.responses import FileResponse
from requests.sessions import cookiejar_from_dict
import requests
import json
from datetime import datetime
from dateutil import tz
import numpy as np

# 環境変数を .env から読み込む
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()
favicon_path = 'favicon.ico'

API_KEY = os.environ["API_KEY"]
city_name = "Ube"

@app.get('/favicon.ico')
async def favicon():
    return FileResponse(favicon_path)


  

@app.get("/")
def home():
  api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"# 都市名から、座標を求めるAPI
  pre_api = "https://weather.tsukumijima.net/api/forecast/city/350010" # 降水確率を求める
  local_url = api.format(city = city_name, key = API_KEY)


  response = requests.get(local_url)   
  pre_res = requests.get(pre_api)
  data = response.json()
  weather_json=pre_res.json()

  lat = data["coord"]["lat"]  # 座標獲得
  lon = data["coord"]["lon"]  # 座標獲得

  main_api = "https://api.openweathermap.org/data/2.5/onecall?lat={city_lat}&lon={city_lon}&units=metric&lang=ja&appid={key}"

  main_url = main_api.format(city_lat=lat,city_lon=lon,key = API_KEY)
  main_response = requests.get(main_url)
  main_data = main_response.json()
  time_zone = tz.gettz('Asia/Tokyo')

  now_hour = datetime.now().hour+9
  
  
  def precipitation(time,cnt): # 降水確率求める
    if 0 <= time and time < 6:
          cor = weather_json['forecasts'][cnt]['chanceOfRain']['T00_06']
    elif 6 <= time and time < 12:
          cor = weather_json['forecasts'][cnt]['chanceOfRain']['T06_12']
    elif 12 <= time and time < 18:
          cor = weather_json['forecasts'][cnt]['chanceOfRain']['T12_18']
    else:
          cor = weather_json['forecasts'][cnt]['chanceOfRain']['T18_24']
    return format(cor)


  
  output_data = []
  for time_cnt in range(0,48,6) :
    miner_data = []
    output_time = datetime.fromtimestamp(main_data["hourly"][time_cnt]["dt"],time_zone) #　時刻
    output_weather = main_data["hourly"][time_cnt]["weather"][0]["main"] #　天気情報
    output_temp = main_data["hourly"][time_cnt]["temp"]#　気温
    output_humidity = main_data["hourly"][time_cnt]["humidity"] #湿度
    extra_time = now_hour+time_cnt
    cnt = 0
    if extra_time > 24:
      cnt = 1
      extra_time = now_hour+time_cnt-24
    elif extra_time > 48:
      cnt = 1
      extra_time = now_hour+time_cnt-48
    output_pre=precipitation(extra_time,cnt)

    miner_data.append(output_time)
    miner_data.append(output_weather)
    miner_data.append(output_temp)
    miner_data.append(output_humidity)
    miner_data.append(output_pre)

    output_data.append(miner_data)
  return output_data
