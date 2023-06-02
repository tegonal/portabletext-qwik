import { component$ } from '@builder.io/qwik';
import {
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
  ({ node, components, index, handleMissingComponent }) => {
    const component = components.list;
    const handler = typeof component === 'function' ? component : component[node.listItem];
    const ListHandlerComponent = handler || components.unknownList;

    if (ListHandlerComponent === components.unknownList) {
      const style = node.listItem || 'bullet';
      handleMissingComponent(unknownListStyleWarning(style), {
        nodeType: 'listStyle',
        type: style,
      });
    }

    return (
      <ListHandlerComponent key={`list-${index}`} value={node} index={index} isInline={false}>
        {node.children?.map((child, childIndex) => (
          <RenderBlock
            index={childIndex}
            isInline={false}
            key={`li-${index}-${childIndex}`}
            node={child._key ? child : { ...child, _key: `li-${index}-${childIndex}` }}
            components={components}
            handleMissingComponent={handleMissingComponent}
          />
        ))}
      </ListHandlerComponent>
    );
  }
);
