---
description: Installing Git on Ubuntu is also quick & easy.
modifiedDate: ''
partOfBook: true
postFooterText: ''
postFooterIcon: ''
previewImage: ''
publishedDate: '2019-10-30'
slug: installing-git-ubuntu
title: Installing Git on Ubuntu
---


Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. <sup>(1)</sup> It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the creator of [Linux](https://en.wikipedia.org/wiki/Linux), in 2005.


There are a couple of ways to install Git on Ubuntu. You can install from the official Ubuntu software repository, however you may get a slightly older version. This will not be consequential for most users but in my view, there is no reason to not use the latest stable version, especially since it is just as easy to install.

## Installation

 To get the latest stable version of Git and get updates as they are available, use the official [PPA](https://itsfoss.com/ppa-guide/).


Add the PPA to your system

```console
sudo add-apt-repository ppa:git-core/ppa
```

Update your machines information on package versions and their dependencies.

```console
sudo apt update
```

Install Git

```js
sudo apt install git
```

Check the installed version

```console
git --version
```

## Configuration

Before you can start using Git you need to tell Git your name and email.

```js
git config --global user.name "your-name"
git config --global user.email "you@email.com"
```

---



### Footnotes

1. [Git](https://git-scm.com/), git-scm.com

### References
- [Git](https://en.wikipedia.org/wiki/Git), Wikipedia
- [Using PPA in Ubuntu Linux [Complete Guide](https://itsfoss.com/ppa-guide/)
- [Download [Git] for Linux and UNIX](https://git-scm.com/download/linux)
