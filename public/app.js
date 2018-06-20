$(document).ready(function() {

  function productLiElement(product) {
    return `<li><span>${product.name}</span><span> - </span><span>${product.price}</span></li>`
  }

  $.ajax('/products').done(function(products) {
    // 1. Iterate through the products
    $.each(products, function(productId, product) {
      // 2. Create the li tag according to the product we are currently on
      let $liElement = productLiElement(product);

      // 3. Append the li tag to the ul tag
      $('ul#products').append($liElement);
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();

    // 1. Get the data from the from
    let data = $('form').serialize();

    // 2. Make a AJAX request using that data
    $.ajax('/products', {
      method: 'POST',
      data: data
    }).done(function(product) {
      // 1. Make the new product show up
      let $liElement = productLiElement(product);
      $('ul#products').append($liElement);

      // 2. Clear the form
      $('form input').val('');
    })
  });
});