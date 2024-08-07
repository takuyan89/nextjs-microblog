# Next.js マイクロブログ

これは [Next.js](https://nextjs.org/) を使って構築されたシンプルなマイクロブログプラットフォームです。

<img width="1440" alt="スクリーンショット 2024-08-07 10 37 27" src="https://github.com/user-attachments/assets/7bd1f4dd-eb37-40fc-84f1-c43c29aa0a09">



## 機能

- **Markdown サポート**: Markdown でブログ記事を作成可能。
- **SEO フレンドリー**: サーバーサイドレンダリングによる SEO 最適化。
- **静的生成**: 静的生成による高速なパフォーマンス。
- **簡単なカスタマイズ**: シンプルな構造と依存関係により、簡単にカスタマイズ可能。

## 使用技術

- [Next.js](https://nextjs.org/) 14.1.2
- [React](https://reactjs.org/) ^18
- [gray-matter](https://github.com/jonschlinkert/gray-matter) ^4.0.3 (フロントマターの解析用)
- [remark](https://github.com/remarkjs/remark) ^15.0.1 (Markdown 処理用)
- [remark-html](https://github.com/remarkjs/remark-html) ^16.0.1 (Markdown を HTML に変換)

## はじめに

### 前提条件

以下のソフトウェアがインストールされていることを確認してください:

- Node.js (>= 14.x)
- npm (>= 6.x)

### インストール

1. リポジトリをクローンします:

   ```bash
   git clone https://github.com/your-username/nextjs-microblog.git
   cd nextjs-microblog



npm install

開発サーバーの起動

npm run dev








新しいブログ記事の作成
posts ディレクトリに新しい .md ファイルを作成します。

Markdown を使って内容を記述し、上部にフロントマターを追加します:

markdown
コードをコピーする
---
title: "記事のタイトル"
date: "2024-08-07"
description: "記事の簡単な説明"
---

## 記事の内容
