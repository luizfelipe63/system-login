import ilustacao from '../assets/illustration.png'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function CreateUser() {
  return (
    <div className="flex justify-between">
      <div className="w-full px-9">
        <div className="pt-8 pb-12 flex flex-col gap-3">
          <h1 className="text-center text-4xl text-zinc-800">
            Create an account
          </h1>
          <p className="text-center text-zinc-600">
            Authentication is the process of verifying a user's identity to
            grant access to a system or resource.
          </p>
        </div>
        <form action="" className="flex flex-col justify-center gap-4 pb-8">
          <label htmlFor="" className="text-zinc-500 text-sm">
            Email
          </label>
          <Input placeholder="Email" />
          <label htmlFor="" className="text-zinc-500 text-sm">
            Name
          </label>
          <Input placeholder="Name" />
          <label htmlFor="" className="text-zinc-500 text-sm">
            Password
          </label>
          <Input placeholder="Password" />
         <Button>Sign up</Button>
        </form>
      </div>
      <div className="bg-blue-600 w-full">
        <div className='pt-8 pb-12 flex flex-col'>
          <h1 className='text-center text-4xl text-zinc-100'>Welcome! Create your account and enjoy all the features</h1>
          <img width={450} className='m-auto block' src={ilustacao} alt="" />
        </div>
      </div>
    </div>
  )
}
