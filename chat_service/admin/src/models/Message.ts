export class Message {
  public id: number = 0;
  public message: string = '';

  constructor(id: number, message: string) {
    this.message = message;
    this.id = id;
  }
}
