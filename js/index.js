import { Element } from "./elements";
import { Event } from "./events";
import { LC } from "./storage";

export const Elements = new Element();
export const Events = new Event();
export const Storage = new LC();

document.addEventListener("load", ()=> {

})

console.log(Storage.GetCurrentPage());
Events.SetNav();
Events.SetMain();

if(!Storage.GetCurrentPage()) {
    Storage.SetCurrentPage("home");
    Storage.LoadPage();
} else {
    Storage.LoadPage();
}