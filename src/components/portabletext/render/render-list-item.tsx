import { component$ } from '@builder.io/qwik';
import { serializeBlock } from '../utils/serialize-block';
import { MissingComponentHandler, PortableTextQwikComponents } from '../types';
import { unknownListItemStyleWarning } from '../warnings';
import { RenderBlock } from '../portable-text';
import {
  PortableTextListItemBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from '@portabletext/types';

type Props = {
  node: PortableTextListItemBlock<PortableTextMarkDefinition, PortableTextSpan>;
  index: number;
  key: string;
  components: PortableTextQwikComponents;
  handleMissingComponent: MissingComponentHandler;
};
export const RenderListItemComponent = component$<Props>(
  ({ node, components, index, handleMissingComponent }) => {
    const tree = serializeBlock({ node, index, isInline: false });
    const renderer = components.listItem;
    const handler = typeof renderer === 'function' ? renderer : renderer[node.listItem];
    const ListItemHandler = handler || components.unknownListItem;

    if (ListItemHandler === components.unknownListItem) {
      const style = node.listItem || 'bullet';
      handleMissingComponent(unknownListItemStyleWarning(style), {
        type: style,
        nodeType: 'listItemStyle',
      });
    }

    return (
      <ListItemHandler value={node} index={index} isInline={false}>
        {tree.children?.map((child) => {
          const key = node._key || `node-${index}`;
          if (node.style && node.style !== 'normal') {
            // Wrap any other style in whatever the block serializer says to use
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { listItem, ...blockNode } = node;
            // children = renderNode({ node: blockNode, index, isInline: false, renderNode });
            return (
              <RenderBlock
                index={index}
                key={key}
                node={blockNode}
                components={components}
                handleMissingComponent={handleMissingComponent}
              />
            );
          }
          return (
            <RenderBlock
              index={index}
              key={key}
              node={child.node}
              components={components}
              handleMissingComponent={handleMissingComponent}
            />
          );
        })}
      </ListItemHandler>
    );
  }
);
