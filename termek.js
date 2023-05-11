
class Termek {
    #adat;
    #divELEM;
    #buttonELEM;

    constructor(adat, szuloELEM){
        this.#adat = adat;
        
    
        szuloELEM.append(`<div class="divElem">
        <p>${this.#adat.nev}</p>
        <p>${this.#adat.kor}</p>
        <p>${this.#adat.ar}</p>
        <button>"Katt ide"</button>
        </div>`);
        this.#divELEM = szuloELEM.children(".divElem:last-child");
        this.#buttonELEM = this.#divELEM.children(".divElem:last-child");
        this.#buttonELEM.on("click", function() {
            this.kattintasTrigger();
            
        })


    }

    getAdat(){
        return this.#adat;
    }

    kattintasTrigger(){
        let e = new CustomEvent("kedvenc", {detail: this})
        window.dispatchEvent(e);
    }

}

export default Termek;