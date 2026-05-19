let obyektner = document.getElementById('obyektner');
let qarter = JSON.parse(localStorage.getItem("qart"));
for(i=0;i<qarter.length;i++){
    let { id, anun, gin, nkar, qanak} = qarter[i];
    obyektner.innerHTML +=`
    <div class="qart">
        <div>
            <img class="nkar" src="${nkar}" alt="">
        </div>

        <div class="tvyalner">
            <p>${anun}</p>
            <p>${gin}</p>
            <p> <button id="minus">-</button>${qanak}<button id="plus">+</button></p>
        </div>
        <div>
            <span id="pakel">&times;</span>
        </div>
    </div>
    `
    document.getElementById('minus').addEventListener("click", ()=>{
        if(qanak>1){
            qanak--;
        }
    })
};




