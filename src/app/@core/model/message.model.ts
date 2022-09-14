import {FirestoreCreatedAt, FirestoreResource} from "@paddls/ngx-firestore-repository";
import {Column, Id} from "@paddls/ngx-repository";

@FirestoreResource({
  path: '/messages'
})
export class Message {

  @Id()
  public id: string;

  @Column()
  public senderName: string;

  @Column()
  public senderMail: string;

  @Column()
  public object: string;

  @Column()
  public message: string;

  @FirestoreCreatedAt()
  public sendAt: Date;

  @Column()
  public read: boolean;

  public constructor(data: Partial<Message> = {}) {
    Object.assign(this, data);
  }

}
