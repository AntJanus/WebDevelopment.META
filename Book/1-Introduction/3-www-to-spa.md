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

PHP used to be a templating language, which means that you could "template" your websites. That means that we can create a single `header.php` file which has all of our header information, a single `footer.php` file, and then we could

