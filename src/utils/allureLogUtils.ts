import allureReport from '@wdio/allure-reporter';

export async function timedStep(name, fn) {
    let result;
    const step = allureReport.step(name, async () => {
        result = await fn();
    });
    await step;
    return result;
}

module.exports = {
    timedStep,
};