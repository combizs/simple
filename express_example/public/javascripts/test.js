$(document).ready(function (){
  var url = 'comments';

  var fetchUrl = function(domain) {
    // var re = new RegExp("^[a-zA-Z0-9._-]+\\\\[a-zA-Z0-9.-]$");
    if(domain){
      $.ajax({
        url: 'http://localhost:3000/url/?url=' + $('input.url').val(),
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
          $('input.url').attr('disabled', 'disable');
          $('button.submit').attr('disabled', 'disable');
        },
        success: function(data) {
          $('#targetdiv').text(data.urlHash);
        },
        error: function() {
          console.error('error');
        },
        complete: function() {
          $('input.url').removeAttr('disabled');
          $('button.submit').removeAttr('disabled');
        }
      });
      // $.ajax({
      //   url: 'https://www.readability.com/api/content/v1/parser?url=' + $('input.url').val()+'&token=be4591d022b60dc6ad175516afb712a7797f3836',
      //   type: 'GET',
      //   dataType: 'jsonp',
      //   success: function(data) {
      //     $('#targetdiv').append(data.content);
      //   },
      //   error: function() {
      //     console.error('error');
      //   },
      //   complete: function() {
      //     $('input.url').removeAttr('disabled');
      //     $('button.submit').removeAttr('disabled');
      //   }
      // });
    }
    else {
      // $('input.url').addClass('error');
    }
  };

  $('button.submit').on('click', function(event) {
    fetchUrl($('input.url').val());
  });

  $('input.url').on('keyup', function(event) {
    var key = event.keyCode;

    if (key === 13) {
      fetchUrl($('input.url').val());
    }
    return false;
  });

  var writeComment = function(comment) {
    if(comment){
      urlID = $('input.url').val().hashCode();
      url = 'comments';
      $('input#writeComment').val('');
    }
    else {
      console.error('add css to highlight input box and add message');
    }
  };

  $('button.comment').on('click', function() {
    writeComment($('#writeComment').val());
    $('#writeComment').val('');
  });

  // var displayZabMessage = function (comment, author) {
  //   $('<div/>').text(comment).prepend($('<em/>').text(author+": ")).appendTo($('aside.comments'));
  //   $('aside.comments')[0].scrollTop = $('aside.comments')[0].scrollHeight;
  // };

  // $('input#writeComment').on('keyup', function(event) {
  //   var key = event.keyCode;

  //   if (key === 13) {
  //     writeComment($('input#writeComment').val());
  //   }
  //   return false;
  // });

});