
          window.__NEXT_REGISTER_PAGE('/2012-05-07-vi-rediscovered', function() {
            var comp = module.exports=webpackJsonp([11],{346:function(e,t,a){e.exports=a(347)},347:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),l=o(n),i=a(1),r=o(i),s=a(2),d=o(s),u=a(8),h=o(u),m=a(9),c=o(m),f=a(3),p=o(f),b=a(27),g=o(b),w=a(20),y=o(w),v=a(28),I=o(v),k=function(e){function t(){return(0,r.default)(this,t),(0,h.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return p.default.createElement(y.default,{title:"VI re-discovered"},p.default.createElement("h2",null,"VI re-discovered"),p.default.createElement(I.default,{posted:"05 Jul 2012"}),p.default.createElement("p",null,p.default.createElement("em",null,"Linux"),p.default.createElement("br",null),"I titled this article VI rediscovered, but it could have probably been more accurately titled, “I discovered the power of Vim”.  My first introduction to VI was when I was learning to use Linux back in the 90’s.  I needed an editor to modify all of the configuration files, and VI seemed like the editor of choice.  I made it through the initial learning curve, but never really considered it for more than editing a single file here and there.  I had no idea that when configured properly, it could have the power of an IDE."),p.default.createElement("p",null,p.default.createElement("em",null,"TextMate"),p.default.createElement("br",null),"Sometime in late 2004 or early 2005, my brother sent me a link to this new web technology called ",p.default.createElement("a",{href:"http://media.rubyonrails.org/video/rails_take2_with_sound.mov"},"Ruby on Rails"),".  When I watched it, I am not sure which I found more amazing, Ruby on Rails or the TextMate editor.  Prior to that I was a big Windows guy and used ",p.default.createElement("a",{href:"http://www.slickedit.com/"}," Visual Slickedit ")," which is an IDE of sorts.  I really liked that you could program multiple languages with it.  I could write scripts or code C++ all from the same environment.  But TextMate seemed like a whole new paradigm to me and I had to have it.  That is when I bought my first Mac, because TextMate only runs on the Mac platform.  I really liked the Bundles technology in TextMate and of course the tab completions.  Tab completions were not available in Slickedit which is sad because they really boost productivity.  The more I used TextMate the more I liked it, although I never really utilized all of its power.  But I came to rely on things like cmd-t, a method to located any file in your project with just a few keystrokes.  However as time marched on, updates to TextMate were marginal.  I was beginning to wonder if the project had died and sought out alternatives."),p.default.createElement("p",null,p.default.createElement("em",null,"RubyMine"),p.default.createElement("br",null),"Around 2010 I ran into a discounted version of ",p.default.createElement("a",{href:"http://www.jetbrains.com/ruby/"}," RubyMine ")," and decided to give it a try.  Ruby seems to be the bulk of the code that I am writing these days and RubyMine provids an IDE like interface that I used to have in Slickedit.  With an IDE you can do things like autocomplete, refactoring, property and method lookups and debugging.  However it has one major problem…it is written and java and therefore it comes with all the problems inherent with java apps like poor memory management and poor performance.  I don’t mind autocomplete when its instant, but when it takes seconds, it starts to get in the way rather than help."),p.default.createElement("p",null,p.default.createElement("em",null,"Sublime Text 2"),p.default.createElement("br",null),"A few months back I ran into Sublime Text 2.  It is sort of a happy medium between TextMate and RubyMine.  Its sort of like TextMate with autocomplete but not really a full fledged IDE.  I started using this a bit because its a native Mac application and therefore did not suffer from the performance problems of RubyMine.  But I had become accustomed to some of the features provided by RubyMine.  So while it tends to fill some the gaps from TextMate, it doesn’t quite fulfill enough of the features I’ve come to depend on RubyMine."),p.default.createElement("p",null,p.default.createElement("em",null,"Vim"),p.default.createElement("br",null),"Over the weekend I was interested in learning more about a new technology called ",p.default.createElement("a",{href:"http://backbonejs.org/"}," Backbone.js "),".  So I ran across this ",p.default.createElement("a",{href:"http://backbonescreencasts.com/"}," guy ")," and he was rockin Vim!  He stutters a little bit, but he really knows his stuff when it comes to Javascript and Backbone.js.  However I was really intrigued by his use of Vim.  I had no idea you could do some of those things.  I buy a lot of books from Pragmatic Bookshelf and in an email I had received was a ",p.default.createElement("a",{href:"http://pragprog.com/book/dnvim/practical-vim"}," book ")," on Vim that I had not payed much attention to.  So I went and bought it and spent all weekend reading it and playing with Vim.  Holy cow is all I can say.  Who knew?  Its like an IDE inside of an editor these days.  It has plugins that extend it to do just about anything you could imagine.  So I spent the weekend grabbing a couple of plugins and configuring my .vimrc.  I didn’t go crazy, but here is what I ended up with:"),p.default.createElement("p",null,p.default.createElement("img",{src:"/static/images/vim_tmux.png",alt:"Vim in Tmux"})),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/tpope/vim-pathogen"}," ",p.default.createElement("em",null,"Pathogen")," "),": This one is like the ring in Lord of the Rings, it rules all of the other addons.  You really need to install it first, it makes installing all of the other addons a piece of cake.  Once installed you simply create a directory under ~/.vim called bundle, then to install another addon its as simple as: git clone addon.git in that directory."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/wincent/Command-T"}," ",p.default.createElement("em",null,"CommandT")," "),": Its really a nonstarter for me these days if an editor doesn’t at least provide this capability.  CommandT is based on the TextMate cmd-t action that allows you to look up any file in your project by typing just a couple of keystrokes."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/Shougo/neocomplcache"}," ",p.default.createElement("em",null,"Neocomplcache")," "),": Who knew Vim now had autocomplete?  Apparently just me, hehe.  At any rate, neocomplcache enhances autocomplete to feel just like what I’ve become accustomed to in RubyMine…without the lag.  There is a sister addon that provides some ",p.default.createElement("a",{href:"https://github.com/Shougo/neocomplcache-snippets-complete"}," snippets ")," technology similar to what you would find in TextMate.  Apparently this used to be included in the Neocomplcache addon but the author broke it out into its own addon for some reason."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/tomtom/tcomment_vim"}," ",p.default.createElement("em",null,"Tcomment")," "),": Tcomment allows you to comment code by line or block with a simple keystroke.  It doesn’t care if the code is a different language nested within another, it figures it out and does the right thing.  Another feature I picked up from TextMate that I really enjoy.  I’m not suggesting TextMate invented, I’m not sure who did, I just discovered it there."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/tpope/vim-fugitive"}," ",p.default.createElement("em",null,"Fugitive")," "),": Git wrapper from inside Vim.  It allows you to make commits, view the log, blame, and status, as well as move, add, and delete all from within Vim and handles the buffer that may point to non existent files after some of the operations properly."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/mileszs/ack.vim"}," ",p.default.createElement("em",null,"Ack")," "),": Apparently there is a better grep than grep…a grep written for programmers.  Where have I been?  The website is even called ",p.default.createElement("a",{href:"http://betterthangrep.com/"}," betterthangrep.com "),".  This addon interfaces ack and allows it to be used from within Vim to do project wide search.  Cmd-shift-f in TextMate."),p.default.createElement("p",null,p.default.createElement("a",{href:"https://github.com/tpope/vim-rails"}," ",p.default.createElement("em",null,"Vim-rails")," "),": Being a rails developer this one intrigued me a bit but I don’t have much time with it.  The site claims that it will help with syntax highlighting, create partials from a block (like you can do in TextMate), jump between related files, and provide access to rake among other things without leaving Vim.  I’m running a Mac and I wanted to use the console version of Vim because I wanted to use it in conjunction with ",p.default.createElement("a",{href:"http://tmux.sourceforge.net/"}," tmux ")," which I also grokked this weekend, but thats another blog post.  However this creates 2 problems:"),p.default.createElement("ol",null,p.default.createElement("li",null,"The first addon I downloaded CommandT has some ruby requirement that has to be compiled into the executable.  The one that ships with Lion doesn’t seem to have this compiled in."),p.default.createElement("li",null,"You can’t seem to map the Command key in the console version for reasons that I do not understand.  You can map it in the vim GUI, but not the console version, I’m not able to recreate thing like cmd-t and cmd-shift-f just for example.  I would love for someone to prove me wrong and show me how to do this.")),p.default.createElement("p",null,"However I was able to overcome problem 1) by installing ",p.default.createElement("a",{href:"https://github.com/b4winckler/macvim"}," macvim "),".  I installed it through ",p.default.createElement("a",{href:"http://mxcl.github.com/homebrew/"}," homebrew "),".  It installs a command called macvim that will launch the GUI version of Vim.  However macvim also provides a console version.  I believe the GUI is just a light wrapper around the console version but I could be wrong.  Its not obvious how to call up the console version that it uses but I found a little nugget of information in a google search that describes how to do it.  Simply create a sym link to the macvim utility with a name of either vi or vim and it will automagically call up the console version…nice!  Here is the .vimrc I ended up with, heavily influenced by this ",p.default.createElement("a",{href:"http://stevelosh.com/blog/2010/09/coming-home-to-vim/#important-vimrc-lines"}," guy "),"."),p.default.createElement(g.default,null))}}]),t}(f.Component);t.default=k}},[346]);
            return { page: comp.default }
          })
        