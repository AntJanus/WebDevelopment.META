title: HTML and CSS
----
flag: done
----
content:

First and foremost, you need to learn HTML and CSS. That's a given. At least the basics. You're good to go in under a week to start learning about a programming language, seriously. One week but probably much less. I've met people who can pick it up in less than a day.

### HTML

Here's what HTML looks like:

```html
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
```

Open up Notepad.exe or whatever alternative on a Mac (if you have a code editor, that's even better), paste the content above in there, save it with whatever name you want (with a `.html` suffix/extension such as `hello-world.html`) and open it with your browser. Viola, you've made your first website.

The basics of HTML are as follows:

1. HTML is a basic text document that has a certain structure. Everything is wrapped in an `<html>` tag, which holds the next "node" (tag) in the structure. The two structures right under `<html>` are `<head>` and `<body>`. The `<head>` gets all of "meta information" or stuff that doesn't literally show up on the page. The `<body>` tag gets all of the stuff you see on the page.
2. HTML works in terms of "nodes". Basically, you wrap text or information in a tag to associate it with the tag. Some tags are "self-closing" which means that they have no internal info.
3. Tags can contain (and do contain) other tags
4. Tags can have `attributes` like so: `<p class="hello">Text</p>`, `class` is an `attribute` which has the value of `hello`.

In essense, this is what HTML is:

```html
<selfclosing attribute="value" attribute="value" />
<tagname attribute="value">Inner text or additional tags like an <em>emphasis</em></tagname>
```

All websites are made of HTML and various tags provide different functions. Try to modify the HTML I provided you with and include some other tags such as:

- `<ul> <li>first-item</li> <li>second-item</li> </ul>` - this is a simple list
- `<form> <input type="text" /> <input type="submit" /> </form>` - this is a simple form. Note how the `type` attribute changes the way the entire element looks and behaves. Give the `password` and `radio` and `checkbox` types a shot.
- `<button> click me! </button>` - an element similar to the submit button above yet it does not provide any built-in functionality

As you can see there are also tags that require to be wrapped in something else to work. Like the list. The list items `li` have to be wrapped in an `ul`. Form fields do not have to be wrapped but when they are wrapped in `form`, the browser adds certain functionality.

Don't worry if that didn't click with you. Just look up "getting started with HTML" in a search engine or wait a couple of chapters for my listings of useful courses!

### CSS

Next up is CSS. Change the previous HTML bit where it says `link` to this:

```html
<link href="style.css" rel="text/stylesheet" />
```

And using your notepad.exe or whatever file editor you're using, create a file called `style.css` in that same directory as your HTML file.

So let's start working on the `style.css` file, your first CSS file. The `href` attribute tells `link` where to find our stylesheet and our `rel` tells link how to parse the file (or basically, what kind of file it is). This is basically an HTML tag that tells the browser "download a file at this location and parse it like a stylesheet". Here's an example of CSS:

```css
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

```

Save it to where your `.html` file is and open the html file to see the result. The difference should be immediately apparent. CSS is a text document that describes HOW things should look like. You've just witnessed the basics of the syntax.

There are several parts to a CSS declaration but it's pretty simple:

1. The selector. A selector is a way to tell the browser to look for a certain element and apply styles to it. This can be a tag (`<h1>` written as `h1` without the brackets), or a class (`<h1 class="my-text">`) which uses a dot notation: `.classname`, an ID (`<h1 id="my-text"` written as `#my-text` in CSS) which looks a lot like a class in terms of declaration but unlike class, it's supposed to be used only once per document while classes group similar objects together. There are other more esoteric selectors and selectors can be combined like so: `h1.my-text` would select ONLY an `<h1>` tag that has a class of `my-text`
2. Declaration list. A declaration list is a list of styles you'd like to apply to the elements you selected. These are listed within curly braces `{ }`.
2. An attribute and value make up a declaration. It's pretty simple, pick a style like...`font-family` and assign it a value, `Arial`. Some declarations require special syntax but it's easy to look that up.
3. Styles can override each other. There is a hierarchy to the selectors and the styles "cascade" according to the specifity of the styles. What's interesting is that former styles do not get ignored. So if all `<p>` tags have a color of `#999` and a font-family of `Helvetica`, we can create a `.leading-paragraph` class (`<p class="leading-paragraph"></p>`) and assign it a special color `#aeaeae` without erasing the previous `font-family` declaration. That `leading-paragraph` paragraph will now have its new color but the `Helvetica` font.

Here is an example of what I've just said:

```css
p {
  font-family: Helvetica, Arial, sans-serif; //special font-family syntax, if one font is not available, the next one in line is selected
  color: #999;
}

.leading-paragraph {
  color: #aeaeae;
}

#main-paragraph {
  font-size: 26px;
}
```

Again, I recommend spending around a week on learning HTML and CSS though one could easily get through the basics within a couple of days. Don't worry about learning all the tags from memory, that will come naturally. And don't think you've `mastered` HTML and CSS within a week, there are all kinds of in-depth things to learn about after the basics:

1. Animations
2. Transitions
3. Cross-browser compatibility
4. Object-oriented CSS
5. Media queries
6. and so much more.

And don't forget, if you choose to go the route of a front-end developer or a designer, you may need to learn all of this and that much more with time.
