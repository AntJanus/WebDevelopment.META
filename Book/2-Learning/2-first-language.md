title: First Language
----
flag: done
----
content:

I realize I'm going at break-neck pace here but let's dive into the first programming language and what to learn. Given that the basics are done (HTML/CSS), this is the next logical step. Many don't take it and prefer to stay on the front-end but I believe that any successful developer should know the basics of at least one server-side programming language or at least Javascript to work on the front-end.

The beauty of programming is that once you learn one language, it's easy to pick up more. It's not like actual linguistics. You're still writing English just in a different manner. That's the key. Instead of using the word `var` to specify a variable (in Javascript), you may have to use `$` prefix (in PHP). But an array is an array (a list of other variables), and a string is always a string (string is a collection of characters, so you could say it's any length of a "text"). Basics are the same.

This is why Computer Science degrees start with the C programming language. It's where they teach about Strings, Integers, and other data types. Since many languages of today derive from it and most of the world runs on C++ (which, at the basic level, will look similar), it's easier to jump from it into whatever field you choose to. It's definitely much more useful to learn C and C++ if you're going into a field outside of web development.

However, the nuances of various languages can provide stark differences in implementation and thus in learning it.

I wanted to give a rundown of the most popular starter web development languages of today, their pros and cons, and how they in terms of difficulty learning it. On top of that, it's a pretty good idea to know how the job market is for each. It's all up to you.

Luckily, whatever decision you make isn't life changing, you'll eventually get to a point where you will tackle the task of learning a secondary language. Not only that but overall, each language I'll present you will prepare you well for the world out there, no matter which choice you make. Try not to make the option paralyze you! Just pick one and go with it!

**Note:** The average salaries are pulled straight from Indeed.com and may not be representative of real-world salaries in your own area.

## PHP

PHP is how I got started out and I would say that I very much enjoy the language. It's a wonderful starter language but let's rip into it before I tell you the details.

### Syntax

PHP syntax is superbly simple. The cool thing with PHP is that you can mix it with HTML like so:

```php
<?php
    $title = "My page title";
?>
<html>
    <head>
        <title><?php echo $title; ?></title>
    </head>
</html>
```

The `<?php ?>` tags denote the use of PHP. And while it's awesome that you *can* use it along with HTML, most modern applications use it in an Object Oriented way with a dedicated templating engine. Sounds complicated? It's not really that bad. A more complicated example can show you how advanced PHP looks like:

```php
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
```

Taken and simplified from [Laravel's container class file](https://github.com/laravel/framework/blob/4.2/src/Illuminate/Container/Container.php). No, it doesn't work but it showcases some ideas behind PHP OOP.

### Learning it

Learning PHP is very simple and because of its ability to run alongside HTML (albeit on a server and with a `.php` extension to the file) learning creates immediate feedback. Simply learn something new, add it to your file and refresh the page. This makes programming a breeze at the start.

On top of that, several major frameworks such as Symfony and Laravel make it a contender for large applications and small apps alike. In fact, it supports traditional Object Oriented programming and has a full class system with all kinds of cool stuff.

It takes a week to from knowing nothing to building your own first rudimentary blog. It won't be very OOP but it'll work.

### Frameworks and tools

PHP has grown significantly more modern in the past several years. Some of the main frameworks of today include Laravel and Symfony, all of which can run in enterprise environments as well as work for startups.

PHP also has its own package manager (a script that allows for better importing of libraries) called Composer.

As a sidenote, Wordpress, the largest blogging platform and CMS, runs on PHP and PHP is a requirement to work on the templates. And did I mention Facebook runs on PHP and actively makes the language better?

### Jobs

I've already mentioned a few tools so that should give you an idea of what people look for in a PHP developer, knowledge of some of these tools. As far as work goes, let me reiterate something from the last section: the largest CMS in the world runs on PHP.

There are tons of Wordpress developer jobs. What's interesting, however, is that many of those don't require in-depth PHP knowledge and many front-end developers (developers that focus on HTML/CSS and the site itself rather than the underlying logic and programming) choose Wordpress and PHP as their main tools.

Average Salary: $92,000/year

## Ruby

Ruby vs PHP is a much discussed topic. PHP developers generally don't like Ruby and Ruby syntax, and it goes the other way as well. One of the most distinguishing differences is that Ruby is a "spec language", meaning that someone somewhere wrote down how everything in Ruby should work. This meant that there is a Ruby interpretted written in Java, in .Net, and in some other languages as well, alongside the official release. PHP doesn't have a spec, there's just a release, this is slowly changing but we're not there yet.

### Syntax
Ruby doesn't work like PHP, it can't just be mixed with HTML. Ruby has its own "server" which runs all of Ruby code. Instead of simply opening a `.rb` page using a server, a Ruby server has to point to a file and opens only that file (and any imported/included files, which is how the entire thing works basically).

Here's an example of a "Hello World":

```ruby
puts "Hello World";
```

Once you get the basics, it's time to get into Sinatra or Rails (Ruby frameworks) and you're going straight into Object Oriented Programming.

```ruby
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
```

Taken from the [Rails repository](https://github.com/rails/rails/blob/master/railties/lib/rails/application.rb) and simplified to show syntax.

### Learning It

Ruby has become the favorite language of many coding courses and thus there is a wealth of tutorials on the subject, way more than for PHP. However, learning Ruby has necessarily become implicated with learning Rails or another framework. While it is possible to code without Object Oriented Programming, it's not possible when coding for the web.

Once you get the OOP down and start working straight with Ruby, you'll find yourself surrounded by a great community that will help you along and answer all of your questions.

So as far as the learning curve goes, I'd say it starts out steep but then it gets very easy.

### Frameworks and Tools

There are a number of tools that ruby is associated with.  Bundler which is a package manager, there is RVM/RBEnv which allows Ruby developers to run several different Ruby versions at once, depending on which project they're on.

The two big names in Ruby is Rails (which shot Ruby into popularity) and Sinatra (another framework). There's also Rake which allows Ruby developers to run various tasks from the command line (like making database changes, and running test suites).

### Jobs

Ruby has been one of the main languages that startups have focused on for developing apps. In fact, Twitter was originally built on Ruby until it was switched over to Scala.

It is, as PHP, in the top languages in terms of employability; however, note that Ruby work seems mostly used at startups and mid-sized companies.

Average salary: $105,000/year

## C\# and ASP.NET

C\# is an interesting language choice in that, unlike the others, it's not known for being Open Source or cross platform. C\# was created by Microsoft for a variety of purposes. One of them were desktop applications, the other one is web development via their ASP.NET framework. It's important to see the language necessarily as part of the framework as well. Note that ASP.NET has three portions: the MVC part (object oriented => complicated), Web Pages (simple), and Web Forms (oldest style).

### Syntax

C\# is very reminiscent of C++ and Java in that it's an Object Oriented langauge by default and the way it works is similar to the two in terms of syntax. Strangely enough, C\# allow learning it the same way you learn PHP only because of some recent strides by Microsoft to make things much easier.

Below is an example of C\# templating using the Razor engine (it involves mixing HTML and C\#).

```csharp
@{
    var title = "My page title";
}

<html>
    <head>
        <title>@title</title>
    </head>
</html>
```

ASP.NET does not operate like PHP despite how it looks. Most of the regular code must be created through an object oriented manner like so:

```csharp
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
```

Taken and simplified from [Asp.Net MVC](https://github.com/aspnet/Mvc/blob/dev/src/Microsoft.AspNet.Mvc.Razor/RazorTextWriter.cs).

### Learning It

C# and ASP.NET can be interesting in terms of learning. On the one hand, you can modify websites within just a few minutes, on the other, the Object Oriented programming can feel daunting. On top of that, you're required to use a Windows machine and a specific toolset. (though there is a lot of effort to change that).

However, given enough time, and learning OOP, you'll find yourself working with a robust framework.

There's also the alternative of using a non OOP framework meant for beginners and in that case, it really is just like PHP. In case you're interested, check out C\# and ASP.NET Web Pages.

### Frameworks and tools

So I mentioned an MS-only toolset. And it's true. You'll be using Visual Studio, an IDE that works with C# and ASP.NET, to make websites. One of the top frameworks for C\# web development is ASP.NET MVC, the object oriented version of ASP.NET, and there's also ASP.NET WebPages, the non-OOP version of ASP.NET which allows users to writer simpler applications and websites.

The Windows ecosystem is ripe with all kinds of tools. One of the first you'll encounter is called NuGet, a package manager for all things C\#.

### Jobs

ASP.NET is notorious for being an enterprise-level framework. In short, big companies, often non-tech oriented, use it. What's great though is that most of these companies invested into a ASP.NET architecture for the long haul, meaning that there are lots of big companies looking for .NET developers.

Another interesting point is that startups are not as interested in C# as other languages. The only tech company name you can associate with .NET (other than Microsoft) is StackOverflow. This means that the average pay for a .NET developer is significantly higher than any other language out there.

As a sidenote, C# and C# conventions easily translate into App development, Game development, and other types of development unlike Ruby or PHP which are stuck being server-side. This may account for the slightly lower average salary (the average includes multiple industries).

Average salary: $92,000/year

## Javascript

This is an interesting addition to the list. For one, it's a front-end programming language, the language of the browser; however, recently, a new type of technology called NodeJS allow for Javascript to run on the server and is currently one of the hottest server-side languages. The server-side implementation is very young however, and the front-end usage of the language is starkly different (not in syntax but in programming paradigm).

### Syntax
Depending on which side you go to, typical Javascript will look different. Let's first consider the typical front-end usage:

```js
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
```

Javascript on the front-end can be very confusing but once you get the hang of it, it makes sense, you're just augmenting what the user sees. In this case, the JS will change out the inner text of the paragraph to be "hello world". Here's JS on the back end:

```js
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
});
```

A little different. NodeJS-land is as if a completely new Javascript but luckily, the two implementation (server-side, browser) have started to share many libraries.

On the front-end, JS works in an "evented" manner. Basically, do something, and Javascript responds. Javascript tells the browser, "If a user clicks on this button, run this code".

### Learning It

Learning Javascript is two-fold as everything else about it. On the browser, learning it can be difficult to understand because of its "evented" nature. And it definitely is not a good choice for a first programming language as most server-side languages work completely differently. However, Javascript is hot and there are tons of resources available.

As far as difficulty on the Node side, most call it incomprehensible at first. Especially since so many configurations (such as server) have to be done manually. There are some frameworks that make this process easier but the entire "async" nature of Node (ability to send out several requests at the same time, parallel to each other) can be difficult to understand even by people that are already familiar with another language.

### Frameworks and Tools

Javascript is known for its wealth of tools and helpful libraries. One of the most important today is Bower which is a package manager for javascript libraries. There is also Gulp and Grunt which are Node projects that have become a streamlined part of a front-end developers job.

Outside of that, a couple of interesting frameworks to mention are: AngularJS, the jQuery library, and Express, a Node library. Angular is a front-end MVC framework, trying to bring what's on the back-end into the front-end. jQuery is a library that makes front-end interactions a breeze and Express makes back-end Node setup much simpler than doing everything manually.

### Jobs

Javascript is the hottest language on the market currently. Companies are readily switching to Node, both large and small, and every company that has any sizeable presence online is perfecting its user interface and user experience with the help Javascript. There's no better language today to learn in order to get a job quickly.

Average Salary: $94,000/year

### Python

Lastly, there is Python. Python has been around for a while and it has MANY different applications. From command line tools, to game programming, to websites and more, it's more versatile than any of the listed languages. On top of that, it's probably the most cross-platform language out there.

### Syntax

Python syntax is somewhat similar to Ruby. It uses whitespace to structure code so unlike PHP or Javascript, whitespace matters.

```python
parents, babies = (1, 1)

while babies < 100:
    print 'This generation has {0} babies'.format(babies)
    parents, babies = (babies, parents + babies)
```

Check out the [SimplePrograms](https://wiki.python.org/moin/SimplePrograms) page on Python's wiki. It contains this and other examples. As always, here's the more complicated example:

```python
from django.utils.http import http_date, parse_http_date_safe

class ConditionalGetMiddleWare(object):
    def process_response(self, request, response):
        response['Date'] = http_date();

        if 200 <= response.status_code < 300 and response.has_header('ETAG':
            if_none_match = request.META.get('HTTP_IF_NONE_MATCH')

            response.status_code = 304

        return response
```

A sample code taken from [Django's http middleware](https://github.com/django/django/blob/master/django/middleware/http.py). Note that


### Learning It

Python is among the few languages that are used to teach programming from the get-go, and it's one of the most useful ones in that manner. Unlike C++ and C, Python doesn't have to be "class based" or object oriented, python is just..python. It can be complicated, and it can be simple. Getting started with Python is a breeze.

### Frameworks and Tools
For web development, the default standard for Python is Django, an MVC framework that drives most of the major webdev python projects. Python also has its own environment settings (usinv virtualenv) which allows you to use various Python environments for various objects. `Pip` is the python package manager of choice.

### Jobs
The job market for Python is varied. It's definitely not a "hot" language but it's neither a dead one. Python is used pretty much everywhere but only a few webdev shops choose Python as the way to go.

Average salary: $102,000/year

## So which one?

It's a difficult question and a number of developers do argue about it; however, in the end it's up to you and your comforts. Look over the syntax, checkout a few tutorials and see what makes sense for your own personal method of learning.

