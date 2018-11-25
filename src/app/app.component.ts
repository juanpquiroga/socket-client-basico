import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatserviceService } from './services/chatservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basico';

  public constructor( private wsService: WebsocketService,
    public chatService: ChatserviceService) {

  }

  ngOnInit( ) {
    this.chatService.getPrivateMessages().subscribe( (mensaje) => {
      console.log(mensaje);
    });
  }
}
