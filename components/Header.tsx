"use client"
import React from 'react'
import { AlertCircle } from "lucide-react";
import { Modal } from "@/components/ui/modal";

const Header = () => {
  return (
    <header className="absolute top-0 right-0 z-20 flex justify-between items-center p-4 md:p-8">
      {(() => {
        const [open, setOpen] = React.useState(false);
        return <>
          {!open && (
            <button
              className="text-orange-500 w-8 h-8 md:w-10 md:h-10 hover:text-orange-600 transition-colors focus:outline-none"
              onClick={() => setOpen(true)}
            >
              <AlertCircle className="w-full h-full" />
            </button>
          )}
          <Modal
            open={open}
            onOpenChange={setOpen}
            title="Fighter Nutrition Coaching"
            description={
              "Unlock your full potential with expert nutrition coaching tailored for fighters. Our science-backed plans optimize performance, recovery, and weight management—so you can focus on victory in and out of the ring. Personalized, proven, and built for champions."
            }
          />
        </>;
      })()}
    </header>
  )
}

export default Header