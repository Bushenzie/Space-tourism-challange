

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
            allHam: document.querySelectorAll("#hamList > li"),
            hamburgerIcon: document.querySelector(".ham"),
            hamburgerMenu: document.querySelector(".ham-menu"),
            hamHome: document.querySelector("#hamList > li.home"),
            hamTechnology: document.querySelector("#hamList > li.tech"),
            hamCrew: document.querySelector("#hamList > li.crew"),
            hamDestination: document.querySelector("#hamList > li.dest")

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

    CrewSelection() {
        return {
            commander: document.querySelector("li#commander-select"),
            mission: document.querySelector("li#mission-select"),
            pilot: document.querySelector("li#pilot-select"),
            engineer: document.querySelector("li#engineer-select"),
            pic: document.querySelector(".person"),
        }
    }

    TechSelection() {
        return {
            launch: document.querySelector("li#launch-select"),
            spaceport: document.querySelector("li#spaceport-select"),
            capsule: document.querySelector("li#capsule-select"),
        }
    }
}