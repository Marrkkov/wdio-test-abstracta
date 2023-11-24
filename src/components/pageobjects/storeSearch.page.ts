import { baseClass } from "../../utils/baseClass";
import AbstractaStoreBasePage from "./abstractaStoreBasePage.page";

class AbstractaStoreSearchesPage extends AbstractaStoreBasePage {

    public async waitForPageToBeReady() {
        return baseClass.waitForPage("opencart.abstracta.us/index.php?route=product/search")
    }
}

export const abstractaStoreSearchesPage = new AbstractaStoreSearchesPage();