---
layout: default
title: Pick Engine Privacy Policy
permalink: /products/chrome-pick-engine/privacy/
product:
  name: Pick Engine
  base: /products/chrome-pick-engine/
  stores:
    - label: Chrome Web Store
      url: https://chromewebstore.google.com/detail/ihcfdhceinllkcdopimkbofloecbgdgc
---

# Pick Engine

> 本ページでは、まず日本語による正式版を掲載し、その後に英語翻訳版を掲載しています。
>
> 本ページに掲載する文書の正式かつ法的効力を有する版は日本語版とし、英語翻訳は参考用です。
> 解釈に相違がある場合は、日本語版を優先します。
>
> This page first presents the official Japanese version, followed by an English translation.
>
> The Japanese version is the official and legally binding version of the document on this page. The English translation is provided for reference only.
> In the event of any inconsistency, the Japanese version shall prevail.

# プライバシーポリシー（日本語正式版）

## 1. 提供者およびサービス概要

Pick Engine（以下「本拡張機能」）は、個人開発者により、無償で提供されるChrome拡張機能です。

本拡張機能は、アドレスバーに入力した検索語を、ユーザーが設定した複数の検索エンジンへ、重みに応じてランダムに振り分けるツールです。

## 2. 取得・処理する情報

本拡張機能は、以下の情報のみを取り扱います。

- ユーザーが設定した検索エンジンの一覧（名称・検索URL・重み・有効／無効）、グループ（モード）の構成、テーマ設定
- アドレスバーで入力された検索語（振り分け先を決めて遷移するためだけに、ブラウザ内で処理します）
- ダミーホスト `pick-engine.invalid` への遷移の検知に必要なナビゲーション情報（このホストに限定して検知します）

本拡張機能は、以下の情報を収集しません。

- 氏名、メールアドレス等の個人情報
- パスワード、認証情報
- 閲覧履歴
- 閲覧中のページの内容
- 検索語やユーザーの設定情報の、開発者または開発者が管理するサーバーへの送信

本拡張機能は、閲覧中のウェブページにスクリプトを注入しません。

## 3. 利用目的

処理する情報は、検索語を振り分け先の検索エンジンへ遷移させる機能と、設定の保持・表示のためだけに使用します。解析、広告、トラッキングには使用しません。

## 4. 保存方法

設定情報は、以下の方法で保存されます。

- chrome.storage.sync（同一GoogleアカウントでログインしているChrome間での同期。初期設定）
- chrome.storage.local（この端末のみ。設定画面で同期をオフにした場合）

chrome.storage.sync に保存される設定情報は、同一の Google アカウントでログインしている Chrome 間で同期されます。開発者がこれらの設定情報を受け取ることはありません。検索語は保存しません。

## 5. 外部送信および第三者提供

本拡張機能は、ユーザー情報を第三者に販売、共有、提供することはありません。

### 検索先への遷移

検索語は、振り分けの結果として選ばれた検索エンジン（初期設定は Google と Bing。ユーザーが追加した検索エンジンを含みます）にのみ、そのエンジンの検索URLの一部として送られます。これは、ユーザーがそのエンジンで直接検索した場合と同じ通信です。各検索エンジンにおける取り扱いは、それぞれの提供者のプライバシーポリシーに従います。

### 表示用リソース

アイコン用のフォントや画像は、拡張機能に同梱しています。ポップアップや設定画面を開いたときに、これらを外部のサーバーから取得することはありません。

## 6. 権限およびAPIの利用

- `storage`: 設定の保存と同期のために使用します。
- `webNavigation`: ダミーホスト `pick-engine.invalid` への遷移を検知し、選んだ検索先へ遷移させるためだけに使用します。他のサイトへの遷移は対象としません。

本拡張機能は、ホスト権限を要求せず、リモートコードも使用しません。

## 7. 改定

本ポリシーは、必要に応じて改定されることがあります。
改定後の内容は、本ページに掲載された時点で効力を生じます。

最終更新日: 2026年10月28日

# Privacy Policy (English Translation – Reference Only)

## 1. Provider and Service Overview

Pick Engine (the “Extension”) is a Chrome extension provided free of charge by an individual developer.

The Extension sends searches typed in the address bar to one of several search engines configured by the user, chosen at random according to weights.

## 2. Data Processed

The Extension processes only:

- The user’s search engine list (name, search URL, weight, enabled state), group (mode) configuration and theme setting
- The search query typed in the address bar (processed inside the browser solely to choose a destination and navigate)
- Navigation information needed to detect navigations to the placeholder host `pick-engine.invalid` (detection is limited to that host)

The Extension does NOT collect:

- Personal information (such as name or email address)
- Passwords or authentication data
- Browsing history
- Page content
- Search queries or settings sent to the developer or to any server operated by the developer

The Extension does not inject scripts into the web pages you visit.

## 3. Purpose of Use

The processed information is used only to redirect a search to the chosen search engine and to store and display settings. It is not used for analytics, advertising or tracking.

## 4. Storage

Settings are stored using:

- chrome.storage.sync (synchronization across Chrome browsers signed in with the same Google account; the default)
- chrome.storage.local (this device only, when sync is turned off in the settings)

Settings stored with chrome.storage.sync are synchronized between Chrome browsers signed in with the same Google account. The developer does not receive these settings. Search queries are not stored.

## 5. External Transmission and Third-Party Sharing

No user data is sold, shared, or provided to third parties.

### Redirect to the Search Engine

The search query is sent only to the search engine picked as the result of the routing (Google and Bing by default, plus any engines the user adds), as part of that engine’s search URL. This is the same request as when you search on that engine directly. How each search engine handles the query is governed by that provider’s own privacy policy.

### Display Resources

Icon fonts and images are bundled with the Extension. Opening the popup or settings page does not fetch them from any external server.

## 6. Permissions and APIs

- `storage`: used to save and sync settings.
- `webNavigation`: used only to detect navigations to the placeholder host `pick-engine.invalid` and redirect them to the selected search engine. Navigations to other sites are not handled.

The Extension requests no host permissions and uses no remote code.

## 7. Changes to Policy

This policy may be revised as necessary. Revised content takes effect when published on this page.

Last updated: October 28, 2026
