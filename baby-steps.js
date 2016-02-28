var c = 0;
for (var i = 2; i < process.argv.length; i++) {
	typeof c;
	c += Number(process.argv[i]);
}
console.log(c);