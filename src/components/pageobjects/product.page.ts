import { baseClass } from "../../utils/baseClass";
import AbstractaStoreBasePage from "./abstractaStoreBasePage.page";

class AbstractaStoreProductPage extends AbstractaStoreBasePage {

    get addToCartBtn() {
        return $('#button-cart');
    }

    get successMessage() {
        return $('div[class*=alert-success]');
    }

    public async waitForPageToBeReady() {
        return baseClass.waitForPage("opencart.abstracta.us/index.php?route=product/product")
    }
    
}

export const abstractaStoreProductPage = new AbstractaStoreProductPage();