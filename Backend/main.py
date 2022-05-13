from fastapi import FastAPI
from starlette.responses import FileResponse

app = FastAPI()
favicon_path = 'favicon.ico'

@app.get('/favicon.ico')
async def favicon():
    return FileResponse(favicon_path)

@app.get("/")
def home():
  return {"Hello API"}

