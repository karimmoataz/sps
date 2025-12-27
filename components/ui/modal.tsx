"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@radix-ui/react-dialog";

export function Modal({ trigger, title, description, open, onOpenChange }: {
  trigger?: React.ReactNode,
  title: string,
  description: string,
  open?: boolean,
  onOpenChange?: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="bg-linear-to-br from-zinc-900 to-black border border-orange-500/30 rounded-2xl p-6 md:p-10 max-w-lg w-full shadow-2xl shadow-orange-600/20">
        <DialogTitle asChild>
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">{title}</div>
        </DialogTitle>
        <div className="text-gray-300 text-base md:text-lg leading-relaxed">
          {description}
        </div>
      </DialogContent>
    </Dialog>
  );
}
