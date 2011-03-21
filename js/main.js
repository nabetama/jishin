/*

main.html
craeted by sandersonia
2011

modified by nabetama

*/


//現在位置の取得
function geoLocate(){
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition(function(position) {  
            callback(position.coords.latitude, position.coords.longitude);  
        });
    } else {  
        alert("お使いのブラウザでは現在位置情報が取得できません。");  
    } 
}

//コールバック
function callback(lat, lon) { 
    var geocode = "&geocode=" + lat + "%2C" + lon + "%2C1mi"; 
    var fullUrl = url + geocode; 
    var head = document.getElementsByTagName('head'); 
    var script = document.createElement('script'); 
    script.src = fullUrl; 
    head[0].appendChild(script); 
} 

//URLの宣言
var url = "http://search.twitter.com/search.json?callback=getTweets";

//tweetの挿入
function getTweets(json) { 
    var q;
    var parent = document.getElementById('tweetList'); 
    parent.innerHTML = ''; 
    var child; 

    for (var i = 0; i < json.results.length; i++) { 
        q = json.results[i]; 
        child = document.createElement("div"); 
        child.setAttribute("class","tweet");
        child.innerHTML = '<div class="avatar"><img src="'+q.profile_image_url+'" alt="avatar" width="48" height="48" /></div>';
        child.innerHTML += '<div class="content"><a href="http://m.twitter.com/'+q.from_user+'">'+q.from_user+'</a> '+q.text+'<div class="extra">'+q.location+' ('+q.created_at+')</div></div>';
        parent.appendChild(child); 
    } 
} 

// page<hashtag>()から呼ばれる。
// param json
function callback2(json) { 
    var fullUrl = json; 
    var head = document.getElementsByTagName('head'); 
    var script2 = document.createElement('script'); 
    script2.src = fullUrl; 
    head[0].appendChild(script2); 
}
