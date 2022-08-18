let coordinate: {x: number, y:number} = {x:34,y:42}

function printName(person: {first: string; last: string}): void {
    console.log(`${person.first} ${person.last}`);
}

function ramdonCoordinate(): {x:number, y:number} {
    return {x:5,y:4};
}

// Extra is ok as a variable, but not inline when passing to a functon
const singer = {first: "Mick", last: "Jagger", age:473, isAlive:true}
