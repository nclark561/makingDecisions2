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

let sum = 0;

function listSum(node) {
    if (node !== null) {
        sum += node.value;
        node = node.next;
        listSum(node);
    };
    return sum;
};

console.log(listSum(obj));