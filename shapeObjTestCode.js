//copy and paste this code at the end of your file
//then run it to see the output to the console.
//you may notice spelling errors: [Square] !== [square]


//creates the test
function test(){

console.log(`------ Rectangle Stuff ------`);
console.log(`sides = ${Rectangle.length} by ${Rectangle.width}`);
console.log(`perimeter = ${Rectangle.perimeter()}`);
console.log(`area = ${Rectangle.area()}\n`);

console.log(`------ Square Stuff ------`);
console.log(`side length = ${Square.sideLength}`);
console.log(`perimeter = ${Square.perimeter()}`);
console.log(`area = ${Square.area()}\n`);

console.log(`------ Circle Stuff ------`);
console.log(`radius = ${Circle.radius}`);
console.log(`circumference = ${Circle.circumference()}`);
console.log(`area = ${Circle.area()}\n`);

console.log(`------ Box Stuff ------`);
console.log(`sides = ${Box.length} by ${Box.width} by ${Box.height}`);
console.log(`perimeter = ${Rectangle.surfaceArea()}`);
console.log(`area = ${Rectangle.volume()}\n`);

console.log(`------ Sphere Stuff ------`);
console.log(`radius = ${Sphere.radius}`);
console.log(`circumference = ${Sphere.surfaceArea()}`);
console.log(`area = ${Sphere.volume()}\n`);

}
//runs the test
test();
