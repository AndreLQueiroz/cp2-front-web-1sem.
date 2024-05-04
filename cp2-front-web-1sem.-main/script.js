//girando o banner sozinho
let imagens=['img/banner.png','img/banner2.png','img/banner3.png']; 
let index =0;
let time= 3000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

//CRIANDO O MENU HAMABURGUER

const btnMobile = document.querySelector("#btnMob")

function Menu(){
    //Declarando a variavel e pegando o id
    const navbar=document.querySelector("nav")
    navbar.classList.toggle("active")
}
/*evento que ao clicar vai chamar a função menu */
btnMobile.addEventListener("click",Menu);

