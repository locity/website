UNAME := $(shell uname)

clean:
	git push origin --delete gh-pages && git branch -d gh-pages

publish:
	git subtree push --prefix dist/website origin gh-pages

.PHONY: publish clean
