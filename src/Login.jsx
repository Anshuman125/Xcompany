import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

function Login() {
  return (
    <div>
        <div className="w-[100%] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex align-middle justify-center bg-zinc-900 rounded-3xl">
        <Card className="max-w-sm bg-zinc-800 border-2 w-[100%] rounded-3xl">
            <form className="flex flex-col gap-4">
                <div className='uppercase font-bold text-[3vw] text-white'>
                    Login
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" className='text-white' value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" className='text-white' value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
                </div>
                <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Forgot Password?</a>
                <div className="text-white text-sm font-semibold"><a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">New here?</a></div>
                <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className='text-white'>Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
        </div>
        
    </div>
  );
}

export default Login;
