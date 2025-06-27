document.addEventListener("mousemove", function (evento) {
    var pupilas = document.querySelectorAll(".pupila");
    pupilas.forEach(function (pupila) {
        var caixaOlho = pupila.parentElement.getBoundingClientRect();
        var centroX = caixaOlho.left + caixaOlho.width / 2;
        var centroY = caixaOlho.top + caixaOlho.height / 2;
        var angulo = Math.atan2(evento.clientY - centroY, evento.clientX - centroX);
        var deslocamentoX = Math.cos(angulo) * 10;
        var deslocamentoY = Math.sin(angulo) * 10;
        pupila.style.transform = "translate(".concat(deslocamentoX, "px, ").concat(deslocamentoY, "px)");
    });
});
