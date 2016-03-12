//Created by Frank 10.03.2016 on (17:12). FOR PROJECT ©VKhunter
//FILE NAME: app.ctrl __ (IDE PhpStorm) Березень 2016
import app from "./../application";

import pages from "./../../libs/pages.json";

app.controller('AppController', function ($scope, AuthService, $location, $state, $log) {
  //$scope.openDialog = function () {
  //  AuthService.signInDialog();
  //};

  $scope.auth = () => {
    location.href = 'https://oauth.vk.com/authorize?' +
      'client_id=5347217&' +
      'redirect_uri=http://vkhunter.client.local/&' +
      'display=page&' +
      'revoke=1&' +
      'scope=friends photos audio&' +
      'v=5.50';
  };

  $scope.code = $location.search().code;

  $scope.checkCode = function () {
    AuthService.getAccessToken($scope.code);
  };

  if ($scope.code != undefined) {
    $scope.checkCode();
    $state.go('front')
  }

  //-------------------------

  $scope.pages = pages;
  $scope.selectedIndex = 0;
});
