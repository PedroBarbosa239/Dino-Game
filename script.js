const start = document.querySelector("#container_start");
const recomecar = document.querySelector("#botao_reiniciar");

const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");

const gameover = document.querySelector("#container_gameover");
const score = document.querySelector("#score");

let boleano = false;


function comecar() {
    console.log("clicou em start 1")

    
    start.classList.remove("iniciar");
    start.classList.add("iniciar");

    cacto.classList.add("obstaculo");

    setInterval(()=>{
        start.style.display="none";
    },500)

    boleano = true;
}

let count = 0;

setInterval(()=>{
    if(boleano == true){
       
            score.innerText = `${count} score`;
            count++;
     
        
    } else {
        score.innerText = `${count} score`;
    }
},100)


function recomeco() {
    console.log("clicou em recomecar 1")

    gameover.style.opacity ="0";

    cacto.classList.add("obstaculo");
    cacto.classList.add("cacto");
    cacto.classList.remove("obstaculo_gamneover");

    boleano = true;
    count = 0;
}


    function pulo(event) {
        if(event.key === "ArrowUp" || event.key === " " ){

            dino.classList.add("pulo");

            setTimeout(function() {
                dino.classList.remove("pulo");
              },800);

        }
    }

        const loop = setInterval(()=>{

            const cactoRect = cacto.getBoundingClientRect();
            const cactoPosicaoL = cactoRect.left;

            const dinoRect = dino.getBoundingClientRect();
            const dinoPosicaoB = dinoRect.bottom;

            if(cactoPosicaoL <= 190 && dinoPosicaoB > 500){
  
                    cacto.classList.remove("obstaculo");
                    cacto.classList.remove("cacto");
                    cacto.classList.add("obstaculo_gamneover");
                    console.log(`game over cacto ${cactoPosicaoL} e dino ${dinoPosicaoB}`)

                    gameover.style.opacity ="1";
                    boleano = false;
            }

        },10);

    

start.addEventListener('click',comecar);

recomecar.addEventListener('click',recomeco);

document.addEventListener('keydown',pulo);