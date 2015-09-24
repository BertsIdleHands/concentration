# concentration
A simple CLI tool to block social networks and other distracting websites.

Need to really get shit done? That's what concentration is all about!

Concentration blocks websites by changing your /etc/hosts file. So it needs to be run as sudo to do that.
Installation is easy with npm. Just run `npm install -g concentration`.
Then just run `sudo concentration` and you'll be free from distractions.

Run concentration again to remove the blocks.

By default Twitter and Facebook are blocked. Want to block more domains? Simple.
Create a `~/.concentration.json` file with an array of the domains you want to see blocked.

`["cnn.com", "engadget.com"]`