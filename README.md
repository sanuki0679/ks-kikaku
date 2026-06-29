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

| Secret 名 | さくらでの正しい値 | 例 |
|-----------|-------------------|-----|
| `FTP_SERVER` | **初期ドメイン名**（`.sakura.ne.jp` 付き） | `example.sakura.ne.jp` |
| `FTP_USERNAME` | 初期ドメインの**サブドメイン部分のみ** | `example` |
| `FTP_PASSWORD` | **サーバーパスワード**（会員メニューのパスワードではない） | コントロールパネル/FTP 共通 |

**よくある間違い**

- ❌ ユーザー名に `example.sakura.ne.jp` 全体を入れる → ✅ `example` のみ
- ❌ さくら会員メニューのパスワード → ✅ サーバーパスワード
- ❌ 独自ドメインを FTP サーバー名に使う → ✅ 初期ドメイン（`xxx.sakura.ne.jp`）を使う

追加で作成した FTP アカウントを使う場合は、そのアカウント名とパスワードを設定してください。

`ks-kikaku/` フォルダーへアップロードされます。別のフォルダーにする場合は `.github/workflows/deploy.yml` の `server-dir` を変更してください。

#### 530 Login incorrect が出る場合

1. さくらコントロールパネルに**サーバーパスワード**でログインできるか確認
2. FileZilla などで同じ情報を使い、FTP 接続できるか確認
3. GitHub Secrets を**削除して再登録**（コピペ時の余計なスペース・改行に注意）
4. パスワードが不明なら、会員メニューから**サーバーパスワードを再発行**

#### Server sent FIN packet unexpectedly が出る場合

GitHub Actions のサーバーは**海外**にあるため、さくらの**国外IPアドレスフィルタ**でブロックされることがあります。

1. さくら **サーバーコントロールパネル** にログイン
2. **セキュリティ** を開く
3. **国外IPアドレスフィルタ** を **「無効（制限しない）」** に変更
4. **設定する** をクリック
5. GitHub Actions を **Re-run jobs** で再実行

FileZilla（自宅PC）では接続できても、GitHub Actions だけ失敗する場合は、この設定が原因です。

#### ECONNRESET（data socket）が出る場合

さくらと FTP-Deploy-Action の相性問題で、転送中に接続が切れることがあります。  
本リポジトリでは **lftp** を使う方式に変更済みです。`main` ブランチに最新のワークフローが反映されているか確認してください。

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
