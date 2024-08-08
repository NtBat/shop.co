import { Header } from "@components";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Header component", () => {
  it("should be render actions buttons", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const shoppingCartButton = screen.getByLabelText("Open shopping cart");
    expect(shoppingCartButton).toBeInTheDocument();

    const userAccountLink = screen.getByLabelText("Go to user account");
    expect(userAccountLink).toBeInTheDocument();
  });

  it("should be render search form", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText("Search for products...");
    expect(searchInput).toBeInTheDocument();
  });

  it("should be get input value", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for products...",
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "Test Product" } });

    expect(searchInput.value).toBe("Test Product");
  });
});
