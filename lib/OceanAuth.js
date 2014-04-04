




/** 
 *    deps
 */
var passport   = require('passport')
  , FbStrategy = require('passport-facebook').Strategy
  , merge      = require('utils-merge')
  , express    = require('express')




/** 
 *    constructor
 */
function OceanAuth(app, config, logger){
	this.app = app || express()

	this.defaults = {}
	this.defaults.links.fb = '/auth/facebook'
	this.defaults.links.fbCb = '/auth/facebook/callback'
	this.defaults.logLevel = 'verbose'

	this.config = merge(this.defaults, this.config);
	
	this.log = logger; 
}





/** 
 *    Add login links to res.links obj
 */
OceanAuth.prototype.resLinks = function(req, res, next) {
	res.locals.links.login.fb = this.config.links.fb
	next();
}




/** 
 *    Authentication middleware
 */
OceanAuth.prototype.authenticate = function(req, res, next) {

	if(req.isAuthenticated())
		return next()

	res.redirect('/?attempted_login_change_this_url');
}	





