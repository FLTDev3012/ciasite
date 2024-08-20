import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="critere"
export default class extends Controller {
  static targets = ["premierepage", "deuxiemepage", "troisiemepage" ]
  connect() {
    console.log("Critère controller connecté!");
  }

  update1() {
    // au clic on passe en display
    this.premierepageTarget.classList.remove("d-none")
    this.deuxiemepageTarget.classList.add("d-none")
    this.troisiemepageTarget.classList.add("d-none")
  }

  update2() {

    // au clic on passe en display
    this.deuxiemepageTarget.classList.remove("d-none")
    this.premierepageTarget.classList.add("d-none")
    this.troisiemepageTarget.classList.add("d-none")
  }

  update3() {
    // au clic on passe en display
    this.troisiemepageTarget.classList.remove("d-none")
    this.premierepageTarget.classList.add("d-none")
    this.deuxiemepageTarget.classList.add("d-none")
  }
}


// data-action="click->dashboard#update1"

// data-dashboard-target="premierepage"
