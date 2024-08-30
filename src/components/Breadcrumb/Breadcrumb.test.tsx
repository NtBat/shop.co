import { Breadcrumb } from "@components";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Breadcrumb component", () => {
  it("should render the Home link correctly", () => {
    const breadcrumbItems = [
      { name: "All", path: "/all" },
      { name: "Category", path: "/category", isCurrently: true },
    ];

    render(
      <MemoryRouter>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should render breadcrumb items correctly", () => {
    const breadcrumbItems = [
      { name: "Category", path: "/category" },
      { name: "Subcategory", path: "/category/subcategory" },
      {
        name: "Product",
        path: "/category/subcategory/product",
        isCurrently: true,
      },
    ];

    render(
      <MemoryRouter>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </MemoryRouter>,
    );

    const categoryLink = screen.getByText("Category");
    expect(categoryLink).toBeInTheDocument();
    expect(categoryLink).toHaveAttribute("href", "/category");

    const subcategoryLink = screen.getByText("Subcategory");
    expect(subcategoryLink).toBeInTheDocument();
    expect(subcategoryLink).toHaveAttribute("href", "/category/subcategory");

    const productText = screen.getByText("Product");
    expect(productText).toBeInTheDocument();
    expect(productText).not.toHaveAttribute("href");
    expect(productText).toHaveClass("text-gray-500");
  });
});
