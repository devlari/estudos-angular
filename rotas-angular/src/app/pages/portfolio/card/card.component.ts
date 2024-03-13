import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => console.log(params));

    this.route.queryParams.subscribe(queryParams => console.log(queryParams));
  }

  ngOnInit(): void {
  }

}
