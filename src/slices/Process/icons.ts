import React from 'react';
import { Content } from '@prismicio/client';
import { Code2, MessageCircleMore, PenTool, Rocket } from 'lucide-react';

type IconType = Content.ProcessSlice['primary']['steps'][number]['icon'];

export const iconComponent = (icon: IconType): React.ReactElement => {
  switch (icon) {
    case 'messageCircleMore':
      return React.createElement(MessageCircleMore, { className: 'size-12' });
    case 'penTool':
      return React.createElement(PenTool, {
        className: 'size-12 rotate-[280deg]'
      });
    case 'code2':
      return React.createElement(Code2, { className: 'size-12' });
    case 'rocket':
      return React.createElement(Rocket, { className: 'size-12' });
    default:
      return React.createElement(MessageCircleMore, { className: 'size-12' });
  }
};
