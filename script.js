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
document.getElementById('verev').addEventListener("click", ()=>{
    window.scrollTo({
        top:0
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
    let erroranun1 = document.getElementById('error-anun1');
    let errormail = document.getElementById('error-mail');
    let errorparol1 = document.getElementById('error-parol1');
    let zgushacum = document.getElementById('popup-alert');
    let zgushacum1 = document.getElementById('alert-text');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const erkar = parol.length

    erroranun1.innerText =""
    errorparol1.innerText =""
    errormail.innerText =""
    let sxal = false;
    if(anun == ""){
        erroranun1.innerText ="Լրացրու մուտքանուն դաշտը";
        sxal = true;
    }
    if(erkar < 8){
        errorparol1.innerText ="Պետք է պարունակի առնվազն 8 սիմվոլ";
        sxal = true;
    }
    if(mail ==""){
        errormail.innerText ="Լրացրու Էլ․հասցե դաշտը";
        sxal = true
    }
    if(!emailRegex.test(mail)){
        errormail.innerText ="Տվյալ Էլ․ հասցեն չի գտնվել";
        sxal = true
    }
    if(sxal){
        return
    }
    let userner = JSON.parse(localStorage.getItem("userner")) || [];
    let krkrnvox = userner.find(user => user.anun === anun);
    let krknvoxMail = userner.find(user => user.mail === mail)
    if(krkrnvox){
        erroranun1.innerText ="Այս մուտքանունով օգտատեր արդեն կա";
        document.getElementById('anun1').value = "";
        return;
    }
    if(krknvoxMail){
        errormail.innerText ="Այս էլ․ հասցեով օգտատեր արդեն կա";
        document.getElementById('mail').value = "";
        return;
    }
    userner.push({
        anun:anun,
        parol:parol,
        mail:mail,
    })
    localStorage.setItem("userner", JSON.stringify(userner));
    grancvelu.style.display = "none";
    zgushacum1.innerText ="Գրանցումը հաջողվեց"
    zgushacum.style.display = "flex"
    setTimeout(() =>{
        mtnelu.style.display = "block";
        zgushacum.style.display ="none";
        zgushacum1.innerText ="";
    },1000)
    

    document.getElementById('anun1').value = "";
    document.getElementById('parol1').value = "";
    document.getElementById('mail').value = "";

})
mtnel.addEventListener("click",()=>{
    stugel()
    let login = document.getElementById('anun').value.trim();
    let pasword = document.getElementById('parol').value.trim();
    let erroranun = document.getElementById('error-anun');
    let errorparol = document.getElementById('error-parol')
    let userner = JSON.parse(localStorage.getItem("userner")) || [];
    let zgushacum = document.getElementById('popup-alert');
    let zgushacum1 = document.getElementById('alert-text');
    let sxal = false
    let grancvac = userner.find(user =>
        user.anun === login &&
        user.parol === pasword
    )
    erroranun.innerText ="";
    errorparol.innerText ="";
    if(login==""){
        erroranun.innerText ="Լրացրու մուտքանուն դաշտը";
        sxal = true
    }
    if(pasword==""){
        errorparol.innerText ="Լրացրու գաղտնաբառ դաշտը";
        sxal = true
    }
    if(sxal){
        return
    }
    if(grancvac){
        localStorage.setItem("aktiv", JSON.stringify(grancvac));
        zgushacum1.innerText =`Բարի գալուստ, ${login}`;
        zgushacum.style.display = "flex"
        mtnelu.style.display ="none"
        setTimeout(() =>{
            popup.classList.remove('cuyc');
            document.body.style.overflow = "auto"
            mtnelu.style.display ="block"
            zgushacum.style.display ="none";
            zgushacum1.innerText ="";
        },1000)
        document.getElementById('anun').value = "";
        document.getElementById('parol').value = "";
        stugel()
    }
    else{
        erroranun.innerText ="Սխալ մուտքանուն կամ գաղտնաբառ";
        errorparol.innerText ="Սխալ մուտքանուն կամ գաղտնաբառ";
        document.getElementById('anun').value = "";
        document.getElementById('parol').value = "";
    }
})
function stugel(){
    let aktiv = localStorage.getItem("aktiv")
    if(aktiv){
        aktiv = JSON.parse(aktiv);
        join.innerHTML=`
<svg width="22" height="22" viewBox="0 0 24 24" fill="#eaeaea">
<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
</svg>
` + aktiv.anun
    }
    else{
        join.innerHTML ="Միանալ"
    }
}
stugel()


emailjs.init("kac_Mn8StJkoESEsC");
let contactForm = document.getElementById('contact-form');
function setError(fieldName, message) {
    const errorElement = document.querySelector(
        `[data-error-for="${fieldName}"]`
    );
    if (errorElement) {
        errorElement.innerText = message;
    }
}
function clearErrors() {
    document.querySelectorAll('.error').forEach((error) => {
        error.innerText = "";
    });
}
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    clearErrors();


    let anun = document.getElementById('name').value.trim();
    let namak = document.getElementById('namak').value.trim();
    let aktiv = localStorage.getItem("aktiv")
    let eror = false
    if (!aktiv){
        setError("name", "Մուտք գործեք համակարգ");
        setError("namak", "Մուտք գործեք համակարգ");
        return;
    }
    if (anun === "") {
        setError("name", "Լրացրու անունը");
        eror = true;
    }
    if (namak === "") {
        setError("namak", "Լրացրու հաղորդագրությունը");
        eror = true;
    }
    if(eror){
        return
    }
    aktiv = JSON.parse(aktiv);
    let userMail = aktiv.mail;
    let zgushacum = document.getElementById('popup-alert');
    let zgushacum1 = document.getElementById('alert-text');
    let popup = document.getElementById('popup');
    let mtnelu = document.getElementById('mtnelu');
    let grancvelu = document.getElementById('grancvelu');
    let pakel = document.getElementById('pakel')
    emailjs.send(
        "service_ab6p2pb",
        "template_89h0uuh",
        {
            from_name: anun,
            message: namak,
            user_email: userMail
        }
    )
    .then(() => {
        zgushacum1.innerText ="Հաղորդագրությունն ուղարկվել է"
        popup.style.display = "flex"
        mtnelu.style.display = "none"
        grancvelu.style.display = "none"
        pakel.style.display = "none"
        zgushacum.style.display = "flex"
        document.body.style.overflow ="hiden"
        setTimeout(() =>{
            zgushacum.style.display ="none";
            popup.style.display = "none"
            zgushacum1.innerText ="";
            document.body.style.overflow ="auto"
        },1500)
        contactForm.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Սխալ է տեղի ունեցել");
    });
});

let burger = document.getElementById('burger');
let burger2 = document.getElementById('burger2');
let mobileNavbar = document.getElementsByClassName('mobile-navbar')[0];
burger.addEventListener("click",()=>{
    mobileNavbar.classList.add("aktiv");
    nav.style.display = "none"
    burger2.style.display = "block"
    document.body.style.overflow="hidden"
});
burger2.addEventListener("click",()=>{
    mobileNavbar.classList.remove("aktiv");
    nav.style.display = "flex"
    burger2.style.display = "none"
    document.body.style.overflow="auto"
})
let aaa = document.getElementsByClassName('aaa');
for(let i = 0; i< aaa.length; i++){
    aaa[i].addEventListener("click",()=>{
    mobileNavbar.classList.remove("aktiv");
    nav.style.display = "flex"
    burger2.style.display = "none"
    document.body.style.overflow="auto"
})
}
