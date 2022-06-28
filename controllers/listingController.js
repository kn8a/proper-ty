const listing = require('../models/listing')
const company = require('../models/company')
var async = require('async');


exports.index = (req,res) => {
    
    async.parallel({
        listings_count: function(callback) {
            listing.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },

        listings_active_count: function(callback) {
            listing.countDocuments({status:'Active'}, callback);
        },
        company_count: function(callback) {
            company.countDocuments({}, callback);
        },
        
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
        console.log(results)
    });
}

// Display list of all books.
exports.listings_list = function(req, res, next) {

    listing.find({})
      .sort({list_details : 1})
      .populate('listing_company')
      .exec(function (err, listings) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('listings', { title: 'All listings', listings: listings });
        console.log(listings)
      });
  
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
