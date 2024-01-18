import type { PortableTextBlock } from '@portabletext/types';
import { buildMarksTree } from '@portabletext/toolkit';
import type { Serializable, SerializedBlock } from '../types';

export function serializeBlock(options: Serializable<PortableTextBlock>): SerializedBlock {
  const { node, index, isInline } = options;
  const tree = buildMarksTree(node);
  const children = tree.map((child, i) =>
    serializeBlock({ node: child as any, isInline: true, index: i })
  );

  return {
    _key: node._key || `block-${index}`,
    children: children,
    index,
    isInline,
    node,
  };
}
