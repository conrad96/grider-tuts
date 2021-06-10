function makeColor(r, g, b)
{    
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    color.hex = function() {
        return '#'+ ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    return color;
}
let c1 = makeColor(140, 100, 200)

console.log(c1.hex());
console.log(c1.rgb());