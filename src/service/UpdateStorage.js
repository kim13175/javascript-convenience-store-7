import {product} from "../constant/productConstant.js";

class UpdateStorage {
    constructor (products){
        this.products = products;
    }

    allUpdateStorage(){
        this.products.forEach(([name, quantity]) => {
            try {
                this.updatePromotionStore(name, quantity);
            } catch (error) {
                console.error("재고를 업데이트 하지 못하였습니다.");
            }
        });
    }

    updatePromotionStore(name, quantity) {
        let promotionItem = product.find(item => item.name === name && item.promotion !== null);

        if (promotionItem.quantity >= quantity) {
            promotionItem.quantity -= quantity;
            return
        }

        let remainQuantity = quantity - promotionItem.quantity;

        if (remainQuantity > 0) this.updateNotPromotionStore(name, remainQuantity);
    }

    updateNotPromotionStore(name, quantity) {
        let nonPromotionItem = product.find(item => item.name === name && item.promotion === null);

        if (nonPromotionItem.quantity >= quantity) {
            nonPromotionItem.quantity = nonPromotionItem.quantity - quantity;
            return;
        }

        this.lackQuantity()
    }

    lackQuantity() {
        console.log("[ERROR] 재고가 부족합니다.");
    }
}

export default UpdateStorage;