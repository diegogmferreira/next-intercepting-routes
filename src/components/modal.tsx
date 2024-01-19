'use client'

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Dialog onOpenChange={handleClose} open={true}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}

      <DialogContent className="sm:max-w-[425px]">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
          {children}
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}