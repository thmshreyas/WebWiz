from pydantic import BaseModel, EmailStr


class EmailRequest(BaseModel):
    Head: str
    Body: str
    email: EmailStr
