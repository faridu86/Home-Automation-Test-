'use strict';

let ctrl, $state, LoginService;
class DashboardCtrl {
  constructor (_$state_, _LoginService_) {
    ctrl = this;
    $state = _$state_;
    LoginService = _LoginService_;
  }
  $onInit() {
    LoginService.isLoggedIn()
    .then((user) => {
      ctrl.user = user;
    }).catch((error) => {
      console.log(error);
      $state.go('login');
    });
  }
}
export default DashboardCtrl;