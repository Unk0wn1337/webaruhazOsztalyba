import adat from "./adat.js";
class Termek{
    
    constructor(adatLISTA, szuloELEM){
            this.adatLISTA = adatLISTA;
            this.szuloELEM = szuloELEM;
            for (let index = 0; index < adatLISTA.length; index++) {
                const termek = new Termek();
                
            }
            szuloELEM.append(`<div> 
                                <h3> </h3>  
                                <p>  </p>
                                <button> </button>  
                              </div>
                              `)
        
    }


}
export default Termek;