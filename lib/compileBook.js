var through     = require('through2');
var gutil       = require('gulp-util');
var _           = require('lodash');

var popstar     = require('popstar-file-reader');
var pop         = new popstar({ parser: {} });
var parser      = pop.getParserInstance();

var PluginError = gutil.PluginError;
var File        = gutil.File;
var path        = require('path');

module.exports = function(options) {
  var totalFile = {};
  var firstFile;

  function bufferContents(file, enc, cb) {
    if(file.isNull()) {
      return;
    }

    if(file.isStream()) {
      return this.emit('error', new PluginError('compile book', 'Streaming is not supported'));
    }

    if(!firstFile) {
      firstFile = file;
    }

    var p = path.parse(file.path);

    var fileString = file.contents.toString(); // file
    var fileName   = p.name;

    var pathArr = p.dir.split('/');
    var sectionName = parseSlug(pathArr.pop());

    var parsedFile = parser.parseFile(fileString);
    parsedFile.fileName = fileName;

    if(!totalFile[sectionName]) {
      totalFile[sectionName] = [];
    }

    totalFile[sectionName].push(parsedFile);

    return cb();
  }

  function endStream(cb) {
    //sort
    var totalFileString = '';

    _.forEach(totalFile, function(section, sectionKey) {
      gutil.log('Currently compiling: ' + sectionKey);

      totalFile[sectionKey].sort(function(a, b) {
        var a1 = parseInt(a.fileName);
        var b1 = parseInt(b.fileName);

        return a1 > b1;
      });

      var sectionFile = "";

      sectionFile += "\n\n\n#" + sectionKey + "\n\n\n";

      _.forEach(section, function(file) {
        if(file.flag === 'review') {
          gutil.log('Review file ', file.fileName);
        }

        if(file.title && file.content) {
          sectionFile += "##" + file.title + "\n";
          sectionFile += file.content + "\n";
        } else {
          gutil.log('Empty file ', file.fileName);
        }
      });

      totalFileString += sectionFile;
    });

    if(firstFile) {
      var joinedFile = new File({
        base: firstFile.base,
        cwd: firstFile.cwd,
        path: path.join(firstFile.base, options.file),
        contents: new Buffer(totalFileString)
      });

      this.push(joinedFile);
    }

    return cb();
  }

  return through.obj(bufferContents, endStream);
};

function parseSlug(slug) {
  var pathArr = slug.split('-');
  pathArr.shift();

  return _.map(pathArr, function(p) {
    return _.capitalize(p);
  }).join(' ');
}
