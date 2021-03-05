import homePage from '../pages/home.page';
import articlePage from '../pages/article.page';
import bestSellersPage from '../pages/bestSellers.page';
import authenticationPage from '../pages/authentication.page';
import accountPage from '../pages/account.page';
import contactUsPage from '../pages/contactUs.page';



describe('Envir mensaje', function () {
    
    it("ir a contact us y enviar un mensaje", () => {
        let email = "pepe@pepe.com";
        let msg = "Esto es un mensaje de prueba"
        homePage.abrir('/');
        homePage.aContactUs();
        contactUsPage.seleccionarHeading(1);
        expect(contactUsPage.obtenerHeadingSeleccionada()).to.equal("2");
        contactUsPage.ingresarEmail(email);        
        expect(contactUsPage.obtenerEmail()).to.equal(email);
        contactUsPage.ingresarMessage(msg);
        expect(contactUsPage.obtenerMessage()).to.equal(msg);
        contactUsPage.submitMessage();
        expect(contactUsPage.obtenerTextoAlerta()).to.equal("Your message has been successfully sent to our team.");
        

    });

});