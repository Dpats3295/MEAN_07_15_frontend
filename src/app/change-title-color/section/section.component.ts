import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Section {
  title: string;
  body: string;
  color: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() section!: Section;
  @Input() selectedColor!: String;
  @Output() colorChange = new EventEmitter<string>();

  onClick(): void {
    this.colorChange.emit(
      this.selectedColor === this.section.color ? '' : this.section.color
    );
  }

}
