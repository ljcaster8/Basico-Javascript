// Interagindo com o DOM

let divMessage = document.getElementById("message");
console.log(divMessage);

// divMessage.innerText = "Olá Mundo!!!";
// divMessage.innerHTML = "Olá <b>Mundo!!!</b>";

let name = "sapo";
let urlImgProfile = "https://cdn-icons-png.flaticon.com/512/147/147129.png";

divMessage.innerHTML = `<p>Olá ${name}</p><br><img src=${urlImgProfile} style="max-height:85px">`;
