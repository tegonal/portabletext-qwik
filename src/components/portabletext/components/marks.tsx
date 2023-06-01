import type { TypedObject } from '@portabletext/types';
import type { PortableTextMarkComponent } from '../types';
import { component$, Slot } from '@builder.io/qwik';

interface DefaultLink extends TypedObject {
  _type: 'link';
  href: string;
}

const link: PortableTextMarkComponent<DefaultLink> = component$<{ value?: DefaultLink }>(
  ({ value }) => (
    <a href={value?.href}>
      <Slot />
    </a>
  )
);

const underlineStyle = { textDecoration: 'underline' };

export const defaultMarks: Record<string, PortableTextMarkComponent | undefined> = {
  em: component$<PortableTextMarkComponent>(() => (
    <em>
      <Slot />
    </em>
  )),
  strong: component$<PortableTextMarkComponent>(() => (
    <strong>
      <Slot />
    </strong>
  )),
  code: component$<PortableTextMarkComponent>(() => (
    <code>
      <Slot />
    </code>
  )),
  underline: component$<PortableTextMarkComponent>(() => (
    <span style={underlineStyle}>
      <Slot />
    </span>
  )),
  'strike-through': component$<PortableTextMarkComponent>(() => (
    <del>
      <Slot />
    </del>
  )),
  link,
};
