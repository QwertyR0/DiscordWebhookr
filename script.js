const axios = require("axios")
var button = document.getElementById('submitb');
var id = document.getElementById("webhookID");

function clickedS(){
    const url = `https://discord.com/api/webhooks/${id.value}`
    const name = document.getElementById("webhookName").value
    const avatar = document.getElementById("avatarurl").value
    const content = document.getElementById("webhookMessage").value
    axios.post(url, {
        username: `${name}`,
        avatar_url: `${avatar}`,
        content: `${content}`
    }).catch((err) => {
        console.error(err);
    })
}

button.addEventListener("click", clickedS);
id.onpaste = pasted;

function pasted(){
    setTimeout(()=> {
        if(id.value.startsWith("https://discord.com/api/webhooks/")){
            id.value = id.value.replace("https://discord.com/api/webhooks/", "");
        }
    }, 5);
}