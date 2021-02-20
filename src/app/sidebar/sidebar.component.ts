import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sizeWindow = 0;
  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    $( window ).resize(function() {
      if($(window).width()! < 768){
        if ($("#wrapper").hasClass("toggled")) {
          $("#wrapper").removeClass('toggled')
          console.log("dfsfd")
        }
      }
    });


  }

}
