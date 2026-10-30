import * as hmUI from '@zos/ui'
import { getDeviceInfo } from '@zos/device'
import { CATALOG, formatSize } from '../data/catalog'

const { width } = getDeviceInfo()

Page({
  onInit(param) {
    this.index = JSON.parse(param).index
  },
  build() {
    const e = CATALOG[this.index]

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0, y: 15, w: width, h: 40, text: e.name,
      text_size: 28, color: 0xffffff, align_h: hmUI.align.CENTER_H,
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0, y: 55, w: width, h: 35, text: 'Peso: ' + formatSize(e.sizeKB),
      text_size: 22, color: 0x9e9e9e, align_h: hmUI.align.CENTER_H,
    })
    // QR para instalar: escanéalo con el móvil y ábrelo en la app Zepp
    const qr = Math.min(width - 120, 260)
    hmUI.createWidget(hmUI.widget.QRCODE, {
      content: e.url,
      x: (width - qr) / 2, y: 100, w: qr, h: qr,
      bg_x: (width - qr) / 2 - 8, bg_y: 92, bg_w: qr + 16, bg_h: qr + 16,
    })
  },
})
