# @tegonal/portabletext-qwik

This is a [Portable Text](https://portabletext.org) serializer for [Qwik](https://qwik.builder.io).

It creates Qwik components and basically offers the same features as the React serializer, since this is
mostly based on [@portabletext/react](https://github.com/portabletext/react-portabletext).

In a nutshell:

- Same custom components, just `component$` instead of `React.FC` ;)
- Same handling of marks, lists, etc.

Thanks to the Portable Text team for the great work.

## Installation

```sh
npm i @tegonal/portabletext-qwik
```

## Usage

```tsx
import {PortableText, PortableTextQwikComponents} from '@tegonal/portabletext-qwik';
import {component$} from "@builder.io/qwik";
import {components} from "../my-components";
import {PortableTextBlock} from "@portabletext/types";

type Props = {
  blocks: PortableTextBlock[];
}

const components: PortableTextQwikComponents = {
  // Add your custom components here, just like in React
}

const QwikComponent = component$<Props>(({blocks}) => {
  return (
    <PortableText
      value={blocks}
      components={components}
    />
  )
});
```
The only difference between this and the React serializer is that you need to provide Qwik components instead of React components.

## Demo / Example usage

You can check out the demo page that uses Tailwind CSS and the wonderful [DaisyUI](https://daisyui.com) for styling.

```sh
git clone git@github.com:tegonal/portabletext-qwik.git
cd portabletext-qwik
npm install
npm run dev
```

## License

MIT © [tegonal](https://tegonal.com)
