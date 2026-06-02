let obyektner = document.getElementById('obyektner');
let qarter = JSON.parse(localStorage.getItem("qart")) || [];
for(let i=0;i<qarter.length;i++){
    let { id, anun, gin, nkar, qanak} = qarter[i];
    obyektner.innerHTML +=`
    <div class="qart">
        <div>
            <img class="nkar" src="${nkar}" alt="">
        </div>

        <div class="tvyalner">
            <h2>${anun}</h2>
            <p>${gin} ֏</p>
            <div class="qanak"> <button class="minus">-</button> <span class="qanak1">${qanak}</span> <button class="plus">+</button> </div>
        </div>
        <div class="pakel">
            <span class="pakel-btn">&times;</span>
        </div>
    </div>
    `
};
let yndQanak = document.getElementById('yndhanur-qanak');
let araqum = document.getElementsByName('araqum');
let gumar = document.getElementById('gumar');
let vjarum = document.getElementsByName('vjarum');
let patvirel = document.getElementById('patvirel')
let amboxjQanak = 0;
let amboxjGumar = 0;
qarter.forEach(item => {
    amboxjQanak += item.qanak
});
qarter.forEach(item =>{
    amboxjGumar += item.gin*item.qanak
})
yndQanak.textContent = amboxjQanak
gumar.textContent = amboxjGumar + "֏"
function updateStats() {

    let amboxjQanak = 0;
    let amboxjGumar = 0;

    qarter.forEach(item => {
        amboxjQanak += item.qanak;
        amboxjGumar += item.gin * item.qanak;
    });

    yndQanak.textContent = amboxjQanak;
    gumar.textContent = amboxjGumar + " ֏";

    localStorage.setItem("qart", JSON.stringify(qarter));
}
const minusBtns = document.querySelectorAll('.minus');
const plusBtns = document.querySelectorAll('.plus');
const deleteBtns = document.querySelectorAll('.pakel-btn');
const qanakSpans = document.querySelectorAll('.qanak1');
let popup = document.getElementById('popup');
minusBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (qarter[index].qanak > 1) {
            qarter[index].qanak--;
            qanakSpans[index].textContent = qarter[index].qanak;
            updateStats();
        }
    });
});
plusBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        qarter[index].qanak++;
        qanakSpans[index].textContent = qarter[index].qanak;
        updateStats();
    });
});
deleteBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        qarter.splice(index, 1);
        localStorage.setItem(
            "qart",
            JSON.stringify(qarter)
        );
        location.reload();
    });
});
let patvirelbtn = document.getElementById('patvirel')
patvirelbtn.addEventListener("click", () =>{
    if(qarter.length>0){
    localStorage.removeItem("qart");
    popup.classList.add('cuyc');
    setTimeout(()=>{
        popup.classList.remove('cuyc');
        window.location.href = "index.html#hederr";
    },2000)
    obyektner.innerHTML = ""
    }
    else{
        alert("Զամբյուղը դատարկ է։")
    }
})



