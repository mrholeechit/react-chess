import React from 'react';
import cn from 'classnames';

export default ({ piece, ...props }) => (
  <div {...props}
    className={cn('piece', piece)}
    onClick={() => props.onClick({
      piece: piece,
      position: props.value
    })} />
);