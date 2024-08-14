import { Badge } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Badge component", () => {
  it("should be render correctly", () => {
    render(<Badge discountValue={20} />);
    const element = screen.getByText("-20%");
    expect(element).toBeInTheDocument();
  });

  it("should be render with the correct discount value", () => {
    render(<Badge discountValue={50} />);
    const element = screen.getByText("-50%");
    expect(element).toBeInTheDocument();
  });

  it("should be render with the correct class", () => {
    render(<Badge discountValue={80} />);
    const element = screen.getByText("-80%");
    expect(element).toHaveClass("bg-red-200");
  });
});
