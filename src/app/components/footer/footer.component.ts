import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly loc = inject(LocalizationService).strings;

  readonly year = new Date().getFullYear();

  readonly menuSections = [
    { key: 'servicii', label: () => this.loc().header.servicii },
    { key: 'despre', label: () => this.loc().header.despre },
    { key: 'lucrari', label: () => this.loc().header.lucrari },
    { key: 'contact', label: () => this.loc().header.contact },
  ];

  smoothScroll(event: Event, sectionId: string): void {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
