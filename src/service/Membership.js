class Membership {
    constructor(isMember) {
        this.isMember = isMember;
    }

    MAX_DISCOUNT_PRICE = 8000;

    memberDiscount(price) {
        if (this.isMember === true) {
            let memberDiscountPrice = price - price * 0.3;
            if (memberDiscountPrice > 8000) memberDiscountPrice = 8000;
            return memberDiscountPrice;
        }
        return price;
    }
}