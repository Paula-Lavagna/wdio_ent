import BasePage from './base.page';

 class ContactUsPage extends BasePage {

    //WebElements    
    get email(){ return $('#email') };
    get message(){ return $('#message') };
    get send(){ return $('#submitMessage') };
    get heading(){ return $('#id_contact') };
    get alerta(){ return $('#center_column p') };
   
    ingresarEmail(email) {
        addStep(`ingresar Email: ${email}`)
        super.clearAndSendKeys(this.email, email);        
    }
   
    obtenerEmail() {
        addStep('Obtener email ingresado')
        return this.email.getValue();
    }

    
   
    ingresarMessage(message) {
        addStep(`ingresar Email: ${message}`)
        super.clearAndSendKeys(this.message, message);        
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
    obtenerMessage() {
        addStep('Obtener mensaje ingresado')
        return this.message.getValue();
    }

    submitMessage(){
        addStep('submit message')
        super.clickearElemento(this.send);
    }

    seleccionarHeading(opcion) {
        addStep(`Seleccionar heading: ${opcion}`)
       return this.heading.selectByIndex(opcion);
        
    }

    obtenerHeadingSeleccionada() {
        addStep(`Obtener heading seleccionado`)
        return this.heading.getValue();
        
    }

    obtenerTextoAlerta() {
        addStep('Obtener texto alerta')
        this.alerta.waitForDisplayed();
        return this.alerta.getText();
    }


 }
export default new ContactUsPage();