import { Avatar } from "@/components/ui/avatar";
import React from "react";

export default function AvatarDemo() {
  return (
    <div className="space-x-2">
      <Avatar
        border="ring"
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Sonja Balmann"
      />
      <Avatar
        border="solid"
        src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Sonja Balmann"
      />
    </div>
  );
}
