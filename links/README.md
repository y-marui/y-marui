# Links Policy

`links/` は、サイトのリンク集ページを置く場所です。リンクは各ページの Markdown 本文に直接書きます。表示時に `assets/js/link-tiles.js` が箇条書きをタイルに変換します。

## Page Structure

リンク集の本文は `links/index.md` の1ファイルで管理し、`/links/` で公開します。メニューバーには Links を1項目だけ置きます。

H2 は次の順序とし、従来の分類（Seminars、Media、Transit など）はその下の H3 に置きます。

1. Research & Work
2. Hobby & Life
3. Sendai

旧 URL `/links/research/`、`/links/other/`、`/links/sendai/` は、各 HTML のリダイレクトから統合ページの対応する H2 に移動します。リンク本文は重複して管理しません。

## Basic Policy

- メニュー表示と見出しは英語で統一します。
- 新しい分類は `links/index.md` に追加します。
- フロントマターの `wide: true` と `link_tiles: true` を維持します。
- JavaScript が無効でも、通常のリンク付き箇条書きとして読めます。

## Link Format

小見出し（`###`）ごとにグループを作り、箇条書きでリンクを並べます。

~~~markdown
### Transit

* [表示名](https://example.com/): 短い補足（補足は省略可）
~~~

- 項目は `[タイトル](URL)` の形が必須です。補足は `: ` の後ろに書きます（全角コロンも可）。
- リンクを含まない項目が1つでもある箇条書きは、タイル化されず通常のリストのままになります。
- リンクは新しいタブで開きます（`link-tiles.js` が `target="_blank"` と `rel="noopener noreferrer"` を付けます）。
- JavaScript が無効の環境では、リンク付きの通常の箇条書きとして表示されます。
- 同じサイトに PC 用とスマホ用がある場合は、タイトルに `（PC）`、`（スマホ）` を付けて別項目にします。
