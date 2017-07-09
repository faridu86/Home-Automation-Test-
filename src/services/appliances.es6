let $http, $q;
class Appliances {
  constructor(_$http_, _$q_) {
    $http = _$http_;
    $q = _$q_;
  }
  appliances() {
    let url = '/appliances/1';
    return $http.get(url)
    .then((response) => {
      this.appliances = response.data;
      return this.appliances;
    })
    .catch((error) => { 
      console.log('error while getting appliances', error);
      throw ('appliances not found.');
    });
  }

  saveConfiguration(ids) {
    let url = '/appliances/1';
    return $http.post(url, {ids: ids})
    .then((response) => {
      this.appliances = response.data;
      return this.appliances;
    })
    .catch((error) => { 
      console.log('error while saving appliances configurations', error);
      throw ('appliances configuration failed.');
    });
  }

  saveApplianceControl(appliance) {
    let url = `/appliances/${appliance.id}`;
    return $http.put(url, {status: JSON.stringify(appliance.t_status)})
    .then((response) => {
      this.appliances = response.data;
      return this.appliances;
    })
    .catch((error) => { 
      console.log('error while saving appliances configurations', error);
      throw ('appliance control change failed.');
    });
  }
  
}

export default Appliances;