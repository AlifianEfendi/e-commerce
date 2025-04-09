export function getDiscount(price, discountPercentage) {
    if (discountPercentage > 0) {
        return (price - (price * (discountPercentage / 100)).toFixed(2));
    }
    return price;
}