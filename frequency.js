function _(x) {
return document.querySelector(x);
}


var frequency = {
get : function(link,callback){
  var httpRequest = new XMLHttpRequest();
     httpRequest.onreadystatechange = function() {
         if (httpRequest.readyState === 4) {
             if (httpRequest.status === 200) {
                  // var data = JSON.parse(httpRequest.responseText);
                 if (callback) callback(httpRequest.responseText);
             }
         }
     };
     httpRequest.open('GET', link);
     httpRequest.send();
 if (callback) callback();
} ,






getJSON : function(link, callback) {
  this.get(link,function(dt){
  var data = JSON.parse(dt);
  if (callback) callback(data);
  });
} ,




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
