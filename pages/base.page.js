const PAGE_TIMEOUT = 10000

 export default class BasePage {


    /**
     * Abrir página
     * @param {String} ruta a la cual acceder
     */
    abrir(ruta) {
        addStep(`Abrir: ${ruta}`)
        browser.url(`${ruta}`);
    }


    /**
     * Esperar a que un elemento sea clickeable y hacer click
     * @param {Object} elemento a clickear
     */
    clickearElemento(elemento) {
        addStep(`Clickear Elemento: ${elemento}`)
        elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        elemento.click();
    }


    /**
     * Método para enviar texto a un elemento
     * @param {Object} elemento que recibirá el texto
     * @param {String} texto a envíar 
     */
    clearAndSendKeys(elemento, texto){
        addStep(`Clear And Send Keys: ${texto}`)
        elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        elemento.clearValue();
        elemento.click();
        elemento.keys(texto);
    }


}