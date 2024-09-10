import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="estimation"
export default class extends Controller {
  static targets = [ "firstCatFirstType", "deuxiemecrit" ]
  connect() {
    console.log("estimation controller connecté!")
  }

  first_cat_first_choice() {



    //console.log("click!")
    //this.firstCatFirstTypeTarget.classList.add("teston");

    this.firstCatFirstTypeTargets.forEach((target) => {
      target.classList.add("teston");
    });
  }
}
