'use strict';

let $state, LoginService;
class Menu {
  constructor(_$state_, _LoginService_) {
    $state = _$state_;
    LoginService = _LoginService_;
  }
  logout() {
    LoginService.logout()
    .then(() => {
      $state.go('login');
    });
  }
}

const menu = {
  restrict: 'E',    
  bindings: {
    user: '='
  },
  controller: Menu,
  controllerAs: 'ctrl',
  templateUrl: './components/menu/view.html'
}

export default menu;