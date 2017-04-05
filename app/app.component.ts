import { Component } from "@angular/core"
import { Model } from "./Model"

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    public model = new Model();

    public getName() {
        return this.model.user;
    }

    public getTodoItems() {
        return this.model.items;
    }
}