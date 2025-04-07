export function add(x: number, y: number): number {
    return x + y;
}

export function sub(x: number, y: number): number {
    return x - y;
}

function test(name: string): string {
    return `This is ${name} here`;
}

export default test;

// export { add, sub }; // This also work