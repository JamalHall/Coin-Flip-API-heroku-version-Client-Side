document.querySelector('button').addEventListener('click',flip)
load()

//on load function
async function load(){
    try{
        const response = await fetch('https://coinflip-fullstack.herokuapp.com/api/')
        const data = await response.json()
        console.log(data)
        objectURL = data        
        document.getElementById("image").setAttribute("src",objectURL)        
    }
    catch(err) {console.log(err)}
    }

async function flip(){
    try{
        const response = await fetch('https://coinflip-fullstack.herokuapp.com/coin/')
        const data = await response.json()

        console.log(data.msg)
        let res=data.msg.toUpperCase()
        counter(data.msg)        
        document.getElementById('save').innerText= res+" "+document.getElementById('save').innerText
        document.getElementById('total').innerText = tot
        document.getElementById('heads').innerText = hed
        document.getElementById('tails').innerText = tai        
    }
    catch(err) {console.log(err)}
    }

    let tot =0
    let hed =0
    let tai =0
    
    function counter(res){        
        if(res=='heads'){
            document.getElementById('image').setAttribute("src","https://github.com/JamalHall/Coin-Flip-Server-Side-Heroku/blob/1457918d54cc45212f4ab936d6a956ce9da8f754/images/heads.png") 
            tot+=1
            hed+=1
        } else{
            document.getElementById('image').setAttribute("src","https://github.com/JamalHall/Coin-Flip-Server-Side-Heroku/blob/1457918d54cc45212f4ab936d6a956ce9da8f754/images/tails.png")
            tot+=1
            tai+=1
        }
    }
