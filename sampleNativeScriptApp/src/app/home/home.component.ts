import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";


const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public index = 0;
    public pokemons: Array<string> = [];
    public pickerString: string;

    constructor() {
        // Use the component constructor to inject providers.
        for (let pokemon of pokemonList) {
            this.pokemons.push(pokemon);
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    // onListPickerLoaded(args): void {
    //     const listPickerComponent = args.object;
    //     const vm = listPickerComponent.page.bindingContext;
    //     listPickerComponent.on("selectedIndexChange", (lpargs) => {
    //         const listPicker = lpargs.object;
    //         vm.set("index", listPicker.selectedIndex);
    //         console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    //     });
    // }

    selectedIndexChanged(args): void {
        const picker = args;
        this.pickerString = this.pokemons[picker.selectedIndex];
        console.log("string print2",this.pickerString);
    }
}
