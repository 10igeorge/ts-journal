/// <reference path="journal-classes.ts"/>

/// <reference path="entry-people.ts"/>

var people = Journal.people;
var today = new Date();

var entries = [];
entries.push(new Journal.Entry("Title", "Body", today, people.izzy));


$(document).ready(function(){

  // var userName = $("#name").val();
  // var email = $("#email").val();


  $('#submit').click(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    console.log(title);
    console.log(body);
    var entry = new Journal.Entry(title, body, today, people.izzy);
    entries.push(entry);
    console.log(entry);
    for (var post of entries){
      post.isValid();
    }
    if(post.validEntry === true){
      console.log(entry);

      $('#anEntry').append("<span id='entryTitle'>"+title+"</span><br><span id='entryDate'>"+today+"</span><br><span id='entryBody'>"+body+"</span><br><button type='button' id='upvote' class='btn btn-sm'><img src='img/upvote.png'></button><button type='button' id='downvote' class='btn btn-sm'><img src='img/downvote.png'></button><div id='votes'></div><br><br>");
    } else {
      alert("Enter valid information");
    }
    $("#upvote").click(function(event) {
      event.preventDefault();
      entry.upVote();
      $("#votes").text(entry.votes);
      console.log(entry.votes);
    })
    $("#downvote").click(function(event) {
      event.preventDefault();
      entry.downVote();
      $("#votes").text(entry.votes);
      console.log(entry.votes);
    })
  })


});
