## Reset Css 파일 분류

### PC용
```
body {margin: 0; padding: 0; line-height: 1;}
h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, table, fieldset, iframe {margin: 0; padding: 0; border: 0;}
h1, h2, h3, h4, h5, h6 {font-weight: 600;}
header, main, footer, section, article, aside, nav {display: block;}
a {margin: 0; padding: 0; font-size: 100%; color: inherit; text-decoration: inherit;}
a img {border: none;}
img {vertical-align: middle;}
li {list-style: none;}
address, em, i, cite {font-style: normal;}
table {border-collapse: collapse;}
table caption, legend {overflow: hidden; position: static; top: -1px; left: -1px; width: 1px; height: 1px; font-size: 0; line-height: 0;}
i.fas, i.far, i.fab {vertical-align: middle; display: inline-block;}
.mobile {display: none !important;}
br.only-m {content: '';}
br.only-m:after {content: '\00a0';}
div.hidden {position: absolute; left: -9999px;}
form, fieldset {border: none;}
input, select {vertical-align:middle; border-radius:inherit; /* for Mac */}
input, select, textarea, button {font-family:inherit;}
input[type=submit] {-webkit-appearance: none; appearance: none; /* for ios */}
```

### Mobile용
```
html {-webkit-text-size-adjust: none; text-size-adjust: none;}
body {margin: 0; padding: 0; line-height: 1;}
h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, table, blockquote {margin: 0; padding: 0;}
h1, h2, h3, h4, h5, h6 {font-weight: 600;}
header, main, footer, section, article, aside, nav {display: block;}
a {color: inherit; text-decoration: inherit;}
a img {border: none;}
img {vertical-align: middle; max-width: 100%;}
li {list-style: none;}
address, em, i, cite {font-style: normal;}
table {border-collapse: collapse;}
table caption, legend {overflow: hidden; position: static; top: -1px; left: -1px; width: 1px; height: 1px; font-size: 0; line-height: 0;}
i.fas, i.far, i.fab {vertical-align: middle; display: inline-block;}
.pc {display: none !important;}
br.only-w {content: '';}
br.only-w:after {content: '\00a0';}
div.hidden {position: absolute; left: -9999px;}
form, fieldset {border: none;}
input, select {vertical-align:middle; border-radius:inherit; /* for Mac */}
input, select, textarea, button {font-family:inherit;}
input[type=submit] {-webkit-appearance: none; appearance: none; /* for ios */}
```


### Referance
- [WPPP Class Day 23 - reset.css 및 CSS 작성팁](https://sereni-ty.tistory.com/51)
