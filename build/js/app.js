var Journal;
(function (Journal) {
    var Entry = (function () {
        function Entry(title, body, date, assignedTo) {
            this.title = title;
            this.body = body;
            this.date = date;
            this.assignedTo = assignedTo;
            this.validEntry = false;
            this.wordCount = 0;
            this.votes = 0;
        }
        Entry.prototype.isValid = function () {
            if (this.title.split("").length <= 20 && this.body.split("").length <= 500) {
                this.validEntry = true;
            }
            else {
                this.validEntry = false;
            }
        };
        Entry.prototype.upVote = function () {
            this.votes += 1;
        };
        Entry.prototype.downVote = function () {
            this.votes -= 1;
        };
        Entry.prototype.countWords = function () {
            var words = this.body.split(" ").length;
            this.wordCount = words;
            return this.wordCount;
        };
        return Entry;
    }());
    Journal.Entry = Entry;
})(Journal || (Journal = {}));
/// <reference path="journal-classes.ts"/>
var Journal;
(function (Journal) {
    var izzy = {
        name: "Izzy G",
        email: "izzy@epicodus.com"
    };
    var ramon = {
        name: "Ramon dlC",
        email: "ramon@epicodus.com"
    };
    Journal.people = {
        "izzy": izzy,
        "ramon": ramon
    };
})(Journal || (Journal = {}));
/// <reference path="journal-classes.ts"/>
/// <reference path="entry-people.ts"/>
var people = Journal.people;
var today = new Date();
var entries = [];
// entries.push(new Journal.Entry("Title", "Body", today, people.izzy));
$(document).ready(function () {
    $('#submit').click(function (event) {
        $('#anEntry').empty();
        event.preventDefault();
        var anotherTitle = $("#title").val();
        var anotherBody = $("#body").val();
        var entry = new Journal.Entry(anotherTitle, anotherBody, today, people.izzy);
        entry.isValid();
        if (entry.validEntry === true) {
            entries.push(entry);
            console.log(entries);
        }
        else {
            alert("Please enter correct amount of characters");
        }
        for (var i = 0; i < entries.length; i++) {
            $('#anEntry').append("<span id='entryTitle'>" + entries[i].title + "</span><br><span id='entryDate'>" + entries[i].date + "</span><br><span id='entryBody'>" + entries[i].body + "</span><br>");
            $("#anEntry").append("<button type='button' id='upvote" + i + "' class='btn btn-sm'><img src='img/upvote.png'></button><button type='button' id='downvote" + i + "' class='btn btn-sm'><img src='img/downvote.png'></button><div id='votes" + i + "'></div><br><br>");
            $("#upvote" + i).click(function (event) {
                event.preventDefault();
                entry.upVote();
                $('#votes' + i).text(entry.votes);
                console.log(entry.votes);
            });
            $("#downvote" + i).click(function (event) {
                event.preventDefault();
                entry.downVote();
                console.log(entry.votes);
            });
        }
    });
});
//
