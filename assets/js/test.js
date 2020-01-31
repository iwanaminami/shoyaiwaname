var testtext = $("#aaaa").prev().html();
//alert(testtext);
document.write('<h1>' + testtext + 'こんにちは</h1>');
var testid = $(this).prev().html();
document.write('<p><i>' + testid + '</i></p>');


javascript:(function(){
  javascript:(function(d,j,b,s){
    function r(){
      setTimeout(function(){
        (typeof jQuery=='undefined')?r():b(jQuery)},99)}(j)?b(jQuery):d.body.appendChild(d.createElement('script')).src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',r()})(document,this.jQuery,function($){var ogurl=$("meta[property='og:url']").attr("content");var ogtitle=$("meta[property='og:title']").attr("content");var ogdesc=$("meta[property='og:description']").attr("content");var ogimg=$("meta[property='og:image']:last").attr("content");var urlhost=location.host;if(ogtitle==null){ogtitle=document.title;alert(ogtitle)};if(ogurl==null){ogurl=location.href};if(ogdesc==null){ogdesc=""};if(ogimg==null){ogimg="http://capture.heartrails.com/100x100/?"+ogurl;alert(ogurl)};var card='{% include blogcard.html site="'+urlhost+'" url="'+ogurl+'" image="'+ogimg+'" title="'+ogtitle+'" desc="'+ogdesc+'" %}';prompt("blogcard",card);});})();
