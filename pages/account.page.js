import BasePage from './base.page';

 class AccountPage extends BasePage {

    //WebElements
    get heading(){ return $('#center_column h1') };
   
   

    obtenerHeading() {
        addStep(`Obtener Heading`)
        return this.heading.getText();
    }

   
   


 }
export default new AccountPage();