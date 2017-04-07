import { Component } from "@angular/core";
import { Model } from "./Model";
import {TodoItem} from "./TodoItem";

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html",
})

export class AppComponent {
    public model = new Model();

    public getName() {
        return this.model.user;
    }

    public getTodoItems() {
        if (this.model.showAll) {
            return this.model.items;
        }
        return this.model.items.filter( (item) => !item.done );
    }

    public addItem(itemText) {
        this.model.items.push(new TodoItem(itemText));
    }
}
