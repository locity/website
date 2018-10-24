UNAME := $(shell uname)

publish: build domain commit clean push

build:
	ng build

domain:
	cp ./src/CNAME ./dist/website/

commit:
	ga ./dist && gc -m"New build."

clean:
	git push origin --delete gh-pages

push:
	git subtree push --prefix dist/website origin gh-pages

.PHONY: publish
