var mongoose = require('mongoose');

//var db = mongoose.connect('mongodb://127.0.0.1/tutorials')
var db = mongoose.connect('mongodb://10.34.99.63:27017/tutorials')

var pageSchema = new mongoose.Schema({
	tutorialid: String,
	title: String,
	text: String
});

var tutorialSchema = new mongoose.Schema({
	pageid: String,
	title: String,
	pages: [pageSchema]
});

//create the movie Model using the 'tutorials' collection as a data-source
var TutorialModel = mongoose.model('tutorials',tutorialSchema);


exports.index = function(req, res){
  //res.render('index', { title: 'Express' })
	res.redirect('/index.html'); 
};


exports.tutorials = function (req, res) {
	TutorialModel.find({}, function (err, tutorials) {
        res.contentType('json');
        res.json({
            success: true,
            data: tutorials
        });
    });
};

exports.tutorial = function (req, res, next) {
	TutorialModel.find({tutorialid: req.params.tutorialid}, function (err, tutorial) {
        res.contentType('json');
        res.json({
            success: true,
            data: tutorial
        });
    });
};