"use client";
import React, { createContext, useContext, useState } from "react";
import { sampleRows } from "@/lib/sampleData";

export type Row = Record<string, string | number | null>;

type Ctx = {
  rows: Row[];
  datasetName: string;
  setData: (rows: Row[], name: string) => void;
};

const DataCtx = createContext<Ctx | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [rows, setRows] = useState<Row[]>(sampleRows);
  const [datasetName, setName] = useState("US Macro Sample");

  return (
    <DataCtx.Provider
      value={{
        rows,
        datasetName,
        setData: (r, n) => {
          setRows(r);
          setName(n);
        }
      }}
    >
      {children}
    </DataCtx.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataCtx);
  if (!ctx) throw new Error("useData must be used inside DataProvider");
  return ctx;
}
