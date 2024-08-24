import { createPortal } from 'react-dom'
import { useAuthContext } from "../context/AuthContext";
import { MdCancel } from "react-icons/md";

/* eslint-disable react/prop-types */
function ModalWindow({ children }) {
  const { handleOpenModalWindow } = useAuthContext();

  return createPortal(
    <div
      onClick={handleOpenModalWindow}
      className="fixed inset-0 left-0 top-0 z-10 h-screen w-full bg-black/30 backdrop-blur-3xl duration-300 hover:cursor-pointer"
    >
      <div className="fixed left-[50%] top-[50%] -translate-y-[50%] border bg-slate-100 shadow-xl">
        <button
          className="absolute right-3 top-2 rounded-full shadow"
          onClick={handleOpenModalWindow}
        >
          <MdCancel
            size="25"
            className="text-slate-600 transition-all duration-300 hover:scale-110"
          />
        </button>

        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}

export default ModalWindow;

/*

 function Modal({children, onClose}) {
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>
  )
 }


const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    // // Sometimes we need both
    // fill: var(--color-grey-500);
    // stroke: var(--color-grey-500);
    color: var(--color-grey-500);
  }
`;

*/
