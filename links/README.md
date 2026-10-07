# Links 運用方針

`links/` は、サイトのリンク集ページを置く場所です。リンクは各ページの Markdown 本文に直接書きます。表示時に `assets/js/link-tiles.js` が箇条書きをタイルに変換します。

## ページ構成

メニュー（`_data/nav.yml`）の並びと、各ページの位置づけは次のとおりです。

| メニュー表示 | URL | ページ | 位置づけ |
| --- | --- | --- | --- |
| Research & Work | `/links/research/` | `links/research.md` | 研究・仕事 |
| Hobby & Life | `/links/other/` | `links/other.md` | 趣味・生活 |
| Sendai | `/links/sendai/` | `links/sendai.md` | 仙台ローカル |

## 基本方針

- メニュー表示とページ見出しは英語で統一します（Top / Products / Blog と揃えるため）。
- URL は既存リンクを壊さないよう変更しません。そのため `/links/other/` の表示名は Hobby & Life ですが、URL とファイル名は `other` のままです。
- 新しいリンク集を追加するときは、`links/<name>.md` と `_data/nav.yml` を揃えて更新します。メニューでは Blog より前、既存のリンク集の後ろに置きます。
- ページのフロントマターに `wide: true` と `link_tiles: true` を付けます。`link_tiles` がないとタイル化されず、通常の箇条書きになります。
- 項目がまだないページは、本文に「準備中です。」と書きます。

## リンクの書式

見出し（`##`）ごとにグループを作り、箇条書きでリンクを並べます。

~~~markdown
## Transit

* [表示名](https://example.com/): 短い補足（補足は省略可）
~~~

- 項目は `[タイトル](URL)` の形が必須です。補足は `: ` の後ろに書きます（全角コロンも可）。
- リンクを含まない項目が1つでもある箇条書きは、タイル化されず通常のリストのままになります。
- リンクは新しいタブで開きます（`link-tiles.js` が `target="_blank"` と `rel="noopener noreferrer"` を付けます）。
- JavaScript が無効の環境では、リンク付きの通常の箇条書きとして表示されます。
- 同じサイトに PC 用とスマホ用がある場合は、タイトルに `（PC）`、`（スマホ）` を付けて別項目にします。
