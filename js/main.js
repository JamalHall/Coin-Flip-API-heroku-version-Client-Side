document.querySelector('button').addEventListener('click',flip)
load()

//on load function
async function load(){
    try{
        const response = await fetch('https://coinflip-fullstack.herokuapp.com/')
        const data = await response.json()
        console.log(data)
        objectURL = data        
        document.getElementById("image").setAttribute("src",objectURL)        
    }
    catch(err) {console.log(err)}
    }


async function flip(){
    try{
        const response = await fetch('https://coinflip-fullstack.herokuapp.com/')
        const data = await response.json()
        console.log(data)
        objectURL = data
        document.getElementById("image").setAttribute("src",objectURL)
    }
    catch(err) {console.log(err)}
    }


  