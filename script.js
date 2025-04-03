const cartas = [
    { name: "A", img: "A"},
    { name: "A", img: "A"},
    { name: "B", img: "B"},
    { name: "B", img: "B"},
    { name: "C", img: "C"},
    { name: "C", img: "C"},
    { name: "D", img: "D"},
    { name: "D", img: "D"},
    ];
     //EMBARALHAR AS CARTAS
     cartas.sort(() => 0.5 - Math.random());

    
     //RENDERIZANDO AS CARTAS
     
     const jogo = document.querySelector("#jogo");
 
     const cartasElements = cartas.map(carta => {
         const cartaElement = document.createElement("div");
         cartaElement.classList.add("carta");
         cartaElement.dataset.name = carta.name;
         cartaElement.innerText = "?";
          return cartaElement
     });
 //O unico jeito q encontrei de adicionar os elementos no documento usando foreach:(
    cartasElements.forEach(cartaElement => {
     jogo.appendChild(cartaElement);
    });
    
   
