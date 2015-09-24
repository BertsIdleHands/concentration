# concentration
A simple CLI tool to block social networks and other distracting websites.

Need to really crunch down and get shit done? That's what concentration is all about!
Concentration blocks websites by changing your /etc/hosts file. So it needs to be run as sudo to do that.

By default Twitter and Facebook are blocked. Want to block more domains? Simple.
Create a ~/.concentration.json file with an array of the domains you want to see blocked.

["cnn.com", "engadget.com"]