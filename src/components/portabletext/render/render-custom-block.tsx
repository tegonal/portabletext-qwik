import { component$ } from '@builder.io/qwik';
import type { PortableTextQwikComponents } from '../types';
import type { TypedObject } from '@portabletext/types/src';

type Props = {
  node: TypedObject;
  index: number;
  key: string;
  isInline: boolean;
  components: PortableTextQwikComponents;
};
export const RenderCustomBlock = component$<Props>(({ index, node, components, isInline, key }) => {
  const Node = components.types[node._type];
  const _key = key || `${node._type}-${node._key}`;
  return Node ? <Node key={_key} value={node} isInline={isInline} index={index} /> : null;
});
