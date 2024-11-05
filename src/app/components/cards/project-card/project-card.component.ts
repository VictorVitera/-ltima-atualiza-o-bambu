import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectTitle: string = 'Projeto Exemplo';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() progress: number = 0;
  @Input() modoExclusao: boolean = false;
  @Input() selecionado: boolean = false;
  @Output() selecionadoChange = new EventEmitter<boolean>();

  getProgresso(): number {
    return this.progress;
  }

  abrirInfo(event: Event) {
    event.stopPropagation();
    console.log('Botão de informações clicado');
  }

  irParaDetalhes() {
    if (!this.modoExclusao) {
      console.log('Redirecionando para a página de detalhes');
    }
  }

  toggleSelecionado() {
    this.selecionado = !this.selecionado;
    this.selecionadoChange.emit(this.selecionado);
  }
}
