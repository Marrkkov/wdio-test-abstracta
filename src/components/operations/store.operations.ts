import { abstractaStoreBasePage } from "../pageobjects/abstractaStoreBasePage.page";
import { abstractaStoreCheckoutPage } from "../pageobjects/checkout.page";
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

    async waitForStoreCheckoutPage() {
        await abstractaStoreCheckoutPage.waitForPageToBeReady();
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

    async accessToViewCart() {
        await abstractaStoreBasePage.cartBtn.waitForDisplayed();
        await abstractaStoreBasePage.cartBtn.click();
        await abstractaStoreBasePage.dropdownViewCartBtn.waitForClickable();
        await abstractaStoreBasePage.dropdownViewCartBtn.click();
    }

    async validateProductIsInCart(product: string) {
        const productsInCartNames = [];
        await abstractaStoreCheckoutPage.productsTable.waitForDisplayed();
        for (let i = 0; i < await abstractaStoreCheckoutPage.getProductsRowsLenght(); i++) { 
            {
                productsInCartNames.push(await abstractaStoreCheckoutPage.getRowProductName(i).getText());
            }
        }
        let productExists: Boolean;
        
        productsInCartNames.forEach(productName => {
            if (productName.includes(product)) {
                productExists = true
            }
        });
        await expect(productExists).toBe(true);
    }

    async removeProductFromCart(product: string) {
        await abstractaStoreCheckoutPage.productsTable.waitForDisplayed();
        for (let i = 0; i < await abstractaStoreCheckoutPage.getProductsRowsLenght(); i++) { 
            {
            const productsInCartName = await abstractaStoreCheckoutPage.getRowProductName(i).getText();
            if(productsInCartName.includes(product)){
                await abstractaStoreCheckoutPage.getRowProductsQuantityRemoveBtn(i).waitForClickable();
                await abstractaStoreCheckoutPage.getRowProductsQuantityRemoveBtn(i).click();
                (await abstractaStoreCheckoutPage.getRowProductName(i)).waitForDisplayed({reverse: true})
                }
            }
        }
    }

    async validateCartIsEmpty() {
        await expect(await abstractaStoreCheckoutPage.productsTable).not.toBeDisplayed();
        await expect(await abstractaStoreCheckoutPage.content.getText()).toContain("Your shopping cart is empty!");
    }
}

export const storeOperations = new StoreOperations();