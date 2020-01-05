---
description: Installing Nodmon on Ubuntu is just one command.
modifiedDate: ''
partOfBook: true
postFooterText: ''
postFooterIcon: ''
previewImage: 
publishedDate: '2019-10-30'
slug: installing-nodemon-ubuntu
title: Installing Nodemon on Ubuntu
---

nodemon is a simple process that will restart your development server when files it is watching have changed. 

You can use nodemon just like node. For example, if you had a file named `demo-code.js` with this code:

```js
console.log('hello from demo code')
```

You can run it using node with this command:

```console
node demo-code.js
```

'hello from demo code' will be printed to the console. After each code change you need to re-issue the above command.

To run the code with nodemon:

```console
nodemon demo-code.js
```

Now when you change and save your code it will re-run automatically.

## Installation

Use this command to install nodemon:

```console
sudo npm i -g nodemon
```

## Give it a try

```console
mkdir nodemon-try
cd nodemon-try
touch demo-code.js
```

Add some code to `demo-code.js`:

```js
console.log('hello')
```

Then run the code using nodemon:

```console
nodemon demo-code.js
```

You will see 'hello' printed to the console.

Change the code in `demo-code.js` to:

```js
console.log('hello again')
```

Save your file while watching the console. You will see 'hello again' printed.


---

### References
- [nodemon](https://nodemon.io/)


