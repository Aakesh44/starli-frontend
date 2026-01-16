"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
import sampleImg from "../../public/images/sample2.jpg"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export function ProfileImageAvatar({
  src,
  alt,
  fallback,
  className,
  ...props

}: {
  src: string,
  alt: string,
  fallback?: string
} & React.ComponentProps<typeof AvatarPrimitive.Root>
) {

  return (

    <Avatar className={cn("size-7 shrink-0 rounded-full border border-border/60 overflow-hiddensm", className)} {...props}>
      <AvatarImage
        src={src || sampleImg?.src || ''}
        alt={alt || 'profile'}
        className="size-full object-cover"

      />
      <AvatarFallback className="rounded-full">
        <div className="size-full rounded-full grid place-items-center font-poppins text-xl font-semibold border border-input">
          {
            fallback ? fallback : alt
          }
        </div>
      </AvatarFallback>
    </Avatar>
  )

}

export { Avatar, AvatarImage, AvatarFallback }
