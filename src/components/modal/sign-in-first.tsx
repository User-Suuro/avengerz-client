"use client";

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shadcn/ui/button";
import { Modal } from "./modal";

interface SignInFirstModalProps {
  children: ReactNode;
}

export function SignInFirstModal({ children }: SignInFirstModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const goToSignIn = () => {
    setIsOpen(false);
    router.push("/sign-in");
  };

  return (
    <div className="inline-block">
      <Modal
        trigger={
          <span onClick={() => setIsOpen(true)} className="cursor-pointer">
            {children}
          </span>
        }
        title="Please login first to continue"
        open={isOpen}
        onOpenChange={setIsOpen}
        footer={
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={goToSignIn}>Log in</Button>
          </div>
        }
      />
    </div>
  );
}
