---
description: There are several ways to install Node on Ubuntu. Here is the quick and easy way to get the latest version of Node installed.
modifiedDate: '2019-10-19'
partOfBook: true
postFooterText: ''
postFooterIcon: ''
previewImage:  
publishedDate: '2019-10-14'
slug: installing-nodejs-ubuntu
title: Installing NodeJS on Ubuntu
---

If your a JavaScript developer you are familiar with [Node](https://nodejs.org/en/) and and already know how to install it on a Mac or Windows machine. If you are new to Ubuntu, here is the quick and easy way to install NodeJS.

## Make sure you have cURL installed

> [cURL](https://curl.haxx.se/) is a command-line tool for getting or sending data including files using URL syntax. (Wikipedia).

If you are not sure if you have cURL installed you can check with this command:

```console
curl --version
```
If cURL is installed you will get a response like this:

```console
curl 7.58.0 (x86_64-pc-linux-gnu) libcurl/7.58.0 OpenSSL/1.1.1 zlib/1.2.11 libidn2/2.0.4 libpsl/0.19.1 (+libidn2/2.0.4) nghttp2/1.30.0 librtmp/2.3
Release-Date: 2018-01-24
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtmp rtsp smb smbs smtp smtps telnet tftp
Features: AsynchDNS IDN IPv6 Largefile GSS-API Kerberos SPNEGO NTLM NTLM_WB SSL libz TLS-SRP HTTP2 UnixSockets HTTPS-proxy PSL
```

If cURL is not installed use these commands to install it:

```console
sudo apt-get update
sudo apt-get install curl
```

## Installing Node

This process will download a setup script to the current directory. Change directory to a suitable location such as Downloads

```console
cd Downloads
```

Download the node setup script.

```console
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
```

The next step is to execute the script just downloaded. Note that the script does not install Node. It only sets up you machine so that Node can be installed.

```console
sudo bash nodesource_setup.sh
```

Now check your Node version to confirm installation.

```console
sudo apt-get install -y nodejs
```

Check that Node is installed.

```console
nodejs -v
```

Installing Node also installed npm. Check the npm version with this command.

```console
npm -v
```

**That's it. NodeJS & npm are now installed and ready to use.**

<br/>

## References

- [cURL](https://en.wikipedia.org/wiki/CURL): Wikipedia
- [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md)
