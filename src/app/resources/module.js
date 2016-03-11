//Created by Frank 10.03.2016 on (20:23). FOR PROJECT ©VKhunter
//FILE NAME: module __ (IDE PhpStorm) Березень 2016
import "angular-resource";

export default angular.module("vkhunter.models", [
  'ngResource'
]).config(function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = true;
});

