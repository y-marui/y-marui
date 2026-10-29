# Site Theme

## Base and Scope

The site uses [Minima 2.5.1](https://github.com/jekyll/minima/tree/v2.5.1), supplied by GitHub Pages, as its upstream theme. This is a local customization, not a separately published theme gem or GitHub fork. Minima provides Markdown typography and syntax highlighting; `_layouts/default.html` adapts its header / main / footer structure. Its MIT notice is retained in `docs/licenses/minima.txt`. The repository's own license does not replace upstream licenses.

The custom skin follows `web-ymarui` and `web-sendaicmc`: white background, charcoal `#333537`, system fonts (Avenir Next / Helvetica Neue and Japanese sans-serif fallbacks), fine rules, normal-weight headings, and a footer with the entire `© Yukihiro Marui` linking to `https://ymarui.com/` in the same tab. Fonts and JavaScript libraries are not fetched from a CDN.

## Layout and Behavior

Browser titles use the rendered H1 followed by ` | Yukihiro Marui Ph.D.`; the top page uses only `Yukihiro Marui Ph.D.` to avoid repetition. SEO metadata remains enabled without generating a second title tag.

- Shared files: `_layouts/default.html`, `assets/css/style.scss`, and `assets/js/site.js`.
- The header uses web-sendaicmc’s fading white veil, extending 32px below the header with the same opacity stops.
- The desktop menu is centered, with no separate brand label at the upper left. A monochrome 20px GitHub icon links to `https://github.com/y-marui` in a new tab at the upper right, following web-sendaicmc’s social-link placement; its inline SVG is shared with web-ymarui (Simple Icons, CC0).
- On product pages, Top and Products retain the regular ink color; product names, product-specific pages, their dropdown links, and store links use `#707478`, matching web-sendaicmc’s Internal item.
- Site and product menus retain their existing Liquid includes and data. At 1200px and below, the menu uses native `details` / `summary`; without JavaScript, it starts expanded. No links depend on JavaScript.
- The old fixed sidebar becomes a dropdown beneath each internal page tab in the header, containing section links only. Parent labels are normal page links; adjacent disclosure controls open the section list on touch screens. On desktop, each dropdown is centered beneath its menu label. Narrow-screen dropdowns align with the right edge to stay within the viewport. Each outline is generated from the target page at build time and links directly to its section anchors, including from other pages. Pages without sections keep a plain link. There is no separate On this page tab. It supports mouse hover at any viewport width, a native disclosure control, keyboard focus, and Escape to close. Parent links always navigate directly; hovering them opens the dropdown independently. The parent underline remains while open; dropdown rows use pale gray backgrounds, white separators, and a darker hover fill without underlines or outer borders. Ordinary pages use an 820px column; `wide: true` pages use up to 1200px.
- Existing Markdown, permalinks, store links, legal content, contact button, and link tiles remain in place.
- HTTP(S) links to other origins open in a new tab, except the footer link. Product links in the top page body also open in a new tab through `site.js`, allowing README to use plain Markdown links. Source-relative `.md` links are rewritten by GitHub Pages through `jekyll-relative-links`. The favicon uses `relative_url`, so preview base paths work.
- Production is `https://dev.ymarui.com/` with an empty `baseurl`. Pass `--baseurl /y-marui` to preview the former project path.

Tables follow the Research timeline style: no cell borders or striped backgrounds, 14.5px text with 1.7 line height, and compact left-aligned cells. Below 760px, each row stacks vertically.

## Preview and Verification

Install Ruby and Bundler, then run from the repository root:

~~~sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 8765
~~~

Open `http://127.0.0.1:8765/`. Check the top page, Products, a product home, privacy policy, terms, changelog, optional Usage, and a tile-based Links page. Check desktop and narrow widths, menu open/close, table of contents, contact button, and footer link.

For a static build:

~~~sh
bundle exec jekyll build
~~~

The Gemfile and lock file reproduce GitHub Pages dependencies locally. Publishing continues through the existing GitHub Pages setup; no deployment changes are needed.
