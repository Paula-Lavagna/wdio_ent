import BasePage from './base.page';

 class HomePage extends BasePage {

    //WebElements
    get barraDeBusqueda(){ return $('#search_query_top') };
    get bestSellers(){return $('a.blockbestsellers')};
    get tabs(){return $('#home-page-tabs')}
    get signIn(){return $('.header_user_info a.login')}
    get user(){return $('.header_user_info a span') }
    get contactUs(){return $('#contact-link a') }


    //-------------------------------------------------------------------------------------------------------//

    /**
     * Escribe el artículo en el campo de búsqueda y presiona Enter
     * @param {String} articulo que se buscará
     */
    buscar(articulo) {
        addStep(`Buscar artículo: ${articulo}`)
        super.clearAndSendKeys(this.barraDeBusqueda, articulo);
        this.barraDeBusqueda.keys('Enter');
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
    obtenerTextoBuscado() {
        addStep('Obtener texto de la barra de búsqueda')
        return this.barraDeBusqueda.getValue();
    }

    irABestSellers(){
        addStep('ir A BestSellers')        
        super.clickearElemento(this.bestSellers)
    }

    aSignIn(){
        addStep('ir A sign in')        
        super.clickearElemento(this.signIn)
    }

    obtenerUser() {
        addStep(`Obtener user`)
        return this.user.getText();
    }

    aContactUs(){
        addStep('ir a Contact Us')        
        super.clickearElemento(this.contactUs)
    }


 }
export default new HomePage();