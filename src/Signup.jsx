import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export function Component() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  
  const [isChecked, setIsChecked] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match.');
    } else if (!isChecked) {
      setErrorMessage('Please agree to the terms and conditions.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <div className="w-[100%] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex align-middle justify-center bg-zinc-900 rounded-3xl">
        <form className="flex max-w-xl flex-col gap-4 bg-zinc-800 border-2 w-[100%] p-[2vw] rounded-3xl" onSubmit={handleSubmit}>
          <div className='uppercase font-bold text-[3vw] text-white'>
            Signup
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" className="font-semibold text-white" value="Your Name" />
            </div>
            <TextInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNumber" className="font-semibold text-white" value="Your Phone Number" />
            </div>
            <TextInput id="phoneNumber" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" className="font-semibold text-white" value="Your email" />
            </div>
            <TextInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@gmail.com" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" className="font-semibold text-white" value="Your password" />
            </div>
            <TextInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" className="font-semibold text-white" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required shadow />
          </div>
          <div className="text-red-500 text-sm font-semibold">{errorMessage}</div>
          <div className="text-white text-sm font-semibold"><a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Already a member?</a></div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
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
