type Handler = (...args: any[]) => any;

class EventEmitter {
  handler: Record<string, Handler>;

  constructor() {
    this.handler = {};
  }

  on(name: string, handler: Handler) {
    this.handler[name] = handler;
  }

  emit(name: string, obj: any) {
    return this.handler[name](obj);
  }
}

export const eventBus = new EventEmitter();
const EventPrefix = 'TodoList';
export const TodoEvent = {
  Toggle: `${EventPrefix}:TOGGLE`,
  Delete: `${EventPrefix}:DELETE`,
} as const;
