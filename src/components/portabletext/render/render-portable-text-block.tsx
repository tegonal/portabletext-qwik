import { component$ } from '@builder.io/qwik';
import { serializeBlock } from '../utils/serialize-block';
import { unknownBlockStyleWarning } from '../warnings';
import { RenderBlock } from '../portable-text';
import { PortableTextBlock } from '@portabletext/types/src';
import { MissingComponentHandler, PortableTextQwikComponents } from '../types';

type Props = {
  node: PortableTextBlock;
  index: number;
  key: string;
  isInline: boolean;
  components: PortableTextQwikComponents;
  handleMissingComponent: MissingComponentHandler;
};
export const RenderPortableTextBlockComponent = component$<Props>(
  ({ node, components, index, isInline = false, handleMissingComponent }) => {
    const {
      _key,
      children,
      node: serialisedNode,
      ...props
    } = serializeBlock({ node, index, isInline });

    const style = node.style || 'undefinedTextBlockStyle';

    const handler =
      typeof components.block === 'function' ? components.block : components.block[style];

    const BlockHandlerComponent = handler || components.unknownBlockStyle;

    if (BlockHandlerComponent === components.unknownBlockStyle) {
      handleMissingComponent(unknownBlockStyleWarning(style), {
        nodeType: 'blockStyle',
        type: style,
      });
    }

    return (
      <BlockHandlerComponent key={_key} value={serialisedNode} index={index} isInline={isInline}>
        {children?.map((child) => (
          <RenderBlock
            key={_key}
            node={child.node}
            components={components}
            handleMissingComponent={handleMissingComponent}
            {...props}
          />
        ))}
      </BlockHandlerComponent>
    );
  }
);
