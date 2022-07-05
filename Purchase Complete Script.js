Purchase Complete Script not including ecommerce object yet

<script>
    let args = {
        'event': 'purchase',
        'page_type': 'transaction',
        'ecommerce': {
            'affiliation': '{{ shop.name }}',
            'discount': '{{ order.total_discounts | money_without_currency }}',
            'shipping': '{{ order.shipping_price | money_without_currency | replace: ",", "." }}',
            'tax': '{{ order.tax_price | money_without_currency | replace: ",", "." }}',
            'value': '{{ order.total_price | money_without_currency | replace: ",", "." }}',
            'transaction_id': '{{ order.name }}',
            'currency': '{{ shop.currency }}',
            'coupon': '{{ order.discount_applications[0].title }}',  /// to be tested
            'payment_type': '{{ order.transactions[0].gateway }}',
            'items': [{% for line_item in order.line_items %}
            {
                'item_list_name': '{{ line_item.product.collections[0].title }}',
                'item_list_id': '{{ line_item.product.collections[0].id }}',
                'item_id': '{{ line_item.sku }}',
                'item_name': '{{ line_item.product.title }}', 
                'item_brand': '{{ line_item.vendor }}', 
                'item_category': '{{ line_item.product.type }}', 
                'item_variant': '{{ line_item.variant.option1 }}', 
                'item_size': '{{ line_item.variant.option2 }}',//needs t be change for correct colour vairant - florence  do size then colour most other brand s do colour first
                'affiliation': '{{ shop.name }}', 
                'price': '{{ line_item.unit_price | money_without_currency | replace: ",", "."  }}',
                'discount': '{{line_item.line_level_total_discount | money_without_currency | replace: ",", "."  }}',
                'currency': '{{ shop.currency }}',
                'quantity': '{{ line_item.quantity }}', //remove
                'index': '<position in list>'                
            }{% unless forloop.last %},{% endunless %}{% endfor %}]
        }
   }

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
window.dataLayer.push(args);

<script>



worked 
<script>

    let args = {
        'event': 'purchase',
        'page_type': 'transaction',
        'affiliation': '{{ shop.name }}',
        'discount': '{{ order.total_discounts | money_without_currency }}',
        'shipping': '{{ order.shipping_price | money_without_currency | replace: ",", "." }}',
        'tax': '{{ order.tax_price | money_without_currency | replace: ",", "." }}',
        'value': '{{ order.total_price | money_without_currency | replace: ",", "." }}',
        'transaction_id': '{{ order.name }}',
        'coupon': '{{ order.discount_applications[0].title }}',
        'currency': '{{ shop.currency }}',
        'payment_type': '{{ order.transactions[0].gateway }}',
        'items': [{% for line_item in order.line_items %}
{ 
'item_id': '{{ line_item.sku }}', 
'item_name': '{{ line_item.title }}', 
'item_brand': '{{ line_item.vendor }}',  
'item_category': '{{ line_item.product.type }}', 
'item_variant': '{{ line_item.variant.option1 }}', 
'item_size': '{{ line_item.variant.option2 }}',
'affiliation': '{{ shop.name }}', 
'coupon': '{{ line_item.discount_application.title }}',
'discount': '{{ line_item.line_level_total_discount | money_without_currency }}',
'price': '{{ line_item.price | money_without_currency | replace: ",", "."  }}', 
'discount': '{{line_item.line_level_total_discount | money_without_currency | replace: ",", "."  }}', 
'currency': '{{ shop.currency }}', 
'quantity': '{{ line_item.quantity }}'
 }{% unless forloop.last %},{% endunless %}{% endfor %}]
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args); 
</script> 





parameters that do not work 

            'order_count': '{{ customer.order_count }}',  need user to be logged in on purchase
