import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../services/localization.service';
import { Language } from '../../interfaces/localization.interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly locService = inject(LocalizationService);
  protected readonly loc = this.locService.strings;
  protected readonly currentLang = this.locService.currentLang;
  protected readonly menuOpen = signal(false);

  setLanguage(lang: Language): void {
    this.locService.setLanguage(lang);
  }

  toggleMenu(): void {
    const open = !this.menuOpen();
    this.menuOpen.set(open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  smoothScroll(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
