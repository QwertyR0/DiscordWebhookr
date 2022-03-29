const axios = require("axios")
var button = document.getElementById('submitb');

function clickedS(){
    const url = `https://discord.com/api/webhooks/${document.getElementById("webhookID").value}`
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