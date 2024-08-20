import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="critere"
export default class extends Controller {
  static targets = [ "premiercrit", "deuxiemecrit" ]
  connect() {
    console.log("Critère controller connecté!")
  }

  // update1() {
  //   // au clic on passe en display
  //   this.premierepageTarget.classList.remove("d-none")
  //   this.deuxiemepageTarget.classList.add("d-none")
  //   this.troisiemepageTarget.classList.add("d-none")
  // }

  update2() {

    console.log("Updating premiercrit targets:");
    this.premiercritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    console.log("Updating deuxiemecrit targets:");
    this.deuxiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

  }

  update3() {
    // au clic on passe en display
    this.deuxiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });
  }

}


// data-action="click->critere#update1"

// data-critere-target="premiercrit"
