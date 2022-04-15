import { Events } from "./index";

export class LC {
    constructor() {}

    GetCurrentPage() {
        return localStorage.getItem("page");
    }

    SetCurrentPage(page) {
        localStorage.setItem("page", page);
    }

    GetCurrentPlanet() {
        return localStorage.getItem("i");
    }

    SetCurrentPlanet(id) {
        localStorage.setItem("i", id);
    }

    async LoadPage() {
        await this.GetDataFromJSON();        
    }

    GetDataFromJSON() {
        FetchData()
            .then(results => {
                Events.SwitchPage(localStorage.getItem("page"),results);
            }).catch(() => {
                console.log("error");
            })

        async function FetchData() {
            const fetched = await fetch("../dist/data.json");
            const jsonData = await fetched.json();
            return {
                destinations: jsonData.destinations,
                technologies: jsonData.technology,
                crew: jsonData.crew
            };
        }

    }
}