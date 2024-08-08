import { Home } from "@pages";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock das imagens para evitar problemas de importação durante o teste
vi.mock("@assets/full-banner-mobile.jpg", () => ({
  default: "full-banner-mobile.jpg",
}));
vi.mock("@assets/full-banner.jpg", () => ({ default: "full-banner.jpg" }));

describe("Home component", () => {
  it("deve renderizar corretamente com a imagem e link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Verifica se o link foi renderizado corretamente
    const linkElement = screen.getByRole("link", {
      name: /Two models, a man and a woman, dressed in stylish black and white casual outfits/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");

    // Verifica se a imagem desktop é renderizada
    const imgElement = screen.getByAltText(
      /Two models, a man and a woman, dressed in stylish black and white casual outfits/i,
    );
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "full-banner.jpg");

    // Verifica se o elemento `picture` contém o elemento `source` correto
    const sourceElement = screen.getByTestId("picture-source");
    expect(sourceElement).toHaveAttribute("srcset", "full-banner-mobile.jpg");
    expect(sourceElement).toHaveAttribute("media", "(max-width: 767px)");
  });
});
