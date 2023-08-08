import React, { useEffect, useState } from "react";

import { SortableList } from "./components";
import { createRange } from "./utilities";
import "./styles.css";
import { useLocalStorage } from "usehooks-ts";
function getMockItems() {
  return createRange(50, (index) => ({ id: index + 1 }));
}

export default function App() {
  const [items, setItems] = useLocalStorage("workspace", getMockItems);
  const [showDnd, setShowDnd] = useState(false);
  useEffect(() => {
    setShowDnd(true);
  }, []);
  return (
    <>
      {showDnd && (
        <div style={{ maxWidth: 400, margin: "30px auto" }}>
          <SortableList
            items={items}
            onChange={setItems}
            renderItem={(item) => (
              <SortableList.Item id={item.id}>
                {item.id}
                <SortableList.DragHandle />
              </SortableList.Item>
            )}
          />
        </div>
      )}
    </>
  );
}
