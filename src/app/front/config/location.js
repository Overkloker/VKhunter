//Created by Frank 12.03.2016 on (15:24). FOR PROJECT ©VKhunter
//FILE NAME: location __ (IDE PhpStorm) Березень 2016
import app from "./../application";

app.config(function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
});
