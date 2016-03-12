//Created by Frank 11.03.2016 on (19:21). FOR PROJECT ©VKhunter
//FILE NAME: auth __ (IDE PhpStorm) Березень 2016
import app from "./../application";


import signInModal from "./../../themes/front/templates/dialogs/dialog.html";

app.service('AuthService', function ($http) {

  class Authentication {
    //signInDialog() {
    //    $mdDialog.show(
    //      $mdDialog.alert()
    //        .clickOutsideToClose(true)
    //        .title('Авторизація')
    //        .ok('Авторизуватися')
    //        .openFrom('#left')
    //        .closeTo(angular.element(document.querySelector('#right')))
    //    );
    //}

    getAccessToken(code) {
      return $http({
        method: "GET",
        url: "https://oauth.vk.com/access_token",
        params: {
          client_id: '5347217',
          client_secret: 'vwt0HF0j89Y6K4IBAfPr',
          redirect_uri: 'http://vkhunter.client.local/',
          code: code
        }
      }).success(() => {
        console.log("access token OK");
      })
    }
  }

  return new Authentication();
});

