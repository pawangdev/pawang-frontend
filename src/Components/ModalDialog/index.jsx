import React from 'react'
import { Dialog } from '@headlessui/react'

const ModalDialog = ({ isOpen, setIsOpen, title, description, children }) => {
    return (
        <Dialog open={isOpen} className="relative z-50" onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="mx-auto w-full max-w-lg rounded bg-white px-6 py-3">
                    <Dialog.Title className="text-lg font-semibold capitalize text-gray-800">{title}</Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-500 ">
                        {description}
                    </Dialog.Description>
                    <div className="-mx-6 my-2">
                        <hr />
                    </div>
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default ModalDialog