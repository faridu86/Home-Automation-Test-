'use strict';

class AllAppliances {
  constructor() {
    console.log('All')
  }
}

let allAppliances = {
  restrict: 'E',
  bindings: {},
  controller: AllAppliances,
  controllerAs: 'ctrl',
  templateUrl: './components/appliances/all/view.html'
}

export default allAppliances;