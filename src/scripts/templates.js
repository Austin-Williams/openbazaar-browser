OBB.templates = {

    nodeCard: function( data, card_id ){
        var to_print = '';

        to_print += '<div class="NodeCard"';
        // add the card_id if it was passed as a parameter
        if (card_id) {
            to_print += ' id="' + card_id + '"';
        }
        to_print += '>\n';
        to_print += '   <div class="NodeCard__header" style="background-image: url(' + data.header_img + ');">\n';
        to_print += '       <!-- Store Avatar -->\n';
        to_print += '       <div class="Avatar" style="background-image: url(' + data.avatar + ')"></div>\n';
        to_print += '   </div>\n';
        to_print += '   <div class="NodeCard__body">\n';
        to_print += '       <span class="NodeCard__name">' + data.name + '</span>\n';
        to_print += '       <span class="NodeCard__handle">@' + data.handle + '</span>\n';
        to_print += '       <p>\n';
        to_print += '           ' + data.about + '\n';
        to_print += '       </p>\n';
        to_print += '       <div class="NodeCard__bottom">\n';
        to_print += '           <div class="NodeCard__location">\n';
        to_print += '               <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '               ' + data.location + '\n';
        to_print += '           </div>\n';
        to_print += '           <div class="NodeCard__ratings">\n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '               ' + data.ave_rating + '\n';
        to_print += '               (<a>' + data.rating_count + '</a>)\n';
        to_print += '           </div>\n';
        to_print += '       </div>\n';
        to_print += '   </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

    listingCard: function( data ) {
        var to_print = '';

        to_print += '<div class="ListingCard';

        if (data.nsfw) {
            to_print += ' nsfw';
        }
        to_print += '"> \n';
        to_print += '   <div class="ListingCard__header"> \n';
        to_print += '       <div class="ListingCard__header__bg" style="background-image: url(' + data.img_url + ')"> \n';
        to_print += '       </div> \n';
        to_print += '       <div class="ListingCard__header__nsfw"> \n';
        to_print += '           <div>\n';
        to_print += '               <img src="./dist/images/icon--nsfw.png">\n';
        to_print += '               <button class="button">Show Mature Content</button>\n';
        to_print += '           </div>\n';
        to_print += '       </div> \n';
        to_print += '       <ul class="ListingCard__header__tags"> \n';
        if (data.free_shipping) {
            to_print += '           <li> \n';
            to_print += '               <span class="tag tag--green">Free Shipping</span> \n';
            to_print += '           </li> \n';
        }
        to_print += '       </ul> \n';
        to_print += '   </div> \n';
        to_print += '   <div class="ListingCard__body"> \n';
        to_print += '       <span class="ListingCard__title">' + data.title + '</span> \n';
        to_print += '       <div class="ListingCard__bottom"> \n';
        to_print += '           <div class="ListingCard__ratings"> \n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i> \n';
        to_print += '               ' + data.ave_rating + ' \n';
        to_print += '               (<a href="">' + data.rating_count + '</a>) \n';
        to_print += '           </div> \n';
        to_print += '           <div class="ListingCard__price"> \n';
        to_print += '               <span class="strong">$' + data.price + '</span> \n';
        to_print += '           </div> \n';
        to_print += '       </div> \n';
        to_print += '   </div> \n';
        to_print += '</div> \n';

        return to_print;
    },

    cardContainer: function ( listing_cards, id ) {
        var to_print = '';

        to_print += '<ul class="CardContainer" id="' + id + '">\n';

        $.each(listing_cards, function(index, listing) {
            to_print += '    <li class="Card">\n';
            to_print += OBB.templates.listingCard( listing ) + '\n';
            to_print += '    </li>\n';
        });

        to_print += '    <li class="Card">\n';
        to_print += '        <!-- Empty li.Card for proper card alignment. Do not remove. -->\n';
        to_print += '    </li>\n';
        to_print += '</ul>\n';

        return to_print;
    },

    filterCardCategoryOptions: function ( categories_array ) {
        var to_print = '';

        to_print += '    <ul id="FilterCard--category__list">\n';
        to_print += '        <li><input type="radio" name="filter--listings--category" value="all" checked>All</li>\n';

        $.each(categories_array, function(index, category) {
            to_print += '        <li><input type="radio" name="filter--listings--category" value="' + category.replace(/\s+/g, "-").toLowerCase() + '">' + category + '</li>\n';
        });

        to_print += '    </ul>\n';

        return to_print;
    },

    filterCardShippingOptions: function ( countries_array ) {
        var to_print = '';

        to_print += '            <select name="filter--listings--ships-to" id="filter--listings--ships-to">\n';
        $.each(countries_array, function(index, country) {
            to_print += '           <option value="' + country.replace(/\s+/g, "-").toLowerCase() + '">' + country + '</option>\n';
        });
        to_print += '            </select>\n';

        return to_print;
    },

    nodeInfo: function ( node_summary ) {
        to_print = '';

        to_print += '<div class="NodeInfo">\n';
        to_print += '    <div class="Avatar" style="background-image: url(' + node_summary.avatar + ')"></div>\n';
        to_print += '    <div class="NodeSummary">\n';
        to_print += '        <h3>'+ node_summary.name +'</h3>\n';
        to_print += '        <div>\n';
        to_print += '            <div class="NodeLocation">\n';
        to_print += '                <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.location + '\n';
        to_print += '            </div>\n';
        to_print += '            <div class="NodeRatings">\n';
        to_print += '                <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.ave_rating + '\n';
        to_print += '                (<a>' + node_summary.rating_count + '</a>)\n';
        to_print += '            </div>\n';
        to_print += '        </div>\n';
        to_print += '    </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

    overlayListingReturnToStore: function ( node_summary ) {
        to_print = '';

        to_print += '    <div class="ListingOverlay__nav__left click-to-close flex" id="ListingOverlay__nav__return-to-store">\n';
        to_print += '        <div class="Avatar" style="background-image: url(' + node_summary.avatar + ')"></div>\n';
        to_print += '        <span class="ListingOverlay__store-name">'+ node_summary.name +'</span>\n';
        to_print += '        <span class="ListingOverlay__return">Return to Store</span>\n';
        to_print += '    </div>\n';

        return to_print;
    },

    pageNodeNavSummary: function( node_summary ) {
        to_print = '';

        to_print += '<div class="NodeInfo" id="NodeNavSummary">\n';
        to_print += '    <div class="Avatar" style="background-image: url(' + node_summary.avatar + ')"></div>\n';
        to_print += '    <div class="NodeSummary">\n';
        to_print += '        <h3>' + node_summary.name + '</h3>\n';
        to_print += '        <div>\n';
        to_print += '            <div class="NodeLocation">\n';
        to_print += '                <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.location + '\n';
        to_print += '            </div>\n';
        to_print += '            <div class="NodeRatings">\n';
        to_print += '                <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.ave_rating + '\n';
        to_print += '                (<a>' + node_summary.rating_count + '</a>)\n';
        to_print += '            </div>\n';
        to_print += '        </div>\n';
        to_print += '    </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

    tabNodeHeader: function( node_summary, title ) {
        to_print = '';

        to_print += '<div class="Node__header" style="background-image: url(' + node_summary.header_img + ');" id="Node__header">\n';
        to_print += '    <h1>' + title + '</h1>\n';
        to_print += '</div>\n';

        return to_print;
    },

    tabHomeInformation: function( info_obj ){
        to_print = '';

        // TODO loop through OBB.model.current_store.contact_info and replace this info.
        // I need a more representative example of OBB.api_returns.current_node.profile.contactInfo 
        // before I can code this properly.

        to_print += '<ul id="Tab--home__information">\n';
        to_print += '    <li>\n';
        to_print += '        <h5>OpenBazaar ID</h5>\n';
        to_print += '        <p title="Qmai9U7856XKgDSvMFExPbQufcsc4ksG779VyG4Md5dn4J">Qmai9U7856XKgDSvMFExPbQufcsc4ksG779VyG4Md5dn4J</p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>Website</h5>\n';
        to_print += '        <p><a href="http://urbanart.com">http://urbanart.com</a><i class="fa fa-external-link icon--offsite" aria-hidden="true"></i></p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>Email</h5>\n';
        to_print += '        <p><a href="mailto:contact@urbanart.com">contact@urbanart.com</a><i class="fa fa-external-link icon--offsite" aria-hidden="true"></i></p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>Twitter</h5>\n';
        to_print += '        <p><a href="https://twitter.com/@urbanart">@urbanart</a><i class="fa fa-external-link icon--offsite" aria-hidden="true"></i></p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>Facebook</h5>\n';
        to_print += '        <p><a href="https://www.facebook.com/">/urbanart</a><i class="fa fa-external-link icon--offsite" aria-hidden="true"></i></p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>Instagram</h5>\n';
        to_print += '        <p><a href="https://www.instagram.com/">/urbanart</a><i class="fa fa-external-link icon--offsite" aria-hidden="true"></i></p>\n';
        to_print += '    </li>\n';
        to_print += '    <li>\n';
        to_print += '        <h5>SnapChat</h5>\n';
        to_print += '        <p>urbanart</p>\n';
        to_print += '    </li>\n';
        to_print += '</ul>\n';

        return to_print;
    },

};









