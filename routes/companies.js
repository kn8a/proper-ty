var express = require('express');
var router = express.Router();

var company_controller = require('../controllers/companyController');

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/company/create', company_controller.company_create_get);

// POST request for creating company.
router.post('/company/create', company_controller.company_create_post);

// GET request to delete company.
router.get('/company/:id/delete', company_controller.company_delete_get);

// POST request to delete company.
router.post('/company/:id/delete', company_controller.company_delete_post);

// GET request to update company.
router.get('/company/:id/update', company_controller.company_update_get);

// POST request to update company.
router.post('/company/:id/update', company_controller.company_update_post);

// GET request for one company.
router.get('/company/:id', company_controller.company_detail);

// GET request for list of all companys.
router.get('/', company_controller.company_list);

module.exports = router;