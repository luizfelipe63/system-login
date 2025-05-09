import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export function Authenticate() {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="px-9">
                <form action="" className="flex flex-col justify-center gap-4 pb-8">
                    <label htmlFor="" className="text-zinc-500 text-sm">
                        Email
                    </label>
                    <Input className='w-2xs' placeholder="Email" id="email" />
                    <label htmlFor="" className="text-zinc-500 text-sm">
                        Password
                    </label>
                    <Input placeholder="Password" id="password" />
                    <a className='text-xs text-blue-700' href="">Forgot password?</a>
                    <Button type="submit">Sign up</Button>
                </form>
            </div>
        </div>
    )
}
