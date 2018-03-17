// CSCI 5828 – Spring 2018
// Homework 3
// Hansol Yoon

var fs = require('fs');

//Get target path
var target_path = process.argv[2];

//Remove stack trace
Error.stackTraceLimit = 0;

//If there's no input path then error shows up.
if (process.argv[2]==null){
    throw Error("Usage: node file_total_fixed.js <path>");
    process.exit(1);
}

//Get the absolute path of the files
var path = require('path');

var all_done = function(size, err) {
    if (err) throw err;
    console.log("Total size:", size);
}

var handleFile = function(stats, i, filenames, total) {
    if (i === filenames.length -1) {
        all_done(total + stats.size);
    } else {
        processFile(i+1, filenames, total+stats.size);
    }
}

var handleDir = function(i, filenames, total) {
    if (i === filenames.length - 1) {
        all_done(total);
    } else {
        processFile(i+1, filenames, total);
    }
}

var processFile = function(i, filenames, total) {
    var name = filenames[i];
    
    //If there's nothing in the target folder, error shows up.
    //Without this, "TypeError" is showed up which is not I want.(I want it to start with "Error")
    if(filenames[i]==null){
        throw Error("the directory does not contain files");
        process.exit(1);
    }
    
    fs.stat(name, function(err, stats) {
        if(err) throw err;
        if (stats.isFile()) {
            handleFile(stats, i, filenames, total);
        } else {
            handleDir(i, filenames, total);
        }
    });
}

var main = function(target_path, chk) {

    //make 'filelist' using absolute paths of each file to send it to other functions
    var filelist = [];

    fs.readdir(target_path, function(err, filenames) {
        if (err) throw err;
        var num_files = filenames.length;

        if (!num_files) return chk(null, filelist);

        filenames.forEach(function(file_path) {
            file_path = path.resolve(target_path, file_path);
            fs.stat(file_path, function(err, stat) {

                if (stat.isDirectory()) {
                    main(file_path, function(err, filelist_merge) {
                        filelist = filelist.concat(filelist_merge);
                        if (!--num_files) chk(null, filelist);
                    });
                } 
                else {
                  
                    filelist.push(file_path);

                    if (!--num_files) chk(null, filelist);
                }
            });        
        });
    });
};

main(target_path, function(err, filelist) {
    if (err) throw err;
    processFile(0, filelist, 0);
});