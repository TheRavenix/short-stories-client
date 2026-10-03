"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/Form";

export function NewsletterSubForm() {
  return (
    <Form>
      <Input type='email' label='Email' required />
      <Button size='responsive'>Subscribe</Button>
    </Form>
  )
}
