import { MatSidenav } from '@angular/material/sidenav';

export class FleetSidenavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
    console.log(this.sidenav);
  }
}
