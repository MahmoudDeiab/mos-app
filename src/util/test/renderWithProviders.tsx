import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "../../components/AppProviders/AppProviders";
import { MemoryRouter } from "react-router";

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  const rendered = render(
    <AppProviders>
      <MemoryRouter>{ui}</MemoryRouter>
    </AppProviders>,
    options
  );
  return {
    ...rendered,
    rerender: (ui: React.ReactElement) =>
      renderWithProviders(ui, { container: rendered.container }),
  };
};
