title: Front matter
----
content:

## WebDeveloper.META

Dedicated to the memory of Raphael Caixeta, a great entrepreneur, teacher, and friend. Without him, I would not be who I am today.

title: Foreword
----
content:

Web development is an amazing field to enter for a great number of reasons. From great pay and benefits, to the low barrier of entry, it's the perfect job for someone who enjoys programming, logical thinking, and problem solving. I believe that there is no other position today that offers such amazing advantages as web development, not even other types of development.

To embark on this journey, one must accept several things about their job. First, they're never finished with learning, and second, enjoyment drives your career. Unlike in other positions and job markets, web development requires a passion and joy in the product making.

I am writing this book mainly to encourage others to enter the field, to get a job worthy of their efforst, and to advance further. The field is largely a mystery to most people even to those in the field itself. We are mostly unaware of how others could enter the field and how to advance. Other than our own personal journey, there is no frame of reference. However, that is the exact beauty of this field, there are many avenues of entering it and many more avenues of advancing in it.

All the aspects and facest of webdev get quickly confusing. So I decided to split the book into several parts:

1. introduction to webdev
2. learning webdev
3. getting employed
4. becoming better at what you do
5. diving into personal projects
6. the "meta" of programming
7. tools and their differnces
8. health and webdev


title: End
----
content:



title: What is web development?
---
content:

Let's back track a little bit. Instead of asking "what is web development", let's ask a couple of other questions:

1. What is programming?
2. How does the internet work?

The first question may sound self-evident but it's actually much more difficult to answer than any of the others. Programming is, in fact, a blackbox that rarely anyone outside of the programming fields glimpses into. The media often portrays it as a malicious tool that no one should wield while startup investors see a sort of engine that converts money into...well, more money. Managers often see it as a necessary evil in business-growth and programmers see it as the solution to all of the world's problems.

Programming, in essence, is the creation of instructions for a computer to digest and follow. It usually involves a programming language, a language that humans can learn and wield, and an intermediate step (or several) that convert the programming language into a lower-level language until finally it reaches 1's and 0's that the CPU and other computer parts can understand without question.

What's important for programmers today is seeing the ground that their efforts have been built on. For instance, the intermediate language one step above our 1's and 0's (also called the "Machine Language") called Assembly, requires a lot of work to use and make it run. However, it is still much easier than typing in 1's and 0's in succession to manually create our instructions. A language that exists right above it is, again, magnitudes easier and thus enable us, programmers, to do much more complicated things.

C++ is such a language and virtually any program can be built in. It has wide-reaching applications from embedded systems, to operating systems, to servers, and everything else. It is one of the most versatile languages out there. However, it can be difficult to learn and thus further abstractions come into play.

Several levels up, we finally get to a web browser. A web browser may be built in C++ and what's interesting is that it doesn't do everything by itself. So another important tenet of programming is to create programs that make other programs easier to run. In this case, the operating system, built in C++ as well, takes care of running the processor, running several processes at once, interacting with the rest of the hardware, and running the browser itself as well as allowing it to communicate with others parts of the system. The web browser makes it access graphics on the screen by translating HTML (HyperText Markup Language) and CSS (Cascading Stylesheets) into instructions that are then sent to the OS and make their way down all the levels until finally accessing the machine.

Now, this may sound complicated and it is but it's much easier if you allow yourself to focus on only your level of complexity. In time, you'll start to see these large patterns, abstraction and communication within layers, the longer you program.

So, in conclusion, programming involves a fine art of making it easier and quicker to make complex computer instructions.

But we still haven't discussed how the internet works. For a web developer, knowing the background behind how their code runs is crucial to being a successful developer. It also enables a developer to communicate better with others in adjoining fields such as system administrators, devOps, and similar.

At its core, internet is pretty simple. It's a huge web of wires that allow computers to communicate with each other. Back in '90, Berners-Lee and Cailliau came up with a proposal for hypertest and gave rise to WWWW or the World WIde Web. These two guys realized that there could be a better way for computers to communicate. A more, "user friendly" method that would allow people to "browse freely" through exposed documents on another machine. This idea augmented the way people interacted with the internet, making it a more accessible place for people outside of academics, government, and business. Soon enough, domains came to be (a sort of "alias" for an IP address), HTML was widely adopted and we started progressing toward the internet we know and love today.

And this, finally brings us to what web development is. Web Development is the process through which a web page is created. Whenever you open some kind of site through your internet browser, you access a web page that was developed by a web developer.

However, as easy-sounding as it is, it can be much more complicated. The Web started with "static" pages, which were websites precoded in HTML. These sites dominated the world until server-side scripting languages took over. First used for templating, and later as a way to truly "program" the web page. In this case, programming allows us to put any kind of instructions that need to be carried out and reflected on a web page.

We can, for instance, use a server-side programming language to get information from a database, do some post-processing on it, and display it in a format that is pleasing to us.

What's great is that the adoption of internet and the boom it caused in businesses allowed several key technologies to emerge: javascript, and CSS. Javascript allows us to do **front-end development** while server-side languages allow us to indulge in **back-end development**. And what Javascript did was allow us to interact with websites more fluidly. For example, we could try to submit a comment on a website and Javascript would let us know, as we type, that we did not make it long enough, even before we submit our information to the server.

Cascasding Style Sheets, on the other hand, allowed us to design more usable websites and websites that were pleasing to look at. The art of applying these styles and designing with them eventually became a cross between **UI development** and the aforementioned front-end development.

The next question to ask is, What is a web developer?


title: What is a web developer?
----
content:

We've discussed what web development is in essence, the programming of webpages: whether it's the more experience-centric front-end development or the data/logic-driven back-end development. You'd think that the simple answer to our question is that a web developer programs webpages. It's right, but not quite a full answer.

A web developer is an individual that takes on certain responsibilities when it comes to creating websites, not just the programming itself. Let's go through a day of an imaginary mid-level web developer named "Suzy".

**Suzy**

Suzy gets to work on Monday morning. First thing she does is check her email to see if there have been any critical bugs or problems that need to be addressed. If there is nothing, she's welcome to move onto her main project for the day. If there is a bug and no one has been assigned to fix it, she may self-assign it to herself and start working on it. And it looks like no one has taken care of it.

Suzy opens her favorite web editor, loads up her current project, a large website with a great deal of "business logic" behind it. It turns out that the payment system incorrectly applies tax to a purchase. Suzy starts looking through the payment system files, remembering the class system under which the payment system functions. After a couple of hours of tinkering, she finds out that the system never tries to match up a zipcode to a specific tax, instead, it defaults to another value. She makes the change but she's not done yet.

If she's working with many other developers, she may be using version control, a system that allows many developers to work together on the same code, non-destructively. She, first, writes a test program to ensure that if someone else submits a change, the test suite will warn them in case they broke this part of the system. Second, she submits her change to the version control system and assigns a co-worker to look over her code, in case she missed something.

Luckily, Suzy has a couple of hours before lunch so she decides to review the code of several co-workers. There is one brand new feature to the system that allows international customers to switch to any number of languages. Luckily, the change was not as complicated as she feared. Her co-worker implemented a new system for retrieving text from the database based on language. Suzy was glad that it was not the old days where she would have had to look over hundreds of pages in numerous languages to ensure everything was correct. All of the text was in the database and so she never had to deal with it.

After lunch, Suzy finally started working on her main project, adding a blog to their sales platform in order to allow the marketing team to make announcements through the site. It would have been a trivial feature; however, the marketing team requested the ability to schedule blog posts and to require manager approval for posting ahead of schedule. She inquired about the specifications to find out if a writer can prompt for manager approval or if the manager has to do it themselves.

As you can see, most of Suzy's day was not taken up with coding HTML or any of the other languages. In fact, most of her day was taken up with the "human" side of web development: getting specifications, fixing problems, getting feedback on code, reviewing code, and creating web tests. Of course, not every day is the same. Some days, Suzy may spend her time researching a new technology for the system, or she may spend her entire day shut off from the world coding away. Depending on her position, she may have additional duties.

So in the end, a web developer is a master of many of the processes that not only go into creating an end-product but up-keeping it.

Here are some possible duties and what they entail:

1. creating a program solution to a specified problem
2. implementing a design for a website
3. writing test programs for larger applications
4. communicating with other teams and/or clients
5. converting specifications into code
6. learning new languages/libraries in order to solve a problem
7. reviewing code or getting code reviewed
8. fixing bug
9. time and project management

title: From WWW to SPA
----
content:

I've touched a little on web development's history but never really got into the details. It's important to understand webdev history to understand why it is so complicated today. Today, the average web developer has to understand server technologies, distinguish between Ruby, PHP, and other languages, understand Javascript and possibly have to know at least one MV\* style framework such as AngularJS.

There's also the requirement of understanding animations, building grids, using a CSS pre-processor, build tools, and the list goes on. At first glance, everything seems way too complicated. And to some it is especially by the influx of semi-static websites. However, having worked in it, every layer of seeming complexity actually alleviates the amount of work we have to do.

Look at it this way, with each new tool you learn (up until some arbitrary point), that tool will save you a TON of time and allow you to create more complex projects.

So let's go back to the when `WWW` just came to be. At that time, HTML became THE thing and we started to write websites statically. The first type of styling that came to be was HTML based. So let's say you wanted a site that had a blue background and a white text (sounds like the 90's alright). This is what it would have looked like:

````html
<html>
	<head>
		<title>My website</title>
	</head>
	<body bgcolor="blue">
		<p color="white">My text!</p>
	</body>
</html>
````

If we wanted to have a "blog" type of a website, we had to create a new `.html` file for each "post", and create a custom file for listing out all of our posts. Every time we would update our blog with a new post, we'd have to create a new file and update our post listing. A lot of work.

Now imagine if we had to update our background color because we had a redesign? We would have to go through ALL of our posts, all of our secondary pages, and update each and every file manually. The problem is, now you found a "bug" where half of your posts have custom green text from another update. The new background looks terrible on it. So again, you have to go through every file, and check every tag, update, and upload to the server. On top of that, you have a new menu item, a "contact" page with your email. And again, this means that we have to go through every post, every page, and update.

As you can see, we're faced with two problems. One of them is that any change, whether stylistic or otherwise, will require us to change every single page. Is there an easier solution? Well, one appeared a few years after WWW came into existence, PHP.

PHP used to be a templating language, which means that you could "template" your websites. That means that we can create a single `header.php` file which has all of our header information, a single `footer.php` file for all our copyrights and miscellaneous information, and let's add a sidebar that we can update with our daily wisdoms. All of a sudden though, we end up with 3 secondary files and just as many post/page files. The positive is that those extra template files helped us save hours of time of updating headers.

````html
<?php include('header.php'); ?>
	<p color="white">My post</p>
	<?php include('sidebar.php'); ?>
<?php include('footer.php'); ?>

````

Wonderful, so that's about 4 years of advances right there. Mind you, there were alternatives to PHP, including ASP (microsoft server-side language). Now, we still have an issue, if we want to change the way paragraphs look like in all our pages, we're still stuck with the old method of changing each page. Luckily, an answer came in the form of CSS in 1996. CSS is a language for describing styles of different HTML tags and how they should render in a browser. So instead of using the former method, we could create a `style.css` file, including on the page and control the look and feel of all of our pages from one place:

````css
p {
	color: white;
}
````

At this point, Javascript was also introduced with its ability to modify the page after it arrives in the browser. It used to be completely normal and expected for sites to "refresh" or reload on every action taken. Whether a link was clicked, or form submitted, or whatever else. Javascript allowed web developers to create drop-downs and do other simple logic on the page itself. Especially useful was the advent of DOM, a convention that helped Javascript manipulate the page itself.

Let's try to hurry up now. Because of CSS, sites started using more unified styles, and also lead sites to use the old "table" tags for creating more complicated layouts. PHP and ASP Classic ushered in an era of dynamic and database-driven sites which gave rise to ecommerce, blogging, and similar sites. Instead of having a 1000 `.php` files with posts, we have a single database and an administration website that allows us to manipulate that content quickly.

As time went by, new technologies were introduced into the web, further accelerated by wider adoption rates. AJAX, the ability for Javascript to send a request to a server and then modify its current page based on the response, became the precursor of what we know today as SPA or Single Page Apps. Further improvements to CSS gave rise to Web Design, the art of creating a website, and replaced Javascript in creating animations. We've also progressed from poor solutions such as Java and Flash to the modern HTML5 standards which allow all browsers to behave the same and create interactive experiences without additional plugins. This includes games, video content, and much more.

Today, the web has become so complex that what used to be a one-person job (the "webmaster" of the old) has become a challenge for small teams or even large teams of developers, designers, architects, devOps, and system administrators. So let me tell you what an SPA entails now that we are this point where we use the most advanced CSS, HTML5 methods, complex server-side architectures, and robust Javascript front-ends.

A single page application is a fully-featured application that is able to exist without refreshing, is able to manipulate internal content and inform the server about the changes, receive updates from the server when changes happen, and provide some kind of interactive experience to the user. All in all, it basically means that you have an application that behaves almost as if it was a program installed on your system.

This happens in part because of a rise of MV\* javascript frameworks that emulate the behavior of server-side languages by using templating, accessing information, and allowing for complex logic to exist in the browser rather than in the server. Another part is the updates in CSS that allow for quick and smooth animations. The last part is robust server architecture that can clearly deliver information to the browser.

As a professional developer, you may be involved in only one part of this process or you maybe involved in many parts of the process.

title: Knowledge Required
----
content:

Some time ago, I gave a talk on "how to be a developer", it was my precursor to this book. One big part of my talk was the discussion of skills that developers *have* to have. This includes skills required by the job, and skills required to actually be *good* and *employable*.

One of the hardest concept to get across was that **development does not equal coding**. A web developer is more than just a "code monkey". If you're not familiar with the term, it's a metaphor to describe how developers used to be treated 20 or so years ago when a developer was just that, a code monkey. Someone incapable of doing anything other than translating managerial specs into code.

Today, a developer is much more. This is very visible among startups where developers often have to take over other roles, and become the senior staff at the company. On top of that, many startups are founded by developers or former developers that became enterpreneurs.

So what does a developer need to know? Depending on the job and level (junior, mid, senior), there are different requiriments but there are some common ones:

1. at least one server-side language
2. html/css
3. javascript

And that's just on the code side. As a developer you should be aware of:

1. project management
2. learning
3. communication
4. ability to asess program or spec
5. writing ability

A lot of these come hand-in-hand. Ability to assess a project will quickly translate into managing that project and communication with senior staff or other developers on how to proceed. Writing documentation and review code and discuss architecture will come next, especially when working among peers.

As far as learning, that's the greatest and worst part of being a coder. On the one hand, it's exciting to progress in your career, learn more, and help the development world evolve; however, on the other hand, it can be difficult to keep up with all the new stuff that comes about.

I've discussed the advances from WWW to SPA; however, there were many subtle steps between those strides and much more misteps.

But let's talk about our list of skills.

### Server side programming

While the development field is quickly becoming a field full of specialists, it's still important to go back and learn the general knowledge. Not so general as Computer Science but more general than Front-end UI Product Developer.

Despite the great advances in Javascript and keeping all of application logic in the browser, server-side programming is as important as ever. Perhaps not as much for templating but for other reasons.

So what does server-side programming entail? In short, anything to do with interacting with, well, a server. A server usually houses all of an applications data. The server-side of an application usually holds the more complex logic, and programming that's not safe to be exposed, like handling logins, security, and other elements.

SPAs today depend on the server-side application to store, retrieve, and update data as well as provide the front-end with necessary files that it needs. It has to be speedy, and able to handle a large number of users at once. The front-end, luckily, doesn't have such responsibilities.

There are several server-side languages that are very popular today and we'll go over those in the next section.

### HTML/CSS

The completely basic components of the web are HTML and CSS. Whether there is a server-side programming language involved, or Javascript dictating behavior in the browser, HTML and CSS is always present. It is possible to build without CSS but it is highly uncommon (read: 99% of the web uses CSS).

The knowledge of these two components is crucial; however, your expertise may range depending on your position. A Javascript developer will be intimately knowledgeable of HTML but may not know much more than basic CSS. A back-end (server-side) developer may know only the basics of either.

### Javascript

Javascript became crucial to web development only in the recent years and thus many developers still struggle with the concept of javascript programming. It's difficult to grasp at first, it's unlike server-side programming and it works in real-time, there's no "refresh" so to speak.

However, it is the bread and butter of a front-end developer and it is THE language to facilitate some kind of interaction for the user, right there on the page. Whether it's a popup, a chat window and conversation, or what drives a webGl game.

### Project Management

The art of PM is a sacred one, in that few understand it, and even fewer exercise it. It's most apparent when working as a freelance where project management often involves prodding a client for information and materials necessary to complete the project and subsequently adjusting deadlines.

And while you may work somewhere where a project manager does the initial sifting of assignments, you will always be in control of the few projects you have. What takes priority? How long will it take? How long will that hiccup push the deadline? These are all important questions. PM encompasses everything from time estimation to communication with others and synchronizing efforts.

### Learning

As I've said, Learning is both a plague and a gift. If you stop learning, you'll quickly become obsolete. Many jQuery developers are realizing that now. For the un-enlightened, jQuery is one of the most popular Javascript libraries on the internet. Chances are, you've used several websites with jQuery on it just today, and probably in the past two hours. The problem is that the web is evolving and the methodology that is so inheret to working with jQuery is no long acceptable.

If you don't learn the new advanced methodologies, you'll fall off. The positive is that there is always room for improvement, and new niches to escape into. Brand new frameworks tend to spring up in hundreds but only a few survive and those that do may have wide adoption but a small number of developers that are knowledgeable. Thus it's easy for people to become master from novices.

Just remember that half your job may depend on you learning a new framework that will ultimately save you from hundreds of hours of pain with an old framework.

### Communication

While developers are often seen as reclusive, it is not a good trait to have as a developer. In fact, most of the developers I've run across are not reclusive at all but very sociable and informative, especially about their job. Communication is important between a developer and a client, manager, or a project manager. Without it, it's difficult to let a supervisor know that you're burning out, or that you've stumbled on a problem with no apparent solution.

And yes, these things happen. As the saying goes:

>Even a greybeard will drop production DB.

Being able to respond and correctly communicate needs is crucial to your career.

Also, just think of all the open source projects out there, they're littered with heated discussions over the most minute changes and updates!

As a word of warning, as a developer, you will have to defend your work and your decisions in front of many people. Supervisors often have a mentality of "getting it done no matter the consequences" which can lead to technical debt, system slow downs, and possibly entire application crashes. Being able to hold your ground or at least have a supervisor sign off on personal responsibility will be an important aspect of your job.

###  Ability to assess program or spec

Something along the lines of what I've discussed. A good developer can look at a spec outline and see holes, problems, pitfalls right away. The ability to estimate a project and what will go into it is very important since it can be the difference between a successful smooth ride and development hell.

For instance, a vague spec is a recipe for disaster. From misunderstandings to runaway scope, it's known to be the worst thing for a developer, especially a freelancer. On the other hand, a 60-page detailed spec is a problem too since it can be too inflexible.

There's also the issue of "is it possible?" and then, "can it be done well?" and estimating the difference between the two.

### Writing Ability

Last but not least is writing ability. Again, this goes hand in hand with all the other topics. Writing ability is important for several reasons. One of them is communication with others, but the other has to do with documentation. Documentation and instructions on setting up a system and more.

Many developers indulge in blogging, writing tutorials, and doing post-mortems (system analysis after a major event). All of that takes writing. And so does, for instance, writing up specs and style guides for code.

title: Web Dev vs Other Dev
----
content:

I've talked a lot about the roles of web developers and how their entire field evolved. But there is another interesting topic to touch on. Why a web developer? Why not a game developer? Or an app developer? Or even a desktop developer?

Programming has a wide range of options to consider regarding specialization. Web development is currently booming but what of game development? Everyone loves video games, right?

The main difference is money and where it goes. With web development, the money goes to the companies that develop the strongest platforms and into startups that are "disruptive". Both of these depend on developers and are sometimes even headed by developers. They are the pure profit-driving machines in a new world of unlimited profit.

Web development startups are in a position where materials are cheap, companies are small, and the turned profit can be explosively high. Existing companies see this as well, and adopt this. Programming can be difficult to learn and the craft requires skilled professionals that know what they're doing. The amount of money poured into these developers usually ends up in a high profit.

The problem starts when other industries don't work this way. Game developers face the fact that it's not developers that control the market but game publishers. It's multi-million dollar industry that behaves closer to the movie industry rather than the web development industry. Developers are often not treated well, they can find themselves having a hard time finding work, and may not make as much money.

It's still rewarding work and many choose this avenue. I never advise anyone to take a job just for the job market, that's nonsensical. On top of that, the Indie industry is starting to help overturn this "employers' market".

But a little about game development. Game development is interesting in that it deals with much different stuff than web development (other than web game development). The language selection is a little different (C++, C#, Objective-C, Java, Python, etc. vs PHP, Ruby, Python, C#..wait a second!), and the paradigms are shifted. Architecture is much more important and unfortunately, there is not equivalent in game development to the good old simple times of "static websites".

There's also the necessity of learning 3D modeling or at least concepts, linear algebra, and math.

So what else is there? App development? App development is slowly merging with web development but granted, there are less app developers than web developers and one might find that avenue lucrative and fun. It's a place full of innovation, especially with rapid cell phone advancements and the wealth of software access phone makers create. Both Android and iOS give app developers a great deal of new APIs (think of an API as a way to access a piece of hardware or software outside of your app). It's a booming market.

As far as desktop application development, I would say that outside of enterprise-level work, it's a limited field of work, especially now that everything is being offloaded onto the web. However, if you like the enterprise, this is a great option!


title: Introduction to Learning
----
content:

Maybe I'm jumping the gun here but one of the best ways to get into web development is by diving right into it. There are several ways to do that. The way I, personally, learned web development was very haggard. I started with HTML, then I went a little into CSS, finally I dove into PHP. At that point, I relearned HTML/CSS from scratch and took my sweet time learning Javascript later on.

There are, also, other ways such as going the traditional Computer Science way, learning C and C++ along the way until finally reaching the web.

The cool thing about web development is that YOU choose how you get there, no one else. It does not have degree requirements, or certification requirements. You're pretty much in a place where you have to learn how to do it and how to do it well.

So let's get started!

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



title: First Language
----
content:

I realize I'm going at break-neck pace here but let's dive into the first programming language and what to learn. Given that the basics are done (HTML/CSS), this is the next logical step. Many don't take it and prefer to stay on the front-end but I believe that any successful developer should know the basics of at least one server-side programming language or at least Javascript to work on the front-end.

The beauty of programming is that once you learn one language, it's easy to pick up more. It's not like actual linguistics. You're still writing English just in a different manner. That's the key. Instead of using the word `var` to specify a variable (in Javascript), you may have to use `$` prefix (in PHP). But an array is an array (a list of other variables), and a string is always a string (string is a collection of characters, so you could say it's any lenght of a "text"). Basics are the same.

This is why Computer Science degrees start with the C programming language. It's where they teach about Strings, and Integers. Since many languages of today derive from it and most of the world runs on C++ (which, at the basic level, will look similar), it's easier to jump from it into whatever field you choose to. It's definitely much more useful to learn C and C++ if you're going into a field outside of web development.

However, the nuances of various languages can provide stark differences in implementation and thus in learning it.

I wanted to give a rundown of the most popular started languages of today, their pros and cons, and how they in terms of difficulty learning it. On top of that, it's a pretty good idea to know how the job market is for each. It's all up to you.

Luckily, whatever decision you make isn't life changing, you'll eventually get to a point where you will tackle the task of learning a secondary language. Not only that but overall, each language I'll present you will prepare you well for the world out there, no matter which choice you make. Try not to make the option paralyze you! Just pick one and go with it!

**Note:** The average salaries are pulled straight from Indeed.com and may not be representative of real-world salaries in your own area.

## PHP

PHP is how I got started out and I would say that I very much enjoy the language. It's a wonderful starter language but let's rip into it before I tell you the details.

### Syntax

PHP syntax is superbly simple. The cool thing with PHP is that you can mix it with HTML like so:

````
<?php
    $title = "My page title";
?>
<html>
    <head>
        <title><?php echo $title; ?></title>
    </head>
</html>
````

The `<?php ?>` tags denote the use of PHP. And while it's awesome that you *can* use it along with HTML, most modern applications use it in an Object Oriented way with a dedicated templating engine. Sounds complicated? It's not really that bad. A more complicated example can show you how advanced PHP looks like:

````
<?php
namespace Illuminate\Container;

use Closure;
use ArrayAccess;

class Container implements ArrayAccess {
    protected $resolved = array();
    protected $bindings = array();

    public function build($concrete, $parameters = array())
    {
        if ($concrete instanceof Closure)
        {
            return $concrete($this, $parameters);
        }

        $reflector = new ReflectionClass($concrete);
        $instances = $this->getDependencies($parameters);

        return $reflector->newInstanceArgs($instances);
    }
}
````

Taken and simplified from [Laravel's container class file](https://github.com/laravel/framework/blob/4.2/src/Illuminate/Container/Container.php). No, it doesn't work but it showcases some ideas behind PHP OOP.

### Learning it

Learning PHP is very simple and because of its ability to run alongside HTML (albeit on a server and with a `.php` extension to the file) learning creates immediate feedback. Simply learn something new, add it to your file and refresh the page. This makes programming a breeze at the start.

On top of that, several major frameworks such as Symfony and Laravel make it a contender for large applications and small apps alike. In fact, it supports traditional Object Oriented programming and has a full class system with all kinds of cool stuff.

It takes a week to from knowing nothing to building your own first rudimentary blog.

### Frameworks and tools

PHP has grown significantly more modern in the past several years. Some of the main frameworks of today include Laravel and Symfony, all of which can run in enterprise environments as well as work for startups.

PHP also has its own package manager (a script that allows for better importing of libraries) called Composer.

As a sidenote, Wordpress, the largest blogging platform and CMS, runs on PHP and PHP is a requirement to work on the templates.

### Jobs

I've already mentioned a few tools so that should give you an idea of what people look for in a PHP developer, knowledge of some of these tools. As far as work goes, let me reiterate something from the last section: the largest CMS in the world runs on PHP.

There are tons of Wordpress developer jobs. What's interesting, however, is that many of those don't require in-depth PHP knowledge and many front-end developers (developers that focus on HTML/CSS and the site itself rather than the underlying logic and programming) choose Wordpress and PHP as their main tools.

Average Salary: $92,000/year

## Ruby

Ruby vs PHP is a much discussed topic. PHP developers generally don't like Ruby and Ruby syntax, and it goes the other way as well. One of the most distinguishing differences is that Ruby is a "spec language", meaning that someone somewhere wrote down how everything in Ruby should work. This meant that there is a Ruby interpretted written in Java, in .Net, and in some other languages as well, alongside the official release. PHP doesn't have a spec, there's just a release, this is slowly changing but we're not there yet.

### Syntax
Ruby doesn't work like PHP, it can't just be mixed with HTML. Ruby has its own "server" which runs all of Ruby code. Instead of simply opening a `.rb` page using a server, a Ruby server has to point to a file and opens only that file (and any imported/included files, which is how the entire thing works basically).

The problem with Ruby is that there's no easy way to iteratively get better. Here's an example of a "Hello World":

````
puts "Hello World";
````

Once you get the basics, it's time to get into Sinatra or Rails (Ruby frameworks) and you're going straight into Object Oriented Programming.

````
require 'fileutils'
require 'active_support/core_ext/hash/keys'
require 'rails/engine'

module Rails
    class Application < Engine
        autoload :Bootstrap, 'rails/application/bootstrap'

        class << self
            def inherited(base)
                super
                Rails.app_class = base
            end
        end
    end
end
````

Taken from the [Rails repository](https://github.com/rails/rails/blob/master/railties/lib/rails/application.rb) and simplified to show syntax.

### Learning It

Ruby has become the favorite language of many coding courses and thus there is a wealth of tutorials on the subject, way more than for PHP. However, learning Ruby has necessarily become implicated with learning Rails or another framework. While it is possible to code without Object Oriented Programming, it's not possible when coding for the web.

Once you get the OOP down and start working straight with Ruby, you'll find yourself surrounded by a great community that will help you along and answer all of your questions.

So as far as the learning curve goes, I'd say it starts out steep but then it gets very easy.

### Frameworks and Tools

There are a number of tools that Bundler which is a package manager, there is RVM/RBEnv which allows Ruby developers to run several different Ruby versions at once, depending on which project they're on.

The two big names in Ruby is Rails (which short Ruby into popularity) and Sinatra (another framework). There's also Rake which allows Ruby developers to run various tasks from the command line (like making database changes, and running test suites).

### Jobs

Ruby has been one of the main languages that startups have focused on for developing apps. In fact, Twitter was originally built on Ruby until it was switched over to Scala.

It is, as PHP, in the top languages in terms of employability; however, note that Ruby work seems mostly used at startups and mid-sized companies.

Average salary: $105,000/year

## C\# and ASP.NET

C\# is an interesting language choice in that, unlike the others, it's not known for being Open Source or cross platform. C\# was created by Microsoft for a variety of purposes. One of them were desktop applications, the other one is web development via their ASP.NET framework. It's important to see the language necessarily as part of the framework as well. Note that ASP.NET has three portions: the MVC part (object oriented => complicated), Web Pages (simple), and Web Forms (oldest style).

### Syntax

C\# is very reminiscent of C++ and Java in that it's an Object Oriented langauge by default and the way it works is similar to the two in terms of syntax. Strangely enough, C\# allow learning it the same way you learn PHP only because of some recent strides by Microsoft to make things much easier.

````
@{
    var title = "My page title";
}

<html>
    <head>
        <title>@title</title>
    </head>
</html>
````

ASP.NET does not operate like PHP despite how it looks. Most of the regular code must be created through an object oriented manner like so:

````
using System;
using System.IO;
using System.Text;

namespace Microsoft.AspNet.Mvc.Razor
{
    public class RazorTextWriter : TextWriter, IBufferedTextWriter
    {
        public RazorTextWriter(TextWriter unbufferedWriter, Encoding encoding)
        {
            UnbufferedWriter = unbufferedWriter;
            BufferedWriter = new StringCollectionTextWriter(encoding);
            TargetWriter = BufferedWriter;
        }

        public override Encoding Encoding
        {
            get { return BufferedWriter.Encoding; }
        }
    }
}
````

Taken and simplified from [Asp.Net MVC](https://github.com/aspnet/Mvc/blob/dev/src/Microsoft.AspNet.Mvc.Razor/RazorTextWriter.cs).

### Learning It

C# and ASP.NET can be interesting in terms of learning. On the one hand, you can modify websites within just a few minutes, on the other, the Object Oriented programming can feel daunting. On top of that, you're required to use a Windows machine and a specific toolset.

However, given enough time, and learning OOP, you'll find yourself working with a robust framework.

There's also the alternative of using a non OOP framework meant for beginners and in that case, it really is just like PHP.

### Frameworks and tools

So I mentioned an MS-only toolset. And it's true. You'll be using Visual Studio, an IDE that works with C# and ASP.NET, to make websites. One of the top frameworks for C# web development is ASP.NET MVC, the object oriented version of ASP.NET, and there's also ASP.NET WebPages, the non-OOP version of ASP.NET which allows users to writer simpler applications and websites.

### Jobs

ASP.NET is notorious for being an enterprise-level framework. In short, big companies, often non-tech oriented, use it. What's great though is that most of these companies invested into a ASP.NET architecture for the long haul, meaning that there are lots of big companies looking for .NET developers.

Another interesting point is that startups are not as interested in C# as other languages. The only tech company name you can associate with .NET (other than Microsoft) is StackOverflow. This means that the average pay for a .NET developer is significantly higher than any other language out there.

As a sidenote, C# and C# conventions easily translate into App development, Game development, and other types of development unlike Ruby or PHP which are stuck being server-side.

Average salary: $92,000/year

## Javascript

This is an interesting addition to the list. For one, it's a front-end programming language, the language of the browser; however, recently, a new type of technology called NodeJS allow for Javascript to run on the server and is currently one of the hottest server-side languages. The server-side implementation is very young however, and the front-end usage of the language is starkly different (not in syntax but in programming paradigm).

### Syntax
Depending on which side you go to, typical Javascript will look different. Let's first consider the typical front-end usage:

````
<html>
    <head>
    </head>
    <body>
        <p>My old text</p>
        <script>
            var el = document.QuerySelectorAll('p')[0];
            el.innerHtml = 'Hello world';
        </script>
    </body>
</html>
````

Javascript on the front-end can be very confusing but once you get the hang of it, it makes sense, you're just augmenting what the user sees. In this case, the JS will change out the inner text of the paragraph to be "hello world". Here's JS on the back end:

````
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
});
````

A little different. NodeJS-land is as if a completely new Javascript but luckily, the two implementation (server-side, browser) have started to share many libraries.

On the front-end, JS works in an "evented" manner. Basically, do something, and Javascript response. Javascript tells the browser, "If a user clicks on this button, run this code".

### Learning It

Learning Javascript is two-fold as everything else about it. On the browser, learning it can be difficult to understand because of its "evented" nature. And it definitely is not a good choice for a first programming language as most server-side languages work completely differently. However, Javascript is hot and there are tons of resources available.

As far as difficulty on the Node side, most call it incomprehensible at first. Especially since so many configurations (such as server) have to be done manually. There are some frameworks that make this process easier but the entire "async" nature of Node (ability to send out several requests at the same time, parallel to each other) can be difficult to understand even by people that are already familiar with another language.

### Frameworks and Tools

Javascript is known for its wealth of tools and helpful libraries. One of the most important today is Bower which is a package manager for javascript frameworks. There is also Gulp and Grunt which are Node projects that have become a streamlined part of a front-end developers job.

Outside of that, a couple of interesting frameworks to mention are: AngularJS, the jQuery library, and Express, a Node library. Angular is a front-end MVC framework, trying to bring what's on the back-end into the front-end. jQuery is a library that makes front-end interactions a breeze and Express makes back-end Node setup much simpler than doing everything manually.

### Jobs

Javascript is the hottest language on the market currently. Companies are readily switching to Node, both large and small, and every company that has any sizeable presence online is perfecting its user interface and user experience with the help Javascript. There's no better language today to learn in order to get a job quickly.

Average Salary: $94,000/year

### Python

Lastly, there is Python. Python has been around for a while and it has MANY different applications. From command line tools, to game programming, to websites and more, it's more versatile than any of the listed languages. On top of that, it's probably the most cross-platform language out there.

### Syntax

Python


### Learning It

Python is among the few languages that are used to teach programming from the get-go, and it's one of the most useful ones in that manner. Unlike C++ and C, Python doesn't have to be "class based" or object oriented, python is just..python. It can be complicated, and it can be simple. Getting started with Python is a breeze.

### Frameworks and Tools
For web development, the default standard for Python is Django, an MVC framework that drives most of the major webdev python projects.

### Jobs
The job market for Python is varied. It's definitely not a "hot" language but it's neither a dead one. Python is used pretty much everywhere but only a few shops choose Python as the way to go.

Average salary: $102,000/year

## So which one?

It's a difficult question and a number of developers do argue about it; however, in the end it's up to you and your comforts. Look over the syntax, checkout a few tutorials and see what makes sense for your own personal method of learning.

title: Where to get started
----
content:

The first step to learning something is to learn about the different avenues of actually starting. Web development is very much the same and as sad as it is, most new web developers have no idea how to approach this, and what to recommend others.

Every developer has their story and some developers sternly believe that theirs is the correct path. Others, like me, realize that there are many ways to accomplish a goal. In this case, web development has countless avenues that lead to working as a full-pledged developer.

I've introduced, so far, HTML/CSS and the various first languages. The order of the topics to learn matters, and so does advancing to the next level. So let's talk about that.

First, let us consider the proper sequence of learning:

1. HTML - so you can build your first website
2. CSS - so you can style your first website. This gives you an ability to build full (albeit static) websites
3. First server-side language - you can read through the list again to check it out.
4. Javascript - to get a feel for the front-end and work from there.
5. Server-side framework/cms - This will give you the ability to start doing some real work
6. Go from there. Whether it's mastering another language, or a front-end framework, or any number of tools, it's up to you and where you choose to go.

It sounds straightforward and that's because it is, at least in the beginning. I found that most developers agree that this is the best avenue to go, whether you have a computer science degree or not.

## College vs Online Courses

First and foremost, I'm not a big fan of college; however, there are many times that I reference college material and even take online college courses to fill the gaps in my knowledge. As well, I hear developers argue back and forth on this topic tirelessly.

On the one hand, college education can provide a wide breadth of knowledge, and many opportunities to test your skills and have your skills critiqued. On the other, online courses can throw you right into the field and have you gaining real hands-on experience right away.

### College

After conducting a few personal surveys, I got the following answer as to why a web developer should go to college first:

1. College provides people with great connections. Classmates can quickly become CEOs, teachers can recommend former students, and other classmates can become co-workers.
2. You will acquire a wide-breadth of knowledge outside of the web development field. Such as knowledge of design patterns, algorithms, and other information.
3. A degree can help you jumpstart your career.
4. Most Facebook + Google engineers have a CS degree.

And some of these I agree with, particularly point \#2. To that point, there are several topics that Online Courses truly don't focus on whatsoever:

1. Algorithms - a better way to say this is "common algorithms" which is basically to say, programming procedures that are either efficient or inefficient. They're patterns of code that follow a certain logic. For instance, there is a "Quicksort" algorithm which specifies an efficient way to programmatically sort a list of items. The code may differ among programmers that implement it but the logic is the same.
2. Design patterns - a design pattern is a way of structuring an application or solving an application-specific problem. Unlike algorithms, we're not manipulating anything, mainly "organizing" a way an application works. For instance, there is a design pattern called Dependency Injection which states that an application should not create its dependencies, but rather a manager should have a list of dependencies and provide them to various application parts.
3. Low-level to high-level overview - Web development is very close to the Apex of programming. A single line of code accomplishes that which lower-level languages use entire libraries for. That's a good thing and a bad thing. It provides this create power but it also limits what you *can* do. Seeing programming all the way from Assembly through C, C++, Java, and finally to web development can be enlightening.
4. Various languages - Learning various languages helps developers understand how the language they're using is unique and how to take advantage of it. It also helps with looking at problems from different angles since different languages operate on slightly different programming paradigms.

Most self-taught developers I've met never bothered to look at any of these topics and thus missed out on becoming better developers, or at least "good" developers. Especially in enterprise environments, these topics are important to learn and cannot be ignored.

College forces the topics on you and even though they may be forgotten, there's still an inherent familiarity with them.

There are several problems with attending college, however, and they cannot be brushed off:

1. It takes too long. 4 years is a long time. No longer than any other degree but a long time nonetheless
2. It's expensive. Especially in the US. A CS degree may cost you upward of 8K a semester just in classes and books.
3. Most jobs won't give you a position straight out of college. So you either have to struggle to find one miraculous employer that will hire you after college or find time to work along with your studies.
4. What you learn may no necessarily apply to what you do and what you may learn may not necessarily be up to date.

So, as always, there's a decision to be made. I can tell you from personal experience that most employers value college as "two years worth of work experience" once you have at least one year of actual work experience. At least there's that.

### Self-taught

Being self-taught has become a symbol of a web developer because even when you make your way out of college, additional topics to learn will be your own responsibility, not some course, certification, or additional degrees. However, we're not talking about the distant future, we're talking about today.

So here is a list of skills that self-taught developers like to highlight in their learning experiences:

1. The learn what they need as they need it, and use it - This can be a great advantage since any knowledge you acquired can be directly used right away. This includes those pesky "widge-breadth" knowledge factors which can be learned ONLY when they're necessary.
2. Work and client experience can quickly shape your career. Those few extra years of working with clients or at agencies can quickly convert to a rising career. There's a great deal of hands-on experience and learning from mentors. On top of that, you quickly gain contacts with people that have a need for developers.
3. The learning community creates great connections. There are entire communities of future web developers that get help from seasoned programmers and other people on their path. The web development community is a great one to join
4. The entire process is cheap with little commitment and great pay-offs for the work.
5. Self-reliance, learning through review, problem solving, and situational problem solving.

For this list, I'd like to focus on \#1 which is the most important one. There are typical concerns with college-learned developers and one of them is thinking in terms of Academia rather than problem solving. This can lead to overuse of the aforementioned algorithms and design patterns.

College graduates are often seen to over-engineer and over-complicate their work or get frustrated quickly with a problem that doesn't fit regular paremeters. This leads to companies avoiding college graduates until they're vetted through some other company for at least a year.

In essence, it's the difference between having a developer that can "duct tape" a problem and know what kind of issues that can cause and a developer that either cannot find a solution or can find a solution which would take several times the amount of time to implement and would cause issues.

But as always, there are some downsides to being a self-taught developer:

1. Older companies that are used to the "college-degree-only" hiring process will pass you over
2. You will always have to take the initiative to learn more and learn more deeply about computer science on your own. That can be difficult and discouraging.
3. Creating connections is on you and on you to find the right environment for it.

As before, I would like to warn you that some employers require degrees but most tech companies do not. And some that do will let you slide by if you have about 2 years worth of working experience.

## The Choice is yours

As always, the choice is yours. There is no "better way" despite what people may tell you. What I do recommend is reading through the rest of this book and learning about what it takes to be a web developer and what it takes to be a good web developer. At least that will prepare you better for your decision.

Also, I recommend getting involved in the web development community. Whether it's on Reddit, Dzone, HackerNews, or other websites, it's good to be there, to ask questions, to read people's concerns, and to read through past discussions on this very topic. People do get heated but if you look past their ego, you'll see a grain of wisdom that may apply to specifically you.

Outside of that, there are a few general recommendations and words of wisdom to share with you:

1. If you're in college, it's a good idea to take on freelance or community project for some experience. These may not pay much or they may pay so much you'll drop out
2. Start learning ASAP, don't wait for the right moment. Even if you're in the first year of college, get an HTML or follow some online tutorials, just to get a feel for it.
3. It doesn't matter what age you are. There are 40 and 50 year olds learning HTML/CSS. At one of my talks, there was a lady that was at least 65 or 70 asking the most hardcore questions and sporting her Surface. There were also teenagers that probably haven't even graduated from High School yet.
4. If you're in it partially for the money, be practical. By that, I mean, do your calculations and figure out what works best for you and what will drive most of the profit. If you want to have a startup, you're the rule-maker, not another company and investors don't care about your degrees. They care about your knowledge.
5. Think about your learning style, keep that in mind as you choose a route.
6. And no one said you can't combine the two.



title: Finding a Good Course
----
content:

Enough of choices, let's dive into the specifics. Where do you find a good source? There are plenty of sites and at the risk of possibly endorsing a site that may not be as good anymore or in the future, let me give you a nice neat list of some online courses:

### Team TreeHouse

Team Treehouse is among the leaders in getting people from not knowing any programming to developing full-scale apps. That's pretty much what they do. I believe their entire commercials focus on "I wanted to make websites, didn't know how to, so I went with Team Treehouse". I've personally used it for a couple of lessons and my friends had great success with it as well.

The curriculum is structured to throw you right in and get stuff done as quickly as possible without wasting time. I believe it's a great way to start web development learning and after several months transition into full self-learning

**Positive**

* Team Treehouse gets frequently updated that means that their lesson list expands and their content is always up to date with the latest practices
* The curriculum has two avenues. One of them lets you explore concepts further, the other one lets you focus on developing projects. This is great since it allows you to study theory and practice
* The courses teach not just web development but web design and business related to working at the web.

**Negative**

* There is a limited number of courses. Some of the other options have a much wider selection of courses.

## TutsPlus Premium

TutsPlus is a blog with a variety of tutorials on a variety of topics. They offer a premium feature which offers various courses as well. I haven't used their premium offering before; however, I have checked out some of their free courses and they operate on a similar basis as Team Treehouse, albeit less driven toward a single goal. They have a variety of topics that focuses on specific technologies.

I think that they are a great SECOND step to learning rather than first since there is no clear-cut path in their curriculum for beginners. But once you get the hang of the basics, it's definitely a good place to visit.

**Positive**

* TutsPlus has a wealth of articles and tutorials on various specific technologies. If there is a specific framework or tool you'd like to use, TutsPlus probably has a tutorial for it.
* Courses cover a range of various topics.

**Negative**

* Courses feel incomplete sometimes. They publish often, they publish a lot but often, they're incomplete
* There is no clear path to learn everything. You'll have to do your own research on what to learn.

## Udemy

Udemy is a little bit of a different beast as far as learning. Udemy is a marketplace of courses by different publishers rather than by a single one. You can pick and choose courses and, the best thing is, some courses are free.

This creates an interesting situation where you can find some of the top developers in the field, creating their own courses and publishing them. Or companies creating their courses as well.

**Positive**

* Thorough courses. Many courses have multiple parts and they go very deeply into their topics.
* No time limit. Once you buy a course, you own it.
* Review system which allows you to pick the correct course to pick.

**Negative**

* Per-course payment can be a little steep at first.
* The wealth of courses can be confusing at first.

## Lynda

Lynda is one of the older course providers out there and because of that it has a large wealth of courses both new and older. Among them are instructions by language and instructions by program. The advantage that Lynda has is that each language course has a beginner and intermediate course, meaning that whichever first language you'd like do to with, Lynda will have a course to supplement it.

**Positive**

* courses provide several different avenues of learning programming. Depending on the language and application
* there is a large variety of courses available under a single subscription (rivaling Udemy).
* courses are concept and project based just like TeamTreehouse

**Negative**

* with no rating system, it can be difficult to browse the catalog; however, it's become easier over time.
* some of the courses may feel dated and it can be a bummer learning from something not following modern techniques. But again, Lynda's been good at renewing their courses.

## Alternatives

Of course, paid courses aren't the only way to get in; however, I've found most of the options above to be more than satisfactory for personal learning. And at $20-$30/month it's no large expenditure. So if you'd like to take on something free first and make sure this is what you want to do, here are some of the options.

### CodeAcademy

CodeAcademy is a free course-learning platform that teaches one to code. It has several languages to learn as well: Python, Ruby, and PHP, even Javascript. So it's definitely a good place to look at. They even have a step-by-step making your first website.

Their Ruby course has been around for a while and has been met with great results. The jQuery one as well. I see people posting on /r/learnprogramming straight from CodeAcademy all the time.

### Coursera

Coursera is a special case since it is a hub for free College courses offered by accredited colleges. They do not provide credit but some do provide "certificates of completion". This is a double-edged sword. You get the advantage of college-style courses; however, you get the speed of college-style courses so if you're not comfortable with that style of learning, coursera may not be for you.

On top of that, their courses vary, expire, and range in subject coverage. There is no "beginner web development" course but there may be a course on algorithms and design patterns worth checking out.

## Which one?

I can only tell you my personal experience for what that's worth and where I would have correct myself:

1. I started learning HTML from a random "learn HTML" website that was full of mistakes and bad examples
2. Several years later I tried to relearn HTML and CSS by using Lynda. Problem was, I skipped the "learning" and "beginner" courses in order to find courses that supplied me with a step-by-step process for making websites without really understanding anything.
3. I picked up CSS by using a website that is full of misinformation and most developers avoid like plague. Go figure, right? I started blogging to keep notes of my progress. Luckily, the CSS section wasn't too terrible at the time.
4. Finally, I dropped it all and started learning PHP from a series of tutorials made by a member of Zend (the main sponsor of PHP and creator of the interpretter). This tutorial got me up to speed with most basics.
5. I continue learning HTML/CSS from bad tutorials until finally, I moved onto Wordpress.

You see my pattern? I started in all the wrong places and learned bad habits. Luckily, I was only too eager to drop them. So from that point on, I used Lynda to really get me up to speed with everything and it was great. That, combined with some online tutorials got me to the intermediate level. But that was at a time when most of these options were not available.

Over the past several years, I brushed up and improved my knowledge with a combination of all of the resources. If I was to do everything all over again, I'd probably choose the following avenue:

1. Use CodeAcademy to find out which language suits me most and if that type of learning works with me. Get as far with it as possible. Now, while CodeAcademy teaches coding, it doesn't teach the rest of web development.
2. Pick up TeamTreehouse for its focused learning objectives. It's relatively cheap and has all the courses to get me going in my career.
3. Subscribe to Lynda and focus on the technologies that interest me the most. Or, pick up those courses on Udemy. I like fixed costs so I'd probably go with Lynda for a while until I saw something very interesting on Udemy. TutsPlus premium is good for this step, too.
4. Scour Coursera for advanced courses to teach me the most basic parts of programming. But this is further down the road.

But the choice is up to you.

title: T-shaped skillset
----
content:

I have one last lesson to teach about learning web development. And that is the lesson fo the T-shaped skillset. It's a hard-learned lesson for beginners and it's still disputed among professionals.

Basically, the idea is this. On the one hand, there is a group of individuals who are "jack of all trades" which is often accompanied by the second of the saying, "master of none". Let's dissect this group first.

## Jack of all trades

First, let's identify what this means. It's a term encompassing a wide-range of developers that pride themselves on knowing A LOT. They can join a conversation on jQuery just as well as they can on Ansible (a DevOps tool). And when put to skill, they can identify problems in programs, possibly even fix them. But they are unable to solve the more difficult problems, and unable to build entire applications with their tools.

Now that we know what it is, let's tackle the developers that get this kind of an insult all the time: Full-stack developers.

Full-stack developers are developers that are just as comfortable working on the server-side code as the front-end code. They get a ton of flack because the "masters of one" believe that you cannot truly understand and work in both environments unless you succumb to the "jack of all trades" syndrome.

The problem is that Full-stack developers are necessary and have their own place in the hierarchy of developers. These developers are able to:

1. work as sole developers in startups - this is more often than not the case for non-tech startups or startups that are not focused fully on the tech side of things.
2. work as fluid "fillers" in larger corporate structures, taking on projects that the "masters of one" cannot handle.
3. handle projects that employ the full stack. Enough said.

To summarize, there ARE jack of all trades and have entire stereotypes based around them. But this simple idea also includes developers that do have a crucial place in the web development community. However, they are often not the decision makers and leaders in one particular language/technology.

## Master of One

Master of One is a fallacy and just as ignorant as "jack of all trades". The idea behind a Master of One is that a developer has a sole focus, a niche they are fully aware of and fully knowledgeable of. They pick a topic and they know it through and through and thus are able to make community-wide weighted opinions and can spearhead a project, masterfully balancing it and creating art.

It's a fallacy of some artisan that has been carving the same piece of wood his/her entire life. So let's put it this in non-mythological perspective. The idea behind master of one is that someone has tunnel vision, unable to look anywhere else. However, unlike "jack of all trades", there is sort of a reverie associated with this term.

A real world example of a Master of One is closer to a Senior Developer or even better, a Senior XX Language Developer (where XX language is any given language: PHP, Ruby, etc.). Their skillset is closest to knowing a language very well and able to apply it very well, too. On top of that, they know the limits of the language and how to push them. This makes them perfect for projects that require their expertise put to test.

They're important on the community side. So we need these types of people because:

1. Important and performant projects require utmost expertise at a particular skill (such as using a programming language).
2. The XX language community needs someone who understand the topic very well in order to make informed decisions and weighty opinions.

The problem with these people is that they do not understand anything outside of their given "tunnel". A back-end developer who is a Master of One and a front-end developer who is a Master of One will simply argue to death because their paradigms are so different. Each one will have their "right way of doing things" but they are incompatible. They can't communicate and they can't create work together.

It's like an English person and a Russian person trying to argue over how grammar should work. Both are right but the solution is always wrong.

## The "T" Shape

The "T" shape comes from the idea of merging the two concepts. Having knoweldge of a wide variety of topics but specializing in one. So a back-end developer that knows HTML/CSS and also knows something about server so that they can communicate and work with a variety of people.

This helps projects tremendously since you can point people to "Lead" certain parts of the project based on paradigm (back-end, front-end) and then have the Leads make decisions together since both parties can participate in the conversation and are knowledgeable enough in their own field to argue their side while able to concede the other side's needs as well.

It's like having a Russian person take English lessons and vice versa. They may not be proficient enough in their second language to write legal documents or novels but at least will understand grammar basics to agree to some solution. It's a stupid metaphor but you get the idea.

So what does a "T" shaped person do?

* exhibits masterful knoweldge of a single skill
* communicates well with others all along the stack
* can see some potential implications up and down the stack based on their decisions and programming

This means that you can bring-in the "T" shaped person and have them work alongside other developers of different paradigms and ahve everyone get along well and make decisions together.

## Then there is the "^" shape

A monicer that I came up with, the arrow shape is a person who is neither horizontal (ie. jack of all trades) or vertical (ie. master of one) nor a T-shape person (horizontal + vertical) but rather a gradient or curve of skillsets.

Let's come back to our English and Russian individuals. They can barely understand each other with some basic skills in each other's languages. Now, what if we did some foreign exchange students and used them for the example. They're still primarily good at their native language but they are very well versed in the others' as well. Good enough to write high school essays and take the SATs.

In this scenario, they may not be aware of the entire stack or what goes into the process but they are able to do a few things our T-shape person can't:

* actively participate in the development that's lead by a person of an adjoining skill. Instead of a front-end developer discussing with the back-end developer how the API should look, the front-end developer can code the API while the back-end developer can supply the more difficult logic and code
* switch modes. Even if a skill is not your main strength, you should be able to float around and switch modes, having another more skilled person help you out
* argue and communicate points about technology outside of their main domain

An arrow shape skillset makes a developer superbly invaluable since they are able to comfortably move from place to place and work better with others.

I've met people like this and it's amazing to work with them because you instantly feel in awe of the person. They are able to leave a difficult back-end project and solve front-end problems. They are able to discuss and argue technology decisions made outside of their immediate domain as if it was their own livelihood. And best of all, when they approach a problem, they can think in terms of "where do I need to solve this problem?" on top of the other usual questions.

Imagine trying to figure out how to speed up the system. An arrow person would be able to consider the following:

1. Do we need better hardware or use more hardware? If so, time to upgrade hosting account.
2. Is there some way to speed up the existing hardware or use software that can deliver/compute data faster? This includes caching, for instance, and different database systems.
3. Is the back-end system just too slow? Does it need performanze optimization? Perhaps it makes too many requests to external services or too many SQL calls to get data, or there is a stray foreach loop.
4. Can we pull data asynchronously on the front-end? Can we split up our requests? If so, perhaps some information can be marked as non-priority and have our Javascript request it separately and thus improve *perceived* speed.

You can even tell where that arrow is headed and most likely, the arrow person will implement a little of all of those. Use better caching (storing data output from a program to reuse it), figure out bottlenecks on the back-end and combine SQL statements, and request the slower/additional data *after* the initial data is sent.

## Yet most developers

If most developers were to explain their skillset it would most likely resemble soft goo squished between their hands, you never know where the excess of their skill will be, where there will be a gap and where they will be simply "mediocre". It's great to find people, however, who can learn quickly and who can form somewhat of that arrow shape in a workplace based on the needs of the job. And that's honestly how skills develop. At a workplace, when they're needed, and this creates that uneven landscape.

title: Your First Job
---
content:

At some point, you will have to make the decision to go job hunting. Whether it's when you're getting out of college or after you've completed several courses and built a few sites. The decision is yours and it's hard to find the *right* time to start looking and considering work.

There are some things to consider first and some things to get right in order to find a good first fit and launch your career:

1. No one takes on a full-time employee without prior experience.
2. You maybe working your first job for only a year.
3. This is not about finding an "internship" but rather finding an enriching workplace.
4. The pay will still be higher than most other entry-level jobs.

Let's discuss the paradox of "no job without experience first". Initially, it seems like a scam. I mean, how can you get work experience if no one will hire without prior work experience? The trick is simple: you create work experience in a non-full-time environment. This hiring process makes complete sense because initial work experience gets a developer vetted to work alongside others, to pick up some initial communication skills in a company, and prove their ability to work in such an environment. Doing so gives companies an ability to cut down on the risk of hiring a junior developer that is unable to fulfill their duties and can become an obstruction to their regular workflow.

So how do you get around it? Several ways. I always recommend developer students and would-be programmers to focus on Freelance work. Freelancing teaches developers some amazing skills including aforementioned project management, communications with clients, and managing stray problems that don't have cookie cutter solutions. Telling a prospective employer that you've been freelancing for a year is much better than telling them you've been working on personal projects, trust me. There is much more to freelancing than that and you may be able to find a contracting job with an agency but we'll discuss that in a future chapter.

However, despite all of the work you'll put in to find your first job, you may be there for up to a year, probably not longer. The reason for that is that once you "get in", you'll start to rapidly climb, especially if you really dedicate yourself to expanding your skills. And by that, I don't mean spending 40+hours a week trying to study up on everything, by that I mean "sponging in" everything you can from your first job and then move on and get rid of your "junior" title ASAP. Once you feel like you've outgrown your job, move on. Tech jobs aren't the same as jobs in other fields, there is a certain expectation to "move on" in the first several years until settling in a senior-enough position where you dictate your work better.

And that takes me to my point about internships. First of all, tech internships? Unless you're getting paid a regular normal "junior developer" wage and actually work with code, don't consider it. If it says "intern" in the job title, I'd be wary; however, there are some companies that use that monicker to identify junior developers so read through a job description. It's rare though.

Anyways, don't take on free work, especially not long term. And don't take on free work where you don't get any experience. Even a junior developer position should help you get better at what you do. If, as a Jr. Developer you spend all day getting coffee for other developers, it's not a worth job taking. Take a job where you feel like, "Hey, within a year, I'll be a way better developer!".

And finally, consider this. The tech industry is booming. I already supplied some of the metrics on average pay. Jr. Position can pay *very* well, better than senior positions in other fields. So even if you feel like you can do *better*, keep in mind that you're getting paid well and soon, you'll be paid even better.

## So what does an ideal job look like and what should I be doing?

For me personally, I stumbled onto a great deal with my first few jobs. Outside of some freelance work, I worked with a marketing agency right before hitting it big as a Lead Developer for another marketing agency. My job in both cases consistent mostly of creating Wordpress websites based on a PSD (a photoshop file) design that a designer supplied. There was nothing "junior" about it, I was thrown into hard work right away and it was awesome. So let me relay to you some things I've learned:

1. A job should be just a little out of your comfort zone. Do you know Wordpress "somewhat okay"? Great, jump into a Wordpress gig and learn along the way.
2. A job should teach. That means that working should make you better, not keep you at the same level as you were when you started it.
3. A job should pay well enough. My first job gave me a decent living wage. Actually, more than that.
4. A job shouldn't over-extend you. This means that if you took on that Wordpress gig, they should not give you 5 sites to make a week. I've seen places like that and they cause people to burn out quickly.

And as to what you should be doing:

1. Handling code every day. This doesn't mean all of that code will be launched into production but it should be handled.
2. Deal with debugging and refactoring.
3. Solving problems. Even if they're small.
4. Learning every day.
5. If you have a senior developer overseeing you, mentorship time should be there as well. A time to talk to the senior developer about how to get *better*.
6. Attending meetings where you may not have input but can watch and learn.

Good luck!


title: Avenues to Employment
---
content:

There are many types of jobs and many different ways to get them. As you get better and progress through your career, more avenues on both sides will open up. Before I get into the *how*, let's talk about what kind of jobs there are:

1. Salary
2. Contract
3. Freelance

The difference between the three is like night and day and it's important to know about it.

To summarize, a salary job is your regular "I'm getting paid XXk/year for my 40 hours a week" job. This means you have a stable job you attend at regular hours (usually 8-5 with an hour lunch break), regular time off on Holidays, and most likely paid time off or "sick time" depending on where you work. This is usually what people strive for.

Contract work is a little different. You may work 40 hours a week but you're working for a set amount of time (for example 6 months) that you agreed on with your employer. They pay for what you work so if you take a day off, subtract 8 hours from your hourly total and 8 hours worth of wages. There is no paid time off, no holidays off, and no benefits (\* usually. There are instances where a third-party company will provide benefits as part of the contract deal). There's also the added stress of managing your own taxes and finances. The added bonus is that you get paid much more and get to choose where that extra money goes (eg. your own benefits, savings for time off, etc.) and you get to write off certain expenses as part of your "business".

Freelance is similar to contract in the money aspect but rather than working for a company for 6 months, you get your own clients and work as a sole entrepreneur. This means that not only do you work as a developer, but you take on the role of a business negotiator, marketer and many others to find clients and get them to hire you to do a project. This avenue may be more difficult but it can be much more rewarding in terms of money or otherwise.

At first glance, the first option seems the best but it may not be for you. I'll dig into that further in a later chapter.

## Where to look for a job then?

There are countless ways to get a job. Anywhere from running into a senior developer at a bar to sending hundreds of resumes to any and all companies out there. However, both of those are inefficient. The chances of running into a software engineer that is currently hiring for someone with your skillset at a bar and being able to take advantage of it are miniscule. Similarly, Resume spamming will get you nowhere.

The top main ways of getting a job today are a little different than they used to be:

1. Directly contacting a company that is hiring. Tech companies often post openings on their website.
2. Responding to a posting on Monster.com, LinkedIn, or other similar job posting sites.
3. Contacting a recruiter that will match you up with jobs.

All of these so far are "seeker" methods, there are other more passive methods:

1. Attending tech meetups and meeting senior developers whose companies may be hiring.
2. Keeping a flag on your github/linkedin profile as "looking for a job".
3. Writing articles and blog posts on the topic of the job you're looking for and making sure your website includes hiring information.
4. Responding to recruiter spam.

These are more akin to the "passive" methods.

### The Seeker Methods

The seeker methods are basically different ways of pushing your resume into people's hands. I found that all three aforementioned methods are effective though every developer will tell you their horror stories and their success stories with each.

**Direct contact** Directly contacting a company has a bounty of benefits. One of them is that you're dealing directly with the company and no third party is invovled. Even with job postings, you're more likely to get in touch with a recruiting company rather than the employer themselves.

This is great because you can easily demonstrate your skills and use your social skills to get a foot in the door. On top of that, discussions about salary, about job environment, and about job duties will be more open. You're welcome to ask questions and receive responses right away. In this manner, it's also easier to figure out if you're the wrong fit or the company is the wrong fit for you.

Interestingly, direct contact positions are usually "passive employment", meaning that you'll most likely be competing against a small number of other developers since the company is most likely not aggresively trying to find someone.

There are SOME detractors, such as job listings being out of date, difficulty of finding companies that are hiring (this is VERY important to know), and most of all, it's the passivity may translate to casual interest in hiring you, this means that you may not get immediate responses or timely progression through the hiring process.

**Job posting sites** Job posting sites such as Monster.com, Indeed, and LinkedIn are great sites in terms of finding a job because they offer a great variety of jobs that will appeal to a number of your skills. If you're on the fence about going into UI development or just plain Javascript development, you can find jobs for both and understand your prospects for both.

It's also a great way to apply to many different companies and wait for feedback. Simply put: this is the easiest way to find a job. The positive part about this process is that if a company posts on one of these sites, it's almost guaranteed they want to fill that position ASAP. The problem is, there are a great many developers applying for jobs precisely this way, that means a lot of competition. On top of that, the top roles are hidden from you or immediately fulfilled.

Another issue is that many of these postings may be recruiter sponsored, meaning that a company hired a recruiting company and that company posted as the original prospective employer. This means that when you think you're talking to a representative of the employer, you're actually talking to a third party that may have its own intentions.

I definitely recommend this method as a backup for other methods, or as a way to find your first job.

**Contacting recruiters** Some job posting sites are actually sites made by recruiting companies. Or you may get in touch with a recruiter and talk to them about your opportunities. Due to the lucrative nature of the tech field, there is no shortage of willing recruiters.

The cool thing about recruiters is that they often know about "hidden" positions, these are job postings that companies don't necessarily advertise anywhere but there is an unspoken internal need for these positions. For instance, a Lead Developer position may not be posted on Monster.com but the hiring manager at company X may mention to a recruiter that they "should really get someone for this position".

Another good thing is that recruiters that repeatedly place employees at a company are more trusted to bring in good candidates. Getting submitted for a job by that recruiter will increase your chances of hire. They may also submit your resume (with your permission) to other companies the second positions come up. And due to their knowledge of the field, they may help you negotiate a better salary.

Now, there are some issues. If you've ever done anything major through a third party (like renting/buying a house), you'll know that the person who is seemingly helping you is working for themselves to get a good deal for themselves. There are stories of "bait and switch" (where recruiters offer a fantastic job, then tell you the position was closed and present you with a mediocre one they need filled ASAP), or pretty much the equivalent of "negging" where recruiters try to sell you on lesser positions while telling you that's all you can get in order to secure a quick hire or prevent you from looking for better positions that the recruiter does not have access to.

Dealing with recruiters is difficult so I will definitely talk about them a lot more down the road but keep in mind that as any method, there are upsides and downsides. The more you're aware of the downsides (and the upsides), the more you can take advantage of your situation.

### Passive Methods

The passive method is the equivalent of Inbound marketing vs Cold calling. Passive methods are meant to employ you by people that are really looking for someone like you. This eliminates the cruft of getting no responses on a resume or trying to get your foot into a company that doesn't want you.

**Meetups**

This one is a little new and does not apply to many other fields. Tech meetups are a pool of the best developers meeting together to exchange information. More often than not, these developers know of open positions. Recruiters also attend these meetings to find candidates.

At the meetup I go to, the presenters routinely mention that their employer is hiring for specific positions. At other meetups, it's simple to talk to the organizer and let them know you're looking and they can easily match you up to someone else who contacted them to let them know their company is looking. Hiring is expensive and difficult, and this is a great way to find a match.

The advantage is that really good developers attend these meetups and usually good developers will work for good companies. Also, if they recommend you for getting hired, that's almost an instant hire.

**Looking for a job flag**

This is a little bit of a given but when you're looking for a job, make sure that your Github or LinkedIn has a flag that says "looking for work". This is great for prospective recruiters, hiring managers, and even fellow contacts to know you're looking and to contact you. If you don't have a LinkedIn, make one now and add everyone you know or that can be beneficial to your connection list.

As far as Github, Github is like the social media/portfolio for developers but it's also a project maangement tool, and a development tool. It houses open source projects which can be used to showcase your work. In that way, they're also a demonstration of your skill.

Having useful open source projects, or popular open source projects, can help find jobs. On top of that, it's the first place fellow developers will check out when they want to find something out about you.

**Writing articles**

This one is a bit unorthodox and when I gave a talk about developer employment, I got some weird looks and later on was asked, "how can you even force yourself to do it?" and the thing is, I don't, I love it. Writing articles is by far my most interesting method of getting a good job. There have been numerous instances where I was able to seal the deal because my would-be bosses have read my work and actually learned from it.

On top of that, it's totally fine to shamelessly advertise yourself at the end of your posts. And the more people you get to read your post, the higher the chance that one of them will reach out to you or have their hiring manager reach out. It sounds impossible but I've worked in a company that reached out to a prospective employee based on a twitter conversation, and he got hired. I've been interviewed and my boss recalled an article I wrote a year prior and how he found it useful. It was a great "in".

Along with this there are other methods. People advertise jobs on Reddit, and I've seen very meaningful comments followed up with "Well, if you're looking in this area, give me a shout."

### It's a combination of everything

Everyone swears by something different. I personally have had bad experiences with recruiters so I avoid them like the plague but I've also have bad experiences working directly with companies. I've heard of others that had a flipped situation and could not have gotten that awesome gig without one. And the list goes on. Things aren't simple and straightfoward.

However, one thing I would definitely recommend is using Reddit or other social media to ask for help in decision making. You'll quickly find others who have been in similar situations that can help you out. Make sure you use a throwaway account. I've personally gone there to discuss job prospects of being a CTO, of becoming partners with someone, the stressors of Freelancing, and so on. There is a great deal of helpful people on there.

title: Enterprise vs Startup
----
content:

Before I get into the nitty gritty of getting your resume right, I wanted to tackle some of the biggest difference between work environments. One of the biggest rifts in the industry is the difference between an Enterprise environment, such as corporations, and a Startup environment. They are almost fundamentally opposite with one group citing, "Break things, move fast" while the other focuses on small iterative updates.

The difference is far reaching, not only in salary expectations, but also in work environment, technology use, expectation of employment length, and much much more. It's so starkly different, in fact, that people often prefer to work in one or the other rather than mixing it up.

##Enterprise

Enterprise is a word that usually means "really big company". There are certain stereotypes applied to this type of company: strict dress codes, mean managers, a certain level of dysfunction, cubicles, and much more. And while some of those may apply still today, they are not as prevalent and there are other factors to consider.

Let's first discuss the technology.

### Tech

There are certain languages and types of technology that permeate the enterprise industry so much that the languages' abilities have become indistinguishable from enterprise itself. A good example is Java. Java is the more Enterprise-y language out there though why can be difficult to explain. ASP.NET and Microsoft technologies are also seen as the "enterprise solution" rather than anything else.

However, over the past few years, the stereotypes of enterprise technologies have started to wane away. Java is still prominent but more and more companies show up using NodeJS for instance. Walmart is a great example of that. They're very much into Node these days.

So why Java? Java is an object oriented language with a ton of libraries. It's also been around for a long time and if there is anything you should know about Enterprise, it's that they are very prone to sticking with a technology decision for much longer than they should. A great example is companies that still use Internet Explorer 6. Java saw a huge rise in the late 90s and every since then it became the default technology for big corporations.

Its object oriented aspect made it a good prospect for unit testing (though that did not come around until later), it was also low-level enough to handle most tasks you could throw at it but high-level enough that it wasn't C++. In fact, Java is C++ inspired but meant to be easier. It's very versatile.

Another thing big companies are a fan of is ASP.NET and .NET architecture altogether. C\#, which is the programming language of choice for .NET, is similar to Java though it builds on it. Corporations, believe it or not, prefer to pay for products. Payment usually means that there is support, and that the company which creates the product will continue existing. Both are important aspects of running a large company.

However, many companies today are switching as open source alternatives grow quickly and maintain as good of a support as commercial products. On top of that, open source products often move faster and can have better performance. So don't be surprised to see a big oil & gas company trying to find a Ruby developer.

Enterprise coding usually involves rigorous long-standing processes for code approval which can be difficult to swallow. With a persistent enough senior staff, code can get stuck in the approval process for a long time and may require several revisions just so that it fits the rest of the codebase as closely as possible. This can be draining.


### Work environment

Corporate work environment is less laid back and you probably won't find a beer fridge but what you will find is a more professional environment. This means that hours are more likely to be fixed and the same as everyone else's but that also means that overtime is less likely to happen. Many companies have specific regulations against it actually. There's also less chance of open harassment, better way to deal with difficult internal situations through HR, and most of all, you'll get benefits.

The best part of working enterprise is that you get what you sign up for. You go in, you do your work, you go home and you're done. Before any rash decisions to fire someone, a boss will usually go through a complicated reprimanding process which usually tips you off about your performance. Managers and supervisors usually have experience doing what they do so they become predictable.

Outside of that, dresscodes are usually a given, and no crazy changes happen instantly. There's always a certain flow with work and getting anything done, whether it's a good flow or a bad one. And finally, there *is* a higher chance of working in a cubicle but most companies are starting to transition to an open space floor plan, whether you like it or not.

### Pay and benefits

Suffice to say, enterprise work has its benefits. One of them is pay. Pay, of course, is malleable but if you live outside of the Bay area (California/Sillicon Valley), chances are that startups in your area won't be funded with several million dollars to spend. Luckily, Enterprise software engineers can earn good cache and even transition into management along the route. The cool thing about enterprise is that there's a higher chance of "moving up" in that department.

But back to money. Enterprise is known to be a better employer in terms of money. On top of that, they already have a payroll in place and a way to deal with taxes so that already eases any possible trouble. And then, you get benefits.

Now, it may not mean much at first but having fully-paid healthcare can be a big deal. A 401K can also not seem much but when you start thinking about retirement or even using your 401K to buy your first house, that can be a game changer.

Again, though, in my experience, overall, enterprise pays higher wages for senior developers than startups. However, and note this, they may not be as gracious toward junior-level employees so look out for that.


## Startups

A startup is usually a small company with 10 or less employees (though it can become larger as it matures). It may or may not be funded by an outside entity and it usually has one or more founders that will work alongside you. Unlike enterprise, startups have just entered the game which can be a positive or a negative.

### Tech

Startups are notorious for picking up the latest cutting edge technology. Mainly because that can be its edge over established competitors. A good example of that is old e-commerce websites that still require constant refreshing, several steps to complete a purchase, and slow response times while a startup trying to inch in on the field may feature a bolstering User Interface built on top of the latest javascript technology with a fast back-end to make sure every step of the way is as quick and seamless as possible.

For that reason and because of low initial investment costs, startups go with open source solutions, contrary to what enterprise does. With startups, you're more likely see the usage of Python with Django, Ruby on Rails, NodeJS, and sometimes PHP. There are some other language choices. On top of that, you'll see a proliferation of front-end frameworks such as Angular and EmberJS.

These decisions are a double-edged sword, however. Startups need to "move fast and break things" in order to get a product out as soon as possible. This however leads to something called "technical debt". In the case of choosing technology, this can mean betting on the wrong technology and getting stuck with something that doesn't get updated, a mistake that Enterprise tries to avoid at all costs.

Something else that is important to mention is that Startups rarely ever follow proper conventions so things like code reviews, using design pattern, and proper handling of problems/solutions can be entirely absent. Same goes with proper testing. Thus is the rule of "move fast, break things". It's okay to mess up the code base as long as you're trying to make the product better in the long run.

One more important thing to say about technology is that a startup can be a wonderful place of learning. Because of the small group size, you may be required to take on responsibilities out of your comfort zone whilst building that "arrow" shape of a skillset. On top of that, working with cutting edge technology helps you see how that technology forms, how its bugs come up and even resolving them.

On top of that, being one of the first few employees can shoot you into high-standing positions (like a CTO or Lead Developer); however, joining a startup too late will get you stuck.

### Work environment

Unlike Enterprise, Startups pride themselves on their "company culture" usually dotted with various strange benefits (like unlimited beer in the office), recreational activities (a ping pong table), and generally a more relax attitude toward work. Going from enterprise to a startup can be shocking even in the clothing department as startups don't ban shorts, or flip-flops, or even hawaiian shirts. Those things, as they say, are not important to the company.

Startups also pride themselves on flexible schedules, allowing employees to work remotely fully or part time, and giving emergency days off that can be "made up over the weekend" or whenever else. However, there will be busy times when employees are expected to work overtime without any extra pay or benefit simply because the startup requires it to succeed.

There's also the issue of not having proper HR setup which can either lead to a positive place: a place where jokes are not taken seriously and where people can speak their minds. Or a negative place: a place of abuse and harrassment which a CEO may not know how to deal with. The latter usually becomes the case as a startup starts to outgrow its infancy and at that point HR and rules become crucial.

However, expect a friendlier atmosphere and expect your co-workers to ask you to go out drinking outside of work!

### Pay and benefits

Startups are notorious for not knowing what they're doing with payroll and taxes. Some opt out of dealing with it and hire you as a contractor, stripping you of any healthcare benefits or otherwise while others may botch the process entirely and delay your payments. Healthcare and 401K are usually non-existent in the startup world; however, those benefits are replaced with the more esoteric ones that I've mentioned: free beer and entertainment.

As far as pay goes, startups range wildly. Heavily invested startups can offer above-market price while boostrapped (read: self-funded) startups may be more cautious with their money and hire under market value. Startups, however, are great for junior developers as they rarely require much background and pay well for the experience. An enterprise company may turn down a junior developer due to inexperience while a startup may hire them for having experience. It seems a little strange at first but it makes sense in the long run: startups are able to hire cheaply (by hiring rising junior developers) and hire developers that are eager to spend all of their time learning cutting edge new technology while enterprise wants to hire long-term reliable developers that are willing to stick with a Legacy (read as "old") system for a long while.

##So which one?

To be honest, I would pick neither. Startup culture has some great benefits but its detriments can put you off. Enterprise is the same way and though the pay can be rewarding, it can't make up for stricter schedules and legacy software troubles.

The best bet, in my opinion, is catching a startup that has just gotten into a good track and no longer needs outside funding. Those startups are usually sufficiently large to have everything figured out as far as payments and HR, and even benefits while still retaining some of its "relaxed" atmosphere. It's a hell to go through if you started before the reorganization but if you get hired during or right after, it can be a rewarding mix of enterprise and startup.

The other best bet is quite the opposite, an enterprise-sized company trying to either create a silo (a startup within the company), open a new software department to create a new system ratehr than support legacy, or one that has just purchased a startup and wants to expand it as a new department/wing/etc.

title: Freelancing and Contract
----
content:

Freelancing is a method of working and getting paid similar to owning your own business. You're essentially responsible for your taxes, profit, getting clients, legalities such as writing contracts, and even saving up for time off. Freelancing can be very rewarding. Some relish in it, enjoying flexible hours, and having the ability to take on a variety of projects. It can also allow them to take on a major project and take an easy month or work harder and see that work pay off right away.

Unfortunately, for others, freelancing can be a hard trade with problems stemming from not enough clients and being punished for small mistake since there is no bigger company to take on responsibility for those mistakes.

Contracting is similar to freelancing but instead of looking for clients and projects and up-keeping an online persona in order to find more business, one signs contracts with individual companies to work with them in an employee-like status for a period of several weeks to several months. It's sort of a middle-ground between freelancing and full-time work.

There is much to know about contracting and freelancing and the more you know, the more you'll be prepared against some of the common pitfalls when entering the field.

## Pitfalls

Freelancing and generally working for yourself is rewarding in its own ways but it's tricky. Here are some things to watch out for.

### Taxes.

Let me repeat, Taxes. TAXES. Taxes are the bane of freelancers and contractors alike. The reason is that you're solely responsible for putting aside taxes, and not just your regular income tax but "self-employment tax" on top of that, which is about 15%. This is all for the US developers, if you're from anywhere else, you'll face the same issues.

Make sure to ALWAYS put aside enough money and not dip into it. I've met far too many developers that didn't save up enough to pay at the end of the quarter. That's right quarter. Freelance taxes are paid every 3 months. So don't forget!

### Time Off

While time off seems like a natural part of working, it's not so as a contractor or freelancer. A holiday means that you have another day you need to save up for in order to take it off. This means that holidays can become extra stressful.

So whenever you're calculating how much money you need, make sure to include days when you won't be working such as holidays, paid time off, vacations, and even sick days. It pays to make money ahead of time.

This still applies to contractor.

### Business downtime

This applies doubly for Freelancers. Business varies with time of the year. For example, December is a terrible month since most businesses want to shut their doors close and not accept new projects, this can become an issue for freelancers that depend on business-to-business work. It can be frustrating for contractors as well as they will have a difficult time finding work around that time.

On the other hand, the beginning of the year can an extraordinarily busy period during which freelancers can strike a number of deals as businesses and individuals alike seek new opportunitites and ventures. This works out for contractors as well, however, they won't benefit as much from the uptime of business since they can only hold one job at a time, unlike freelancers who can queue up business for several months.

Again, it pays to count your finances beforehand and figure out where to go.

### Not Having a contract

Contractor, obviously, usually operate under a contract provided by the employer (make sure to read through it carefully!) but freelancers have to make sure their clients will sign their contracts and follow through on them. It's common for freelancers to accept projects under nebulous terms and can easily succumb to litigation or not getting paid.

There's a famous talk on youtube that was the product of such repeated behavior called "Fuck you, pay me" which discussed this specific issue. Contracts are there to keep a solid understanding and expectations between client and a freelancer. A contract is also the only proof of agreement about payment.

### Not reading a contract

The other issue is not reading your contract. This is important for contractors who may blindly sign one without as much as glancing at it, excited about a new opportunity. It may seem like, at first, that you're not trusting the other party and in truth, you shouldn't, but it has more to do with having clear understanding between two parties.

Here are some usual clauses to watch out for:

* Intellectual Property - this has to do with whatever you create while working for a company. Some companies extend this clause to include anything you create in your *spare* time. Meaning that if you're slaving away all day, come home, and decide to build some small app for yourself, it's your employers property.
* Payment options - some comapnies provide only specific types of payment (check, direct deposit, etc.) and may give themselves extraordinary amount of time to pay. For instance, a company may state that it will have up to 90 days to pay any invoice which can be problematic.
* Non-compete clause - this one is prominent among full-time salaried employees as well so watch out but a non-compete is basically an agreement that for some amount of time you may not work for any competition in the area after your contract is done. This can be devastating if the clause is overreaching such as when competition is described as any company using similar technology within a 50 mile radius, and for the duration of two years.
* cancellation and completion clauses - for the freelancers, make sure that if the client provides you with a contract of their own, it doesn't state something like, "we can cancel at any point and not pay for any work done so far while still retaining IP". These terrifying clauses popup often and can cost you your business.

The basic thing I can tell you is reading through a contract and never trust it when someone says that this is a "standard". Look it up first, ask other developers.

## Freelancing

Let's talk about freelancing. Freelancing can be wonderful but usually requires a solid base of clients in order to be an enjoyable venture. And just like finding a job, there are certain strategies to obtaining and retaining customers. There's also the issue of "how much to charge" which no one can quite agree on, and finally, it's important to understand all of your responsibilities. And interestingly, remember that web development can be more than just that in clients' eyes.

### Getting Clients

Getting clients is sometimes easier than retaining them but both are daunting tasks. The first place you want to make sure is ready is your own website that showcases your work, discusses the services you offer, and hopefully quickly, can show off testimonials of past clients.

The second place depends on you. I personally found freelance work by writing articles about freelancing, about making websites, and interjecting a little note at the end that says I'm available for projects. Not very effective.

Another place is Craigslist. Believe it or not, many smaller business depend on craigslist as a means of getting work done. And even larger businesses do. Check it out, their services or web work section and see if there is anyone looking for work done. Be wary of people that have the "next Facebook!" idea or people that offer a percentage of future profit as a payment. Outside of that, make sure you can get these clients to sign contracts, even if they claim to not "do things this way". A lost client is better than a non-paying client that cost you several thousand dollars worth of work.

There are plenty of other communities where people post projects and you can try to get in contact with the client and discuss it. Reddit is a good place. However, there are plenty of communities that just don't work well. There are many sites that are meant for developers such as ODesk and Freelancer but from my personal experience and the experiences that I've heard about it from many other developers, it's a pitfall of failure because of low-paying projects, high competition that underbids everyone, and sketchy client behavior.

Outside of that, there's always "cold emailing", or emailing business that look like they need a new website; though, I've never had any success with that particular one.

### How much to charge

This one ranges wildly from $20/hour to $150/hour depending on the type of the work you do. The rule of thumb is to pick a salary you'd like to make and work your way down from it:

1. Multiply the rate by a certain % to account for extra taxes
2. Add extra money for days off and holidays. Most companies have about 6-9 holidays a year plus 10-15 days off a year
3. Add expenses that will come out of your pocket. You'll need a computer, accounting software, billing, invoicing, web development software, probably some subscriptions, etc.
4. Savings for the time that you won't be able to find a project.
5. Expenses to find a client
6. And money to take into account when business speeds up or slows down.

This is why some companies and some individuals can reach very high rates. Some developers charge at least $10K per project, and each project can last anywhere from two weeks to a month.

### Responsibilities

As a freelancer, you'll have certain responsibilities, beyond that of taxes that you will have to make sure you take care of. If you don't, you might get in trouble and jeopardize your business:

1. project management - clients *can* get lazy even if they tell you how adamant they are about their deadline. It's up to you to keep up the flow of information and the steam of the project. If you need content, make sure you get it, and make sure to ask for it when necessary. If you need a client's approval to move on, make sure they know and make sure you let them know that if you can't get approval by a certain date, you will have to postpone the deadline.
2. invoicing - sending invoices (basically a piece of paper that says how much a client should pay you) is part of your job. So is following up on late clients, and possibly following up with whatever contractual obligations they have and whatever rights you have if they fail to pay on time.
3. timetable - it's up to you to figure out how much you can handle. If you find several clients at once, great! However, you may not be able to pay attention to that many projects at once. Taking them on could force you to either work VERY long hours (I've heard of developers pulling 80+ hours a week) or breaking the contract. On top of that, you're risking losing quality, losing possible repeat clients, and pay altogether. Make sure you know how much you can handle and only take on that amount.

There's much more than that, but you get the idea.

### Beyond WebDev

So when your client tells you they want a "website", it could mean one in a million different things. For a non-tech person, a website is a very nebulous term (which is why there are contracts that specify what a website is!) so make sure you know what you're getting yourself into. But also, know that you can't always avoid doing only one part of the overall job. It's easy to push off, for instance, design when you're the one doing web development; however, you may lose business this way.

Freelancing is the epitome of the "jack of all trades" so let's go over some things that clients will see as a website and may expect from you:

1. Design - Every freelance web developer I know has at least basics of design. This means that they can create a polished UI for a client's needs; however, it doesn't mean that you should have to be a UI design expert that can build the next generation communication web application for a watch.
2. Development - This one is a given but it also means front-end as well as back-end. There will be clients that will need one or the other, but some will want both, not knowing there is a difference! :) Make sure you know enough of both to build a solid website
3. SEO - or Search Engine Optimization is the black magic of making a website "pop" in the ranking of a search engine (basically, google). This is an effort worth an entire agency over the course of many months or even years so you can't possibly do this alone unless it's the only thing to do. You'll need to inform your client of that; however, there are things you *can* do as a developer: have clean markup, present all of your contents so that it's search engine legible, use the proper SEO tags (like using the correct `h1` for headings), and generate a sitemap without any dead pages (get rid of dead pages too). These few things won't put your client on the map but when they do approach an SEO company, the company won't have to make an extensive list of things that need to change on the back-end, development side.
4. IT/Hosting - many clients maybe unfamiliar with the concept of "hosting" a website. You may be called on to recommend a hosting company and to even setup your final product there. Make sure you familiarize yourself with website migrations, hosting, and linux for this task.
5. Error/Support - You may be thinking that once you're done with a site, you hand it off and don't have to think about it again but client's may not see things the same way. Every developer will create bugs that's why it's easier to say that clients pay you for time to build a website, not for the actual final product. Make sure you know how to debug, fix, and support your product.

It should go without saying that none of these tasks should be offered for free and if you're uncomfortable with any of them, you may want to state so and make it known; however, the fuller complete package you can offer, the better. It's also worth mentioning that any of these tasks requested by a client should be on the contract and discuss limits of performing them. This is what's called a "scope", a defined set of limits within a project or a contract. Expanding it should change the contract.

## Contracting

Now that we're a bit more familiar with freelancing, let's jump into the world of contracting which is similar yet so very different. It can be a rewarding career move for people that like change, that want to move around between technologies and jobs. However, with this freedom comes the responsibility of finding the next gig right away, figuring out your benefits, what to charge for and what to not charge for, and a great deal more so let's dive in.

### Finding the next gig

Contractors should have an easy time finding the next gig so this item is not so worrysome. Make sure, though, to have it aligned at least several weeks prior to the end of one contract. It's also not uncommon for companies to renew your contract continuously through the years. Some companies prefer this over full time hires or may have rules that prohibit full-time remote hires.

### Benefits

Most contracting gigs don't offer benefits; however, there are several alternatives to company-paid benefits. You can start your own 401K that you can contribute to yourself without the assistance of a company. And while you do lose on the "matching" amount a company would pay, you won't have to deal with rollovers and you'll be in full charge of it.

As far as medical care, there are plenty of options out there. If you choose to do so, you may find a job as a "full-time contractor", which is a position at a company that hires out people. Meaning that you keep a steady position with full benefits while you contract with the company's clients.

### Tracking your time

This bit can be confusing but as a contractor, even one that works "full-time" or 40 hours a week, you'll be required to submit a time tracking sheet. Depending on who you work for, it may even require justifications as to how you spent your time though I haven't encountered too many companies that do that. There are some things you may not be aware of. For instance, you can't track time you spend eating lunch. For all intents and purposes, it's an hour off. However, meetings, discussions with other employees regarding a project *can* be tracked. Even checking your email can be tracked.

Generally speaking, as long as you're devoting your time to work in one way or another, it can be tracked.

## What it all means

All kinds of things but one thing I can recommend for everyone is trying out Freelancing, no matter what. It's a great way to get initial experience when you're starting out or to get extra money on the side when you have a big purchase coming up. It's also a great path in the web development career; however, it's definitely not for everyone.

If you have an adventuruous spirit, freelancing is definitely a great journey and it can be a great way to build a startup.

As far as contracting goes, I recommend it for the jittery but it's not something you should or need to experience. It's just another way of doing things.

title: Resumes
----
content:

Resumes are a wonderful way to showcase who you are, what you are capable of, and what you have been up to. Some see Resumes as obsolete and believe that portfolios or Github are the way to go, yet others find both obsolete and believe in pure interview or co-coding practices. But those are, again, argued for and against.

I hope the last several chapters have shown this never-ending argumentative nature of the tech sector.

However, Resumes still hold place. I have not yet seen a job, high-profile or low-profile, that did not require *some* kind of a resume. It's not a formality either, it's a great way to present a summary of you.

But Resumes can be tricky. They can range from informative to overwhelming, and from useless to even worse. The main goal is to make a resume as clear as possible without being too long.

The saying goes that a "recruiter never looks past the first page".

## The Basics

This may be way too basic for most of you but it's worth mentioning some tips on Resume basics:

1. when naming your resume file, use your name in the file such as, in my case, "antonin\_januska\_resume". This is so that it's much easier to find your resume when searching through a folder of resumes.
2. please put your name and contact info at the top of the file, no reason to have employers or recruiters scrollling around endlessly.
3. use a font that's present on most major systems. Helvetica may be pretty but any non-Mac computer will just show up as a default font anyways. Try to use something that's cross-platform and if you're using a Word doc, just use the word document default.
4. don't use any crazy styling
5. use a standard file: doc, docx, rtf, or pdf. PDF and `.docx` preferred.
6. include your location (city + state)

Once you have the basics down, time to move onto your work history.

## Work History

Work history is a great example of how Resumes are useful. No, it doesn't matter if you worked for a major company or a minor one. And no, this isn't about name dropping. A resume is a good way to show what you've been working on and what work setting you've been a part of.

But it's not as simple as writing down the company you worked for and how long. Let's dissect the important parts.

### Order and what to not include

First, let's discuss the order of your jobs. It makes sense to put the most recent one on top such as your current position. If you're working two or several jobs as is normal for people that freelance on the side, put the full-time job on top and follow it with notes about your freelancing.

And yes, you should include how long you've been freelancing and details on that account as well.

As far as what not to include, make sure to avoid jobs like being a cashier or a waiter/waitress, or anything similar even if you're looking for your first job.

If you're looking for your first full-time job, this is why you should have some freelance work under your belt, able to discuss past projects.

### Include brief description and technology

One of the more important aspects of a resume is its searchability and its informativeness on your abilities regarding specific technology. First, let's take on searchability.

Whenever your resume is submitted to a recruiter, it's usually added to a larger database of resumes. The same goes for linkedIn, Monster.com, and other sites where your resume becomes an inherent part of the system.

Now, the positive aspect of that is that your resume becomes fully searchable, full-text search in fact. So whenever a recruiter is looking for resumes, they will type in what you might type into a job search field, such as a "PHP developer" or just the technologies they are looking for "PHP, Javascript". Listing out the main technologies you've worked on puts you straight into the results.

I make sure that my LinkedIn have something to the effect of:

>tech: Javascript, NodeJS, REST applications

at the end of it. My resume looks a bit different, however.

With every job you put in your resume, there's the title and dates, sure, but there should also be a description. A description should be succinct and truly explain what you do. Here's an example of one of my descriptions:

> Developed tools for lead generator and monetizations platforms as well as high-availability APIs to power front-end applications.

What's important in the description is that it already tells you some stuff I've worked with implicitly and explicitly:

1. performance tuning and scaling
2. business logic
3. security
4. back-end and front-end development
5. API development
6. monetization platforms - which already implies working with heavy-duty forms.
7. enterprise platforms

The list goes on but it's a well structured description. After that I'd post a list of the tech I used.

### Projects

You can also write down a list of projects in your resume under each job, keep it as short as possible. It's also another great way to write down what technology you used. Here's my full example from my resume:

````
Developed tools for lead generator and monetizations platforms as well as high-availability APIs to power front-end applications.

Projects:

* Main monetization platform - php/symfony + Mysql -  feature additions, unit testing, maintenance
* External Data API Tool - Ruby on Rails platform - DevOps, system audit, performance audit
* Internal Data API Platform - NodeJS + Mysql - back-end architecture, importing scripts, scaling, caching and performance strategies, DevOps, and front-end prototypes
* General prototyping - General front-end prototypes for internal and external APIs with AngularJS
````

A good resume can make you stand out.

## Open Source

Sometimes the most important projects you'll be working on won't fit into a job category. Such as work on open source projects, personal projects, and similar. You're welcome to include those after Work History. They're a little like a cherry on top of what you've done.

Make sure you state your involvement and the technology, again, that you've worked with.

## Links

Link to your Github or other portfolio websites, preferably at the top of your resume. This will ensure that the prospective employer, after being screened by a recruiter, can find out more about you. You may include links for your blog, LinkedIn, Github, and just about anything else.

In fact, I even include my Twitter and many prospective employers find that useful, especially startups. Enterprise-level companies, not so much.

title: Recruiters
----
content:

Because of the complicated nature of recruiters, they warrant their own chapter. Recruiters are the middlemen (or middlewomen) that act as liasons between a company and a prospective candidate. They try to make a deal between the two parties and get paid upon employment (or within 90 days after employment, the terms vary).

However, dealing with recruiters is a tad more complicated than dealing with an employer since they're a 3rd party which has its own interests.

## Recruiter types

### Company-side recruiter

There are several types of recruiters, let's first talk about a company-side recruiter, a recruiter that is employed by a company that is looking for new hires.

Such a recruiter may post listings in the company's name, relay information, salary rates, discard candidates, and pass candidates on to the hiring manager in a company. The recruiter may have a pre-interview with you to gauge your skills before recommending you further.

These recruiters try to find the best fit possible to help keep continuing business.

### Candidate-side recruiter

These are recruiters that look for candidates to match up to a list of jobs they have available. Many recruiters work for recruiting companies which means that they have a multitude of contracts to fulfill. Thus, they will look for people to generally match to a position.

This means that a recruiter may contact you about one position but find others that you may be suitable for. They are still obliged to find a company a good candidate, just like a company-side recruiter but they rest somewhere in the middle, looking for people generally to match to any position they need to fill rather than a single one.

I've also had some recruiters represent me to companies they were not necessarily under contract with but rather the company had already posted a listing that they are looking for an employee. It's not common but it's there.

## The Pros

Using recruiters has its benefits that can launch you into the correct path in your career. There is a reason why there are so many and why it's a booming field. It's difficult to find the right people, and it's difficult to find the right employer. Recruiters also take on other roles that an employer may not want to be responsible for such as doing background checks.

So here are the top reasons why you *should* choose a recruiter:

1. Skilled and senior recruiters are often on first-name basis with hiring managers in larger other companies. This gives their words and candidates more weight than a candidate that applied directly.
2. When one job falls through, a recruiter can line you up with several others right away.
3. A recruiter may offer better advice on job matters.
4. A recruiter may be your only way to contact a company so rather than pass on the job, work with the recruiter.
5. A recruiter will be able to better gauge your skills and can recommend better fits for a job.
6. Recruiters always have better and faster access to jobs, even those not listed.

I've heard other developers tell me constantly that recruiters are worth it. They can even argue on your behalf for a higher pay. It's like having another entity that fights with you.

Unfortunately, using a recruiter has its detriments as well.

## Cons

Using a recruiter has its downsides. Enough in fact that some people choose to never go with them. I am among them and for some good reasons. Not only are there numerous upsides to going to companies directly but having a third party involved in such a delicate process as securing a job can be hazardous.

The cons can't be bullet-summarized like the pros because they mostly apply to people themselves and not recruiters in general. As a third party, they have their own interests and some people take it way too far. What I *can* summarize is this:

1. You're always relying on a third party to communicate for you. A busy third party means that communication is not timely.
2. Your dealings with a prospective employer hinge on an extra person in the line to the hiring manager. That adds space for error and miscommunication.
3. Some people take their own third-party interests too far at your own detriment.
4. The third-party is human, entirely capable of the full-range of human behavior from helpful to malicious.
5. Recruiters may try to match you up with a better fit for a job; however, they will mostly focus on the positions to be filled by their company's contract obligations.

Number 4 is the real deal. I've personally met recruiters that were very helpful, even inspiring, and wonderful at all their tasks. From estimating a good salary range, to helping me with my resume, and finally to getting me the best positions on the market. I rarely find a satisfactory fit through a recruiter; however, there are recruiters who really do their best.

On the other hand are the nightmare scenarios that almost every seasoned developer has had to deal with. Those are the things to look out for.

One instance that seems to repeat itself over and over is the "bait and switch" process where a recruiter will cold-email you or post a position that you do not qualify for. When you start the talks and get excited, the recruiter will inform you someone else got it and try to sell you on a job they REALLY need filled and that you may be overqualified for. This would mean a badass fit for the company, for the recruiter, but maybe not the best fit for you.

Another story I hear often is recruiters lying about benefits and the environment you would work in. In this instance, they add on promises and "maybes" on top of the job listings in order to entice prospects to apply. This may apply to salary ranges (for instance, offer 60-80K when in reality the budget is 50K-65K and thus you will never reach beyond the real budget range), informal benefits ("flexible schedule" suddenly becomes very ridig), and similar.

At first glance, this doesn't make sense since there is no reason to try to deceive during the job finding process. A recruiter would be sabotaging themselves since you could refurse an offer and walk away as soon as you see through the deception; however, that is not always the case. The details may come out after you've already been hired at which point going back to job-hunting may be too much of hassle. Or you may enjoy the job and when you find out several of the benefits don't exist, you don't find it a reason enough to quit. The list goes on but it basically relies on the prospects' unwillingness to walk away.

## Should you do it?

That's up to you, as everything else. First hand experience is definitely the best way to learn. Hearing what others say on the topic is also useful; however, everyone will give you their opinion. I'm 100% sure that several developers will roll their eyes at reading my "cons" list but that's fine, they have their experiences. And you will have yours. 

title: Social media, blogging, portfolio, and everything else
-----
content:

Lastly, as far as employment goes, I wanted to discuss social media and the like. Mainly as a resource for getting a job and long-term healthy employment. There's also portfolio making which is a necessary addition to a resume.

## Portfolio

A portfolio is traditionally an organized presentation of one's work and work accomplishments. In the case of a web developer, it can be anything from web design, to code projects, to open source libraries, and everything else. What's important about a portfolio is an ability to back up the words on your resume with some tangible evidence of your skill.

For a successful portfolio, you need to make sure of a few things:

1. Include ONLY your best work. Nothing mediocre. Keep the number of pieces small enough to be easily digestible but large enough to show your best.
2. Try to include varied pieces. Showing five of your web designs where each is in the less style is less helpful than one web design combined with back-end work and an app you created.
3. It's fine to do work directly for the portfolio. One such case for designers is "unsolicited redesign", or a design concept of an existing product/app/website that was not commissioned by that entity.
4. Use work that you're only approved to use. Don't try to use work that you are not allowed to disclose.
5. Make your portfolio online-accessible. Better yet, make your website a way to show off your best stuff.

Making a portfolio can be a difficult process in the beginning but as you go on, it'll become easier and more important. Many companies, fortunately, understand that not every job you take on will yield a portfolio piece and thus many developer interviewers try to discuss the technology and challenges behind a project that may not necessarily give you a nice "screenshot".

In this case, you would list those under "projects" on your resume. Your portfolio can contain anything visually appealing, or any code that you may have on hand (preferably on Github or similar), or any application you build. If you do create an app, make sure it's mostly bug-free. No reason for someone to visit your top project if they can't even see the page.

As far as posting code online. This is a pretty standard practice with the rise of Github. Github is like the social network of code developers where you post your projects and have people comment on it, use it, and even contribute. If you have some useful code, post it. For portfolio-purposes, a Github account is very much capable of demonstrating what you're capable of. Post pet projects in various languages to demonstrate your skill.

Also, keep in mind that your portfolio is a living thing so update it!

## Social Media

Social media, strangely enough, is a great way to socialize with other developers and gain a lot from it, not just a potential job. I thoroughly recommend Twitter and Reddit. Both of which are great ways to showcase your existing projects from Github and thus get feedback (plus, if you drop a line about looking for a job in the readme, you might get some responses!). They're both also great for learning about your skillset and becoming a part of the developer community.

It's difficult to describe the benefits other than just the community and a place to disemminate your blog articles and showcase your work. Both of which may lead to potential employment. Outside of that though, you may find some cool stuff like other people's work that may inspire you, various cool apps and libraries you might want to use, discussions on the job of a web developer and so much more. The community can quickly become a huge part of who you are and what you do.

If you have a question, feel free to ask and hopefully get good responses. There are several communities specifically geared toward CS careers (computer science) which can help you with your resume, with where to look and everything else.

One last thing, a potential employer may look through your twitter history. This can be a good and a bad thing. I've had an employer go through my reddit history out of curiosity and that fostered an instant connection between him and I since I did the same with his account.

It's, however, not a necessity. I've had a person attend my talk where I discussed how social media helped me land a job. Well, in fact, I worked with a co-worker who was hired on the basis of a twitter conversation. And she asked me how to go about being active on twitter and making a "personal" brand as a web developer when she doesn't really like it. I answered her as honestly as I could: You don't *have* to do it.It may not even pay off for most people.

## Blogging and blogs

A great way to spruce up your website is by adding a blog to it. There are several good reasons to do so outside of possible SEO benefits, and one of them is getting your portfolio some exposure. Many websites that are frequented by high-profile developers and even recruiters allow submission of interesting articles. HackerNews and Reddit allow such submissions.

Now, I don't recommend this as a strategy for getting a job but there are lots of rewarding reasons for writing a blog:

1. writing tutorial blogs helps you internalize and learn. It's the same concept as teaching a subject helps you learn about it more in-depth because you're forced to explain the topic in terms that a beginner could understand.
2. writing opinion pieces on tech can gather you a good discussion on the topic and thus enables you to challenge your ideas and possibly get validation.
3. it gives you a great chronological "developer's diary" of what you thought, what you struggled with, and how you overcame those challenges.
4. if you're smart with monetization, your writing could pay off somewhat (nothing worth switching to full-time).
5. for anyone looking at your site and wanting to hire you, it's a great way to showcase your skills, your knowledge, and your ability.

I definitely recommend everyone having one even if you write in yearly "What I've learned" and "What I plan to do" or even if you just gather your favorite articles in one place.

However, as with social media, don't get into it if you find it too much of a hassle. I know plenty of web developers that don't even bother with one, but plenty that love blogging too.

title: Once you get it
----
content:

I talked a lot about getting a job but not much about what to do once you get it. Your first job, or whichever actually, should always be a learning opportunity. You should never walk out of a job thinking that you're at the same place you were before you got there. Take from that what you will.

There are some ways to encourage your workplace to be a learning space as well so take note and jump on opportunities:

1. when a new technology is necessary for usage, volunteer to learn and use it.
2. if you get to decide about technology, make an informed decision but don't forget to challenge yourself.
3. if you're working with only one part of a larger application, dive into the code you don't always touch and try to learn from it. Ask yourself, what kind of architecture are the other developers using? What language/framework is this using and how does it work? Can you see any design patterns you've learned about?
4. if you're still using the same technology as before, always make sure to challenge your code. See if you can make it more performant, adhere to better practices, and/or better architected.
5. Larger developer teams often have senior staff that doesn't mind mentoring, see if you can find someone who will help you reach your next level.

Another thing to remember about your job is that your current job won't be your last job and you definitely should not feel bad about leaving. Work is work and you have to do what you can for your career so if you're stuck at a failing startup, you might need to make the decision to jump ship. On the other hand, if you're at a sucessful company but you're bored, find a better place. Things change over time and so do workplaces so if things aren't to your liking, go ahead and find something better.

It is true, however, that the longer you spend in the industry, the less likely you are to switch jobs. This is because over time, you'll find a better gauge as to what job will satisfy you the most. On top of that, the more seniority you have, the easier it is to find wiggle room for those learning opportunities. It also becomes a chore rather than an exciting adventure when you look for a job. I know for myself that I dread it when I used to be excited what kind of an amazing job I'd find next.

So, good luck!

title: Intro
----
content:

It's easy to be a good developer. You get your job done, your code works, it passes tests (if you have any). And you find yourself happy where you're at. Good for you, you've just achieved career satisfaction. Something many people are not able to do.

But contrary to popular belief, it's easy to be a "good developer" but difficult to be a "better" developer. Inb4 rockstart developers, that's not what I'm talking about. I'm talking about being a developer that's able to write code very well, well enough in fact that anyone can jump in and take over. That kind of developer pushes for better testing practices, for well architected system, looks beyond just a quick solution but a solution with longevity, can accurately estimate technical debt, and can argue with a manager for all these things. Shortly, this developer is a more responsible professional that tends to become a Senior developer and more.

I have a whole load to say about this topic so there's an entire section on this.

Who is this section for:

1. a developer that wants to become better.
2. a better developer seeking validation.
3. a developer that wants to learn beyond what they currently know.
4. new developers wanting to learn some more advanced concepts regarding their job and skill.
5. someone wanting to set new goals and thinker deeper on their career.



title: Career paths
----
content:

There are many important points along a web developers career path that require a decision. You can always go back on your decision but it's important to know it's there. These career path will set your field, your job market, and even your pay in the future.

I'm basically talking about specialization. Just as an engineer may specialize in waterworks, a developer can specialize in DevOps.

You may have made some of these decisions yourself so it's time to find out if you made the right decision or what it may have cost you.

## The Programming Side

Let's first discuss the general developer. Outside of programming language and framework specialization, there are several other career paths.

### DevOps

Or Development Operations is a career path for a developer that wants to focus on setting up servers for web development, creating testing environments, and a deployment strategy. This could involve spinning up new Virtual Machines or servers based on set IT protocols, creating bash scripts to install all the necessary software on it, or bypassing bash scripts and using more advanced tools like Ansible, Puppet, or Chef in order to have robust recreatable environments.

A DevOps person is an intermediate between a back-end developer and a system adminstrator. In some ways, they allow better communication between the two but many other ways, they're crucial to having a robust platform for your code. Outside of setting up servers, for instance, a DevOps person may setup a development environment using tools like Vagrant and Docker so that each developer can run their own small server with their code and be able to destroy/recreate it at their whim.

A DevOps professional can also be responsible for a testing environment such as setting up Continuous Integration so that all the code tests are run automatically on each Git commit. That person can also be doing many others things include setting up deployment strategy. A "deployment" is moving code from testing and development environments to a production server (your "live" server) in a safe and secure manner.

A deployment strategy is not just simple FTPing to the server (that's not a good idea anyways), it may involve setting up software for quick rollbacks (using an older version of the code in case something goes wrong), changing production server settings, updating the database with a code push, and much more.

In this path, you're entering a whole new world for developers because DevOps didn't exist several years ago and not until a year or so back did DevOps individuals become wanted and found crucial to smooth business operations for large companies.

### Back-end developer

I've discussed back-end vs front-end; however, working as a full-time developer on either side can be a much different experience. As a back-end developer, you will be responsible for the bulk of the business-logic (the code required to perform your business's specific duties), data storage, and communication with the front-end. This can be a daunting job; however, back-end languages have their charms and beauty. Back-end developers also usually don't have to focus on the look of the website, but rather deal with the programming aspect of it.

One of the greatest advantages of back-end code over front-end code is the wealth of languages you can use. From C\# to Python, PHP, Ruby, there are even C++ frameworks for the back-end, not to mention Java, Scala, and I could keep going while the front-end is limited to its Javascript and possibly you could count Dart (which compiles to JS anyways). This means that there is a wealth of paradigms to tackle, and many new paradigms that people test and try to advance.

Back-end developers usually don't deal with interactivity but create endpoints for front-end developers to hook into for that specific interactivity.

Back-end development is where you get to really get your programming chops on. These positions also offer the greatest range of employment since any large company that needs a developer, will most likely need a back-end developer. These positions are also paid the most since they deal with proper logic execution, performance, and everything else to do with making money.

### Full-stack developer

A full-stack developer tends to move between layers but the best way to describe one is by saying that a full-stack developer is great at two things: prototyping, and finishing products. By that I mean that a full-stack developer can be given a task and not only get the rudimentary business logic in place but also get the front-end started with basic interactivity.

This is great for full-time prototypers wherein, after a project's completion, a back-end developer can come in and put together a well architected solution and a front-end developer can come in and layer on some crazy interactions.

This is not to say that a full-stack developer cannot do both of those as well (some can, some can't); however, the point of a full-stack developer is not to get bogged down on either end.

As far as the "completion", this is to say that after the architecture is done, bulk of the back-end work, and the front-end, a full stack developer can come in to implement new features that span both sides.

As far as the work environment, full-stack developers don't often get specifically "full-stack" positions but rather can move in a company on both sides, or, when finding a new job, switch paradigms instantly. This offers a wide range but without being fully submerged on either end, it can be difficult to get into the highest paid ranges. I'd say that most developers are *somewhat* full-stack developers, knowing things somewhat well on both sides.

### Front-end developer

A front-end developer deals with what shows up in the browser. This can encompass interactivity, converting design to code, animations (nowadays), and sometimes even design. Front-end developers are famed as the "normal" people when it comes to programmers. I think that mostly has to do with the visual aspect of their work. Code changes and work is tangible rather than more abstract. And clients can see updates immediately, being able to view a "before" and "after" shot.

Front-end developers have the ability to shape the way a user interacts with their application. This can feel very powerful and can be extremely rewarding. A front-end developer may follow spec but usually it's up to them to figure out how to execute it.

Front-end developers, as far as programming goes, have to deal with front-end performance issues, being able to write code that works the same way across a myriad of devices and much more. While they are restricted to only one official cross-platform language, there are hundreds of libraries and many different paradigms to follow. It's also the place that's seemingly advancing the fastest in the landscape. From industry-changing frameworks to rapidly advancing browsers that can do more every year, a front-end developer can live "on the edge".

As a front-end developer, the job market varies from lucrative startups to a ton of freelance work for smaller businesses. As a front-end developer, you can make yourself quite a comfortable career. The big upside of this expertise is how quickly it's growing, how much demand is increasing and how much the career is becoming more coveted.

## As time goes by

As time goes by, you will have to make more difficult choices, and not just ones that involve which tech you work with. In fact, the more time goes by, the more you'll realize just how much everything is blending together. Front end and back end will start to resemble each other, and all languages will seem quite similar except for a few nuances. At that point, I'd say you achieved the Senior Developer level; however, your career wants may take you elsewhere.

Some people call developers "code monkeys" (which, in reality, sounds pretty offensive), and you may want to get away from that but still stay at the tech side. There are several opportunities you'll be faced with.

### Senior Developer (management heat: 0/10)

Not much a monkey, more of a gorilla that bangs its chest and lets everyone know what they should be doing. As a Senior Developer, you'll be in a unique position to mentor junior developers and partake in important technological decisions as well as handle the hardest challenges set before you. This is the position where you get to argue with other senior developers, with your manager, and everyone else about your position on a decision.

And it's important to argue and hold your ground, you're there specifically for your expertise. Senior Development still requires a lot of coding but some coding will be replaced with important decision-making on application architecture, white-boarding solutions to complicated problems, and estimating deadlines for larger projects. You'll focus more on creating an application that will last that others will work on.

There's a saying that you should write your code as if the next person to work on it is an OCD-driven serial killer that has your address. In this case, a senior developer is someone who is least likely to become the next victim because half their career is staked on making code that junior developers will be able to work with, update, and patch while they're off doing the next big thing.

Senior development is wonderful for all of those that want to keep coding but take on some responsibility while not leaving development altogether.

### Lead Developer (management heat: 3/10)

As a Lead Developer, you take on not just the senior developer role but also somewhat of a manager role. This means that you'll have responsibilities outside of your code such as some project management, estimation of deadlines, ability to speak with upper management about the problems you may be facing, and delegation of rules. This position ranges wildly depending on where you work.

Being a Lead Developer can mean anything from being the ONLY developer (startup) to being a Lead Developer of all developers currently working for a company (mid-size company) to being one among many lead developers that lead a team of specific developers (mid-size/enterprise). As a lead developer, you'll need inter-personal skills on top of your coding.

Many take on this role to not only have the final say (or as close as possible to it) over technology but also to have the ability to steer the entire development team where they see fit. A senior developer may argue but it's the Lead Developer that puts their foot down. In this case, a Lead Developer uses the senior staff to guide their decisions. This can offer its own challenges but its own set of rewards outside of coding such as a happy team, a productive team, and ability to change age-old practices at the company (such as not using version control).

It's definitely a worthwile career for anyone that wants to do more than just sit in front of a text editor trying to get at the next problem. It's definitely a career for someone who wants to be a leader.

### Project Manager (management heat: 5/10)

A project manager can work anywhere, not just in a tech field but let's discuss a high-profile project manager in tech. For this role, you'd be required to know more than just tech, you're required to know people. This career step requires you to be more "manager" and less "developer" in order to keep projects in a row. And it's a god-awful job if you can't figure out what makes people tick in your team.

So first of all, you'll need to be good at estimating deadlines and by that, I mean, you'll need to be good at knowing what a developer really means when they say "a couple of hours" because in some cases it could really mean a couple of hours, in others it could mean "6 months and half a million dollars". It'd be your job to figure out which is which and how to prioritize the task.

The joy of project management is orchestrating the wealth of resources under your hands to get a job done. It's about knowing the right people and distributing workload based on who can handle it, who can do it the best, and who can do it the quickest as well as keeping a good rotation of projects in order to not fatigue developers.

The developer part of this job is basically knowing developers because you've been one, and knowing when "simple changes" become horrendous nightmares. I would say that it's also the job of a project manager to estimate time in such a way that no corners can be cut.

Unfortunately, PMs can get a lot of flack, and many people just "don't believe in them". I believe that the nay-sayers have never experienced a good one.

### Manager (management heat: 10/10)

A manager is, simply, a manager. In the hierarchy of things, they're above a PM, above a Lead Developer, and above a developer. But they're also almost the furthest from code (usually). As a manager, you becomes responsible for your entire team, your projects, deadlines, and on top of that, all of the managerial tasks such as discipline, hiring, team coherence, complaints, etc.

If that was not enough, you're also THE person to have to meet with other managers and represent your team. You have to fight for your team, get involved in office politics, and take the heat for any failures of your underlinks. It's definitely not a job for everyone.

If I was to describe this job in one word, you're the "Shepherd" and your developers are your sheep while your PM is your dog helping you keep your sheep in line. As the shepherd, you have to protect your flock, make sure it thrives, steer in the right direction, and possibly go running after that one stray sheep which is headed for the wolf's den.

Many find this job rewarding but it is far from coding. Many managers I've spoken to that used to be coders talk about the simpler times when they enjoyed "just coding". Some others talked to me about how they code as a hobby now, not as a job and it's not only more enjoyable but it enables them more input on what goes on in their team.

This career path can lead to bigger and better things as you become a manager of managers, a directory, vice-president, or a CTO (Chief Technology Officer).

## And much more

As always, there are no neat boxes to fit developers into but the main categories are clear and encompass 90% of development professions. If you don't know which path you'd like to go down, that's fine, you have all the time in the world.

I know plenty of developers that have been in the game for decades and still switch around and move around the field. It's the same for you.

title: General Advice
----
content:

To close off the chapter, I wanted to discuss some general advice for developers that want to become better developers. It's an important but difficult step that many struggle with. There's no clear path but the muddy path we're presented with does have some main points. I've gone over most, so let's jump into the last few.

## Testing

So you've heard me mention testing more than enough times to realize that it's an important part of a good developer's job. There are even front-end tests now for browser-based applications. That's how big they are in the dev world.

Testing in summary is a process of writing small programs that verify your main applications' behavior by testing smaller and smaller parts of it. Those kind of tests are called "unit tests" because they test a small amount of logic. Let's look at a sample NodeJS module which creates a "snake case" string out of a regular string:

````
module.exports = function(str) {
  return str.toLowerCase().replace(/ /g, '_');
};

````

To test it, we just need to try out a few strings, enough to satisfy that it really works. Testing usually requires a setup of a testing framework. There's PHPUnit for PHP, Cucumber for Ruby, Mocha for NodeJS, and so on. Here's what a Node test would look like for the function above.

````
var snakeCase = require('./snakeCase.js'); //our function
var should = require('should'); //node assertion library

describe('Snake case function', function() {
  it('should convert a sentence to snakecase', function(done) {
	var str = 'My sentence';
	var finalStr = snakeCase(str);

	finalStr.should.eql('my_sentence');
	done();
  });
});
````

Now, every time that test runs, it'll check if "My sentence" will really equal to "my\_sentence" when used with our `snakeCase()` function. A CI (continuous integration) system should automatically run these tests for you. For instance, travis-ci will download your entire app per commit, provision a machine according to your instructions and then run your test framework. That way, if you mess something up by accident, you'll notice right away. It's said that there can never be enough unit tests. Meaning that the more you know for sure your app works as expected, the better chance you'll have finding new and old bugs.

Now, tests don't need to be overwhelmingly comprehensive; however, there should still be a good amount of them to ensure the critical parts of the app work as expected. And this is one of those responsibilities a developer has.

Before, I've talked about using tests to "lock down" parts of an application. I wanted to explain myself a bit here about that. Development is a process and one part of that process, with testing, is "locking down" an app which is a way to ensure that the app is incrementally getting better and working while the older parts of the app don't break.

For instance, let's say we were expanding our string conversion library with a `camelCase()` function. Well, we've already "locked down" our snakeCase function, knowing that it works and has tests, so we don't have to worry about that part of the application breaking. If it does, we'll be notified right away meaning that we don't have to actively go back to double-check everything works. That may have been the case when you started as a younger dev, but now, there's no time to check every page, refresh it, and test it manually.

A fully tested app brings a peace of mind which nothing else can replace.

## Development environment

One of the new advents of modern web development is the development environment. Or rather, the re-buildable programmable development environment. There are tools like Vagrant and Docker that allow us to replicate the exact environment our application will use but locally in a virtual machine. This gives you unprecedented power because you'll have the ability to develop in a production-like environment without affecting production *and* you'll have an environment that you can reboot and rebuild in case something goes wrong.

This is like taking the idea of a Ruby version manager (that segments off the specific Ruby version for your app and its dependencies) and applying it to everything else that your application uses. From the database layer to background service, the development environment can emulate all of it.

There have been instances where I've found this very necessary. One of those instances was adding a Redis instance to cache data results from an application. I used my replicable dev environment and installed Redis on it. Whenever I messed up too badly, I could just reload the original configuration. When I got things right, I could write down my instructions into whatever tool I used to provision my virtual machine (a bash script, Ansible, Chef, or Puppet). Then, I could deploy it and use the same instructions to update my server. You see, you can just as easily use the same provisioning instructions to make updates to your production environment.

Another cool thing about a development environment is just how many frameworks support it. For instance, Symfony and Laravel (PHP frameworks), both have the concept of "migrations" (the ability to write instructions on database modifications with an "up" how to modify it, and a "down" how to go back), and fixtures/seeders (initial database entries used for testing). On top of that, they both allow setting an environment variable which can turn on/off various services, debuggers, and loggers.

Let me illustrate a day of using a dev environment (a proper one!):

1. do a `git pull` to get the latest changes to my application
2. `vagrant up` to turn on my vagrant machine (a virtual machine managed by vagrant for this specific project).
3. `vagrant provision` which resets my dev environment and runs provisioning which allows me to update my machine in case there were migration, seeder, or provisioner updates.
4. open up a pre-selected URL or IP address connected to my app. For instance, a `11.11.11.11` IP that vagrant registered in my `/etc/hosts`.
5. develop as usual and refresh my page to see changes in my test app.

It's definitely worth investing into especially when onboarding new developers who can simply install vagrant, get a copy of the app, and run it, being able to poke around, create new users, and do anything else on it.

## Version Control

Version control is THE thing that everyone mentions to newbies and suggest it to any pros that don't use it yet (chastise them  rather). Version control is a system that allows you to "store" version of your code. Imagine that every time you save, a copy of your file is saved in a server. On top of that, you can browse through the history of your file and go back and forth between versions.

Except things are a little more complicated and *much* better. For instance, you don't just version a single file, you keep your entire project. What's cool is that every time you make a change, you can commit that change (so no *autosave* into version control). Committing a change means that you're *sure* you want this change to be part of the official project and its history, collectivelly called a "repository" or "repo" for short. A commit allows you to add a message like "fixed parse error in WorkController.php" or even longer messages to list all of the tasks you've done.

Once you're done, you can "push" your changes to a server and your co-workers can can "pull" your updates to their repository copies. So the history of your project is present not only on your machine, but also on your server, and whoever else copied the repo.

So, you get the "version control" part right? You get to save, create a file history that you can browse. You can reset to an earlier commit or overwrite bad commits. You can even "tag" a specific part of your history with a version number. Such as `v1` and designate that as your official release. You can skip in the history list by those tags.

But there's so much more to version control. Think about those co-workers who can push and pull changes from the repo. The version control history works in terms of "deltas" or a written history of a file based on changes rather than saving an entire file with a copy every time. That means that you can merge your co-workers changes without messing up what you're working on right now.

There are some features to help with that process of colaboration. For instance, there are "branches". If you imagine your file history like a large tree that spans upward with a single tree trunk heading the way, the tree trunk would be the "master" branch or the main branch while the others are supporting. Unlike a tree however, a project history can branch out and then come back together.

Developers use branches to develop specific features that they can test out and work out without damaging the project's main history record. This can allow developers to start rewrites, refactors, or development of new features without pollutin the main history, while still allowing that developer to push out changes to the server and allow others to work on the same branch. A branch has its own history and when time comes, you can merge that branch into "master" and the branch's entire history merges into the main history with it.

You can also delete branches or just leave them behind for when you have time.

Not only that but with popular websites like Github (which allows Git management), you can use version control publicly and open source your project. Fellow developers can keep a personal copy of your repository and if they so wish they can issue a "pull request" which is basically a request to pull their changes into your repository. A better way of saying it is a request to merge their branch into yours. Thousands of open source repositories work under this system.

## What else?

Ask fellow developers on what their idea of being a better developer is and see what sounds good to you. Perhaps it's further study into the languages you already know, or learning a new revolutionary framework. Or it could mean getting back to the basics of computer science and exploring algorithms and data structures. All in all, being a better developer is half what you think about yourself and half getting a job done that lasts.

title: Ethics in Development
----
content:

When you first enter the web development field, it will be tempting to "get what you can" and screw anything and everything in the way but somewhere along the way, you're going to be concerned with more than just pay and technology.

One thing I often here developers concerned with is ethics, and this is probably why most developers cite that job satisfaction hinges on "doing something bigger" and being part of a company "that can make a difference". It's why there is constantly discussion about "disruption" and making the world a better place.

It's at that point where ethics come into play. Many developers ask themselves the same questions any other human being asks but they apply it to their job:

1. Is my job making a difference in the world?
2. Am I contributing to something I feel positive about or negative?
3. If I could switch jobs but keep the same benefits, would I? And what would I do it for?
4. When I work on a project, do I feel positively or negatively about its impact on the world?

It may sound very hippie but these questions are important to ask. In the words of a close friend, "Despite the money, it's not worth it."

Ethics and love for job are not necessarily linked but they can be.

## As a developer, you have a great deal of power

It may not seem like it but because the development market is a small pool while the demand is enormous, developers have a great deal of power when it comes to choosing a profession and make it an impact on where you work.

In a house analogy, it's a sellers' market and you're the seller of development services. That means you dictate who gets your services, for how much, and what you do with them. It's, obviously, not that simple but you get a lot of say in your line of work.

And remember that as a developer, you're usually the profit machine. Meaning that a company you work for will rely on your services to help make money. In many instances, your specific skills and efforts can translate to ensuring your employer makes several times over what you're paid. In fact, some figures state that in most extreme instance, your development work can translate to several thousand times over your salary (don't get your hopes up, it's not that common). However, still, unlike many "necessary evils" of having a company, development is the money driver.

For tech companies, this goes double. What does all this mean? Where you spend your time and your effort makes a difference. If you choose to go with unethical sleaze bags that you hate working for, you're not just sabotaging your personal happiness and possibly your career, you're contributing and making that company profitable at your expense.

Being a good or a great developer makes a bigger difference as well. If someone else will fill the position, fine, then they can have a potentially worse developer. If they get a good developer anyways, then at least you have the chance to make a difference elsewhere.

## Loving what you do makes a difference

Being ethically conflicted will make a big impact on your job performance. I've worked with several people that felt that way and any time the company introduced a new way to go around the rules or get better at what they do, there would be an internal groan amongst the entire team.

And that groan would translate into discussions about the company and finally, turn into jokes about what we told ourselves to sleep at night. This can be demoralizing and can visibly impact how we do what we do. The only thing that kept all of us afloat was the technology and our free range with it. However, such an environment is not guaranteed everywhere and thus ethical concerns can hamper productivity very much.

I've had a developer friend who worked for a company he hated before he switched positions. He was ready to abandon development altogether until he started working elsewhere and rediscovered the joy of development.

If your beliefs and values don't align with the company, your hapiness and productivity will plummet.

## It's not often talked about

It really isn't. Developers love to talk about money and technology but ethics and morality can become a buzzing background thought. Well, unless it deals directly with the technology we work with such as when internet rights are threatened, or open source software is threatened. But it's a discussion worth having.

Even blogs and articles brush over this information. Mostly, there is talk about the good things:

1. Startups that are doing the most eco-friendly things in the world.
2. Kickstarters that hope to solve the world's problems.
3. Big companies that are suddenly taking interest in making the world a better place.

However, everything else is too bound up in politics, religion, and other taboo topics that most developers don't want to engage in. The difficult topics end up being discussed outside of the tech sector.

So make sure to talk to, at least, yourself about what you're doing and where you work.

title: Preventing Burnout
---
content:

Burning out is an issue that all developers face. And younger developers are often not aware of. To put it simply, a burnout is a state where one is overly fatigued by continued over-exertion. A burnout, left untreated, can result in terrible consequences.

This doesn't stop from managers pushing, however, nor does it stop developers from continuously working away through a burnout.

## What is it?

The simple definition can stand on its own but let's explore the topic further. Where does it come from? How long does it last? Well, every developer has their own amount of resistance to a burnout but everyone is susceptible to it even those that don't think they do.

There are some symptoms that accompany a burnout:

1. continued fatigue. When you start the day the next day, you still feel tired mentally.
2. inability to focus on a task. You may be trying to program one thing but you can't seem to understand exactly what you're trying to do so you have reread instructions several times.
3. inability to do simple tasks. Given an easy programming task, you struggle to accomplish it via normal means and end up making a lot of mistakes.
4. physical symptoms such as muscle tension, headaches, itching/burning eyes.
5. irritability.
6. many tasks you're presented with feel either a waste of time and dull or extremely overwhelming
7. you have a grim outlook on your day.

It can be soul crushing to keep running through a burnout. There are developers that "run on fumes" for years without any kind of reprieve and that can express itself in further health problems, it will kill your happiness, and it will kill your development productivity very quickly to an all-time low. And I'm not being overly dramatic here either. I've worked with developers that nearly quit their careers over burnouts that they thought was general unhappiness with the field. After they were able to reach a normal state of being, they realized they loved what they did and had a renewed sense of energy about them.

I know for myself that I often reach the point of a burnout but have learned to curb that situation.

## The Cause

Before I get into remedies and preventions, let's discuss a cause for burnouts. The cause is in its definition, basically overexerting yourself without taking a break to recharge; however, as simple as it sounds, most of us don't internalize it. There are still young developers on forums that seem to think they're invincible. And by young, I mean junior, not age-wise.

There are some common causes that I'd like to explore with you.

Working long hours. Contrary to popular belief, working longer hours does not necessarily get you faster results. In fact, the longer you work, the more likely you are to make mistakes, degrade the quality of your code, and create problems. Even the popular eight hour work day is seemingly not the best approach to work. Sweden recently put seven hour days on trial with much success. However, that may not be an option for you. The important thing is to balance out your day and not work more than your allotted eight unless it's an emergency.

This means that, no more weekend work, no more "staying after five" or whenever, and no more working late at night at home just to get a project done on a deadline. But if you do need to work longer hours it should happen rarely and not be a habit. On top of that, it should be followed by a time of less stress and responsibility. Meaning that once you launch that long difficult project, take a break.

Taking on too much. Another good point is not to take on too much. It might seem inviting to volunteer for every new project but in the end, it'll lead to stress. And if it doesn't lead to working long hours, it will still lead to fatigue. Sometimes, it's inevitable but over-assignment should be a last resort. Prolonged exposure to high stress will definitely knock you out of the game.

There are other reasons but two those are the top ones. Along with that are less visible and recognizable ones:

1. working monotonously with no new projects and no real change in the form of the projects.
2. unclear job expectations.

## Solution

The solution is to never get to the point where you're starting to think you've burnt out. However, you may have already passed that point of no return. It's fine, we've all been there and we will all be there again. Let's talk about what you can do once you reach that point.

First of all, stop doing what's putting you in this position. If you've been working long hours, cut them back to your regular hours. If you have too many projects, talk to your PM or your manager about clearing your plate. If you can't, try to push the projects off as much as possible.

Next, try the quick-fix solutions:

1. whenever you're off work, go outside and away from electronics.
2. take a few days off to just relax and get away.
3. spend a weekend doing this you want to do, no programming.

But that will only keep things from getting worse. What you'll need to do is start changing the way you work:

1. Don't allow long work hours.
2. Speak to your PM or Manager and communicate with them about your workload.
3. Switch to a new project if you can.
4. Ask for recognition of the work you do.

And honestly, if you encounter severe issues with any of these points, start looking for a new job. You're worth it.

## Prevention

Lastly, let's discuss prevention. From the solutions list, you should already have an idea of what you need to do. But just to be organized, I'll go over it again with some extra tips especially ones concerning lifestyle because work burnout can be caused by outside influences as well. Prevention is probably the most important part of this chapter as prevention should slowly become a part of your life as a developer and internalizing the advice in this section will help you become a better developer. Because what's better than a developer who can handle stressful situations, can work sustainably at the same level, and rides high on productivity and low on burnout? Not much, and it's a big step toward become a better dev and moving along in your career path.

There are some main criteria that you should adhere to but make sure to tailor everything to your own specific needs:

- If you have time off, take it throughout the year to replenish your reserves. Vacations are great. Vacations away from electronics are better.
- While working, make sure to take breaks. If you follow the pomodoro technique, work for 20 minutes, and take a 5 minute break for a stretch. Go for a walk during lunch.
- Work only during your hours. That means no working through lunch, no getting extra work in at home at night, and no long hours. If you absolutely have to, make sure to follow with a replenishing activity.
- Switch up projects. Make sure to communicate with your superiors and try to switch up the nature of what you work on.
- Outside of work, get a non-computer-related hobby. It's very tempting to go home and code some more but make sure you have other things to do as well. Most high-profile developers do, from wood burning to writing and composing music.
- When job-hunting, consider the challenge in your future job. Don't pick a job that's too dull nor too chaotic.
- Keep an open communications channel with your supervisors about work. They should know if you're overworked or underworked or if expectations of you are unclear.
- Work out. Seriously. I'll talk about dev health later on but exercise is the number 1 way to get rid of stress and tension and to reset your mind away from work.
- Whenever you finish a big project, do a small celebration for yourself. Include others in on it, and celebrate your teams' successes as well. This goes double if your team doesn't celebrate anything, ever.
- When you encounter a problem you can't seem to solve, get away from your desk and go for a walk.

It all boils down to communication about your job and taking breaks from the computer. It sounds simple but most developers can't uphold even 2 of these suggestions in their workplace.

It's unfortunate for them and they WILL argue with you that working 15 hours a day is great for them and how much they love it but a couple of years down the road they'll be stringent advocates of 8-hours-only days.

Make sure that your voice counts.

title: Programming Myths
----
content:

Programming myths permeate the developer world as much as urban myths spread through high school. The non-tech media believes it whole-heartedly, young developers suspect something but stay in denial, and older developers know better, most of the time, until they start a whole new myth that serves them. Or a combination of the reactions may explain how you feel about them.

I wanted to dispell some of the myths and discuss what they really mean rather than what they have come to mean.

## The 10x

The 10x-er is a developer with such great knowledge that they can accomplish the work of 10 other developers of similar stature. It's a completely false idea but it's something media likes to write about. Mainly because we all like super heroes and a 10x engineer is a superhero/myth/legend among developers.

The reason why it's a myth is two-fold. One of them is the fallacy that's often attributed to project managers.

> Nine women can't make a baby in a month.

And the same goes for web developers, a real 10xer can't replace 10 developers. You simply can't assign 400 hours of work for a developer to figure out within a week. It doesn't work that way. To take the myth down a notch, let's think about a great developers. A great developer can save a lot of time with their current knowledge, coding standards, and some ingenuity. These elements should be part of every senior developer's box of tools. However, the perceived difference between a bad developer and a great one can make that great one look like a 10xer. On top of that having a team of developers fosters peer review, brainstorming, support and much more while a single developer can't do that for themselves. So, in short: you can't replace an entire team with a single person.

On the flip side, a single developer with the means and ability can write programs that replace 10 people easily, but that's not what the myth means though it's a much better definition.

The second reason the 10xer is a fallacy is associated with why this myth came about in the first place. I recently read a fun discussion about 10xers and how one developer was able to come into a long, drawn-out project that's been going on for several years and within a single month, turn it around, finish it, and make it better. At first glance, this developer could be credited with doing 3 years worth of work in a single month, and doing the work of 15 developers. That's definitely more than a 10x, that's a XXXxer. Truly incredible.

However, again, it's a fallacy. The reason why projects stall or become drawn out are rarely the fault of developers, let alone an entire team. Mismanagement, corporate inefficiencies, and office politics can make a simple project into a nightmare. From scope change, to unresponsive co-workers, other projects getting in the way, and the pace of technology, there are hundreds of potential hurdles to get through. Ones that PMs and managers are usually responsible for handling and even they sometimes can't handle all of it. Such hurdles can stretch a 3-month project into development hell that goes on for years.

When finally an outsider is hired at a terribly high rate and presented with a specific spec, the game changes. Scope change now requires new contracts, office politics had to have been settled by now, approvals have to be timely or already done by this point. Any delays or mistakes cost real-time additional money (not just fixed budgetted-for salaries). The developer also has a clean slate at this point, no more legacy software to deal with. Suddenly, the project is free of all of these hurdles and can easily be fulfilled. And voila, an outside contractor suddenly accomplishes more than the entire company could together.

In short: a 10xer is a scapegoat for accomplishments and an utterly simplified situation in which a single developer is made out into a legendary hero that others should aspire to.

## VIM and/or Emacs and/or Sublime Text will make you a better developer

There has been a strange rise of people using super-simple text-editors to write code. Vim is a text editor shipped and/or available for most operating systems in the world. It's available via the command line and recently via GUI as well. Emacs is pretty much in the same boat albeit a few years younger. Sublime Text took what these two offered and created a very powerful text editor that was simpler than IDEs (integrated development environments) but more user-friendly than the commandline text editors.

In truth, developers will try to persuade you that THEIR setup is better. It's just something we do. I use VIM, I recommend it, it's a wonderful experience. But I've used Sublime Text as well as many IDEs and they all work well. In fact, the difference in productivity was the setup of these editors, not the editors themselves.

There was recently a discussion about how Eclipse (a popular Java/C++/anything IDE) is slow; however, with some adjustments, it's an incredibly fast and wonderful editor. VIM experienced a rebirth when people realized that about 50 lines of configuration (not a lot, trust me) and some plugins could make the editor extremely powerful. Emacs is the same situation.

So it's really up to you to know what works. All I can recommend is that you learn as much about your editor as possible and adjust it to your specific needs. Look up how to customize it, what plugins can help you out, and how to make it as speedy as possible. That will definitely help you in getting bogged down.

But will it make you a better developer? No, just a less frustrated one.

## Language X is better than the rest

There is no holy grail of languages, in fact, every language serves a specific purpose (or many) and has a niche to fill. You can easily tell that by the number of users that use it for their projects. For instance, both Rubyists and PHP developers like to claim that their language is better while in fact, neither is. They both work a little differently, have a different development ecosystem and thus serve a different purpose. As much as developers love to bicker, in the end, it's all just a matter of preference.

Now, that's not to say that some languages are better at some things over others. It's common knowledge that if you want to write code that runs fast, VERY fast, you write it in C++ because it's one of the fastest languages that's still high-level enough that coding it in is not a struggle. If you want to code a website, however, C++ may be a pain and so you look at the web development languages instead, they do their job well. If you want to write interactive code in the browser, you'll have to stick with Javascript, no matter what you want to do.

## You need to know Math

Well, yes, and no. Mostly no. Taking Calculus III at College will not make you a great developer, nor a good one. It's completely beside the point. Will you be dealing with numbers? Yes, but that's just basic high school Algebra. At most, you'll be dealing with trying to figure out how efficient your code is in terms of the big "O" (which I'm not covering) but that's just Algebra II/III-level math and it doesn't come up on a daily basis.

So next time someone says, "You need to be really good at math to be a programmer!", slap them in the face (don't.). However, there are fields of programming where math IS important. One of them is game development where you'll have to learn the basics of matrices, physics, and angles. But again, that's just basic physics, some Algebra, and linear Algebra. On top of that, many engines handle this math for you already. And if you DO want to be more mathematical about it, there are a few courses that can get you up to speed within a few weeks.

But that's game development. Most other fields don't require advanced math skills.

## Developers have to know all the design patterns and algorithms

That's another no. In fact, there was an interesting discussion on Quora about real-world application of algorithms and one of the developers mentioned how they created an incredibly awesome matching system for users on a social network and after some time and study found that the matching system was, in fact, an algorithm they did not know about. However, these stories are rare.

What's less rare is people intuitively using design patterns and algorithms that they either forgot about and learned a long time ago, or they don't know about at all. Knoweldge of these can be useful but 90% of the time, algorithms do not make or break a good application.

On a side note, there has been a lot of discussion about how adherence to design patterns can lead to low-quality apps since many of them are misused or, since they're rather abstract, they do not fit the job. Algorithms have been debated for a long time as either completely useless at a higher level (application-level, where you code), or already implemented where they matter (such as in basic functions of the programming language you use).

## Offshoring code will destroy your career

If you're in the US or the UK, you might be hearing the scare of off-shoring code, the practice of having developers in other countries do the same work but for much less. Don't despair. First of all, certain countries definitely do have great developers who work at great prices (I'm looking at you Eastern Europe!); however, there is a simple matter of language barrier and luck that keeps projects from succeeding and ultimately costing a company more than it would have spent on proper developers in its country.

The reason for this is two-fold. One of them is that language does matter. Trying to explain nuances of business logic to someone who doesn't use English as their primary language can be difficult. It can also result in miscommunication which can result in a botched project. And that's a costly mistake. Especially if a developer gets frustrated by unclear clients and drops the project after getting paid. It's not uncommon.

And this is where "luck" comes in. The chances of successfully maneuvering the dark waters of offshored developers successfully is slim. Not only do you have to find a good developer, but you have to find a good developer that can speak english well, be able to follow your directions, and have a good employer (middle-party) as well. Offshore dev shops have high turnovers, bad management, and people that just want to make quick money. Often times even well meaning developers can be caught up in a bad situation and clients end up with a bad project.

What happens then? There are tons of offshoring horror stories but they all end up similarly. The client may try again and fail again, the client may run out of money and drop the whole thing, or, most commonly, the client will turn toward more reliable developers and dev shops in their country where at least they can enforce contracts.

## When you ship software, it's bug-free and doesn't need maintenance

Unfortunately for everyone, software is rarely ever "finished". Meaning that you don't just "write it once, and use it for life". The reason for that is complex but there are a few things to keep in mind:

1. Hardware changes all the time.
2. Underlying software (such as Operating Systems, browsers, etc.) change all the time.
3. It's impossible to know all the use-cases and ways an application will be used at the time of writing.
4. It's impossible to know if any underlying libraries/frameworks/etc necessary to complete the projects are bug-free and most likely they aren't.
5. People are not perfect and thus what they create is not perfect.
6. Adding new features can introduce unforeseen bugs in the entire system.

Clients often try to include clauses about unlimited support for a year, or even a lifetime of a product. Both of which are impossible to guarantee and do. OSes put out weekly updates and those are written by highly paid and highly skilled professionals. Website software and frameworks (like Wordpress) go out with new versions at a regular schedule in order to patch bugs (and improve it).

Imagine you wrote a Wordpress theme for a client. If they install a plugin that changes the way Wordpress works with your theme, it may introduce bugs. If the client updates Wordpress, it may introduce bugs. If the client adds specific content that you were not aware of at the time of programming (such as a 30-page manifesto with 500 videos), your theme may not work correctly with it. If the client doesn't change anything, the underlying software may be subject to security holes and issues which may, in the end, lead to a breach of their website, something you can't control.

In short, developing software is never done.

## Once you master a language, you're done learning

You're not because the second you think you "master" something, you'll find out there are a million new things to learn about it. For instance, CSS should have been probably the easiest "language" to learn (I use that term loosely here), yet there are professionals that dedicate their entire lives today in order to learn the nuances of it, how to exploit it, and make it work for them. The second you master the syntax, you'll learn about Object Oriented CSS (a way to organize your CSS such that it's easy to understand, it doesn't reuse styles without cause, with some other perks too), and then you'll find out about paint optimization (styling so that the browser takes less time to apply your styles), then there are animations, CSS preprocessors that allow variable use, etc. etc. And it keeps going.

And every language is like that. And the world is moving. Once you think you have a handle on one thing, you'll find the next thing to learn, and then you'll have to go back and update your understanding of that one thing because it just got a massive overhaul. Then there are "best practices" (a collection of practices that one should employ for certain programming tasks) which update constantly.

Basically, the learning never stops. You can't stop because if you do, you'll find yourself knowing legacy software that no one uses any longer. It's really not as scary as it sounds but it's something to keep in mind.


title: Programming Paradigms
-----
content:

Along with design patterns and algorithms, there is a thing called "Programming Paradigms" which is a style of computer programming. Much like a design pattern but it may or may not be tihgtly coupled to the language itself. Some languages support multiple paradigms.

In a way, paradigms are a lot like design patterns, they set a certain way of doing things; however, unlike design patterns, they force certain ways a developer can interact and use a language.

All in all, there are 4 main paradigms used in web development. Knowledge of them can help you decide which language to use and how to take full advantage of it. Trying to force a paradigm into a language can make it a pain and an excrutiating experience.

## Procedural

Procedural is the most straightforward programming paradigm in the list. You write code and it gets executed, line by line like so:

````
$numbers = array(1, 2, 4, 6, 3, 9);
$largerNumbers = array();
$smallNumbers = array();

foreach($number in $numbers) {
    if($number > 4) {
        $largerNumbers[] = $number;
    } else {
        $smallNumbers[] = $number;
    }
}

if(count($largerNumbers) > count($smallNumbers) {
    echo "This array has lots of big numbers!";
} else {
    echo "This array has lots of small numbers!";
}
````

When the program gets loaded, each of these lines gets run. You have the basic loops, control flows and everything else. You can even use functions. The point of procedural programming is to break down a task into variables and dsta structures as well as "subroutines" which can also be called a "function".

Most developers learn procedural programming first (unless you start with an incompatible language), mainly because it doesn't require special knowledge of classes, methods, private and public variables, etc.

Learning procedural programming helps you learn the basic tenets of programming. There *are* limitations to procedural programming and it has a tendency to become "spaghetti code". It's difficult to keep up a large project since everything runs together. A large enough application and you'll start to rewrite lots of code that could be reused. You'll also run into issues with redeclaring variables, overwriting functions, and other problems.

To put it simple, even with tools that help import outside files, you're working in a global namespace with everything. Functions do still have their own special scope (ie. variables created in functions do not necessarily exist outside of the function) which helps.

## Object Oriented

OO is the big dog mainly because of its basic philosophy. Instead of writing one big file (or several with imports) of logic that goes "do this, then do that, and then do that, and then run this function", we have "objects". Objects are groupings of functions and variables.

For instance, let's say you have a "connection" object (also called a "class"):

````
class Connection {

    private host;
    private username;
    private password;
    private db;
    private connection;

    public function __constructor(host, username, password, db) {
       $this->host = host;
       $this->username = username;
       $this->password = password;
       $this->db = db;

       $this->connect();
    }

    private function connect() {
        $this->connection = new PDO('mysql:host='.$this->host.';dbname='.$this->db, $this->username, $this->password);
    }

    public function sql($sql) {
       $results = $this->connection->query($sql);
        return $results->setFetchMode(PDO::FETCH_ASSOC);
    }

}
````

This looks like more of a declaration of how things should be done than actually any "doing", and you're right. OOP helps you declare these objects taht discuss a way of using them. Now that we have our blueprint, let's see what we can do with it. We can use this blueprint to create several connections that behave the same way.

````
$app1DB = new Connection('localhost', 'read_only_user', 'password!', 'app1');
$app2DB = new Connection('localhost', 'read_only_user', 'password!', 'app2');
````

As you can see, this is much more organized than using simple functions. This is a great way to mix procedural (step-by-step) with OO patterns as well.

Some languages, however, don't allow that. C++, for instance, depends on a main loop so somewhere in there, there will be a main object with a main loop that will call to the rest of the codebase. A good example of a strong OO language is C\#.

## Declarative Programming

Declarative is definitely an entirely different beast. Declarative, as the name betrays, is programming where you declare what's happening but don't necessarily discuss *how* it happens. For instance, let's discuss HTML, which is considered somewhat declarative.

````
<body>
	<div id="something">Text</div>
</body>
````

In this context, you're declaring how a View should look like, but you're not discussing when the DOM should be drawn, nor how it should behave, nor what happens when to it. You simply declare "this is what it should look like". A better example perhaps would be SQL. All SQL is declarative. An example may help you understand better what declarative programming is like:

````
SELECT * FROM users WHERE rating > 5
````

In this context, we're declaring what we want (all the data for all users that have a rating higher than 5) but never do we declare *how* it should be gotten. In fact, if you're working with SQL right now, try running `DESCRIBE` right in front of your SQL command to see how the underlying engine is trying to figure out the best and most efficient way to retrieve your data. Different SQL engines retrieve the data differently and allow for different types of searches.

What's great about declarative programming is that it hides the *how*. Unlike procedural programming where you have to specify every step or OO programming that requires declaration of object interactions, declarative programming is concerned with the results.

## Functional Programming

Functional programming is VERY hot right now, so hot in fact that PHP, C\#, and Java have added features to their languages in order to help use this paradigm in their respective domains. The most known functional language is Haskell; however, Javascript is a strong contender as well.

Functional programming is technically a subset of Declarative Programming; however, it's difficult to associate the two when Functional programming looks and feels more like an improved way of doing procedural-based programming. For instance, Procedural programming uses `for` and `foreach` loops to iterate through data while functional programming uses recursion which is where a function calls on itself in loops in order to create a result.

Here is an example of calculating a factorial:

````
function factorial(num) {
	if(num < 0) {  return -1; }
	else if (num == 0) { return 1; }
	else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(15));
````

Instead of using a for loop to count down from 15 until 0 or 1, we use the function itself to keep calculating the next number until the last one is calculated at which point, we start multiplying everything together.

Functional programming is definitely cool and one of the best parts of it is the idea of encapsulating small bits of logic into functions. Meaning that, every function is a small but powerful piece of code that can be easily tested and will "just work" every time. You can then chain these functions together. Here's a javascript example that works with "streams" and the popular Gulp build tool:

````
gulp.task('my-task', function() {
	return gulp.src('**/*.css')
		.pipe(minify())
		.pipe(concat('my.css'))
		.pipe(dest('/build/')
	;
});

````

In this example, we're using a stream (imagine, for the example, an array of files), which then cascades down through the functions. First, it gets minified, then it gets all added into one big file called `my.css` and finally, it gets saved into a `build` folder. Each of those functions (minify(), concat(), dest()) can be simple on its own but together, we can create powerful pieces of logic.

## Event-Driven

Event driven programming is where something happens (an event) and a piece of code gets run. Javascript is a wonderful example of an event-driven language, it's how it started. Javascript can latch onto elements on the page and respond to various events like so:

````
var myEl = document.querySelectorAll('#myEl');

myEl.addEventListener('click', function(e) {
	console.log('my element was clicked');
	e.preventDefault();
});
````

In this example, Javascript tells the browser to add an event listener (a function to be run) for a `click` event. When a user clicks on that element, the following function gets run. The `e` stands for event and information about it. By doing `preventDefault()`, we're preventing the browser's default event function to run.

Event driven programming usually takes place where interactions are required to run a piece of code or code requires some sort of interaction to operate correctly. This can happen in the browser, or for any other programming that your computer is running.

## So which is best?

There is none that trumps them all but generally speaking, Object Oriented is THE paradigm for large-scale applications. It helps keep the code neat and tidy. Functional programming is gaining tons of traction because of its simplicity and because of the overuse of OOP and the design patterns associated with it.

In terms of what you should learn, I believe that the aforementioned two are the most wonderful advanced topics to tackle. Procedural programming, in my opinion, is where you'd get started anyways so there's no reason to dwelve on it for too long. Declarative will become a part of your routine if you work with SQL and if not, there's always HTML.

And event-driven programming is a given for any sort of interaction-based programming with Javascript and the browsers, it's unavoidable, unless you go with a framework that does all the dirty work for you.


title: Languages to Learn
----
content:

I wanted to have a fun little chapter so this one's it. I'd like to discuss the languages that are good to learn not just because of their usage but also because of what they can teach you along the way. Generally speaking, I'd stick to the languages I introduced in Section II Learning; however, there are times when it's definitely worthwhile to venture out and learn something new. Whether it's a new programming paradigm associated with a programming language or it simply introduces a different way of thinking, it's definitely worth learning more.

Without further ado, let's discuss when there is to be learned.

## Another Web Dev language

So I wanted to tackle this first. You might be thinking, "But I already know Ruby, why would I want to learn PHP?" Good question. Let's go over the learning advantages one can gain from getting venturing into the land of competition.

### Ruby

First there is Ruby. Ruby is interesting in the way its dependencies are setup. For instance, one can lock down not just a Gem they need for the application but also a Ruby version. Using rbenv or RVM, one can switch Ruby versions on the fly.

Another interesting aspect of Ruby is that it's a "spec language", meaning that there is a spec written as to how the language operates. This resulted in several ports of the language like JRuby (Java version), Iron Ruby (the .NET version), and its regular version.

There are also less objective reasons to learn Ruby:

- Beautiful syntax.
- VERY tight community of developers that support each other.
- Integration with UNIX makes it a prime suspect for command line tools or tools that work with the OS directly
- there are TONS of wonderful projects that run it (like Capistrano and Vagrant)

### PHP

Next, there is PHP, the age-old rival. PHP is rapidly reinventing itself and probably the coolest part about it is the fact that it's becoming super robust. Especially in its class-systems. PHP is a wonderful way to enter the OOP world with its C-like syntax and full-range of capabilities.

There's also the fact that PHP runs the popular Wordpress CMS so learning it is a great way to introduce yourself to the most popular Blogging/CMS platform in the world.

My less objective reasons for learning PHP:

-

### Javascript

Not only is it the only front-end programming language but it's an interesting back-end language. Javascript is by far the best way for a web developer to learn functional programming, prototypical programming, and about streams. Those three aspects of JS make it a prime candidate to get to the bleeding-edge by learning age-old accepted methods (streaming is a necessary part of Unix systems yet it has *just* made its way to back-end/front-end programming).

These three things will change your outlook on everything. JS is also all about ASYNC operations, and event-driven programming. As you can see, wherever you use it, you'll encounter a new paradigm to work with.

Outside of that, JS is rapidly becoming a "write once, run everywhere" language, more so than Java, and thus you can use it to power Arduino, your browser, desktop apps, servers, or command-line utilities.

### Python

I've already discussed Python as a back-end development language that originated as a multi-purpose language. It's important to note that Python is used for a number of command line utilities, and in fact, a lot of software supports Python-based plugins. For instance, Blender (a 3D rendering engine), Sublime Text (code editor), and VIM support Python plugins.

What's great about Python is its procedural programming application as those plugins. With a few lines of code, you can achieve a lot of power.

### C\#

C\# is sometimes called the "C++ for the web". It's true in some way and false in others; however, learning it can bring in a lot of insight as to why developers chose to go with C\# despite its platform limiations, and why some developers hate it. Most of the time, C\# is hated by people who hate Microsoft but outside of that, C\# is a wonderful language.

It's a language that works mostly OO with the ASP.NET MVC framework or as procedural using ASP.NET WebPages. Both of them are ripe candidates to learn this very mature language.

C\# is also statically typed and that's definitely worth getting into.

## C++

C++ is a multi-use language, one that can be used for just about anything. In fact, the OS you're running right now is written in it, so is your browser, your hardware drivers, PHP's engine, and much more. In fact, it runs most of the world's applications.

The best part about learning C++ is reinventing the wheel. C++ is as low-level as most developers get since beyond that is only C, Assembly, and machine language and due to the nature of Compilers, there's no reason to go lower level than C++ (in 99.9% of cases). Learning C++ can teach you about the fundamentals of Computer Science from using efficient algorithms (that are already implemented in most other languages), to building your own data structures.

The coolest part of C++ is just how much it's used today, and everywhere. You can use it to write video games (the Unreal engine, in fact, uses C++) or command line utilities. It's definitely worth learning as an OOP language as well. It's complicated but VERY powerful. It can imbue a sense of responsibility when writing it but it can give you an appreciation for all of the work done on higher-level languages in order to make them easier to use at the penalty of speed.

## Haskell

Haskell is an academic programming language that entered the mainstream. It's touted as the language that you learn and it'll change your life. It's a purely functional language meaning that it enforces even the most rigid functional paradigm rules like immutability (inability to change variables after they're set).

I haven't heard of any other language talked about as much and it forces you to think in terms of recursion and function chaining.

## Java

Java is another multi-purpose language. It's similar to C# but it's actually cross-platform. The great thing about learning Java is understanding why enterprise software is written in Java. It becomes quickly apparent that it enforces a certain amount of decoupling, so much, in fact, that large teams of people that can work on the project all at once without interfering with each other.

## Shell

Shell is the language of the command line. It's used to write "bash scripts" which are able to run various commands as if they were typed in one by one. Learning bash is great because it helps you understand how to operate Linux and Unix-like systems. Not only that, but Shell helps you operate faster in the command line.

But what about everything else? Shell uses streams and is efficient at it because Unix uses streams. With some learning, it can help you learn how chaining numerous very simple commands can produce an indistinguishable output. For instance, Shell can in one command bring up a list of running processes, select only those that have a search term in it, organize them alphabetically, and save them. Yet all it employs is: search, sort, and save. Combinging that with other some other commands, you can create something exponentially more complex just by chaining simple commands together.

## Others

There are many others worth looking into like R (for mathematical programming), Go, Objective-C (to make OSX and iOS apps), and so on. But it all depends on your secondary focus. Learning Java and Objective-C can help you get into mobile app development while C++, C\#, and Python can help you get into game programming. Javascript is starting to take over the world so if you don't know it by now, it's a wonderful addition.

If you've worked with startup-y languages (JS, Ruby, and even PHP), it's definitely fun to try out the enterprise-y, statically-typed, compiled alternatives (Java, C\#). If you want to learn about general computing and computer science, C++ is the way to go. For more utilitarian applications, Shell and Python can help you out.

If you want to learn purely programming paradigms, I'd suggest JS (despite it not being pure "anything), Haskell, and C++ or Java for OOP.

Every language has its place.

title: Legacy Software and Technical Debt
---
content:

The idea of technical debt is tightly coupled with legacy software and both are concepts that are important to developers that want to advance in their field. Dealing with and masterly using both concepts can help create applications with extended longevity.

## Technical Debt

Technical debt can best be described in terms of actual debt and investment. Debt comes from taking out money that you promise to pay back one day. The reason for taking that money out can be any, from paying off bills to covering unexpected expenses, to getting principal for investment.

In a sample scenario, let's say that a person, Susan, borrowed $500 to pay her bills. She'll pay back her debt over the next several months. She did that because not paying her bills could put her in a much worse situation, like have her electricity or water turned off. She pays an interest on what she borrowed. The reason she could not pay her bills, in this situation, will be bad budgetting. If she keeps this up, she'll have to borrow more and more until debt will overwhelm her. If she fixes her budgetting issues, she'll be debt-free within a few months at little extra cost (the interest).

What we're describing in the scenario is normal debt usage. You borrow money to cover an expense that you did not have money for due to bad budgetting (or bad management/project management), and pay it back over time. If you keep up the bad budgetting, you'll get to a place where you can't pay the debt.

In another scenario, Susan paid off her debt; however, her car broke down so she borrowed $500 to fix it. Because of her new budgetting expertise, she was able to pay it off within a few months at little extra cost.

Such debt is useful then because it staves off a worse situation by applying a quick-fix to an unexpected situation. It also means that Susan had to realign her existing budget to pay off that debt despite the fact that she had done no wrong of her own.

In our last scenario, Susan borrows $500 to get a new car part. She did so because the new car part will not only make her car run faster and smoother, but it will also keep her gas expenses lower. If her old car part broke down, she knew that it would damage other parts of the car which would mean the repair would far exceed the debt. Thus, she invested the $500 into her car in order to save money in the long-term. She still had to adjust her budget to pay off the debt but after she paid it off, she found herself having extra money every month from her savings. On top of that, she got to work a little faster each day because driving more than 60 on a 65 used to rattle her car, but now, she can easily ride the speed limit.

This is investment debt. It's a debt purposely taken out to make more money, pay off the debt, and be left with more money than before the debt.

You'll notice one of the most important parts of debt: paying it.

The problem is that with money, there are numbers to show us how much we owe. If you check a credit card account, you'll get the amount you owe, and you can pay a specific amount each month.

With technology, things are much muddier and misunderstanding technical debt can lead to a technical "bankruptcy".

Let's start with a scenario where Susan is a software engineer working on a project.

In our first scenario, Susan was behind on her work because of previous projects. There were some problems with a client, content was delivered late by a week, and so she's left with a tight deadline. Because of a tight deadline, Susan opts out to pull a couple of all nighters in order to quickly finish up her work by her deadline. Susan did not do her best job, people seldom do under tight deadlines and with little sleep. However, a lack of proper abstraction, properly DRY code, and tighter validation meant that she incurred **technical debt**. Basically, she created a quick solution to a problem but at the cost of the project's longevity. Over the next month, she refactored her code to use proper classes, eliminate redundant loops, and write tests. In this way, she paid her debt.

Technical debt is basically a way to cut corners, or not properly implement a solution in order to save time. This is fine to do. However, if one continues this behavior, they can get to a place of **technical bankruptcy** where "quick solutions" lead to an ultimate death of a project where touching any part of the codebase while retaining all functionality is difficult. It's a place where a refactor is no longer possible. In this scenario, Susan was forced to introduce technical debt due to project management.

Let's consider a different scenario, a similar one. Susan finds herself in a situation where either a system breaks or a manager overpromised on features and now a mission critical feature has to be launched within a couple of days. Despite Susan's protests that a proper solution will take at least a couple of weeks, the manager pushes to "get it done, no matter what". And while this kind of logic works in Star Trek, it doesn't in the tech world. Susan is forced to introduce technical debt as an emergency. In this case, it may not have been anyone's specific fault (such as during a system break); however, the debt is still incurred. If Susan is not afforded her original two weeks' estimate to refactor, the debt will stay. And both reasons for the debt are valid. A system breaking needs to be fixed ASAP. A client who signed a contract with the company and threatens if it's not fulfilled, must be fulfilled ASAP.

Unfortunately, to managers, the debt is invisible. If they see a solution and it works, the job is done in their minds. As a developer, remember that your job is not done and look at the long-term. If you need to add features quite frequently, technical debt will slow down the "quick fixes" to a halt within no time. It's unacceptable to keep working in a "quick fix" survival mode because it in the end kills the application itself. Here are some symtomps that your application is arriving at this point:

1. trying to change code in one part of the application affects an unrelated part of the application.
2. there are no tests to make sure that everything works as it should.
3. random bugs pop out of "nowhere".
4. adding a new feature to the system takes progressively longer due to the system's complexity.
5. features tend to get more "impossible" to add due to the system's growing structure.
6. the code doesn't make sense when you look at it.

Lastly, there is one type of debt, the investment debt, that's purposefully introduced. Let's go back to Susan. She found herself another job at a startup company because she was sick of poor project management and "putting out fires". The startup said that it wants to build a great product that will stand the test of time, especially when it comes to code rot (the decrease in quality of code over time). It said, "no more patching". Susan started her work happily, however, her first order of business was to rapidly code a product. They wanted her to cut all corners, use 3rd party libraries to speed up the development time, skip writing tests, and "screw architecture". All the while making it fast. She imagined a nightmare until she was told about the reasons. Investment debt can be a very valuable tool, it can:

1. bring a new product to the market right away to test out its viability and gain initial adoption.
2. test out a feature of an existing product.
3. introduce a feature that will help the company gain profit in order to continue, expand, or secure the company.
4. create a working prototype to introduce to an investor, board of members, or wherever else.

When Susan went to see her boss, he explained that they're trying to launch before their competition and gain some initial users that could help fund the company. The product could also help new investors to come on board. He also explained that after the initial launch and testing, her team will have its time to write a scalable, managemeable, and well-architected product in order to keep the application running. In fact, another employee had been working on a platform to use for the rewritten product.

In another company though, founders may push developers to keep adding features instead of going back, or they may be pushed by investors or whomever to do so.

So finally, we get to our "debt bankruptcy" where you've worked on an unamangeable project, pushed to your limits in quick fixes and patches, and are now dealing with a big app that has all the features the company needs but is at the brink of destruction.

However, we've so far discussed the "money-like" debt, but there are debts to consider:

1. locking down to a platform. If the platform doesn't update to your needs or lacks the features you require, it becomes a "debt" that would require a complete rewrite for a new platform to be fulfilled.
2. having any kind of a dependency. Dependency means someone else has control over it, just like a platform it may not udpate or may lack new features. In fact, it *could* update but so much that you can't catch up. A dependency then becomes a "debt". You're saving time by using a 3rd party library but incurring debt by using it. With every update/change, you may have to pay a little of that debt to keep your app up to date.

To summarize these dilemmas, let's figure out how to deal with debt:

1. inform your manager or PM when a deadline or a project will require technical debt. Explain to them what it means (mention rewrites and refactoring)
2. take responsibility over the technical debt and pay it.
3. recognize where debt is inevitable, necessary, or can be to your advantage otherwise.
4. when choosing a platform/dependency, stick to well-known ones that are likely to keep existing and update your dependencies when you can in order to not fall too far behind.
5.

## Legacy Software.

Legacy software is a mix of that "debt bankruptcy" and can apply to being locked down to a platform that is no longer moving. The debt may become so great that the company will declare "bankruptcy" and start all over. It's more common than you'd think. Twitter itself started as a Ruby application. Ruby could no longer fulfill Twitter's feed so they declared "bankruptcy" on their application and wrote a new one from scratch using Scala and a combination of other languages. Facebook uses PHP and to push it to its limits, they've also started working on their custom PHP implementation. They continuously pay for their debt by improving their platform to meet their needs at which point, the debt is no longer there.

So what happens to that old software? It becomes "legacy software". Legacy software often makes us thing of "time long ago". It makes us think of Java, of Windows XP and Internet Explorer 6, it makes us think of large dusty computers with code written in the 90s. And you're half-right, there's plenty of those and plenty of companies hiring new developers to completely rewrite their application. But until the rewrite is done and every feature and every user migrated, there's still "legacy software", the old version, to deal with.

Legacy software is a fickle. It *always* feels old, terrible, and you're wondering who was drinking or smoking what when they wrote it. Often times, we get to look at our own software become legacy for one reason or another and so we realize just how far we've come from it. The problem is that it *works* for its purposes right now and it's difficult to move away from that or justify a rewrite.

Imagine a manager's position on a decision like this one. After hearing about the current system's limitations, he or she has several different options. One of them is to ask the developers to write a better system with modern methodologies, platform, and libraries. The plan to make the modern version of the software is a difficult one to follow and we can go over that. After all, you may be tasked with this yourself.

### Starting Over

One of the inevitabilities with legacy software is starting over. There are still companies out there running obscure old versions of hardware and software because they can't justify a rewrite. The investment they made was so large and vast that paying very high salaries to developers that can fix bugs and problems year after year is cheaper than starting over.

However, for most companies, that is not the issue. Some hold out a decade, some two, but it *will* happen.

But what does it mean starting over? It doesn't just mean "rewrite the same exact logic but make it work on X better language", not at all. It's a time for spring cleaning, it's a time for re-evaluation of the features, and time to hypothesize where the application will go in the future.

One of the first things to do when doing a rewrite is analyzing the legacy software. Here are some things to look for:

1. why did the software reach the end of its life? Was it a technological limitation or code limitation?
2. what are the most used features of the application?
3. what are some features that are never used?
4. what were some features that could not be implemented over the years **because** of its limitations?
5. what parts of the software do most features rely on and how do most features work?
6. if the underlying platform could do anything you wanted, what would be the ways to improve the software as far as code ande execution goes? Would it benefit from concurrency, asynchronous calls, or lower-level language usage to speed up the execution of the most vital code?

After an analysis is done, it's time to figure out what can be cut out and what the minimum viable product is, or in other words, what's the minimum our new software has to be able to do in order to replay at least a portion of the legacy software.

Many times, the legacy software includes features that were added long time ago when it was still a code baby; however, since then, no one had a reason to remove them, despite them not being used. Some of these extra features can cause slow-downs, or can hamper advancing the application itself because no one really knows if they're used or not.

However, there are features that excel and drive the masses to run the software. These features should be paid extra attention. They should be analyzed for improvements and where the bottlenecks are. And how the next platform can make these features even more usable. These frequently-used features are generally what you'll want to use for your MVP (minimum viable product).

When it's time to gather all these features and set a plan for your new application, there's also time to evaluate future features. This is the kicker, and this is one of the reasons why you're rewriting. Legacy softweare can often feel like a shackle with a chain soldered to a sky-scraper. Well, now you're free.

Ask your management, other developers, and yourself, what are some things you want to add but can't? What are some frequently-requested features that were never fulfilled? What technological limitations does the software hit performance wise and usability-wise? Those questions will help you steer the development to the right technology choices.

The reason why this is important is because you're wanting to push off the time when your new software becomes legacy by as much as possible. Let's look at a sample scenario.

**Our Scenario**

Susan from that new startup has worked there for several years and has overseen the development of more and more features, and witnessed the platform slowly become disorganized and slow to a halt. The management was already aware of a rewrite because of a pivot in certain aspects of the business as well as wanting to restart the product with better features.

Susan correctly identified that the restart and development of certain features was no longer possible because of the platform's lock-in to their programming language, platform, and the application's current limits. After getting the go-ahead, Susan started to work through the legacy software to figure out what to change in the new software.

For instance, several old features like a forum portal, application widgets, and an API for the latest finance information were not used by the users. The API barely got any hits and all of them were internal. The widgets were a bust, and the forum was a ghost town. Nevertheless, all three major parts of the application have been supported and reach out into the core of the app.

Several wishlist features could not be fulfilled because of the application's structure as well. One of them was a better API that could serve data faster and work more comprehensively. As it was, the API dependent on classes and structure that was utilized at the genesis of the app, classes and structures that did not work well and would break at any change.

On the flip-side, there are several features that the users sign up for. The crown jewel of the application is a no-nonsense financial spreadsheet app used for home budgetting. Users have been asking for some group permissions features in order to share their budget with others, temporarily or otherwise. But it's been impossible due to the structure of the User database and the way the user class was handled.

After putting together her list of wishlists and cuts, Susan decided that the API portion of the application will be its own sub-app, running on its own platform. Since it's data-driven, it did not require to be part of the main application. On top of that, it would help keep the API features separate from the crown jewel's features.

She chose to work with NodeJS for the API due to its ability to send out several queries at once without blocking, and allowed very non-nonsense, quick after processing. That would allow for rapid prototyping, quick rewrites, and being able to develop the API as a useful application of its own without polluting the main application. She also designated this platform to launch any other API-driven apps that didn't require the main codebase.

For the main application, Susan decided to go with Ruby because of the way it could handle general math computing required by most of the application but also because of Ruby's agile development that could help keep the application modern. She needed the heavy computing aspect of Ruby in order to facilitate an add-on feature to the spreadsheet app, a general "advice" engine to help improve user's budget that relied on expert advice, calculations derived from the user's own activity, and the patterns instilled by the users at large.

She also realized that to keep up with the requirements of the modern world, she would have to expose a robust API in order to create a front-end application that could increase usability.

Her front-end skills lacked in some areas so she did some of her own research and delegated the rest of it to a front-end expert on the team. He came back suggesting the use of ReactJS, a Javascript framework that was used by Facebook. It not only had strong backing (FB), but it suited the spreadsheet structure of the app which other frameworks could not handle. On top of that, ReactJS had a ruby gem that would allow them to use React's templating on the back-end.

In the end, Susan had to cut some of her ambition down and postpone the development of the NodeJS API but she was able to get started with the Ruby application and slowly replace the legacy system's implementation.

**what it all meant**

Susan was faced with a lot of tough decisions and you will be, too. Sometimes there won't be a clear cut MVP, sometimes managers will push to have old features reinstated believing that someone will magically start using them.

She may also have been faced with running tests to see how users would react to changes and figure out what's missing where and if her idea for an "advice engine" would even be welcome.

That's all fine. Luckily, she wasn't faced with the worst case: not being able to start over.

### Patching the sinking ship

I talked about the manager of the company having two different decisions at hand. One of them was starting over. The other one I will discuss now, patching the sinking ship. It basically means making the best of what the current platform can offer. The reasoning behind it can be numerous, from saving costs, to delaying until a new MVP is created, it could also happen when the cost of a new system is not yet justifieable. It's one of those situations where you can be frustrated about it as a developer, having to support an older system, but as a manager or even a Lead Dev, you may have to make decisions that are good for the company, not necessarily good for the application. There is nothing bad about it but it can be annoying as a developer. Try to see the bigger picture.

Another reason could be that the older product *is* salvageable. There are certain things you *can* do to patch up the hole in your software and possibly even refactor, bit-by-bit to bring it up to speed, reintroduce coding standards, overall make the application a joy to use again (or at least make it bareable!).

Here are some things that will help you tighten up the app a bit:

1. Introduce proper testing. Testing will help make sure the application works despite any pocking, and refactoring you do. This makes the process easier because each time you make a change, you'll be able to verify the application working.
2. Start refactoring smaller portions of the app. This helps you gain some momentum while updating the database.
3. Make changes to make the app's code more manageable, but don't change the behavior. This is so that you don't have to introduce additional complexity until the refactor is done.
4. Section off parts of the application to do bigger refactors.
5. Break up the app into smaller sections. Try to untangle spaghetti code into small parts, write tests to confirm they work, and keep going.
6. Develop a reusable dev environment so that you can test and retest your code.
7. Utilize a CI cycle. Meaning that you have an automated code tester and safe deployment strategies.

When it comes to refactors, you'll have to definitely consider if certain classes are redudant, or if they can be reclassified. Abstraction is your best friend as well, especially in this process.

Remember that patching should be an iterative continuous process, not a complete immediate overhaul (then you might as well start from scratch). Employ design patterns to the best of your ability and look up design patterns for your particular language framework in order to find out what people did to make *their* app work long-term. It can be enlightening. For instance, many frameworks offer the use of adapters which help plug into external services. Abstracting out external connections from existing controllers into adapters is just one way you can make your application neater.

Patching up might not be a bad thing because during the process you'll learn a lot about where you went wrong with the initial architecture. It could easily tell you if you've been neglecting the framework's inner features or if you've been too stuck with a framework and forced your code to adhere to it that you sacrificed achitecture that works for *you*. There could be other indicators like absence of critical tests or remnants of the app's prototype from years ago that never go audited. Or it could just be the overuse of a specific pattern that no longer fits the way the application works.

All of them are valid considerations and should be analyzed. You don't have to spend hours pouring over it but be mindful of how you wrote code and where your code is headed today.

But seriously, write tests.

## And everything together

Last lesson I'd like to bestow is that nothing is as cut and dry as what I write about. Technical debt can be difficult to spot and distinguishing between "good" and "bad" debt even more difficult. However, as a developer, you should always be vigilant and balance out the amount of crud you accumulate in your application as a result of faster development or faster application deployment.

As far as the legacy application stuff, be aware that your ultimate solution may consist of full-rewrites in some parts, and patching in others. I personally worked at a company that slowly, one-by-one moved out non-critical application functions into smaller rewritten apps until finally, all that was left was the main "engine" of the app. And even that was on the verge of an overhaul.

Oh, and be kind. The person that wrote the legacy software (if it wasn't you), is probably WAY better by now, and would probably be ashamed of that heap of garbage you're looking at now! :)

title: Personal Projects
----
content:

Part of the life of a developer is working on personal projects. They're important because they're a sandbox of ideas, expression, and learning. It's the equivalent of a gym for sports athletes. It's where we practice our cutting edge skills, try out new frameworks, and use architecture patterns that probably don't make sense anywhere else. It's just how lion cubs practice hunting by playing games with their siblings.

That is, until that knowledge comes in extremely useful. You see, more often than not, honing our skills via personal projects has real-life application to your work. That new framework you tested may come in handy, or perhaps it sparked an idea on how to solve a current problem. Better yet, your side work could become crucial to your main work as a dependency.

Regardless of how you get into it, working on personal projects is not just helpful but rewarding. It can help stimulate creativity, stave off burnout (by helping you vary what you work on), and even give you a better place to show off your skills.


title: Dogfooding
----
content:

When working on personal projects, it can be difficult to keep focus. In fact, one of the most common jokes between developers is the fact that we all have a big number of half-finished, non-functioning projects that we all swore to get back to one day but didn't. And you'll be there, too. One day, inspiration will hit and you'll hit the ground running until you're tired at which point you'll leave that piece of ground forever.

The idea behind starting a project strong and keeping it up is that of "momentum". Momentum is the steady advancement of a project. Long-term projects often suffer from keeping up that momentum until they fall into disrepair while many short-term projects suffer from building it up. It's a psychological effect with real-world consequences.

For instance, the longer you stay away from a project, the longer it will take you to get back into it. If you stay away too long, you may need to update dependencies, frameworks, software/hardware, etc. thus keeping you further away from actually accomplishing something. Outside of that, losing momentum can quickly deprioritize a project and may even push into the project graveyard.

It's even more crucial to personal projects because those don't have financial backing or a PM to keep you on your toes. In fact, there is little incentive behind the project to keep it going. There's no reward at the end, nor a pat on the back for getting the job done.

Which is how we come to the concept of dogfooding.

## Build for your needs

Dogfooding, in a simple sense, is the concept of building to satisfy your own needs. Not just learning needs or creativity, but real-life needs that could be solved by an application. The need has to be strong enough to keep yourself working under that motivation.

A great example of this is a snippet library. A snippet library is a library of snippets, or short samples of code, that some developers keep around to use and reuse in various projects. These snippets could be Regex, utility functions (possibly a camelCase to snake\_case converter), and even entire layouts. Snippet libraries have to have clean code that could be used anywhere otherwise it's useless.

If a snippets library contains some non-abstracted garbage and requires other services, and things you really don't actually need to use some function, you'll abandon it quickly.

However, if you manage to write clean code and save it into your snippets, you may find yourself using it more often than not. And the more you use it, the more you'll want to make it useful. Possibly by separating snippets by language, by utility vs specific function, categories, etc. And maybe you want to go back to older projects and try to recover more work because the more you build into your project, the faster you will be at your job.

So look around and see what your needs are. Maybe you need a to-do list that works unlike any other on the market currently. Build it, use it, and use it so much that you'll want to upgrade it and keep working on it. Maybe you want to build a Wordpress theme that will serve as boilerplate. The brilliant thing about that is that the more work you do on your boilerplate, the less you will have to do for your individual projects.

Again, satisfy your needs. Keep using and building the product.

## Build with purpose and build deep

To go back to some of what I talked about. It's important to build with a purpose. It's easy to build throwaway projects but not very useful. Long-term projects help us keep up with technology, update and upgrade, and test technology out. For example, let's say you built a random To-do list app. There's no sense in it, there are a million others.

And once you're done, or once you explore the technology you wanted to explore, you'll abandon it, a half-build house. If you actually follow through, you may learn more than just the basic syntax of that technology.

Let's consider the framework AngularJS. Angular's adopters are usually categorized as either enthusiastic beginners or dreadful masters. What that means is that when you start using Angular, you'll feel elated. It's a somewhat complicated framework but it's VERY powerful. It feels like the right solution to every problem. An every-man's hammer.

But when you master it, you'll start to find the ugly parts and realize how dreadful it can be working with it. Of course, there are two sides to every argument but it's a great example as to why you should follow through.

Building a full-scale application or at least finishing one, helps you set up for true iterative work. Iterative work means that when you remember that project and think to yourself, "Oh yeah, that app, I've been wanting to test a new feature X", you can go straight to it and iterate, giving a you deeper overview to the technology itself. If you started a new app just to test that feature X, you would not get this overview. This makes the applications even more self-serving.

Finishing an app is a grand feeling so give that a shot.

title: Portfolio creation
----
content:

Portfolios are very important for designers; however, they've been increasingly more important for developers as well. Creating your portfolio can be a daunting task but once done, it can be refreshing, useful, and you'll be glad you did it. It's a great way to show off your work, to force yourself to finish work, and to re-evaluate your skillsets over time.

## Showing off

Obviously, portfolios are about showing off. As far as jobs go, many hiring managers don't understand code and concepts and want solid proof of your work. The best way to do it by linking them to a portfolio and telling them what you did on each project.

Unfortunately, a lot of times, you won't be able to take credit for the work you've done for a company, client, or while contracting. In fact, some of the highest profile clients don't want to share who's done the work. And that's fine. But it sucks for you as a developer.

That means being inventive. One of the coolest projects I've seen around is treating yourself both as the developer and client. Meaning that you *hire* yourself to do a project, perhaps your own personal website. The experience will help you see both sides of the fences, and on top of that, you'll come out with a portfolio piece client project.

You can even document your work along the way. From brainstorming to alpha, to the final version and post it as a blogpost, a proof of your work.

Other times, you're welcome to dogfood and build apps for yourself and post those are your portfolio pieces. I've used my personal Wordpress boilerplate project on countless client projects that I can't show off but the boilerplate in itself is worth showing off.

A portfolio should always be presentable and hold only the best work you have so make sure not to saturate it with half-done projects, links to sites that no longer exist, and work too old to even show.

## Finishing work

An upside of building a portfolio from scratch is having to finish your apps. As you'll progress as a developer, you'll start to notice how *easy* it is to start a project but how much more difficult it is to finish it. It's the same in the professional world as it is in your personal development. Large companies can easily launch *initiatives* and just as easily abandon it without finishing it and testing it out.

Portfolios require *done* work so they force you to actually do what you need to do.

## Re-evaluating Skills

One cool thing about portfolios is that they're a snapshot into your skillset. Just having a six month span of projects will show you just how far you've come. It can astonishing but very awesome to be able to re-evaluate yourself in this manner.

For instance, I recently sent out a copy of my resume and realized that my portfolio was vastly out of date. I was working in the educational sector on a lot of back-end work. Back-end work is very difficult to showcase but I tried nevertheless. What was impressive was how far I've come. I checked out a project from earlier in the year and could not believe how messy and inefficient I used to be. "I wouldn't do *that* today!" I told myself but I already know I will the next time I check my portfolio. I'll see that my code today is just as messy!

Outside of that, I looked at my solutions and realized that my knowledge today would definitely help me up with a better more scalable solution. It was a nice moment. It also taught me where I've spent a lot of my time learning. Looking through other projects, however, I realized that I haven't advanced much at all and that was mostly because I wasn't practicing skills associated with that project.


title: Handling Critique
----
content:

I like to say that people that criticize you unconstructively are people that are not happy. And with that, I'd like to talk about handling critique from your peers. Just like artists that expose themselves and their inner creativity to the world face criticism, commentary, trolling, and other forms of back-communication, developers expose their code and their thought patterns to the world and face much the same. And it can be very difficult to handle.

So difficult that there are developers that have quit working on public projects because of it, or have stayed away from twitter in order to get some peace. One well-known developer Notch (creator of Minecraft), wrote an entire article about how he no longer wanted to face the public because they expected him to be this god-developer while he just wanted to work on and create games.

Whenever posting a project or writing a blogpost, there's always the fear of backlash and until you experience, you won't know how bad it can be.

## Types of people on the internet

For every post and every project you post publicly or on a forum, you'll face a myriad of people who will have their two cents to add to the discussion. Triage the comments to find those that really matter, those that require responses, and those that need to be fully ignored lest you want to lose your sanity.

### Trolls

The hardest part is facing trolls, or better yet, figuring out WHO exactly is a troll. A troll isn't just someone who tries to provoke a flame war, it's also an individual that merely has nothing positive or constructive to add to the discussion, even further, I'd say, a troll is someone who will attack you for no reason.

Look out for the commentary that seems strangely provocative and holds no substance and skip it. Just about every developer has gotten caught up in the 20+ message discussions that ended up nowhere only to realize the person was just trolling them.

Here are some common messages to watch out for:

1. "Your technology X sucks, technology Y is so much better"
2. "This is so bad, you should stop being a developer"
3. "Not another stupid post like this"
4. "How is this better than \[unrelated project\]?"

There are definitely more messages like that. The best thing you can do is ignore these comments, and if possible, downvote them. Pay them no attention whatsoever. Also remember that you should *not* stop being a developer, you're a good person no matter what the troll says, and death is definitely not an appropriate response to your article.

Some trolls go very far to insult you, almost personally as if you were their greatest enemy. Again, ignore it. People say you should grow thicker skin, I say you should grow more selective eyes!

### Flaming commentators

Some people that comment have a certain way with words that makes them seem aggressive. In fact, they may sound almost like trolls, with possible threats, almost having a personal vendetta against you; however, they will have a comment of substance. In these situations, it can be prudent to read through their comment but be careful not to get too emotionally invested in it.

For instance, here's a sample comment that paraphrases one that I've received in the past:

>You're a terrible developer. Can't imagine why someone would even post this article. How is this helpful at all? What's there to learn from this article? It's pure garbage.

I ended up responding but read through it again. What the person is saying behind the aggression is that my article wasn't helpful to them, and possibly lacked focus. They did not get anything out of the article. I prodded the person for more information and they apologized for their brash words (sometimes, people forget there are live human beings behind those written articles) and explained how my article lacked cohesiveness and examples and thus was not useful to them.

In another situation, I faced a commentator who attacked my project as if it had offended his mother. Yet, through the comment, I was able to learn that the commentator was simply frustrated by my examples. They did not hold real-world applications, and so I had to explain that the examples were supposed to be abstract, more of "this is how it works" rather than "this is how you use it". Several of the other readers came to my rescue.

The simple fact is, not all comments will be helpful and you can't satisfy everyone.

For these kinds of people, keep in mind that they forget that *you* wrote the articl or created the project and though seemingly personal, the comments' aggression has nothing to do with you.

### The constructive critic

Constructive criticism is the holy grail of posting your projects or peer reviewing code. It's a comment that helps you, your article, and your project become *better*. Look out for people that will disect your project and discuss with you the finer points of your development. They may tell you that perhaps your project could be handled better with streams, thus eliminating lots of logic from a certain file.

Or they may tell you that you're using the library correctly and as intended and that's definitely something to applaud for.

In the end, these are the people to look for as far as validation and writing down what needs to be changed. These commenters may write entire paragraphs for you.

Make sure to *respond*. You want these people to keep doing what they're doing because they're few and far in between.

### The questioner

The questioner is basically a person that asks you questions that require you to defend your position and at the same time think about what the question means. In an earlier example, I discussed trolls asking you to compare your project to an unrelated project (like MySQL adapter for Symfony being compared to a Mongo command line tool, seemingly related but not). What if they asked you how it relates to an actually similar project?

Let's say you have a file-based CMS. It's the new "build your own blog" application that just about every developer creates in order to test their skills. Thus, there are tons of these and many developers post them for critique. The questioner will jump to ask immediately how it compares to a more popular file-based CMS and it's up to you to defend your position.

In a way, this is constructive criticism that forces you to critique yourself. How IS it different? Is it faster? Easier to use? Does it have more or better features? Ask yourself and see what happens.

Here are some questions that a questioner may ask:

1. "Why did you use technology X for this particular project?"
2. "How does your project compare to \[related project \]?"
3. "What was your biggest challenge with the project?"
4. "I followed your article/tutorial, what would be the next step for someone wanting to further?"
5. "Do you have any more examples of this work?"
6. "I tried to read your code, how does X work?"

And so on. Make sure to answer these as they will not only help the questioner but help you understand your project and writing better.

### The praiser

Almost as useless as a troll (but easier on the eyes!) is the praiser. That's a person that mindlessly praises any project for possibly no reason. I've seen a lot of new developers do that and they're usually unable to participate in any *real* discussion. It can also be the case of someone genuinely encouraging you. However, again, it does not help you with your project other than stroke your ego.

Take the praise, thank them for their help and move on.

## Why even expore yourself to the public?

I've already covered the types of commenters and that should have already revealed *why* you should even seek the comments out. Many developers feel uncomfortable with being exposed to the public. And that's okay; however, if you're open to posting your work on reddit, hackernews, or other social media sites that cater to developers, you should do so, and you should take full advantage of it.

Unlike other fields, development allows us to publicly announce and dissect our projects. There are definitely several other fields where this *could* be done but I'm not sure how effective it would be. I'm sure that architects could share prototype plans with each other, and discuss the merits of moving columns or even rooms from place to place. Engineers could probably do the same, though benefit less. Designers do have a similar public discussion and it's just as crucial to them so at least there's that.

What's great about the public forum about your personal projects is the feedback. Through feedback you can learn a lot such as:

1. who might want to use your work and who might be adverse to it. Perhaps newer developers will be baffled by your open source utility app while more experienced developers will think you're God-sent.
2. how your app fares on the code. Developers WILL check out your code and architecture. Gaining feedback on either will help you fix issues, gain insights on things you may have missed, and hopefully discern between useful and not useful comments in order to learn how to make your app better, and your skills sharper.
3. where your app excels and fails feature-wise. You may have one approach to using your app, but others will use it differently. Even if you're writing an article, you'll get the same feedback. It'll help you gauge where your app fails and where it excels and what you can do about your failures or if you should pivot your app's goal.

And much more. Try to write a sample article discussing some technological challenge or breakthrough, or prepare an app to be publicly dissected and try it out!

title: Long term open source projects
----
content:

If you're lucky, one of your apps or tools will become a long term open source project with lots of interaction and usage by outside developers. If that is so, prepare for the long haul and learn how to manage one of these projects so that they not only don't take over your life, but so that they can thrive even further.

I'll be discussing all of these aspects of a project in terms of Github since it has great bug tracking, pull requests, and so much more.

## Bugs & Issues

Let's explore bugs. In Github, one can open an "issue" on any open source project that has issues enabled. This allows developers to submit feature requests, bugs, ask for help, and communicate with the developers of the project about the project.

To keep a thriving project, one has to deal with bugs and issues in order to keep up the usage but also to not get swamped. A sign of a healthy thriving project is a number of opened issues and a number of opened pull requests (external or internal requests to merge in code).

When a new issue opens, it could be about a number of things and it's important to categorize issues as so:

1. duplicates - in this case, make sure to point the person to a designated "main issue" for the problem.
2. bugs with your application
3. inability to run your application - not necessarily because of your app's bugs
4. feature requests
5. questions about the application

It's useful to have pre-made labels and label the issues as they come in.

Duplicates should *always* be closed and referred to an original issue so that the discussion on the issue can be in one place with all explanations and arguments present. It's not uncommon for someone to bring up an argument about some feature or a bug that has already been discussed.

### Bugs

When it comes to bugs, it's important to get as much info as possible. An issue that simply says, "Doesn't work. I can't make it work!" is useless. As harsh as it sounds, ask for more information and don't deal with it. "Doesn't work" could mean a million things from user error, to app error, to machine error, to a dependency error. You just don't know and you can't spend an hour writing out a debugging guide to a person that did not even bother to tell you more details.

Bugs can also range in severety from: "your app is fully broken" to "minor bug that's not important". You can guess which one will get a fix faster. On top of that, many users can mistake *intended behavior* as a bug.

An example of that is if your utility throws an error when improperly used. The error there is *wanted* because it alerts the user they're doing something wrong, not the application. Or, if a user misunderstands your app's behavior, they can see that as a bug.

As I've mentioned before, make sure that a bug is specifically to your app. If a dependency is broken, you're welcome to hardcode a dependency that's *not* broken and refer the user to the dependency's repository to file an issue there. An improper local setup can cause the same thing. All of these (as well as the intended behavior) can be closed right away.

One thing you can also do, if the bug is low priority enough, is ask the developer themselves to come up with a fix and participate. That definitely takes work off your shoulders and puts on someone who actively needs a fix and maybe able to contribute back and develop it.

### Inability to run

I would say it's a type of a bug but it's more than that. People run all kinds of setups. Not only are there several major operating systems (numerous Linux flavors, OpenBSD, OS X, Windows, and whatever else), but there are several browsers, and a multitude of versions of dependency software.

Luckily, you can manage dependencies for your project but you can't manage a user's system. They may file a bug where your utility doesn't work with their system and it may not necessarily be your fault. What's at stake there is figuring out why exactly your app is not running.

In this case, ask as many questions as possible and try to get as much information out of the user as possible. What OS are they using, what browser, what versions, do they have any kind of a special setup, and what type of errors do they get.

You also know your app best so ask them to do whatever you feel like could help. This kind of a "bug" may not necessarily get a code fix but if you do find a solution, document it in a wiki or README.md or somewhere.

### Feature requests

Feature requests are common in larger applications as people want to start pulling the project in a way that's beneficial to them. Sometimes, they're outright outrageous, and sometimes they make sense (like a missing feature that really should have been there). Your job is to classify them and possibly consider if the feature request is in the scope of your project.

Developers are self-serving, and that's okay. So if you have a CMS project running on NodeJS and a developer asks to have it ported to Ruby on Rails, there's no reason for you to agree. If you have an MVC framework and a developer asks for it to work as a package for another framework, you don't have to comply. In fact, you don't have to comply with any feature requests; however, to help appease the community and keep the project publicly alive, you may have to comply with at least a few and take your project in the direction where people use it.

But, taking on features can be difficult. Try to assign them to a milestone or, again, ask the developer who asked for the feature to participate, it's only fair!

### Questions

Questions really shouldn't be in issues but unfortunately, Github does not have a "general discussions" forum so you'll have to settle for a discussion in an issue. It's okay to answer questions about your project. If any questions come up often (duplicates), create an FAQ in your project Wiki and point people to it.

Discussions are just like feedback on the project. They can be valuable but they can also be a waste of time so watch out.

## Versioning and milestones

To keep an application feeling fresh, there's a need to keep up momentum. There are different ways of doing that. One of them is to start regularly versioning your application (with tags). Versioning an application let's users know when an update is out, and if there is an issue, which version to upgrade to in order to resolve it.

A cool aspect of versioning is setting milestones. Milestones are basically issue/pull request options that associated them with a version. So for instance, version 1.0.5 could be associated with numerous pending PRs and issues. This lets users know when PRs will be merged down, issues solved, and that the application is, indeed, progressing.

It's good to follow semantic versioning and updating all the different places your utility or app can be downloaded from.

## Contributors

Part of having an open source project is having contributors. Contributors can either directly make changes on the repository or create a Pull Request in order to merge their changes in. Anyone can make a PR but only people *you* choose can become repository contributors directly. Having contributors helps share the burden of developing the app and solve issues and PRs.

It's always a good idea for people that submit bugs or feature requests to ask them to submit a PR with a solution if they can, and that it would expediate the process. Having full-time contributors helps create diversity in the application as well.

Be careful who you choose and make sure that they understand the way your application works (code-wise). For example, develop a *styleguide* that outlines how code should look aesthetically (tabs vs spaces, same line brackets as declarations vs not, etc.). An `editorconfig` file and plugin can help enforce some of these but not all. After a styleguide, make sure the contributors know where you're headed with the application and the process of peer code review, etc.

As far as PR contributors, make sure that their code adheres to your standards as well, and let them know ahead of time what needs to be fixed or not. Obviously, be courteous to the contributors but make sure that you don't just accept any code into your app.


title: It's not all programming
----
content:

Programming is great, and it's a wonderful job, hobby, and some could say, lifestyle. We've all heard of "hackers" and "tinkerers" that spend day and night coding and the stereotype is that this is how we all are, secluded in a dungeon with a monitor in front of us and the windows covered. Well, except for front-end developers who tend to have neatly organized desks in empty rooms and hipster clothes.

But stereotypes rarely reflect reality especially in this case. Developers are just as varied of a group as any. In fact, I know lots of developers that program in the day time but spend their free time completely differently.

What's also interesting is that what you do outside of programming matters a lot in terms of what you do when you program.

Ever heard of Archimedes? He was an ancient greek mathematician/physicist/philosopher who was tasked with finding a method through which to distinguish silver from a fake in the King's crown without melting the crown down (to find its density). According to the story, Archimedes worked day and night on the problem without being able to find a solution but could not. Finally, he decided to take a break and take a bath. When he sat down in the bath, he noticed that the water rose proportionally to displace the volume of his body. Using that principle, he was able to calculate the volume of the crown without melting it into a container and subsequently the density in order to verify the crown's silver.

Developers do much the same thing and many developers benefit from not focusing on development 24/7 but rather finding other tasks to do that switch up their thinking patterns.

## Not all stereotype

First of all, let's talk about the stereotypes. Developers are programmers so there is already a stigma attached to the profession, same as programming in general. The average developer according to media is an obsessed man that cannot once divert his attention from programming, except possibly for the purposes of gaming or watching sci-fi, or possibly playing Dungeons and Dragons. In fact, this man lives in a basement with covered with windows, several monitors radiating brightly, hacking away at an application while hacking the pentagon, or something like that.

The stereotype has started to change recently with many programmers becoming fast-paced entrepreneurs and big names in the tech industry at large. No longer was the industry controlled by business people that knew nothing of technology but rather, it started being controlled by the creators of technology themselves. This meant that developers started being associated with laid-back college kids that dressed in ironic t-shirts that could hack-away day and night.

However, strangely enough, in my line of work I've not met either kind. Well, there are quite a few ironic t-shirts but only because every employer I've worked with allowed a loose dress-code as is the fashion among smaller companies and startups. Outside of that, every person was different from another. From a co-worker who was quite the ladies' man, to a father of three who did nothing but spend time with his kids, to a slew of developers with active lifestyles hiking and riding bikes rather than coding.

In fact, if you had met any of these people outside of the workplace, you wouldn't know what they did whatsoever. So I think that stereotypes in general are starting to really loosen up.

## Hobbies

Non-tech hobbies are freaking amazing especially in terms of their impact on development. Most developers I know do at least a few things outside of coding, from photography to traveling, they engage in all sorts of activities. And so should you. Developing non-stop can lead to a burnout, and we've already talked about the consequences of that. What I haven't talked about is how an ease of mind, and switching tracks can help you solve the most difficult problems.

What I suggest to you is two-fold.

### Tech hobbies

First, tech hobbies. Tech hobbies are just as important as non-tech hobbies; however, they have different requirements. If you want to do something tech-related, try to do something that's vastly different from what you do every day. For example, if you do web development, why don't grab an Arduino, and work on creating some kind of an automated system? Or if you want to, try to get into game development or even server administration for fun?

The point of a tech hobby is to take your mind off your regular job but still be able to get into that type of an environment full of imaginative and creative people that use technology. I personally found Arduino development to be very mind-freeing and gets me to think vastly differently. Game development alike let's me have a break since it requires differen design patterns and often, it requires a completely different programming language, game art, and game design.

Getting another tech hobby allows you to be introduced to a technical world that never appears in your every day job. It introduces new algorithms, patterns, and different ways of thinking. Arduino, for example, works on a constant update loop that checks if it should run another piece of logic. Game development is somewhat similar to that except that the update loop often tries to update large OO entities.

And what about design? I consider web design a valid tech hobby but vastly different from development. It's definitely a wonderful creative outlet that gets you thinking not about how to get something done code-wise but how it should look to get its job done, or even how it should *act* to get a job done.

Obviously, do any of these *only* when you feel inclined to do so. I definitely don't advocate spending all your time on a computer trying to learn as much about tech as possible.

So if you find it relaxing, and you find it beneficial, and you like it, get a tech hobby!

### Non-tech hobbies

Non-tech hobbies are pretty awesome in that, they allow the mind to fully relax from its usual code-style problem-solving mind into a different shape. The mind is an elastic mind and the more you stretch it every-which way (without breaking it!), the better it will be at springing back and springing out. Having an artistic outlet, for instance, helps your mind to think of aesthetics and expression rather than "solving", while doing woodwork helps your mind focus on possibly repetitive tasks and controlling your body rather than staring at a monitor.

On top of that, it is a sure way to preventing a burnout. It really is. I repeat: non-tech hobbies are the best way for a developer to prevent a burnout.

There are so many awesome things you can do.

Check out fitness and working out. Not only is it great for your health, but it's very far removed from tech. Running is great for chemically resetting your brain, and so are other types of workouts. After a run, you'll feel refreshed and it's a great way to transition from your workday to your time off.

You can also go the artistic way and pick up painting or photography (very popular among devs) which explore your creative side.

Now, not only do non-tech hobbies prevent burnouts, help you feel better and function better, but there's also the Archimedes story.

Archimedes was able to find a solution by no longer focusing on the problem. I can't stress how often this happens. In fact, it happens so often, that at one work-place, we had regular coffee breaks and walking breaks whenever we needed to get away from a problem, only to come back and have a solution.

## Don't let your life be consumed

All in all, don't let your life be consumed by one thing. Life is grand, and full of adventures and there's no need to spend every waking minute programming, and there's no need to use all your free time trying to perfect that *one app*.



title: Microsoft Windows vs \*Nix systems
---
content:

A popular myth among the development communities is that true developers use any tool X that's currently popular. Even more popular is a myth that the most badass developers use OS X and Macs. It's not entirely true but there are reasons why many developers prefer Macs over Windows.

First and foremost, I don't want to stir up a battle. I personally use Windows, OSX, and different flavors of Linux all the time to developer, write, and enjoy. And I know plenty of developers that have their preferences. What's important is what makes sense for *you*.

## Linux

Linux is an operating system that pretty much dominates the server world. Along with OpenBSD and Windows, it's one of the several picked operating systems that are used on servers. There are several reasons for that. One of them being that Linux works on just about any device, it's fully open source (and thus accepts fixes/bugs/patches even custom ones), and finally, it's commandline interface is extremely powerful. Not only that, today, most open source software runs on Linux first and other platforms last.

Given that, Linux has a pretty cool system of adjusting it, tweaking it, and working with other open source software. The cool thing is that, you can use Linux as your main operating system in lieu of OS X or Windows. Both Macs and traditional PCs support Linux. Now, server Linux is stripped down to work specifically on servers with specific drivers, utilities, and being light-weight so that the software can maximize its resource usage.

There are desktop flavors of Linux. Ubuntu, Fedora, and Arch being the most popular (them and their derivatives). They can be fully utilized with a graphical interface. It works just like server linux except that it has a greater wealth of utilities and that graphical interface (another, separate application) which allows regular non-tech users use the software. The UI on today's Linux distros is *very* advanced and either on par with OS X and Windows or exceeding their capabilities. It used to be a hurdle to get through but today, the UIs are revolutionary, and highly useful.

Working on such a system allows us to run software as if it was on a server. This helps with testing, learning about the system and setting stuff up works the same way on both systems. The Linux world is filled with all kinds of amazing open source apps so there's no shortage of that.

Another reason to use Linux is that whenever a company comes out with a utility for a server, it'll automatically be able to run on your machine. For example, Facebook released a utility called Watchman which helps watch thousands of files, or browse through them using an API (it can be used by VIM to cache a file directory). It was released to work with servers and Linux developers quickly picked it up. Then, it started migrating to other platforms.

title: IDE vs Text
----
content:

One of the greatest tool conflicts developers face is choosing between an IDE and a text editor. For beginner's, the pros and cons are difficult to understand but they're always tempted to go the IDE way. However, professionals understand things only nebulously and stick to what they've always worked with. I haven't seen it any other way.

However, certain languages (like Java and C\#) seem to push people the IDE way while others (Python, HTML/CSS) push people the text editor way.

## IDE

An IDE stands for Integrated Development Environment and it is what it sounds like. It's an editor that goes above and beyond text editing, it can include tools for FTP connection, debugging consoles, library imports, test runners, and even version control features. It's supposed to be the one-stop-shop for all your development needs. Some IDEs go beyond that and include a built-in command line tool for you or can house credentials with which to SSH into a machine. Other IDEs include boilerplate projects so that you can spend less time setting things up and more time working.

In essence, you start a project and you shouldn't have to exit out an IDE until you're done. In fact, some IDEs feature plugins and integration with web browsers so that you really don't even have to open one manually when testing things out.

There are several well-known IDEs, namely Visual Studio, Eclipse, Netbeans, and the IntelliJ suite of IDEs. Eclipse and Netbeans are known for their great Java support while Visual Studio is for the C\# world. IntelliJ's IDEs are meant to target all the various popular languages.

There are several pros to using such an integrated suite:

1. autocomplete and intellisense-type features - this is important especially for Java and C\#. These features are basically smart detectors that try to figure out what you're trying to type next. For instance, if you import a class named "Math" and start typing "po", it may try to autocomplete to "pow" (or 'power of'). Java can be especially complex with long class and method names so IDEs try to make things simpler
2. everything's just there - instead of trying to install a million different applications to accomplish all the tasks you need, you have one app that's already aware of your project and can keep all your settings. On top of that, you don't need to open up other apps while working.
3. IDEs feature all kinds of real-time feedback - from the aforementioned autocomplete to linting/hinting of your code and much more. They can even move your file around based on its name. Or using `@to do` comments can add to an IDEs internal list of todos that you can access.
4. you work in terms of projects, not files - Instead of opening a single file, you can open a single project with all of its settings, files, and even last-opened file right there in front of you. Development is no longer a disjointed activity.
5. compiler - lastly, many IDEs feature a built-in compiler and even livereload compiling. Eclipse has this feature and allows you to change code and see the changes live.

However, with those features come penalties. Longer installation times, bigger downloads for the IDE, longer time opening the application, etc. And in fact, having so many features packaged into a single app can be confusing and frustrating. Some IDEs almost require entire manuals (and I'm sure there are books out there to prove it) in order to use them efficiently and fully.

## Text editor

A text editor is the equivalent of notepad on steroids. The idea behind a text editor is to force a developer to focus on the code, not testing or deployment, not SSH or FTP, and not version control, just the code. Some developers find this very "zen" like. And the text editor market is populated with lots of contenders and there seems to be no winner in sight.

Some popular text editors are Sublime Text, VIM, and Emacs. With Sublime Text functioning somewhere between an IDE and text editor. It has plugins and lots of similar functionality to IDEs but it's very light-weight, fast to open, and easy on the eyes. IDEs tend to have many different tabs and sub-sections opened to present you with as much information as possible (conducive to some developers) while text editors try to do the opposite, hide as much as possible other than the code right in front of you.

This works well for languages like PHP, Javascript, and Python where the code is simpler in terms of names and structure. Even the number of files and folders is usually much less than Java and C\# projects.

Again, there are several pros to using a text editor:

1. they are quick - IDEs are known for being slow and hoggy. Text editors are quick and can often run ubiquitously across many different platforms. In fact, VIM can run on just about every platform and a compact version of it is shipped with most Linux distros
2. they are zen -

Most text editors *are* extensible so they can take over a lot of the IDEs cool features like autocomplete; however, they often don't want to take over more roles like SSH or FTP. It's easy though to use command line tools or outside tools as dedicated substitutes. Interestingly enough, VIM and Emacs have their own workflow connected to the command line (they can be run straight from a terminal) involving tools like Tmux which helps split apart panes within a terminal, and loads of other tools.

## Try both, pick what's best for the project

I suggest you try both, pick the one that's more comfortable. IDEs are really wonderful for those heavier languages, and for C++ as well (and non-web languages); however, text editors are so lightweight and simple they help bring about full focus on code. Either one works as long as you're efficient at it. Just as a sidenote, text editors *are* gaining in popularity, especially VIM. In fact, so much that the intelligent autocomplete so inherent to Visual Studio has an external plugin that hooks up to both VIM and Emacs so that users can keep working on those text editors instead of migrating away.

Lastly, IDEs are learning from Text editors about zen-coding, and so many of them have started to implement "distraction-free" modes, neater layouts, and even default skins that are easier on the eyes and thus easier on the mind.








