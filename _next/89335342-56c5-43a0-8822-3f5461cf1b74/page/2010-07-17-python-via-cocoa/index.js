
          window.__NEXT_REGISTER_PAGE('/2010-07-17-python-via-cocoa', function() {
            var comp = module.exports=webpackJsonp([15],{336:function(e,t,a){e.exports=a(337)},337:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),l=o(n),r=a(1),i=o(r),s=a(2),c=o(s),u=a(8),d=o(u),p=a(9),f=o(p),h=a(3),m=o(h),y=a(27),g=o(y),b=a(20),w=o(b),E=a(28),v=o(E),C=function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return m.default.createElement(w.default,{title:"Python via Cocoa"},m.default.createElement("h2",null,"Python via Cocoa"),m.default.createElement(v.default,{posted:"07 Jul 2010"}),m.default.createElement("p",null,"I have an idea for a Cocoa front-end around a Python script that I recently came across. As you may or may not be aware Cocoa has the concept of a ",m.default.createElement("a",{href:"https://developer.apple.com/library/mac/DOCUMENTATION/Cocoa/Conceptual/ScriptingBridgeConcepts/Introduction/Introduction.html"},"scripting bridge")," for Python. However, almost all of the examples I could find were to allow Python to use Cocoa as a GUI interface basically. But I want to do is the other way around, use Python for it’s engine from Cocoa. Google being the amazing search engine that it is helped me to find an example that describes ",m.default.createElement("a",{href:"http://www.informit.com/blogs/blog.aspx?uk=Ask-Big-Nerd-Ranch-Adding-Python-Scripting-to-Cocoa-apps"},"exactly that"),". Using that example I was able to break out the basic concept and build a very simple app that calls a Python script from Cocoa. The python script just calls ls and is then able to print the output back into my Cocoa app’s text view. So the bridge allows a two way communication from Cocoa to Python and back again. This is very cool stuff. Here is a screen shot of my little test app"),m.default.createElement("p",null,m.default.createElement("img",{src:"/static/images/rover.png",alt:"Rover test app"})),m.default.createElement("p",null,"Here is the Cocoa script that I executed in it’s entirety:"),m.default.createElement("figure",{className:"highlight"},m.default.createElement("pre",null,m.default.createElement("code",null,"#\n#  RoverExecutor.py\n#  Rover\n#\n#  Created by Ricky Nelson on 7/16/10.\n#\nfrom Foundation import *\nfrom AppKit import *\n\nimport subprocess\n\nclass PythonExecutor(NSObject):\n  @classmethod\n  def main_(self, args):\n    textView = args[0];\n    path = args[1]\n    p = subprocess.Popen('ls /', shell=True, stdout=subprocess.PIPE).stdout\n    textView.textStorage().mutableString().setString_(p.read())\n    return YES"))),m.default.createElement("p",null,"Now that I have a basic understanding of how it all works I can move on to building my little UI."),m.default.createElement(g.default,null))}}]),t}(h.Component);t.default=C}},[336]);
            return { page: comp.default }
          })
        