import { component$ } from '@builder.io/qwik';
import { PortableText } from '../components/portabletext/portable-text';
import { blocks } from './fixture';
import { SpeechSynthesisComponent } from './components/SpeechSynthesis';
import { CharacterReference } from './components/CharacterReference';
import { TermDefinition } from './components/TermDefinition';
import { Link } from './components/Link';
import type { PortableTextComponents } from '../components/portabletext/types';
import { SchnauzerList } from './components/SchnauzerList';
import { portableTextToPlaintext } from '../components/portabletext/to-plaintext';

// Some examples of custom components
const components: PortableTextComponents = {
  list: {
    schnauzer: SchnauzerList,
  },
  marks: {
    link: Link,
    definition: TermDefinition,
    characterReference: CharacterReference,
    speech: SpeechSynthesisComponent,
  },
};

export const DemoPage = component$(() => {
  return (
    <>
      <div class={'prose mx-auto mt-8 lg:container'}>
        <PortableText value={blocks} components={components} />
      </div>
      <div class={'prose mx-auto mt-8 lg:container'}>
        <h2>Plaintext</h2>
        <p>{portableTextToPlaintext({ value: blocks })}</p>
      </div>
      <div id={'portals'}></div>
    </>
  );
});
