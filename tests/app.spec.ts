import { test } from '@playwright/test';
import { HomePage } from './pages/index';

test('Preencher os campos nome e caloria corretamente', async ({ page }) => {
    const pageFood = new HomePage(page);
    await pageFood.goPage();

    await pageFood.addNewItem('Banana', '100');
    await pageFood.verifyItemAdded();
    await pageFood.verifyCaloriesCounter('100');
});


test('Preencher os campos nome e caloria incorretamente', async ({ page }) => {
    const pageFood = new HomePage(page);
    await pageFood.goPage();

    await pageFood.addNewItem('', '-100');
    await pageFood.verifyItemNotAdded();
    await pageFood.verifyCaloriesCounter('0');
});

test('Editar uma categoria', async ({ page }) => {
    const pageFood = new HomePage(page);
    await pageFood.goPage();

    await pageFood.addNewItem('Banana', '100');
    await pageFood.editItem('Maçã', '80');
    await pageFood.updateItem();
    await pageFood.verifyItemAdded();
    await pageFood.verifyCaloriesCounter('80');
})


test('Excluir um item', async ({ page }) => {
    const pageFood = new HomePage(page);
    await pageFood.goPage();

    await pageFood.addNewItem('Banana', '100');
    await pageFood.deleteItem();
    await pageFood.verifyItemNotAdded();
    await pageFood.verifyCaloriesCounter('0');
});

test('Retornar a página home', async ({ page }) => {
    const pageFood = new HomePage(page);
    await pageFood.goPage();

    await pageFood.returnHome();
})