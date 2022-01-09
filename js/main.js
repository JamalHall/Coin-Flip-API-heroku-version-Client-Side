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
        console.log(data.imageUrl)
        //objectURL = data.imageURL
        document.getElementById("image").setAttribute("src",objectURL)
    }
    catch(err) {console.log(err)}
    }


    const test = document.querySelector('h2')
    console.log(test.parentNode.childNodes)



    