import Aszinkron from "./aszinkron.js";
import Termekek from "./termekek.js";
$(function () {
   const aszinkron = new Aszinkron();
   aszinkron.adatbe("adat.json",beolvasas)


})
function beolvasas(adat){
console.log(adat.adatLISTA);
new Termekek(adat.adatLISTA);
}