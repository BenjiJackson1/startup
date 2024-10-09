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

## 5. JavaScript Notes

