export class Emitter {
  constructor() {
    this.listeners = {}
  }
  // Dispatch trigger fire
  // Уведомляем слушателей

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  // on listen
  // Подписываемся на уведомления
  // Добавляем слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()

// emitter.subscribe('art', data => console.log('Sub: ', data))

// emitter.emit('art', 42)
