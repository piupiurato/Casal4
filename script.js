const cenas = [
  { frase: "No meio de um mundo tão grande...", imagem: "img1.jpg" },
  { frase: "Eles se encontraram por acaso — ou destino?", imagem: "img2.jpg" },
  { frase: "Trocaram mensagens, risos, saudades...", imagem: "img3.jpg" },
  { frase: "Mesmo longe, os corações estavam bem perto.", imagem: "img4.jpg" },
  { frase: "E assim começou uma linda história de amor.", imagem: "img5.jpg" },
  { frase: "💖 'Te Amo Muito. Meu Amor' 💖", imagem: "img6.jpg" }
];

let indice = 0;
const trailer = document.querySelector(".trailer");
const imagemEl = document.getElementById("imagemAtual");
const fraseEl = document.getElementById("fraseAtual");
const botao = document.querySelector(".botao");

function assistirTrailer() {
  botao.style.display = "none"; // esconde botão
  trailer.classList.add("mostrar"); // mostra imagem e frase
  mostrarCena();

  const musica = document.getElementById("musica");
  musica.play().catch(() => {}); // prevenir erro de autoplay
}

function mostrarCena() {
  if (indice < cenas.length) {
    imagemEl.classList.remove("mostrar");
    fraseEl.classList.remove("mostrar");

    setTimeout(() => {
      imagemEl.src = cenas[indice].imagem;
      fraseEl.textContent = cenas[indice].frase;

      imagemEl.classList.add("mostrar");
      fraseEl.classList.add("mostrar");

      indice++;
      setTimeout(mostrarCena, 6000);
    }, 1000);
  }
}
