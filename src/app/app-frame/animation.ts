import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const fadeInAnimation = trigger('fadeInAnimation', [

  // route 'enter' transition
  transition(':enter', [

      // css styles at start of transition
      style({
        opacity: 0,
        marginTop: '3vh'
      }),

      // animation and styles at end of transition
      animate('.3s', style({ 
        opacity: 1,
        marginTop: 0
      }))
  ]),
]);