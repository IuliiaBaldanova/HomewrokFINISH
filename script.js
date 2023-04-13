let seafood =
{
    name: `carbonara`,
    ingredients: [`noodles`, `bacon`, `cream`],
    priceCooking: 0,
    priceSale: 90,

};

let japanese =
{
    name: `sushi`,
    ingredients: [`rice`, `shrimps`, `avocado`],
    priceCooking: 0,
    priceSale: 105,
};

let buryad =
{
    name: `buuzi`,
    ingredients: [`daugh`, `beef`, `pork`],
    priceCooking: 0,
    priceSale: 180,
};

let dessert =

{
    name: `merenga`,
    ingredients: [`protein`, `sugar`, `berries`],
    priceCooking: 0,
    priceSale: 170,
};


// massiv iz blud

let menu = [
    seafood,
    japanese,
    buryad,
    dessert,
];

//price ingredientov

let price = {
    noodles: 15,
    bacon: 30,
    cream: 25,
    rice: 15,
    shrimps: 25,
    avocado: 8,
    daugh: 5,
    beef: 23,
    pork: 7,
    protein: 12,
    sugar: 15,
    berries: 17,
};

ingredientsNotVegan = ['beef', 'shrimps', 'pork', 'bacon'];
// NoIngredientsVegan = ['berries', 'protein', 'sugar'];

// Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce`

for (let i = 0; i < menu.length; i++) {
    let priceCooking = menu[i].ingredients.reduce(function (sum, item, index, arr) {
        return sum += price[item];
    }, 0);
    console.log(priceCooking)
};

// Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.

let namePrice = menu.map(function (item, index, arr) {
    let meaning = {
        name: item.name,
        priceSale: item.priceSale
    }
    return meaning;
});

console.log(namePrice);

// Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

let isVeganMenu = menu.some(function (item, index, arr) {
    return item.ingredients.every(function (item, index, arr) {
        return !ingredientsNotVegan.includes(item);
    });
});
console.log(isVeganMenu);

// Определите, полностью ли у вас вегетарианское меню с помощью `every`.

let isContainesVeganMenu = menu.every(function (item, index, arr) {
    let analysisMenu = item.ingredients.every(function (item, index, arr) {
        return !ingredientsNotVegan.includes(item);
    });
    return analysisMenu;
});

console.log(`Are all menu vegan ${isContainesVeganMenu}`);


// Создайте массив с вегетарианскими блюдами с помощью filter.

let veganMenu = menu.filter(function (item, index, arr) {
    let checkProduct = item.ingredients.every(function (item, index, arr) {
        return !ingredientsNotVegan.includes(item)
    });
    return checkProduct;
})

console.log(`${JSON.stringify(veganMenu)}`);

