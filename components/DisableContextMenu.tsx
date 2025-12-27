"use client";
import React from "react";

export default function DisableContextMenu({ children }: { children: React.ReactNode }) {
  return (
    <div onContextMenu={e => e.preventDefault()} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
}
