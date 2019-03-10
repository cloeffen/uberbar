# Uberbar

This is a custom statusbar made for Übersicht. It's pretty minimalistic and supports chunkwm workspaces, Spotify, notifications, battery and date/time. 

## Requirements

To use this bar, you need [Übersicht](http://tracesof.net/uebersicht/) installed and place this bar in your widgets folder. 

### Chunkwm

To have your workspaces displayed, you need to have [chunkwm](https://github.com/koekeishiya/chunkwm) installed and running. Check their documentation on how to install/setup chunkwm. 


### Pywal
This bar uses [pywal](https://github.com/dylanaraps/pywal) to generate the colorscheme. To do that you need to change the pywal folder import within ```Uberbar/scss/variables.scss``` to the location of pywal's color.scss on your machine. 

After that you need to run ```bash "$HOME/Library/Application Support/Übersicht/widgets/Uberbar/wal-set"``` (All credits go to [Daniel Neemann](https://github.com/zzzeyez/) for this script) in order to create the new stylesheet for the bar.  
You need sassc to run this script: ```brew install sassc```. 

To set a new wallpaper, create a new colorscheme and refresh your Übersicht bar, I have a little function in my ```.zshrc``` (same can be done within your ```.bashrc```). 

```
function wall () {
  wal -n -i "$1"
  m wallpaper "$1"
  bash ~/Library/Application\ Support/Übersicht/widgets/Uberbar/wal-set
  send-notification "Set new wallpaper and colors."
}
```

It's pretty straightforward: it takes the full path to an image and creates a new colorscheme with pywal, sets that image as wallpaper, use that colorscheme to create a new Uberbar stylesheet and sends a notification when it's done creating.

This script uses [m-cli](https://github.com/rgcr/m-cli) to set the wallpaper, because I had issues with setting wallpaper with pywal since the Mojave update. 

### Notifications

To have notifications being displayed on your bar, Uberbar looks into the ```/tmp/notification``` file. If this file has not been made, there might be an error. Just ```touch /tmp/notification``` to fix this. 

Notifications can be send with ```bash ~/Library/Application\ Support/Übersicht/widgets/Uberbar/scripts/send-notification```. I symlinked this to ```/usr/local/bin/send-notification``` so I can just use ```send-notification "This is a new notification"``` everywhere.
