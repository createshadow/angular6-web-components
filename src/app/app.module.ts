import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DropdownComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const cutmomDropdown = createCustomElement(DropdownComponent, {injector});
    customElements.define('app-dropdown', cutmomDropdown);
  }

}
