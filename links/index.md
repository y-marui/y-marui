---
layout: default
title: Links
permalink: /links/
---

# Links

好きなサイトへのリンク集です。

{% for group in site.data.links %}
## {{ group.group }}

<div class="link-tiles">
{% for item in group.items %}
  <a class="link-tile" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
    <span class="link-tile__title">{{ item.title }}</span>
    {% if item.note %}<span class="link-tile__note">{{ item.note }}</span>{% endif %}
  </a>
{% endfor %}
</div>
{% endfor %}
