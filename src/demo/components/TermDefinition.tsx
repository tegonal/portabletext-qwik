import type { PortableTextMarkComponent } from '../../components/portabletext/types';
import { component$, Slot } from '@builder.io/qwik';

interface DefinitionMark {
  _type: 'definition';
  details: string;
}

export const TermDefinition: PortableTextMarkComponent<DefinitionMark> = component$(({ value }) => {
  return (
    <span class="tooltip" data-tip={value?.details}>
      <span class="badge badge-primary">
        <Slot />
      </span>
    </span>
  );
});
