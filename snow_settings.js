$(document).ready(function(){
    $(document).snowfall();
    $('body').snowfall({flakeCount : 100, maxSpeed : 10});
    window.setTimeout(function(){$('body').snowfall('clear');}, 5000);
  });