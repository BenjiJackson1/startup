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