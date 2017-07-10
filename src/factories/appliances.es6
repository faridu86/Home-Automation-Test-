let Appliances = (ApplianceService) => {

  let appliances = () => {
    return ApplianceService.appliances();
  }

  let saveConfiguration = (applianceIds) => {
    return ApplianceService.saveConfiguration(applianceIds);
  }

  let saveApplianceControl = (appliance) => {
    let applianceId = appliance.id;
    let status = JSON.stringify(appliance.t_status);
    return ApplianceService.saveApplianceControl(applianceId, status);
  }
  
  return {appliances, saveConfiguration, saveApplianceControl};
}

export default Appliances;