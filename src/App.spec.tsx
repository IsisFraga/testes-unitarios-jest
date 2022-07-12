import { findByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Eduardo")).toBeInTheDocument();
    expect(getByText("João")).toBeInTheDocument();
    expect(getByText("Emerson")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, findByText, getByPlaceholderText, debug } = render(
      <App />
    );
    const addButton = getByText("Adicionar");

    const inputElement = getByPlaceholderText("novo item");
    await userEvent.type(inputElement, "Novo");

    userEvent.click(addButton);
    const newItem = await findByText("Novo");
    expect(newItem).toBeInTheDocument();
    await debug();
  });
});
