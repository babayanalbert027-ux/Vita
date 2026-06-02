let mec = document.getElementById('nkar');
let poqr = document.querySelectorAll('.taki');
let aj = document.getElementById('aj')
let dzax = document.getElementById('dzax')

let nkarner =[
    "VITA/sev.qart.jpg",
    "nkar/Black1.jpg",
    "nkar/Black2.jpg",
    "nkar/Black3.jpg"
];

let hamar = 0;
function poxel() {
    mec.src = nkarner[hamar];
    poqr.forEach(el => el.classList.remove("aktiv"));
    poqr[hamar].classList.add("aktiv");
}

poqr.forEach((item, i) => {
    item.addEventListener("click", () => {
        hamar = i;
        poxel();
    });
});

aj.addEventListener("click", () => {
    hamar++;
    if (hamar >= nkarner.length) {
        hamar = 0;
    }
    poxel();
});

dzax.addEventListener("click", () => {
    hamar--;
    if (hamar < 0) {
        hamar = nkarner.length - 1;
    }
    poxel();
});
let plus = document.getElementById('plus');
let minus =document.getElementById('minus');
let qanak = document.getElementById('qanak');
let i=1;
qanak.innerHTML = (i);
plus.addEventListener("click", ()=>{
    if(i<=9){
    i++;
    qanak.innerHTML = (i);}
})
minus.addEventListener("click", ()=>{
    if(i>=2){
    i--;
    qanak.innerHTML = (i);
}
})
let zagruzka = document.getElementById('zagruzka');
setTimeout(() =>{
    zagruzka.classList.add("pahel");
},1100);

let zambyux = document.getElementById('zambyux');
let apranq = {
    id:5,
    anun:"Սև թեյ",
    gin:2500,
    nkar:"./VITA/sev.qart.jpg"
}
zambyux.addEventListener("click", ()=>{
    let qart = JSON.parse(localStorage.getItem("qart")) || [];
    let hamapatasxan = qart.find(item =>item.id === apranq.id);
    if (hamapatasxan){
        hamapatasxan.qanak += i;
    }
    else{
        qart.push({
            id:apranq.id,
            anun:apranq.anun,
            gin:apranq.gin,
            nkar:apranq.nkar,
            qanak:i
        })
    }
    localStorage.setItem("qart", JSON.stringify(qart));
});

