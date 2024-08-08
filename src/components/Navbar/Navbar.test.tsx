import { Navbar } from "@components";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Navbar component", () => {
  it("should render all navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const shopLink = screen.getByText("Shop");
    const saleLink = screen.getByText("On Sale");
    const newArrivalsLink = screen.getByText("New Arrivals");
    const brandsLink = screen.getByText("Brands");

    expect(shopLink).toBeInTheDocument();
    expect(saleLink).toBeInTheDocument();
    expect(newArrivalsLink).toBeInTheDocument();
    expect(brandsLink).toBeInTheDocument();

    expect(shopLink).toHaveAttribute("href", "/shop");
    expect(saleLink).toHaveAttribute("href", "/sale");
    expect(newArrivalsLink).toHaveAttribute("href", "/new");
    expect(brandsLink).toHaveAttribute("href", "/brands");
  });
});
