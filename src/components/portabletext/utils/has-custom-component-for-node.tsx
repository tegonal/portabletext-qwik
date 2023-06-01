import { TypedObject } from '@portabletext/types/src';
import { PortableTextQwikComponents } from '../types';

export const hasCustomComponentForNode = (
  node: TypedObject,
  components: PortableTextQwikComponents
): boolean => {
  return node._type in components.types;
};
