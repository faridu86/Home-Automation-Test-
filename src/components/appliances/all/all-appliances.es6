'use strict';
let ctrl, ApplianceService;
class AllAppliances {
  constructor(_ApplianceService_) {
    ctrl = this;
    ApplianceService = _ApplianceService_;
  }
  $onInit() {
    ApplianceService.appliances()
    .then((appliances) => {
      ctrl.appliances = appliances;
    });
  }
  get options() {
    return ctrl.appliances && ctrl.appliances.options;
  }
  get allAppliances() {
    return ctrl.appliances && ctrl.appliances.all;
  }
  get userAppliances() {
    return ctrl.appliances && ctrl.appliances.userAppliances;
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