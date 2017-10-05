var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.papers = [
		{ name: 'Integrating Open-Source Technologies to Build a School Indoor Air Quality Monitoring Box (SKOMOBO)',
			path: 'pdfs/papers/Y.WANG-APWCE2017.pdf' }];

	// Render the view
	view.render('research');
};
