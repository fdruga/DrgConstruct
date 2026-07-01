import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from '../../services/localization.service';

interface WorkImage {
  src: string;
  order: number;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  protected readonly loc = inject(LocalizationService).strings;

  // DOM order: w2, w5, w3, w6, w4, w7, w1
  readonly images: WorkImage[] = [
    { src: 'assets/images/w2.png', order: 1 },
    { src: 'assets/images/w5.png', order: 4 },
    { src: 'assets/images/w3.png', order: 2 },
    { src: 'assets/images/w6.png', order: 5 },
    { src: 'assets/images/w4.png', order: 3 },
    { src: 'assets/images/w7.png', order: 6 },
    { src: 'assets/images/w1.png', order: 0 },
  ];

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prev(): void {
    const n = this.images.length;
    this.lightboxIndex.set((this.lightboxIndex() - 1 + n) % n);
  }

  next(): void {
    const n = this.images.length;
    this.lightboxIndex.set((this.lightboxIndex() + 1) % n);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-overlay')) {
      this.closeLightbox();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  getAlt(index: number): string {
    const imgOrder = this.images[index].order;
    return this.loc().galerie.alts[imgOrder] ?? '';
  }

  titleMain(title: string): string {
    const parts = title.split('. ');
    return parts.slice(0, -1).join('. ') + '. ';
  }

  titleLast(title: string): string {
    const parts = title.split('. ');
    return parts[parts.length - 1];
  }
}
