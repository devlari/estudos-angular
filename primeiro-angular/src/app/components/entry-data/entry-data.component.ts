import { Component } from "@angular/core";

@Component({
    selector: "app-entry-data",
    templateUrl: "./entry-data.component.html",
    styleUrls: ["./entry-data.component.css"]
})

export class EntryDataComponent {
    placeholder: string = "Email"
    placepass:string = "Senha"
    color:string = "red"
}