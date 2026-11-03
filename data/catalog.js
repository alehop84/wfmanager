// Edita este catálogo: una entrada por esfera.
// img: archivo dentro de assets/ (miniatura PNG, p. ej. 120x120)
// sizeKB: peso de la esfera; url: enlace de instalación (se muestra como QR)
export const CATALOG = [
  { id: 1, name: 'Esfera Minimal', img: 'thumb_1.png', sizeKB: 820, url: 'https://example.com/esfera-minimal' },
  { id: 2, name: 'Esfera Deportiva', img: 'thumb_2.png', sizeKB: 1540, url: 'https://example.com/esfera-deportiva' },
  { id: 3, name: 'Esfera Retro', img: 'thumb_3.png', sizeKB: 2310, url: 'https://example.com/esfera-retro' },
]

export function formatSize(kb) {
  return kb >= 1024 ? (kb / 1024).toFixed(1) + ' MB' : kb + ' KB'
}
