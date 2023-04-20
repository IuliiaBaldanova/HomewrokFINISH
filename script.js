let menu;

fetch("/menu.json")
    .then((r) => r.json())
    .then((r) => {
        menu = r
        console.log(menu);
        return fetch("/price.json")
            .then((r) => r.json());
    })
    .then((r) => {
        price = r;
        console.log(price);
        return price;
    })

    .then((price) => {



        // map для создания массива с объектами

        let costMenu = menu.map(function (item, index, arr) {
            let elem = {
                name: item.name,
                priceSale: item.priceSale
            }
            return elem;
        });
        console.log(costMenu)

        //sibestoimost'

        menu.forEach(function (item, index, arr) {
            console.log(item);
            console.log(item.ingredients);
            item.price = item.ingredients.reduce(function (sum, item, index, arr) {
                return sum += price[item].price;
            }, 0);
        });
        menu.forEach(function (item, index, arr) {
            console.log(`Dish: ${item.name} ; costPrice: ${item.price}`)
        });
        console.log(price);



        // Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

        let isVeganMenu = menu.some(function (item, index, arr) {
            return item.ingredients.every(function (item, index, arr) {
                return price[item].vegan;
            });
        });
        console.log(isVeganMenu);


        // Определите, полностью ли у вас вегетарианское меню с помощью `every`.

        let isContainesVeganMenu = menu.every(function (item, index, arr) {
            return item.ingredients.every(function (item, index, arr) {
                return price[item].vegan;
            });
        });

        console.log(`Are all menu vegan ${isContainesVeganMenu}`);


        // Создайте массив с вегетарианскими блюдами с помощью filter.

        let veganMenu = menu.filter(function (item, index, arr) {
            return item.ingredients.every(function (item, index, arr) {
                return price[item].vegan;
            });
        });

        console.log(`${JSON.stringify(veganMenu)}`);

    })
    .catch(error => console.error(error))