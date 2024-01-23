import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelendComponent } from './panelend.component';

describe('PanelendComponent', () => {
  let component: PanelendComponent;
  let fixture: ComponentFixture<PanelendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
