// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function nonNegativeNumber(n) {
    if (typeof n !== 'number'
        || n < 0
        || !isFinite(n)) {
        return false
    }
    return true;
}

function nonNegativeInteger(n) {
    if (!nonNegativeNumber(n) || n % 1 !== 0) {
        return false
    }
    return true;
}

function nonEmptyString(s) {
    if (typeof s !== 'string'
        || s.trim() === '') {
        return false
    }
    return true;
}

function correctObject(obj, size) {
    if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)
        || Object.keys(obj).length !== size) {
        return false;
    }
    return true;
}

function printList(list) {
    const availableCurrency = ['Eur', 'Usd', 'Lit'];
    let table = [];

    let i = 0;
    for (const item of list) {
        const { name, price, inStock, sold } = item;

        if (!correctObject(item, 4)
            || !nonEmptyString(name)
            || !correctObject(price, 2)
            || !nonNegativeNumber(price.value)
            || !nonEmptyString(price.currency)
            || !availableCurrency.includes(price.currency)
            || !nonNegativeInteger(inStock)
            || !nonNegativeInteger(sold)) {
            continue;
        }
        try {
            table.push(`${++i}) ${name}: ${price.value} ${price.currency}; parduota: ${sold}; likutis: ${item.inStock};`);
        } catch (error) {
            console.log('KRITINE KLAIDA');
            continue;
        }
    }

    return table.join('\n');
}

module.exports = printList;