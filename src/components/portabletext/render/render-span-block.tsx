import { component$ } from '@builder.io/qwik';
import type { MissingComponentHandler, PortableTextQwikComponents } from '../types';
import type { ToolkitNestedPortableTextSpan } from '@portabletext/toolkit';
import { spanToPlainText } from '@portabletext/toolkit';
import { unknownMarkWarning } from '../warnings';
import { RenderBlock } from '../portable-text';

type Props = {
  node: ToolkitNestedPortableTextSpan;
  key: string;
  components: PortableTextQwikComponents;
  handleMissingComponent: MissingComponentHandler;
};
export const RenderSpanBlockComponent = component$<Props>(
  ({ node, components, handleMissingComponent }) => {
    const { markDef, markType, markKey } = node;
    const SpanHandlerComponent = components.marks[markType] || components.unknownMark;

    if (SpanHandlerComponent === components.unknownMark) {
      handleMissingComponent(unknownMarkWarning(markType), { nodeType: 'mark', type: markType });
    }

    return (
      <SpanHandlerComponent
        key={node._key || `span-${markType}-${node._type}`}
        value={markDef}
        text={spanToPlainText(node)}
        markType={markType}
        markKey={markKey}>
        {node.children.map((child, childIndex) => {
          return (
            <RenderBlock
              key={node._key || `span-${childIndex}`}
              index={childIndex}
              node={child}
              components={components}
              handleMissingComponent={handleMissingComponent}
            />
          );
        })}
      </SpanHandlerComponent>
    );
  }
);
