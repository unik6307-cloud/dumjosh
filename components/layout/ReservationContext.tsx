"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReservationPreset {
  date?: string;
  guests?: number;
  occasion?: string;
  packageId?: string;
}

interface ReservationContextType {
  isOpen: boolean;
  preset: ReservationPreset | null;
  openModal: (preset?: ReservationPreset) => void;
  closeModal: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<ReservationPreset | null>(null);

  const openModal = (customPreset?: ReservationPreset) => {
    if (customPreset) {
      setPreset(customPreset);
    } else {
      setPreset(null);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreset(null);
  };

  return (
    <ReservationContext.Provider value={{ isOpen, preset, openModal, closeModal }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
