const puppeteer = require('puppeteer');

describe('Inicio de sesión', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Iniciar el navegador y abrir una página nueva
    browser = await puppeteer.launch({ 
      headless: false
    });
    page = await browser.newPage();
  });

  // afterAll(async () => {
  //   // Cerrar el navegador al terminar todas las pruebas
  //   await browser.close();
  // });

  test('El usuario puede iniciar sesión', async () => {
    // Ir a la página de inicio de sesión
    
    await page.goto('http://emorell-dt.dnsalias.com:23060/SODA_PREPROD_CONDE/login.zul#/warehouses');
    page.waitForNavigation(); // Esperar a que la página cargue completamente

    // Completar los campos de usuario y contraseña
    await page.type('#u', 'lbarrantes');
    await page.type('#p', '123456');

    // Hacer clic en el botón de inicio de sesión

    await page.waitForSelector('.z-button');
    await page.click('.z-button');
  
    // Verificar que el usuario ha iniciado sesión exitosamente

    const title = await page.title();
    if ( expect(title).toMatch('HOME')){
      console.log("Inicio de sesion OK")
    }else{console.error("No se pudo iniciar sesion")}
  });


  test('Operaciones', async () => {
    const configuracion = await page.evaluateHandle((text, className) => {
      const text = text;
      const className = className;
    })



  });
  });