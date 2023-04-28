export const add = (a: number, b: number) => a+b;

export const mul = (a: number, b: number) => {
    return a*b;
}

export const add2 = (price: number) => {
    return add(2, price);
}

export const makeAdder = (offset: number) => 
    (price: number) => 
        add(offset, price);


export const mysteryAdder = makeAdder(420);

export const applyOperation = (array: number[], operation: (n: number) => number) => {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const value = operation(element);
        result.push(value);
    }
    return result;
};

export const applyToArray = 
    (operation: (n: number) => number) => 
        (array: number[]) => 
            applyOperation(array, operation);
