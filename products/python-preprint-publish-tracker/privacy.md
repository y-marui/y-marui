---
layout: default
title: Preprint Publish Tracker Privacy Policy
permalink: /products/python-preprint-publish-tracker/privacy/
product:
  name: Preprint Publish Tracker
  base: /products/python-preprint-publish-tracker/
  stores:
    - label: Web App
      url: https://preprint.ymarui.com/
---

# Preprint Publish Tracker

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

Preprint Publish Tracker（以下「本サービス」）は、個人運営者（以下「運営者」）が提供する、プレプリントの出版状況を確認して通知する招待制の Web アプリです。`.ac.jp` のメールアドレスをお持ちで、招待を受けた方だけが利用できます。

運営者の氏名および住所は、本ページには掲載しません。個人情報の取扱いに関する請求があった場合は、本人確認のうえ、遅滞なく開示します。請求は、[サポートページ](../)に記載の連絡先にお送りください。

## 2. 取得・処理する情報

本サービスは、次の情報を取得・処理します。

- アカウント用のメールアドレス（招待を受けたアドレス、および変更後のアドレス）と、パスワードのハッシュ値（パスワードそのものは保存しません）
- 通知先のメールアドレス（利用者が任意で設定し、確認が済んだものだけを保存します）
- 利用者が登録したプレプリント（サイト名、ID、タイトル、DOI、確認日時）と、その整理状態（アーカイブなど）
- 招待の記録（招待先のアドレス、招待した利用者、有効期限、承諾の状況。招待リンクはハッシュ値だけを保存します）
- ログイン失敗の記録（入力されたメールアドレス、接続元の IP アドレス、回数、日時）と、不正利用を防ぐための利用回数の記録
- メールの送信回数と日時（宛先は含みません）
- お知らせの表示・配信の記録
- ログインの維持に使う署名付きの Cookie

利用者が登録するのは、公開されているプレプリントの情報です。研究データや原稿の本文は取得しません。

## 3. 利用目的

取得した情報は、次の目的に限って利用します。

- ログインおよびアカウントの管理（招待、メールアドレスの確認、パスワードの再設定を含みます）
- 登録されたプレプリントの出版状況の確認と、出版されたときの通知
- 運営上の連絡（障害、メンテナンス、規約の変更などのお知らせ）
- 不正アクセスやパスワードの総当たり攻撃の防止
- メールの送信上限の管理

利用目的を変更する場合は、本ページで告知します。

## 4. 保存方法

情報は、運営者が管理するサーバー上のデータベースに保存します。パスワードは bcrypt でハッシュ化して保存します。

アカウントを削除したとき（利用者による削除、運営者による削除のいずれも）は、30 日間は復旧できる状態で保持し、その後にメールアドレス、通知先、登録したプレプリント、同期の履歴、パスワードなどを消去します。招待の枠を再利用できないようにするため、個人を特定できない形の記録だけを残します。

ログイン失敗の記録と利用回数の記録は、一定期間が過ぎると削除します。

## 5. 外部送信および第三者提供

運営者は、利用者の情報を販売せず、本ポリシーに記載した目的以外では提供しません。法令に基づく場合を除き、本人の同意なく第三者に提供しません。

次の事業者や外部サービスには、サービスの提供に必要な範囲で、情報を送信し、または取り扱わせます。

- メール配信事業者：招待、確認、パスワード再設定、出版通知、お知らせのメールを送るため、宛先のアドレスと本文を渡します。
- Cloudflare, Inc.：サイトへのアクセスを招待済みの利用者に限るため、招待済みおよび確認済みのアカウント用アドレスの一覧を登録し、ワンタイムパスコードによるログインとアクセスの中継を行います。同社のサーバーは日本国外にある場合があります。
- arXiv、bioRxiv、medRxiv、Research Square、TechRxiv、Crossref、HAL など：出版状況を確認するため、登録されたプレプリントの公開 ID または DOI だけを送ります。利用者のメールアドレスなどは送りません。先方が運営者に連絡できるよう、確認のリクエストには運営者の連絡用アドレスを付けます。

アクセス解析、広告、トラッキングのための外部サービスは使用しません。

運営者が利用する各事業者は、日本国外にサーバーを置いている場合があります。

## 6. 権限およびAPIの利用

本サービスは、ログインを維持するための署名付きの Cookie を使用します。また、Cloudflare によるアクセス制御のため、同社の認証用 Cookie が使われます。これらを広告や追跡には使用しません。

## 7. 改定

本ポリシーは、必要に応じて改定されることがあります。
改定後の内容は、本ページに掲載された時点で効力を生じます。

最終更新日: 2026年10月13日

# Privacy Policy (English Translation – Reference Only)

## 1. Provider and Service Overview

Preprint Publish Tracker (the “Service”) is an invitation-only web application, run by an individual (the “Operator”), that checks the publication status of preprints and sends notifications. It is available only to people with an `.ac.jp` email address who have been invited.

The Operator’s name and address are not published on this page. If you make a request concerning your personal information, they will be disclosed without delay after your identity is confirmed. Send requests to the contact on the [support page](../).

## 2. Information Collected and Processed

The Service collects and processes:

- Account email addresses (the invited address and any later changed address) and a hash of the password (the password itself is not stored)
- A notification email address, if you set one (stored only after it is confirmed)
- The preprints you register (source, ID, title, DOI, check times) and their state (such as archived)
- Invitation records (invited address, inviter, expiry, acceptance status; invitation links are stored only as hashes)
- Records of failed log-in attempts (the address entered, the client IP address, count, time) and usage counters used to prevent abuse
- The count and time of sent emails (without recipients)
- Records of announcements shown or delivered
- A signed cookie that keeps you logged in

You register information about publicly available preprints. The Service does not collect your research data or manuscript text.

## 3. Purposes of Use

The information is used only for:

- Logging in and managing accounts (including invitations, email confirmation and password reset)
- Checking the publication status of registered preprints and notifying you when one is published
- Operational messages (outages, maintenance, changes to the terms)
- Preventing unauthorized access and password guessing
- Managing the email sending limit

Changes to these purposes will be announced on this page.

## 4. Storage

Information is stored in a database on servers managed by the Operator. Passwords are stored hashed with bcrypt.

When an account is deleted, by you or by the Operator, it is kept recoverable for 30 days. After that the email addresses, notification address, registered preprints, sync history, password and similar data are erased. Only a record that cannot identify a person is kept, so that the invitation quota cannot be reused.

Records of failed log-ins and usage counters are deleted after a period of time.

## 5. External Transmission and Third-Party Provision

The Operator does not sell your information and does not provide it for purposes other than those stated here. Except where required by law, it is not provided to third parties without your consent.

The following providers and services handle information to the extent needed to provide the Service:

- Email delivery provider: receives the recipient address and message text to send invitations, confirmations, password resets, publication notices and announcements.
- Cloudflare, Inc.: to limit access to invited users, the list of invited and confirmed account addresses is registered with it, and it performs the one-time-passcode login and relays access. Its servers may be outside Japan.
- arXiv, bioRxiv, medRxiv, Research Square, TechRxiv, Crossref, HAL and similar services: only the public ID or DOI of a registered preprint is sent to check its publication status. Your email address and similar information are not sent. The Operator’s contact address is included in the requests so that those services can reach the Operator.

No analytics, advertising or tracking services are used.

The providers the Operator uses may have servers outside Japan.

## 6. Permissions and API Use

The Service uses a signed cookie to keep you logged in. Cloudflare’s own authentication cookie is also used for access control. These are not used for advertising or tracking.

## 7. Changes

This policy may be revised as necessary.
Revised content takes effect when published on this page.

Last updated: October 13, 2026
