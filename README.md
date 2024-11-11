# QuetsWithFastApiAndJS
An inspirational sentence sharing system.

database is a moucup For now . it is an in memory python dict



to run the server you need to use this commend in teminal :

uvicorn pythonServerFileName:nameOfFastAPIObjectToRun --reload 


python -m fastapi dev .\ServerEndPoint.py
python -m uvicorn ServerEndPoint:app --host "0.0.0.0" --port 8000

go to localhost:8000/docs for swaggerui
