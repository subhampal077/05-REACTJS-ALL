import React from "react";

function ContextMenu({
  menuPosition,
  setMenuPosition,
  expenses,
  setExpenses,
  rowId,
  setFormData,
  setEditingRowId,
}) {
  // console.log(menuPosition);
  // console.log(expenses);

  if (!menuPosition.left) return;

  return (
    <>
      <div
        className="context-menu"
        style={{ left: `${menuPosition.left}px`, top: `${menuPosition.top}px` }}
      >
        <div
          onClick={() => {
            console.log("Editing");
            setMenuPosition({});
            const { title, category, amount } = expenses.find(
              (element) => element.id === rowId
            );

            setFormData({ title, category, amount });
            
            setEditingRowId(rowId);
          }}
        >
          Edit
        </div>
        <div
          onClick={() => {
            console.log("Deleting");
            setMenuPosition({});
            setExpenses((prevState) =>
              prevState.filter((element) => element.id !== rowId)
            );
          }}
        >
          Delete
        </div>
      </div>
    </>
  );
}

export default ContextMenu;
