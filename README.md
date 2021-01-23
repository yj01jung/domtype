# DOMType

Deno compatible lib.dom.d.ts

### CHANGELOG

#### 1.0.4

- Deno 1.7.0 compat

### How to use

```ts
import 'https://deno.land/x/domtype@1.0.3/mod.ts';

// Example

for (const p of document.querySelectorAll('p')) {
  console.log(p.innerText);
}

const div = document.createElement('div');
console.log(div.nodeType);
```
