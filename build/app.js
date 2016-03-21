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
entries.push(new Journal.Entry("Title", "Body", today, people.izzy));
$(document).ready(function () {
    // var userName = $("#name").val();
    // var email = $("#email").val();
    $('#submit').click(function (event) {
        event.preventDefault();
        var title = $("#title").val();
        var body = $("#body").val();
        console.log(title);
        console.log(body);
        var entry = new Journal.Entry(title, body, today, people.izzy);
        entries.push(entry);
        console.log(entry);
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var post = entries_1[_i];
            post.isValid();
        }
        if (post.validEntry === true) {
            console.log(entry);
            $('#anEntry').append("<span id='entryTitle'>" + title + "</span><br><span id='entryDate'>" + today + "</span><br><span id='entryBody'>" + body + "</span><br><button type='button' id='upvote' class='btn btn-sm'><img src='img/upvote.png'></button><button type='button' id='downvote' class='btn btn-sm'><img src='img/downvote.png'></button><div id='votes'></div><br><br>");
        }
        else {
            alert("Enter valid information");
        }
        $("#upvote").click(function (event) {
            event.preventDefault();
            entry.upVote();
            $("#votes").text(entry.votes);
            console.log(entry.votes);
        });
        $("#downvote").click(function (event) {
            event.preventDefault();
            entry.downVote();
            $("#votes").text(entry.votes);
            console.log(entry.votes);
        });
    });
});
