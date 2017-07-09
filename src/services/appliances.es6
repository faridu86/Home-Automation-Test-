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
  
}

export default Appliances;