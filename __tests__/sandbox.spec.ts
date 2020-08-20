import * as assert from "assert";
import { chromium } from "playwright";

let page: any;
let browser: any;

describe("Проверка почты", () => {
  beforeAll(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext({
      viewport: {width: 1920, height: 1080}
    });
    page = await context.newPage();

    await page.goto("https://ej2.syncfusion.com/showcase/typescript/webmail/#/home").catch(() => {});
  });

  afterAll(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  test("Ассертим почту", async () => {
    await page.click("dfgdfg");

    let titile = await page.eval('#sub', (element: {textContent: any}) => {
      element.textContent
    });
    assert.strictEqual(titile, "Oscar Mcconnell", "Отображается неправильное сообщение");

  });
})