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
            this.validEntry = true;
        };
        Entry.prototype.upVote = function () {
            this.votes++;
        };
        Entry.prototype.downVote = function () {
            this.votes--;
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
// console.log(entries);
// var body = "I am a body";
// var words = body.split(" ").length;
console.log(words);
