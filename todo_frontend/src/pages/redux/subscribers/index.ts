import { logUpdateStateEvent } from './log'

const subscribe = (store: any): any[] => [
  store.subscribe(() => logUpdateStateEvent(store)),
]

export default subscribe