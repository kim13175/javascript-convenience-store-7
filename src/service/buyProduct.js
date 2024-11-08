export function splitBuyProduct(string) {
    let products = [];
    const perProduct = string.replace(/[\[\]]/g, '').split(',');
    perProduct.forEach((product) => {
        const [name, quantity] = product.split('-');
        products.push([name, Number(quantity)]);
    })
    return products;
}