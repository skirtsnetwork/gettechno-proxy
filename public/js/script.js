const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

checktheusername()

function checktheusername(){
    if (localStorage.getItem('nickname')===null){
        let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans le tchat. Veuillez éviter les caractères spéciaux")
        if (result===null){
            localStorage.setItem('nickname', "Guest")
        }else{
            localStorage.setItem('nickname', result)
        }
        
    }   
    document.getElementById("username").innerHTML = localStorage.getItem('nickname')
    if (localStorage.getItem('nickname')==="AldessSc"){
        document.getElementById("grade").innerHTML = "CEO"
    }
}