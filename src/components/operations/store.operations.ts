import { abstractaStoreBasePage } from "../pageobjects/abstractaStoreBasePage.page";
import { abstractaStoreProductPage } from "../pageobjects/product.page";
import { abstractaStoreSearchesPage } from "../pageobjects/storeSearch.page";


class StoreOperations {

    async waitForBaseStorePage() {
        await abstractaStoreBasePage.waitForPageToBeReady();
    }

    async waitForStoreSearchPage() {
        await abstractaStoreSearchesPage.waitForPageToBeReady();
    }

    async waitForStoreProductPage() {
        await abstractaStoreProductPage.waitForPageToBeReady();
    }

    async searchProductByName(product: string){
        await abstractaStoreBasePage.searchBar.waitForDisplayed();
        await abstractaStoreBasePage.searchBar.setValue(product);
        await abstractaStoreBasePage.searchBtn.waitForClickable();
        await abstractaStoreBasePage.searchBtn.click();
    }

    async selectProductByIndex(index: number){
        await abstractaStoreBasePage.productLayout[index].waitForDisplayed();
        await abstractaStoreBasePage.productLayout[index].click();
    }

    async addProductToCart(){
        await abstractaStoreProductPage.addToCartBtn.waitForClickable();
        await abstractaStoreProductPage.addToCartBtn.click();
    }

    async validateProductWasAddedToCart(product: string) {
        await expect(await abstractaStoreProductPage.successMessage).toBeDisplayed();
        const successText = await abstractaStoreProductPage.successMessage.getText();
        await expect(successText)
            .toContain(`Success: You have added ${product} to your shopping cart!`);

    }
}

export const storeOperations = new StoreOperations();