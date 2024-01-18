import { component$, Slot } from '@builder.io/qwik';
import type { PortableTextMarkComponent } from '../../components/portabletext/types';

interface LinkMark {
  _type: 'link';
  href: string;
}

export const Link: PortableTextMarkComponent<LinkMark> = component$(({ value }) => {
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
  return (
    <a href={value?.href} target={target}>
      <Slot />
    </a>
  );
});
