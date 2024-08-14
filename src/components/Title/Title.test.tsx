import { Title } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Title component", () => {
  it("should render the title correctly", () => {
    render(<Title text="Test Title" />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  it('should apply the correct class for the "primary" variant', () => {
    render(<Title text="Primary Title" color="primary" />);
    const titleElement = screen.getByText("Primary Title");
    expect(titleElement).toHaveClass("text-black");
    expect(titleElement.tagName).toBe("H2");
  });

  it('should apply the correct class for the "secondary" variant', () => {
    render(<Title text="Secondary Title" color="secondary" />);
    const titleElement = screen.getByText("Secondary Title");
    expect(titleElement).toHaveClass("text-white");
    expect(titleElement.tagName).toBe("H2");
  });

  it('should render the title as an h1 element when the "as" prop is "h1"', () => {
    render(<Title text="H1 Title" as="h1" />);
    const titleElement = screen.getByText("H1 Title");
    expect(titleElement.tagName).toBe("H1");
  });

  it('should render the title as an h3 element when the "as" prop is "h3"', () => {
    render(<Title text="H3 Title" as="h3" />);
    const titleElement = screen.getByText("H3 Title");
    expect(titleElement.tagName).toBe("H3");
  });
});
