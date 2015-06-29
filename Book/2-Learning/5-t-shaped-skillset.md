title: T-shaped skillset
----
content:

I have one last lesson to teach about learning web development. And that is the lesson for the T-shaped skillset. It's a hard-learned lesson for beginners and it's still disputed among professionals. It's about the distribution of skills in the field.

Basically, the idea is this. On the one hand, there is a group of individuals who are "jack of all trades" which is often accompanied by the second of the saying, "master of none". Let's dissect this group first.

### Jack of all trades

First, let's identify what this means. It's a term encompassing a wide-range of developers that pride themselves on knowing A LOT. They can join a conversation on jQuery just as well as they can on Ansible (a DevOps tool). And when put to skill, they can identify problems in programs, possibly even fix them. But they are unable to solve the more difficult problems, and unable to build applications that require an in-depth skillset in one specific tool, framework, or language.

Now that we know what it is, let's tackle the developers that get this kind of an insult all the time: Full-stack developers.

Full-stack developers are developers that are just as comfortable working on the server-side code as the front-end code. They get a ton of flack because the "masters of one" believe that you cannot truly understand and work in both environments unless you succumb to the "jack of all trades" syndrome.

The problem is that Full-stack developers are necessary and have their own place in the hierarchy of developers. These developers are able to:

1. work as sole developers in startups - this is more often than not the case for non-tech startups or startups that are not focused fully on the tech side of things.
2. work as fluid "fillers" in larger corporate structures, taking on projects that the "masters of one" cannot handle.
3. handle projects that employ the full stack. Enough said.

To summarize, there ARE jack of all trades and have entire stereotypes based around them. But this simple idea also includes developers that do have a crucial place in the web development community.

### Master of One

Master of One is a fallacy and just as ignorant as "jack of all trades". The idea behind a Master of One is that a developer has a sole focus, a niche they are fully aware of and fully knowledgeable of. They pick a topic and they know it through and through and thus are able to make community-wide weighted opinions and can spearhead a project, masterfully balancing it and creating art.

It's a fallacy of some artisan that has been carving the same piece of wood his/her entire life. So let's put it this in non-mythological perspective. The idea behind master of one is that someone has tunnel vision, unable to look anywhere else. However, unlike "jack of all trades", there is sort of a reverie associated with this term.

A real world example of a Master of One is closer to a Senior Developer or even better, a Senior XX Language Developer (where XX language is any given language: PHP, Ruby, etc.). Their skillset is closest to knowing a language very well and able to apply it very well, too. On top of that, they know the limits of the language and how to push them. This makes them perfect for projects that require their expertise put to test.

They're important on the community side as well. So we need these types of people because:

1. Important and performant projects require utmost expertise at a particular skill (such as using a programming language).
2. The XX language community needs someone who understand the topic very well in order to make informed decisions and weighty opinions.

The problem with these people is that they do not understand anything outside of their given "tunnel". A back-end developer who is a Master of One and a front-end developer who is a Master of One will simply argue to death because their paradigms are so different. Each one will have their "right way of doing things" but they are incompatible. They can't communicate and they can't create work together.

It's like an English person and a Russian person trying to argue over how grammar should work. Both are right but the solution is always wrong.

### The "T" Shape

The "T" shape comes from the idea of merging the two concepts. Having knoweldge of a wide variety of topics but specializing in a few. So a back-end developer that knows HTML/CSS and also knows something about server so that they can communicate and work with a variety of people.

This helps projects tremendously since you can point people to "Lead" certain parts of the project based on paradigm (back-end, front-end) and then have the Leads make decisions together since both parties can participate in the conversation and are knowledgeable enough in their own field to argue their side while able to concede the other side's needs as well.

It's like having a Russian person take English lessons and vice versa. They may not be proficient enough in their second language to write legal documents or novels but at least they will understand enough grammar basics to agree to some solution. It's a stupid metaphor but you get the idea.

So what does a "T" shaped person do?

* exhibits masterful knoweldge of a single skill
* communicates well with others all along the stack
* can see some potential implications up and down the stack based on their decisions and programming

This means that you can bring-in the "T" shaped person and have them work alongside other developers of different paradigms and have everyone get along well and make decisions together.

### Then there is the "^" shape

A monicer that I came up with, the arrow shape is a person who is neither horizontal (ie. jack of all trades) or vertical (ie. master of one) nor a T-shape person (horizontal + vertical) but rather a gradient or curve of skillsets.

Let's come back to our English and Russian individuals. They can barely understand each other with some basic skills in each other's languages. Now, what if we had some foreign exchange students and used them for the example. They're still primarily good at their native language but they are very well versed in the others' as well. Good enough to write high school essays and take the SATs.

In this scenario, they may not be aware of the entire stack or what goes into the process but they are able to do a few things our T-shape person can't:

* actively participate in the development that's lead by a person of an adjoining skill. Instead of a front-end developer discussing with the back-end developer how the API should look, the front-end developer can code the API while the back-end developer can supply the more difficult logic and code
* switch modes. Even if a skill is not your main strength, you should be able to float around and switch modes, having another more skilled person help you out
* argue and communicate points about technology outside of their main domain

An arrow shape skillset makes a developer superbly invaluable since they are able to comfortably move from place to place and work better with others.

I've met people like this and it's amazing to work with them because you instantly feel in awe of the person. They are able to leave a difficult back-end project and solve front-end problems. They are able to discuss and argue technology decisions made outside of their immediate domain as if it was their own livelihood. And best of all, when they approach a problem, they can think in terms of "where do I need to solve this problem?" on top of the other usual questions.

Imagine trying to figure out how to speed up the system. An arrow person would be able to consider the following:

1. Do we need better hardware or use more hardware? If so, time to upgrade hosting account.
2. Is there some way to speed up the existing hardware or use software that can deliver/compute data faster? This includes caching, for instance, and different database systems.
3. Is the back-end system just too slow? Does it need performance optimization? Perhaps it makes too many requests to external services or too many SQL calls to get data, or there is a stray foreach loop.
4. Can we pull data asynchronously on the front-end? Can we split up our requests? If so, perhaps some information can be marked as non-priority and have our Javascript request it separately and thus improve *perceived* speed.

You can even tell where that arrow is headed and most likely, the arrow person will implement a little of all of those. Use better caching (storing data output from a program to reuse it), figure out bottlenecks on the back-end and combine SQL statements, and request the slower/additional data *after* the initial data is sent on the front-end.

### Yet most developers

If most developers were to explain their skillset it would most likely resemble soft goo squished between their hands, you never know where the excess of their skill will be, where there will be a gap and where they will be simply "mediocre". It's great to find people, however, who can learn quickly and who can form somewhat of that arrow shape in a workplace based on the needs of the job. And that's honestly how skills develop. At a workplace, when they're needed, and this creates that uneven landscape.

When learning, don't get too caught up in keeping your skills equal at all levels. Do what works for you but keep in mind that it's never a good idea to either spread yourself too thin or tunnel vision your way through a particular technology.
