import { Button } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Button component", () => {
  it("should render the button correctly", () => {
    render(<Button>Teste</Button>);
    const buttonElement = screen.getByText("Teste");
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply the correct class for the "primary" variant', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toHaveClass("bg-black");
  });

  it('should apply the correct class for the "second" variant', () => {
    render(<Button color="secondary">Second Button</Button>);
    const buttonElement = screen.getByText("Second Button");
    expect(buttonElement).toHaveClass("bg-white");
  });

  it('should apply the correct class for the "third" variant', () => {
    render(<Button color="tertiary">Third Button</Button>);
    const buttonElement = screen.getByText("Third Button");
    expect(buttonElement).toHaveClass("bg-gray-200");
  });

  it('should apply the correct class for the "outline" variant', () => {
    render(<Button color="outline">Outline Button</Button>);
    const buttonElement = screen.getByText("Outline Button");
    expect(buttonElement).toHaveClass("border-gray-200");
  });

  it('should apply the correct class for the "sm" variant', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toHaveClass("h-12");
  });

  it('should apply the correct class for the "md" variant', () => {
    render(<Button size="md">Primary Button</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toHaveClass("h-14");
  });

  it('should apply the correct class for the "lg" variant', () => {
    render(<Button size="lg">Primary Button</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).toHaveClass("h-16");
  });

  it("should not render the icon when icon prop is not provided", () => {
    render(<Button>No Icon Button</Button>);
    const buttonElement = screen.getByText("No Icon Button");
    expect(buttonElement.querySelector("svg")).toBeNull();
  });

  it("should render the icon when icon prop is provided", () => {
    render(<Button icon={<svg data-testid="icon"></svg>}>With Icon</Button>);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should have the correct aria-label when provided", () => {
    render(<Button aria-label="Custom Label">Accessible Button</Button>);
    const buttonElement = screen.getByLabelText("Custom Label");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByText("Clickable Button");
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should propagate HTML attributes correctly", () => {
    render(
      <Button type="submit" title="Submit Button">
        Submit
      </Button>,
    );
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveAttribute("title", "Submit Button");
  });
});
