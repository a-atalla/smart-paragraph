import { BLOCK_TYPE, INLINE_STYLE } from 'draftail';

export const inlineStyles = [
  { type: INLINE_STYLE.BOLD, icon: <span class="dashicons dashicons-editor-bold"></span> },
  { type: INLINE_STYLE.ITALIC, icon: <span class="dashicons dashicons-editor-italic"></span> },
  { type: INLINE_STYLE.CODE, icon: <span class="dashicons dashicons-editor-code"></span> },
  { type: INLINE_STYLE.QUOTATION, icon: <span class="dashicons dashicons-format-quote"></span> },
];

export const blockTypes = [
  { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, icon: <span class="dashicons dashicons-editor-ul"></span> },
  { type: BLOCK_TYPE.ORDERED_LIST_ITEM, icon: <span class="dashicons dashicons-editor-ol"></span> },
];