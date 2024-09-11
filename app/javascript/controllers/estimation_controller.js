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
        target.classList.add("estimation-selected-block");
      });

      this.firstCatFirstTypeTargets.forEach((target, index) => {
        // Appliquer le délai d'animation d'abord

        target.style.animationDelay = `${index * 0.1}s`;

        // Utiliser setTimeout pour ajouter la classe après le délai
        setTimeout(() => {
          target.classList.add("estimation-selected");
        }, index * 200); // 200ms correspond à 0.2s
      });

      [...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets].forEach((target) => {
        target.classList.remove("estimation-selected", "estimation-selected-block");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });
    }
    else {
      this.firstCatFirstTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected",  "estimation-selected-block");
      });
    }
  }

  first_cat_second_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {

      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets].forEach((target) => {
        target.classList.add("estimation-selected-block");
      });

      // Combine les deux groupes de cibles
      const combinedTargets = [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets];

      combinedTargets.forEach((target, index) => {
        // Appliquer le délai d'animation d'abord
        target.style.animationDelay = `${index * 0.1}s`;

        // Utiliser setTimeout pour ajouter la classe après le délai
        setTimeout(() => {
          target.classList.add("estimation-selected");
        }, index * 200); // 200ms correspond à 0.2s
      });




      this.firstCatThirdTypeTargets.forEach((target) => {
        target.classList.remove("estimation-selected",  "estimation-selected-block");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });

    }
    else {

      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets].forEach((target) => {
        target.classList.remove("estimation-selected", "estimation-selected-block");
      });

    }

    // remove color bad type




  }

  first_cat_third_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {


      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets].forEach((target) => {
        target.classList.add("estimation-selected-block");
      });

      // Combine les trois groupes de cibles
      const combinedTargets = [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets];

      combinedTargets.forEach((target, index) => {
        // Appliquer le délai d'animation d'abord
        target.style.animationDelay = `${index * 0.1}s`;

        // Utiliser setTimeout pour ajouter la classe après le délai
        setTimeout(() => {
          target.classList.add("estimation-selected");
        }, index * 200); // 200ms correspond à 0.2s
      });


      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.remove("estimation-hidden");
      });

    }
    else {

      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets].forEach((target) => {
        target.classList.remove("estimation-selected", "estimation-selected-block");
      });

    }

  }

  first_cat_fourth_choice(event) {

    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {

      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets].forEach((target) => {
        target.classList.add("estimation-selected-block");
      });

      this.firstCatFourthTypeTargets.forEach((target) => {
        target.classList.add("estimation-hidden");
      });

      // Combine les trois groupes de cibles
      const combinedTargets = [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets];

      combinedTargets.forEach((target, index) => {
        // Appliquer le délai d'animation d'abord
        target.style.animationDelay = `${index * 0.1}s`;

        // Utiliser setTimeout pour ajouter la classe après le délai
        setTimeout(() => {
          target.classList.add("estimation-selected");
        }, index * 200); // 200ms correspond à 0.2s
      });



    }
    else {

      [...this.firstCatFirstTypeTargets, ...this.firstCatSecondTypeTargets, ...this.firstCatThirdTypeTargets].forEach((target) => {
        target.classList.remove("estimation-selected", "estimation-selected-block");
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
      this.secondCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }


  }

  second_cat_second_choice(event) {


    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    // add color good type
    if (isChecked) {
      this.secondCatSecondTypeTarget.classList.add("estimation-selected", "estimation-selected-block");
    }
    else {
      this.secondCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  // ------ third category of selection template ------------


  third_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatFirstTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  third_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatSecondTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  third_cat_third_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.thirdCatThirdTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.thirdCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.thirdCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.thirdCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  // ------ fourth category of selection template ------------

  fourth_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatFirstTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  fourth_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatSecondTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  fourth_cat_third_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fourthCatThirdTypeTarget.classList.add("estimation-selected", "estimation-selected-block");

      this.fourthCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
      this.fourthCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }
    else {
      this.fourthCatThirdTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }

  // ------ fifth category of selection template ------------

  fifth_cat_first_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fifthCatFirstTypeTarget.classList.add("estimation-selected", "estimation-selected-block");
    }
    else {
      this.fifthCatFirstTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }


  fifth_cat_second_choice(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (isChecked) {
      this.fifthCatSecondTypeTarget.classList.add("estimation-selected", "estimation-selected-block");
    }
    else {
      this.fifthCatSecondTypeTarget.classList.remove("estimation-selected", "estimation-selected-block");
    }

  }


}
