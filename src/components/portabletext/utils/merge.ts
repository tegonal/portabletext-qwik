import type { PortableTextComponents, PortableTextQwikComponents } from '../types';

export function mergeComponents(
  parent: PortableTextQwikComponents,
  overrides: PortableTextComponents
): PortableTextQwikComponents {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { block, list, listItem, marks, types, ...rest } = overrides;
  // @todo figure out how to not `as ...` these
  return {
    ...parent,
    block: mergeDeeply(parent, overrides, 'block') as PortableTextQwikComponents['block'],
    list: mergeDeeply(parent, overrides, 'list') as PortableTextQwikComponents['list'],
    listItem: mergeDeeply(parent, overrides, 'listItem') as PortableTextQwikComponents['listItem'],
    marks: mergeDeeply(parent, overrides, 'marks') as PortableTextQwikComponents['marks'],
    types: mergeDeeply(parent, overrides, 'types') as PortableTextQwikComponents['types'],
    ...rest,
  };
}

function mergeDeeply(
  parent: PortableTextQwikComponents,
  overrides: PortableTextComponents,
  key: 'block' | 'list' | 'listItem' | 'marks' | 'types'
): PortableTextQwikComponents[typeof key] {
  const override = overrides[key];
  const parentVal = parent[key];

  if (typeof override === 'function') {
    return override;
  }

  if (override && typeof parentVal === 'function') {
    return override;
  }

  if (override) {
    return { ...parentVal, ...override } as PortableTextQwikComponents[typeof key];
  }

  return parentVal;
}
