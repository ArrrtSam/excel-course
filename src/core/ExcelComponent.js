import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }
  // Настраиваем компонет до init
  prepare() {
  }

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомляем слушателей про события
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписываемся на событие
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }
  // Удаляем компонент и чистим слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}