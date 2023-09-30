const troca = document.querySelectorAll(".botao");
const persoSelect = document.querySelectorAll(".personagem");

troca.forEach(prox => {
    prox.addEventListener('click', () => {
            troca.forEach(tirar => {
                if (tirar.classList.contains("selecionado")) {
                    tirar.classList.remove("selecionado");
                    antigo();
                };
            })
        prox.classList.add("selecionado");
        novo();
    });
});

function antigo() {
    persoSelect.forEach(perso => {
        if (perso.classList.contains("selecionado")) {
            perso.classList.remove("selecionado");
        };
    });
}

function novo() {
    let cont = 0;
    let aux = 0;
    troca.forEach(verif => {
        if (verif.classList.contains("selecionado")) {
            aux = cont;
            console.log(cont, aux);
        };
        cont++;
    });
    cont = 0;
    persoSelect.forEach(perso => {
        console.log(cont, aux)
        if (cont == aux) {
            console.log(perso)
            perso.classList.add("selecionado");
        };
        cont++;
    });
};