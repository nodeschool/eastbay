---
description: Quick fix to an unexpected limit on files watch.
modifiedDate: ''
partOfBook: false
postFooterText: ''
postFooterIcon: 'hammer'
previewImage: ''
publishedDate: '2019-10-15'
slug: error-enospc-system-limit-for-number-of-file-watchers-reached
title: Error ENOSPC System limit for number of file watchers reached
---

I rebuilt my machine a few days ago and today got an error message I have never seen before.

```console
Error: ENOSPC: System limit for number of file watchers reached,
watch '/home/.../site/src/components/layout.js'
```

It turns out that the maximum number of files the system can monitor had been reached. Since I am not working on a project larger than I have in the past I not sure why this happened. It turns out that the limit was 8,192, which is fairly low for a software developer. Fortunately, it is easy to increase the limit.

Use the below command to check the current limit.

```console
cat /proc/sys/fs/inotify/max_user_watches

// response
8192

```

Duckduckgo'ing around I found that 524,288 is a popular number for setting the new limit. To do so:

```console

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

// response
fs.inotify.max_user_watches=524288

```

Have the Linux kernel read & use the new limit.

```console
sudo sysctl -p

// response

fs.inotify.max_user_watches = 524288
```

Check the number of watchers again just to be sure.

```console
cat /proc/sys/fs/inotify/max_user_watches

// response
524288

```

## References

- [Increasing the amount of inotify watchers](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details)
- [Error: ENOSPC: System limit for number of file watchers reached, watch '/home/foldername/abcrypto/static' #11406](https://github.com/gatsbyjs/gatsby/issues/11406)
