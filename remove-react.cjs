const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace `import React from 'react';\n`
  content = content.replace(/^import React from 'react';\r?\n/m, '');
  
  // Replace `import React, { type ButtonHTMLAttributes } from 'react';` with `import { type ButtonHTMLAttributes } from 'react';`
  content = content.replace(/^import React, \{(.+?)\} from 'react';/gm, 'import {$1} from \'react\';');

  fs.writeFileSync(file, content);
});
console.log('Done replacing React imports');
