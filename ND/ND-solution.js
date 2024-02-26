class Animal {
    constructor() {
        this.soundRepeatCound = 0;
        this.sound = '';
    }
    voice() {
        const text = Array(this.soundRepeatCound).fill(this.sound);
        // 1 variantas
        // const text = [];
        // for (let i = 0; i < this.soundRepeatCound; i++) {
        //     // text.push(this.sound);
        //     text[i] = this.sound;
        // }

        // 2 variantas
        // if (this.soundRepeatCound > 0) {
        //     text[0] = this.sound[0].toUpperCcase() + this.sound.slice(1);
        // }

        // return text.join(' ') + '.';

        // 3 variantas
        voice(){
            if (this.soundRepeatCound === 0) {
                return '.';
            }
            const firstWord = this.sound[0].toUpperCase() + this.sound.slice(1);
            return firstWord + (' ' + this.sound).repeat(this.soundRepeatCound - 1) + '.';
        }
    }
}

class Pet extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 2;
        this.sound = 'naminis';
    }
}

class Fish extends Animal { }
class Bird extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 3;
        this.sound = 'paukstis';
    }
}

Class Dog extends Pet {
    constructor(){
        super();
        this.sound = 'suo';
    }
}
Class Cat extends Pet {
    constructor(){
        super();
        this.sound = 'kate';
    }
}
Class Hamster extends Pet {
    constructor(){
        super();
        this.sound = 'ziurkenas';
    }
}

Class Shark extends Fish { }
Class GoldFish extends Fish { }
Class Dolphin extends Fish {
    constructor() {
        super();
        this.soundRepeatCound = 5;
        this.sound = '§delfinas';
    }

Class Parrot extends Bird {
        constructor(){
            super();
            this.sound = 'papuga';
        }
    }
Class Canary extends Bird {
        constructor(){
            super();
            this.sound = 'kanarele';
        }
    }
Class Stark extends Bird {
        constructor(){
            super();
            this.sound = 'gandras';
        }
    }

    const suo = new Dog();
    const kate = new Cat();
    const ziurkenas = new Hamster();

    const papuga = new Parrot();
    const kanarele = new Canary();
    const gandras = new Stark();

    const ryklys = new Shark();
    const auksineZuvele = new GoldFish();
    const delfinas = new Dolphin();

    console.log('suo' suo.voice);
    console.log('papuga' papuga.voice);
    console.log('ryklys' ryklys.voice);


