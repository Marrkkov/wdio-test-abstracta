import { baseClass } from "../../utils/baseClass";

export default class AbstractaStoreBasePage {

    get searchBar() {
        return $("input[name='search'");
    }
    
    get searchBtn() {
        return $("#search button");
    }

    get productLayout() {
        return $$("div[class*='product-layout']");
    }

    public async waitForPageToBeReady() {
        return baseClass.waitForPage("opencart.abstracta.us/")
    }

}

export const abstractaStoreBasePage = new AbstractaStoreBasePage();