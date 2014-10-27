title: What language to tackle first?
---
content:

PHP: fast results, easy setup, encompasses big tools (Wordpress), most used web dev language, cross-platform

````php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test", 'root', '');

$comments = $pdo->query('SELECT id, comment, username FROM comments');

$comments->setFetchMode(PDO::FETCH_ASSOC);

while($row =

?>
````

Ruby: not that great on PC,

C#:

Python:

Javascript:

````js

//helper function
var addClass = function(el, className) {
    if(el.classList)
        el.classList.add(className)
    else
        el.className += ' ' + className;

    return el;
};

// selecting elements
var commentTrigger = document.querySelectorAll('.comment-show')[0];
var comments = document.querySelectorAll('.comments')[0];

//event handler
commentTrigger.addEventListener('click', function(e) {
   //ajax request
   request - new XMLHttpRequest();
   request.open('GET', '/posts?limit=10', true);

   request.onload = function() {
     if(request.status >= 200 && request.status < 400) {
        comments.innerHtml = request.responseText;
        addClass(comments, 'show');
     } else {
        console.log('Error');
     }
   }

   request.send();
});
````
