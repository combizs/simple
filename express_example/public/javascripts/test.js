$(document).ready(function (){
var url = 'comments';
// var myRootRef = new Firebase('https://combizs.firebaseIO.com/');
// var myZabRef = new Firebase('https://zabonit-comments.firebaseIO.com/'+url);

// String.prototype.hashCode = function(){
//   var hash = 0;
//   if (this.length === 0) return hash;
//   for (i = 0; i < this.length; i++) {
//     char = this.charCodeAt(i);
//     hash = ((hash<<5)-hash)+char;
//     hash = hash & hash; // Convert to 32bit integer
//   }
//   return hash;
// };

  var fetchUrl = function(domain) {
    // var re = new RegExp("^[a-zA-Z0-9._-]+\\\\[a-zA-Z0-9.-]$");
    if(domain){
      $('input.url').attr('disabled', 'disable');
      $('button.submit').attr('disabled', 'disable');
      $.ajax({
        url: 'https://www.readability.com/api/content/v1/parser?url=' + $('input.url').val()+'&token=be4591d022b60dc6ad175516afb712a7797f3836',
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) {
          // url = 'articles';
          // myRootRef = new Firebase('https://zabonit-comments.firebaseIO.com/'+url);
          // myRootRef.push({url: $('input.url').val(), content: data.content});
          $('#targetdiv').append(data.content);
        },
        error: function() {
          console.error('error');
        },
        complete: function() {
          $('input.url').removeAttr('disabled');
          $('button.submit').removeAttr('disabled');
        }
      });
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
      // myRootRef = new Firebase('https://zabonit-comments.firebaseIO.com/'+url);
      // myRootRef.push({url: $('input.url').val(), content: ''});
      // myRootRef.push({comment: comment, urlID: urlID, author: 'anonymous'});
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

  // myZabRef.on('child_added', function(snapshot) {
  //   var message = snapshot.val();
  //   displayZabMessage(message.comment, message.author);
  // });

  var displayZabMessage = function (comment, author) {
    $('<div/>').text(comment).prepend($('<em/>').text(author+": ")).appendTo($('aside.comments'));
    $('aside.comments')[0].scrollTop = $('aside.comments')[0].scrollHeight;
  };

  $('input#writeComment').on('keyup', function(event) {
    var key = event.keyCode;

    if (key === 13) {
      writeComment($('input#writeComment').val());
    }
    return false;
  });

});