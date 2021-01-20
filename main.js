function postComment(){
  var comment = document.getElementById('comment');
  var comments = document.getElementById('comments');
  comments.value = comments.value + " \n" + comment.value;
  comment.value = '';
}
