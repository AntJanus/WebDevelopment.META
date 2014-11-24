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

Legacy software is a fickle. It *always* feels old, terrible, and you're wondering who was drinking or smoking what when they wrote it. Often times, we get to look at our own software become legacy for one reason or another and so we realize just how far we've come from it.
