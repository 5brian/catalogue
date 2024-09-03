import React from "react";

interface ModuleProps {
  children: React.ReactNode;
}

const Module: React.FC<ModuleProps> = ({ children }) => (
  <div className="module">{children}</div>
);

export default Module;
