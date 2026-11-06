---
layout: default
title: Glance Task Privacy Policy
permalink: /products/swift-glance-task/privacy/
product:
  name: Glance Task
  base: /products/swift-glance-task/
  hide_changelog: true
---

# Glance Task - Your tasks, always in glance

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

Glance Task（以下「本アプリ」）は、個人開発者により提供される、Google タスクをウィジェットで閲覧・編集するための macOS および iOS 向けアプリです。Siri を通じてタスクを追加することもできます。

## 2. 取得・処理する情報

本アプリは、以下の情報のみを処理します。

- ユーザーの Google タスク（取得・表示・作成・更新・完了・削除に使用）
- Google Sign-In によるアカウント認証情報（アクセストークン・リフレッシュトークン）
- Siri（App Intents / SiriKit）経由でタスクを追加する際に認識された、タスク名・リスト名などの発話内容
- アプリの表示設定（表示言語、外観モード、既定のタスクリストなど）

Siri 経由の音声認識そのものは Apple の OS が処理し、本アプリはテキストに変換された結果（タスク名・リスト名）のみを受け取ります。音声データ自体を開発者が受け取ることはありません。

本アプリは、以下の情報を収集しません。

- 氏名、メールアドレス等の個人情報を、開発者が運営するサーバーへ送信すること（本アプリは開発者が運営するサーバーを持たず、Google および Apple のサーバーとのみ通信します）
- アナリティクス、広告、トラッキングの目的での情報収集

## 3. 利用目的

処理する情報は、Google タスクを取得し、ウィジェットおよびアプリ本体上で閲覧・作成・更新・完了・削除できるようにする機能、および Siri からのタスク追加機能のためだけに使用します。

## 4. 保存方法

認証トークンは、デバイスの Keychain に保存されます。取得したタスクの情報は、ウィジェットに表示するためのキャッシュとして、App Group（アプリとウィジェットの間で共有される、デバイス上の領域）に保存されます。これらの情報は、開発者が運営するサーバーには保存されず、開発者がアクセスすることもできません。

本アプリは、無料試用・サブスクリプション・買い切りの購入状態を確認するために、Apple の StoreKit を使用します。購入の手続き、支払い情報、購入履歴は Apple が処理します。開発者は、氏名、支払い情報、メールアドレスなどを受け取りません。

## 5. 外部送信および第三者提供

本アプリは、ユーザー情報を第三者に販売、共有、提供することはありません。タスクの情報は、Google および Apple のサーバーとの通信以外に送信されません。

## 6. 権限およびAPIの利用

本アプリが要求する Google タスクへのアクセス権限（`https://www.googleapis.com/auth/tasks`）は、上記の利用目的のためのみに使用します。取得した情報は、上記目的以外には使用されません。

Google API Services から受領する情報の使用は、[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)（Limited Use 要件を含む）に従います。

## 7. 改定

本ポリシーは、必要に応じて改定されることがあります。
改定後の内容は、本ページに掲載された時点で効力を生じます。

最終更新日: 2026年11月6日

# Privacy Policy (English Translation – Reference Only)

## 1. Provider and Service Overview

Glance Task (the "App") is a macOS and iOS app, provided by an individual developer, for viewing and editing Google Tasks through widgets. You can also add tasks through Siri.

## 2. Data Processed

The App processes only:

- Your Google Tasks (used to fetch, display, create, update, complete, and delete tasks)
- Account authentication credentials from Google Sign-In (access token, refresh token)
- The task name, list name, and similar content recognized when you add a task through Siri (App Intents / SiriKit)
- App display settings (such as display language, appearance mode, and the default task list)

Voice recognition for Siri is handled entirely by Apple's operating system; the App only receives the resulting text (task name, list name). The developer never receives the raw voice data.

The App does NOT collect:

- Personal information such as your name or email address sent to a server operated by the developer (the App has no server operated by the developer and communicates only with Google's and Apple's servers)
- Information for analytics, advertising, or tracking purposes

## 3. Purpose of Use

The processed information is used only to fetch your Google Tasks, to let you view, create, update, complete, and delete them in the widgets and in the app itself, and to support adding tasks through Siri.

## 4. Storage

Authentication tokens are stored in the device Keychain. Fetched task data is cached in an App Group (an area on the device shared between the app and its widgets) to display it in widgets. None of this data is stored on a server operated by the developer, and the developer cannot access it.

The App uses Apple's StoreKit to check the status of the free trial, subscriptions, and the lifetime purchase. Apple handles the purchase process, payment information, and purchase history. The developer does not receive your name, payment information, or email address.

## 5. Third-Party Sharing

No user data is sold, shared, or provided to third parties. Task data is not transmitted anywhere other than to Google's and Apple's servers.

## 6. Permissions and APIs

The Google Tasks access permission requested by this App (`https://www.googleapis.com/auth/tasks`) is used solely for the purposes described above. Collected information is not used for any other purpose.

The use of information received from Google API Services adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## 7. Changes to Policy

This policy may be revised as necessary. Revised content takes effect when published on this page.

Last updated: November 6, 2026
