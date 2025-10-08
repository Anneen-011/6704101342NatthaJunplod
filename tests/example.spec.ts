// File: tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('form interaction', async ({ page }) => {
  // เปิดเว็บของคุณ (เปลี่ยน URL ให้ตรงกับเว็บจริง)
  await page.goto('http://localhost:3000');

  // กรอกชื่อ
  await page.locator('input[name="name"]').fill('Natth');

  // กรอกอายุ
  await page.locator('input[name="age"]').fill('26');

  // toggle switch/checkbox
  const subscribeSwitch = page.locator('input[name="subscribe"]');
  if (!(await subscribeSwitch.isChecked())) {
    await subscribeSwitch.check();
  }

  // กดปุ่ม Submit
  await page.locator('button[type="submit"]').click();

  // ตรวจสอบข้อความหลัง submit (สมมติมี div#result)
  await expect(page.locator('#result')).toHaveText(/Natth/);

  // กดปุ่ม Reset
  await page.locator('button[type="reset"]').click();

  // ตรวจสอบว่าฟิลด์ว่างทั้งหมด
  await expect(page.locator('input[name="name"]')).toHaveValue('');
  await expect(page.locator('input[name="age"]')).toHaveValue('');
  await expect(subscribeSwitch).not.toBeChecked();
});
