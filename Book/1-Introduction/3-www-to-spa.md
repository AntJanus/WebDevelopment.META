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
