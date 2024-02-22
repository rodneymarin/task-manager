import { PropsWithChildren } from "react";

interface ModalProps {
  //isVisible: boolean;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  //if (!props.isVisible) return null;
  return (
    <div className="w-screen h-screen bg-stone-600/75 fixed inset-0 flex justify-center items-center">
      {props.children}
    </div>
  );
}

