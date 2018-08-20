import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../shared/index';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    // tslint:disable-next-line:no-input-rename
    @Input('modal-trigger') modalId: string;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }

}

