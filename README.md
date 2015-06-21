## WebDeveloper.Meta

Web Developer Dot Meta is a free programming book that helps existing and aspiring developers learn about what it takes to be a developer, outside of coding.

New developers and existing ones as well struggle in several key areas that keep them from being better, using their tools correctly, and getting a better job. Not only that, but a number of topics are simply not talked about and quickly became a taboo.

WebDeveloper.Meta means to inform and teach on:

- **Learning** - how to get started? what avenues are there? What skills matter more than others? What's the difference between various languages?
- Getting Employed - what is necessary to get a good job? How do you deal with recruiters? What kind of options do you have?
- **Better Developers** - Already a developer? How do you get better? What kind of skills will make you more valuable? What about ethics?
- **Personal Projects** - How to work on your own stuff and how do you find time? What about long-term projects?
- **Meta**
- **Tools** - What's the difference between developing on an MS machine and a \*nix machine? What kind of tools do you need to learn? What are some good productivity tools?
- **Health** - what are some common health issues developers experience? What are some good exercise to help with common pains?

### Compiling

Gulp tasks that are available:

- `gulp addAll` creates a `all.md` file at the root of the project with the entire project without any preprocessing (pretty much just a `concat` action)
- `gulp count` runs wordcount and wordstats on the projects and saves them into a log file in `./logs`
- `gulp create:markdown` - creates a `allMD.md` file with all chapters by running them through `compileBook` which changes file titles to headings, folder names to section headings, and add appropriate spaces. It also logs out a list of empty files and files flagged for review
- `gulp create:html` same as before but creates an `allMD.html` file instead
- `gulp create:epub` uses the above process to create an epub from the `allMD.md` file. (**currently does not work due to some plugin issues**)

### File options

The following options get parsed through the files currently:

- `title` creates a heading in the compilation process
- `content` gets compiled as the content of the chapter
- `flag` can be set either to `done` (doesn't do anything) and `review` (doesn't compile and gets logged out in compilation process).


