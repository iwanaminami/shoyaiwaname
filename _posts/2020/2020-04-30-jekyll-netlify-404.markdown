---
layout: post
title:  "Jekyll+Netlifyで404ページが表示されない"
description: Jekyllで作ったサイトをNetlifyでホストしてみましたが、独自の404ページが表示されず、Netlifyの404ページが表示された。
date:   2020-04-30 09:00:00 +0900
last_modified_at: 2020-04-30 09:00:00 +0900
tags:
- Jekyll
- Netlify

categories:
image: /assets/images/20200430/cover.png
---


## Jekyll

JekyllはRubyベースで動く、静的サイトジェネレータ。

{% include cardblank.html url = "https://jekyllrb.com/" %}

[Front Matter](https://jekyllrb.com/docs/front-matter/)と[Liquidテンプレート](https://jekyllrb.com/docs/step-by-step/02-liquid/)が便利。


## Netlify

Netlifyは静的サイトホスティングなどのサービスを提供する。

{% include cardblank.html url = "https://www.netlify.com/" %}

Gitレポジトリとの連携が容易で、例えばプレイベートレポジトリのファイルを基に自動でビルドしてくれる。

CMSの機能や、DNSのサービスもあり、今話題のJAMstackベースのウェブサービスの先頭を走るサービス。

{% include inpostads.html %}


## 表示された404ページ

Netlifyでサイトが表示できるようになって、404エラーの動作確認をしたところ、以下のようなNetlify独自の404ページが表示された。

![Jekyll Netlify 404 error](/assets/images/20200430/01.png)

今回は、テーマファイルを全てダウンロードしてサイトを作ったので、404ページの準備を忘れたかと思い確認したが、`404.html`は準備していた。


## Jekyllのカスタム404ページ

Jekyllでカスタム404ページを設定するには`404.html`か`404.md`をルートディレクトリに設置するだけ良い。

>
Simply add a 404.md or 404.html at the root of your site’s source directory and include front matter data to use the theme’s base layout.
>

[Custom 404 Page \| Jekyll • Simple, blog\-aware, static sites](https://jekyllrb.com/tutorials/custom-404-page/)

つまり生成される`_site`のディレクトリに`404.html`というファイルがあれば良い。

JekyllサイトをNetlifyでホストするときも、`404.html`を作れば良いという解説をよく見かける。

しかし、確かに`404.html`のための元ファイルが存在するにもかかわらず、カスタム404ページが表示されなかった。

{% include inpostads.html %}

## 原因と解決

`_config.yml`で`permalink: /:year/:title/`と設定していた。

ルートに配置している`404.html`にアクセスすると`/404/`で表示されていた。

Jekyllの公式ページでは、サブディレクトリに404ページ用のファイルを設置して管理するときだけ、Front Matterに`permalink: /404.html`を設定すると書いてある。

>
If you plan to organize your files under subdirectories, the error page should have the following Front Matter Data, set: permalink: /404.html. This is to ensure that the compiled 404.html resides at the root of your processed site, where it’ll be picked by the server.
>

[Custom 404 Page \| Jekyll • Simple, blog\-aware, static sites](https://jekyllrb.com/tutorials/custom-404-page/)

しかし、`_config`で独自の`permalink`を設定していたことが関係しているかは分からないが、`404.html`buildの際に404ページは`/404/index.html`として生成されるようです。

なので、どの環境でホストするにしても`404.html`または`404.md`には、Front Matterに`permalink: /404.html`と書いておくのが良いということだと思います。

`jekyll new`で生成されるJekyllサイトのデフォルトテーマであるminimaでも`permalink: /404.html`が書いてありました。
