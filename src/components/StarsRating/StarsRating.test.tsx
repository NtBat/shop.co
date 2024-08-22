import { StarsRating } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("StarsRating Component", () => {
  it("should render correctly with a valid rating (4.5)", () => {
    const { container } = render(<StarsRating rating={4.5} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(stars).toHaveLength(4);
    expect(halfStars).toHaveLength(1);
    expect(screen.getByText("4.5/5")).toBeInTheDocument();
  });

  it("should render correctly with the maximum rating (5)", () => {
    const { container } = render(<StarsRating rating={5} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");

    expect(stars).toHaveLength(5);
    expect(screen.getByText("5/5")).toBeInTheDocument();
  });

  it("should not render anything with a rating of 0", () => {
    const { container } = render(<StarsRating rating={0} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(stars).toHaveLength(0);
    expect(halfStars).toHaveLength(0);
    expect(screen.queryByText("0/5")).not.toBeInTheDocument();
  });

  it("should round down the rating (4.9 to 4 full stars and 1 half star)", () => {
    const { container } = render(<StarsRating rating={4.9} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(stars).toHaveLength(4);
    expect(halfStars).toHaveLength(1);
    expect(screen.getByText("4.9/5")).toBeInTheDocument();
  });

  it("should handle a rating above the maximum (7 should render 5 full stars)", () => {
    const { container } = render(<StarsRating rating={7} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");

    expect(stars).toHaveLength(5);
    expect(screen.getByText("5/5")).toBeInTheDocument();
  });

  it("should not render anything with a rating below the minimum (-2)", () => {
    const { container } = render(<StarsRating rating={-2} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(stars).toHaveLength(0);
    expect(halfStars).toHaveLength(0);
    expect(screen.queryByText("0/5")).not.toBeInTheDocument();
  });

  it("should render a half star correctly with a .5 rating (e.g., 2.5)", () => {
    const { container } = render(<StarsRating rating={2.5} />);
    const stars = container.querySelectorAll(".lucide-star.text-yellow-400");
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(stars).toHaveLength(2);
    expect(halfStars).toHaveLength(1);
    expect(screen.getByText("2.5/5")).toBeInTheDocument();
  });

  it("should render 0.5 rating correctly as half star", () => {
    const { container } = render(<StarsRating rating={0.5} />);
    const halfStars = container.querySelectorAll(
      ".lucide-star-half.text-yellow-400",
    );

    expect(halfStars).toHaveLength(1);
    expect(screen.getByText("0.5/5")).toBeInTheDocument();
  });
});
