import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";
import { AddQuotePage } from "../add-quote/add-quote";

@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs selectedIndex="1">
        <ion-tab [root]="addQuotePage" tabTitle="Add Quote" tabIcon="star"></ion-tab>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage {
    addQuotePage = AddQuotePage; 
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}