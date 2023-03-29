import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";



describe("Register component", () => {
  // test 1
  it("general Form test", () => {
    render(<App />);
    const element = screen.getByRole("heading", {
      name: /based in chicago/i,
    });
    expect(element).toBeInTheDocument();
  });

  // test 2
  it("button test", async () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: /reserve a table/i,
    });

    await userEvent.click(buttonElement);
    const element = screen.getByRole("heading", {
      name: /provide details/i,
    });
    expect(element).toBeInTheDocument();
  });

  // test 3
  it("button test Reserve Table", async () => {
    render(<App />);

    const buttonSubmit = screen.getByRole("button", {
      name: /submit/i,
    });

    await userEvent.click(buttonSubmit);

    const provideElement = screen.getByRole("heading", {
      name: /provide details/i,
    });
    expect(provideElement).toBeInTheDocument();
  });

  //test 4
  test("Error message should be displayed when name is not provided", async () => {
    render(<App />);
    fireEvent.submit(screen.getByRole("button", { name: "Submit" }));
    const errorMessage = await screen.findByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
