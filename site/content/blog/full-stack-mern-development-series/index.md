---
description: Blog articles (and maybe a book) for learning full-stack development with MogoDB, Express, React & Node.
modifiedDate: ""
partOfBook: false
postFooterText: none
postFooterIcon: none
previewImage:
publishedDate: "2019-09-25"
slug: full-stack-mern-development-series
title: Full-Stack MERN Development
---

Last spring I started writing a book about full-stack MERN development. I made a great deal of progress but then other priorities took over and progress on the book has been slow. I have since decided to work on it in small chunks and post them as articles on [my blog](https://klequis.io).

The genesis of the book comes from the many people I met while holding 177 [TriValley Coders](http://www.trivalleycoders.org/) meetings over the past three years. During this time I met new and experienced software developers seeking to add new skills in order to find a new, better or first software developer job.

Often, people had learned a lot about one or more subjects but they often had two difficulties: 1) starting a project from scratch & 2) putting all the moving pieces together into a deployable application.

The book intends to address these two difficulties. As a result it is broad in scope and very 'how to' focused. While there are lots of tidbits for beginners and detailed instructions on how to accomplish each task, the book/articles are aimed at developers who already know JavaScript, HTML, CSS & a little React.

Since I use [Ubuntu](https://ubuntu.com/) (a type of [Linux](https://en.wikipedia.org/wiki/Linux)) the instructions are based on Ubuntu. Since many readers will not have Ubuntu, one of the first steps is creating an Ubuntu Virtual Machine. However, most of the Linux specific material is in chapter 2 'Setup', so using your Windows or Mac machine is only a bit more work.

Below is the current outline with links to articles already published.

1. Introduction
2. Setup
    1. [Get a Domain](https://klequis.io/get-a-free-domain-name/)
    2. [Build an Ubuntu Virtual Machine](https://klequis.io/ubuntu-vm-virtualbox/)
    3. [A Quick Opinionated Introduction to Ubuntu 18.04](https://klequis.io/quick-introduction-to-using-ubuntu-18.04/)
    4. MERN Development Environment Setup
        1. [Install NodeJS](https://klequis.io/installing-nodejs-ubuntu/)
        2. [Install Git](https://klequis.io/installing-git-ubuntu/)
        3. [Install nodemon](https://klequis.io/installing-nodemon-ubuntu/)
        4. [Install VS Code & Extensions](https://klequis.io/installing-visual-studio-code-and-extensions/)
        5. [Install MongoDB](https://klequis.io/installing-mongodb-on-ubuntu/)
        6. [Install MongoDB Compass](https://klequis.io/installing-mongodb-compass-ubuntu/)
3. Express Server Part I
    1. Introduction to Express
    2. Using @types
    3. Review of Packages
    4. What's Request & Response?
    5. Localhost
    6. Project Structure
    7. Routes
    8. Methods
    9. npx
    10. babel-node
4. Ubuntu Server Part I
   1. DigitalOcean
   2. Linux & Ubuntu
   3. SSH
   4. DigitalOcean Droplets
   5. Create Droplet
   6. Install Ubuntu Server
   7. Users: root & non-root
   8. UFW Firewall
   9. Nginx Reverse Proxy
   10. Server Blocks
5. Express Server Deployment
   1. Making a Build Script
   2. Node & Bash
   3. Performing the Build
6. Ubuntu Server Part II
   1. Using PM2
   2. Setting-up a Server Block on Nginx
   3. Using Nginx as a Reverse Proxy
   4. Securing Nginx with Let's Encrypt
7. React Client Part I
   1. Project Structure Overview
   2. Create React App
   3. NPM & Yarn
   4. Modify Project Structure
   5. Get a Certificate for Your Domain
   6. Deploy Client to S3
   7. Setup a Hosted Zone
8. DNS With Amazon Route53
9. MongoDB
   1. MongoDB Queries
   2. Chaining
   3. Shaping Returned Data
   4. Creating a MongoDB Database
   5. Project Structure
   6. npm Packages
   7. Babel Configuration
   8. .gitignore
   9. .perttier.config.js
   10. Configuration Data
   11. Helper Functions
   12. Connecting and Disconnecting
   13. Formatting Return Values
   14. Logging Errors
   15. Writing Tests
       1. Text Environment Configuration
       2. Writing & Testing dbFunctions
       3. insertMany
       4. dropCollection
       5. insertOne
       6. find
       7. findById
       8. findOneAndDelete
       9. findOneAndUpdate
   16. Adding Test Coverage Reporting
   17. MongoDB Atlas
10. Express Server Part II
    1. Project Structure
    2. Writing Tests
    3. Update package.json
    4. Add Packages
    5. Implement Express Server
    6. Create Routes
    7. TBD ...
11. React Client Part II
    - Completing the React Client
    - Implementing Auth0
    - Login / Logout
    - API Access
    - TBD ...
