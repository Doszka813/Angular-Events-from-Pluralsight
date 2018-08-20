import { InjectionToken } from '@angular/core';


export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success (msg: string, titile?: string): void;
  info (msg: string, titile?: string): void;
  warning (msg: string, titile?: string): void;
  error (msg: string, titile?: string): void;
}
// import { Injectable } from '@angular/core';
// import { ToastrManager } from 'ng6-toastr-notifications';

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {

//   constructor(private toastrMng: ToastrManager) { }

//   success(message: string, title?: string) {
//     this.toastrMng.successToastr(message, title);
//   }

//   info(message: string, title?: string) {
//     this.toastrMng.infoToastr(message, title);
//   }

//   warning(message: string, title?: string) {
//     this.toastrMng.warningToastr(message, title);
//   }

//   error(message: string, title?: string) {
//     this.toastrMng.errorToastr(message, title);
//   }
// }
