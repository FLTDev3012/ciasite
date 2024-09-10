import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="estimation"
export default class extends Controller {
  static targets = [ "firstCatFirstType", "firstCatSecondType", "firstCatThirdType", "firstCatFourthType", "secondCatSecondType" ]
  connect() {
    console.log("estimation controller connecté!")
  }

  // ------ first category of selection (style website ------------
  first_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });
    }
    else {
      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });
    }
  }

  first_cat_second_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });

    }
    else {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

    }

    // remove color bad type




  }

  first_cat_third_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });

    }
    else {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });
    }

  }

  first_cat_fourth_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.add("estimation-selected");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.add("estimation-hidden");
      });
    }
    else {

      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatSecondTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });
    }

  }

  // ------ seconde category of selection template ------------

  second_cat_first_choice(event) {


    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {
      this.secondCatSecondTypeTarget.classList.remove("estimation-selected");
    }


  }

  second_cat_second_choice(event) {


    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {
      this.secondCatSecondTypeTarget.classList.add("estimation-selected");
    }
    else {
      this.secondCatSecondTypeTarget.classList.remove("estimation-selected");
    }

  }



}
