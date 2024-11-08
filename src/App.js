import { buyProduct } from "./utils/inputView.js";
import { splitBuyProduct } from "./service/buyProduct.js";
import UpdateStorage from "./service/UpdateStorage.js";
import PrintView from "./utils/printView.js";
import { product } from "./constant/productConstant.js";

class App {
  async run() {
    const intro = new PrintView();
    intro.printStorage();

    const buy = await buyProduct();
    let buyProducts = splitBuyProduct(buy);

    const storage = new UpdateStorage(buyProducts);
    storage.allUpdateStorage();
    console.log(storage);
  }
}

export default App;
