"use client";

import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { Button } from "@/components/shadcn/ui/button";

interface ModalProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
};

export function Modal({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  onOpenChange,
  size = "md",
  showCloseButton = true,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={sizeClasses[size]}
        showCloseButton={showCloseButton}
      >
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="py-4">{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}

// Convenience component for confirmation modals
interface ConfirmModalProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ConfirmModal({
  trigger,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  open,
  onOpenChange,
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange?.(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  return (
    <Modal
      trigger={trigger}
      title={title}
      description={description}
      open={open}
      onOpenChange={onOpenChange}
      footer={
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCancel}>
            {cancelText}
          </Button>
          <Button
            variant={variant === "destructive" ? "destructive" : "default"}
            onClick={handleConfirm}
          >
            {confirmText}
          </Button>
        </div>
      }
    >
      <p className="text-sm text-muted-foreground">
        This action cannot be undone.
      </p>
    </Modal>
  );
}
