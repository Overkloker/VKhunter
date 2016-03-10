//Created by Frank 07.03.2016 on (22:09). FOR PROJECT ©VKhunter
//FILE NAME: state __ (IDE PhpStorm) Березень 2016
import app from "./../application";

import appLayoutTpl from "./../../themes/front/templates/app.html";
import indexLayoutTpl from "./../../themes/front/templates/index.html";

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('front', {
      url: '/',
      templateUrl: appLayoutTpl,
      controller: "AppController"
    })
    .state('front.index', {
      url: '',
      templateUrl: indexLayoutTpl,
      controller: "IndexController"
    })
});
