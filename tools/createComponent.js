var prompt = require('prompt');
var colors = require('colors/safe');
var ncp = require('ncp').ncp;
var path = require('path');
var replace = require('replace');
var fs = require('fs');
var templateComponent = path.join('src', 'Sample'); 
var newComponent;

ncp.limit = 16;

var properties = [
	{
		name: 'name',
		description: colors.green("Enter a component name"),
		required: true,
		type: 'string',
	}
];



prompt.start();

prompt.get(properties, function(err, result) {
	if (err) {
		return console.log('Error getting user input: ' + err);
	}
	createComponent(result.name);
});

function createComponent(name) {
	var formattedName = firstLetterUppercase(name);
	newComponent = path.join('src', formattedName); 
	
	console.log('Creating ' + formattedName + '...');
	
	ncp(templateComponent, newComponent, function (err) {
		if (err) {
		   return console.error('Error creating component:' + err);
		 }
		 replaceFileNames(formattedName);
		 console.log(name + ' created!');

	});

}

function replaceFileNames(input) {

	fs.rename(path.join(newComponent, 'Sample.test.js'), path.join(newComponent, input+'.test.js'), function(err) {   
	    if ( err ) console.log('Error renaming component files: ' + err);
	     replace({
	    	regex: "Sample",
	    	replacement: input,
	    	paths: [newComponent],
	    	recursive: true,
		});
	});
}

function firstLetterUppercase(input) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}


