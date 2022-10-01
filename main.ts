import { CommentAnalyser } from "./CommentAnalyser";
import { Satisctics } from './statistics';

// create Anylyser and stastics Objects
const cm = new CommentAnalyser('/docs');
const statisctics = new Satisctics(0,0,0,0,0); // initialize stats to 0

// access comments using callbeack function and assign accordingly to statistics
// Print comment statistics to console  
cm.accessComments(comments =>{

    // assign statistics values 
    statisctics.questions = filterComments(comments, '?');
    statisctics.moverInComments = filterComments(comments, 'Mover');
    statisctics.shakerInComments = filterComments(comments, 'Shaker');
    statisctics.spam = filterComments(comments, 'http');

    statisctics.shortComments = comments.filter(comment => comment.length < 16).length;


    console.log(`\n=========== Comments Statistics ===========
                \nNumber of short comments: ${statisctics.shortComments}
                \nNumber of comments mentioning "Shaker" device: ${statisctics.shakerInComments} 
                \nNumber of comments mentioning "Mover" device: ${statisctics.moverInComments}
                \nNumber of comments that contain questions: ${statisctics.questions}
                \nNumber of comments that are spam: ${statisctics.spam}
            `);
});

// return the count for the query sent
function filterComments(comments: string[], query: string): number{

    // find the query string in the comment and return the number of comments that have it.
    return comments.filter(comment => comment.indexOf(query) !== -1).length

}