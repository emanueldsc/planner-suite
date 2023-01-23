export class Item {
    
    constructor(
        public name: string,
        public value: number,
        public times: number
    ){}
    
    get total() {
        return this.value * this.times
    }

}