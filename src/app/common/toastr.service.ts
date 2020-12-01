import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToastrPopService {

    constructor(private toastr: ToastrService) {}
    
    success(message:string, title?: string) {
        this.toastr.success(message);
    }
    
    info(message:string, title?: string) {
        this.toastr.info(message);
    }
    warning(message:string, title?: string) {
        this.toastr.warning(message);
    }
    error(message:string, title?: string) {
        this.toastr.error(message);
    }
}