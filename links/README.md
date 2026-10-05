# Links 運用方針

`links/` は、サイトのリンク集ページを置く場所です。リンク本体は `_data/links/` の YAML で管理し、ページ側は `_includes/link-tiles.html` で描画します。

## ページ構成

メニュー（`_data/nav.yml`）の並びと、各ページの位置づけは次のとおりです。

| メニュー表示 | URL | ページ | データ | 位置づけ |
| --- | --- | --- | --- | --- |
| Research & Work | `/links/research/` | `links/research.md` | `_data/links/research.yml` | 研究・仕事 |
| Hobby & Life | `/links/other/` | `links/other.md` | `_data/links/other.yml` | 趣味・生活 |
| Sendai | `/links/sendai/` | `links/sendai.md` | `_data/links/sendai.yml` | 仙台ローカル |

## 基本方針

- メニュー表示とページ見出しは英語で統一します（Top / Products / Blog と揃えるため）。
- URL は既存リンクを壊さないよう変更しません。そのため `/links/other/` の表示名は Hobby & Life ですが、URL とファイル名は `other` のままです。
- 新しいリンク集を追加するときは、`links/<name>.md`、`_data/links/<name>.yml`、`_data/nav.yml` を揃えて更新します。メニューでは Blog より前、既存のリンク集の後ろに置きます。
- データが空のページは「準備中です。」と表示されます（`research.md` / `sendai.md` の `size == 0` 分岐）。

## リンクの書式

`_data/links/*.yml` は、グループごとに `group` と `items` を持ちます。

~~~yaml
- group: Transit
  items:
    - title: 表示名（必須）
      url: https://example.com/（必須）
      note: 短い補足（任意）
~~~

- リンクは新しいタブで開きます（`link-tiles.html` が `target="_blank"` と `rel="noopener noreferrer"` を付けます）。
- 同じサイトに PC 用とスマホ用がある場合は、タイトルに `（PC）`、`（スマホ）` を付けて別項目にします。
