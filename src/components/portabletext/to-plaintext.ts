import type { PortableTextProps } from './types';

// Credit: https://www.sanity.io/schemas/portable-text-to-plain-text-cc845843
// https://www.sanity.io/exchange/community/rexxars

const defaults = { nonTextBehavior: 'remove' };

type FnArgs = {
  opts?: typeof defaults;
  value: PortableTextProps['value'];
};

/**
 * Convert a Portable block or array to plain text. Strips the structure of all marks and block types.
 * @param value
 * @param opts
 */
export const portableTextToPlaintext = ({ value, opts }: FnArgs) => {
  const options = Object.assign({}, defaults, opts);
  const array = Array.isArray(value) ? value : [value];
  return array
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`;
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
};
