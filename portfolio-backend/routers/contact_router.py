from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from models import ContactMessageModel
from schemas import ContactMessageCreate, ContactMessageResponse

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_message(
    message_data: ContactMessageCreate,
    db: Session = Depends(get_db)
):
    """
    Submit a new contact message from the portfolio website.
    """
    db_message = ContactMessageModel(
        name=message_data.name,
        email=message_data.email,
        subject=message_data.subject,
        message=message_data.message
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

@router.get("", response_model=List[ContactMessageResponse])
def get_contact_messages(
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    """
    Retrieve submitted contact messages.
    """
    messages = db.query(ContactMessageModel).order_by(ContactMessageModel.created_at.desc()).offset(skip).limit(limit).all()
    return messages
