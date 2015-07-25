exports.postAceInit = function(hook, context){
  var url = escape(e.currentTarget.href)

  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    if(clientVars.redirectionHost){
      openNewWindow(clientVars.redirectionHost+'?'+e.currentTarget.href); 
    } 
    else {
      openNewWindow('../redirect#'+url);
    }
  });

  $('#chattext > p').on('click', "a", function (e){
    if(clientVars.redirectionHost){
      openNewWindow(clientVars.redirectionHost+'?'+e.currentTarget.href); 
    }
    else {
      openNewWindow('../redirect#'+url);
    }
  });
}

exports.postTimesliderInit = function(hook, context){
  $('#padcontent').on('click', "a", function (e){
    if(clientVars.redirectionHost){
      openNewWindow(clientVars.redirectionHost+'?'+e.currentTarget.href); 
    }
    else {
      openNewWindow('../../redirect#'+url);
    }
  });
}

function openNewWindow(url){
  window.open(url);
  e.preventDefault();
  return false;
}
