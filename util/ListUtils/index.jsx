"use client";

export const ActionList = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export function listReducer(state = [], action = { type: "", item: any }) {
  switch (action.type) {
    case ActionList.ADD_ITEM:
      return [...state, action.item];
    case ActionList.REMOVE_ITEM:
      return state.filter((i) => i !== action.item);
    default:
      return state;
  }
}
