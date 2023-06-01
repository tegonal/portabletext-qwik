import { component$ } from '@builder.io/qwik';
import { PortableTextQwikComponents } from '../types';
import { TypedObject } from '@portabletext/types/src';

type Props = {
  node: TypedObject;
  index: number;
  key: string;
  isInline: boolean;
  components: PortableTextQwikComponents;
};
export const RenderCustomBlock = component$<Props>(({ index, node, components, isInline, key }) => {
  const Node = components.types[node._type];
  return Node ? <Node key={key} value={node} isInline={isInline} index={index} /> : null;
});
