import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type State = {
  messages: string[]
};

const initialState: State = {
  messages: []
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },

    clear: (state) => {
      state.messages = [];
    },
  },
});

export const selectMessage = (state: RootState) => state.message.messages;

export const messageAction = messageSlice.actions;

export default messageSlice.reducer;
