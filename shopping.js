const shoppingList = [
    //section one: trims
    {name: "Silence Trim", rarityPercent: 1.2, location: "Ancient City", stock: 3, quantity: 0, price: 9.88},
    {name: "Ward Trim", rarityPercent: 5, location: "Ancient City", stock: 3, quantity: 0, price: 9.50},
    {name: "Bolt Trim", rarityPercent: 6, location: "Trial Chamber", stock: 3, quantity: 0, price: 9.40},
    {name: "Vex Trim", rarityPercent: 50, location: "Woodland Mansion", stock: 3, quantity: 0, price: 5.00},
    {name: "Spire Trim", rarityPercent: 6.7, location: "End City", stock: 3, quantity: 0, price: 9.33},
    {name: "Wild Trim", rarityPercent: 33.3, location: "Jungle Temple", stock: 3, quantity: 0, price: 6.67},
    {name: "Dune Trim", rarityPercent: 14.3, location: "Desert Pyramid", stock: 3, quantity: 0, price: 8.67},
    {name: "Tide Trim", rarityPercent: 20, location: "Ocean Monument", stock: 3, quantity: 0, price: 8.00},
    {name: "Rib Trim", rarityPercent: 6.7, location: "Fortress", stock: 3, quantity: 0, price: 9.33},
    {name: "Snout Trim", rarityPercent: 8.3, location: "Bastion", stock: 3, quantity: 0, price: 9.17},
    {name: "Wayfinder Trim", rarityPercent: 8.3, location: "Trail Ruins", stock: 3, quantity: 0, price: 9.17},
    {name: "Raiser Trim", rarityPercent: 8.3, location: "Trail Ruins", stock: 3, quantity: 0, price: 9.17},
    {name: "Shaper Trim", rarityPercent: 8.3, location: "Trail Ruins", stock: 3, quantity: 0, price: 9.17},
    {name: "Host Trim", rarityPercent: 8.3, location: "Trail Ruins", stock: 3, quantity: 0, price: 9.17},
    {name: "Coast Trim", rarityPercent: 16.7, location: "Shipwrecks", stock: 3, quantity: 0, price: 8.33},
    {name: "Sentry Trim", rarityPercent: 25, location: "Pillager Outpost", stock: 3, quantity: 0, price: 7.50},
    {name: "Flow Trim", rarityPercent: 22.5, location: "Trial Chamber", stock: 3, quantity: 0, price: 7.75},
    {name: "Eye Trim", rarityPercent: "100% or 10%", location: "Stronghold", stock: 3, quantity: 0, price: 9.00}, //altar or library
    {name: "Netherite Upgrade Template", rarityPercent: "100% or 10%", location: "Bastion", stock: 3, quantity: 0, price: 15.00}, //treasure or others
    //section 2: ores (for the trims)
    {name: "Copper Ingot", rarityPercent: 0, location: "Caves, Trial Chambers, Abandoned Camps", stock: 3, quantity: 0, price: 3.00},
    {name: "Lapis Lazuli", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Villages, Villagers", stock: 3, quantity: 0, price: 5.00},
    {name: "Redstone", rarityPercent: 0, location: "Caves, Mineshafts, Villagers, Dungeons, Strongholds, Woodland Mansions", stock: 3, quantity: 0, price: 4.50},
    {name: "Gold Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Mineshafts, Buried Treasures, Strongholds, Woodland Mansions, Bastions, Ruined Portals, Dungeons, Desert Pyramids, Jungle Temples, Nether Fortress, End Cities, Villages, Ocean Monuments, Abandoned Camps, Villagers", stock: 3, quantity: 0, price: 7.50},
    {name: "Iron Ingot", rarityPercent: 0, location: "Caves, Shipwrecks, Dungeons, Stronghold, Buried Treasures, Pillager Outposts, Woodland Mansions, Desert Pyramids, Jungle Temples, Nether Fortress, Bastions, Mineshafts, Trial Chambers, Ocean Ruins, Abandoned Camps, Villages", stock: 3, quantity: 0, price: 8.50},
    {name: "Emerald", rarityPercent: 0, location: "Caves, Villages, Villagers, Shipwrecks, Ocean Ruins, Trial Chambers, Buried Treasures, Desert Pyramids, Igloos, Jungle Temples, Abandoned Camps, End Cities", stock: 3, quantity: 0, price: 6.00},
    {name: "Diamond", rarityPercent: 0, location: "Caves, Buried Treasures, Trial Chambers, End Cities, Nether Fortresses, Shipwrecks, Bastions, Jungle Temples, Desert Pyramids, Strongholds, Mineshafts, Abandoned Camps, Woodland Mansions, Ancient Cities", stock: 3, quantity: 0, price: 10.00},
    {name: "Quartz", rarityPercent: 0, location: "Nether, Bastions, Villagers", stock: 3, quantity: 0, price: 3.00},
    {name: "Netherite", rarityPercent: 0, location: "Nether, Bastions", stock: 3, quantity: 0, price: 15.00},
    {name: "Resin Brick", rarityPercent: 0, location: "Pale Oak Forest, Woodland Mansions", stock: 3, quantity: 0, price: 4.50},
    {name: "Amethyst Shard", rarityPercent: 0, location: "Amethyst Geodes, Ancient Cities, Trial Chambers", stock: 3, quantity: 0, price: 6.00},
];
let cart = [];
let price = 0;
let discount = 1;
let listTime = 0;

//code taken from google, current test
import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function toShop() {
    shoppingList.forEach((item, i) => {
        console.log(`${i + 1}. ${item.name}, $${item.price.toFixed(2)}, ${item.stock} in stock`);
    });

    let moreShop = true;

    //user interaction
    while (moreShop === true) {
        const rl = readline.createInterface({input, output});
        try {
            console.log("Write an item to put it in your cart, type 'help' for a list of commands, or type 's' to stop shopping.");
            const shop = await rl.question("");
            const shopLower = shop.toLowerCase();
            const item = shoppingList.find(thing => thing.name.toLowerCase() === shop.toLowerCase());
            rl.close();

            if (shopLower === "help") {
                console.log("Here are the current list of commands:");
                console.log("Type 'c' to view your cart and your current total.");
                console.log("Type 'r' to remove something from your cart.");
                console.log("Type 'code' to enter a discount code.");
                console.log("Type 'list' to view the shop catalog. Limit of 1 use per shopping session.");
            }

            //access cart with "c"
            else if (shopLower === "c") {
                let decimalPrice = price.toFixed(2);
                const cartItem = shoppingList.find(ct => ct.quantity > 0);

                if (cartItem) {
                        console.log(`You currently have ${cartItem.name} x${cartItem.quantity} in your cart.`);
                        } else {
                    console.log("Your cart is currently empty.");
                    }
                
                console.log(`The total price of your cart is $${decimalPrice}`);
                }

            //remove items from cart with "r"
            else if (shopLower === "r") {
                console.log(cart);
                const rl = readline.createInterface({input, output});
                try {
                    const remove = await rl.question("Type the item name of the item you would like to remove. ");
                    const removeLower = remove.toLowerCase();

                    const itemx = cart.findIndex(thitem => thitem.name.toLowerCase() === removeLower);
                    if (itemx > -1) {
                        const item = cart[itemx];
                        price -= item.price;
                        item.quantity -= 1;
                        item.stock += 1;
                        if (item.quantity === 0) {
                            cart.splice(itemx, 1);
                        }
                        console.log(`You now have ${item.name} x${item.quantity} in your cart.`);
                    } else {
                        console.log("This item is not in your cart.");
                    }
                } finally {
                    rl.close();
                }
            }

            //stop shopping with "s"
            else if (shopLower === "s") {
                const rl = readline.createInterface({input, output});
                try {
                    const ending = await rl.question("Are you sure you want to stop shopping? Yes/No: ");
                    const end = ending.toLowerCase();

                    if (end === "yes") {
                        moreShop = false;
                    } else {
                        continue;
                    }
                } finally {
                    rl.close();
                }
            }

            //discount codes
            else if (shopLower === "code") {
                const rl = readline.createInterface({input, output});
                try {
                    const dis = await rl.question("What is your discount code? ");
                    const count = dis.toLowerCase();

                    if (count === "yes") {
                        discount *= 0.95; //5% discount
                        console.log("You have entered the discount code 'yes', which gives you a 5% discount!")
                    } else if (count === "nice") {
                        discount *= 0.9; //10% discount
                        console.log("You have entered the discount code 'nice', which gives you a 10% discount!")
                    }  else if (count === "great") {
                        discount *= 0.85; //15% discount
                        console.log("You have entered the discount code 'great', which gives you a 15% discount!")
                    } else {
                        console.log("Your discount code is invalid or expired.")
                    }
                } finally {
                    rl.close();
                }
            }

            //shopping catalog once only
            else if (shopLower === "list") {
                if (listTime === 0) {
                    shoppingList.forEach((item, i) => {
                        console.log(`${i + 1}. ${item.name}, $${item.price.toFixed(2)}, ${item.stock} in stock`);
                        listTime += 1;
                    });
                } else {
                    console.log("You can only use this command once per shopping session.");
                }
            }

            //checks if the item does not exist
            else if (!item) {
                console.log(`The item '${shop}' is not in our catalog.`);
            }

            //checks the stock of item
            else if (item.stock === 0) {
                console.log(`We are sold out of ${item.name}.`);
            }

            //add an item to a cart when item name is written
            else if (item) {
                item.stock -= 1;
                item.quantity += 1;
                price += item.price;
                if (!cart.includes(item)) {
                    cart.push(item);
                }
                console.log(cart);
            }
        } finally {
            rl.close();
        }
    }

    //receipt
    let discountPrice = price * discount;
    let decimalPrice = +discountPrice.toFixed(2);
    console.log(`Your total is $${decimalPrice}`);
}

toShop();