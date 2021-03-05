import BasePage from './base.page';

 class BestSellerPage extends BasePage {

     //Elementos Web
     get primerElemento(){ return $('#blockbestsellers li:first-child a.product-name') }     
 
    
     ingresarAPrimerElemento() {
         addStep(`Ingresar al primer elemento`)
         super.clickearElemento(this.primerElemento);
     } 
   

 }
export default new BestSellerPage();