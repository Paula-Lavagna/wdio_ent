import BasePage from './base.page';

 class AuthenticationPage extends BasePage {

    //WebElements
    get email(){ return $('#email') };
    get password(){ return $('#passwd') };
    get submitBtn(){ return $('#SubmitLogin') };
    

    //-------------------------------------------------------------------------------------------------------//

   
    ingresarEmail(email) {
        addStep(`ingresar Email: ${email}`)
        super.clearAndSendKeys(this.email, email);        
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
    obtenerEmail() {
        addStep('Obtener email ingresado')
        return this.email.getValue();
    }

    ingresarPwd(pwd) {
        addStep(`ingresar Email: ${pwd}`)
        super.clearAndSendKeys(this.password, pwd);        
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
    obtenerPwd() {
        addStep('Obtener email ingresado')
        return this.password.getValue();
    }

    loguearse(){
        addStep('loguearse')
        super.clickearElemento(this.submitBtn);
    }

   


 }
export default new AuthenticationPage();