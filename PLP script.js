PLP Script


----------------active---------------
<script>

let args = {
   'event': 'view_item',
   'page_type': 'PLP',
   'ecommerce': {
        'item_list_name': '{{ collection.title }}',
        'item_list_id': '{{ collection.id }}',
        'items': [{% for product in collection.products %}
        {
            'item_list_name': '{{ collection.title }}',
            'item_list_id': '{{ product.collections[0].id }}',
            'item_id': '{{product.selected_or_first_available_variant.sku}}',
            'item_name': '{{ product.title }}',
            'item_brand': '{{ product.vendor }}',
            'item_category': '{{ product.type }}',
            'item_variant': '{{ product.selected_or_first_available_variant.option1 }}',
            'affiliation': '{{ shop.name }}',
            'location_id': '{{ template.name }}',
            'price': '{{ product.price  | money_without_currency | replace: ",", "."  }}',
            'currency': '{{ shop.currency }}',
            'index': '{{forloop.index}}'
        }{% unless forloop.last %}, {% endunless %}{% endfor %}]
    }
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
window.dataLayer.push(args);





-------------------original draft------------------
let args = {
   'event': 'view_item_list',
   'page_type': 'PLP',
   'ecommerce': {
        'item_list_name': '{{ product.collections[0].title }}',
        'item_list_id': '{{ product.collections[0].id }}',
        'items': [{% for product in collection.products %}
         {
            'item_list_name': '{{ product.collections[0].title }} ',
            'item_list_id': '{{ product.collections[0].id }}',
            'item_id': '{{ product.selected_or_first_available_variant.sku }}',
            'item_name': '{{ product.title }}', 
            'item_brand': '{{ product.vendor }}', 
            'item_category': '{{ product.type }}', 
            'item_category2': '<level 2 category>',
            'item_category3': '<level 3 category>',
            'item_category4': '<level 4 category>',
            'item_category5': '<level 5 category>',
            'item_variant': '{{ product.selected_or_first_available_variant.option1 }}', 
            'affiliation': '{{ shop.name }}', 
            'location_id': '{{ template }}',
            'discount': '{{ product.line_level_total_discount | money_without_currency }}',
            'price': '{{ product.price  | money_without_currency | replace: ",", "." }}',
            'currency': '{{ shop.currency }}',
            'quantity': '{{ line.quantity }}', //remove
            'index': '{{forloop.index}}'
          }{% unless forloop.last %},{% endunless %}
        {% endfor %}]
    }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
window.dataLayer.push(args);