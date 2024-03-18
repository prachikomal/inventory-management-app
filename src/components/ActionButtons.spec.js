import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { InventoryContext } from "../redux/Context";
import ActionButtons from "./ActionButtons"; // Update with the correct path

describe("ActionButtons", () => {
  it("renders correctly and responds to button clicks", () => {
    const onDelete = jest.fn();
    const onToggle = jest.fn();
    const onEdit = jest.fn();

    render(
      <InventoryContext.Provider value={{ view: "admin" }}>
        <ActionButtons
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          check={false}
        />
      </InventoryContext.Provider>
    );
    const editButton = screen.getByTestId("edit-button");
    const deleteButton = screen.getByTestId("delete-button");
    const toggleButton = screen.getByTestId("toggle-button");

    fireEvent.click(editButton);
    expect(onEdit).toHaveBeenCalled();

    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();

    fireEvent.click(toggleButton);
    expect(onToggle).toHaveBeenCalled();
  });
});
