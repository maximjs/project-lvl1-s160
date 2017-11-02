install: npm install
build:
	rm -rf dist
	npm run build
lint: npm run eslint
publish:
	npm publish
run:
	npm run babel-node -- src/bin/brain-games.js
