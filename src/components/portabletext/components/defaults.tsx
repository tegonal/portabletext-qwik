import type { PortableTextBlockStyle } from '@portabletext/types';
import type { PortableTextBlockComponent, PortableTextQwikComponents } from '../types';
import { defaultMarks } from './marks';
import { DefaultListItem, defaultLists } from './list';
import {
  DefaultUnknownBlockStyle,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownMark,
  DefaultUnknownType,
} from './unknown';
import { component$, Slot } from '@builder.io/qwik';

export const DefaultHardBreak = component$(() => <br />);

export const defaultBlockStyles: Record<
  PortableTextBlockStyle,
  PortableTextBlockComponent | undefined
> = {
  normal: component$(() => (
    <p>
      <Slot />
    </p>
  )),
  blockquote: component$(() => (
    <blockquote>
      <Slot />
    </blockquote>
  )),
  h1: component$(() => {
    return (
      <h1>
        <Slot />
      </h1>
    );
  }),
  h2: component$(() => (
    <h2>
      <Slot />
    </h2>
  )),
  h3: component$(() => (
    <h3>
      <Slot />
    </h3>
  )),
  h4: component$(() => (
    <h4>
      <Slot />
    </h4>
  )),
};

export const defaultComponents: PortableTextQwikComponents = {
  types: {},

  block: defaultBlockStyles,
  marks: defaultMarks,
  list: defaultLists,
  listItem: DefaultListItem,
  hardBreak: DefaultHardBreak,

  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle,
};
