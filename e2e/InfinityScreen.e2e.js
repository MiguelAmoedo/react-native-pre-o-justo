// e2e/InfinityScreen.e2e.js
describe('InfinityScreen', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should display products and handle purchase', async () => {
      await expect(element(by.text('Produto Teste 1'))).toBeVisible();
      await expect(element(by.text('Produto Teste 2'))).toBeVisible();
  
      await element(by.id('marketIcon-1')).tap(); 
      await expect(element(by.text('O Produto Teste 1 está à caminho! 🥳'))).toBeVisible();
      await expect(element(by.text('🎁 Parabéns, sua compra foi confirmada!'))).toBeVisible();
    });
  });
  
