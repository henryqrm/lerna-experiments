module.exports = ({ name, Name, type, description, isLibrary }) => {
  return `{
    "name": "@henryqrm/${name}",
    "version": "0.0.0",
    "description": "${description || name + ' ' + type}.",
    "homepage": "https://github.com/henryqrm/lerna-experiments",
    "license": "MIT",
    "main": "dist/${name}.js",
    "module": "dist/${name}.js",
    "typings": "dist/${name}.d.ts",
    "files": [
      "dist"
    ],
    "publishConfig": {
      "access": "public"
    },
    "keywords": [
      "javascript",
      "typescript"
    ],
    "bugs": {
      "url": "https://github.com/henryqrm/lerna-experiments/issues"
    },
    "author": {
      "name": "Henrique Rodrigues Moreira",
      "email": "henryqrm@gmail.com",
      "url": "http://github.com/henryqrm"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/henryqrm/lerna-experiments",
      "directory": "packages/${type}/${isLibrary ? name : Name}"
    },
    "dependencies": {
      ${!isLibrary ? '"react": "^16.7.0"' : ''}
    }
  }
  `
}
