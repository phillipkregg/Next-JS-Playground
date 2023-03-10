"use client";

import DndColumnsTable from "./dndTable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Page() {
  return (
    <div>
      <div>Basic TanStack Table</div>
      <DndProvider backend={HTML5Backend}>
        <DndColumnsTable />
      </DndProvider>
      ;
    </div>
  );
}
