import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { readCSV } from '../utils/csvReader';

test('login using CSV data', async ({ page }) => {

  const users = await readCSV('test-data/users.csv');

  for (const user of users) {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      user.username,
      user.password
    );

    await loginPage.verifyLoginSuccess();
  }
});