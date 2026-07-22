from fastapi import FastAPI

app = FastAPI(title="AI Money Machine API")

@app.get("/")
def home():
    return {
        "message": "AI Money Machine Backend Running 🚀"
    }