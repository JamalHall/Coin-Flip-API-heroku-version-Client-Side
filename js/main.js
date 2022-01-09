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
        console.log(data.imageUrl)        
        let objectURL = data.imageUrl
        document.getElementById('image').setAttribute("src",objectURL)
        document.getElementById('save').innerText= res+" "+document.getElementById('save').innerText
        counter(data.msg)
    }
    catch(err) {console.log(err)}
    }

    function counter(res){
        document.getElementById('total').innerText = tot
        document.getElementById('heads').innerText = hed
        document.getElementById('tails').innerText = tai
        let tot=0
        let hed=0
        let tai=0
        if(res=='heads'){
            total+=1
            heads+=1
        } else{
            total+=1
            tai+=1
        }
    }
