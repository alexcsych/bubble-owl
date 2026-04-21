"use client";

import { useRouter } from "@/i18n/navigation";
import { User } from "lucide-react";
import { Button } from "./ui/button";

export default function LogInBtn () {
  const router = useRouter();

  return (
    <Button variant='outline' onClick={() => router.push("/login")}>
      <User className='h-4 w-4' />
      Sign in
    </Button>
  );
}
