document.addEventListener("mousemove", (evento: MouseEvent) => {
  const pupilas = document.querySelectorAll<HTMLElement>(".pupila");

  pupilas.forEach((pupila) => {
    const caixaOlho = pupila.parentElement!.getBoundingClientRect();
    const centroX = caixaOlho.left + caixaOlho.width / 2;
    const centroY = caixaOlho.top + caixaOlho.height / 2;

    const angulo = Math.atan2(evento.clientY - centroY, evento.clientX - centroX);
    const deslocamentoX = Math.cos(angulo) * 10;
    const deslocamentoY = Math.sin(angulo) * 10;

    pupila.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px)`;
  });
});

const formulario = document.querySelector(".form-login") as HTMLFormElement;
const rostoNinja = document.querySelector(".rosto-ninja") as HTMLElement;
const mensagem = document.getElementById("mensagemSucesso") as HTMLElement;

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  rostoNinja.style.display = "none";
  formulario.style.display = "none"; 
  mensagem.classList.add("visivel");
});
