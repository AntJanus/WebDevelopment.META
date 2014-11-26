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

There are some features to help with that process of colaboration.
