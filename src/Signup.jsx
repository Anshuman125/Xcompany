
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Component() {
  return (
    <div>
        <h1 className="text-white font-bold text-8xl flex justify-center align-middle uppercase bg-zinc-800 p-4 mb-2">Signup</h1>
        <div className="w-[40%] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[40%] flex align-middle justify-center border-2 pt-[2%] bg-zinc-800 rounded-3xl">
        <form className="flex max-w-md flex-col gap-4 w-[100%] mb-[2vw]">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" className="font-semibold text-white" value="Your Name" />
        </div>
        <TextInput id="name" type="name" placeholder="John Smith" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber" className="font-semibold text-white" value="Your Phone Number" />
        </div>
        <TextInput id="phoneNumber" type="name" placeholder="" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" className="font-semibold text-white" value="Your email" />
        </div>
        <TextInput id="email" type="email" placeholder="name@gmail.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" className="font-semibold text-white" value="Your password" />
        </div>
        <TextInput id="password" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" className="font-semibold text-white" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="text-white text-sm font-semibold"><a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Already a member?</a></div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex text-white">
          I agree with the&nbsp;
          <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
    </div>
    </div>
    
  );
}
