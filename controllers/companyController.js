const company = require('../models/company')

// Display list of all Authors.
exports.company_list = function(req, res) {
    res.send('NOT IMPLEMENTED:.company list');
};

// Display detail page for a specific.company.
exports.company_detail = function(req, res) {
    res.send('NOT IMPLEMENTED:.company detail: ' + req.params.id);
};

// Display.company create form on GET.
exports.company_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED:.company create GET');
};

// Handle.company create on POST.
exports.company_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED:.company create POST');
};

// Display.company delete form on GET.
exports.company_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED:.company delete GET');
};

// Handle.company delete on POST.
exports.company_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED:.company delete POST');
};

// Display.company update form on GET.
exports.company_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED:.company update GET');
};

// Handle.company update on POST.
exports.company_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};