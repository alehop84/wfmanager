import * as hmUI from '@zos/ui'
import { push } from '@zos/router'
import { getDeviceInfo } from '@zos/device'
import { CATALOG, formatSize } from '../data/catalog'

const { width, height } = getDeviceInfo()

Page({
  build() {
    const total = CATALOG.reduce((s, e) => s + e.sizeKB, 0)

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0, y: 10, w: width, h: 50,
      text: CATALOG.length + ' esferas · ' + formatSize(total),
      text_size: 24, color: 0xffffff,
      align_h: hmUI.align.CENTER_H,
    })

    const data = CATALOG.map((e) => ({ name: e.name, size: formatSize(e.sizeKB), img: e.img }))

    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      x: 0, y: 60, w: width, h: height - 60,
      item_space: 10,
      item_config: [{
        type_id: 1,
        item_bg_color: 0x222222,
        item_bg_radius: 16,
        item_height: 100,
        text_view: [
          { x: 110, y: 15, w: width - 130, h: 35, key: 'name', color: 0xffffff, text_size: 24 },
          { x: 110, y: 55, w: width - 130, h: 30, key: 'size', color: 0x9e9e9e, text_size: 20 },
        ],
        text_view_count: 2,
        image_view: [{ x: 10, y: 10, w: 80, h: 80, key: 'img', auto_scale: true }],
        image_view_count: 1,
      }],
      item_config_count: 1,
      data_array: data,
      data_count: data.length,
      data_type_config: [{ start: 0, end: data.length - 1, type_id: 1 }],
      data_type_config_count: 1,
      item_click_func: (_list, index) => {
        push({ url: 'page/detail', params: JSON.stringify({ index }) })
      },
    })
  },
})
