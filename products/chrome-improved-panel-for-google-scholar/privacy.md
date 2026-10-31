---
layout: default
title: Improved Panel for Google Scholar Privacy Policy
permalink: /products/chrome-improved-panel-for-google-scholar/privacy/
product:
  name: Improved Panel for Google Scholar
  base: /products/chrome-improved-panel-for-google-scholar/
  stores:
    - label: Chrome Web Store
      url: https://chromewebstore.google.com/detail/improved-panel-for-google/cihbkinmpknihmjklabiepkbahmnhopi
---

# Improved Panel for Google Scholar – Explore Faster

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

Improved Panel for Google Scholar – Explore Faster（以下「本拡張」）は、Yukihiro Maruiが無償で提供するChrome・Firefox向け拡張機能です。Google Scholarの「おすすめの論文」ページで、論文の追加読み込み、アブストラクトの展開、期間別の表示、論文リンクを開く操作を補助します。

## 2. 取得・処理する情報

本拡張は、対象ページの論文情報、リンク先URL、ページ内に表示される保存状態、ユーザー設定を端末内で処理します。設定には自動読み込み・自動展開・保存済み論文の扱い・リンクの開き方・言語・テーマを含みます。開発者のサーバーに個人情報や閲覧履歴を収集・保存せず、アクセス解析や広告配信は行いません。

## 3. 利用目的

処理する情報は、本拡張の表示・操作補助と設定の維持にのみ使用します。保存済み論文の判定は、自動展開の対象を選ぶためにページ内で行います。

## 4. 保存方法

設定はブラウザの拡張機能用ローカルストレージ（`storage.local`）に保存します。論文本文や閲覧履歴は永続保存しません。設定は本拡張をアンインストールすることで削除できます。

## 5. 外部送信および第三者提供

論文情報・保存状態・閲覧履歴・設定を開発者のサーバーへ送信せず、販売や第三者提供を行いません。

追加の論文を読み込む際にはGoogle Scholarへ、論文リンクを開く際にはリンク先サイトへ、ブラウザによる通常の通信が発生します。利用者が製品ホームや支援リンクを開いた場合も、それぞれのサイトへ通信します。これらのサイトには各サイトのプライバシーポリシーが適用されます。

## 6. 権限およびAPIの利用

`storage`権限は設定の保存と変更通知に使用します。content scriptは `https://scholar.google.com/scholar*` に限定して注入し、おすすめの論文ページを判定して処理します。`host_permissions`は要求しません。ブラウザのタブ・メッセージAPIは、画面間の操作連携と論文リンクを別タブで開くために使用します。

## 7. 改定

本ポリシーを改定する場合は、このページに掲載します。問い合わせは[製品ホームのSupport節](../#support)をご利用ください。

最終更新日: 2026年10月30日

# Privacy Policy (English Translation – Reference Only)

## 1. Provider and Service Overview

Improved Panel for Google Scholar – Explore Faster (the “Extension”) is a free Chrome and Firefox extension provided by Yukihiro Marui. It assists with loading additional papers, expanding abstracts, grouping papers by period, and opening paper links on Google Scholar's recommended-papers page.

## 2. Data Processed

The Extension processes paper information, destination URLs, saved status shown on the page, and user preferences on the user's device. Preferences cover automatic loading, abstract expansion, handling of saved papers, link behavior, language, and theme. It does not collect or store personal information or browsing history on the developer's servers, or use analytics or advertising.

## 3. Purpose of Use

Data is used only to provide display and navigation assistance and retain preferences. Saved status is checked within the page to determine which abstracts to expand automatically.

## 4. Storage

Preferences are stored in the browser's local extension storage (`storage.local`). Paper text and browsing history are not persistently stored. Uninstalling the Extension removes its stored preferences.

## 5. External Transmission and Third-Party Sharing

Paper information, saved status, browsing history, and preferences are not sent to the developer's servers, sold, or shared with third parties.

Loading additional papers makes normal browser requests to Google Scholar. Opening paper links makes normal requests to the destination websites. Opening the product homepage or support links also connects to the respective websites. Each website's own privacy policy applies.

## 6. Permissions and APIs

The `storage` permission is used to save preferences and receive change notifications. The content script is injected only into `https://scholar.google.com/scholar*` and checks for the recommended-papers page before operating. No `host_permissions` are requested. Browser tab and messaging APIs coordinate extension controls and open paper links in separate tabs.

## 7. Changes to Policy

Updates to this policy will be published on this page. For questions, use the [Support section on the product homepage](../#support).

Last updated: October 30, 2026
