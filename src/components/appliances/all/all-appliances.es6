'use strict';

import _ from 'lodash';
let ctrl, ApplianceService, $state;

class AllAppliances {
  constructor(_ApplianceService_, _$state_) {
    ctrl = this;
    ctrl.selected = null;
    ApplianceService = _ApplianceService_;
    $state = _$state_;
  }
  $onInit() {
    ctrl.userAppliancesIds = ctrl.userAppliances && _.map(ctrl.userAppliances, 'fk_appliance_id');
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
  get candidateAppliancesIds() {
    let allAppliancesIds = ctrl.allAppliances && _.map(ctrl.allAppliances, 'id');
    let userAppliancesIds = ctrl.userAppliancesIds;
    return _.filter(allAppliancesIds, (id) => {
      return !_.includes(userAppliancesIds, id);
    })
  }
  addToUserAppliances(id) {
    ctrl.userAppliancesIds.push(id);
  }
  removeFromUserAppliances(index) {
    ctrl.userAppliancesIds.splice(index, 1);
  }
  getAppliance(id) {
    return ctrl.appliances.all[id];
  }
  isNewConfiguration() {
    return !_.isEqual(ctrl.userAppliancesIds, _.map(ctrl.userAppliances, 'fk_appliance_id'))
  }
  saveConfiguration() {
    ApplianceService.saveConfiguration(ctrl.userAppliancesIds)
    .then((appliances)=> {
      ctrl.appliances = appliances;
      $state.go('dashboard')
    })
    .catch((err) => {
      console.log(err);
    })
  }
  get lists() {
    let lists = {
      'All Appliances': ctrl.candidateAppliancesIds,
      'My Appliances': ctrl.userAppliancesIds
    };
    return lists;
  }
}

let allAppliances = {
  restrict: 'E',
  bindings: {
    appliances: '='
  },
  controller: AllAppliances,
  controllerAs: 'ctrl',
  templateUrl: './components/appliances/all/view.html'
}

export default allAppliances;