
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="How to extract an icon">
            <h2>How to extract an icon</h2>

            <TwitterShare posted="02 Aug 2010"/>

            <p>
                <img src="/static/images/app.png" alt="App Icon" />
                <em>The need</em>: When I first learned how to write Cocoa applications I was reading a book by Aaron Hillegass titled “Cocoa Programming for Mac OS X, Third Edition”. At the end he issues a challenge to choose a medium difficulty application and create it. I wrote an RSS reader. I followed that up by a license manager. I have dozens of shareware applications that I have purchased over the years and they each have their own license to keep track of.  So I decided to create a management application to keep track of them all. This application was a little more complex than the RSS reader. I decided it would be a great way to learn CoreData. Somewhere along the way I hit a road block and shelved it. Well I’ve been working with CoreData quite a bit lately and decided to dust off this old app I started since I still have the problem of tracking all of my licenses. I got to a point where I needed an icon. Whenever you create a new Cocoa application it comes with a default icon and I thought it would be perfect to use on the list that contains the apps in my license manager. See the image at the top of the post to see what I was looking for.
            </p>

            <p>
                <em>The quest</em>: I thought this would be relatively easy to find so I fired up a Spotlight search window: command option space and entered icns (the extension of a Mac icon file) then selected “File Name” instead of “Contents”. A lot of interesting icons came up but not the one I was looking for. So I followed that up with a search on images.google.com but I just couldn’t seem to put the right words together to find the icon I was looking for. I even tried a regular google search: “mac application filetype:icns” but still nothing. So I decided rather than spend all day searching I should be able to extract the icon I want right out of the file. I am a Mac hacker after all…how hard can it be?
            </p>

            <p>
                <em>The project</em>: It turns out, it’s not hard at all. I ran across this example <a href="http://mattgemmell.com/source">Icon For File Type</a> written in Cocoa that I thought was going to do it. It takes a file extension as input, then displays the icon for the application associated with it. So I downloaded it but I was unable to build it because the project file was to old. But it was so simple that I just rewrote the whole thing. So after I built it I ran it thinking I could just type in .app and get the icon I was after. But thinking about it now I realize that was never going to work because there is no application associated with a .app as the .app is the application. However with this little utility in hand it was not hard to extend it to extract the icon from a .app itself so that is what I did.  With this little utility you can either specify an extension like html, pdf, pages, numbers, etc… and display the icon of the application associated with that type, or you can locate the application itself and display its icon directly. Either way once you have the icon, you can save it to a location of your choice.
            </p>

            <p><img src="/static/images/IconForFileType.png" alt="Icon For File or Type" /></p>

            <p>
                <em>What I learned</em>: This exercise was not in vain by any means. I was willing to settle for a 48x48 pixel image but what I ended up with was the actual .icns file. An icns file is nice because it has the ability to store 1 or more representations of a file. So for an icon you would most likely store a 16x16, 32x32, 128x128 and a 512x512. That way in various different settings you would always have an icon that looked nice. I guess one could extend this utility a little more to be able to save off 1 or more of the representations themselves instead of the entire file. However for my purposes it was easy enough to just bring up the .icns file in Mac’s built-in preview utility then drag the representation that you want onto the desktop.  Code: If you you want is the utility, you can grab that here:
            </p>

            <p>
                <a href="http://socketwiz.s3.amazonaws.com/IconForFileType.app.zip">Icon For File Type
                    Utility</a><br />
                If you would like the Cocoa project for it, you grab that here:<br />
                <a href="https://github.com/socketwiz/IconForFileType">Icon For File Type Utility Cocoa
                    Project</a>
            </p>

            <Disqus />
        </Main>;
    }
}
