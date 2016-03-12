//Created by Frank 11.03.2016 on (19:21). FOR PROJECT ©VKhunter
//FILE NAME: auth __ (IDE PhpStorm) Березень 2016
import app from "./../application";


import signInModal from "./../../themes/front/templates/dialogs/dialog.html";

app.service('AuthService', function ($http, $mdDialog) {

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

    signIn() {
      return $http({
        method: "GET",
        url: "https://oauth.vk.com/authorize",
        params: {
          client_id: '5347217',
          redirect_uri: 'http://vkhunter.client.local/',
          display: 'page'
        }
      }).success((data) => {
        console.log("ok");
        return data
      })
    }
  }


  return new Authentication();
});

