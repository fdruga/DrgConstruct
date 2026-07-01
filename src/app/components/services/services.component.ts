import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly loc = inject(LocalizationService).strings;
  private readonly sanitizer = inject(DomSanitizer);

  readonly icons: SafeHtml[] = [
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="6" y="10" width="28" height="14" rx="2" fill="none" stroke="#15263B"/><line x1="10" y1="14" x2="30" y2="14" stroke="#15263B"/><line x1="10" y1="17" x2="30" y2="17" stroke="#15263B"/><line x1="10" y1="20" x2="30" y2="20" stroke="#15263B"/><path d="M14 28 L 14 34 M20 28 L 20 34 M26 28 L 26 34" stroke="#D9883B" stroke-width="1.5"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="20" cy="20" r="10" fill="none" stroke="#15263B"/><path d="M20 10 Q 26 14 20 20 Q 14 26 20 30" fill="none" stroke="#D9883B" stroke-width="1.5"/><path d="M10 20 Q 14 14 20 20 Q 26 26 30 20" fill="none" stroke="#D9883B" stroke-width="1.5"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="10" y="6" width="20" height="28" rx="2" fill="none" stroke="#15263B"/><line x1="10" y1="14" x2="30" y2="14" stroke="#15263B"/><path d="M16 22 Q 20 18 24 22 Q 20 26 16 22 Z" fill="#D9883B" opacity=".4" stroke="#15263B"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="22" width="32" height="10" fill="none" stroke="#15263B"/><path d="M8 27 Q 12 22 16 27 Q 20 32 24 27 Q 28 22 32 27" fill="none" stroke="#D9883B" stroke-width="1.5"/><path d="M10 14 L 10 6 M16 14 L 16 6 M22 14 L 22 6 M28 14 L 28 6" stroke="#15263B" stroke-width=".8"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="6" y="10" width="28" height="20" fill="none" stroke="#15263B"/><circle cx="14" cy="20" r="5" fill="none" stroke="#D9883B" stroke-width="1.5"/><circle cx="26" cy="20" r="5" fill="none" stroke="#15263B"/><line x1="14" y1="15" x2="14" y2="25" stroke="#D9883B"/><line x1="9" y1="20" x2="19" y2="20" stroke="#D9883B"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="14" width="16" height="20" fill="none" stroke="#15263B"/><rect x="22" y="6" width="14" height="28" fill="none" stroke="#15263B"/><line x1="20" y1="24" x2="22" y2="24" stroke="#D9883B" stroke-width="2"/><path d="M28 14 Q 32 18 28 22 Q 24 26 28 30" fill="none" stroke="#D9883B" stroke-width="1.5"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 8 L 8 28 L 32 28" fill="none" stroke="#15263B"/><rect x="6" y="6" width="4" height="4" fill="#D9883B"/><circle cx="18" cy="28" r="3" fill="none" stroke="#15263B"/><circle cx="28" cy="28" r="3" fill="none" stroke="#15263B"/><path d="M20 14 L 28 14 L 28 18" fill="none" stroke="#D9883B" stroke-width="1.5"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="12" y="6" width="16" height="28" rx="1" fill="none" stroke="#15263B"/><circle cx="20" cy="14" r="2.5" fill="#D9883B"/><line x1="14" y1="22" x2="26" y2="22" stroke="#15263B"/><line x1="14" y1="26" x2="26" y2="26" stroke="#15263B"/><line x1="14" y1="30" x2="26" y2="30" stroke="#15263B"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="14" y="6" width="14" height="28" rx="1" fill="none" stroke="#15263B"/><circle cx="21" cy="14" r="2" fill="#D9883B"/><rect x="4" y="14" width="8" height="14" fill="none" stroke="#15263B"/><path d="M12 16 L 14 16 M12 20 L 14 20 M12 24 L 14 24" stroke="#D9883B" stroke-width="1.2"/></svg>`
  ].map(svg => this.sanitizer.bypassSecurityTrustHtml(svg));

  titleMain(title: string): string {
    const words = title.split(' ');
    return words.slice(0, -1).join(' ') + ' ';
  }

  titleLast(title: string): string {
    return title.split(' ').slice(-1)[0];
  }
}
