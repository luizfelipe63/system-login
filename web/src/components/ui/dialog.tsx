import * as DialogPrimitive from '@radix-ui/react-dialog'

export function Dialog(props: DialogPrimitive.DialogProps) {
    return <DialogPrimitive.Dialog {...props} />
}

export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
    return <DialogPrimitive.DialogTrigger {...props} />
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
    return <DialogPrimitive.DialogPortal {...props} />
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
    return <DialogPrimitive.DialogClose {...props} />
}

export function DialogOverlay(props: DialogPrimitive.DialogOverlayProps) {
    return (
        <DialogPrimitive.DialogOverlay
            {...props}
            className="fixed inset-0 z-40 bg-black/40"
        />
    )
}

export function DialogContent(props: DialogPrimitive.DialogContentProps) {
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.DialogContent
                {...props}
                className="fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-blue-50 p-8"
            />
        </DialogPortal>
    )
}

export function DialogTitle(props: DialogPrimitive.DialogTitleProps) {
    return (
        <DialogPrimitive.DialogTitle {...props} className="text-lg text-center font-semibold text-zinc-900" />
    )
}

export function DialogDescription(
    props: DialogPrimitive.DialogDescriptionProps,
) {
    return (
        <DialogPrimitive.DialogDescription
            {...props}
            className="text-zinc-700 text-center text-sm leading-relaxed"
        />
    )
}
