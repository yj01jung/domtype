import './mod.ts';

// Example

for (const p of document.querySelectorAll('p')) {
  console.log(p.innerText);
}

const div = document.createElement('div');
console.log(div.nodeType);
