# ks-kikaku

飲食店・介護施設向けの業務改善Webアプリ制作ポートフォリオ

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## さくらレンタルサーバへ公開

レンタルサーバでは Node.js が動かないため、静的ファイル（HTML/CSS/JS）として公開します。

### GitHub Actions で自動デプロイ（推奨）

`main` ブランチへ push すると、ビルド後にさくらサーバーへ FTP アップロードされます。

#### 1. GitHub Secrets を登録

リポジトリの **Settings → Secrets and variables → Actions → New repository secret** で以下を追加します。

| Secret 名 | 内容 | 例 |
|-----------|------|-----|
| `FTP_SERVER` | FTP サーバー名 | `xxx.sakura.ne.jp` |
| `FTP_USERNAME` | FTP ユーザー名 | さくらコントロールパネルの FTP アカウント |
| `FTP_PASSWORD` | FTP パスワード | FTP アカウントのパスワード |

`ks-kikaku/` フォルダーへアップロードされます。別のフォルダーにする場合は `.github/workflows/deploy.yml` の `server-dir` を変更してください。

#### 2. push する

```bash
git push origin main
```

GitHub の **Actions** タブでデプロイ状況を確認できます。手動実行も **Run workflow** から可能です。

#### 3. 確認

```
https://あなたのドメイン/ks-kikaku/
```

### 手動デプロイ

```bash
npm run build:sakura
```

`out` フォルダーの**中身**を、さくらの `ks-kikaku` フォルダーに FTP/SFTP でアップロードします。

## ビルド（ローカル確認用）

```bash
npm run build
npx serve out
```
