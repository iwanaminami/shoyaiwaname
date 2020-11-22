---
layout: post
title:  "【解決】Big SurにアップデートしたらJekyllが使えなくなってた"
description: MacBook ProをBig Surにアップデートしたら
date:   2020-11-22 12:00:00 +0900
last_modified_at: 2020-11-22 12:00:00 +0900
tags:
- Jekyll
- BigSur
- Mac
- iOS

items:

categories:
image: /assets/images/20201122/cover.png
---

## 環境

MacBook Pro (16-inch, 2019)  
macOS Big Sur バージョン11.0.1  
他は不明


## 問題と対応

Jekyllでローカルでサイトを確認しようとしたら`eventmachine`なるものが見つからないらしい。
```
% bundle exec jekyll serve --draft
Could not find eventmachine-1.2.7 in any of the sources
Run `bundle install` to install missing gems.
```

言われた通りにやってみる。

```
% bundle install
An error occurred while installing eventmachine (1.2.7), and Bundler
cannot continue.
Make sure that `gem install eventmachine -v '1.2.7' --source
'https://rubygems.org/'` succeeds before bundling.
```


言われた通りにやってみる。
```
% sudo gem install eventmachine -v '1.2.7' --source 'https://rubygems.org/'

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /Library/Ruby/Gems/2.6.0/extensions/universal-darwin-20/2.6.0/eventmachine-1.2.7/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in /Library/Ruby/Gems/2.6.0/gems/eventmachine-1.2.7 for inspection.
Results logged to /Library/Ruby/Gems/2.6.0/extensions/universal-darwin-20/2.6.0/eventmachine-1.2.7/gem_make.out
```

何か失敗したらしい。

{% include inpostads.html %}

調べたら同じような人がいた。

[https://ernestojeh.com/fix-jekyll-on-macos-big-sur](https://ernestojeh.com/fix-jekyll-on-macos-big-sur)

Dockをよくみると今まであったはずのXcodeのアイコンがない。（ずっとあったような気がするのだが）。

AppStoreで検索するとXcodeがインストールされておらず、以前インストールしたことがあるマーク（雲のマーク）になっていた。

Xcodeをインストールして起動すると何かしらに同意させられて何かをインストールした。

その後に

```
% bundle update
% bundle exec jekyll serve
```

無事使えましたとさ。

## まとめ

Xcode関係の何かが足りていなかったということで、よくわからないのでXcodeアプリをインストールして解決。

{% include inpostads.html %}
