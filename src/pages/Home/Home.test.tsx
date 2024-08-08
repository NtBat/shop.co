import { Home } from "@pages";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock das imagens para evitar problemas de importação durante o teste
vi.mock("@assets/full-banner-mobile.jpg", () => ({
  default: "full-banner-mobile.jpg",
}));
vi.mock("@assets/full-banner.jpg", () => ({ default: "full-banner.jpg" }));
vi.mock("@assets/brand-versace.svg", () => ({ default: "brand-versace.svg" }));

describe("Home component", () => {
  it("should be render image and link from banner", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
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

  it("should be render images and links from brands", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
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
