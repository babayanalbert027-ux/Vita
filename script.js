let LastScroll=0;
let menuclick = false;

const nav=document.querySelector('nav');
window.addEventListener("scroll",()=>{
    if(menuclick) return;
    let currentScroll = window.pageYOffset;

    if(currentScroll<=10){
        nav.classList.remove("apaki");
        nav.classList.remove("pahel");
        nav.classList.add("sovorakan");
    }
    else if(currentScroll>LastScroll){
        nav.classList.add("pahel");
    }
    else{
        nav.classList.remove("pahel");
        nav.classList.add("apaki");
        nav.classList.remove("sovorakan");
    }
    LastScroll=currentScroll
})
document.querySelectorAll('nav ul a').forEach(link =>{
    link.addEventListener("click", function(){
        menuclick= true;

        nav.classList.remove("pahel");
        nav.classList.add("apaki");

        setTimeout(()=> {
            menuclick=false;
            nav.classList.remove('apaki')
            nav.classList.add('pahel')
        }, 2500);
    });
});
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2')
const join = document.getElementById('join');
const pakel = document.getElementById('pakel');
const pakel2 = document.getElementById('pakel2')
const grancvelu = document.getElementById('grancvelu');
const mtnelu = document.getElementById('mtnelu');
let dursgal = document.getElementById('durs-gal')
join.addEventListener("click", ()=>{
    let aktiv = localStorage.getItem("aktiv")
    
    if(aktiv){
      popup2.classList.add("cuyc") 
      document.body.style.overflow = "hidden" 
    }
    else{
        popup.classList.add("cuyc");
        document.body.style.overflow = "hidden";
    }
});
pakel2.addEventListener("click", ()=>{
    popup2.classList.remove("cuyc")
    document.body.style.overflow = "auto"
})
pakel.addEventListener("click", ()=>{
    popup.classList.remove("cuyc");
    document.body.style.overflow = "auto"
});
popup.addEventListener("click", (e)=>{
    if(e.target === popup){
        popup.classList.remove('cuyc');
        document.body.style.overflow = "auto"
    }
});
dursgal.addEventListener("click", ()=>{
    localStorage.removeItem("aktiv");
    popup2.classList.remove("cuyc");
    document.body.style.overflow ="auto"
    stugel()
})
document.getElementById('grancvel').addEventListener("click", () =>{
    mtnelu.style.display ="none";
    grancvelu.style.display ="block";
})

document.getElementById('mtnel').addEventListener("click", () =>{
    mtnelu.style.display ="block";
    grancvelu.style.display ="none";
})

let mtnel = document.querySelector('#mtnelu button')
let grancvel = document.querySelector('#grancvelu button')

grancvel.addEventListener("click", () => {

    let anun = document.getElementById('anun1').value.trim();
    let parol = document.getElementById('parol1').value.trim();
    let mail = document.getElementById('mail').value.trim();

    if(anun == "" || parol == "" || mail ==""){
        alert("Լրացրու բոլոր դաշտերը");
        return;
    }
    let userner = JSON.parse(localStorage.getItem("userner")) || [];
    let krkrnvox = userner.find(user => user.anun === anun);
    let krknvoxMail = userner.find(user => user.mail === mail)

    if(krkrnvox){
        alert("Այս մուտքանունով օգտատեր արդեն կա");
        document.getElementById('anun1').value = "";
        return;
    }
    if(krknvoxMail){
        alert("Այս էլ․ հասցեով օգտատեր արդեն կա");
        document.getElementById('mail').value = "";
        return;
    }
    userner.push({
        anun:anun,
        parol:parol,
        mail:mail,
    })
    localStorage.setItem("userner", JSON.stringify(userner));
    alert("Գրանցումը հաջողվեց");
     
    grancvelu.style.display = "none";
    mtnelu.style.display = "block";

    document.getElementById('anun1').value = "";
    document.getElementById('parol1').value = "";
    document.getElementById('mail').value = "";

})

mtnel.addEventListener("click",()=>{
    stugel()
    let login = document.getElementById('anun').value.trim();
    let pasword = document.getElementById('parol').value.trim();

    let userner = JSON.parse(localStorage.getItem("userner")) || [];
    let grancvac = userner.find(user =>
        user.anun === login &&
        user.parol === pasword
    )
    if(login=="" || pasword ==""){
            alert("Լրացրու բոլոր դաշտերը")
            return;
        }
    if(grancvac){
        localStorage.setItem("aktiv", login)
        alert("Բարի գալուստ" + login);
        document.getElementById('anun').value = "";
        document.getElementById('parol').value = "";
        popup.classList.remove('cuyc');
        stugel()
    }
    else{
        alert("Սխալ մուտքանուն կամ գաղտնաբառ")
        document.getElementById('anun').value = "";
        document.getElementById('parol').value = "";
    }
})
function stugel(){
    let aktiv = localStorage.getItem("aktiv")
    if(aktiv){
        join.innerHTML=`
<svg width="22" height="22" viewBox="0 0 24 24" fill="#eaeaea">
<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
</svg>
` + aktiv
    }
    else{
        join.innerHTML ="Միանալ"
    }
}