class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return Math.PI * this.radius ** 2 * this.height;
    }
}

let Cylinder = newCylinder(5,10);
console.log(Cylinder.getVolume());