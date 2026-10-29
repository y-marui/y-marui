.DEFAULT_GOAL := preview

HOST ?= 127.0.0.1
PORT ?= 8765
BUNDLE ?= bundle

.PHONY: preview server

preview: server

server:
	$(BUNDLE) exec jekyll serve --host "$(HOST)" --port "$(PORT)"
