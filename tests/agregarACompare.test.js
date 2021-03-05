import homePage from "../pages/home.page";
import searchPage from "../pages/search.page";


describe('AgregarACompare', function () {
    
    it("Deberia buscar un elemento y agregarlo a compare ", () => {
        homePage.abrir('/');
        let article = "blouse"         
        homePage.buscar(article);
        expect(homePage.obtenerTextoBuscado()).to.equal(article);
        let art = `"${article.toUpperCase()}"`
        expect(searchPage.obtenerResultadoBusqueda()).to.equal(art);
        searchPage.clickList();
        searchPage.clickCompare();
        browser.pause(1000);
        expect(searchPage.obtenerCantCompare()).to.equal("1");
              
    });

  });