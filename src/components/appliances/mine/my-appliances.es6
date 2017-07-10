'use strict';

let ctrl, AppliancesFactory;

class MyAppliances {
  constructor(_AppliancesFactory_) {
    ctrl = this;
    AppliancesFactory = _AppliancesFactory_;
  }
  $onInit() {
    ctrl.userAppliancesIds = ctrl.userAppliances && _.map(ctrl.userAppliances, 'fk_appliance_id');
    _.each(ctrl.allAppliances, (appliance) => {
      appliance.t_status = JSON.parse(appliance.t_status);
      if (appliance.t_status === null){
        appliance.t_status = ctrl.setDefaultValue(appliance);
      }
    })
  }
  getApplianceOptions(appliance) {
    return ctrl.options[appliance.v_name];
  }
  setDefaultValue(appliance) {
    let applianceOptions = ctrl.getApplianceOptions(appliance);
    let defaultOptions = {};
    _.each(applianceOptions, (option, k) => {
      defaultOptions[k] = option.default;
    });
    return defaultOptions;
  }
  getAppliance(id) {
    return ctrl.appliances.all[id];
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
  isSwitch(optionKey) {
    return optionKey == 'Switch';
  }
  getSwitchOption(appliance){
    return ctrl.getApplianceOptions(appliance).Switch;
  }
  isSwitchOn(appliance) {
    let option = ctrl.getSwitchOption(appliance);
    return appliance.t_status && appliance.t_status.Switch && option.ON === appliance.t_status.Switch;
  }
  toggleSwitch(appliance){
    let option = ctrl.getSwitchOption(appliance);
    appliance.t_status.Switch = ctrl.isSwitchOn(appliance) ? option.OFF : option.ON ;
    ctrl.saveApplianceControl(appliance)
      .catch((err) => {
        console.log(err);
        appliance.t_status.Switch = ctrl.isSwitchOn(appliance) ? option.OFF : option.ON ;
      });
  }

  isSwing(optionKey) {
    return optionKey == 'Swing';
  }
  getSwingOption(appliance){
    return ctrl.getApplianceOptions(appliance).Swing;
  }
  isSwingOn(appliance) {
    let option = ctrl.getSwingOption(appliance);
    return appliance.t_status && appliance.t_status.Swing && option.ON === appliance.t_status.Swing;
  }
  toggleSwing(appliance){
    let option = ctrl.getSwingOption(appliance);
    appliance.t_status.Swing = ctrl.isSwingOn(appliance) ? option.OFF : option.ON ;
    ctrl.saveApplianceControl(appliance)
      .catch((err) => {
        console.log(err);
        appliance.t_status.Swing = ctrl.isSwingOn(appliance) ? option.OFF : option.ON ;
      });
  }

  isApplianceActive(appliance) {
    return true;
  }
  hasReachedMinValue(appliance, optionKey) {
    let optionValue = appliance.t_status[optionKey];
    let minOptionValue = ctrl.getApplianceOptions(appliance)[optionKey].Min;
    return optionValue === minOptionValue;
  }
  hasReachedMaxValue(appliance, optionKey) {
    let optionValue = appliance.t_status[optionKey];
    let minOptionValue = ctrl.getApplianceOptions(appliance)[optionKey].Max;
    return optionValue === minOptionValue;
  }
  decreaseOptionValue(appliance, optionKey) {
    appliance.t_status[optionKey] = appliance.t_status[optionKey] - 1;
    ctrl.saveApplianceControl(appliance)
      .catch((err) => {
        console.log(err);
        appliance.t_status[optionKey] = appliance.t_status[optionKey] + 1;
      });
  }
  increaseOptionValue(appliance, optionKey) {
    appliance.t_status[optionKey] = appliance.t_status[optionKey] + 1;
    ctrl.saveApplianceControl(appliance)
      .catch((err) => {
        console.log(err);
        appliance.t_status[optionKey] = appliance.t_status[optionKey] - 1;
      });
  }
  saveApplianceControl(appliance) {
    console.log('saveApplianceControl');
    return AppliancesFactory.saveApplianceControl(appliance)
    .then((appliance) => {
      ctrl.appliance = appliance;
      console.log('appliance option changed!')
    })
    .catch((err) => {
      throw(err);
    })
  }
}

let myAppliances = {
  restrict: 'E',
  bindings: {
    appliances: '='
  },
  controller: MyAppliances,
  controllerAs: 'ctrl',
  templateUrl: './components/appliances/mine/view.html'
}

export default myAppliances;