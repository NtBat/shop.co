import { Home } from "@pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

const getQueryClient = () => new QueryClient();

vi.mock("@assets/full-banner-mobile.jpg", () => ({
  default: "full-banner-mobile.jpg",
}));
vi.mock("@assets/full-banner.jpg", () => ({ default: "full-banner.jpg" }));
vi.mock("@assets/brand-versace.svg", () => ({ default: "brand-versace.svg" }));

vi.mock("@hooks", () => ({
  useProducts: () => ({
    data: [
      {
        id: "1",
        title: "Mocked Product",
        price: 100,
        priceBefore: 150,
        discountValue: 50,
        imageUrl: "mocked-product.jpg",
        rating: 4.5,
        link: "/mocked-product",
      },
    ],
    isLoading: false,
    isError: false,
  }),
  useReviews: () => ({
    data: [
      {
        id: "1",
        name: "John Doe",
        text: "Great product!",
        rating: 5,
      },
    ],
    isLoading: false,
    isError: false,
  }),
  useBrands: () => ({
    data: [
      {
        id: "1",
        title: "Versace Logo",
        imageUrl: "brand-versace.svg",
        link: "/versace",
      },
    ],
    isLoading: false,
    isError: false,
  }),
  useMainBanner: () => ({
    data: [
      {
        imageUrl: "full-banner.jpg",
        imageUrlMobile: "full-banner-mobile.jpg",
        title:
          "Two models, a man and a woman, dressed in stylish black and white casual outfits",
      },
    ],
    isLoading: false,
    isError: false,
  }),
  useCategoriesBanner: () => ({
    data: [
      {
        id: "1",
        title: "Casual Style",
        imageUrl: "casual-style.jpg",
      },
    ],
    isLoading: false,
    isError: false,
  }),
}));

describe("Home component", () => {
  it("should render image and link from banner", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const linkElement = screen.getByRole("link", {
      name: /Two models, a man and a woman, dressed in stylish black and white casual outfits/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");

    const imgElement = screen.getByAltText(
      /Two models, a man and a woman, dressed in stylish black and white casual outfits/i,
    );
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "full-banner.jpg");

    const sourceElement = screen.getByTestId("picture-source");
    expect(sourceElement).toHaveAttribute("srcset", "full-banner-mobile.jpg");
    expect(sourceElement).toHaveAttribute("media", "(max-width: 767px)");
  });

  it("should render images and links from brands", () => {
    render(
      <QueryClientProvider client={getQueryClient()}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const logoElement = screen.getByRole("link", {
      name: /Versace Logo/i,
    });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("href", "/versace");

    const imgElement = screen.getByAltText(/Versace Logo/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "brand-versace.svg");
  });
});
