/*
main.html
created by sandersonia
2011

mod by nabetama

*/


/*TOP画面*/
function topPage(){
    document.body.innerHTML ='<div id=\"button3\">20110311</div>' +
                             '<div class=\"button\" onClick=\"gpsPage()\">現在地周辺</div>' + 
                             '<div class=\"button\" onClick=\"hashPage()\">地震一般情報</div>' +
                             '<div class=\"button\" onClick=\"hashTeiden()\">停電情報</div>' +
                             '<div class=\"button\" onClick=\"hashTrain()\">電車運行状況</div>' + 
                             '<input type=\"text\" id=\"target_word\" placeholder=\"検索語句を入力\"><div id=\"button_search\" onClick=\"hashSearchWord()\">検索</div>' +
                             '<div id=\"footer\">Created by. nabetama</div>';
}

/*GPS画面*/
function gpsPage(){
    document.body.innerHTML = "<div id=\"button9\">Near by</div><div id=\"button10\">Twitter</div><div id=\"button\" onClick=\"topPage()\">戻る</div><div id=\"tweetList\"></div>";
    geoLocate();
}

/*ハッシュページ*/
function hashPage(){
    document.body.innerHTML = "<div id=\"button9\">#jisin</div><div id=\"button10\">地震一般</div><div id=\"button\" onClick=\"topPage()\">戻る</div><div id=\"tweetList\"></div>";
    // 地震一般情報のjson
    var url = "http://search.twitter.com/search.json?callback=getTweets&q=%23jishin";
    callback2(url);
}

/* 停電情報 */
function hashTeiden() {
    document.body.innerHTML = "<div id=\"button9\">#teiden</div><div id=\"button10\">停電情報</div><div id=\"button\" onClick=\"topPage()\">戻る</div><div id=\"tweetList\"></div>";
    // 停電情報のjson
    var url = "http://search.twitter.com/search.json?callback=getTweets&q=%23" +
              getNowDate() +
              "teiden";
    var url2 = "http://search.twitter.com/search.json?callback=getTweets&q=%23teiden"
    callback2(url);
}

/* 電車運行状況 */
function hashTrain() {
    document.body.innerHTML = "<div id=\"button9\">#train</div><div id=\"button10\">電車情報</div><div id=\"button\" onClick=\"topPage()\">戻る</div><div id=\"tweetList\"></div>";
    // 電車運行状況のjson
    var url = "http://search.twitter.com/search.json?callback=getTweets&q=%23" +
              getNowDate() +
              "train %23train";
    callback2(url);
}

/* search  */
function hashSearchWord() {
    var word = searchWord = document.getElementById("target_word").value;
    if (word.length <= 0) {
        alert("何も入力してないよ!!");
        return;
    }

    document.body.innerHTML = "<div id=\"button9\">search!</div><div id=\"button10\">検索結果</div><div id=\"button\" onClick=\"topPage()\">戻る</div><div id=\"tweetList\"></div>";
    // 検索結果のjson
    var url = "http://search.twitter.com/search.json?callback=getTweets&q=" +
              word +
              " %23teiden";
    callback2(url);
}

// 現在日付を(MMDD or MDD)で返す
function getNowDate () {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    if ( dd < 10 ) { 
        dd = "0" + dd; 
    }   
    return mm + "" + dd; 
}

