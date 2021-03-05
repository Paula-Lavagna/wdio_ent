import BasePage from './base.page';

 class ArticlePage extends BasePage {

    //Elementos Web
    get dropDownTalle(){ return $('#group_1') } 
    get addToCart(){return $('#add_to_cart button')} 
    get successMessage(){return $('div.layer_cart_product h2')} 
    get modalMessage(){return $('div.layer_cart_product')} 
    get cerrar(){return $('span.cross')}

    //-------------------------------------------------------------------------------------------------------//
  
    /**
     * Click en el resultado de la búsqueda
     */
    seleccionarOpcion(opcion) {
        addStep(`Seleccionar opcion: ${opcion}`)
       return this.dropDownTalle.selectByIndex(opcion);
        
    }

    /**
     * Obtener texto del resultado de la búsqueda
     */
    obtenerOpcionSeleccionada() {
        addStep(`Obtener opcion seleccionada`)
        return this.dropDownTalle.getValue();
        
    }

    agregarACarrito(){
        addStep(`agregar A Carrito`)
        return super.clickearElemento(this.addToCart);
    }

    obtenerSuccessfullMessage(){
        addStep(`Obtener mensaje`)
        this.modalMessage.waitForDisplayed();
        this.successMessage.waitForDisplayed();
        return this.successMessage.getText();
    }

    cerrarMensaje(){
        addStep(`Cerrar mensaje`)
        super.clickearElemento(this.cerrar);
    }

 }

export default new ArticlePage();