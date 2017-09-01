


var frequency = {
get : function(link,callback){
  var httpRequest = new XMLHttpRequest();
     httpRequest.onreadystatechange = function() {
         if (httpRequest.readyState === 4  ) {
             if (httpRequest.status === 200 && httpRequest.responseText !== undefined ) {
                if (callback) callback(httpRequest.response);
             }
         }
     };
     httpRequest.open('GET', link);
     httpRequest.setRequestHeader( "Pragma", "no-cache" );
     httpRequest.setRequestHeader( "Cache-Control", "no-cache" );
     httpRequest.setRequestHeader( "Expires", 0 );
     httpRequest.send();

} ,





/*GetJSON*/
getJSON : function(link, callback) {
  this.get(link,function(dt){
  if (callback) callback(JSON.parse(dt));
  });
} ,
/*reload page*/
reload : function(){
  window.location.reload();
},
/*redirection*/
href: function(x,target){
  if (target == undefined) {
    window.location.href = x;
  } else {
    target = target.split('.');
   window.open(x, '', 'width='+target[0]+'px,height='+target[1]+'px');
  }
} ,



/*buildjson*/
buildJSON : function (jsonData,el,func) {
  var htmlInner = '';
if (jsonData && jsonData.length) {
  for (var i = 0; i < jsonData.length; i++) {
    htmlInner += func(jsonData[i]);
  }
}
_(el).innerHTML = htmlInner;
} ,



/*POST*/
post : function(link,data,callb){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload  = function () {
  if (httpRequest.readyState==4 && httpRequest.status==200){
  if (callb) callb(httpRequest.responseText);
}
}
httpRequest.open('POST', link);
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.setRequestHeader( "Pragma", "no-cache" );
httpRequest.setRequestHeader( "Cache-Control", "no-cache" );
httpRequest.setRequestHeader( "Expires", 0 );
httpRequest.send(data);
},

}



function _(x) {
return document.querySelector(x);
}

function __(x) {
return document.querySelectorAll(x);
}
