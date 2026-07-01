import { Injectable, computed, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Language, LOCALIZATIONS } from '../interfaces/localization.interfaces';
import { CookiesService } from './cookies.service';

@Injectable({ providedIn: 'root' })
export class LocalizationService {
  private readonly cookiesService = inject(CookiesService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  currentLang = signal<Language>(this.detectLanguage());
  strings = computed(() => LOCALIZATIONS[this.currentLang()]);

  constructor() {
    this.updateMeta();
  }

  private detectLanguage(): Language {
    const cookieLang = this.getCookieSafe('preferred_lang');
    if (cookieLang && (cookieLang === 'ro' || cookieLang === 'fr' || cookieLang === 'be')) {
      return cookieLang as Language;
    }

    if (isPlatformBrowser(this.platformId)) {
      const nav = navigator.language || '';
      if (nav === 'ro' || nav === 'ro-RO') return 'ro';
      if (nav === 'fr-BE' || nav === 'nl-BE') return 'be';
      if (/^(fr|nl|de|it|es|pt|pl)/i.test(nav)) return 'fr';
    }

    return 'ro';
  }

  private getCookieSafe(name: string): string | null {
    try {
      return this.cookiesService.get(name);
    } catch {
      return null;
    }
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    this.cookiesService.set('preferred_lang', lang, 365);
    this.updateMeta();
  }

  private updateMeta(): void {
    const s = this.strings();
    this.titleService.setTitle(s.seo.title);
    this.metaService.updateTag({ name: 'description', content: s.seo.description });
    const htmlLang = this.currentLang() === 'be' ? 'fr-BE' : this.currentLang();
    this.document.documentElement.lang = htmlLang;
  }
}
