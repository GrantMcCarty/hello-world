import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add messages', () => {
    service.add("message");
    expect(service.messages.length).toBe(1);
  });
  it('should clear messages', () => {
    service.add("message");
    service.add("message2");
    expect(service.messages.length).toBe(2);
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
