let $http, $q;
class Login {
  constructor(_$http_, _$q_) {
    $http = _$http_;
    $q = _$q_;
  }
  isLoggedIn() {
    let url = "/authenticate"
    return $http.get(url)
    .then((response) => {
      this.user = response.data;
      return this.user;
    })
    .catch((error) => { 
      console.log('error while authenticating', error);
      throw ('user is not logged in.');
    })
  }
  login(username, password) {
    let url = "/login";
    return $http.post(url, {username: username, password: password})
    .then((response) => {
      this.user = response.data;
      return this.user;
    })
    .catch((error) => {
      console.log('error while signing in', error);
      throw ('Invalid username or password.');
    })
  }
  logout() {
    let url = "/logout";
    return $http.put(url)
    .then((response) => {
      this.user = null;
      return this.user;
    })
    .catch((error) => {
      console.log('error while signing in', error);
      throw ('can not logout.');
    })
  }
};

export default Login;