import { Component, VERSION } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
public selected = 'Inbox';
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  active = false;

  public items: Array<DrawerItem> = [
      { text: 'Inbox', icon: 'k-i-inbox', selected: true },
      { separator: true },
      { text: 'Notifications', icon: 'k-i-bell' },
      { text: 'Calendar', icon: 'k-i-calendar' },
      { separator: true },
      { text: 'Attachments', icon: 'k-i-hyperlink-email' },
      { text: 'Favourites', icon: 'k-i-star-outline' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }

  toggle(drawer) {
    this.active = !this.active;
  }
}
