const jsonParse = require("./lib/jsonParse.js");
const printList = require("./lib/printList.js");
const readFile = require("./lib/readFile.js");

(async () => {
    const goods = [
        'arbata',
        'arba',
        'kvepalai',
        'masina',
        'masina-wrong-1',
        'masina-wrong-2',
        'masina-wrong-3',
        'pomidoras',
        '',
        5,
        true,
        false,
        null,
        () => { },
        [],
        {},
        undefined
    ];

    const goodsInfo = [];

    for (const item of goods) {
        if (typeof item !== 'string' || item === '') {
            continue;
        }
        const itemText = await readFile(item);
        if (typeof itemText !== 'string' || itemText === '') {
            continue;
        }
        const itemObj = jsonParse(itemText);
        if (itemObj === false) {
            continue;
        }
        goodsInfo.push(itemObj);
    }

    console.log('"Univermagas" pardavime turi:');
    console.log('-----------------------------');
    console.log(printList(goodsInfo));
    console.log('-----------------------------');
})();
