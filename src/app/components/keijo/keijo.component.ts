import { Component, OnInit } from '@angular/core';
import { Keijo } from '../../models/keijo';
import { KeijoService } from '../../services/keijo.service';

@Component({
  selector: 'app-keijo',
  templateUrl: './keijo.component.html',
  styleUrls: ['./keijo.component.css']
})
export class KeijoComponent implements OnInit {

  keijos: Keijo[] = [];

  constructor(private keijoService: KeijoService) {
  }

  ngOnInit() {
    this.keijoService.getAll().subscribe(all => {
      this.keijos = all;
    })
  }
}