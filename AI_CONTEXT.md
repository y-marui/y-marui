# AI Context

## Project Overview

Personal site of Yukihiro Marui, published with GitHub Pages (Jekyll, `jekyll-theme-minimal`) at https://y-marui.github.io/y-marui/.

- `README.md`: the site top page (rendered by Jekyll). Do not turn it into a developer README.
- `products/`: public pages for each product (home, privacy policy, terms, changelog). See `products/README.md`.
- `links/`: link collections.
- `_layouts/`, `_includes/`, `_data/`, `assets/`: Jekyll templates, navigation, CSS and JS.
- `docs/dev-charter/`: dev-charter (lite), managed with `git subtree`. Do not edit directly.

## Applied Charter Principles

Charter reference: read `docs/dev-charter/CHARTER_INDEX.md` to find the topic, then read only the relevant file.

- Update the charter only with `git subtree pull --prefix=docs/dev-charter dev-charter lite --squash`.
- Conventional Commits, Draft PRs for AI-created PRs (`docs/dev-charter/PROJECT_LIFECYCLE.md`, `topics/CI_POLICY.md`).
- Secrets and personal information are never committed (`docs/dev-charter/SECURITY_POLICY.md`).

## Document Sync Rule

仕様・ルール・構成に変更が生じたとき、変更と同じ作業内で関連ドキュメントを更新する。
対象は docs/ 内のファイルに限らず、AI_CONTEXT.md・README.md 等のルートファイルも含む。

## Project-Specific Rules

- Product pages follow `products/README.md`. That file takes precedence over the charter for product pages (store and legal text requirements).
- Product home pages and `products/index.md` are English only. Japanese appears only in the official versions of `privacy.md` and `terms.md`.
- Never print the support email address in Markdown or HTML. Use `{% include contact.html %}`.
- This repository is published with Jekyll. Files that must not become pages (AI context, `docs/`) are listed in `exclude:` of `_config.yml`. Add new non-site files there.
- `scripts/*.sh` and `.gitleaks.toml` are copied from the `full` branch of dev-charter (the `lite` branch does not include them). `git subtree pull` does not update them; compare with `dev-charter/full` when updating the charter.
- The heading language check (English headings) skips `products/*/privacy.md` and `products/*/terms.md`, which use Japanese headings by `products/README.md`. That file takes precedence over `LANGUAGE_POLICY.md` for product pages.
- Check rendered pages in the browser after publishing when pages or layouts change.

## AI Tool Assignments

- **使用ツール**：Claude Code、Codex、GitHub Copilot
- **標準担当の正本**：`docs/dev-charter/AI_COLLABORATION_RULES.md` の「AI Tool Responsibilities」と「Rules for Multi-AI Usage」
- **プロジェクト固有の上書き**：なし

## Prohibited Actions

- Editing `docs/dev-charter/` directly.
- Committing secrets, credentials, internal hostnames, or personal information.
- Publishing a product page before its privacy policy matches the actual data handling.
