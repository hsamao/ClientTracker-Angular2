import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/components/dashboard.component';

import {ClientListComponent} from './clients/components/client-list.component';
import {AddClientComponent} from './clients/components/add-client.component';
import {EditClientComponent} from './clients/components/edit-client.component';
import {ClientDetailsComponent} from './clients/components/client-details.component';

import {AddGroupComponent} from './groups/components/add-group.component';
import {EditGroupComponent} from './groups/components/edit-group.component';
import {GroupListComponent} from './groups/components/group-list.component';

import {GroupService} from './groups/services/group.service';
import {ClientService} from './clients/services/client.service';


@Component({
    selector: 'my-app',
    template: `
    <ul class="w3-navbar w3-green">
        <li><a [routerLink]="['Dashboard']">Home</a></li>
        <li><a [routerLink]="['Clients']">Clients</a></li>
        <li><a [routerLink]="['Groups']">Groups</a></li>
    </ul>

    <div class="container w3-padding">
        <div class="w3-row">
            <div class="w3-col m4 l3">
                <h1 class="logo"><span>Client</span>Tracker</h1>
                <ul class="w3-ul w3-border">
                    <li><a [routerLink]="['AddClient']">AddClient</a></li>
                    <li><a [routerLink]="['AddGroup']">AddGroup</a></li>
                </ul>
            </div>

            <div class="w3-col m8 l9">
                <router-outlet></router-outlet>
            </div>

        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [GroupService, ClientService]
})

@RouteConfig([
    {path: '/',                     name: 'Dashboard',          component: DashboardComponent},
    {path: '/clients',              name: 'Clients',            component: ClientListComponent},
    {path: '/groups',               name: 'Groups',             component: GroupListComponent},
    {path: '/client/add',           name: 'AddClient',          component: AddClientComponent},
    {path: '/group/add',            name: 'AddGroup',           component: AddGroupComponent},
    {path: '/client/details/:id',   name: 'ClientDetails',      component: ClientDetailsComponent},
    {path: '/client/edit/:id',      name: 'EditClient',         component: EditClientComponent},
    {path: '/group/edit/:id',       name: 'EditGroup',          component: EditGroupComponent}
])

export class AppComponent {

}
