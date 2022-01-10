import uuid

class InspiringQuotesDBConnctor:

    data = {}


    def insertQuote(self,quote):
         key = str(uuid.uuid4())
         self.data[key] = quote
         return key

    def getAll(self):
        return self.data

    def getQuoteByKey(self,key):
        return self.data[key]


    def deleteQuoteBykey(self,key):
        try:
            print(key)
            del self.data[key]
            return {"msg" : "succses "}
        except:
            return {"error" : "coudnt delete that Quote "}