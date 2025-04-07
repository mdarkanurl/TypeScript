function sum(str: string, ...number: number[]) {
    let num = 0
    for(let i = 0; i < number.length; i++) {
        num += number[i];
    } 

    return `${str} ${num}`;
}

console.log(
    sum('The sum of those number you provided is:',
         12, 20, 8, 11
        )
    );

function getLength(name: string): number;
function getLength(names: string[]): number;
function getLength(nameOrNames: unknown): number {
    if(typeof nameOrNames === 'string') {
        return nameOrNames.length;
    } else if(Array.isArray(nameOrNames)) {
        return nameOrNames.length;
    }

    return 0;
};

console.log(getLength('Watermelon'));
console.log(getLength(['Watermelon', 'Mango']));