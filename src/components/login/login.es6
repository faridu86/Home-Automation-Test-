'use strict';
import _ from 'lodash';
import _s from 'underscore.string';
let ctrl, LoginService, $state;

class Login {
  constructor(_LoginService_, _$state_) {
    ctrl = this;
    LoginService = _LoginService_;
    $state = _$state_;
  }
  $onInit(){
    ctrl.username = "";
    ctrl.password = "";
    ctrl.error = "";
    ctrl.isLoggedIn();
  }
  isLoggedIn() {
    LoginService.isLoggedIn();
  }
  login() {
    ctrl.error = "";
    if(_s.isBlank(ctrl.username) || _s.isBlank(ctrl.password)) {
      ctrl.error = "Please enter valid username and password.";
      return;
    }

    LoginService.login(ctrl.username, ctrl.password)
    .then(() => {
      console.log('login successful');
      $state.go('dashboard');
    })
    .catch((error) => {
      console.log(error);
      ctrl.error = error;
    })
  }
}

const login = {
  restrict: 'E',    
  bindings: {},
  controller: Login,
  controllerAs: 'ctrl',
  templateUrl: './components/login/view.html'
}

export default login;