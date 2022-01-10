const quetes = document.getElementById("QuotesCountiner")
        
const del = (key,child) => {
            console.log(key)
            fetch(`http://localhost:8000/deleteQuote/${key}` , {
                method : "DELETE",
                
               
            }).then(res =>  res.json()).then(data => {
                console.log(data)
                quetes.removeChild(child)
            })
            
            .catch(err=>console.log(`ERROR ${err}`) )
        }
function getAllQuotes(){
           while(quetes.hasChildNodes()){ quetes.removeChild(quetes.firstChild)}
           fetch("http://localhost:8000/getAllQuets")
           .then(res => res.json())
           .then(data =>
            {
                console.log(data)
                for (const key in data) 
                {
                if (Object.hasOwnProperty.call(data, key)) 
                {
                        let q = data[key].content;
                        let ele =  document.createElement('div')
                        ele.className = "qContiner"
                        let elebtn =  document.createElement('button')
                        elebtn.className = "qDelbtn"
                        let eleh3 =  document.createElement('h3')
                        eleh3.className = "qContent"
                        eleh3.innerText = q
                        elebtn.innerHTML = "DELETE"
                        elebtn.onclick = e => {
                            del(key,ele)
                            
                        }
                        ele.appendChild(eleh3)
                        ele.appendChild(elebtn)
                        quetes.appendChild(ele)
        
                    
                }
                }
                       
            }).catch(err=>console.log(`ERROR ${err}`) )
}
        
getAllQuotes()

function getAQuoteByKey(key){
    fetch(`http://localhost:8000/getQuote/${key}`)
    .then(res => res.json())
    .then(data =>
     {
         console.log(data)
         
        let q = data.content;
        let ele =  document.createElement('div')
        ele.className = "qContiner"
        let elebtn =  document.createElement('button')
        elebtn.className = "qDelbtn"
        let eleh3 =  document.createElement('h3')
        eleh3.className = "qContent"
        eleh3.innerText = q
        elebtn.innerHTML = "DELETE"
        elebtn.onclick = e => {
                     del(key,ele)
                     
        }
        ele.appendChild(eleh3)
        ele.appendChild(elebtn)
        quetes.appendChild(ele)
 
              
     }).catch(err=>console.log(`ERROR ${err}`) )
}
        
function postNewQuote(){
            datatopost = JSON.stringify( { content : document.getElementById("quote").value } )
            fetch("http://localhost:8000/addQuote" , {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body:datatopost
            }).then(res => res.json())
            .then(data => 
            {
                console.log(data)
                getAQuoteByKey(data.key)
                document.getElementById("quote").value = ""
               
                
            })
            .catch(err=>console.log(`ERROR ${err}`) )
        
        
           
        }
         