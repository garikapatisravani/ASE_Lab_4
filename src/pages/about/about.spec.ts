import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule} from 'ionic-angular';
import {AlertControllerMock, AlertMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });

  it("sign up function", () =>{

    let fun = new AboutPage(alertCtrl);
    fun.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

});
