let pizza= {
    ingredients: [`dough`, `bacon`, `tomato`,`pepper`, `cheese`],
}

alert(pizza.ingredients);

pizza.ingredients.pop();
alert(pizza.ingredients);

pizza.ingredients.unshift(`cheese`);
alert(pizza.ingredients);


let Price=
    {"dough": 2,
"bacon": 3,
"tomato": 1,
"pepper": 1,
"cheese": 4,

totalPrice: 11,
    }
alert(Price.totalPrice)


let totalPrice = 
Price.dough + Price.bacon + Price.tomato + Price.pepper + Price.cheese;
alert(totalPrice);


let Profit=
totalPrice + 5;
alert (Profit);


let Fix = [`dough`, `bacon`, `tomato`,`pepper`, `cheese`];
Fix.splice(3,1);
alert(Fix);

