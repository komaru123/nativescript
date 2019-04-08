import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";


const pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    aravind = 'string';
    public pickerString : string;
    public index = 0;
    public pokemons: Array<string> = []
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

    onSliderLoaded(args) :void{
        const sliderComponent = args.object;
        sliderComponent.on("valueChange", (sargs) => {
            const page = sargs.object.page;
            const vm = page.bindingContext;
            console.log(`slider index: ${sargs.object.value}`);
            vm.set("index", sargs.object.value);
        });
    }
    onListPickerLoaded(args) : void{
        const listPickerComponent = args.object;
        const vm = listPickerComponent.page.bindingContext;
        listPickerComponent.on("selectedIndexChange", (lpargs) => {
            const listPicker = lpargs.object;
            vm.set("index", listPicker.selectedIndex);
            console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
        });
    }

    indexChanged(args):void{
        const item = <ListPicker>args.object;
        this.pickerString = this.pokemons[item.selectedIndex];
        console.log("string print4",this.pickerString);
    }
}
