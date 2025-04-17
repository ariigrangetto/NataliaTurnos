import { test } from "@playwright/test";

test("Añadir un turno correctamente", async ({ page }) => {
  // 1. Abrir la aplicación
  await page.goto("http://localhost:5173/Turnos");

  //hacer click en el boton para mostrar el formulario
  await page.click("button.btn-nuevoTurno");

  //Esperar a que el formulario sea visible
  await page.waitForSelector("form.form-container");

  //Esperar a que los campos de entrada estén presentes
  await page.waitForSelector("input#nombre");
  await page.waitForSelector("input#motivo");
  await page.waitForSelector("input#date");
  await page.waitForSelector("input#time");
  await page.waitForSelector("select#seccion");

  // 2. Rellenar el formulario
  await page.fill("input#nombre", "Giovanna Grangetto");
  await page.fill("input#motivo", "Kapping");
  await page.fill("input#date", "2025-04-22"); // Seleccionar una fecha
  await page.fill("input#time", "10:00"); // Seleccionar una hora
  await page.selectOption("select#seccion", { label: "Uñas" });

  // 3. Enviar el formulario
  await page.click('button[type="submit"]');
});
