import { baseClass } from "../../utils/baseClass";
import AbstractaStoreBasePage from "./abstractaStoreBasePage.page";

class AbstractaStoreCheckoutPage extends AbstractaStoreBasePage{

    get productsTable() {
        return $("div[class='table-responsive']");
    }

    get content() {
        return $("#content")
    }

    getProductsRowsLenght() {
        return this.productsTable.$$("tbody tr").length;
    }

    getRowProductName(row: number) {
        return this.productsTable.$$("tbody tr")[row].$$("td")[1];
    }

    getRowProductsQuantityRemoveBtn(row: number) {
        return this.productsTable.$$("tbody tr")[row].$("td [data-original-title='Remove']");
    }

    public async waitForPageToBeReady() {
        return baseClass.waitForPage("opencart.abstracta.us/index.php?route=checkout")
    }
}


export const abstractaStoreCheckoutPage = new AbstractaStoreCheckoutPage();