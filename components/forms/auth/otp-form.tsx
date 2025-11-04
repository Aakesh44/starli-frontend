"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function OTPForm({ ...props }: React.ComponentProps<typeof Card>) {

  const [otp, setOtp] = useState("");
  const router = useRouter();

  const type = useSearchParams().get("type") as "signup" | "forgot-password" | null;

  const email = useSearchParams().get("email") as string | null;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if(type === "signup"){
      router.push("/user/profile");
    }

    if(type === "forgot-password"){
      router.push("/reset-password");
    }
  }

  useEffect(() => {

    if(!email || !type || (type !== "signup" && type !== "forgot-password")){
      router.push("/");
    }

  }, [type, email]);

  if(!email || !type || (type !== "signup" && type !== "forgot-password")) return null;

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Enter verification code</CardTitle>
        <CardDescription>We sent a 6-digit code to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerify}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp">Verification code</FieldLabel>
              <InputOTP 
                maxLength={6} 
                id="otp" 
                value={otp}
                onChange={(value) => setOtp(value)} 
                required
              >
                <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>
                Enter the 6-digit code sent to your email.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Button type="submit">Verify</Button>
              <FieldDescription className="text-center">
                Didn&apos;t receive the code? <a href="#">Resend</a>
              </FieldDescription>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
