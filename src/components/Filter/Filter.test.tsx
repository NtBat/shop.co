import { Filter } from "@components";
import { QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { getQueryClient } from "@utils";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@utils/getColorClass", () => ({
  getColorClass: (color: string) => `bg-${color}`,
}));

describe("Filter component", () => {
  beforeEach(() => {
    vi.mock("@hooks/useProductFilters", () => ({
      useProductFilters: vi.fn(() => ({
        data: {
          colors: ["black", "orange", "green"],
          sizes: ["small", "medium", "large"],
        },
        isLoading: false,
        isError: false,
        error: null,
        isSuccess: true,
        refetch: vi.fn(),
      })),
    }));
  });

  it("should render and allow filtering by color and size", () => {
    const handleFilterChange = vi.fn();

    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Filter onFilterChange={handleFilterChange} />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const colorButton = screen.getByText("Colors");
    expect(colorButton).toBeInTheDocument();

    const sizeButton = screen.getByText("Size");
    expect(sizeButton).toBeInTheDocument();

    const blackCheckbox = screen.getByLabelText("black");
    expect(blackCheckbox).toBeInTheDocument();

    const smallCheckbox = screen.getByLabelText("Small");
    expect(smallCheckbox).toBeInTheDocument();

    fireEvent.click(blackCheckbox);
    fireEvent.click(smallCheckbox);

    const applyButton = screen.getByText("Apply Filter");
    fireEvent.click(applyButton);

    expect(handleFilterChange).toHaveBeenCalledWith({
      colors: ["black"],
      sizes: ["small"],
    });
  });

  it("should toggle visibility of color and size sections", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Filter onFilterChange={vi.fn()} />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const colorChevron = screen.getByTestId("color-chevron");
    const colorSection = screen.getByTestId("color-section");
    const sizeChevron = screen.getByTestId("size-chevron");
    const sizeSection = screen.getByTestId("size-section");

    expect(colorChevron).not.toHaveClass("rotate-180");
    expect(colorSection).toHaveClass("flex");

    expect(sizeChevron).not.toHaveClass("rotate-180");
    expect(sizeSection).toHaveClass("flex");

    const colorButton = screen.getByTestId("toggle-color");
    fireEvent.click(colorButton);

    expect(colorChevron).toHaveClass("rotate-180");
    expect(colorSection).toHaveClass("hidden");

    const sizeButton = screen.getByTestId("toggle-size");
    fireEvent.click(sizeButton);

    expect(sizeChevron).toHaveClass("rotate-180");
    expect(sizeSection).toHaveClass("hidden");
  });
  it("should add and remove filters correctly", () => {
    const handleFilterChange = vi.fn();

    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Filter onFilterChange={handleFilterChange} />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const blackCheckbox = screen.getByLabelText("black");
    const smallCheckbox = screen.getByLabelText("Small");

    fireEvent.click(blackCheckbox);
    fireEvent.click(smallCheckbox);

    const applyButton = screen.getByText("Apply Filter");
    fireEvent.click(applyButton);

    expect(handleFilterChange).toHaveBeenCalledWith({
      colors: ["black"],
      sizes: ["small"],
    });

    fireEvent.click(blackCheckbox);
    fireEvent.click(smallCheckbox);

    fireEvent.click(applyButton);

    expect(handleFilterChange).toHaveBeenCalledWith({
      colors: [],
      sizes: [],
    });
  });
});
