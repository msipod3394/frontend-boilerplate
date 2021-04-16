# Frontend-Boilerplate

## version
node:    v14.16.1
webpack: 4.41.6

# Usage

## セットアップ

1. パッケージをインストール

### gitからクローン
```
$ git clone github.com:msipod3394/frontend-boilerplate.git
```

### webpackのインストール
```
npm install --save-dev webpack@4.41.6
```

## localサーバーの立ち上げ方
```
npm start
```

## 開発モードでのビルド
```
npm run build:dev
```

development モードで出力

## 本番環境のビルド
```
npm run build
```

production モードで出力

## Sass のフォルダ構造

```
dist/    # ビルドの結果が格納される。基本触らない。
src/     # ソースを格納
├── templates/                  # Pug
├── images/                     # 画像
├── javacscripts/               # Javarcript
└── stylesheets/                # Sass
    ├── base                    
    │   ├── _base.scss
    │   └── _reset.scss
    │   ├── _variable.scss
    │   └── _font.scss
    │   └── _utility.scss
    ├── mixin
    │   ├── _animation.scss
    │   └── _btn.scss
    │   └── _font.scss
    │   └── _etc.scss
    ├── modules
    │   ├── _layout.scss
    │   ├── _header.scss
    │   └── _footer.scss
    │   └── _side.scss
    │   ├── _gnav.scss
    │   └── _share.scss
    │   └── _etc.scss
    ├── setting
    │   ├── _config.scss
    │   └── _function.scss
    ├── pulgins
    │   ├── _****.scss
    ├── page
    │   ├── _top.scss
    │   ├── _****.scss
    │   ├── _****.scss
    │   ├── _****.scss
    │   ├── project
    │   │   ├── _****..scss
    └── style.scss
```

それぞれのディレクトリの役割は、次のようになります。

```
* baseディレクトリ
ベースとなるスタイルが定義さているSCSSファイルを格納するディレクトリです。

* mixinディレクトリ
mixinが定義されているSCSSファイルを格納するディレクトリです。

* moduleディレクトリ
サイト共通で使用するモジュール別にスタイルが定義さているSCSSファイルを格納するディレクトリです。

* pageディレクトリ
ページ単位で使用するスタイルが定義さているSCSSファイルを格納するディレクトリです。

* pulginsディレクトリ
外部プラグインのスタイルを格納するディレクトリです。

* settingディレクトリ
初期設定で必要なパラメータなどが定義されているSCSSファイルを格納するディレクトリです。
```

## Installation
```
$ git clone github.com:msipod3394/frontend-boilerplate.git
```

## Anything Else
この環境でできること
* ホットリロード（ファイルを変更した時にブラウザが自動でリロードされる）
* ビルド前にdistディレクトリ内を自動削除
* Pugのコンパイル
* Sassのコンパイル
* Babelを使ったES6のトランスパイル
* Vueのビルド
* 画像ファイルの圧縮
* 出力ファイル名にハッシュ値を追加する（キャッシュ対策）



## Author

[@msipod3394](https://github.com/msipod3394)

## 最終更新日
2021/04/16