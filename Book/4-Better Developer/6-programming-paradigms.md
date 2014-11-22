title: Programming Paradigms
-----
content:

Along with design patterns and algorithms, there is a thing called "Programming Paradigms" which is a style of computer programming. Much like a design pattern but it may or may not be tihgtly coupled to the language itself. Some languages support multiple paradigms.

In a way, paradigms are a lot like design patterns, they set a certain way of doing things; however, unlike design patterns, they force certain ways a developer can interact and use a language.

All in all, there are 4 main paradigms used in web development. Knowledge of them can help you decide which language to use and how to take full advantage of it. Trying to force a paradigm into a language can make it a pain and an excrutiating experience.

## Procedural

Procedural is the most straightforward programming paradigm in the list. You write code and it gets executed, line by line like so:

````
$numbers = array(1, 2, 4, 6, 3, 9);
$largerNumbers = array();
$smallNumbers = array();

foreach($number in $numbers) {
    if($number > 4) {
        $largerNumbers[] = $number;
    } else {
        $smallNumbers[] = $number;
    }
}

if(count($largerNumbers) > count($smallNumbers) {
    echo "This array has lots of big numbers!";
} else {
    echo "This array has lots of small numbers!";
}
````

When the program gets loaded, each of these lines gets run. You have the basic loops, control flows and everything else. You can even use functions. The point of procedural programming is to break down a task into variables and dsta structures as well as "subroutines" which can also be called a "function".

Most developers learn procedural programming first (unless you start with an incompatible language), mainly because it doesn't require special knowledge of classes, methods, private and public variables, etc.

Learning procedural programming helps you learn the basic tenets of programming. There *are* limitations to procedural programming and it has a tendency to become "spaghetti code". It's difficult to keep up a large project since everything runs together. A large enough application and you'll start to rewrite lots of code that could be reused. You'll also run into issues with redeclaring variables, overwriting functions, and other problems.

To put it simple, even with tools that help import outside files, you're working in a global namespace with everything. Functions do still have their own special scope (ie. variables created in functions do not necessarily exist outside of the function) which helps.

## Object Oriented

OO is the big dog mainly because of its basic philosophy. Instead of writing one big file (or several with imports) of logic that goes "do this, then do that, and then do that, and then run this function", we have "objects". Objects are groupings of functions and variables.

For instance, let's say you have a "connection" object (also called a "class"):

````
class Connection {

    private host;
    private username;
    private password;
    private db;
    private connection;

    public function __constructor(host, username, password, db) {
       $this->host = host;
       $this->username = username;
       $this->password = password;
       $this->db = db;

       $this->connect();
    }

    private function connect() {
        $this->connection = new PDO('mysql:host='.$this->host.';dbname='.$this->db, $this->username, $this->password);
    }

    public function sql($sql) {
       $results = $this->connection->query($sql);
        return $results->setFetchMode(PDO::FETCH_ASSOC);
    }

}
````

This looks like more of a declaration of how things should be done than actually any "doing", and you're right. OOP helps you declare these objects taht discuss a way of using them. Now that we have our blueprint, let's see what we can do with it. We can use this blueprint to create several connections that behave the same way.

````
$app1DB = new Connection('localhost', 'read_only_user', 'password!', 'app1');
$app2DB = new Connection('localhost', 'read_only_user', 'password!', 'app2');
````

As you can see, this is much more organized than using simple functions. This is a great way to mix procedural (step-by-step) with OO patterns as well.

Some languages, however, don't allow that. C++, for instance, depends on a main loop so somewhere in there, there will be a main object with a main loop that will call to the rest of the codebase. A good example of a strong OO language is C\#.

## Declarative Programming

Declarative is definitely an entirely different beast. Declarative, as the name betrays, is programming where you declare what's happening but don't necessarily discuss *how* it happens. For instance, let's discuss HTML, which is considered somewhat declarative.

````
<body>
	<div id="something">Text</div>
</body>
````

In this context, you're declaring how a View should look like, but you're not discussing when the DOM should be drawn, nor how it should behave, nor what happens when to it. You simply declare "this is what it should look like". A better example perhaps would be SQL. All SQL is declarative. An example may help you understand better what declarative programming is like:

````
SELECT * FROM users WHERE rating > 5
````

In this context, we're declaring what we want (all the data for all users that have a rating higher than 5) but never do we declare *how* it should be gotten. In fact, if you're working with SQL right now, try running `DESCRIBE` right in front of your SQL command to see how the underlying engine is trying to figure out the best and most efficient way to retrieve your data. Different SQL engines retrieve the data differently and allow for different types of searches.

What's great about declarative programming is that it hides the *how*. Unlike procedural programming where you have to specify every step or OO programming that requires declaration of object interactions, declarative programming is concerned with the results.

## Functional Programming

Functional programming is VERY hot right now, so hot in fact that PHP, C\#, and Java have added features to their languages in order to help use this paradigm in their respective domains. The most known functional language is Haskell; however, Javascript is a strong contender as well.

Functional programming is technically a subset of Declarative Programming; however, it's difficult to associate the two when Functional programming looks and feels more like an improved way of doing procedural-based programming. For instance, Procedural programming uses `for` and `foreach` loops to iterate through data while functional programming uses recursion which is where a function calls on itself in loops in order to create a result.

Here is an example of calculating a factorial:

````
function factorial(num) {
	if(num < 0) {  return -1; }
	else if (num == 0) { return 1; }
	else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(15));
````

Instead of using a for loop to count down from 15 until 0 or 1, we use the function itself to keep calculating the next number until the last one is calculated at which point, we start multiplying everything together.

Functional programming is definitely cool and one of the best parts of it is the idea of encapsulating small bits of logic into functions. Meaning that, every function is a small but powerful piece of code that can be easily tested and will "just work" every time. You can then chain these functions together. Here's a javascript example that works with "streams" and the popular Gulp build tool:

````
gulp.task('my-task', function() {
	return gulp.src('**/*.css')
		.pipe(minify())
		.pipe(concat('my.css'))
		.pipe(dest('/build/')
	;
});

````

In this example, we're using a stream (imagine, for the example, an array of files), which then cascades down through the functions. First, it gets minified, then it gets all added into one big file called `my.css` and finally, it gets saved into a `build` folder. Each of those functions (minify(), concat(), dest()) can be simple on its own but together, we can create powerful pieces of logic.

## Event-Driven

Event driven programming is where something happens (an event) and a piece of code gets run. Javascript is a wonderful example of an event-driven language, it's how it started. Javascript can latch onto elements on the page and respond to various events like so:

````
var myEl = document.querySelectorAll('#myEl');

myEl.addEventListener('click', function(e) {
	console.log('my element was clicked');
	e.preventDefault();
});
````

In this example, Javascript tells the browser to add an event listener (a function to be run) for a `click` event. When a user clicks on that element, the following function gets run. The `e` stands for event and information about it. By doing `preventDefault()`, we're preventing the browser's default event function to run.

Event driven programming usually takes place where interactions are required to run a piece of code or code requires some sort of interaction to operate correctly. This can happen in the browser, or for any other programming that your computer is running.

## So which is best?

There is none that trumps them all but generally speaking, Object Oriented is THE paradigm for large-scale applications. It helps keep the code neat and tidy. Functional programming is gaining tons of traction because of its simplicity and because of the overuse of OOP and the design patterns associated with it.

In terms of what you should learn, I believe that the aforementioned two are the most wonderful advanced topics to tackle. Procedural programming, in my opinion, is where you'd get started anyways so there's no reason to dwelve on it for too long. Declarative will become a part of your routine if you work with SQL and if not, there's always HTML.

And event-driven programming is a given for any sort of interaction-based programming with Javascript and the browsers, it's unavoidable, unless you go with a framework that does all the dirty work for you.

