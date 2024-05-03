import classNames from 'classnames';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  icon: ReactNode;
  message: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ icon, message, direction = 'right', className }: Props) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className={classNames(`tooltip-container`, className)}
      onClick={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      {icon && <div className='tooltip-icon'>{icon}</div>}
      {showMessage && (
        <div className={`tooltip-message ${direction}`}>{message}</div>
      )}
    </div>
  );
};

export default Tooltip;
