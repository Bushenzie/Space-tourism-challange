

export class Element {
    constructor(){
        
    }

    Nav() {
        return {
            all: document.querySelectorAll("#list > li"),
            home: document.querySelector("li.home"),
            technology: document.querySelector("li.tech"),
            crew: document.querySelector("li.crew"),
            destination: document.querySelector("li.dest"),
        }
    }

    Content() {
        return {
            body: document.body,
            explore: document.querySelector(".explore"),
        }
    }

    PlanetSelection() {
        return {
            moon: document.querySelector("li#moon-select"),
            mars: document.querySelector("li#mars-select"),
            europa: document.querySelector("li#europa-select"),
            titan: document.querySelector("li#titan-select"),
        }
    }
}