import { buyProduct } from "./utils/inputView.js";
import { splitBuyProduct } from "./service/buyProduct.js";
import UpdateStorage from "./service/UpdateStorage.js";

class App {
  async run() {
    const buy = await buyProduct();
    let buyProducts = splitBuyProduct(buy);
    const storage = new UpdateStorage(buyProducts);
    storage.allUpdateStorage();
  }
}

export default App;
