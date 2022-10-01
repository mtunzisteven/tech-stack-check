"use strict";
exports.__esModule = true;
var CommentAnalyser_1 = require("./CommentAnalyser");
var statistics_1 = require("./statistics");
// create Anylyser and stastics Objects
var cm = new CommentAnalyser_1.CommentAnalyser('/docs');
var statisctics = new statistics_1.Satisctics(0, 0, 0, 0, 0); // initialize stats to 0
// access comments using callbeack function and assign accordingly to statistics
// Print comment statistics to console  
cm.accessComments(function (comments) {
    // assign statistics values 
    statisctics.questions = filterComments(comments, '?');
    statisctics.moverInComments = filterComments(comments, 'Mover');
    statisctics.shakerInComments = filterComments(comments, 'Shaker');
    statisctics.spam = filterComments(comments, 'http');
    statisctics.shortComments = comments.filter(function (comment) { return comment.length < 16; }).length;
    console.log("\n=========== Comments Statistics ===========\n                \nNumber of short comments: ".concat(statisctics.shortComments, "\n                \nNumber of comments mentioning \"Shaker\" device: ").concat(statisctics.shakerInComments, " \n                \nNumber of comments mentioning \"Mover\" device: ").concat(statisctics.moverInComments, "\n                \nNumber of comments that contain questions: ").concat(statisctics.questions, "\n                \nNumber of comments that are spam: ").concat(statisctics.spam, "\n            "));
});
// return the count for the query sent
function filterComments(comments, query) {
    // find the query string in the comment and return the number of comments that have it.
    return comments.filter(function (comment) { return comment.indexOf(query) !== -1; }).length;
}
