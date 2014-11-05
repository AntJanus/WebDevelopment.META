title: HTML and CSS
----
content:

First and foremost, you need to learn HTML and CSS. That's a given. At least the basics. You're good to go in under a week to start learning about a programming language, seriously. One week.

Here's what HTML looks like:

`````
<html>
    <head>
        <title>Title of my page that shows up on a tab</title>
        <link href="/path/to/my/css" rel="text/stylesheet" />
    </head>
    <body>
        <h1>My header!</h1>
        <p class="my-text">This is a paragraph!</p>
        <p>My other paragraph!</p>
        <ul>
            <li>This is a list item</li>
            <li>And another one!</li>
        </ul>
    </body>
</html>
`````

Open up Notepad.exe or whatever alternative on a Mac (if you have a code editor, that's even better), paste the content above in there, save it with whatever name you want (with a `.html` suffix/extension) and open it with your browser. Viola, you've made your first website.

The basics of HTML are as follows:

1. HTML is a basic text document that has a certain structure. Everything is wrapped in an `<html>` tag, which holds the next "node" in the structure. The two structures right under `<html>` are `<head>` and `<body>`. The `<head>` gets all of "meta information" or stuff that doesn't literally show up on the page. The `<body>` tag gets all of the stuff you see on the page
2. HTML works in terms of "nodes". Basically, you wrap text or information in a tag to associate it with the tag. Some tags are "self-closing" which means that they have no internal info.
3. Tags can contain (and do contain) other tags
4. Tags can have `attributes` like so: `<p class="hello">Text</p>`, class is an `attribute` which has the value of `hello`.

In essense, this:

````
<selfclosing attribute="value" attribute="value" />
<tagname attribute="value">Inner text or additional tags like an <em>emphasis</em></tagname>
````

Don't worry if that didn't click with you. Just look up "getting started with HTML" in a search engine or wait a couple of chapters for my listings of useful courses!

Next up is CSS. Change the previous HTML bit where it says `link` to this:

````
<link href="style.css" rel="text/stylesheet" />
````

And let's start working on the `style.css` file, your first CSS file. The `href` attribute tells `link` where to find our stylesheet and our `rel` tells link how to parse the file. Here's an example of CSS:

````
h1 {
    font-size: 60px;
    color: #999;
}

.my-text {
    color: #333;
}

p {
    color: red;
}

ul {
    list-style-type: square;
}

````

Save it to where your `.html` file is and open the html file to see the result. The difference should be immediately apparent. CSS is a text document that describes HOW things should look like. You've just witnessed the basics of the syntax.

There are several parts to a CSS declaration but it's pretty simple:

1. The selector. A selector is a way to tell the browser to look for a certain element and apply styles to it. This can be a tag (`<h1>`), or a class (`<h1 class="my-text">`) which uses a dot notation: `.classname`, an ID which looks a lot like a class in terms of declaration but unlike class, it's supposed to be used only once per document while classes group similar objects together. There are other more esoteric selectors and selectors can be combined like so: `h1.my-text` would select ONLY an `<h1>` tag that has a class of `my-text`
2. An attribute and value make up a declaration. It's pretty simple, pick a style like...`font-family` and assign it a value, `Helvetica`. Some declarations require special syntax but it's easy to look that up
3. Styles can override each other. There is a hierarchy to the selectors and the styles "cascade" according to the specifity of the styles. What's interesting is that former styles do not get ignored. So if all `<p>` tags have a color of `#999` and a font-family of `Helvetica`, we can create a `.leading-paragraph` class (class="leading-paragraph") and assign it a special color `#aeaeae` without erasing the previous `font-family` declaration.

Again, I recommend spending around a week on learning HTML and CSS though one could easily get through the basics within a couple of days. Don't worry about learning all the tags from memory, that will come naturally. And don't think you've `mastered` HTML and CSS within a week, there are all kinds of in-depth things to learn about after the basics:

1. Animations
2. Transitions
3. Cross-browser compatibility
4. Object-oriented CSS
5. Media queries
6. and so much more.

And don't forget, if you choose to go the route of a front-end developer or a designer, you may need to learn all of this and that much more.


