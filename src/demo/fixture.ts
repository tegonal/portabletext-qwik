import type { PortableTextBlock } from '@portabletext/types';

export const blocks: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'head',
    style: 'h1',
    markDefs: [],
    children: [{ _type: 'span', text: '@tegonal/portabletext-qwik components' }],
  },
  {
    _type: 'block',
    _key: 'text-format-header',
    style: 'h2',
    children: [{ _type: 'span', _key: 'a', text: 'Text formatting' }],
  },
  {
    _type: 'block',
    _key: 'text-formatting',
    markDefs: [{ _type: 'link', _key: 'd4tl1nk', href: 'https://portabletext.org/' }],
    children: [
      { _type: 'span', _key: 'a', text: 'Plain, ' },
      { _type: 'span', _key: 'b', text: 'emphasized, ', marks: ['em'] },
      { _type: 'span', _key: 'c', text: 'linked', marks: ['d4tl1nk'] },
      { _type: 'span', _key: 'd', text: ' and ', marks: ['em'] },
      { _type: 'span', _key: 'e', text: 'strong', marks: ['strong'] },
      { _type: 'span', _key: 'f', text: ' text, that can also be ', marks: [] },
      { _type: 'span', _key: 'g', text: 'combined', marks: ['em', 'strong', 'd4tl1nk'] },
      { _type: 'span', _key: 'g', text: '. Obviously it also supports ', marks: [] },
      { _type: 'span', _key: 'h', text: 'inline code', marks: ['code'] },
      { _type: 'span', _key: 'i', text: ', ' },
      { _type: 'span', _key: 'j', text: 'underlined text', marks: ['underline'] },
      { _type: 'span', _key: 'k', text: ' and ' },
      { _type: 'span', _key: 'l', text: 'strike-through', marks: ['strike-through'] },
      { _type: 'span', _key: 'm', text: '.' },
    ],
  },
  {
    _type: 'block',
    _key: 'text-annotations',
    markDefs: [
      {
        _type: 'definition',
        _key: 'd3f',
        details: 'a statement of the exact meaning of a word, especially in a dictionary.',
      },
      { _type: 'characterReference', _key: 'b34n', characterId: 'nedStark' },
      { _type: 'speech', _key: 'sp33ch', pitch: 1 },
      { _type: 'speech', _key: 'p17ch', pitch: 1.5 },
    ],
    children: [
      {
        _type: 'span',
        _key: 'a',
        text: 'But aside from that, it also supports completely custom annotations - be it structured references to ',
      },
      { _type: 'span', _key: 'b', text: 'book/movie characters', marks: ['b34n'] },
      { _type: 'span', _key: 'c', text: ', term ' },
      { _type: 'span', _key: 'd', text: 'definitions', marks: ['d3f'] },
      { _type: 'span', _key: 'e', text: ', ' },
      { _type: 'span', _key: 'f', text: 'speech synthesis controls', marks: ['sp33ch'] },
      { _type: 'span', _key: 'g', text: ' ' },
      { _type: 'span', _key: 'h', text: '(configurable)', marks: ['p17ch'] },
      { _type: 'span', _key: 'i', text: ' or some other fun and creative use case.' },
    ],
  },
  {
    _type: 'block',
    _key: 'inline-objects',
    style: 'normal',
    children: [
      { _type: 'span', text: 'Blocks can also contain "' },
      { _type: 'span', text: 'inline objects', marks: ['em'] },
      {
        _type: 'span',
        text: '", which contain user-defined data. Maybe you want to represent a price in a given currency, but be able to get a live exchange rate in the users local currency? In January 2022, a Whopper was about ',
      },
      {
        _type: 'currencyAmount',
        currency: 'USD',
        amount: 5,
      },
      { _type: 'span', text: ' at your local Burger King restaurant in Miami.' },
    ],
  },
  {
    _type: 'block',
    _key: 'blocks-expl-header',
    style: 'h2',
    children: [{ _type: 'span', _key: 'z', text: 'Blocks' }],
  },
  {
    _type: 'block',
    _key: 'block-intro',
    children: [
      {
        _type: 'span',
        _key: 'z',
        text: '"Blocks" in Portable Text are... well, block-level items.\nBy default, you will see things like blockquotes, headings and regular paragraphs.',
      },
    ],
  },
  {
    _type: 'block',
    _key: 'cool-custom',
    style: 'normal',
    markDefs: [
      { _type: 'link', _key: 'lllink', href: 'https://github.com/rexxars/react-refractor' },
    ],
    children: [
      {
        _type: 'span',
        text: 'Aside from that, you can drop in pretty much any data you want, as long as you define a React component to render it. Here is a code block, highlighted by ',
      },
      { _type: 'span', text: 'react-refractor', marks: ['lllink'] },
      { _type: 'span', text: ', for instance:' },
    ],
  },
  {
    _type: 'block',
    _key: 'list-head',
    style: 'h2',
    markDefs: [],
    children: [{ _type: 'span', text: 'Lists' }],
  },
  {
    _type: 'block',
    _key: 'list-intro',
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', text: 'Of course, you will want lists!' }],
  },
  {
    _type: 'block',
    listItem: 'bullet',
    children: [{ _type: 'span', text: 'They are fully supported' }],
  },
  {
    _type: 'block',
    listItem: 'bullet',
    children: [{ _type: 'span', text: 'They can be unordered or ordered' }],
  },
  {
    _type: 'block',
    listItem: 'bullet',
    children: [{ _type: 'span', text: 'Reasons why ordered lists might be better:' }],
  },
  {
    _type: 'block',
    listItem: 'number',
    level: 2,
    children: [
      { _type: 'span', text: 'Most lists have ' },
      { _type: 'span', text: 'some', marks: ['em'] },
      { _type: 'span', text: ' priority' },
    ],
  },
  {
    _type: 'block',
    listItem: 'number',
    level: 2,
    children: [{ _type: 'span', text: 'Not conveying importance/priority is lazy' }],
  },
  {
    _type: 'block',
    _key: 'bb',
    children: [
      {
        _type: 'span',
        text: 'You can also go beyond ordered/unordered...',
      },
    ],
  },
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        text: 'Here is a list of schnauzers, as indicated by the schnauzer list type and icon:',
      },
    ],
  },
  {
    _type: 'block',
    listItem: 'schnauzer',
    children: [{ _type: 'span', text: 'Kokos' }],
  },
  {
    _type: 'block',
    listItem: 'schnauzer',
    children: [{ _type: 'span', text: 'Pippi' }],
  },
];
