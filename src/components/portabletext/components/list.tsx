import type { PortableTextListComponent, PortableTextListItemComponent } from '../types';
import { component$, Slot } from '@builder.io/qwik';

export const defaultLists: Record<'number' | 'bullet', PortableTextListComponent> = {
  number: component$(() => (
    <ol>
      <Slot />
    </ol>
  )),
  bullet: component$(() => (
    <ul>
      <Slot />
    </ul>
  )),
};

export const DefaultListItem: PortableTextListItemComponent = component$(() => (
  <li>
    <Slot />
  </li>
));
