var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    page: 'home'  
  });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Us',
    page: 'about'  
  });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Project',
    page: 'project'  
  });
});

/* GET Contact page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { 
    title: 'Contact',
    page: 'contact'  
  });
});


module.exports = router;
