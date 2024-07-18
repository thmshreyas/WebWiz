from fastapi import FastAPI, Response, status, HTTPException, Depends
from . import models, schemas

app = FastAPI()

@app.post("/mail")
def Send_Mail(post: schemas.EmailRequest):
    Data = schemas.EmailRequest(**post.dict())
    models.send_email(Data.Head, Data.Body, Data.email)
    return "Email Sent"









