import { component$ } from '@builder.io/qwik';
import type {
  MissingComponentHandler,
  PortableTextQwikComponents,
  QwikPortableTextList,
} from '../types';
import { unknownListStyleWarning } from '../warnings';
import { RenderBlock } from '../portable-text';

type Props = {
  node: QwikPortableTextList;
  index: number;
  key: string;
  components: PortableTextQwikComponents;
  handleMissingComponent: MissingComponentHandler;
};
export const RenderListComponent = component$<Props>(
  ({ node, components, index, key, handleMissingComponent }) => {
    const component = components.list;
    const handler = typeof component === 'function' ? component : component[node.listItem];
    const ListHandlerComponent = handler || components.unknownList;
    const _key = key || `${node._type}-${node.level}-${node._key}`;

    if (ListHandlerComponent === components.unknownList) {
      const style = node.listItem || 'bullet';
      handleMissingComponent(unknownListStyleWarning(style), {
        nodeType: 'listStyle',
        type: style,
      });
    }

    return (
      <ListHandlerComponent key={_key} value={node} index={index} isInline={false}>
        {node.children?.map((child, childIndex) => (
          <RenderBlock
            index={childIndex}
            isInline={false}
            key={_key}
            node={child._key ? child : { ...child, _key: `${_key}-${childIndex}` }}
            components={components}
            handleMissingComponent={handleMissingComponent}
          />
        ))}
      </ListHandlerComponent>
    );
  }
);
