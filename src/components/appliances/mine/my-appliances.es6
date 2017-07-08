'use strict';

class MyAppliances {
  constructor() {
    console.log('My')
  }
}

let myAppliances = {
  restrict: 'E',
  bindings: {},
  controller: MyAppliances,
  controllerAs: 'ctrl',
  templateUrl: './components/appliances/mine/view.html'
}

export default myAppliances;