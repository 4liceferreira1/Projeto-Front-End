
/* =====================================
   DESCUBRA JP - GUIA TURÍSTICO
===================================== */

"use strict";


document.addEventListener("DOMContentLoaded", function () {

    console.log("Descubra JP iniciado com sucesso!");


    /* Seleção dos elementos do HTML */

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


    /* Verificação dos elementos */

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


        /* Fechar ao selecionar um link */

        linksMenu.forEach(function (link) {

            link.addEventListener("click", function () {

                fecharMenu();

            });

        });


        /* Fechar ao pressionar Escape */

        document.addEventListener("keydown", function (evento) {

            if (
                evento.key === "Escape" &&
                menuNavegacao.classList.contains("ativo")
            ) {

                fecharMenu();

                botaoMenu.focus();

            }

        });


        /* Fechar ao retornar para o desktop */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                fecharMenu();

            }

        });


        /* Ativa o menu interativo */

        document.documentElement.classList.add("js");

    }


    /* =====================================
       FORMULÁRIO DE CONTATO
    ===================================== */

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            console.log("Formulário demonstrativo.");

        });

    }

});
