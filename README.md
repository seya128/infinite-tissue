# 無限ティッシュ

何やらティッシュが足りないなどという状況らしいので・・・  
vueを使って簡単に無限ティッシュを作ってみました。  

画面タップ（クリック）で、いくらでもティッシュ引き出し放題です。  
こちらのURLで動作します。  
[https://dorasu-tech.github.io/infinite-tissue/](https://dorasu-tech.github.io/infinite-tissue/)

[![](https://dorasu-tech.github.io/infinite-tissue/infinite-tissue2.png)](https://dorasu-tech.github.io/infinite-tissue/)


## 素材

以下の素材を利用させていただきました。

* [ティッシュをとる 動画素材 [ 4621190 ] 無料 - フォトライブラリー photolibrary](https://www.photolibrary.jp/img484/7058_4621190.html)
* [生活上の動作で出る音・その２～フリー効果音・無料効果音素材](https://taira-komori.jpn.org/daily02.html)

動画は、再生する部分のみをトリミングしました。

効果音は、そのまま使っています。


## 作成時のちょっとしたポイント

### スマホだと最初のタップで音がならない

JavaScriptでAudioオブジェクトを作成し、音声データを読み込んで再生するようにしたのですが、スマホだとタッチなどのユーザー操作のタイミングでないと、読み込みや再生ができないようで、最初のタップで音が出ませんでした。

解決方法：  
　「スタート」ボタンを作って、最初タップは「スタート」ボタンになるようにしました。  
　「スタート」ボタンで音声データを読み込むようにしたので、次のタップでは音が再生されるようになりました。

### iOSだと最初動画の画像が表示されない

iOSは、videoタグに、```playsinline```をつけないとインライン表示できないらしい。  
さらに、iOS10だと```webkit-playsinline```でないと駄目らしい。  
Androidでも、再生前にプレビュー画像が出ないことがあるので、非表示の状態で一度再生してしまうようにしてみました。

結果、videoタグは以下のような指定になりました。  
```
 <video src="XXXXXX.mp4" webkit-playsinline playsinline muted autoplay></video>
```

### クリック＆タッチイベント

clickイベントだと、マウスを押して離すときにイベントが発生するので、マウスのボタンが押されたときにイベントが発生する```mousedown```イベントを利用。  
スマホではタッチしたときに発生する```touchstart```イベントを利用。  
両方が反応してしまわないように、```prevent```属性をつけました。  
以下のようになりました。  
```
<video src="XXXXX.mp4" @mousedown.prevent="onClick" @touchstart.prevent="onClick" webkit-playsinline playsinline muted autoplay></video>
```

### リソースファイルの置き場所

vue-cliをほぼ初めて使ったので、リソースの置き場所に困りました。

最初、assetsフォルダやstaticフォルダにおいていたのですが、ビルドすると思ったような場所に配置されず、結局publicフォルダに置きました。

publicフォルダ以下は、そのまま出力フォルダに反映されるということを学びました。

さらに、```vue.congfig.js```でビルドの設定をしました。

```
module.exports = {
    outputDir: 'docs',
    publicPath: './'
}
```

GitHubページで公開したので、出力フォルダをdocsにしました。

publicPathを'./'にしたので相対パスで出力されるようになりました。




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
