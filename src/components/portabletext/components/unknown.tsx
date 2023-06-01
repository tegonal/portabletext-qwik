import { unknownTypeWarning } from '../warnings';
import { component$, Slot } from '@builder.io/qwik';
import { PortableTextMarkComponentProps, PortableTextQwikComponents } from '../types';

const hidden = { display: 'none' };

export const DefaultUnknownType: PortableTextQwikComponents['unknownType'] = component$(
  ({ value, isInline }) => {
    const warning = unknownTypeWarning(value._type);
    return isInline ? <span style={hidden}>{warning}</span> : <span style={hidden}>{warning}</span>;
  }
);

export const DefaultUnknownMark = component$<PortableTextMarkComponentProps>(({ markType }) => {
  return (
    <span class={`unknown__pt__mark__${markType}`}>
      <Slot />
    </span>
  );
});

export const DefaultUnknownBlockStyle: PortableTextQwikComponents['unknownBlockStyle'] = component$(
  () => {
    return (
      <p>
        <Slot />
      </p>
    );
  }
);

export const DefaultUnknownList: PortableTextQwikComponents['unknownList'] = component$(() => {
  return (
    <ul>
      <Slot />
    </ul>
  );
});

export const DefaultUnknownListItem: PortableTextQwikComponents['unknownListItem'] = component$(
  () => {
    return (
      <li>
        <Slot />
      </li>
    );
  }
);
