import { Navbar } from "@components";
import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { getQueryClient } from "@utils";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

vi.mock("@hooks/useMenu", () => ({
  useMenu: vi.fn(() => ({
    data: [
      {
        id: "1",
        title: "Shop",
        link: "/all",
      },
      {
        id: "2",
        title: "On Sale",
        link: "/sale",
      },
      {
        id: "3",
        title: "New Arrivals",
        link: "/new",
      },
      {
        id: "4",
        title: "Brands",
        link: "/brands",
      },
    ],
    isLoading: false,
    isError: false,
  })),
}));

describe("Navbar component", () => {
  it("should render all navigation links correctly", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const shopLink = screen.getByText("Shop");
    const saleLink = screen.getByText("On Sale");
    const newArrivalsLink = screen.getByText("New Arrivals");
    const brandsLink = screen.getByText("Brands");

    expect(shopLink).toBeInTheDocument();
    expect(saleLink).toBeInTheDocument();
    expect(newArrivalsLink).toBeInTheDocument();
    expect(brandsLink).toBeInTheDocument();

    expect(shopLink).toHaveAttribute("href", "/all");
    expect(saleLink).toHaveAttribute("href", "/sale");
    expect(newArrivalsLink).toHaveAttribute("href", "/new");
    expect(brandsLink).toHaveAttribute("href", "/brands");
  });
});
