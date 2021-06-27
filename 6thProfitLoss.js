let costPrice = 1500;
let sellingPrice = 2001;
if (sellingPrice>costPrice) {
    console.log(`You are in profit of ${sellingPrice-costPrice} ruppes.`);
}
else if (sellingPrice<costPrice) {
    console.log(`You are in loss of ${costPrice-sellingPrice} ruppes.`);
}
if (sellingPrice===costPrice) {
    console.log(`Niether profit nor loss.`);
}
