var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.papers = [{ name: 'a paper', path: 'pdfs/papers/Y.WANG-APWCE2017.pdf' }];

	// Render the view
	view.render('research');
};
