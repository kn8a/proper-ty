var express = require('express');
var router = express.Router();

// Require controller modules.
var listing_controller = require('../controllers/listingController');

/// LISTINGS ROUTES ///

// GET catalog home page.
router.get('/', listing_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/listing/create', listing_controller.listing_create_get);

// POST request for creating listing.
router.post('/listing/create', listing_controller.listing_create_post);

// GET request to delete listing.
router.get('/listing/:id/delete', listing_controller.listing_delete_get);

// POST request to delete listing.
router.post('/listing/:id/delete', listing_controller.listing_delete_post);

// GET request to update listing.
router.get('/listing/:id/update', listing_controller.listing_update_get);

// POST request to update listing.
router.post('/listing/:id/update', listing_controller.listing_update_post);

// GET request for one listing.
router.get('/listing/:id', listing_controller.listing_detail);

// GET request for list of all listing items.
router.get('/all_listings', listing_controller.listings_list);


module.exports = router;
