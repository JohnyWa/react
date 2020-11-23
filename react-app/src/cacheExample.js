const cachedSum = () => {
    const cache = {};

    return (a, b) => {
        const key = `'${a}:${b}'`;
        console.log('cache', cache);

        if(cache[key]) {
            console.log('Data from cache');
            return cache[key]
        } else {
            const sum = a + b;
            cache[key] = sum;
            console.log('Data');
            return sum
        }
    }
}

const sum = cachedSum();
