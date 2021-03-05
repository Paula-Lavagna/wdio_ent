import BasePage from './base.page';

 class SearchPage extends BasePage {

    //Elementos Web
    get resultado(){ return $('.product-container:first-child a.product-name') }
    get busqueda(){ return $('h1 span.lighter')}
    get list(){ return $('#list')}
    get firstAddToCompare(){ return $('.product-container:first-child a.add_to_compare')}
    get compareCant(){return $('strong.total-compare-val')}

    //-------------------------------------------------------------------------------------------------------//
  
    /**
     * Click en el resultado de la búsqueda
     */
    ingresarAlResultado() {
        addStep(`Ingresar al resultado`)
        super.clickearElemento(this.resultado);
    }

    /**
     * Obtener texto del resultado de la búsqueda
     */
    obtenerResultadoBusqueda() {
        addStep(`Obtener Busqueda`)
        return this.busqueda.getText();
    }

    clickList(){
        addStep(`ver en modo lista`)
        super.clickearElemento(this.list);
    }

    clickCompare(){
        addStep(`agregar a compare`)
        this.firstAddToCompare.waitForDisplayed();
        super.clickearElemento(this.firstAddToCompare);
    }

    obtenerCantCompare(){
        addStep(`Obtener cantidad de articulos en compare`)
        return this.compareCant.getText();
    }

 }

export default new SearchPage();