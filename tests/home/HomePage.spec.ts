  /*
1.Go to Page.
2.Validate title
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.spec';

test('login exitoso en SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await expect(page).toHaveTitle('The Internet');
});
