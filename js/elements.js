

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
        }
    }
}