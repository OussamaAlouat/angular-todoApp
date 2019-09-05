export class Activity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public date: Date,
    public completed: boolean
  ){}
}