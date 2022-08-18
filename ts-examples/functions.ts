function square(num:number) {
    return num * num;
}

function greet(person:string = "stranger"): string {
    return `hi there, ${person}`
}


const doSomething = (person: string, age: number, isFunny: boolean) => {}

doSomething(14, "hey", true);

doSomething("hey",14, true);



const addNums = (x: number, y: number): number => {
    return x * y;
}

addNums(2,2);


// union return 
function rando(num: number) {
    if( Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const colors = ["red", "orange", "blue"];

colors.map(colors => {
    return colors.toUpperCase();
})

const giveError = (msg: string): never => {
    throw new Error(msg);
}

giveError("hey");