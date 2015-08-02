title: Legacy Software and Technical Debt
---
flag: review
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
