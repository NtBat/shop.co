import { Layout } from "@components";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

vi.mock("@components/Header", () => ({
  Header: () => <div>Mocked Header</div>,
}));

describe("Layout component", () => {
  it("should render Header and Outlet correctly", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
  });
});
