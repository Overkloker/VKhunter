//Created by Frank 10.03.2016 on (17:12). FOR PROJECT ©VKhunter
//FILE NAME: app.ctrl __ (IDE PhpStorm) Березень 2016
import app from "./../application";

app.controller('AppController', function ($scope, AuthService) {
  $scope.openDialog = function() {
    AuthService.signInDialog();
  };

  $scope.auth = () => {
    AuthService.signIn()
  }
});
