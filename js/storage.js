import { Events } from "./index";

export class LC {
    constructor() {}

    //Page save
    GetCurrentPage() {
        return localStorage.getItem("page");
    }

    SetCurrentPage(page) {
        localStorage.setItem("page", page);
    }

    //Planet save
    GetCurrentPlanet() {
        return localStorage.getItem("i");
    }

    SetCurrentPlanet(id) {
        localStorage.setItem("i", id);
    }

    //Crew save
    GetCurrentCrewMem() {
        return localStorage.getItem("x");
    }

    SetCurrentCrewMem(id) {
        localStorage.setItem("x", id);
    }

    //Tech save
    GetCurrentTech() {
        return localStorage.getItem("y");
    }

    SetCurrentTech(id) {
        localStorage.setItem("y", id);
    }

    LoadPage() {
        this.GetDataFromJSON();        
    }


    GetDataFromJSON() {
        FetchData()
            .then(results => {
                Events.SwitchPage(localStorage.getItem("page"),results);
            }).catch(err => {
                console.log(err);
            })

        async function FetchData() {
            const fetched = await fetch("../dist/data.json");
            const jsonData = await fetched.json();
            return {
                destinations: jsonData.destinations,
                crew: jsonData.crew,
                technologies: jsonData.technology,
            };
        }

    }
}