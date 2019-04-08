import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }
    ngOnInit(): void {
        // Init your component properties here.
        this.routerExtensions.navigate(["search/browse"]);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onButtonTap(): void {
        console.log('test');
    }
}
