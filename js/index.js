import { Element } from "./elements";
import { Event } from "./events";
import { LC } from "./storage";

export const Events = new Event();
export const Storage = new LC();
export const Elements = new Element();


Events.SetNav();


//Hamburger fix if resizing and menu opened
window.addEventListener("resize", () => {
    if(document.body.clientWidth > 767) {
        Elements.Nav().hamburgerMenu.classList.add("not-visible");
    }

    if(document.body.clientWidth > 767 && Elements.Nav().hamburgerIcon.classList.contains("opened")) {
        Elements.Nav().hamburgerIcon.classList.remove("opened");
        Elements.Nav().hamburgerIcon.classList.add("closed");
    }
})


if(!Storage.GetCurrentPage()) {
    Storage.SetCurrentPage("home");
    Storage.SetCurrentPlanet(0);
}   

if(!Storage.GetCurrentPlanet()) {
    Storage.SetCurrentPlanet(0);
} 

if(!Storage.GetCurrentCrewMem()) {
    Storage.SetCurrentCrewMem(0);
} 

if(!Storage.GetCurrentTech()) {
    Storage.SetCurrentTech(0);
}

Storage.LoadPage();