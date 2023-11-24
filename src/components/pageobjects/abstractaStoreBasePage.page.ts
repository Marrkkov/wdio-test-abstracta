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

    get cartBtn() {
        return $("#cart");
    }

    get dropdownViewCartBtn() {
        return $("[class='dropdown-menu pull-right'] i[class*=cart]");
    }

    public async waitForPageToBeReady() {
        return baseClass.waitForPage("opencart.abstracta.us/")
    }

}

export const abstractaStoreBasePage = new AbstractaStoreBasePage();