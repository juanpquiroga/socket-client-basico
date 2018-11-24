import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatserviceService } from '../../services/chatservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement ;

  constructor(public chatService: ChatserviceService ) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-messages');

    this.mensajesSubscription = this.chatService.getMessages().subscribe( (mensaje) => {
      console.log(mensaje);
      this.mensajes.push(mensaje);

      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  public enviar() {
    //console.log( this.texto );

    if ( this.texto.trim().length > 0 ) {
      this.chatService.sendMessage(this.texto);
      this.texto = '';
    }

  }
}
