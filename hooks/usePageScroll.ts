"use client";
import { type UIEventHandler, useRef } from 'react';
import { useMount, useUnmount, useDebounceFn } from 'ahooks';
import { scroller } from '@/components/BaseLayout/content';

type DetailType = {
  type: 'up' | 'down',
  scrollTop: number;
}

type Listener = (detail: DetailType) => void;
type OptionType = {
  enable?: boolean;
}

export const usePageScroll = (listener: Listener, options: OptionType) => {
  const sRef = useRef(0);
  const enable = options?.enable ?? true;

  const { run: onScroll } = useDebounceFn<UIEventHandler>((e) => {
    if (!enable) {
      return;
    }
    
    const target = e.target as Element;
    const top = target.scrollTop;
    const diff = sRef.current - top;

    sRef.current = top;

    listener({
      scrollTop: top,
      type: diff < 0 ? 'up' : 'down'
    });

  }, { wait: 10 });

  useMount(() => {
    scroller.on('scroll', onScroll);
  });

  useUnmount(() => {
    scroller.off('scroll', onScroll);
  });
}