
import { Elements } from "./index";
import { Storage } from "./index";

export class Event {
    constructor() {}


    SetNav() {
        Elements.Nav().home.addEventListener("click",() => {
            this.SwitchPage("home");
        });
        Elements.Nav().technology.addEventListener("click",() => {
            this.SwitchPage("technology");
        });
        Elements.Nav().crew.addEventListener("click",() => {
            this.SwitchPage("crew");
        });
        Elements.Nav().destination.addEventListener("click",() => {
            this.SwitchPage("destination");
        });
    }

    SetMain() {
        Elements.Content().explore.addEventListener("click",()=> {
            this.SwitchPage("destination");
        })
    }


    SwitchPage(page) {
        Elements.Content().body.removeAttribute("id");
        Elements.Content().body.setAttribute("id",page);
        
        [...Elements.Nav().all].forEach(el => {
            el.classList.remove("selected");
        })
        Storage.SetCurrentPage(String(page));
        Elements.Nav()[String(page)].classList.add("selected");
    }
}