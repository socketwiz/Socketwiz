
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="VI re-discovered">
            <h2>VI re-discovered</h2>

            <TwitterShare posted="05 Jul 2012"/>

            <p><em>Linux</em><br />
                I titled this article VI rediscovered, but it could have probably been more accurately titled, “I discovered the power of Vim”.  My first introduction to VI was when I was learning to use Linux back in the 90’s.  I needed an editor to modify all of the configuration files, and VI seemed like the editor of choice.  I made it through the initial learning curve, but never really considered it for more than editing a single file here and there.  I had no idea that when configured properly, it could have the power of an IDE.</p>

            <p><em>TextMate</em><br />
                Sometime in late 2004 or early 2005, my brother sent me a link to this new web technology called <a href="http://media.rubyonrails.org/video/rails_take2_with_sound.mov">Ruby on Rails</a>.  When I watched it, I am not sure which I found more amazing, Ruby on Rails or the TextMate editor.  Prior to that I was a big Windows guy and used <a href="http://www.slickedit.com/"> Visual Slickedit </a> which is an IDE of sorts.  I really liked that you could program multiple languages with it.  I could write scripts or code C++ all from the same environment.  But TextMate seemed like a whole new paradigm to me and I had to have it.  That is when I bought my first Mac, because TextMate only runs on the Mac platform.  I really liked the Bundles technology in TextMate and of course the tab completions.  Tab completions were not available in Slickedit which is sad because they really boost productivity.  The more I used TextMate the more I liked it, although I never really utilized all of its power.  But I came to rely on things like cmd-t, a method to located any file in your project with just a few keystrokes.  However as time marched on, updates to TextMate were marginal.  I was beginning to wonder if the project had died and sought out alternatives.</p>

            <p><em>RubyMine</em><br />
                Around 2010 I ran into a discounted version of <a href="http://www.jetbrains.com/ruby/"> RubyMine </a> and decided to give it a try.  Ruby seems to be the bulk of the code that I am writing these days and RubyMine provids an IDE like interface that I used to have in Slickedit.  With an IDE you can do things like autocomplete, refactoring, property and method lookups and debugging.  However it has one major problem…it is written and java and therefore it comes with all the problems inherent with java apps like poor memory management and poor performance.  I don’t mind autocomplete when its instant, but when it takes seconds, it starts to get in the way rather than help.</p>

            <p><em>Sublime Text 2</em><br />
                A few months back I ran into Sublime Text 2.  It is sort of a happy medium between TextMate and RubyMine.  Its sort of like TextMate with autocomplete but not really a full fledged IDE.  I started using this a bit because its a native Mac application and therefore did not suffer from the performance problems of RubyMine.  But I had become accustomed to some of the features provided by RubyMine.  So while it tends to fill some the gaps from TextMate, it doesn’t quite fulfill enough of the features I’ve come to depend on RubyMine.</p>

            <p><em>Vim</em><br />
                Over the weekend I was interested in learning more about a new technology called <a href="http://backbonejs.org/"> Backbone.js </a>.  So I ran across this <a href="http://backbonescreencasts.com/"> guy </a> and he was rockin Vim!  He stutters a little bit, but he really knows his stuff when it comes to Javascript and Backbone.js.  However I was really intrigued by his use of Vim.  I had no idea you could do some of those things.  I buy a lot of books from Pragmatic Bookshelf and in an email I had received was a <a href="http://pragprog.com/book/dnvim/practical-vim"> book </a> on Vim that I had not payed much attention to.  So I went and bought it and spent all weekend reading it and playing with Vim.  Holy cow is all I can say.  Who knew?  Its like an IDE inside of an editor these days.  It has plugins that extend it to do just about anything you could imagine.  So I spent the weekend grabbing a couple of plugins and configuring my .vimrc.  I didn’t go crazy, but here is what I ended up with:</p>

            <p><img src="/images/vim_tmux.png" alt="Vim in Tmux" /></p>

            <p><a href="https://github.com/tpope/vim-pathogen"> <em>Pathogen</em> </a>: This one is like the ring in Lord of the Rings, it rules all of the other addons.  You really need to install it first, it makes installing all of the other addons a piece of cake.  Once installed you simply create a directory under ~/.vim called bundle, then to install another addon its as simple as: git clone addon.git in that directory.</p>

            <p><a href="https://github.com/wincent/Command-T"> <em>CommandT</em> </a>: Its really a nonstarter for me these days if an editor doesn’t at least provide this capability.  CommandT is based on the TextMate cmd-t action that allows you to look up any file in your project by typing just a couple of keystrokes.</p>

            <p><a href="https://github.com/Shougo/neocomplcache"> <em>Neocomplcache</em> </a>: Who knew Vim now had autocomplete?  Apparently just me, hehe.  At any rate, neocomplcache enhances autocomplete to feel just like what I’ve become accustomed to in RubyMine…without the lag.  There is a sister addon that provides some <a href="https://github.com/Shougo/neocomplcache-snippets-complete"> snippets </a> technology similar to what you would find in TextMate.  Apparently this used to be included in the Neocomplcache addon but the author broke it out into its own addon for some reason.</p>

            <p><a href="https://github.com/tomtom/tcomment_vim"> <em>Tcomment</em> </a>: Tcomment allows you to comment code by line or block with a simple keystroke.  It doesn’t care if the code is a different language nested within another, it figures it out and does the right thing.  Another feature I picked up from TextMate that I really enjoy.  I’m not suggesting TextMate invented, I’m not sure who did, I just discovered it there.</p>

            <p><a href="https://github.com/tpope/vim-fugitive"> <em>Fugitive</em> </a>: Git wrapper from inside Vim.  It allows you to make commits, view the log, blame, and status, as well as move, add, and delete all from within Vim and handles the buffer that may point to non existent files after some of the operations properly.</p>

            <p><a href="https://github.com/mileszs/ack.vim"> <em>Ack</em> </a>: Apparently there is a better grep than grep…a grep written for programmers.  Where have I been?  The website is even called <a href="http://betterthangrep.com/"> betterthangrep.com </a>.  This addon interfaces ack and allows it to be used from within Vim to do project wide search.  Cmd-shift-f in TextMate.</p>

            <p><a href="https://github.com/tpope/vim-rails"> <em>Vim-rails</em> </a>: Being a rails developer this one intrigued me a bit but I don’t have much time with it.  The site claims that it will help with syntax highlighting, create partials from a block (like you can do in TextMate), jump between related files, and provide access to rake among other things without leaving Vim.  I’m running a Mac and I wanted to use the console version of Vim because I wanted to use it in conjunction with <a href="http://tmux.sourceforge.net/"> tmux </a> which I also grokked this weekend, but thats another blog post.  However this creates 2 problems:</p>

            <ol>
                <li>The first addon I downloaded CommandT has some ruby requirement that has to be compiled into the executable.  The one that ships with Lion doesn’t seem to have this compiled in.</li>
                <li>You can’t seem to map the Command key in the console version for reasons that I do not understand.  You can map it in the vim GUI, but not the console version, I’m not able to recreate thing like cmd-t and cmd-shift-f just for example.  I would love for someone to prove me wrong and show me how to do this.</li>
            </ol>

            <p>However I was able to overcome problem 1) by installing <a href="https://github.com/b4winckler/macvim"> macvim </a>.  I installed it through <a href="http://mxcl.github.com/homebrew/"> homebrew </a>.  It installs a command called macvim that will launch the GUI version of Vim.  However macvim also provides a console version.  I believe the GUI is just a light wrapper around the console version but I could be wrong.  Its not obvious how to call up the console version that it uses but I found a little nugget of information in a google search that describes how to do it.  Simply create a sym link to the macvim utility with a name of either vi or vim and it will automagically call up the console version…nice!  Here is the .vimrc I ended up with, heavily influenced by this <a href="http://stevelosh.com/blog/2010/09/coming-home-to-vim/#important-vimrc-lines"> guy </a>.</p>

            <Disqus />
        </Main>;
    }
}
