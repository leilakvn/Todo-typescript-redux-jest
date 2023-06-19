import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface TabSelectorStates {
  activeTab: string;
}
const initialState: TabSelectorStates = {
  activeTab: "All",
} as TabSelectorStates;

const TabSelectorSlice = createSlice({
  name: "tabSelector",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const tabSelectorActions = TabSelectorSlice.actions;

export default TabSelectorSlice.reducer;
