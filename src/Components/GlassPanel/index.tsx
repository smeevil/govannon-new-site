import React, { FC } from "react";

export interface IGlassPanelProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  equalHeight?: boolean;
  gapped?: boolean;
}

export const GlassPanel: FC<IGlassPanelProps> = ({
  title,
  subtitle,
  children,
  equalHeight,
  gapped,
}) => (
  <div style={{ padding: gapped ? "0.5rem" : "0" }}>
    <div
      className={`glassPanel panelBottomSpacing ${
        equalHeight ? "equalHeight" : ""
      }`}
    >
      {title && <h1>{title}</h1>}
      {subtitle && <h3>{subtitle}</h3>}

      <p>{children}</p>
    </div>
  </div>
);
