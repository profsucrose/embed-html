module.exports = (file, args) => {
    let html = require('fs').readFileSync(file).toString()
    for (templateVar in args) {
        html = html.replace(
            new RegExp(`\\\${${templateVar}}`, 'g'), 
            args[templateVar]
        )
    }
    return html
}