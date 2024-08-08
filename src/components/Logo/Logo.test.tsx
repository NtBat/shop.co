import { Logo } from "@components";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Logo component", () => {
  it("renders correctly and contains the correct link", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>,
    );

    const linkElement = getByRole("link", { name: /Store logo/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("applies the correct color class", () => {
    const { container } = render(
      <BrowserRouter>
        <Logo color="fill-red" />
      </BrowserRouter>,
    );

    const svgElement = container.querySelector("svg");
    const pathElement = svgElement?.querySelector("path");
    expect(pathElement).toHaveClass("fill-red");
  });
});
