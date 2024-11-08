import { product } from "../constant/productConstant.js";
import { Console } from "@woowacourse/mission-utils";
import { Message } from "../constant/Message.js";

class PrintView {
    printStorage(){
        this.printGreeting();
        product.map((product) => {
            this.printProduct(product);
        })
        Console.print('\n');
    }

    printProduct(product) {
        if (product.promotion === null) product.promotion = "재고 없음";
        Console.print(`- ${product.name} ${product.price}원 ${product.quantity}개 ${product.promotion}`);
    }

    printGreeting(){
        Console.print(Message.greeting);
    }
}

export default PrintView;