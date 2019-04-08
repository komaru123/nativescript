import {Injectable} from "@angular/core";

import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

class DeviceInfo {
    constructor(
        public model: string,
        public deviceType: string,
        public os: string,
        public osVersion: string,
        public sdkVersion: string,
        public language: string,
        public manufacturer: string,
        public uuid: string
    ) { }
}

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}

@Injectable()
export class PlatformInformationService{
    public deviceInformation: DeviceInfo;
    public screenInformation: ScreenInfo;

    constructor() {
        this.deviceInformation = new DeviceInfo(
            device.model,
            device.model,
            device.os,
            device.osVersion,
            device.sdkVersion,
            device.language,
            device.manufacturer,
            device.uuid);
        this.screenInformation = new ScreenInfo(
            screen.mainScreen.heightDIPs,
            screen.mainScreen.heightPixels,
            screen.mainScreen.scale,
            screen.mainScreen.widthDIPs,
            screen.mainScreen.widthPixels);
    }
}