import { TestBed } from '@angular/core/testing';

import { clienteService } from './cliente.service';

describe('ListarClienteService', () => {
  let service: clienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(clienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
