import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';

@Component({
    selector: 'app-<%= dasherize(name) %>-component',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>'],
})
export class <%= classify(name) %>Component implements OnInit <% if (subscriptionHandling) {%>, OnDestroy <% }%>{
    <% if (subscriptionHandling) {%>

    private readonly subscription: Subscription = new Subscription();

    <% }%>

    constructor() { }

    ngOnInit(): void {
    }
    <% if (subscriptionHandling) {%>

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    <% }%>
}
