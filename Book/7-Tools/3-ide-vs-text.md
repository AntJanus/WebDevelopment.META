title: IDE vs Text
----
content:

One of the greatest tool conflicts developers face is choosing between an IDE and a text editor. For beginner's, the pros and cons are difficult to understand but they're always tempted to go the IDE way. However, professionals understand things only nebulously and stick to what they've always worked with. I haven't seen it any other way.

However, certain languages (like Java and C\#) seem to push people the IDE way while others (Python, HTML/CSS) push people the text editor way.

## IDE

An IDE stands for Integrated Development Environment and it is what it sounds like. It's an editor that goes above and beyond text editing, it can include tools for FTP connection, debugging consoles, library imports, test runners, and even version control features. It's supposed to be the one-stop-shop for all your development needs. Some IDEs go beyond that and include a built-in command line tool for you or can house credentials with which to SSH into a machine. Other IDEs include boilerplate projects so that you can spend less time setting things up and more time working.

In essence, you start a project and you shouldn't have to exit out an IDE until you're done. In fact, some IDEs feature plugins and integration with web browsers so that you really don't even have to open one manually when testing things out.

There are several well-known IDEs, namely Visual Studio, Eclipse, Netbeans, and the IntelliJ suite of IDEs. Eclipse and Netbeans are known for their great Java support while Visual Studio is for the C\# world. IntelliJ's IDEs are meant to target all the various popular languages.

There are several pros to using such an integrated suite:

1. autocomplete and intellisense-type features - this is important especially for Java and C\#. These features are basically smart detectors that try to figure out what you're trying to type next. For instance, if you import a class named "Math" and start typing "po", it may try to autocomplete to "pow" (or 'power of'). Java can be especially complex with long class and method names so IDEs try to make things simpler
2. everything's just there - instead of trying to install a million different applications to accomplish all the tasks you need, you have one app that's already aware of your project and can keep all your settings. On top of that, you don't need to open up other apps while working.
3. IDEs feature all kinds of real-time feedback - from the aforementioned autocomplete to linting/hinting of your code and much more. They can even move your file around based on its name. Or using `@to do` comments can add to an IDEs internal list of todos that you can access.
4. you work in terms of projects, not files - Instead of opening a single file, you can open a single project with all of its settings, files, and even last-opened file right there in front of you. Development is no longer a disjointed activity.
5. compiler - lastly, many IDEs feature a built-in compiler and even livereload compiling. Eclipse has this feature and allows you to change code and see the changes live.

However, with those features come penalties. Longer installation times, bigger downloads for the IDE, longer time opening the application, etc. And in fact, having so many features packaged into a single app can be confusing and frustrating. Some IDEs almost require entire manuals (and I'm sure there are books out there to prove it) in order to use them efficiently and fully.

## Text editor

A text editor is the equivalent of notepad on steroids. The idea behind a text editor is to force a developer to focus on the code, not testing or deployment, not SSH or FTP, and not version control, just the code. Some developers find this very "zen" like. And the text editor market is populated with lots of contenders and there seems to be no winner in sight.

Some popular text editors are Sublime Text, VIM, and Emacs. With Sublime Text functioning somewhere between an IDE and text editor. It has plugins and lots of similar functionality to IDEs but it's very light-weight, fast to open, and easy on the eyes. IDEs tend to have many different tabs and sub-sections opened to present you with as much information as possible (conducive to some developers) while text editors try to do the opposite, hide as much as possible other than the code right in front of you.

This works well for languages like PHP, Javascript, and Python where the code is simpler in terms of names and structure. Even the number of files and folders is usually much less than Java and C\# projects.

Again, there are several pros to using a text editor:

1. they are quick - IDEs are known for being slow and hoggy. Text editors are quick and can often run ubiquitously across many different platforms. In fact, VIM can run on just about every platform and a compact version of it is shipped with most Linux distros
2. they are zen -

Most text editors *are* extensible so they can take over a lot of the IDEs cool features like autocomplete; however, they often don't want to take over more roles like SSH or FTP. It's easy though to use command line tools or outside tools as dedicated substitutes. Interestingly enough, VIM and Emacs have their own workflow connected to the command line (they can be run straight from a terminal) involving tools like Tmux which helps split apart panes within a terminal, and loads of other tools.

## Try both, pick what's best for the project

I suggest you try both, pick the one that's more comfortable. IDEs are really wonderful for those heavier languages, and for C++ as well (and non-web languages); however, text editors are so lightweight and simple they help bring about full focus on code. Either one works as long as you're efficient at it. Just as a sidenote, text editors *are* gaining in popularity, especially VIM. In fact, so much that the intelligent autocomplete so inherent to Visual Studio has an external plugin that hooks up to both VIM and Emacs so that users can keep working on those text editors instead of migrating away.

Lastly, IDEs are learning from Text editors about zen-coding, and so many of them have started to implement "distraction-free" modes, neater layouts, and even default skins that are easier on the eyes and thus easier on the mind.

