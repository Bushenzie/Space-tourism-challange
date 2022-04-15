import { Elements } from "./index";
import { Storage } from "./index";

export class Event {
    constructor() {}


    SetNav() {
        Elements.Nav().home.addEventListener("click",() => {
            this.SwitchPage("home");
            this.LoadPage("home");
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

    LoadPage(page,data) {
        let i = 2;
        if(Elements.Content().body.querySelector(".lower-part")) {
            Elements.Content().body.querySelector(".lower-part").remove();
        }

        if(!data) {
            Storage.LoadPage();
        }

        let lowerPart = document.createElement("div");
        let container = document.createElement("div");
        switch(page) {
            case "home": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-main");
                container.innerHTML = 
                `
                <div class="text">
                    <h3 class="sub-heading">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 class="heading">SPACE</h1>
                    <p class="text">Let's face it; If you want to go to space, you might as well genuinely go to outer space and not hober kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <div class="explore">
                    <h2>EXPLORE</h2>
                </div>
                `
                lowerPart.appendChild(container);
            break;
            case "destination":
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-dist");
                container.innerHTML = 
                    `
                    <div class="planet-image">
                        <img src="${data.destinations[i].images.png}">
                    </div>
                    <div class="text">
                        <h1 class="heading">${data.destinations[i].name.toUpperCase()}</h1>
                        <p class="text">${data.destinations[i].description}</p>
                        <div class="line"></div>
                        <div class="info">
                            <h3>${data.destinations[i].distance.toUpperCase()}</h3>
                            <h3>${data.destinations[i].travel.toUpperCase()}</h3>
                        </div>
                    </div>
                    ` 
                lowerPart.appendChild(container);
            break;
            case "crew": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-crew");
                container.innerHTML = 
                `
                <div class="text">
                    <h1 class="heading">SPACE</h1>
                    <p class="text">Let's face it; If you want to go to space, you might as well genuinely go to outer space and not hober kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <div class="explore">
                    <h2>EXPLORE</h2>
                </div>
                ` 
                lowerPart.appendChild(container);
            break;
            case "technology": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-tech");
                container.innerHTML = 
                `
                <div class="text">
                    <h1 class="heading">SPACE</h1>
                    <p class="text">Let's face it; If you want to go to space, you might as well genuinely go to outer space and not hober kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <div class="explore">
                    <h2>EXPLORE</h2>
                </div>
            ` 
            lowerPart.appendChild(container);
            break;
        }



        Elements.Content().body.appendChild(lowerPart);
    }


    SwitchPage(page,data) {
        Elements.Content().body.removeAttribute("id");
        Elements.Content().body.setAttribute("id",page);
        
        [...Elements.Nav().all].forEach(el => {
            el.classList.remove("selected");
        })
        Storage.SetCurrentPage(String(page));
        Elements.Nav()[String(page)].classList.add("selected");
        this.LoadPage(String(page),data);
    }
}