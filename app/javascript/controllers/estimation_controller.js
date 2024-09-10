import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="estimation"
export default class extends Controller {
  static targets = [ "firstCatFirstType", "firstCatSecondType", "firstCatThirdType" ]
  connect() {
    console.log("estimation controller connecté!")
  }

  first_cat_first_choice() {

    // add color good type
    this.firstCatFirstTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

    // remove color bad type

    this.firstCatSecondTypeTargets.forEach((target) => {
      target.classList.remove("estimation-selected");
    });

    this.firstCatThirdTypeTargets.forEach((target) => {
      target.classList.remove("estimation-selected");
    });

  }

  first_cat_second_choice() {

    // add color good type

    this.firstCatFirstTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

    this.firstCatSecondTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

    // remove color bad type


    this.firstCatThirdTypeTargets.forEach((target) => {
      target.classList.remove("estimation-selected");
    });

  }

  first_cat_third_choice() {

    // add color good type

    this.firstCatFirstTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

    this.firstCatSecondTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

    this.firstCatThirdTypeTargets.forEach((target) => {
      target.classList.add("estimation-selected");
    });

  }




}
