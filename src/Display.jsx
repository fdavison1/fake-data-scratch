import React from 'react';
import Chance from 'chance';

const chance = new Chance();

const months = ['mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'];

const formatNumber = (num) => {
    return parseFloat(-num).toFixed(2)
}

const returnFakeCategories = () => {
    const cat1 = chance.pickone(['apartment', 'food']);
    let info

    switch (cat1) {
        case 'apartment':
            info = chance.pickone(
                [
                    {
                        cat2: 'rent',
                        amount: formatNumber(chance.integer({ min: 800, max: 900 }))
                    },
                    {
                        cat2: 'utilities',
                        amount: formatNumber(chance.integer({ min: 20, max: 30 }))
                    }
                ]
            )
            break;
            case 'food':
                info = chance.pickone(
                    [
                        {
                            cat2: 'gas',
                            amount: formatNumber(chance.integer({ min: 15, max: 40 }))
                        },
                        {
                            cat2: 'groceries',
                            amount: formatNumber(chance.integer({ min: 20, max: 50 }))
                        },
                        {
                            cat2: 'coffee',
                            amount: formatNumber(chance.integer({ min: 2, max: 5 }))
                        },
                        {
                            cat2: 'fast food',
                            amount: formatNumber(chance.integer({ min: 7, max: 20 }))
                        },
                        {
                            cat2: 'delivery',
                            amount: formatNumber(chance.integer({ min: 10, max: 40 }))
                        }
                    ]
                )
                break;
        default:
            return;
    }

    return {
        cat1: cat1,
        ...info
    };
}

const getRowData = () => {
    const month = chance.pickone(months);

    let date;

    switch (month) {
        case 'mar':
            date = 3;
            break;
        case 'apr':
            date = 4;
            break;
        case 'may':
            date = 5;
            break;
        case 'jun':
            date = 6;
            break;
        case 'jul':
            date = 7;
            break;
        case 'aug':
            date = 8;
            break;
        case 'sep':
            date = 9;
            break;
        case 'oct':
            date = 10;
            break;
        case 'nov':
            date = 11;
            break;
        default:
            return;
    }

    const stringDate = `${date}/${chance.natural({ min: 1, max: 30 })}/20`
    const amount = chance.integer({ min: 0, max: 50 })

    return {
        month: month,
        date: stringDate,
        amount: parseFloat(-amount).toFixed(2)
    };
}

const data = [
    {
        month: 'nov',
        date: '11/1/20',
        amount: '-22.40',
        cat1: 'food',
        cat2: 'groceries'
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    },
    {
        ...getRowData(),
        ...returnFakeCategories()
    }
];

export const Display = () => {
    return (
        <div>
            <strong>{'fake expense data'}</strong>
            <table>
                <tbody>
                    {data.map(row => {
                        return (<tr>
                            <td>{row.month}</td>
                            <td>{row.date}</td>
                            <td>{row.amount}</td>
                            <td>{row.cat1}</td>
                            <td>{row.cat2}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}