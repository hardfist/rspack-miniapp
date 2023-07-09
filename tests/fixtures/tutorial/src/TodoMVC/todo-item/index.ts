import { eventBus, TodoEvent } from '../utils/event-bus';

Component({
  properties: {
    todo: {
      type: Object,
      value: {},
    },
  },
  data: {},
  methods: {
    onClick() {
      eventBus.emit(TodoEvent.Toggle, this.properties.todo);
    },
    onDelete() {
      eventBus.emit(TodoEvent.Delete, this.properties.todo);
    },
  },
});
