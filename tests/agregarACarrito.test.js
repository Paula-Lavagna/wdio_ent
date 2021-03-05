import homePage from '../pages/home.page';
import articlePage from '../pages/article.page';
import bestSellersPage from '../pages/bestSellers.page';



describe('buscarElemento', function () {
    
    it("Agrega el primer articulo de best sellers al carrito", () => {
        homePage.abrir('/');
        homePage.tabs.scrollIntoView()
        expect(
            browser.checkElement(homePage.tabs, "tabs", {}),
            "Error: no coincide con la original"
        ).equal(0);
        homePage.irABestSellers();        
        expect(browser.checkElement(homePage.tabs, "tabs", {})).to.not.equal(0);
        bestSellersPage.ingresarAPrimerElemento();
        articlePage.agregarACarrito();
        expect(articlePage.obtenerSuccessfullMessage()).to.have.string('Product successfully added to your shopping cart');
        articlePage.cerrarMensaje();
    });

});