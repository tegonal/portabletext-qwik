import {
  isPortableTextBlock,
  isPortableTextListItemBlock,
  isPortableTextToolkitList,
  isPortableTextToolkitSpan,
  isPortableTextToolkitTextNode,
  LIST_NEST_MODE_HTML,
  nestLists,
} from '@portabletext/toolkit';
import type {
  MissingComponentHandler,
  PortableTextProps,
  PortableTextQwikComponents,
} from './types';
import type { PortableTextBlock, TypedObject } from '@portabletext/types';
import { mergeComponents } from './utils/merge';
import { defaultComponents } from './components/defaults';
import { printWarning, unknownTypeWarning } from './warnings';
import { $, component$ } from '@builder.io/qwik';
import { RenderPortableTextBlockComponent } from './render/render-portable-text-block';
import { RenderSpanBlockComponent } from './render/render-span-block';
import { RenderListComponent } from './render/render-list';
import { RenderListItemComponent } from './render/render-list-item';
import { hasCustomComponentForNode } from './utils/has-custom-component-for-node';
import { RenderCustomBlock } from './render/render-custom-block';

export const PortableText = component$<PortableTextProps>(
  ({
    value: input,
    components: componentOverrides,
    onMissingComponent: missingComponentHandler,
  }) => {
    const blocks = Array.isArray(input) ? input : [input];
    const nested = nestLists(blocks, LIST_NEST_MODE_HTML);

    const components = componentOverrides
      ? mergeComponents(defaultComponents, componentOverrides)
      : defaultComponents;

    return (
      <>
        {nested.map((node, index) => (
          <RenderBlock
            key={node._key || `node-${index}-${node._type}`}
            index={index}
            node={node}
            components={components}
            handleMissingComponent={
              missingComponentHandler ? missingComponentHandler : $(printWarning)
            }
          />
        ))}
      </>
    );
  }
);

type RenderBlockProps = {
  node: PortableTextBlock | TypedObject;
  components: PortableTextQwikComponents;
  handleMissingComponent: MissingComponentHandler;
  index: number;
  isInline?: boolean;
  key: string;
};
export const RenderBlock = component$<RenderBlockProps>(
  ({ node, key, components, index, isInline = false, handleMissingComponent }) => {
    if (isPortableTextToolkitList(node)) {
      return (
        <RenderListComponent
          key={key}
          node={node}
          components={components}
          index={index}
          handleMissingComponent={handleMissingComponent}
        />
      );
    }

    if (isPortableTextListItemBlock(node)) {
      return (
        <RenderListItemComponent
          key={key}
          node={node}
          components={components}
          index={index}
          handleMissingComponent={handleMissingComponent}
        />
      );
    }

    if (isPortableTextBlock(node)) {
      return (
        <RenderPortableTextBlockComponent
          key={key}
          node={node}
          components={components}
          index={index}
          isInline={isInline}
          handleMissingComponent={handleMissingComponent}
        />
      );
    }

    if (isPortableTextToolkitSpan(node)) {
      return (
        <RenderSpanBlockComponent
          key={key}
          node={node}
          components={components}
          handleMissingComponent={handleMissingComponent}
        />
      );
    }

    if (isPortableTextToolkitTextNode(node)) {
      if (node.text === '\n') {
        const HardBreak = components.hardBreak;
        return HardBreak ? <HardBreak key={index} /> : <>\n</>;
      }
      return <>{node.text}</>;
    }

    if (hasCustomComponentForNode(node, components)) {
      return (
        <RenderCustomBlock
          key={key}
          node={node}
          components={components}
          index={index}
          isInline={isInline}
        />
      );
    }

    // Fallback to unknown type

    const nodeOptions = {
      value: node,
      isInline,
      index,
    };

    handleMissingComponent(unknownTypeWarning(node._type), {
      nodeType: 'block',
      type: node._type,
    });

    const UnknownType = components.unknownType;
    return <UnknownType key={node._key} {...nodeOptions} />;
  }
);
