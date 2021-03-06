import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
  }

}
