//Created by Frank 12.03.2016 on (23:11). FOR PROJECT ©VKhunter
//FILE NAME: music.ctrl __ (IDE PhpStorm) Березень 2016
import app from "./../application";

app.controller('MusicController', function ($scope, $http) {
  let token = JSON.parse(localStorage.getItem('accessToken'));
  $scope.accessToken = token['access_token'];
  $scope.userId = token['user_id'];

  $scope.getListSounds = function (token, userId) {
    $http({
      method: 'GET',
      url: 'https://api.vk.com/method/audio.get',
      params: {
        user_ids: userId,
        access_token: token
      }
    }).success((data) => {
      $scope.musicList = data.response;
    });
  };
  $scope.getListSounds($scope.accessToken, $scope.userId);
});
