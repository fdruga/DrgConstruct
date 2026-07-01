import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly loc = inject(LocalizationService).strings;

  titleMain(title: string): string {
    const parts = title.split('. ');
    return parts.slice(0, -1).join('. ') + '. ';
  }

  titleLast(title: string): string {
    const parts = title.split('. ');
    return parts[parts.length - 1];
  }
}
