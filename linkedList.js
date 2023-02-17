const obj = {
    value: 2,
    next: {
        value: 17,
        next: {
            value: 5,
            next: {
                value: 8,
                next: {
                    value: 15,
                    next: {
                        value: 2,
                        next: null
                    }
                }
            }
        }
    }
}

function listSum(node) {
    let sum = 0;
    while (node !== null) {
        sum += node.value;
        node = node.next;
    };
    return sum;
};

console.log(listSum(obj));
//write a function that takes an object with a similar structure to this one
//and returns a number, the sum of all the value properties in the list