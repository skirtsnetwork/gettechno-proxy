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
    if (localStorage.getItem('nickname')==="X-crash-X"){
        document.getElementById("vip").innerHTML = "MVP"
    }
    if (localStorage.getItem('nickname')==="AldessSc"){
        document.getElementById("grade").innerHTML = "CEO"
    }
    if (localStorage.getItem('nickname')==="SuperCool"){
        document.getElementById("vip").innerHTML = "MVP"
    }
    if (localStorage.getItem('nickname')==="AldessSc"){
        document.getElementById("vip").innerHTML = " ADMIN"
    }
    if (localStorage.getItem('nickname')==="Foxyz"){
        document.getElementById("vip").innerHTML = "VIP"
    }
    if (localStorage.getItem('nickname')==="Pix4rt"){
        document.getElementById("grade").innerHTML = "STAFF"
    }
    if (localStorage.getItem('nickname')==="Arrox78"){
        document.getElementById("vip").innerHTML = "VIP"
    }
  if (localStorage.getItem('nickname')==="Nul0923"){
        document.getElementById("vip").innerHTML = "VIP"
    }
  if (localStorage.getItem('nickname')==="Henri"){
        document.getElementById("vip").innerHTML = "VIP"
    }
}