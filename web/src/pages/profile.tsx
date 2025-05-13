import ilustacao from '../assets/illustration.png'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'

export function Profile() {
  return (
    <div className="mx-16 py-6">
      <div className="flex flex-col gap-2 pb-7">
        <h1 className="text-3xl  text-zinc-900">Profile</h1>
        <p className=" text-zinc-700">View all your profile details here.</p>
      </div>
      <div className="border border-blue-300 flex justify-around py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl  text-zinc-900">
            Seja bem vindo <span className="text-blue-600">Luiz Felipe</span>
          </h1>
          <img src={ilustacao} width={250} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-zinc-900">Two-factor authentication</h1>
          <p className="w-xs text-justify text-zinc-700">
            Two-factor authentication enhances security by requiring both a
            password and a second verification method to access an account.
          </p>
          <div className="flex flex-col gap-4">
            <h1 className=" text-zinc-900">Two-factor methods</h1>
            <div className="px-4 py-3 flex justify-between rounded items-center border border-blue-300 bg-blue-50">
              <h2 className=" text-zinc-700">Authenticator app</h2>
              <Dialog>
                <DialogTrigger>
                  <button className="bg-blue-600 text-xs p-2 rounded-lg text-zinc-100 cursor-pointer">
                    ADD
                  </button>
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay />
                  <DialogContent>
                    <DialogTitle>Turn on 2-step verification</DialogTitle>
                    <DialogDescription>Open authenticator and chose scan barcode</DialogDescription>
                  </DialogContent>
                </DialogPortal>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
