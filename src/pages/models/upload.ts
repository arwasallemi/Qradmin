export class Upload {

    $key: string;
    file:any;
    name:string;
    url:string;
    progress:number;
    createdAt: Date = new Date();
  
    constructor(file:any) {
      this.file = file;
    }
  }