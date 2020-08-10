import { Injectable } from '@angular/core';

import toasrt from "toastr";

toasrt.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "400",
  "hideDuration": "1500",
  "timeOut": "5000",
  "extendedTimeOut": "1500",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};


@Injectable({
  providedIn: 'root'
})
export class SharedUtil {

  constructor(

  ) { }



  public getMsgError422(msg: any, detail: any) {
    toasrt.error( msg, detail);
  }

  public getMsgError(msg: any, detail: any) {
    toasrt.error(msg, detail);
  }

  public getMsgSuccess(msg: any, detail: any) {
    toasrt.success(msg, detail);
  }

}