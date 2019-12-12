
export const logUpdateStateEvent = (store : any): void => {
  console.info("Updated state: ", store.getState())
}