import { storeOperations } from "../components/operations/store.operations";
import { timedStep } from "../utils/allureLogUtils";
import { baseClass } from "../utils/baseClass";

describe("Abstracta Tests", () => {

    it("Abstracta Open Cart Functionalities Validation", async () => {
        await timedStep("Navigate to opencart", () => browser.url("http://opencart.abstracta.us/"));
        await timedStep("Wait for main page to be loaded", () => 
        storeOperations.waitForBaseStorePage());
        await timedStep("Search for product: iPhone", () =>
            storeOperations.searchProductByName("iPhone"));  
        await timedStep("Taking and screenshot of this step", () =>
            baseClass.takeScreenshot()); 
        await timedStep("Wait for searchs page to be loaded", () => 
            storeOperations.waitForStoreSearchPage());
        await timedStep("Select first search", () =>
            storeOperations.selectProductByIndex(0));
        await timedStep("Wait for searchs page to be loaded", () => 
            storeOperations.waitForStoreProductPage());
        await timedStep("Add the product to cart", () =>
            storeOperations.addProductToCart());
        await timedStep("Taking and screenshot of this step", () =>
            baseClass.takeScreenshot());  
        await timedStep("Validate that 'iPhone' was successfully added", () =>
            storeOperations.validateProductWasAddedToCart("iPhone"));
        await timedStep("Access to cart", () =>
            storeOperations.accessToViewCart());
        await timedStep("Wait for checkout page to be loaded", () =>
            storeOperations.waitForStoreCheckoutPage());
        await timedStep("Validate iPhone is in products cart", () =>
            storeOperations.validateProductIsInCart("iPhone"));
        await timedStep("Remove iPhone from products cart", () =>
            storeOperations.removeProductFromCart("iPhone"));
        await timedStep("Validate iPhone is not present in the products cart and the cart is empty", () =>
            storeOperations.validateCartIsEmpty());
        await timedStep("Taking and screenshot of this step", () =>
            baseClass.takeScreenshot()); 
    });

    it("Abstracta Open Cart Functionalities Validation - Fail Scenario", async () => {
        await timedStep("Navigate to opencart", () => browser.url("http://opencart.abstracta.us/"));
        await timedStep("Wait for main page to be loaded", () => 
        storeOperations.waitForBaseStorePage());
        await timedStep("Search for product: iPhone", () =>
            storeOperations.searchProductByName("iPhone"));  
        await timedStep("Wait for searchs page to be loaded", () => 
            storeOperations.waitForStoreSearchPage());
        await timedStep("Select first search", () =>
            storeOperations.selectProductByIndex(0));
        await timedStep("Wait for searchs page to be loaded", () => 
            storeOperations.waitForStoreProductPage());
        await timedStep("Add the product to cart", () =>
            storeOperations.addProductToCart());
        await timedStep("Validate that 'iPhone' was successfully added", () =>
            storeOperations.validateProductWasAddedToCart("Xiaomi"));
    }); 
})

