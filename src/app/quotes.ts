export class Quote {
    showDescription: boolean;
  id?: number;
  completeDate?: Date;

  uvotes = 0;
  dvotes = 0;

    constructor(

      public quote: string,
      public author: string,
      public user: string,
      public postDate: Date = new Date()
    ) {
      this.showDescription = false;

      
      
    }
}
  