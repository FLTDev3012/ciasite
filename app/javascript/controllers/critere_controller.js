import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="critere"
export default class extends Controller {
  static targets = [ "premiercrit", "deuxiemecrit", "troisiemecrit", "premiercrittitle", "deuxiemecrittitle", "troisiemecrittitle", "quatriemecrittitle", "cinquiemecrittitle" ]
  connect() {
    console.log("Critère controller connecté!")
  }


  update1() {

    // add remove critere
    this.premiercritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    this.deuxiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

    this.troisiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

    // add remove title opacity
    this.premiercrittitleTarget.classList.add("opacity-one");

    this.deuxiemecrittitleTarget.classList.remove("opacity-one");
    this.troisiemecrittitleTarget.classList.remove("opacity-one");
    this.quatriemecrittitleTarget.classList.remove("opacity-one");
    this.cinquiemecrittitleTarget.classList.remove("opacity-one");

  }

  update2() {

    // add remove critere
    this.premiercritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    this.deuxiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

    this.troisiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

    // add remove title opacity
    this.deuxiemecrittitleTarget.classList.add("opacity-one");

    this.premiercrittitleTarget.classList.remove("opacity-one");
    this.troisiemecrittitleTarget.classList.remove("opacity-one");
    this.quatriemecrittitleTarget.classList.remove("opacity-one");
    this.cinquiemecrittitleTarget.classList.remove("opacity-one");

  }

  update3() {

    // add remove critere
    this.deuxiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    this.troisiemecritTargets.forEach((target) => {
      target.classList.remove("crit-present");
    });

    // add remove title opacity
    this.troisiemecrittitleTarget.classList.add("opacity-one");

    this.premiercrittitleTarget.classList.remove("opacity-one");
    this.deuxiemecrittitleTarget.classList.remove("opacity-one");
    this.quatriemecrittitleTarget.classList.remove("opacity-one");
    this.cinquiemecrittitleTarget.classList.remove("opacity-one");

  }

  update4() {

    // add remove critere
    this.deuxiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });


    this.troisiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    // add remove title opacity
    this.quatriemecrittitleTarget.classList.add("opacity-one");

    this.premiercrittitleTarget.classList.remove("opacity-one");
    this.deuxiemecrittitleTarget.classList.remove("opacity-one");
    this.troisiemecrittitleTarget.classList.remove("opacity-one");
    this.cinquiemecrittitleTarget.classList.remove("opacity-one");

  }

  update5() {

    // add remove critere
    this.deuxiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    this.troisiemecritTargets.forEach((target) => {
      target.classList.add("crit-present");
    });

    // add remove title opacity
    this.cinquiemecrittitleTarget.classList.add("opacity-one");

    this.premiercrittitleTarget.classList.remove("opacity-one");
    this.deuxiemecrittitleTarget.classList.remove("opacity-one");
    this.troisiemecrittitleTarget.classList.remove("opacity-one");
    this.quatriemecrittitleTarget.classList.remove("opacity-one");

  }

}

// westside
