import { PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ opened, onClose, children }: Props) => {
  if (!opened) return null;

  return (
    <div
      className='modal-dimmed'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className='modal'>{children}</div>
    </div>
  );
};
