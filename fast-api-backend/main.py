from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from pydantic import BaseModel

app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing) to allow requests from the frontend
origins = [
    "https://3000-entropy17-microserve-zsz8250jwup.ws-us98.gitpod.io",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


class TimestampResponse(BaseModel):
    timestamp: datetime


@app.get("/api/fastapi-timestamp")
async def get_timestamp():
    # Replace this with your database query logic to fetch the timestamp from PostgreSQL
    timestamp = datetime.now()
    return {"timestamp": timestamp}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
