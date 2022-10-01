import * as fs from 'fs';
import * as path from 'path';

export class CommentAnalyser {

    folder: string;

    constructor(directory){
        this.folder = path.join(__dirname+directory);
    }

    // fetch each comment and return it in lowercase
    async loadFile(fileName) {

        // async read file and specify encoding
        let fileContent = await fs.promises.readFile(fileName, { encoding: "utf-8" });
        return await fileContent;

        // return await fileContent.toLowerCase(); Option for when "Shaker" and "Mover" search isn't case sensitive
    }

    // read all comments in the files withing the directory and set the value to callback function
    async accessComments(cb){

        var comments: string[] = [];

        try{

            // get the file names in the docs folder
            let fileNames = await fs.promises.readdir(this.folder);

            // use only text files( extension .txt)
            fileNames = fileNames.filter(fileName => fileName.indexOf('.txt') != -1);

            // total number of files in the directory
            var NumberOfFiles = fileNames.length;   

            // set the file comments to an array
            for(var i=0; i< NumberOfFiles; i++){

            // commentsArray received array from cb in CommentAnalysis
            await this.loadFile(this.folder+'\\'+fileNames[i])
            .then(arr =>{

                // combine all comments into one array
                comments =[...comments, ...arr.split('\n')];

                // return the comments array when done loading all comments
                if(i == (NumberOfFiles  - 1)){
                    cb(comments);
                }

            })
            .catch(err=>{
                return err;
            }); //  return err in catch block
            }

        }catch(err){
            console.error('Error occured while retrieving files from directory', err);
        }
        
            
    }
}