import { Newsletter } from "@components";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Newsletter component", () => {
  it("should be render correctly with texts and styles", () => {
    render(<Newsletter />);

    expect(
      screen.getByText("Stay upto date about our latest offers"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email address"),
    ).toBeInTheDocument();
    expect(screen.getByText("Subscribe to Newsletter")).toBeInTheDocument();

    expect(
      screen.getByText("Stay upto date about our latest offers"),
    ).toHaveClass("text-white");
    expect(screen.getByPlaceholderText("Enter your email address")).toHaveClass(
      "placeholder-gray-500",
    );

    expect(screen.getByText("Subscribe to Newsletter")).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("should allow the user to type a valid email and submit the form", () => {
    render(<Newsletter />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");

    fireEvent.click(submitButton);

    expect(emailInput.value).toBe("test@example.com");
  });
});
