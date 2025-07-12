// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }
  /*
  async loginWith(usuario: string, contrasena: string) {
    await this.page.fill('[data-test="username"]', usuario);
    await this.page.fill('[data-test="password"]', contrasena);
    await this.page.click('[data-test="login-button"]');
  }*/
}
