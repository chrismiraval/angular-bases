import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class DbzListComponent {
  @Input() charactersDbz: Character[] = [];
  @Output() onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }
}
