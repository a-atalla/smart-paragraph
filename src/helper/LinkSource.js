// @flow
import React, { Component } from "react";

import { RichUtils, EditorState } from "draft-js";

import Modal from "./Modal";
import "./LinkSource.css";

class LinkSource extends Component {
	constructor(props) {
		super(props);

		const { entity } = this.props;
		const state = {
			url: ""
		};

		if (entity) {
			const data = entity.getData();
			state.url = data.url;
		}

		this.state = state;

		this.onRequestClose = this.onRequestClose.bind(this);
		this.onAfterOpen = this.onAfterOpen.bind(this);
		this.onConfirm = this.onConfirm.bind(this);
		this.onChangeURL = this.onChangeURL.bind(this);
	}

	/* :: onConfirm: (e: Event) => void; */
	onConfirm(e) {
		const { editorState, entityType, onComplete } = this.props;
		const { url } = this.state;

		e.preventDefault();

		const contentState = editorState.getCurrentContent();

		const data = {
			url: url.replace(/\s/g, "")
		};
		const contentStateWithEntity = contentState.createEntity(
			// Fixed in https://github.com/facebook/draft-js/commit/6ba124cf663b78c41afd6c361a67bd29724fa617, to be released.
			// $FlowFixMe
			entityType.type,
			"MUTABLE",
			data
		);
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const nextState = RichUtils.toggleLink(
			editorState,
			editorState.getSelection(),
			entityKey
		);

		onComplete(nextState);
	}

	/* :: onRequestClose: (e: SyntheticEvent<>) => void; */
	onRequestClose(e) {
		const { onClose } = this.props;
		e.preventDefault();

		onClose();
	}

	/* :: onAfterOpen: () => void; */
	onAfterOpen() {
		const input = this.inputRef;

		if (input) {
			input.focus();
			input.select();
		}
	}

	/* :: onChangeURL: (e: Event) => void; */
	onChangeURL(e) {
		if (e.target instanceof HTMLInputElement) {
			const url = e.target.value;
			this.setState({ url });
		}
	}

	render() {
		const { url } = this.state;
		return (
			<Modal
				onRequestClose={this.onRequestClose}
				onAfterOpen={this.onAfterOpen}
				isOpen
				contentLabel="Link chooser"
				appElement={document.querySelector(".Draftail-Eeditor")}>
				<form className="LinkSource">
					<label className="form-field">
						<span className="form-field__label">Link URL</span>
						<input
						    className="form-field__input"
							ref={inputRef => {
								this.inputRef = inputRef;
							}}
							type="text"
							onChange={this.onChangeURL}
							value={url}
							placeholder="www.example.com"
						/>
					</label>
                    <div className="form-save__btn">
					<button type="button" onClick={this.onConfirm}>
						Save
					</button>
					</div>
					
				</form>
			</Modal>
		);
	}
}

export default LinkSource;
