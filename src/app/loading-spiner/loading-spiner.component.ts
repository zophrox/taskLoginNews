import { Component } from "@angular/core";

@Component({
    selector:'loading-spiner',
    template:
    '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls:['./loading-spiner.component.css']
})
export class LoadingSpinerComponent{}