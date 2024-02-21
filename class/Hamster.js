import Pet from './Pet.js';

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'hamster';
        this.sound = 'Niom niom';
        this.emoji = '🐹🐹';
    }

}

export default Hamster;