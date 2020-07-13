import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Prime NG*/
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { SpinnerModule } from 'primeng/spinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [   

  ],
  imports: [
  //MODULOS
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //COMPONENTS
    PanelModule,  
    DialogModule,
    InputTextModule,
    ToastModule,    
    MessageModule,
    MessagesModule,
    InputMaskModule, 
    CalendarModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    ToolbarModule
  ],

  exports: [
    //MODULOS
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //COMPONENTS
    PanelModule,  
    DialogModule,
    InputTextModule,
    ToastModule,    
    MessageModule,
    MessagesModule,
    InputMaskModule, 
    CalendarModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    ToolbarModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [   
        ConfirmationService,
        MessageService
      
      ]

    }
  }
}
