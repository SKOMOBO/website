#Render the view

require! 'keystone'

exports = module.exports = (req, res) ->
	new keystone.View(req, res);.render('dash');

