//Função do texto na horizontal - scroll para baixo
$("#scroll-baixo").click(() => { var heightPage = document.body.scrollHeight; window.scrollTo(0, heightPage); });

//Música na página
const lofiSound = new Audio('sound/lofi.mp3'); lofiSound.volume = 0.2; lofiSound.loop = true;

play = () => { lofiSound.play(); $("#play").prop("class", "fa-solid fa-pause"); };
pause = () => { lofiSound.pause(); $("#play").prop("class", "fa-solid fa-play"); };

$("#play").click(() => { lofiSound = (lofiSound.paused) ? play() : pause() });

//Função de copiar texto para a área de transferência
function execCopy() {
    $("#numero-whatsapp").select(); document.execCommand("copy");
    $("#texto-copiado").css("opacity", "1")
    setTimeout(() => { $("#texto-copiado").css("opacity", "0") }, 2000)
}
$("#copiar-clipboard").click(() => { execCopy(); });

//Mostrar a seta que move a página para o início da página
let windowWidth = +window.innerWidth;
setInterval(() => {
    if (window.pageYOffset > 250) {
        $(".seta").css("opacity", ".6");
        setTimeout(() => { $(".seta").css("display", "flex"); }, 400)
    } else {
        $(".seta").css("opacity", "0");
        setTimeout(() => { $(".seta").css("display", "none"); }, 400)
    };
    // Caso a janela seja menor que 1092px, executa:
    const textoMudado = document.querySelector("#mudar-texto");
    textoMudado.innerHTML = (windowWidth < 1092) ? "<p>Me mande um e-mail no formulário abaixo</p>" : "<p>Me mande um e-mail no formulário ao lado</p>";
}, 1000);

//Função para a seta mover para o início da página
$("#seta").click(() => { window.scrollTo(0, 0) });

//Menu desaparecer quando aparecer o rodapé da página
$(window).scroll(function () {
    if (windowWidth > 1092) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $(".menu").css("opacity", "0");
            setTimeout(() => { $(".menu").css("display", "none"); }, 400)

        } else {
            $(".menu").css("opacity", "1"); setTimeout(() => { $(".menu").css("display", "flex"); }, 400)
        };
    };
    if (windowWidth < 1092) {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 230) {
            $(".menu").css("opacity", "0");
            setTimeout(() => { $(".menu").css("display", "none"); }, 400);
        } else {
            $(".menu").css("opacity", "1");
            setTimeout(() => { $(".menu").css("display", "flex"); }, 400);
        };
    };
});