title: First Language
----
content:

I realize I'm going at break-neck pace here but let's dive into the first programming language and what to learn. Given that the basics are done (HTML/CSS), this is the next logical step. Many don't take it and prefer to stay on the front-end but I believe that any successful developer should know the basics of at least one server-side programming language or at least Javascript to work on the front-end.

The beauty of programming is that once you learn one language, it's easy to pick up more. It's not like actual linguistics. You're still writing English just in a different manner. That's the key. Instead of using the word `var` to specify a variable (in Javascript), you may have to use `$` prefix (in PHP). But an array is an array (a list of other variables), and a string is always a string (string is a collection of characters, so you could say it's any lenght of a "text"). Basics are the same.

This is why Computer Science degrees start with the C programming language. It's where they teach about Strings, and Integers. Since many languages of today derive from it and most of the world runs on C++ (which, at the basic level, will look similar), it's easier to jump from it into whatever field you choose to. It's definitely much more useful to learn C and C++ if you're going into a field outside of web development.

However, the nuances of various languages can provide stark differences in implementation and thus in learning it.

I wanted to give a rundown of the most popular started languages of today, their pros and cons, and how they in terms of difficulty learning it. On top of that, it's a pretty good idea to know how the job market is for each. It's all up to you.

Luckily, whatever decision you make isn't life changing, you'll eventually get to a point where you will tackle the task of learning a secondary language. Not only that but overall, each language I'll present you will prepare you well for the world out there, no matter which choice you make. Try not to make the option paralyze you! Just pick one and go with it!

## PHP

PHP is how I got started out and I would say that I very much enjoy the language. It's a wonderful starter language but let's rip into it before I tell you the details.

### Syntax

PHP syntax is superbly simple. The cool thing with PHP is that you can mix it with HTML like so:

````
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

PHP has grown significantly more modern in the past several years. Some of the main frameworks of today include Laravel, Symfony, and Silex, all of which can run in enterprise environments as well as work for startups.

PHP also has its own package manager (a script that allows for better importing of libraries) called Composer.

As a sidenote, Wordpress, the largest blogging platform and CMS, runs on PHP and is a requirement for templating.

### Jobs

I've already mentioned a few tools so that should give you an idea of what people look for in a PHP developer, knowledge of some of these tools. As far as work goes, let me reiterate something from the last section: the largest CMS in the world runs on PHP.

There are tons of Wordpress developer jobs. What's interesting, however, is that many of those don't require in-depth PHP knowledge and many front-end developers (developers that focus on HTML/CSS and the site itself rather than the underlying logic and programming) choose Wordpress and PHP as their main tools.

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




