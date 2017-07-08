let $http, $q, $cookies;
class Login{
  constructor(_$http_, _$q_, _$cookies_) {
    $http = _$http_;
    $q = _$q_;
    $cookies = _$cookies_;
  }
  isLoggedIn() {

  }
  login(username, password) {
    let $url = "/login";
    return $http.post($url, {username: username, password: password})
    .then((response) => {
      this.user = response.data;
      return this.user;
    })
    .catch((error) => {
      console.error('error while signing in', error);
      throw ('Invalid username or password.');
    })
  }
  logout() {
    let apiKey = $cookies.get('x-haa-api-key');
    console.log(apiKey);
    let $url = "/logout";
    return $http.put($url, {apiKey: apiKey})
    .then((response) => {
      console.log('lskdfjsldfj')
      $cookies.remove('x-haa-api-key');
      this.user = null;
      return this.user;
    })
    .catch((error) => {
      console.error('error while signing in', error);
      throw ('can not logout.');
    })
  }
};

export default Login;