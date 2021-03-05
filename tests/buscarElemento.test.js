import homePage from '../pages/home.page';

import searchPage from '../pages/search.page';

import articlePage from '../pages/article.page';


import DATOS from '../datos/articles';

describe('buscarElemento', function () {
    DATOS.forEach(({article}) => {
    it("Deberia buscar un elemento, clickear el primer resultado y elegir un talle l ", () => {
        homePage.abrir('/');         
        homePage.buscar(article);
        expect(homePage.obtenerTextoBuscado()).to.equal(article);
        let art = `"${article.toUpperCase()}"`
        expect(searchPage.obtenerResultadoBusqueda()).to.equal(art);
        searchPage.ingresarAlResultado();
        articlePage.seleccionarOpcion(2);
        expect(articlePage.obtenerOpcionSeleccionada()).to.equal('3');
       
    });
});
  });