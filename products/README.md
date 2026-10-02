# Products 運用方針

`products/` は、個別プロダクトの公開情報を集約する場所です。ソースコードの公開・非公開にかかわらず、ストア掲載に必要な公開ページ（製品紹介、プライバシーポリシー、利用規約、変更履歴、任意の使い方）をこのリポジトリで管理します。

## 基本方針

- プロダクトごとのディレクトリ名は、公開・非公開を問わず、対応する GitHub リポジトリ名と完全に一致させます。
- このリポジトリには公開情報だけを置きます。ソースコード、シークレット、個人情報、内部の運用構成、不要な開発メモは置きません。
- 各製品の紹介文は、ストア掲載ページと製品ホームで同じ内容を基本とします。ストアページでは製品ホームへのリンクを案内先として使います。
- 製品ホームの一覧は `products/index.md`、サイトトップの一覧はルートの `README.md` を更新します。
- Gist は移行元として扱います。GitHub Pages 上のページとストア設定の移行が安定したことを確認してから削除します。

## ディレクトリ構成

各プロダクトは次の構成を基本とします。

~~~text
products/<github-repository-name>/
├── index.md       # 製品ホーム（必須）
├── privacy.md     # プライバシーポリシー（必須）
├── terms.md       # 利用規約（必須）
├── changelog.md   # 変更履歴（必須）
└── wiki.md        # 使い方・マニュアル（任意）
~~~

`wiki.md` を追加する場合は、当該製品のすべてのページの front matter に `product.wiki: true` を設定します。これにより、共通ナビゲーションに「使い方」が表示されます。

## 製品ホームとストアリンク

`index.md` には次を掲載します。

- ストア掲載と同じ日本語の製品説明
- 関連ページへのリンク（プライバシーポリシー、利用規約、変更履歴、任意の使い方）
- 英語の製品説明と対応するページリンク
- 配布先ストアへのリンク

各ページの front matter には、少なくとも `layout`、`title`、`permalink`、`product.base` を設定します。ストアがある製品は、すべての製品ページで同一の `product.stores` を設定します。

~~~yaml
product:
  base: /products/<github-repository-name>/
  stores:
    - label: Chrome Web Store
      url: https://...
~~~

共通ナビゲーションは `_includes/product-nav.html` が生成します。製品ページ内で同じナビゲーションを個別に実装しません。

## プライバシーポリシーと利用規約

日本語を正式版、英語を参考訳とします。両方の文書の冒頭に、次の趣旨を明記します。

> 本ページでは、まず日本語による正式版を掲載し、その後に英語翻訳版を掲載しています。
>
> 本ページに掲載する文書の正式かつ法的効力を有する版は日本語版とし、英語翻訳は参考用です。
>
> 解釈に相違がある場合は、日本語版を優先します。
>
> This page first presents the official Japanese version, followed by an English translation.
>
> The Japanese version is the official and legally binding version of the document on this page. The English translation is provided for reference only.
>
> In the event of any inconsistency, the Japanese version shall prevail.

プライバシーポリシーの見出しは、原則として次の7項目に統一します。

1. 提供者およびサービス概要
2. 取得・処理する情報
3. 利用目的
4. 保存方法
5. 外部送信および第三者提供
6. 権限およびAPIの利用
7. 改定

利用規約の見出しは、原則として次の6項目に統一します。

1. 適用
2. 無償提供およびサポート
3. 禁止事項
4. 無保証および責任の制限
5. 規約の変更
6. 準拠法および管轄

英語版はそれぞれ同じ構成に対応させ、利用規約の英語表記は `Terms of Use` に統一します。各文書の末尾には、日本語・英語ともに最終更新日を記載します。

製品固有のデータ処理、保存先、権限、API、ストア要件は実装とストア設定を確認して記載します。実際に行っていない収集・送信・共有を記載せず、逆に行っている処理を省略しません。法務上の最終判断が必要な場合は、専門家に確認します。

## 更新と公開の手順

1. 対応する製品リポジトリの実装、権限、保存先、配布先ストア設定を確認する。
2. `products/<repository-name>/` の必要なページを更新する。ポリシーと規約は別ページのまま維持する。
3. 新製品または製品説明の変更時は、`products/index.md` とルート `README.md` も更新する。
4. front matter、内部リンク、ストアリンク、日英の対応関係を確認する。
5. GitHub Pages への反映後、製品ホーム、プライバシーポリシー、利用規約、変更履歴、および任意の `wiki.md` をブラウザで確認する。
6. ストア側のプライバシーポリシー URL、サポート URL、説明文も必要に応じて更新する。

## 現在の対象製品

- `chrome-focus-scope`
- `chrome-library-check-for-zotero`
- `gwa-log-pair`

新たに Chrome 拡張、Firefox 拡張、Google Workspace Add-on、App Store 向けアプリなどを追加する場合も、この構成と方針を適用します。
