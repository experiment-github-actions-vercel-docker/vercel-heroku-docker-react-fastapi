from fastapi import FastAPI
from app.src.routers import test

app = FastAPI()

app.include_router(test.router)