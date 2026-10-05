---
layout: default
wide: true
title: Sendai Local
permalink: /links/sendai/
---

# Sendai Local

仙台のローカル情報に関するリンク集です。

{% if site.data.links.sendai.size == 0 %}
準備中です。
{% else %}
{% include link-tiles.html groups=site.data.links.sendai %}
{% endif %}
