import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Adicionado FormsModule

// Componentes
import { WhiteButtonComponent } from './buttons/white-button/white-button.component';
import { InputLinkComponent } from './inputs/input-link/input-link.component';
import { ButtonPlusComponent } from './buttons/button-plus/button-plus.component';
import { ButtonLinkComponent } from './buttons/button-link/button-link.component';
import { ButtonInfoComponent } from './buttons/button-info/button-info.component';
import { ToolbarVoltarComponent } from './toolbars/toolbar-voltar/toolbar-voltar.component';
import { ProjectSegmentComponent } from './segments/project-segment/project-segment.component';
import { ProjectModalComponent } from './modals/project-modal/project-modal.component';
import { ProjectCardComponent } from './cards/project-card/project-card.component';
import { ProjectStatusFormComponent } from './forms/project-status-form/project-status-form.component';
import { StatusSelectComponent } from './selects/status-select/status-select.component';
import { DadosSelectComponent } from './selects/dados-select/dados-select.component';
import { ProjectAccordionComponent } from './accordions/project-accordion/project-accordion.component';
import { ButtonAdicionarProjetoComponent } from './buttons/button-adicionar-projeto/button-adicionar-projeto.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';

@NgModule({
  declarations: [
    WhiteButtonComponent,
    InputLinkComponent,
    ButtonPlusComponent,
    ButtonLinkComponent,
    ButtonInfoComponent,
    ToolbarVoltarComponent,
    ProjectSegmentComponent,
    ProjectModalComponent,
    ProjectCardComponent,
    ProjectStatusFormComponent,
    StatusSelectComponent,
    DadosSelectComponent,
    ProjectAccordionComponent,
    ButtonAdicionarProjetoComponent,
    ButtonDeleteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule // Certifique-se de incluir o FormsModule
  ],
  exports: [
    WhiteButtonComponent,
    InputLinkComponent,
    ButtonPlusComponent,
    ButtonLinkComponent,
    ButtonInfoComponent,
    ToolbarVoltarComponent,
    ProjectSegmentComponent,
    ProjectModalComponent,
    ProjectCardComponent,
    ProjectStatusFormComponent,
    StatusSelectComponent,
    DadosSelectComponent,
    ProjectAccordionComponent,
    ButtonAdicionarProjetoComponent,
    ButtonDeleteComponent
  ]
})
export class ComponentsModule {}
