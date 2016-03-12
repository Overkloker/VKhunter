//Created by Frank 12.03.2016 on (22:04). FOR PROJECT ©VKhunter
//FILE NAME: theme __ (IDE PhpStorm) Березень 2016
import app from "./../application";

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal', {
      'default': '700',
      'hue-1': '500',
      'hue-2': '700',
      'hue-3': 'A700'
    })
    .accentPalette('red', {
      'default': '900',
      'hue-1': '500',
      'hue-2': '700',
      'hue-3': 'A700'
    })
    .warnPalette('amber', {
      'default': '700',
      'hue-1': '500',
      'hue-2': '700',
      'hue-3': 'A700'
    })
    .backgroundPalette('blue-grey', {
      'default': '100',
      'hue-1': '500',
      'hue-2': '700',
      'hue-3': 'A700'
    })
});
