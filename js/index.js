import { Element } from "./elements";
import { Event } from "./events";
import { LC } from "./storage";

export const Elements = new Element();
export const Events = new Event();
export const Storage = new LC();


Events.SetNav();

if(!Storage.GetCurrentPage()) {
    Storage.SetCurrentPage("home");
    Storage.LoadPage();
    Events.SetMain();
} else {
    Storage.LoadPage();
}
