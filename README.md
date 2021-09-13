# asmcss-mixin-lang

A mixin for [Assembler CSS](https://github.com/asmcss/assembler) that allows to use a specific properties that have an effect only on certain page languages.

### Installation

Install the mixin from npm:

```
npm install asmcss-mixin-lang
```

or use the mixin from CDN:

```html
<script src="https://unpkg.com/asmcss-mixin-lang@^1/dist/js/asmcss-mixin-lang.min.js"></script>
```

### Usage

```html
<div x-style="display:none; ^lang:en,display:block;">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vel nisi nulla mollitia eius? Inventore amet aspernatur ratione. 
    Error recusandae quidem deleniti, deserunt doloribus consequuntur cumque non dicta placeat possimus natus!
</div>
<div x-style="display:none; ^lang:fr,display:block;">
    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
    Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble 
    des morceaux de texte pour réaliser un livre spécimen de polices de texte.
</div>
```

### License
[The MIT License (MIT)](https://github.com/Awilum/asmcss-mixin-lang/blob/master/LICENSE)
Copyright (c) 2021 [Sergey Romanenko](https://github.com/Awilum)

