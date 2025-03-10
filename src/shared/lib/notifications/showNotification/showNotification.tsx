"use client";

import { toast } from "react-hot-toast";

import { IconType } from "@/assets/Icon";
import { ShowNotificationProps } from "@/shared/lib/showNotification/showNotification.props";
import { Toast } from "@/shared/ui/Toast/Toast";

// eslint-disable-next-line react-refresh/only-export-components
export function showNotification(props: ShowNotificationProps) {
  const { type, text, duration = 6000 } = props;

  const icon: IconType = type === "success" ? "CheckCircleIcon" : "InfoIcon";
  const color = type === "success" ? "green" : "red";

  const element = <Toast color={color} text={text} icon={icon} />;

  toast.custom(element, {
    duration,
  });
}
