import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';
import { __importDefault } from 'tslib';

@Component({
  selector:   'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})

export class MemberMessageComponent implements OnInit 
{
  @Input() messages:Message[];
  @Input() username:Message[];

  

  
  constructor() { }

  ngOnInit(): void {
  }

}
