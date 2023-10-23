import { Controller } from '@hotwired/stimulus';
import SortableJS from 'sortablejs';

export default class extends Controller {
    connect() {
        SortableJS.create(this.element, {
            handle: 'span',
        });
    }
}
