import { BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from 'draftail';

export const inlineStyles = [
  { type: INLINE_STYLE.BOLD, icon: <span class="dashicons dashicons-editor-bold"></span> },
  { type: INLINE_STYLE.ITALIC, icon: <span class="dashicons dashicons-editor-italic"></span> },
  { type: INLINE_STYLE.UNDERLINE, icon: <span class="dashicons dashicons-editor-underline"></span> },
  { type: INLINE_STYLE.STRIKETHROUGH, icon: <span class="dashicons dashicons-editor-strikethrough"></span> },
  { type: INLINE_STYLE.CODE, icon: <span class="dashicons dashicons-editor-code"></span> },  
];

export const blockTypes = [
  { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, icon: <span class="dashicons dashicons-editor-ul"></span> },
  { type: BLOCK_TYPE.ORDERED_LIST_ITEM, icon: <span class="dashicons dashicons-editor-ol"></span> },
  { type: BLOCK_TYPE.BLOCKQUOTE, icon: <span class="dashicons dashicons-format-quote"></span>},
];

