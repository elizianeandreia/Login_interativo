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

