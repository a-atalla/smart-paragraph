import { DraftailEditor } from 'draftail';
import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor
import './style.css';
import { inlineStyles, blockTypes } from './toolbar-config';

registerBlockType('egcoder/smartparagraph', {
  // Built-in atrr
  title: 'Smart Paragraph',
  description: 'Gutenberg block to edit smartly',
  icon: 'edit',
  category: 'common',
  attributes: {
    content: { type: 'string'},
  },

  edit({ attributes, setAttributes }) {
    const handleSave = (newContent) => {

      // use setTimeout to throttle the event
      setTimeout(() => {
        setAttributes({ content: JSON.stringify(newContent) });
      }, 500);
    }

    return (
      <DraftailEditor
        rawContentState={attributes.content ? JSON.parse(attributes.content) : ''}
        onSave={handleSave}
        blockTypes={blockTypes}
        inlineStyles={inlineStyles}
      />
    );
  },

  save({ attributes }) {
    let html = '';
    if (attributes.content && attributes.content !== 'null') {
      html = stateToHTML(convertFromRaw(JSON.parse(attributes.content)));
    }
    return(
      <RichText.Content value={html} tagName="div" />
    );
  },  

})