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
        if(Elements.Content().body.querySelector(".lower-part")) {
            Elements.Content().body.querySelector(".lower-part").remove();
        }

        if(!data) {
            Storage.LoadPage();
            return;
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

                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);
                Elements.Content().explore.addEventListener("click",()=> {
                    this.SwitchPage("destination")
                });

            break;
            case "destination":
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-dist");
                container.innerHTML = 
                    `
                    <div class="planet-image">
                        <img src="${data.destinations[Number(Storage.GetCurrentPlanet())].images.png}">
                    </div>
                    <div class="text">
                        <ul id="planet-select">
                            <li id="moon-select">Moon</li>
                            <li id="mars-select">Mars</li>
                            <li id="europa-select">Europa</li>
                            <li id="titan-select">Titan</li>
                        </ul>
                        <h1 class="heading">${data.destinations[Number(Storage.GetCurrentPlanet())].name.toUpperCase()}</h1>
                        <p class="text">${data.destinations[Number(Storage.GetCurrentPlanet())].description}</p>
                        <div class="line"></div>
                        <div class="info">
                            <h3>${data.destinations[Number(Storage.GetCurrentPlanet())].distance.toUpperCase()}</h3>
                            <h3>${data.destinations[Number(Storage.GetCurrentPlanet())].travel.toUpperCase()}</h3>
                        </div>
                    </div>
                    ` 
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);

                switch(Storage.GetCurrentPlanet()) {
                    case "0":
                        Elements.PlanetSelection().moon.classList.add("selected");
                    break;
                    case "1":
                        Elements.PlanetSelection().mars.classList.add("selected");
                    break;
                    case "2":
                        Elements.PlanetSelection().europa.classList.add("selected");
                    break;
                    case "3":
                        Elements.PlanetSelection().titan.classList.add("selected");
                    break;
                }

                Elements.PlanetSelection().moon.addEventListener("click",()=> {
                    Storage.SetCurrentPlanet(0);
                    this.LoadPage("destination");;
                })
                Elements.PlanetSelection().mars.addEventListener("click",()=> {
                    Storage.SetCurrentPlanet(1);
                    this.LoadPage("destination");
                })

                Elements.PlanetSelection().europa.addEventListener("click",()=> {
                    Storage.SetCurrentPlanet(2);
                    this.LoadPage("destination");
                })

                Elements.PlanetSelection().titan.addEventListener("click",()=> {
                    Storage.SetCurrentPlanet(3);
                    this.LoadPage("destination");
                })
                


            break;
            case "crew": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-crew");
                container.innerHTML = 
                `
                <div class="text">
                    
                </div>
                <div class="explore">
                    
                </div>
                ` 

                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);
            break;
            case "technology": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-tech");
                container.innerHTML = 
                `
                <div class="text">
                    
                </div>
                <div class="explore">
                    
                </div>
                ` 
                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);
            break;
        }
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