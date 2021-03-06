//Created by Frank 07.03.2016 on (22:09). FOR PROJECT ©VKhunter
//FILE NAME: state __ (IDE PhpStorm) Березень 2016
import app from "./../application";

import appLayoutTpl from "./../../themes/front/templates/app.html";
import indexLayoutTpl from "./../../themes/front/templates/index.html";

import userListTpl from "./../../themes/front/templates/user/list.html";

import musicListTpl from "./../../themes/front/templates/music/list.html";

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

    .state('front.user', {
      url: 'user',
      abstract: true,
      template: "<ui-view></ui-view>"
    })
    .state('front.user.list', {
      url: '',
      templateUrl: userListTpl,
      controller: "UserController"
    })

    .state('front.music', {
      url: 'user',
      abstract: true,
      template: "<ui-view></ui-view>"
    })
    .state('front.music.list', {
      url: 'music',
      templateUrl: musicListTpl,
      controller: 'MusicController'
    })
});
