export class TodoItem {
    public action;
    public done;

    constructor(text, complete = false) {
        this.action = text;
        this.done = complete;
    }
}
