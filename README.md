# ks-kikaku

飲食店・介護施設向けの業務改善Webアプリ制作ポートフォリオ

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 制作実績の更新

`lib/data.ts` の `works` で紹介文と機能を管理しています。運用状況が確認できた実績には `status`（`運用中`・`開発中`・`試作`）を設定できます。未設定の場合は表示しません。

現在の図は機能の説明用で、実画面ではないことを明記しています。実画面へ差し替える場合は、個人情報を架空のデータへ置き換え、掲載可能な画像を `public/works/` に保存し、対象の実績に次の `screenshot` を追加してください。

```ts
screenshot: {
  src: "/works/reservation.webp",
  alt: "予約一覧と座席の割当を確認する画面",
  width: 1440, // 実際の画像の幅
  height: 1080, // 実際の画像の高さ
  caption: "予約一覧画面（掲載用のサンプルデータ）",
},
```

画像は縦横比を保って表示され、さくら公開用の `/ks-kikaku` パスにも対応します。確認できていない導入効果や利用者の声は掲載しません。

## さくらレンタルサーバへ公開

レンタルサーバでは Node.js が動かないため、静的ファイル（HTML/CSS/JS）として公開します。

### GitHub Actions で自動デプロイ（推奨）

`main` ブランチへ push すると、静的ビルド後にさくらサーバーへ **SCP（SSH鍵）** でアップロードされます。  
`wasaburo-reserve-app` / `ruuteruhome_shuttle_car` と同じ方式です。

#### 1. GitHub Secrets を登録

リポジトリの **Settings → Secrets and variables → Actions → New repository secret** で以下を追加します。

| Secret 名 | 説明 | 例 |
|-----------|------|-----|
| `SAKURA_HOST` | 初期ドメイン名 | `sanuki0679.sakura.ne.jp` |
| `SAKURA_USER` | SSH ユーザー名 | `sanuki0679` |
| `SAKURA_KEY` | SSH 秘密鍵（プライベートキー全体） | `-----BEGIN ...` |
| `SAKURA_TARGET_DIR` | デプロイ先のベースパス | `/home/sanuki0679/www` |

ファイルは `SAKURA_TARGET_DIR/ks-kikaku` に送られます。他リポジトリと同じサーバーなら、同じ `SAKURA_*` を流用できます。

#### 2. push する

```bash
git push origin main
```

GitHub の **Actions** タブでデプロイ状況を確認できます。手動実行も **Run workflow** から可能です。

#### 3. 確認

```
https://sanuki0679.sakura.ne.jp/ks-kikaku/
```

### 手動デプロイ

```bash
npm run build:sakura
```

`out` フォルダーの**中身**を、さくらの `www/ks-kikaku` フォルダーに SCP/SFTP でアップロードします。

## ビルド（ローカル確認用）

```bash
npm run build
npx serve out
```
