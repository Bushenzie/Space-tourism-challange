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

                Storage.SetCurrentTech(0);
                Storage.SetCurrentCrewMem(0);
                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);
                Elements.Content().explore.addEventListener("click",()=> {
                    this.SwitchPage("destination")
                });

            break;
            case "destination":
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-dest");
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

                Storage.SetCurrentTech(0);
                Storage.SetCurrentCrewMem(0);
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
                    <h3 class="sub-heading">${data.crew[Number(Storage.GetCurrentCrewMem())].role}</h3>
                    <h1 class="heading">${data.crew[Number(Storage.GetCurrentCrewMem())].name}</h1>
                    <p class="text">${data.crew[Number(Storage.GetCurrentCrewMem())].bio}</p>
                    <ul id="person-select">
                        <li id="commander-select"></li>
                        <li id="mission-select"></li>
                        <li id="pilot-select"></li>
                        <li id="engineer-select"></li>
                    </ul>
                </div>
                <div class="person">
                    <img src="${data.crew[Number(Storage.GetCurrentCrewMem())].images.png}">
                </div>
                ` 

                Storage.SetCurrentTech(0);
                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);

                switch(Storage.GetCurrentCrewMem()) {
                    case "0":
                        Elements.CrewSelection().commander.classList.add("selected");
                    break;
                    case "1":
                        Elements.CrewSelection().mission.classList.add("selected");
                    break;
                    case "2":
                        Elements.CrewSelection().pilot.classList.add("selected");
                    break;
                    case "3":
                        Elements.CrewSelection().engineer.classList.add("selected");
                    break;
                }

                Elements.CrewSelection().commander.addEventListener("click",()=> {
                    Storage.SetCurrentCrewMem(0);
                    this.LoadPage("crew");;
                })
                Elements.CrewSelection().mission.addEventListener("click",()=> {
                    Storage.SetCurrentCrewMem(1);
                    this.LoadPage("crew");
                })

                Elements.CrewSelection().pilot.addEventListener("click",()=> {
                    Storage.SetCurrentCrewMem(2);
                    this.LoadPage("crew");
                })

                Elements.CrewSelection().engineer.addEventListener("click",()=> {
                    Storage.SetCurrentCrewMem(3);
                    this.LoadPage("crew");
                })



            break;
            case "technology": 
                lowerPart.classList.add("lower-part");
                container.classList.add("lower-part-tech");
                container.innerHTML = 
                `
                <div class="selection">
                    <ul id="tech-selection">
                        <li id="launch-select">1</li>
                        <li id="spaceport-select">2</li>
                        <li id="capsule-select">3</li>
                    </ul>
                </div>
                <div class="text">
                    <h2 class="heading">${data.technologies[Storage.GetCurrentTech()].name}</h2>
                    <p class="text">${data.technologies[Storage.GetCurrentTech()].description}</p>
                </div>
                <img class="image id-${Storage.GetCurrentTech()}"></img>
                ` 

                Storage.SetCurrentCrewMem(0);
                Storage.SetCurrentPlanet(0);
                lowerPart.appendChild(container);
                Elements.Content().body.appendChild(lowerPart);

                switch(Storage.GetCurrentTech()) {
                    case "0":
                        Elements.TechSelection().launch.classList.add("selected");
                    break;
                    case "1":
                        Elements.TechSelection().spaceport.classList.add("selected");
                    break;
                    case "2":
                        Elements.TechSelection().capsule.classList.add("selected");
                    break;
                }

                Elements.TechSelection().launch.addEventListener("click",()=> {
                    Storage.SetCurrentTech(0);
                    this.LoadPage("technology");;
                })
                Elements.TechSelection().spaceport.addEventListener("click",()=> {
                    Storage.SetCurrentTech(1);
                    this.LoadPage("technology");
                })

                Elements.TechSelection().capsule.addEventListener("click",()=> {
                    Storage.SetCurrentTech(2);
                    this.LoadPage("technology");
                })

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