var Neuter = require('neuter');
var fs = require('fs');
var myNeuter = new Neuter();
myNeuter.parse('c2/c2.js', function(err, sourceNode) {
	if (err) {
		console.log(err.toString());
        console.log('ERROR');
        return;
	}
 
	var codeMap = sourceNode.toStringWithSourceMap({
		file: 'c2.unified.js',
	});
    
    var filename = './c2.unified.js'; 
    
    fs.exists(filename, function(exists) {
        if (exists) {
            fs.unlinkSync(filename);
        }

        fs.writeFileSync(filename, codeMap.code);

    });
});