---
layout: post
title:  "ChromeでTwitterを見る良いレイアウト"
description: PWAのTwitterとChromeのウィンドウを並べてみた
date:   2020-03-03 09:00:00 +0900
last_modified_at: 2020-03-03 09:00:00 +0900
tags:
- PWA
- GoogleChrome
- Google
categories:
image: /assets/images/20200304/01.png
---


![](/assets/images/20200304/01.png)

YouTubeでAbemaTVニュースを観ながら、Twitterのタイムライを見ている様子。

## Progressive Web Apps (PWA)

Chromeでウェブサイトをアプリのように使えるPWAという機能があります。対応しているサイトであれば、Chromeからスタンドアロンのネイティブアプリのようにウェブサイトを閲覧できるようになります。ChromeやiOSのSafariなどが対応しているようです。

{% include cardblank.html url = "https://support.google.com/chrome/answer/9658361" %}

インストールしたウェブサイトを開いてみると、Chromeの外枠ではなく（タブなどがない）、ウィンドウ全体がウェブサイトのように表示されます。見た目はかっこいいのですが、「戻る」「進む」のボタンがないことや、メニューバーが専用のものになっていて、ただウェブサイトを閲覧するだけのためであれば、正直使いにくい。（Macであれば  ⌘ + [ で戻る、⌘ + ] で進むことができます。）

![](/assets/images/20200304/03.png)

Twitterを開いた画面。Chromeのタブやボタンがなく、メニューバーも「Twitter」になっている。

{% include inpostads.html %}

### リンクを開くとChromeが開く

PWAの機能でインストールしたウェブサイトを閲覧中に、内部リンクを遷移するときは、そのままの画面で閲覧することができるのですが、外部リンクをクリックすると、Chromeアプリのウィンドウに切り替わってしまいます。せっかく一つのアプリのように使っていたのに、毎回画面が変わるので通常よりも不便に思えます。

## Twitterをインストールしてみた

ウェブ版のTwitterサイトはPWAに対応しています。TwitterはUIがウェブサイト、アプリに関わらずほとんど統一されているので、PCにインストールした場合でもとても快適に利用できます。iOSのSafariでhttps://mobile.twitter.com/をホーム画面に追加すると、アプリのように使える上、通常のTwitterアプリよりも快適に動くと言われています。

### PWAのTwitterとChromeのウィンドウを並べてみた

![](/assets/images/20200304/01.png)

Twitterはレスポンシブデザイン向けのBootstrapを開発していることもあり、ウィンドウの幅をどんなに変えても見やすく表示されます。MacのSplit Viewを使えば、２つのウィンドウを並べることができます。Twitterの方のウィンドウをできるだけ狭くすれば、Twitterのタイムラインを見ながら、YouTubeをみることも支障がありません。なんならTwitterの画面はこのくらいがちょうどいいとすら思われます。

ここでTwitterをPWAの機能でインストールした恩恵を発見しました。まず、Twitter側のウィンドウにタブが表示されません。Chromeの機能でタブを消せばいいかもしれませんが、それでは、YouTube側のタブが消えていまい、個人的には使いにくくなります。また、Twitter側でリンクを開いたら、外部サイトなので、Chromeアプリ側で開きました。

![](/assets/images/20200304/02.png)

TwitterをChromeアプリで見ている状況ではTwitter側のウィンドウで新規タブとして開くことになるので、狭い領域でみることになりますが、PWAとしてインストールしていれば、Twitter側はタイムライン専用としておいて、メインコンテンツを大きい画面に集約することができました。

{% include inpostads.html %}

## まとめ

- TwitterはPWAとしてインストール
- スタンドアロンの画面は、Split Viewでタイムライン専用に
- 見たいサイトは自動的に大きい画面で開かれる
