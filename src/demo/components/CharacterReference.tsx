import { $, component$, render, Slot, useOnWindow } from '@builder.io/qwik';
import type { PortableTextMarkComponent } from '../../components/portabletext/types';

interface CharacterDefinition {
  name: string;
  image: string;
  description: string;
}

interface CharacterReferenceMark {
  _type: 'characterReference';
  characterId: string;
}

// Obviously you'd want to do this async against some API in a real world scenario
const characters: Record<string, CharacterDefinition> = {
  nedStark: {
    name: 'Eddark Stark',
    image:
      'data:image/jpeg;base64,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',
    description:
      'The head of House Stark, the Lord of Winterfell, Lord Paramount and Warden of the North.',
  },
};

const CharacterCard = component$<CharacterDefinition>(({ name, image, description }) => {
  return (
    <div>
      <div class={'avatar'}>
        <div class={'w-24 rounded-full'}>
          <img alt={name} src={image} width={'24'} height={'24'} />
        </div>
      </div>
      <div>
        <div>
          <div class={'font-bold'}>{name}</div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const Modal = component$(() => {
  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <div>
            <Slot />
          </div>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
});

export const CharacterReference: PortableTextMarkComponent<CharacterReferenceMark> = component$(
  ({ value }) => {
    const id = value?.characterId || '';
    const data = characters[id];
    if (!data) {
      return (
        <>
          <Slot />
        </>
      );
    }

    useOnWindow(
      'DOMContentLoaded',
      $(async () => {
        const portal = document.getElementById('portals');
        if (!portal) {
          return;
        }
        await render(
          portal,
          <Modal>
            <CharacterCard {...data} />
          </Modal>
        );
      })
    );

    return (
      <label for="my-modal" class="btn btn-primary btn-sm whitespace-nowrap">
        <Slot />
      </label>
    );
  }
);
