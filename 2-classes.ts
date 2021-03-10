class Animal {
    constructor(public name) {
        
    }
    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Dog extends Animal {
    move() {
        alert("Barking and running...");
        super.move(12);
    }
}

class Cat extends Animal{
    move() {
        alert("Roaring kitty meows to the peak of gamestop");
        super.move(600);
    }
}