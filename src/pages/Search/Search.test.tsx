import { Search } from "@pages";
import { QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { getQueryClient } from "@utils";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@hooks/useSearchProducts", () => ({
  useSearchProducts: vi.fn(() => ({
    data: [
      {
        id: "1",
        title: "T-shirt with details",
        price: 240,
        priceBefore: 290,
        discountValue: 20,
        imageUrl: "http://localhost:3000/public/images/product1.jpg",
        rating: 4.5,
        link: "/t-shirt",
        size: ["small", "medium", "large"],
        color: ["black"],
        category: "T-shirts",
      },
      {
        id: "2",
        title: "Gradient Graphic T-shirt",
        price: 145,
        imageUrl: "http://localhost:3000/public/images/product2.jpg",
        rating: 3,
        link: "/t-shirt",
        size: ["medium", "large"],
        color: ["green"],
        category: "T-shirts",
      },
      {
        id: "3",
        title: "Black Striped T-shirt",
        price: 120,
        priceBefore: 160,
        discountValue: 30,
        imageUrl: "http://localhost:3000/public/images/product3.jpg",
        rating: 5,
        link: "/t-shirt",
        size: ["large"],
        color: ["orange"],
        category: "T-shirts",
      },
    ],
    isLoading: false,
    isError: false,
  })),
}));

vi.mock("@hooks/useProductFilters", () => ({
  useProductFilters: () => ({
    data: {
      colors: ["black", "green", "orange"],
      sizes: ["small", "medium", "large"],
    },
  }),
}));

describe("Search page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the search page correctly", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByText("Search Results")).toBeInTheDocument();
    expect(screen.getByText("Showing 0 of 0 Products")).toBeInTheDocument();
  });

  it("should filter products by color and size", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const blackCheckbox = screen.getByLabelText("black");
    const smallCheckbox = screen.getByLabelText("Small");

    fireEvent.click(blackCheckbox);
    fireEvent.click(smallCheckbox);

    const applyButton = screen.getByText("Apply Filter");
    fireEvent.click(applyButton);

    expect(
      screen.queryByText("Gradient Graphic T-shirt"),
    ).not.toBeInTheDocument();
  });

  it("should display 'No results found' when no products match the filter", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const smallCheckbox = screen.getByLabelText("Small");
    const greenCheckbox = screen.getByLabelText("green");

    fireEvent.click(greenCheckbox);
    fireEvent.click(smallCheckbox);

    const applyButton = screen.getByText("Apply Filter");
    fireEvent.click(applyButton);

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("should show no products when filters don't match any product", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const orangeCheckbox = screen.getByLabelText("orange");
    const smallCheckbox = screen.getByLabelText("Small");

    fireEvent.click(orangeCheckbox);
    fireEvent.click(smallCheckbox);

    const applyButton = screen.getByText("Apply Filter");
    fireEvent.click(applyButton);

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
