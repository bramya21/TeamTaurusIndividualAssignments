export class Movie{
   constructor(id,title,description,production){
      this.id = id
      this.description = description
      this.production = production
      this.title = title
   }
   public id:number
   public title:string
   public description:string
   public production:string
}