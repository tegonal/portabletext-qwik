import type { PortableTextMarkComponent } from '../../components/portabletext/types';
import { $, component$, Slot } from '@builder.io/qwik';

interface SpeechSynthesisMark {
  _type: 'speech';
  pitch?: number;
}
export const SpeechSynthesisComponent: PortableTextMarkComponent<SpeechSynthesisMark> = component$(
  ({ text, value }) => {
    const pitch = value?.pitch || 1;

    const handleSynthesis = $(() => {
      if (window.speechSynthesis === undefined) {
        console.warn('SpeechSynthesis is not supported');
        return;
      }
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.pitch = pitch;
      window.speechSynthesis.speak(msg);
    });

    return (
      <button type="button" class={'btn btn-secondary btn-sm'} onClick$={handleSynthesis}>
        <Slot />
      </button>
    );
  }
);
