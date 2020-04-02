document.addEventListener('DOMContentLoaded', function () {

    const allProjects = document.querySelector('#all-projects');
    const javascript = document.querySelector('#javascript');
    const jquery = document.querySelector('#jquery');
    const ruby = document.querySelector('#ruby');
    const typescript = document.querySelector('#typescript');
    const python = document.querySelector('#python');
    const go = document.querySelector('#go');
    const jsCards = document.querySelectorAll('.javascript')
    const tsCards = document.querySelectorAll('.typescript')
    const jQueryCards = document.querySelectorAll('.jquery')
    const pyCards = document.querySelectorAll('.python')
    const ruCards = document.querySelectorAll('.ruby')
    const goCards = document.querySelectorAll('.go')
    const allCards = document.querySelectorAll('.all-lang')


    const viewProjects = (event) => {
        const id = event.target.id
        switch (id) {
            case 'javascript':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of jsCards) {
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
            case 'ruby':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of ruCards) {
                    card.style.display = "block";
                };
                break;
            case 'typescript':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of tsCards) {
                    card.style.display = "block";
                };
                break;
            case 'python':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of pyCards) {
                    card.style.display = "block";
                };
                break;
            case 'go':
                for (let card of allCards) {
                    card.style.display = "none";
                };
                for (let card of goCards) {
                    card.style.display = "block";
                };
                break;
            default:
                for (let card of allCards) {
                    card.style.display = "block";
                };
        }
    }


    allProjects.addEventListener('click', viewProjects)
    javascript.addEventListener('click', viewProjects)
    jquery.addEventListener('click', viewProjects)
    ruby.addEventListener('click', viewProjects)
    typescript.addEventListener('click', viewProjects)
    python.addEventListener('click', viewProjects)
    go.addEventListener('click', viewProjects)


}, false);