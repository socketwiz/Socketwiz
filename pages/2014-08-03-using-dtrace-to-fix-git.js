
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Using dtrace to fix git">
            <h2 className="blog-post-title">Using dtrace to fix git</h2>
            <TwitterShare posted="03 Aug 2014"/>

            <p>First off the problem.  I like to develop on <a href="http://smartos.org/">smartos</a> because
                it is based on Solaris and has all of the conveniences of Linux with
                a few extras namely zfs, zones and dtrace.  It’s dtrace that I’m going to
                discuss today.  I run a very specialized version of vim.  By specialized I mean
                I have a bunch of <a href="https://github.com/socketwiz/dotfiles/tree/master/.vim/bundle">addons</a>.  In 
                particular, <a href="https://github.com/Valloric/YouCompleteMe">YouCompleteMe</a> and <a href="https://github.com/SirVer/ultisnips">UltiSnips</a> requires
                that vim be a particular version and have python support compiled in.  The vim for smartos
                unfortunately does not so I build my own.  This leads us to my problem.  I also
                use git and when I do commits I want it to use vim, specifically my custom vim,
                otherwise it throws an error on startup complaining about the lack of python
                support.</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`YouCompleteMe unavailable: requires Vim 7.3.584+
UltiSnips requires py &gt;= 2.6 or any py3
Press ENTER or type command to continue`}</code></pre>
            </div>

            <p>To fix this there are two options:</p>

            <ol>
                <li>git config –global core.editor "/path/to/vim"</li>
                <li>set the GIT_EDITOR, VISUAL, or EDITOR environment variables.</li>
            </ol>

            <p>I opted for the later because I share my $HOME/.gitconfig on 3 different
                systems, smartos, mac, and windows, and vim lives in different locations on
                each of them.  The environment variable would be the ideal solution but it
                seems to be ignored because I have EDITOR set already.  I tried setting
                GIT_EDITOR to no avail.  So what’s going on and more importantly how can I fix
                it?  One option might be to download the source code for git and try to debug
                it and figure out what the problem is, but that seems like a lot of work for
                such a small annoyance.  I chose to utilize dtrace, after all theres no since
                running on smartos if you’re not going to take advantage of its conveniences.
                My goal was to try and figure out where git was searching for vim in an
                attempt to try and figure out why it was not finding my vim, and instead using
                the system vim.  My path has my vim ahead of the system vim so in theory it
                should have found it.  Here is the command I came up with:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>dtrace -n 'syscall::exec*:entry /execname=="git"/ {'{'} printf("%s\n", copyinstr(arg0)); {'}'}'
            </code></pre>
            </div>

            <p>I fired up tmux because I run smartos remotely and I wanted to take advantage
                of the multiple windows so I didn’t have to make 2 ssh connections.  In the
                first window I ran sudo -i because dtrace wants to run as root, then I ran the
                command above.  In the second window I ran “git commit” and here is what dtrace 
                output:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`dtrace: description 'syscall::exec*:entry ' matched 1 probe
CPU     ID                    FUNCTION:NAME
3   7129                      exece:entry /opt/local/libexec/git-core/vi

3   7129                      exece:entry /opt/local/bin/vi

3   7129                      exece:entry /opt/local/bin/vi

3   7129                      exece:entry /usr/local/sbin/vi

3   7129                      exece:entry /usr/local/bin/vi

3   7129                      exece:entry /opt/local/sbin/vi

3   7129                      exece:entry /opt/local/bin/vi

3   7129                      exece:entry /usr/sbin/vi

3   7129                      exece:entry /usr/bin/vi`}</code></pre>
            </div>

            <p>Aha! I don’t understand why, but for some reason it’s not looking for vim at
                all, it’s looking for vi.  I could fix this in one of two ways.  Download the
                source for git and try and figure out why it’s doing this, or simply make
                a symbolic link from vi to my vim and call it a day.  I chose the latter:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>sudo ln -s /opt/local/bin/vim /opt/local/bin/vi
            </code></pre>
            </div>

            <p>Now when I run “git commit” I get:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`dtrace: description 'syscall::exec*:entry ' matched 1 probe
CPU     ID                    FUNCTION:NAME
1   7129                      exece:entry /opt/local/libexec/git-core/vi

1   7129                      exece:entry /opt/local/bin/vi`}</code></pre>
            </div>

            <p>As well as the proper vim that I’m expecting.</p>

            <Disqus />
        </Main>;
    }
}
