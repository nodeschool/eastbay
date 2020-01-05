---
description: Installing Firefox Developer Edition on Ubuntu is quick & easy.
modifiedDate: ''
partOfBook: false
postFooterText: ''
postFooterIcon: ''
previewImage: https://responsive-images-media.s3.amazonaws.com/firefox-dev-edition-post.png
publishedDate: '2019-10-14'
slug: intalling-firefox-developer-edition-ubuntu
title: Installing FireFox Developer Edition on Ubuntu
---

[Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) contains features not currently released to the regular version of Firefox. Its main attraction to me is Mozilla's respect for my privacy and having an additional browser to segregate my life into. I use Firefox for my personal life and Firefox Developer Edition for work related accounts and activity. However, using the Webpack Dev Server I find that Firefox Developer Edition consumes increasing amounts of memory until my machine freezes. Therefore I also use Chrome for development. However, I often turn to Firefox Developer Edition for inspecting pages.

Here is how to install Firefox Developer Edition on Ubuntu. I'm using Ubuntu 18.04 but this same process should work on earlier and later versions.

## Get Firefox Developer Edition
- Go to [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- Click the 'Firefox Developer Edition' (currently a large blue button)
- Save the file to Downloads

## Extract contents if the compressed file
```console
tar -xvf firefox-*.tar.bz2
```

## Rename extracted folder to firefox-dev and move to /opt
```console
sudo mv firefox /opt/firefox-dev
```

## Make a Desktop Entry
So that you can launch Firefox Developer Edition by pressing the Super/Windows key and typing 'firefox', make a desktop entry in: ~/.local/share/applications/firefox-dev.desktop

```console
cd ~/.local/share/applications
touch firefox-dev.desktop
gedit firefox-dev.desktop
```

Past in the below contents into the file.
```
[Desktop Entry]
Name=Firefox Developer 
GenericName=Firefox Developer Edition
Exec=/opt/firefox-dev/firefox %u
Terminal=false
Icon=/opt/firefox-dev/browser/chrome/icons/default/default128.png
Type=Application
Categories=Application;Network;X-Developer;
Comment=Firefox Developer Edition Web Browser.
```

Save the file and launch Firefox Developer Edition

---

### References

- https://askubuntu.com/questions/548003/how-do-i-install-the-firefox-developer-edition