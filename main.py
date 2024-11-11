from fastapi import FastAPI
from InspiringQuotesDAOService import InspiringQuotesDBConnctor
from Quotes import Quote
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
db = InspiringQuotesDBConnctor()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

#fix Cors let
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"data" : "hello from fastAPI server"}

@app.get("/getAllQuets")
def getAllQuets():
    return db.getAll()

@app.get("/getQuote/{key}")
def getQuote(key:str):
    return db.getQuoteByKey(key)


@app.post("/addQuote")
def addQuote(quote : Quote):
    try:
        key = db.insertQuote(quote)
        return {"msg": "Quote added successfully" , "key" : key }
    except:
        return {"error": "Quote didnt added successfully something is wrong"}

@app.delete("/deleteQuote/{key}")
def deleteQuote(key:str):
    return db.deleteQuoteBykey(key)
