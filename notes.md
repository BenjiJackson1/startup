# Benji's Notes for CS260

## 1. GitHub Notes
GitHub is a cloud based repository that allows for me to easily store and 
modify the code I develop. One of the biggest benefits to using Git is that 
it allows for me to have version control and access projects from different
machines.

### Basic GitHub Routine
The following is the basic routine process for a developer using GitHub:
1. Verify you have the latest code (git pull)
2. Refactor, test, or implement a small portion of the code
3. Commit and push (git commit and git push)

### AWS Server
Use the follow public IP address to access the server: 
- 18.214.180.113
The following command can be used to SSH into the server:
- ssh -i [key pair file] ubuntu@[ip address]
This server was set up using an elastic IP and the t3.nano instance of AWS EC2

### HTTPS and TLS
Using the Caddy webservice, I can enable the Let's Encrypt service to allow my project
to have a web certificate. This allows me to use the more secure HTTPS rather than simply
using HTTP. Since the internet as a whole is moving towards more secure options, it is 
important to use this service and provide a more secure connection.

## 2. HTML Notes

### HTML Structure Elements
There are a variety of elements that can be used in HTML to provide structure to the
elements that are included. These follow a hierarchical structure with different layers.
It is easy to incorporate media and links into HTML as well. Each element is contained
within a <> and a </>. This syntax is seen throughout the HTML file.

### HTML Input
While it is not the most modern approach, HTML does allow for basic input intake that 
can used on a webpage. There are sevearl different manners in which to do this, including
checkboxes, radios, color selectors, file selection and more!

### HTML Media
HTML allows for images, audio files and videos to be easily incorporated into the structure
of a webpage. This process is relatively simply, although there are a few general rules of 
thumb to remember such as setting the audio to be controlled so that it does not start 
playing automatically and loop on repeat.

## 3. HTML Startup

### Deploying Files
Through VSCode, I can deploy the HTML that I develop to the server and domain that I have 
already set up. The command to do this deployment follows this format:
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
I also learned that it is possible to use a Live Server view through VSCode that uses my 5500 port
to temporarily display my HTML for development purposes.

### Learned While Creating HTML Startup
I learned about the importance of first thinking about the overall structure elements of
the HTML page. It is helpful to section off the pages into chunks, such as header,
main body and footer, and then move into those chunks and add the smaller details.
Doing this reflects the general format of HTML code so this makes for easier development.

## 4. CSS Notes

### CSS Animation
CSS allows for me to stylize and even animate the structure that I create using HTML.
The primary way that this can be done is by referencing the tags, IDs, and class 
types of the different sections, and then assigning specific details to those references.
Using CSS I can add color, font type, font size, animation and more formatting.

## CSS Simon
Through the process of uploading the Simon CSS File I learned more about the 
structure generally found in applications that have CSS. Each html file has 
an associated CSS file that typically matches the name with the .css prefix.

## CSS Deliverable
While doing the CSS deliverable I learned the inherent power of using bootstrap,
it was something that I often found to be more intuitive than having a separate
CSS file. I also learned about using !important tags on CSS styles to give 
styles more precedance.

## 5. JavaScript Notes

### JavaScript DOM
The Document Object Model or DOM in JavaScript allows the browser to render
the display. Thie DOM can be used dynamically to change the HTML that appears
on a page. In order to access the DOM file for a page, it can be referenced
through the term "document".

## 7. Midterm Preparation

- Come back to: promise
- To declare the document type as HTML, you use the <!DOCTYPE html> declaration at the very beginning of your HTML document.
- HTML opening tags:
  - paragrah: "p"
  - ordered list: "ol"
  - unordered list: "ul"
  - second level heading: "h2"
- The "-la" in ls allows you to see even hidden files
- Web certificates are necessary to use HTTPS
- To create an image with a hyperlink:
   a href="https://www.example.com" target="_blank"
    img src="image.jpg" alt="Description of the image"
/a
- DNS records that will map domain names to IP addresses (A records) or
  other domain names (CNAME records), cannot map to another domain if not
   using CNAME which allows for aliasing.
- In the domain name: banana.fruit.bozo.click, the top level = click
  subdomain = banana.fruit, and root domain = bozo.click ( root has TL included as well)
- In the CSS box model, the ordering of the box layers starting from the inside and working out is as follows:
Content: This is the innermost layer where text, images, and other media reside.
Padding: This layer surrounds the content and creates space between the content and the border. Padding is transparent.
Border: This layer surrounds the padding (if any) and the content. It can have a specified width, style, and color.
Margin: This is the outermost layer that creates space between the border of the element and the adjacent elements. Margins are also transparent.
Content → Padding → Border → Margin

- To use JavaScript to change font color, use these script tags:
    const element = document.getElementById("byu");
    element.style.color = "green";
- To include JavaScript in HTML, use the script tag
- JavaScript objects: Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).
- JavaScript objects can be made in two ways:
    - Object literal notation:
        const obj = { property1: 'value1', /n property2: 'value2' /n method1: function() {console.log('MY method'};}}
    - new operator:
        const obj = new Object({a:3});
        obj.b = 'value2';
- Switch statements in JavaScript:
    switch(expression) { case value1: ... break; case value2: ... break; default: }
- A JSON document contains one of the following data types:

Type	Example
string:	"crockford";
number:	42;
boolean:	true;
array:	[null,42,"crockford"];
object:	{"a":1,"b":"crockford"};
null:	null;
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

- ssh = Create a secure shell on a remote compute
- echo - Output the parameters of the command
- cd = Change directory
- mkdir = Make directory
- rmdir = Remove directory
- rm = Remove file(s)
- mv = Move file(s)
- cp = Copy files
- ls = List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
