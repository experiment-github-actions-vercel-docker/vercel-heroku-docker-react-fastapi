from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from typing import Union


router = APIRouter()

@router.get("/")
def read_root():
    return {"Hello": "World!!!!!"}


@router.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
#     @app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    json_compatible_item_data = jsonable_encoder({"item_id": item_id, "q": q})
    return JSONResponse(content=json_compatible_item_data)