// controller.get_data grabs data from API responses (stored in OBB.controller.api_returns) and 
// formats it appropriately for use by the model.
//  If you want use another API or data source, OBB.controller.get_data is the place where you'll specify 
//  those changes.
OBB.controller.get_data = {};
OBB.controller.get_data.ListingCardInfo = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        result.push({
            title: listing.title,
            categories_array: listing.categories,
            price: listing.price.amount,
            img_url: 'https://gateway.ob1.io/ob/image/' + listing.thumbnail.small,
            ave_rating: listing.averageRating,
            rating_count: listing.ratingCount,
            nsfw: listing.nsfw,
            free_shipping: listing.freeShipping,
        });
    });
    return result;
};
OBB.controller.get_data.categories = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        $.merge(result,listing.categories);
        result = $.unique(result);
    });
    // Make each string in array lowercase
    $.each(result, function(index, string) {
        result[index] = string.toLowerCase();
    });

    return result;
};
OBB.controller.get_data.countries = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        $.merge(result,listing.shipsTo);
        result = $.unique(result);
    });
    return result;
};
OBB.controller.get_data.summary = function() {
    result = {
        name: OBB.controller.api_returns.profile.name,
        handle: OBB.controller.api_returns.profile.handle,
        about: OBB.controller.api_returns.profile.about,
        description: OBB.controller.api_returns.profile.shortDescription,
        avatar: 'https://gateway.ob1.io/ob/image/' + OBB.controller.api_returns.profile.avatarHashes.tiny,
        header_img: './dist/images/example--dog05.jpg',// TODO replace with: 'https://gateway.ob1.io/ob/image/' + OBB.controller.api_returns.profile.headerHashes.large,
        location: OBB.controller.api_returns.profile.location,
        ave_rating: OBB.controller.api_returns.profile.stats.averageRating,
        rating_count: OBB.controller.api_returns.profile.stats.ratingCount,
    }

    return result;
};
OBB.controller.get_data.contactInfo = function() {

    result = OBB.controller.api_returns.profile.contactInfo;

    return result;
};
OBB.controller.get_data.singleListing = function(){
    var listing = OBB.controller.api_returns.single_listing.listing,
        images = [];

    $.each(listing.item.images, function(index, img_obj) {
        // Using the medium images to save on bandwidth. May change to large images later.
        images.push('https://gateway.ob1.io/ob/images/' + img_obj.medium);
    });

    result = {
        title: listing.item.title,
        price: listing.item.price,
        primary_img: 'https://gateway.ob1.io/ob/images/' + listing.item.images[0].medium,
        options: listing.item.options,
        type: listing.metadata.contractType,
        condition: listing.item.condition,
        tags: listing.item.tags,
        num_of_photos: listing.item.images.length,
        description: listing.item.description,
        images: images,
        reviews: [], // TODO
        shipping_options: listing.shipping_options,
        return_policy: listing.refundPolicy,
        terms_and_conditions: listing.termsAndConditions,
    };

    return result;
};
