import homePage from '../pages/home.page';
import articlePage from '../pages/article.page';
import bestSellersPage from '../pages/bestSellers.page';
import authenticationPage from '../pages/authentication.page';
import accountPage from '../pages/account.page';



describe('Login', function () {
    
    it("Hace un Login", () => {
        let email = "pepe@pepe.com";
        let pwd = "pepito"
        homePage.abrir('/');
        homePage.aSignIn();
        authenticationPage.ingresarEmail(email);
        expect(authenticationPage.obtenerEmail()).to.equal(email);
        authenticationPage.ingresarPwd(pwd)
        expect(authenticationPage.obtenerPwd()).to.equal(pwd);
        authenticationPage.loguearse();
        expect(accountPage.obtenerHeading()).to.equal("MY ACCOUNT");
        expect(homePage.obtenerUser()).to.equal("Jose Perez");

    });

});