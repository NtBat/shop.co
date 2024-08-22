import { ProductItem } from "@components";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("ProductItem component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <ProductItem
          link="/t-shirt"
          price={240}
          priceBefore={290}
          discountValue={20}
          title="T-shirt with details"
          imageUrl="https://example.com/t-shirt.jpg"
          rating={2.2}
        />
        ,
      </MemoryRouter>,
    );

    expect(screen.getByText("T-shirt with details")).toBeInTheDocument();
    expect(screen.getByText("$240")).toBeInTheDocument();
    expect(screen.getByText("$290")).toBeInTheDocument();
    expect(screen.getByText("-20%")).toBeInTheDocument();
    expect(screen.getByText("2.2/5")).toBeInTheDocument();

    const imgElement = screen.getByAltText("T-shirt with details");
    expect(imgElement).toHaveAttribute(
      "src",
      "https://example.com/t-shirt.jpg",
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/t-shirt");
  });

  it("should render correctly without a discount", () => {
    render(
      <MemoryRouter>
        <ProductItem
          link="/t-shirt"
          price={240}
          title="T-shirt without discount"
          imageUrl="https://example.com/t-shirt.jpg"
          rating={2.2}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("T-shirt without discount")).toBeInTheDocument();
    expect(screen.getByText("$240")).toBeInTheDocument();
    expect(screen.queryByText("$290")).toBeNull();
    expect(screen.queryByText("-20%")).toBeNull();
  });
});
