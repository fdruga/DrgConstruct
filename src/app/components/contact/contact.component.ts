import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly loc = inject(LocalizationService).strings;

  readonly phones = [
    { href: 'tel:+40774687957', display: '+40 774 687 957' },
    { href: 'tel:+32484787781', display: '+32 484 787 781' },
    { href: 'tel:+40773951400', display: '+40 773 951 400' },
  ] as const;
}
