import React, { useState } from "react";
import {  useAppDispatch } from "../hooks"; //for typescript
import { tabSelectorActions } from "../redux/slices/TabSelectorSlice";

interface TabsProps {
  currentTab: string;
}

const Tabs: React.FC<TabsProps> = ({ currentTab }) => {
  const TABSVAL = ["All", "Active", "Done"];
  const [tab,setTab]=useState<string>("")
  const dispatch=useAppDispatch();
  
  return (
    <div>
      {TABSVAL.map((tab,index) => (
        <button key={index}
          className={tab === currentTab ? "tabButton selected" : "tabButton"}
          onClick={()=>dispatch(tabSelectorActions.setActiveTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
