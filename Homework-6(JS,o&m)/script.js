
let carbonara={
    ingredients: [`noodles`,`bacon`,`cream`],
    price: 15,
    expense: 9,
}
alert(carbonara.ingredients);
alert(carbonara.price);
alert(carbonara.expense);
alert(carbonara.price - carbonara.expense);


let sushi={
    ingredients: [`rice`,`shrimps`,`avocado`],
    price: 20,
    expense: 11,
}
alert(sushi.ingredients);
alert(sushi.price);
alert(sushi.expense);
alert(sushi.price - sushi.expense);


let buuzi={
    ingredients: [`dough`,`beef`,`pork`],
    price: 17,
    expense: 8,
}
alert(buuzi.ingredients);
alert(buuzi.price);
alert(buuzi.expense);
alert(buuzi.price - buuzi.expense)


let merenga={
    ingredients: [`protein`,`sugar`,`berries`],
    price: 12,
    expense: 5,
}
alert(merenga.ingredients);
alert(merenga.price);
alert(merenga.expense);
alert(merenga.price - merenga.expense);


let menu= [carbonara,sushi,buuzi,merenga];
menu.splice(0,3);
alert(menu);

menu.unshift(merenga);
alert(menu);

menu.pop();
alert(menu);

merenga.ingredients.splice(2);
alert(merenga.ingredients);





// let pizza= {
//     ingredients: [`dough`, `bacon`, `tomato`,`pepper`, `cheese`],
// }

// alert(pizza.ingredients);

// pizza.ingredients.pop();
// alert(pizza.ingredients);

// pizza.ingredients.unshift(`cheese`);
// alert(pizza.ingredients);


// let Price=
//     {"dough": 2,
// "bacon": 3,
// "tomato": 1,
// "pepper": 1,
// "cheese": 4,

// totalPrice: 11,
//     }
// alert(Price.totalPrice)


// let totalPrice = 
// Price.dough + Price.bacon + Price.tomato + Price.pepper + Price.cheese;
// alert(totalPrice);


// let Profit=
// totalPrice + 5;
// alert (Profit);


// let Fix = [`dough`, `bacon`, `tomato`,`pepper`, `cheese`];
// Fix.splice(3,1);
// alert(Fix);

