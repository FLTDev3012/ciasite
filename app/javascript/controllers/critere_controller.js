import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="critere"
export default class extends Controller {
  static targets = [ "premiercrit", "deuxiemecrit", "troisiemecrit", "premiercrittitle", "deuxiemecrittitle", "troisiemecrittitle", "quatriemecrittitle", "cinquiemecrittitle", "premiercritheader", "deuxiemecritheader", "troisiemecritheader", "quatriemecritheader", "cinquiemecritheader" ]
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

    // add remove header h3 and p
    this.premiercritheaderTargets.forEach((target) => {
      target.classList.remove("d-none");
    });

    this.deuxiemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.troisiemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.quatriemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.cinquiemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

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

    // add remove header h3 and p

    this.deuxiemecritheaderTargets.forEach((target) => {
      target.classList.remove("d-none");
    });

    this.premiercritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.troisiemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.quatriemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

    this.cinquiemecritheaderTargets.forEach((target) => {
      target.classList.add("d-none");
    });

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

    // add remove header h3

    this.troisiemecritheaderTarget.classList.remove("d-none");

    this.premiercritheaderTarget.classList.add("d-none");
    this.deuxiemecritheaderTarget.classList.add("d-none");
    this.quatriemecritheaderTarget.classList.add("d-none");
    this.cinquiemecritheaderTarget.classList.add("d-none");

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

    // add remove header h3

    this.quatriemecritheaderTarget.classList.remove("d-none");

    this.premiercritheaderTarget.classList.add("d-none");
    this.deuxiemecritheaderTarget.classList.add("d-none");
    this.troisiemecritheaderTarget.classList.add("d-none");
    this.cinquiemecritheaderTarget.classList.add("d-none");

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

    // add remove header h3

    this.cinquiemecritheaderTarget.classList.remove("d-none");

    this.premiercritheaderTarget.classList.add("d-none");
    this.deuxiemecritheaderTarget.classList.add("d-none");
    this.troisiemecritheaderTarget.classList.add("d-none");
    this.quatriemecritheaderTarget.classList.add("d-none");

  }

}

// westside
