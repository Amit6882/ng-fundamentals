import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrPopService } from '../common/toastr.service';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';

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

    events:IEvent[];
    
    constructor(private eventService: EventService, private toastrService: ToastrPopService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }

    handleThubnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}