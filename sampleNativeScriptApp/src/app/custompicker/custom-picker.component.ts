import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PlatformInformationService } from "../../services/injectables/plaform-information.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: "custom-picker",
    moduleId: module.id,
    templateUrl: "./custom-picker.component.html",
    styleUrls: ["./custom-picker.component.css"]
})
export class CustomPickerComponent implements OnInit {

    @Input() pickerItems: Array<string>;
    @Input() selectedIndex: Int16Array;
    @Input() pickerHint : string;
    @Output() selectedIndexChanged: EventEmitter<ListPicker> = new EventEmitter<ListPicker>();

    public isPickerVisible : boolean = true;

    constructor(public platformInformationService: PlatformInformationService) {
        // Use the component constructor to inject providers.
    }

    indexChanged(args): void {
        const item = <ListPicker>args.object;
        this.selectedIndexChanged.emit(item);
        console.log("string print5", this.pickerItems[item.selectedIndex]);
    }


    ngOnInit(): void {
        // Init your component properties here.
        this.getPlatformData();
    }

    getPlatformData(): void {
        console.log("platformDetails", this.platformInformationService.deviceInformation);
        console.log("platformDetails", this.platformInformationService.screenInformation);
    }

    doneButtonTapped(){
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}