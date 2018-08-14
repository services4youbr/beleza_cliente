import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";


@Injectable()
export class ToastService{

    constructor(private toastCrtl: ToastController){

    }

    show(message: string, duration: number = 5000){

        return this.toastCrtl
        .create({
            message,
            duration
        })
        .present();
    }
}