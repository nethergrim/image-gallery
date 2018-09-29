// @flow
export type ActionWithPayload = {
  type: string,
  payload: Object,
}

export type ActionWithoutPayload = {
  type: string,
}