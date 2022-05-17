import os
from fastapi import FastAPI
from starlette.responses import FileResponse

# 環境変数を .env から読み込む
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()
favicon_path = 'favicon.ico'

API_KEY = os.environ["API_KEY"]

@app.get('/favicon.ico')
async def favicon():
    return FileResponse(favicon_path)

@app.get("/")
def home():
  return {"Hello API"}
