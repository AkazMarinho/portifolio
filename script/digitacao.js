let digitar = document.querySelector(".digitar");
let texto = digitar.innerHTML;
let i = 0;

const digitacao = () => {
    digitar.innerHTML = digitar.innerHTML.replace('|', '');

    if(texto.length > i){
        if(i == 0){
            digitar.innerHTML = texto.charAt(i);
        } else{
            digitar.innerHTML += texto.charAt(i);
        }

        digitar.innerHTML += '|';
        i++;
        setTimeout(digitacao, 50);
    }
}
digitacao();

//---------------------------- p 2  ----------------------------


let digitar2 = document.querySelector(".digitar2");

const alt = () => {
    digitar2.classList.toggle("toogle");
    digitacao2();
}
setTimeout(alt, 2500);

let texto2 = digitar2.innerHTML;
j = 0;

const digitacao2 = () => {
    digitar2.innerHTML = digitar2.innerHTML.replace('|', '');
    
    if(texto2.length > j){
        if(j == 0){
            digitar2.innerHTML = texto2.charAt(j);
        } else{
            digitar2.innerHTML += texto2.charAt(j);
        }
        
        digitar2.innerHTML += '|';
        j++;
        setTimeout(digitacao2, 50);
    }
}


//---------------------------- container tecnologia ----------------------------

let digi_tech = document.querySelector('.eu-tech');
let position_y = document.querySelector('.position_y');
let text_tech = digi_tech.innerHTML;
h = 0;



const digitacao_tech = () => {
    digi_tech.innerHTML = digi_tech.innerHTML.replace('|', '');
    
    if(text_tech.length > h){
        if(h == 0){
            digi_tech.innerHTML = text_tech.charAt(h);
        } else{
            digi_tech.innerHTML += text_tech.charAt(h);
        }
        
        digi_tech.innerHTML += '|';
        h++;
        setTimeout(digitacao_tech, 25);
    }
}



const tech_altu = () =>{
    const altura_topo = window.pageYOffset // + ((window,innerHeight * 3) / 4);
    if(altura_topo > (position_y.offsetTop + 500)){

        
        position_y.classList.remove("toogle");
        digitacao_tech();
    }
}



window.addEventListener('scroll', () => {
    tech_altu();
});
