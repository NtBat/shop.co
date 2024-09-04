import { Header } from "@components";
import { QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { getQueryClient } from "@utils";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Header component", () => {
  it("should be render actions buttons", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const shoppingCartButton = screen.getByLabelText("Open shopping cart");
    expect(shoppingCartButton).toBeInTheDocument();

    const userAccountLink = screen.getByLabelText("Go to user account");
    expect(userAccountLink).toBeInTheDocument();
  });

  it("should be render search form", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const searchInput = screen.getByPlaceholderText("Search for products...");
    expect(searchInput).toBeInTheDocument();
  });

  it("should be get input value", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for products...",
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "Test Product" } });

    expect(searchInput.value).toBe("Test Product");
  });

  it("should toggle menu when button is clicked", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const menuButton = screen.getByRole("button", { name: /menu/i });
    const menu = screen.getByTestId("menu");

    expect(menu).toHaveClass("-translate-x-full");

    fireEvent.click(menuButton);
    expect(menu).toHaveClass("-translate-x-0");

    fireEvent.click(menuButton);
    expect(menu).toHaveClass("-translate-x-full");
  });
});
