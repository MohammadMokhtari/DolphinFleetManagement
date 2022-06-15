import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../services/aside-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly slidenavService: SidenavService) {}

  ngOnInit(): void {}

  asideOpend: boolean = false;
  onToggleAside() {
    this.slidenavService.toggle();
    this.asideOpend = !this.asideOpend;
  }
}
