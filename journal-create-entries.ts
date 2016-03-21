/// <reference path="journal-classes.ts"/>

/// <reference path="entry-people.ts"/>

var people = Journal.people;
var today = new Date();

var entries = [];



$(document).ready(function(){



  $('#submit').click(function(event){
listEntries();
    event.preventDefault();
    var anotherTitle = $("#title").val();
    var anotherBody = $("#body").val();
    var entry = new Journal.Entry(anotherTitle, anotherBody, today, people.izzy);
    entry.isValid();
    if (entry.validEntry === true){
      entries.push(entry);
      console.log(entries);
    } else {
      alert("Please enter correct amount of characters");
    }
    listEntries();
  });



var listEntries = function() {
  $("#anEntry").html(' ');
    for (var i = 0; i < entries.length; i++){


      $("#anEntry").append("<div id='entry" + i + "'><br>Title: " + entries[i].title + "<br>Entry: " + entries[i].body + "<br>Votes: " + entries[i].votes + "<br>");

      $("#entry" + i).append("<br><button type='button' id='upvote" + i + "' up='" + i + "'class='btn btn-sm'><img src='img/upvote.png'></button>");

      $("#entry" + i).append("<button type='button' id='downvote" + i + "' down='" + i + "'class='btn btn-sm'><img src='img/downvote.png'></button>");



      $("#upvote" + i).click(function(event) {

        event.preventDefault();
        entries[$(this).attr("up")].upVote();
        listEntries();
      });

      $("#downvote" + i).click(function(event) {
        event.preventDefault();
        entries[$(this).attr("down")].downVote();
        listEntries();
      });

    }
  }
});








//
