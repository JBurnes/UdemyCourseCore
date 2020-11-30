import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { MatSliderModule } from '@angular/material/slider';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
member: Member;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
asyncTabs: Observable<ExampleTab[]>;
  constructor(private memberService: MembersService, private route: ActivatedRoute) { 

    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
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
  ngOnInit(): void {
    this.loadMember ();
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

   loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member =>{
      this.member = member;
      this.galleryImages = this.getImages();
    })
   }
}


import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}


