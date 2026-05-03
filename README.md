# novel_game_ts_gal

TSギャルゲー風ノベルゲーム風を作ります

## 公開URL

GitHub Pages の公開URL:

https://maguro777R.github.io/novel_game_ts_gal/

## ローカルで起動する方法

依存関係をインストールします。

```bash
npm ci
```

開発サーバーを起動します。

```bash
npm run dev
```

表示されたローカルURLをブラウザで開いて確認します。

## ビルドする方法

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## GitHub Pages で公開する方法

このリポジトリは GitHub Actions で GitHub Pages に公開する設定です。

1. GitHub のリポジトリ画面を開きます。
2. `Settings` -> `Pages` を開きます。
3. `Build and deployment` の `Source` を `GitHub Actions` にします。
4. `main` ブランチへ push すると `.github/workflows/pages.yml` が実行されます。
5. Actions が成功すると、公開URLに反映されます。

Vite の `base` は `/novel_game_ts_gal/` に設定しています。これにより、GitHub Pages のサブパス配信でも JavaScript、CSS、画像の参照が正しく動きます。
