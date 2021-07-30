// javascript: (function() {
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = "https://github.com/dikobrazik/json-beautifier/json-beautifier.js";
//     document.body.appendChild(s);
// })()
import createJSONDOM from './create-json-dom';

const jsonContainer = document.querySelector('body > pre');

if (!jsonContainer || !jsonContainer.textContent) throw Error('');

const json = JSON.parse(jsonContainer.textContent);
jsonContainer.remove();
const beautyJSONContainer = document.createElement('div');
document.body.appendChild(beautyJSONContainer);

createJSONDOM(beautyJSONContainer, json);

// jsonContainer.textContent = JSON.stringify(JSON.parse(json), undefined, '  ');

// <details>
//   <summary>See More</summary>
//   This text will be hidden if your browser supports it.
// </details>