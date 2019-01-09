//Your code

let Rectangle = {
    length: 4,
    width: 10,

    perimeter: function(){
        let p = 2 * this.length + 2 * this.width;
        return p;
    },

    area: function(){
        let a = this.length * this.width;
        return a;
    }

}

let Square = {
    sideLength: 2,

    perimeter: function(){
        let p = 4*this.sideLength;
        return p;
    },

    area: function(){
        let a = this.sideLength * 2;
        return a;
    }
}

let Circle = {
    radius: 7,

    circumference: function(){
        let c = 2*this.radius * Math.pi;
        return c;
    },

    area: function(){
        let a = this.radius * this.radius * Math.pi;
        return a;
    }
}


//Dont forget about box and sphere
let Box = {
    length: 5,
    width: 3,
    height: 4,

    volume: function(){
        let v = this.length * this.width * this.height;
        return v;
    },

    surfaceArea: function(){
        let s = 2*(this.length * this.width) + 2*(this.length * this.height) + 2*(this.width * this. height);
        return s;
    }

}

let Sphere = {
    radius: 6,

    volume: function(){
        let v = 4/3 * Math.pi * this.radius * this.radius * this.radius;
        return v;
    },

    surfaceArea: function(){
        let s = 4 * Math.pi * this.radius * this.radius;
        return s;
    }
}




//------------------------------------------------
//copy paste test code when you finish under here
