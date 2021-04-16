# frontend-boilerplate

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

src
└── stylesheets
    ├── base
    │   ├── _base.scss
    │   └── _reset.scss
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


それぞれのディレクトリの役割は、次のようになります。

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


## Installation
```
$ git clone github.com:msipod3394/frontend-boilerplate.git
```

## Anything Else


## Author

[@msipod3394](https://github.com/msipod3394)

## 最終更新日
2021/04/15