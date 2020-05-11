import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faPaperPlane = faPaperPlane; // alt: faEnvelope

  constructor() {
  }

  ngOnInit(): void {
  }

}
