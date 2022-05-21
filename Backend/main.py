import os
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



  api = f'https://api.open-meteo.com/v1/forecast?{lat}&{lon}&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&timezone=Asia%2FTokyo'

  main_url = main_api.format(city_lat=lat,city_lon=lon,key = API_KEY)
  main_response = requests.get(main_url)
  main_data = main_response.json()
  time_zone = tz.gettz('Asia/Tokyo')
  week_response = requests.get(week_api)
  week_data = week_response.json()

  date = datetime.datetime.now()

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


  def daily_weather():

  
    daily_data = []
    for time_cnt in range(0,48,6) :

      day_after = datetime.timedelta(hours=9+time_cnt)

      output_time = today+day_after# 日付
      output_hours = (date.hour + time_cnt)%24 # 時間
      output_weather = main_data["hourly"][time_cnt]["weather"][0]["main"] #　天気情報
      output_temp = main_data["hourly"][time_cnt]["temp"]#　気温
      output_humidity = main_data["hourly"][time_cnt]["humidity"] #湿度
      extra_time = date.hour+time_cnt
      cnt = 0
      if extra_time > 24:
        cnt = 1
        extra_time = date.hour + time_cnt-24
      elif extra_time > 48:
        cnt = 1
        extra_time = date.hour + time_cnt-48
      output_pre=precipitation(extra_time,cnt)

      miner_data=[output_time,output_hours,output_weather,output_temp,output_humidity,output_pre]
      #   日付、時刻（時のみ）、天候、気温、湿度、降水確率で出力
      
      daily_data.append(miner_data)

    return daily_data

  today = datetime.date.today()
  def weekly_weather():
    weekly_data=[]
    for time_cnt in range(0,6):
      
      day_after = datetime.timedelta(days=time_cnt)
      week_time = today+day_after
      week_weather = week_data["daily"]["weathercode"][time_cnt]
      week_max = week_data["daily"]["temperature_2m_max"][time_cnt]
      week_min = week_data["daily"]["temperature_2m_min"][time_cnt]
      week_pre_sum = week_data["daily"]["precipitation_sum"][time_cnt]

      miner_data = [week_time,week_weather,week_max,week_min,week_pre_sum]

      weekly_data.append(miner_data)

    return weekly_data    

  return daily_weather()