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

As you can see, this is much more organized than using simple functions.

