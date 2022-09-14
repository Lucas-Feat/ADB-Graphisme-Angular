import {Injectable} from '@angular/core';
import {InjectRepository} from '@paddls/ngx-repository';
import {Observable} from 'rxjs';
import {FirestoreRepository} from "@paddls/ngx-firestore-repository";
import {Message} from "@core/model/message.model";
import {log} from "@paddls/rxjs-common";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  @InjectRepository({repository: () => FirestoreRepository, resourceType: () => Message})
  private readonly messageRepository: FirestoreRepository<Message, string>;

  public create(message: Message): Observable<string> {
    return this.messageRepository.create(message).pipe(
      log(0)
    );
  }
}
