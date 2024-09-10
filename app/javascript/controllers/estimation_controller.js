import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="estimation"
export default class extends Controller {
  static targets = [ "firstCatFirstType", "firstCatSecondType", "firstCatThirdType", "firstCatFourthType", "secondCatSecondType", "thirdCatFirstType", "thirdCatSecondType", "thirdCatThirdType", "fourthCatFirstType", "fourthCatSecondType", "fourthCatThirdType", "fifthCatFirstType", "fifthCatSecondType"]
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

  // ------ third category of selection template ------------


  third_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatFirstTypeTarget.classList.add("estimation-selected");

      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected");
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected");
    }

  }

  third_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatSecondTypeTarget.classList.add("estimation-selected");

      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected");
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected");
    }

  }

  third_cat_third_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatThirdTypeTarget.classList.add("estimation-selected");

      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected");
      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected");
    }

  }

  // ------ fourth category of selection template ------------

  fourth_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatFirstTypeTarget.classList.add("estimation-selected");

      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected");
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected");
    }

  }

  fourth_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatSecondTypeTarget.classList.add("estimation-selected");

      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected");
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected");
    }

  }

  fourth_cat_third_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatThirdTypeTarget.classList.add("estimation-selected");

      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected");
      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected");
    }
    else {
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected");
    }

  }

  // ------ fifth category of selection template ------------

  fifth_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fifthCatFirstTypeTarget.classList.add("estimation-selected");
    }
    else {
      this.fifthCatFirstTypeTarget.classList.remove("estimation-selected");
    }

  }


  fifth_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fifthCatSecondTypeTarget.classList.add("estimation-selected");
    }
    else {
      this.fifthCatSecondTypeTarget.classList.remove("estimation-selected");
    }

  }


}
