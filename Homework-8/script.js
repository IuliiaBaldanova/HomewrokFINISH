for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
        console.log(i) 
    }
   }

   
for (let i = 0; ; i++) {
    console.log(i);
    if (i === 5) {
        break;
    };
}

let seafood = 
    {
    name : `carbonara`,
    ingredients: [`noodles`,`bacon`,`cream`],
    priceCooking: 0,
    priceSale: 90,
    
};

let japanese =     
    {
    name :`sushi`,
    ingredients: [`rice`,`shrimps`,`avocado`],
    priceCooking: 0,
    priceSale: 105,
};

let buryad =     
    {
    name : `buuzi`,
    ingredients: [`daugh`,`beef`,`pork`],
    priceCooking: 0,
    priceSale: 180,
};

let dessert = 

    {
    name : `merenga`,
    ingredients: [`protein`,`sugar`,`berries`],
    priceCooking: 0,
    priceSale:170,
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
    noodles : 15,
    bacon : 30,
    cream : 25,
    rice : 15, 
    shrimps : 25,
    avocado : 8,
    daugh : 5,
    beef : 23,
    pork: 7,
    protein : 12,
    sugar : 15,
    berries : 17,
};

for (let i = 0; i < menu.length; i++) {
    let sum = 0;
    for (let j = 0; j < menu[i].ingredients.length; j++) {
        sum += price[menu[i].ingredients[j]];
    }
    menu[i].priceCooking = sum;
};

console.log(`total: ${JSON.stringify(menu)}`);


for (let i = 0; i < menu.length; i++) {
    menu[i].profit = menu[i].priceSale - menu[i].priceCooking;
};

console.log(`total2: ${JSON.stringify(menu)}`);


let allDescriptionMenu = '';

for (let i = 0; i < menu.length; i++) {
    let description = `Название блюда: ${menu[i].name}; Стоимость: ${menu[i].priceSale}\n`;
    allDescriptionMenu += description;
};
console.log(`Меню:\n${allDescriptionMenu}`);

