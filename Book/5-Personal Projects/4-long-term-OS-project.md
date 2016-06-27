title: Long term open source projects
----
flag: review
----
content:

If you're lucky, one of your apps or tools will become a long term open source project with lots of interaction and usage by outside developers. If that is so, prepare for the long haul and learn how to manage one of these projects so that they not only don't take over your life, but so that they can thrive even further.

I'll be discussing all of these aspects of a project in terms of Github since it has great bug tracking, pull requests, and so much more. It's the prime real estate for open source work.

## Bugs & Issues

Let's explore bugs. In Github, one can open an "issue" on any open source project that has issues enabled. This allows developers to submit feature requests, bugs, ask for help, and communicate with the developers of the project about the project.

To keep a thriving project, one has to deal with bugs and issues in order to keep up the usage but also to not get swamped. A sign of a healthy thriving project is a number of opened issues and a number of opened pull requests (external or internal requests to merge in code) as well as discussion and closing of them.

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
