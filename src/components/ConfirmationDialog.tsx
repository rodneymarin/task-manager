import Modal from "./Modal";

interface DialogProps {
  title: string;
  message: string;
  onResponse: (value: boolean) => void;
}

export default function ConfirmationDialog(props: DialogProps) {
  return (
    <Modal>
      <div className="w-[30rem] min-h-50 p-8 rounded-xl shadow-xl bg-stone-100 flex flex-col gap-8 text-stone-500 items-center">
        <div className="font-bold text-xl">{props.title}</div>
        <p>{props.message}</p>
        <div className="w-full mt-6 flex justify-center gap-6">
          <button onClick={() => props.onResponse(true)} className="button button-confirm">Ok</button>
          <button onClick={() => props.onResponse(false)} className="button">Cancel</button>
        </div>
      </div>
    </Modal>
  )
}
