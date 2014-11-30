title: Handling Critique
----
content:

I like to say that people that criticize you unconstructively are people that are not happy. And with that, I'd like to talk about handling critique from your peers. Just like artists that expose themselves and their inner creativity to the world face criticism, commentary, trolling, and other forms of back-communication, developers expose their code and their thought patterns to the world and face much the same. And it can be very difficult to handle.

So difficult that there are developers that have quit working on public projects because of it, or have stayed away from twitter in order to get some peace. One well-known developer Notch (creator of Minecraft), wrote an entire article about how he no longer wanted to face the public because they expected him to be this god-developer while he just wanted to work on and create games.

Whenever posting a project or writing a blogpost, there's always the fear of backlash and until you experience, you won't know how bad it can be.

## Types of people on the internet

For every post and every project you post publicly or on a forum, you'll face a myriad of people who will have their two cents to add to the discussion. Triage the comments to find those that really matter, those that require responses, and those that need to be fully ignored lest you want to lose your sanity.

### Trolls

The hardest part is facing trolls, or better yet, figuring out WHO exactly is a troll. A troll isn't just someone who tries to provoke a flame war, it's also an individual that merely has nothing positive or constructive to add to the discussion, even further, I'd say, a troll is someone who will attack you for no reason.

Look out for the commentary that seems strangely provocative and holds no substance and skip it. Just about every developer has gotten caught up in the 20+ message discussions that ended up nowhere only to realize the person was just trolling them.

Here are some common messages to watch out for:

1. "Your technology X sucks, technology Y is so much better"
2. "This is so bad, you should stop being a developer"
3. "Not another stupid post like this"
4. "How is this better than \[unrelated project\]?"

There are definitely more messages like that. The best thing you can do is ignore these comments, and if possible, downvote them. Pay them no attention whatsoever. Also remember that you should *not* stop being a developer, you're a good person no matter what the troll says, and death is definitely not an appropriate response to your article.

Some trolls go very far to insult you, almost personally as if you were their greatest enemy. Again, ignore it. People say you should grow thicker skin, I say you should grow more selective eyes!

### Flaming commentators

Some people that comment have a certain way with words that makes them seem aggressive. In fact, they may sound almost like trolls, with possible threats, almost having a personal vendetta against you; however, they will have a comment of substance. In these situations, it can be prudent to read through their comment but be careful not to get too emotionally invested in it.

For instance, here's a sample comment that paraphrases one that I've received in the past:

>You're a terrible developer. Can't imagine why someone would even post this article. How is this helpful at all? What's there to learn from this article? It's pure garbage.

I ended up responding but read through it again. What the person is saying behind the aggression is that my article wasn't helpful to them, and possibly lacked focus. They did not get anything out of the article. I prodded the person for more information and they apologized for their brash words (sometimes, people forget there are live human beings behind those written articles) and explained how my article lacked cohesiveness and examples and thus was not useful to them.

In another situation, I faced a commentator who attacked my project as if it had offended his mother. Yet, through the comment, I was able to learn that the commentator was simply frustrated by my examples. They did not hold real-world applications, and so I had to explain that the examples were supposed to be abstract, more of "this is how it works" rather than "this is how you use it". Several of the other readers came to my rescue.

The simple fact is, not all comments will be helpful and you can't satisfy everyone.

For these kinds of people, keep in mind that they forget that *you* wrote the articl or created the project and though seemingly personal, the comments' aggression has nothing to do with you.

### The constructive critic

Constructive criticism is the holy grail of posting your projects or peer reviewing code. It's a comment that helps you, your article, and your project become *better*. Look out for people that will disect your project and discuss with you the finer points of your development. They may tell you that perhaps your project could be handled better with streams, thus eliminating lots of logic from a certain file.

Or they may tell you that you're using the library correctly and as intended and that's definitely something to applaud for.

In the end, these are the people to look for as far as validation and writing down what needs to be changed. These commenters may write entire paragraphs for you.

Make sure to *respond*. You want these people to keep doing what they're doing because they're few and far in between.

### The questioner

The questioner is basically a person that asks you questions that require you to defend your position and at the same time think about what the question means. In an earlier example, I discussed trolls asking you to compare your project to an unrelated project (like MySQL adapter for Symfony being compared to a Mongo command line tool, seemingly related but not). What if they asked you how it relates to an actually similar project?

Let's say you have a file-based CMS. It's the new "build your own blog" application that just about every developer creates in order to test their skills. Thus, there are tons of these and many developers post them for critique. The questioner will jump to ask immediately how it compares to a more popular file-based CMS and it's up to you to defend your position.

In a way, this is constructive criticism that forces you to critique yourself. How IS it different? Is it faster? Easier to use? Does it have more or better features? Ask yourself and see what happens.

Here are some questions that a questioner may ask:

1. "Why did you use technology X for this particular project?"
2. "How does your project compare to \[related project \]?"
3. "What was your biggest challenge with the project?"
4. "I followed your article/tutorial, what would be the next step for someone wanting to further?"
5. "Do you have any more examples of this work?"
6. "I tried to read your code, how does X work?"

And so on. Make sure to answer these as they will not only help the questioner but help you understand your project and writing better.

### The praiser

Almost as useless as a troll (but easier on the eyes!) is the praiser. That's a person that mindlessly praises any project for possibly no reason. I've seen a lot of new developers do that and they're usually unable to participate in any *real* discussion. It can also be the case of someone genuinely encouraging you. However, again, it does not help you with your project other than stroke your ego.

Take the praise, thank them for their help and move on.

## Why even expore yourself to the public?

I've already covered the types of commenters and that should have already revealed *why* you should even seek the comments out. Many developers feel uncomfortable with being exposed to the public. And that's okay; however, if you're open to posting your work on reddit, hackernews, or other social media sites that cater to developers, you should do so, and you should take full advantage of it.

Unlike other fields, development allows us to publicly announce and dissect our projects. There are definitely several other fields where this *could* be done but I'm not sure how effective it would be. I'm sure that architects could share prototype plans with each other, and discuss the merits of moving columns or even rooms from place to place. Engineers could probably do the same, though benefit less. Designers do have a similar public discussion and it's just as crucial to them so at least there's that.

What's great about the public forum about your personal projects is the feedback. Through feedback you can learn a lot such as:

1. who might want to use your work and who might be adverse to it. Perhaps newer developers will be baffled by your open source utility app while more experienced developers will think you're God-sent.
2. how your app fares on the code. Developers WILL check out your code and architecture. Gaining feedback on either will help you fix issues, gain insights on things you may have missed, and hopefully discern between useful and not useful comments in order to learn how to make your app better, and your skills sharper.
3. where your app excels and fails feature-wise. You may have one approach to using your app, but others will use it differently. Even if you're writing an article, you'll get the same feedback. It'll help you gauge where your app fails and where it excels and what you can do about your failures or if you should pivot your app's goal.

And much more. Try to write a sample article discussing some technological challenge or breakthrough, or prepare an app to be publicly dissected and try it out!
