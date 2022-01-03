export default class Item {
    id: string;
    name: string;

    constructor(
        id: string = "",
        name: string = ""
    ) {
        this.id = id;
        this.name = name;
    }
}