import React from "react";

export function PageTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">{title}</h2>
  );
}
