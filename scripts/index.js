document.addEventListener('DOMContentLoaded', function () {

    const allProjects = document.querySelector('#all-projects');
    const javascript = document.querySelector('#javascript');
    const jquery = document.querySelector('#jquery');
    const nodeJS = document.querySelector('#nodeJS');
    const express = document.querySelector('#express');
    const mysql = document.querySelector('#mysql');
    const commandLine = document.querySelector('#command-line');
    const jsCards = document.querySelectorAll('.javascript')
    const expressCards = document.querySelectorAll('.express')
    const nodeJSCards = document.querySelectorAll('.nodeJS')
    const mysqlCards = document.querySelectorAll('.mysql')
    const cliCards = document.querySelectorAll('.commandline')
    const jQueryCards = document.querySelectorAll('.jquery')
    const allCards = document.querySelectorAll('.all-lang')


    const viewProjects = (event) => {
        const id = event.target.id
        switch (id) {
            case 'all-projects':
                for (let card of allCards) {
                    card.style.display = "block";
                };
                break;
            case 'javascript':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of jsCards) {
                    card.style.display = "block";
                };
                break;
            case 'nodeJS':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of nodeJSCards) {
                    card.style.display = "block";
                };
                break;
            case 'express':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of expressCards) {
                    card.style.display = "block";
                };
                break;
            case 'mysql':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of mysqlCards) {
                    card.style.display = "block";
                };
                break;
            case 'jquery':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of jQueryCards) {
                    card.style.display = "block";
                };
                break;
            case 'command-line':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of cliCards) {
                    card.style.display = "block";
                };
                break;

        }
    }


    allProjects.addEventListener('click', viewProjects)
    javascript.addEventListener('click', viewProjects)
    jquery.addEventListener('click', viewProjects)
    nodeJS.addEventListener('click', viewProjects)
    express.addEventListener('click', viewProjects)
    mysql.addEventListener('click', viewProjects)
    commandLine.addEventListener('click', viewProjects)


}, false);