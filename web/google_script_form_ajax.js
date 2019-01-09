var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx-_-p71n32B8ctqdrFp9r4CGOweUqv7cWT0DXzLoBK0zP5a5A/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
