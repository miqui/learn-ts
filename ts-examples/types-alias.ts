type Person = {
    name: string;
    age: number;
}

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}`;
}

function doublePoint(point:  { x:number; y: number}): {
    x: number;
    y: number;
} {
    return { x: point.x *2, y: point.y *2};
}

type Point = {
    x: number;
    y: number;
}

function doublePoint2( point: Point): Point {
    return { x: point.x *2, y: point.y *2};
}

// z attrib is optional
type Point2 = {
    x: number;
    z?: number;
}

// readonly
type User2 = {
    readonly id: number;
    username: string;
}

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    
}

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}
type CatDog = Cat & Dog & {
    age: number;
}
