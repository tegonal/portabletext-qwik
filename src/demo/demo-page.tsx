import { component$ } from '@builder.io/qwik';
import { PortableText } from '../components/portabletext/portable-text';
import { blocks } from './fixture';
import { SpeechSynthesisComponent } from './components/SpeechSynthesis';
import { CharacterReference } from './components/CharacterReference';
import { TermDefinition } from './components/TermDefinition';
import { Link } from './components/Link';
import { PortableTextComponents } from '../components/portabletext/types';
import { SchnauzerList } from './components/SchnauzerList';

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
      <div class={'prose mx-auto mt-5 lg:container'}>
        <PortableText value={blocks} components={components} />
      </div>
      <div id={'portals'}></div>
    </>
  );
});
