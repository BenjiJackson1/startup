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
