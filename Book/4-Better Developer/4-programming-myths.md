title: Programming Myths
----
flag: done
---
content:

Programming myths permeate the developer world as much as urban myths spread through high school. The non-tech media believes it whole-heartedly, young developers suspect something but stay in denial, and older developers know better, most of the time, until they start a whole new myth that serves them. Or a combination of the reactions may explain how you feel about them.
I wanted to dispell some of the myths and discuss what they really mean rather than what they have come to mean.

###The 10x

The 10x-er is a developer with such great knowledge that they can accomplish the work of 10 other developers of similar stature. It's a completely false idea but it's something media likes to write about. Mainly because we all like super heroes and a 10x engineer is a superhero/myth/legend among developers. It's the Ubermensch.

The reason why it's a myth is two-fold. One of them is the fallacy that's often attributed to project managers.

> Nine women can't make a baby in a month.

And the same goes for web developers, a real 10xer can't replace 10 developers. You simply can't assign 400 hours of work for a developer to figure out within a week. It doesn't work that way. To take the myth down a notch, let's think about a great developers. A great developer can save a lot of time with their current knowledge, coding standards, and some ingenuity. These elements should be part of every senior developer's box of tools. And some of these early-on positive paths can result in saving time overall, or just having a better infrustructure.

However, it's only the *perceived* difference between a bad developer and a great one can make that great one look like a 10xer.

On top of that having a team of developers fosters peer review, brainstorming, support and much more creates a much better cohesive team while a single developer can't do that for themselves. So, in short: you can't replace an entire team with a single person.

On the flip side, a single developer with the means and ability can write programs that replace 10 people easily, but that's not what the myth means though it's a much better definition.

The second reason the 10xer is a fallacy is associated with why this myth came about in the first place. I recently read a fun discussion about 10xers and how one developer was able to come into a long, drawn-out project that's been going on for several years and within a single month, turn it around, finish it, and make it better. At first glance, this developer could be credited with doing 3 years worth of work in a single month, and doing the work of 15 developers. That's definitely more than a 10x, that's a XXXxer. Truly incredible.

However, again, it's a fallacy. The reason why projects stall or become drawn out are rarely the fault of developers, let alone an entire team (though they *can* be). Mismanagement, corporate inefficiencies, and office politics can make a simple project into a nightmare. From scope change, to unresponsive co-workers, other projects getting in the way, and the pace of technology, there are hundreds of potential hurdles to get through. Ones that PMs and managers are usually responsible for handling and even they sometimes can't handle all of it. Such hurdles can stretch a 3-month project into development hell that goes on for years.

When finally an outsider is hired at a terribly high rate and presented with a specific spec, the game changes. Scope change now requires new contracts, office politics had to have been settled by now, approvals have to be timely or already done by this point. Any delays or mistakes cost real-time additional money (not just fixed budgetted-for salaries). The developer also has a clean slate at this point, no more legacy software to deal with. Suddenly, the project is free of all of these hurdles and can easily be fulfilled. And voila, an outside contractor suddenly accomplishes more than the entire company could together.

This is visible in Startups as well. Ever wonder why startups can get a project off the ground within a short amount of time? This is it. It's not a band of 10xers, it's a band of people that are simply not bound by the rules of their company (that and enthusiaism! :)).

In short: a 10xer is a scapegoat for accomplishments and an utterly simplified situation in which a single developer is made out into a legendary hero that others should aspire to.

###VIM and/or Emacs and/or Sublime Text will make you a better developer

There has been a strange rise of people using super-simple text-editors to write code. Vim is a text editor shipped and/or available for most operating systems in the world. It's available via the command line and recently via GUI as well. Emacs is pretty much in the same boat albeit a few years younger. Sublime Text took what these two offered and created a very powerful text editor that was simpler than IDEs (integrated development environments) but more user-friendly than the commandline text editors.

In truth, developers will try to persuade you that THEIR setup is better. It's just something we do. I use VIM, I recommend it, it's a wonderful experience. But I've used Sublime Text as well as many IDEs and they all work well. In fact, the difference in productivity was the setup of these editors, not the editors themselves.

There was recently a discussion about how Eclipse (a popular Java/C++/anything IDE) is slow; however, with some adjustments, it's an incredibly fast and wonderful editor. VIM experienced a rebirth when people realized that about 50 lines of configuration (not a lot, trust me) and some plugins could make the editor extremely powerful *and* user-friendly. Emacs is the same situation.

So it's really up to you to know what works. All I can recommend is that you learn as much about your editor as possible and adjust it to your specific needs. Look up how to customize it, what plugins can help you out, and how to make it as speedy as possible. That will definitely help you in getting bogged down.

But will it make you a better developer? No, just a less frustrated one.

###Language X is better than the rest

There is no holy grail of languages, in fact, every language serves a specific purpose (or many) and has a niche to fill. You can easily tell that by the number of users that use it for their projects. For instance, both Rubyists and PHP developers like to claim that their language is better while neither really is. They both work a little differently, have a different development ecosystem and thus serve a different purpose. As much as developers love to bicker, in the end, it's all just a matter of preference.

Now, that's not to say that some languages aren't better at some things over others. It's common knowledge that if you want to write code that runs fast, VERY fast, you write it in C++ because it's one of the fastest languages that's still high-level enough that coding it in is not a (terrible) struggle. If you want to code a website, however, C++ may be a pain and so you look at the web development languages instead, they do their job well. If you want to write interactive code in the browser, you'll have to stick with Javascript, no matter what you want to do.

Otherwise, a lot of the "is it better or not" also depends on your paradigm (so functional programming is *not* fun in PHP), on what you like as far as the syntax goes (like where Python requires indentation), and so on, all very subjective and all very variable.

So anytime you hear someone say that one language is better than another, add a little "for my specific purposes and my preferences" at the end of that statement.

###You need to know Math

Well, yes, and no. Mostly no. Taking Calculus III at College will not make you a great developer, nor a good one, I know I've tried. It's completely beside the point. Will you be dealing with numbers? Yes, but that's just basic high school Algebra. At most, you'll be dealing with trying to figure out how efficient your code is in terms of the big "O" but that's just Algebra II/III-level math and it doesn't come up on a daily basis.

So next time someone says, "You need to be really good at math to be a programmer!" or "You're good at math, you'll be a really good programmer!", slap them in the face (don't.). However, there are fields of programming where math IS important.

One of them is game development where you'll have to learn the basics of matrices, physics, and angles. But again, that's just basic physics, some Algebra, and linear Algebra. On top of that, many engines handle this math for you already. And if you DO want to be more mathematical about it, there are a few courses that can get you up to speed within a few weeks.

But that's game development. Most other fields don't require advanced math skills.

###Developers have to know all the design patterns and algorithms

That's another no. In fact, there was an interesting discussion on Quora about real-world application of algorithms and one of the developers mentioned how they created an incredibly awesome matching system for users on a social network and after some time and study found that the matching system was an algorithm they did not know about. However, these stories are rare.

What's less rare is people intuitively using design patterns and algorithms that they either forgot about and learned a long time ago, or they don't know about at all. Knoweldge of these can be useful but 90% of the time, algorithms do not make or break a good application. So if you can't recall what a heap sort looks like or if you're using a Multiton or Object pool, don't despair! You're not a bad developer.

On a side note, there has been a lot of discussion about how adherence to design patterns can lead to low-quality apps since many of them are misused or, since they're rather abstract, they do not fully fit the job. Algorithms have been debated for a long time as either completely useless at a higher level (application-level, where you code), or already implemented where they matter (such as in basic functions of the programming language you use).

###Offshoring code will destroy your career

If you're in the US or the UK, you might be hearing the scare of off-shoring code, the practice of having developers in other countries do the same work but for much less. Don't despair. First of all, certain countries definitely do have great developers who work at great prices (I'm looking at you Eastern Europe!); however, there is a simple matter of language barrier and luck that keeps projects from succeeding and ultimately costing a company more than it would have spent on proper developers in its country.

The reason for this is two-fold. One of them is that language does matter. Trying to explain nuances of business logic to someone who doesn't use English as their primary language can be difficult. It can also result in miscommunication which can result in a botched project. And that's a costly mistake. Especially if a developer gets frustrated by unclear clients and drops the project after getting paid. It's not uncommon.

And this is where "luck" comes in. The chances of successfully maneuvering the dark waters of offshored developers successfully is slim. Not only do you have to find a good developer, but you have to find a good developer that can speak english well, be able to follow your directions, and have a good employer (middle-party) as well. Offshore dev shops have high turnovers, bad management, and people that just want to make quick money. Often times even well meaning developers can be caught up in a bad situation and clients end up with a bad project.

What happens then? There are tons of offshoring horror stories but they all end up similarly. The client may try again and fail again, the client may run out of money and drop the whole thing, or, most commonly, the client will turn toward more reliable developers and dev shops in their country where at least they can enforce contracts.

###When you ship software, it's bug-free and doesn't need maintenance

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

###Once you master a language, you're done learning

You're not because the second you think you "master" something, you'll find out there are a million new things to learn about it. For instance, CSS should have been probably the easiest "language" to learn (I use that term loosely here), yet there are professionals that dedicate their entire lives today in order to learn the nuances of it, how to exploit it, and make it work for them. The second you master the syntax, you'll learn about Object Oriented CSS (a way to organize your CSS such that it's easy to understand, it doesn't reuse styles without cause, with some other perks too), and then you'll find out about paint optimization (styling so that the browser takes less time to apply your styles), then there are animations, CSS preprocessors that allow variable use, etc. etc. And it keeps going.

And every language is like that. And the world is moving. Once you think you have a handle on one thing, you'll find the next thing to learn, and then you'll have to go back and update your understanding of that one thing because it just got a massive overhaul. Then there are "best practices" (a collection of practices that one should employ for certain programming tasks) which update constantly.

Basically, the learning never stops. You can't stop because if you do, you'll find yourself knowing legacy software that no one uses any longer. It's really not as scary as it sounds but it's something to keep in mind.

###And there is more

There are many more myths so just keep a sceptical mind and don't trust overreaching conclusions (like "Developers that learn C first are better developers").
