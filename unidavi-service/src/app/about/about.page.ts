import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  options: any = {
    name: 'data.db',
    location: 'default',
    createFromLocation: 1
};
  constructor(private sqlite: SQLite) { }

  createDbTest() {
    this.sqlite.create(this.options)
    .then((db: SQLiteObject) => {
      db.executeSql('create table danceMoves2(name VARCHAR(32))', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

}
