if(process.argv.indexOf('--help') > -1 | process.argv.indexOf('-h') > -1) {
	console.log(fs.readFileSync('README.md', 'utf8'));
	process.exit(0);
}

if(!process.env.SUDO_UID) {
	console.log("Concentration blocks websites by changing your /etc/hosts file, but it needs proper permission to do that.");
	console.log("Please run 'sudo concentration' instead.");
	process.exit(0);
}
