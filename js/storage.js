import { Events } from "./index";

export class LC {
    constructor() {}

    GetCurrentPage() {
        return localStorage.getItem("page");
    }

    SetCurrentPage(page) {
        localStorage.setItem("page", page);

    }

    LoadPage() {
        Events.SwitchPage(localStorage.getItem("page"));
    }
}