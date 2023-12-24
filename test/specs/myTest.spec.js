describe('Demo test', function () {
    it('Open Google',  async () => {
        await browser.url('https://google.com')
    });

    it('type something', async() => {

    let field = browser.$('//*[@type="search"]');
    await field.setValue('text');

    await browser.pause(2000)
    });
})