from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api import api
from env import load_localenv

load_localenv()

app = FastAPI()
app.include_router(api.router, prefix="/api")
app.mount("/", StaticFiles(directory="../web/build/", html=True))


@app.get("/health")
def hello_world():
    return "ok"
