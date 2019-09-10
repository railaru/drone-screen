export default class ToyInterface {

  userId: number;
  id: number;
  title: string;
  body: string;
  completed: boolean

  constructor(userId: number, id: number, title: string, body: string, completed: boolean) {

    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    this.completed = completed;
  }
}
