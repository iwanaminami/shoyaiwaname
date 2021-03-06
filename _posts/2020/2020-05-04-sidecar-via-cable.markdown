---
layout: post
title:  "SidecarでWiFiが遅くなる。有線接続には「信頼する」必要があった"
description: MacでSidecarの機能を使ってiPadをサブディスプレイにすると、ネットワーク通信の速度が遅くなったように感じた。有線で接続していると思ったら無線（WiFi経由）で接続していた。
date:   2020-05-21 09:00:00 +0900
last_modified_at: 2020-05-21 09:00:00 +0900
tags:
- iPad
- Sidecar
- Mac
- Apple

items:
  - name: iPad
    url: https://amzn.to/3jgQoOV
  - name: AirPods
    url: https://amzn.to/3kwdTUk
  - name: AirPods Proケース
    url: https://amzn.to/3n04R3Y
  - name: iPhoneケース
    url: https://amzn.to/30l5ATF

categories:
image: /assets/images/20200521/cover.png
---


15インチMacBook ProでSidecarの機能を使って11インチiPad Pro（第１世代）をサブディスプレイにすることがある。

出張先などでたまに便利。たまたま在宅でSidecarを使っていると、使っていない時と比べてWiFiの速度が低下しているように思えた。

実際[fast.com](https://www.fast.com)で計測してみると、大体２分の1から４分の１の速度しか出ていなかった。

WiFi経由でSidecarの機能を使っていたなら、仕方ないと思えるかもしれないが、USB type-Cケーブルを使ってMacBook ProとiPad Proを接続していた。

結論から言えば、iPad ProでMacBook Proを「信頼」しておらず、Sidecar自体はWiFi経由で動いていて、有線接続は充電のためのみになっていた。

{% include inpostads.html %}


## Sidecar

MacのサブディスプレイとしてiPadを利用する機能。iPadOS 13とmacOS Catalinaから追加された機能。

{% include cardblank.html url = "https://support.apple.com/ja-jp/HT210380" title = "Sidecar で iPad を Mac の 2 台目のディスプレイとして使う" %}

Apple Pencilでのタップ操作にも対応しているので、アプリによってはペンタブとしても使えるようになる。

接続は簡単で、同じWiFiにつなぐか、USB（Lightning）ケーブルで直接つないで、メニューバーのSidecarのアイコンを押すだけ。

出張先、外出先での緊急用としても活躍する。


## WiFi経由での接続だとネットワーク通信の速度が遅くなる

WiFiルーターの性能にもよるかも。ローカル通信だから邪魔しているのはWiFiルーターとPCの間。ルーター側の邪魔をしているのか、PCのWiFi性能を低下させているのか。

VDSLで最大100Mbpsだから、普段どれだけ理論値に近くても２分の１とか４分の１とかになってしまうと、支障が出るくらいには低速になる。

## 有線接続するためにはiPad側でMacを信頼する必要がある。

iPadをMacに初めて接続する場合や、過去に接続したときにMacを信頼していない場合には、そのコンピュータを信頼するかどうかを確認する警告が表示される。

{% include cardblank.html url = "https://support.apple.com/ja-jp/HT202778" %}

Sidecarを有線接続で使用するためにはここでMacを信頼する必要がある。

「信頼しない」を押した場合には、MacとiPad間でデータ通信が行われないので、有線接続でSidecarの機能を使うことができない。

間違って「信頼しない」を押した場合は、USBケーブルを外してもう一度挿し直したらいい。改めて警告が表示される。

コンピュータを「信頼」した場合にはコンピュータからiPadの情報にアクセスできるようになるので、公共のパソコンなど自分の管理下にないPCでは注意が必要。

一度信頼した場合には、それ以降信頼したことになるので、信頼しない場合には設定から変更が必要。

>
デバイスは、一度信頼することに決めたコンピュータを記憶します。
>
信頼したコンピュータまたはその他のデバイスを信頼しないことにした場合は、iPhone、iPad、または iPod touch でプライバシー設定を変更します。「設定」>「一般」>「リセット」>「位置情報とプライバシーをリセット」の順に選択してください。これで、以前信頼していたコンピュータに接続したときに、そのコンピュータを信頼するかどうかを確認する警告が表示されるようになります。

{% include inpostads.html %}


### Sidecar使用中にUSBケーブルを抜き差しした場合

１度信頼をしていて、同じWiFiにつないだ状態なら、USBケーブルを抜き差しするたびに、WiFi経由と有線経由で自動的に切り替わる。


## Mac側でiPadを信頼する必要はない

USBケーブルでiPadをMacに接続すると、MacのFinderのサイドバーに接続したiPadが表示される。

これを押すと、iPadで表示されたのと同様に、「信頼」するかどうかを聞いてくるが、Sidecarを使う分には信頼する必要はない。

iPadを管理するためにiPadの情報にアクセスしたり、同期したりする場合には信頼する必要がある。




## まとめ

Sidecarを有線接続で利用するにはiPad側でMacを「信頼」する必要がある。

自分のMacであれば「信頼」しておくのが良いでしょう。

Sidecarを有線接続に切り替えると、

- 充電しながら使える。
- 動作が安定する
- WiFiの通信速度が下がらない

といったメリットがある。

{% include inpostads.html %}
