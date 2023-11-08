let purrple = document.querySelector("#purrple");
let red = document.querySelector("#red");
let darkPink = document.querySelector("#darkPink");
let lightPink = document.querySelector("#lightPink");
let black = document.querySelector("#black");
let time = document.querySelector("#time");
let img = document.querySelector("#img");

function updateTime() {
  let currentdate = new Date();
  let formattedTime = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  document.getElementById("time").innerHTML = formattedTime;
}

// Update the time immediately
time.innerHTML = `${updateTime()}`;

// Update the time every second
setInterval(updateTime, 1000);

// Events Listener
purrple.addEventListener("click", () => {
  img.src =
    "https://media.discordapp.net/attachments/1160867985909620917/1171498628930621541/purp.png?ex=655ce61e&is=654a711e&hm=6e69d2e6c5afd8bcfc0dfe5b768b2b2f908ef6ecaf58db0a9974340aad2d0725&=&width=397&height=397";
});
red.addEventListener("click", () => {
  img.src =
    "https://media.discordapp.net/attachments/1160867985909620917/1171498629563949116/PTgQlim.png?ex=655ce61e&is=654a711e&hm=2b2a7c0ad2bfbfe71d5d4b699d522108001636b6e6196841676a939705be7bbb&=&width=397&height=397";
});
darkPink.addEventListener("click", () => {
  img.src =
    "https://media.discordapp.net/attachments/1160867985909620917/1171498630306345000/burb.png?ex=655ce61e&is=654a711e&hm=dc43c1d5b5a8424be99843460efb57823db9d2f377c19355060a19fcf2b4926a&=&width=397&height=397";
});
lightPink.addEventListener("click", () => {
  img.src =
    "https://media.discordapp.net/attachments/1160867985909620917/1171498630767714364/baig.png?ex=655ce61e&is=654a711e&hm=e7b0684fd403617bce0195a2ebb927dc6e3cd787351eadcb66c8a39ecf113b8a&=&width=397&height=397";
});
black.addEventListener("click", () => {
  img.src =
    "https://media.discordapp.net/attachments/1160867985909620917/1171498631245869096/black.png?ex=655ce61f&is=654a711f&hm=55910816d057a66cb520fdd4e2731c4be7c1fb2538a7a7b7361eaacc7d2764f1&=&width=397&height=397";
});
