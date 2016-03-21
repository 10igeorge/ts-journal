module Journal {
  export interface IEntry {
    title: string;
    body: string;
    date: Date;
    wordCount: number;
    validEntry: boolean;
    votes: number;
    assignedTo: IPerson;
  }

  export interface IPerson {
    name: string;
    email?: string;
  }

  export class Entry implements IEntry {
    validEntry: boolean = false;
    wordCount: number = 0;
    votes: number = 0;
    constructor(public title: string, public body: string, public date: Date, public assignedTo: IPerson){}
    isValid(){
      if (this.title.split("").length <= 20 && this.body.split("").length <= 500){
        this.validEntry = true;
      } else {
        this.validEntry = false;

      }
    }
    upVote(){
      this.votes+=1;
    }
    downVote(){
      this.votes-=1;
    }
    //get method?

    getVotes() {
      return this.votes;
    }

    countWords(){
      var words = this.body.split(" ").length;
      this.wordCount = words;
      return this.wordCount;
    }
  }
}
