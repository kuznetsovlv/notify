import DataPresenter from './DataPresenter';
import HTMLPresenter from './HTMLPresenter';
import ImagePresenter from './ImagePresenter';
import LinkPresenter from './LinkPresenter';
import TextPresenter from './TextPresenter';

export default (label, data) => {
	switch(typeof data) {
		case 'string':
		case 'number':
			if(typeof label === 'string') {
				if(/[\b_](?:image)|(?:icon)|(?:img)[\b_]/.test(label)) {
					return ImagePresenter;
				}
				if(/[\b_]url[\b_]/.test(label)) {
					return LinkPresenter;
				}

				if(/[\b_]content[\b_]/.test(label)) {
					return HTMLPresenter;
				}
			}
			return TextPresenter;
		case 'object':
			return data === null ? TextPresenter : DataPresenter;
		default:
			return TextPresenter;
	}
};