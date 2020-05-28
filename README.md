# embed-html

Engineless super-simple HTML templating

## Usage

Simply install with `npm i embed-html`

The package can then be used as a single function:

`index.html`: `<h1>${header}</h1>`
```js 
const embed = require('embed-html')
console.log(embed('index.html', { header: 'Hello!' }))
```
Outputs `<h1>Hello!</h1>`