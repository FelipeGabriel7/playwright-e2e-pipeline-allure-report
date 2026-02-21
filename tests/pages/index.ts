import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config({ path: '.env' });

export class HomePage {
    readonly page: Page;
    readonly itemName: Locator;
    readonly itemCalories: Locator;
    readonly addButton: Locator;
    readonly totalCalories: Locator;
    readonly list_item: Locator;
    readonly editButton: Locator;
    readonly updateButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemName = page.locator('#item-name');
        this.itemCalories = page.locator('#item-calories');
        this.addButton = page.locator('.add-btn');
        this.totalCalories = page.locator('.total-calories');
        this.list_item = page.locator('.collection-item').first();
        this.editButton = page.locator('.edit-item').first();
        this.updateButton = page.locator('.update-btn');
        this.deleteButton = page.locator('.delete-btn');
    }

    public async goPage() {
        await this.page.goto(`${process.env.BASE_URL || '/tracalorie'}`);
    }

    public async addNewItem(name: string, calories: string) {
        await this.itemName.fill(name);
        await this.itemCalories.fill(calories);
        await this.addButton.click();
    }

    public async editItem(newName: string, newCalories: string) {
        await this.editButton.click();
        await this.itemName.fill(newName);
        await this.itemCalories.fill(newCalories);

    }

    public async updateItem() {
        await this.updateButton.click();
    }

    public async deleteItem() {
        await this.editButton.click();
        await this.deleteButton.click();
    }

    public async verifyItemAdded() {
        await expect(this.list_item).toBeVisible();
    }

    public async verifyItemNotAdded() {
        await expect(this.list_item).not.toBeVisible
    }

    public async verifyCaloriesCounter(expectedCalories: string) {
        await expect(this.totalCalories).toHaveText(expectedCalories);
    }

    public async returnHome() {
        const homeLink = await this.page.getByRole('link', { name: 'Home' });
        await homeLink.click();

        await expect(this.page).toHaveURL(`${process.env.URL_HOME || '/'}`);
    }

}


