class BaseClass {

    getCurrentPageUrl() {
        return browser.execute(() => document.location.href.toString())
    }

    async waitForPage(url: string, locator?: string) {
        await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'page not ready during 60 seconds',
        });
        await browser.waitUntil(
            async () => {
                const currUrl = await this.getCurrentPageUrl();
                if (currUrl.includes(url)) return true;
            },
            {
                timeout: 60 * 1000,
                timeoutMsg: 'URL not matching',
            }
        );
        if (locator !== undefined && locator !== '') {
            await $(locator).waitForClickable();
        }
    }

    async takeScreenshot() {
        await browser.takeScreenshot();
    }
}

export const baseClass = new BaseClass();