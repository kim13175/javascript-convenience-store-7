import { Console } from "@woowacourse/mission-utils";
import { Message } from "../constant/Message.js";

export async function buyProduct() {
    try{
        return await Console.readLineAsync(Message.buyMessage);
    }catch (error){
        Console.print("[Error] 형식에 맞게 물품과 구매수량을 입력해주세요.");
    }
} 