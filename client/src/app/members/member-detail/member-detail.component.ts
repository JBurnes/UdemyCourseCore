import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs') memberTabs: TabsetComponent;
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
activeTab:TabDirective;
  messages: import("c:/Users/jesus/Documents/Trebuchet/Udemy courses/UdemyCourseCore/client/src/app/_models/message").Message[];

  constructor(private memberService: MembersService, private route: ActivatedRoute, private messageService :MessageService ) { }

  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrls;
  }

  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }

  loadMessages(){
    this.messageService.getMessageThread(this.member.username).subscribe(messages => {
      this.messages = messages;
    })
  }
  onTabActivated(data: TabDirective){
    this.activeTab =data;
    if(this.activeTab.heading ==='Messages' && this.messages.length === 0){
      this.loadMessages();

    }
  }

}
