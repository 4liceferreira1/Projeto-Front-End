
/* =====================================
   DESCUBRA JP - GUIA TURÍSTICO
===================================== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    console.log("Descubra JP iniciado com sucesso!");


    /* =====================================
       SELEÇÃO DOS ELEMENTOS DO HTML
    ===================================== */

    const cabecalho = document.querySelector("header");

    const menuNavegacao =
        document.getElementById("menu-navegacao");

    const botaoMenu =
        document.getElementById("menu-toggle");

    const linksMenu =
        document.querySelectorAll("#menu-navegacao a");

    const secoes =
        document.querySelectorAll("main section");

    const formulario =
        document.getElementById("form-contato");

    const cards =
        document.querySelectorAll(".card");

    const feedback =
        document.getElementById("feedback-formulario");

    const botaoEnviar =
        document.getElementById("btn-enviar");


    /* =====================================
       VERIFICAÇÃO DOS ELEMENTOS
    ===================================== */

    console.log("Cabeçalho:", cabecalho);

    console.log("Menu de navegação:", menuNavegacao);

    console.log("Quantidade de links:", linksMenu.length);

    console.log("Quantidade de seções:", secoes.length);

    console.log("Formulário:", formulario);

    console.log("Quantidade de cards:", cards.length);


    /* =====================================
       MENU HAMBÚRGUER
    ===================================== */

    if (botaoMenu && menuNavegacao) {

        /* Função para fechar o menu */

        function fecharMenu() {

            menuNavegacao.classList.remove("ativo");

            botaoMenu.classList.remove("ativo");

            botaoMenu.setAttribute(
                "aria-expanded", "false"
            );

            botaoMenu.setAttribute(
                "aria-label", "Abrir menu"
            );

        }


        /* Abrir e fechar ao clicar */

        botaoMenu.addEventListener("click", function () {

            const menuAberto =
                menuNavegacao.classList.toggle("ativo");

            botaoMenu.classList.toggle(
                "ativo", menuAberto
            );

            botaoMenu.setAttribute(
                "aria-expanded", String(menuAberto)
            );

            if (menuAberto) {

                botaoMenu.setAttribute(
                    "aria-label", "Fechar menu"
                );

            } else {

                botaoMenu.setAttribute(
                    "aria-label", "Abrir menu"
                );

            }

        });


        /* Delegação de eventos no menu */

        menuNavegacao.addEventListener(
            "click", function (evento) {

                const link = evento.target.closest("a");

                if (link) {

                    fecharMenu();

                }

            }
        );


        /* Fechar ao pressionar Escape */

        document.addEventListener(
            "keydown", function (evento) {

                if (
                    evento.key === "Escape" &&
                    menuNavegacao.classList.contains("ativo")
                ) {

                    fecharMenu();

                    botaoMenu.focus();

                }

            }
        );


        /* Fechar ao retornar para o desktop */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                fecharMenu();

            }

        });


        /* Ativação do menu interativo */

        document.documentElement.classList.add("js");

    }


    /* =====================================
       FORMULÁRIO DE CONTATO
    ===================================== */

    if (formulario && feedback && botaoEnviar) {


        /* Função para exibir mensagens de feedback */

        function exibirFeedback(mensagem, tipo) {

            feedback.textContent = mensagem;

            feedback.classList.remove("sucesso", "erro");

            feedback.classList.add(tipo);

        }


        /* Evento de envio do formulário */

        formulario.addEventListener(
            "submit", function (evento) {

                evento.preventDefault();


                /* Captura dos dados informados */

                const nome =
                    document.getElementById("nome").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const assunto =
                    document.getElementById("assunto").value;

                const mensagem =
                    document.getElementById("mensagem").value.trim();


                /* Validação dos campos */

                if (
                    nome === "" ||
                    email === "" ||
                    assunto === "" ||
                    mensagem === ""
                ) {

                    exibirFeedback(
                        "Preencha todos os campos corretamente.",
                        "erro"
                    );

                    return;

                }


                /* Validação nativa do HTML */

                if (!formulario.checkValidity()) {

                    exibirFeedback(
                        "Verifique os dados informados.",
                        "erro"
                    );

                    formulario.reportValidity();

                    return;

                }


                /* Mensagem de sucesso */

                exibirFeedback(
                    `Obrigada, ${nome}! Sua mensagem foi processada com sucesso na simulação. Nenhum e-mail foi enviado.`,
                    "sucesso"
                );


                /* Limpeza dos campos */

                formulario.reset();


                /* Confirmação no console */

                console.log(
                    "Simulação de envio concluída com sucesso."
                );

            }
        );


        /* Limpeza do feedback ao editar os campos */

        formulario.addEventListener("input", function () {

            feedback.textContent = "";

            feedback.classList.remove("sucesso", "erro");

        });


        /* Habilitação do botão de envio */

        botaoEnviar.disabled = false;

    }

});
