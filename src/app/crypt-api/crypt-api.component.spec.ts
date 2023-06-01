import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptApiComponent } from './crypt-api.component';

describe('CryptApiComponent', () => {
  let component: CryptApiComponent;
  let fixture: ComponentFixture<CryptApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
