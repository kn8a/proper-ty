const listing = require('../models/listing')

exports.index = (req,res) => {
    res.send('NOT IMPLEMENTED: Site Home Page')
}

// Display list of all books.
exports.listings_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.listing_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: listing detail: ' + req.params.id);
};

// Display listing create form on GET.
exports.listing_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: listing create GET');
};

// Handle listing create on POST.
exports.listing_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: listing create POST');
};

// Display listing delete form on GET.
exports.listing_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: listing delete GET');
};

// Handle listing delete on POST.
exports.listing_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: listing delete POST');
};

// Display listing update form on GET.
exports.listing_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: listing update GET');
};

// Handle listing update on POST.
exports.listing_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
