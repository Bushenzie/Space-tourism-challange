import { Element } from "./elements";
import { Event } from "./events";
import { LC } from "./storage";

export const Events = new Event();
export const Storage = new LC();
export const Elements = new Element();


Events.SetNav();

if(!Storage.GetCurrentPage()) {
    Storage.SetCurrentPage("home");
    Storage.SetCurrentPlanet(0);
    Storage.LoadPage();
} else {
    Storage.LoadPage();
}

if(!Storage.GetCurrentPlanet()) {
    Storage.SetCurrentPlanet(0);
} 
