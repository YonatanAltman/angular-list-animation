import {
  Component,
  VERSION,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject ,of} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user$ = new BehaviorSubject<{ id: string }>(null);
  user1$ = new ReplaySubject<{ id: string }>(1);
  events$: Observable< string >;
  name = 'yonatan';
  count = 0;
  isManager = false;
  public getName() {
    const t = 1 + 3;
    console.log('nonnonono0000');
    return this.name;
  }
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.getSomeData();
  }
  getSomeData() {
    console.log('before');
    setTimeout(() => {
      this.events$ = of('Arthor');
      console.log('after');
    }, 2000);
  }
  someEvent(s) {
    console.log(s);
    if (this.count > 4) {
      this.isManager = true;
      this.cd.detectChanges();
    }
    this.user1$.subscribe((user) => {
      console.log(user.id);
    });
    ++this.count;
  }
}
