// target="_blank" for http ~~~
$(document).ready( function () {
    var domain = location.href.match(/^http?(s)?(:\/\/[a-zA-Z0-9-.:]+)/i)[0];
    $('a[href^=http]').not('[href*="'+domain+'"]').attr('target','_blank');
    $('a[href^=http]').not('[href*="'+domain+'"]').attr('rel','noopener noreferrer');

    // ドメイン名の取得はlocationプロパティでも取得することができます。
    // 正規表現で取得した例
    console.log(domain);

    // locationプロパティを使用する場合
    console.log(location.hostname);

    // locationプロパティPort番号を含む場合
    console.log(location.host);
})
