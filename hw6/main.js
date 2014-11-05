$(document).ready(function() {
  // Use a simple AJAX request (only pull classes from one department)

  var triePromise = trieFromURL("http://cis197.herokuapp.com/cisClasses.json");

  // Use a nested AJAX request (pull all department filenames from a url,
  // then pull each of those files and use the combined results)

  // var classData = multiGet('http://cis197.herokuapp.com/departmentURLs.json',
  //                          'http://cis197.herokuapp.com/');
  // var triePromise = trieFromDataPromise(classData);


  var app = new AppView($('#app'), $('#item-template').html(), triePromise);

});
