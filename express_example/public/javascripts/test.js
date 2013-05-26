$(document).ready(function (){
  $('button.submit').on('click', function() {
    $.ajax({
      url: 'https://www.readability.com/api/content/v1/parser?url=' + $('input.url').val()+'&token=be4591d022b60dc6ad175516afb712a7797f3836',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        $('#targetdiv').append(data.content);
      },
      error: function() {
        console.error('error');
      }
    });
  });
});