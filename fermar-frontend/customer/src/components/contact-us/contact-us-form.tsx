"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactUsForm() {
  return (
    <section className="px-5 mb-10 lg:mb-0">
      <div className="">
        <form>
          {/* Name */}
          <div className="mb-3">
            <Label className="text-base mb-2">Name</Label>
            <Input
              type="text"
              className="border border-primary"
              placeholder="Enter your name"
            />
            <p className="text-sm text-destructive mt-2">message</p>
          </div>

          {/* Email */}
          <div className="mb-3">
            <Label className="text-base mb-2">Email</Label>
            <Input
              type="text"
              className="border border-primary"
              placeholder="Enter your email"
            />
            <p className="text-sm text-destructive mt-2">message</p>
          </div>

          {/* Message */}
          <div>
            <Label className="text-base mb-2">Message</Label>
            <Textarea
              className="border border-primary h-[150px] resize-none"
              placeholder="Go ahead we are, we are listening..."
            />
            <p className="text-sm text-destructive mt-2 ">message</p>
          </div>

          <Button className="w-full mt-5">Submit</Button>
        </form>
      </div>
    </section>
  );
}
