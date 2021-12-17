import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Injectables --> this will instruct Angular that this service constructor need dependency of the other service
// This class is an injectable class which means that all the dependency of this class injected into its constructor
export class EmailService {

  constructor() { }
}
