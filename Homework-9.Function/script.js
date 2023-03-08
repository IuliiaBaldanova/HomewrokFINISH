      //   function check(numOne, numTwo) {
      //   if (numOne < numTwo) {
      //     return numOne;
      //   } else {
      //     return numTwo;
      //   }
      // }
      
      // let result = check(3,9);
      // alert(result);
      // let result1 = check(6,10);
      // alert(result1);


function raznica(priceCooking, priceSale) {
  return priceSale - priceCooking;

};


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

//Посчитайте стоимость приготовления динамически (с помощью цикла)

for (let i = 0; i < menu.length; i++) {
let sum = 0;
for (let j = 0; j < menu[i].ingredients.length; j++) {
    sum += price[menu[i].ingredients[j]];
}
menu[i].priceCooking = sum;
};
console.log(`total: ${JSON.stringify(menu)}`);

//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 

result = '';
for (let i = 0; i < menu.length; i++) {
      menu[i].profit = raznica(menu[i].priceSale, menu[i].priceCooking);
      result += `Dish: ${menu[i].name} ; saleProfit: ${menu[i].profit}`};
alert(result);

  

//   resultText += `Блюдо: ${meals[i].name} ; Прибыль от продажи: ${meals[i].profit}\n`;
// };

// alert(resultText);


