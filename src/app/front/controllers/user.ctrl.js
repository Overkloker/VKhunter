//Created by Frank 10.03.2016 on (21:02). FOR PROJECT ©VKhunter
//FILE NAME: user.ctrl __ (IDE PhpStorm) Березень 2016
import app from "./../application";

app.controller('UserController', function ($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://api.vk.com/method/users.get',
    params: {
      user_ids: 'alpinist_ss, id123397933, undertakermw2, id64110220',
      fields: 'sex'
    }
  }).then(function (response) {
    $scope.status = response.status;
    $scope.data = response.data.response;
  });
});
