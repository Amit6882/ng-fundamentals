import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail #thumbnail (click)="handleThubnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {

    events:any[];
    
    constructor(private eventService: EventService, private toastr: ToastrService) {}

    ngOnInit(): void {
        this.events = this.eventService.getEvent();
    }

    handleThubnailClick(eventName) {
        this.toastr.success(eventName);
    }
}