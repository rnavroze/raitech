import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => *', [

      query(':enter',
        [
          style({display: 'block', opacity: 0})
        ],
        {optional: true}
      ),

      query(':leave',
        [
          style({display: 'block', opacity: 1}),
          animate('0.2s', style({opacity: 0}))
          // animate('1s', style({opacity: 0}))
        ],
        {optional: true}
      ),

      query(':leave',
        [
          style({height: 0, maxHeight: 0, opacity: 0, margin: 0, padding: 0})
        ],
        {optional: true}
      ),

      query(':enter',
        [
          style({opacity: 0}),
          animate('0.2s', style({opacity: 1}))
        ],
        {optional: true}
      )

    ])

  ]);

export const fadeAnimationSmall =

  trigger('fadeAnimationSmall', [

    transition( '* => *', [

      query(':self',
        [
          style({ height: '100vh' })
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0, position: 'absolute' })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.2s', style({ opacity: 0, position: 'absolute', width: '100%' }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0, position: 'static' }),
          animate('0.2s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);

export const fadeAnimationProjects =

  trigger('fadeAnimationProjects', [

    transition( '* => *', [

      query(':self',
        [
          style({ height: '100vh' })
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0, position: 'absolute' })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1, position: 'absolute', width: '97%' }),
          animate('0.2s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0, position: 'static' }),
          animate('0.2s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
