import { Component, Input } from "@angular/core";

@Component({
    selector: 'sn-welcome-hero',
    templateUrl: './welcome-hero.component.html',
    styles: []
})

export class WelcomeHeroComponent {
    @Input() rows: HeroItem[];
}
