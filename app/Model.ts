export class Model {
    public user;
    public items;

    constructor() {
        this.user = "Alexander";
        this.items = [
            {action: "Buy Flowers", done: false},
            {action: "Get Shoes", done: false},
            {action: "Collect Tickets", done: true},
            {action: "Call Joe", done: false},
        ];
    }
}
