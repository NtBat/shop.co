import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/Teste/i);
    expect(headline).toBeInTheDocument();
  });
});
