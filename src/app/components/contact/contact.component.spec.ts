import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, FormsModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate required fields', () => {
    // Test empty form validation
    const isValid = component.validateForm();
    expect(isValid).toBeFalsy();
    expect(component.validationErrors['name']).toBe('Name is required');
    expect(component.validationErrors['email']).toBe('Email is required');
    expect(component.validationErrors['message']).toBe('Message is required');
  });

  it('should validate email format', () => {
    component.name = 'Test User';
    component.email = 'invalid-email';
    component.message = 'This is a test message with more than 10 characters';
    
    const isValid = component.validateForm();
    expect(isValid).toBeFalsy();
    expect(component.validationErrors['email']).toBe('Please enter a valid email address');
  });

  it('should validate message length', () => {
    component.name = 'Test User';
    component.email = 'test@example.com';
    component.message = 'Short';
    
    const isValid = component.validateForm();
    expect(isValid).toBeFalsy();
    expect(component.validationErrors['message']).toBe('Message must be at least 10 characters long');
  });

  it('should pass validation with valid data', () => {
    component.name = 'Test User';
    component.email = 'test@example.com';
    component.message = 'This is a valid test message with sufficient length';
    
    const isValid = component.validateForm();
    expect(isValid).toBeTruthy();
    expect(Object.keys(component.validationErrors).length).toBe(0);
  });
});
