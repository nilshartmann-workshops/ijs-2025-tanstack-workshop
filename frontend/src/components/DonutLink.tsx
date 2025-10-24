import * as React from "react";
import { createLink } from "@tanstack/react-router";

type DonutLinkProps = {
  variant: "lg" | "sm";
};

function DonutLinkComponent({ variant, ...rest }: DonutLinkProps) {
  console.log("STYLE", variant);
  return (
    <a {...rest} className={variant === "lg" ? "text-4xl" : "text-base"} />
  );
}

export const DonutLink = createLink(DonutLinkComponent);
