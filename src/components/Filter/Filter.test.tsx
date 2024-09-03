import { Filter }  from '@components';
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Filter component", () => {
  it("description test", () => {
    render(<Filter />);
  });
});

