import { Reviews } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Reviews Component", () => {
  it("renders the component correctly", () => {
    const items = [
      {
        id: "1",
        name: "John Doe",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      },
    ];
    render(<Reviews items={items} />);
    expect(screen.getAllByText("John Doe").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      ).length,
    ).toBeGreaterThan(0);
  });
});
