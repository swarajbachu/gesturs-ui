'use client'

import React from 'react';
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
  composeRenderProps
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

const tabsStyles = tv({
  base: 'flex',
  variants: {
    orientation: {
      horizontal: 'flex-col gap-1',
      vertical: 'flex-row w-[800px]'
    }
  }
});

function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabsStyles({...renderProps, className})
      )} />
  );
}

const tabListStyles = tv({
  base: 'flex gap-1 border-b-muted-foreground',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col items-start'
    }
  }
});

function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <RACTabList
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabListStyles({...renderProps, className,})
      )} />
  );
}

const tabProps = tv({
  base: 'outline-none flex items-center cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition ',
  variants: {
    isSelected: {
      false: 'text-muted-foreground',
      true: 'text-foreground border-b-2 border-b-foreground !font-semibold'
    },
    isDisabled: {
      true: 'text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] selected:text-gray-300 dark:selected:text-zinc-500 forced-colors:selected:text-[HighlightText] selected:bg-gray-200 dark:selected:bg-zinc-600 forced-colors:selected:bg-[GrayText]'
    }
  }
});

function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabProps({...renderProps, className})
      )} />
  );
}

const tabPanelStyles = tv({
  base: 'flex-1'
});

function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => tabPanelStyles({...renderProps, className})
      )} />
  );
}


export { TabList, TabPanel, Tab, Tabs ,type TabsProps};