# Assignment1

#### This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.
#### My first responsive website built with Angular featuring modern UI components and smooth animations. 
#### This project showcases my work with clean design and interactive elements.

## Features

#### **Navigation System**
- **Swipe Animation**: Smooth left-to-right underline animation on nav links
- **Active State**: Visual indicators for current page
- **Responsive**: Collapsible mobile menu
- **Solved Issues**:
   + Fixed <span style="color:orange;">routerLinkActive</span> styling conflicts
   + Implemented proper click-outside behavior for mobile menu
   + Resolved TypeScript event typing issues

#### **Portfolio Section**
- **Image Modal**: Click-to-expand functionality
- **Hover Effects**: Visual indicators for current page
- **Responsive Grid**: Adapts to all screen sizes
- **Solved Issues**:
   + Fixed modal closing when clicking outside image by clicking <span style="color:orange;"> `Esc` , `close button => x` , ` click by mouse out the image` </span>
   + Resolved image loading issues
   + Corrected aspect ratio problems
      - the reason of overflow was in `closebtn{ right: -150px  top: -110px }` and row wasn't in a container in footer

#### **Contact Form**
- **Floating Labels**: Animated form labels
- **Mobile Optimization**: Expanded layout on small screens
- **Validation**: Basic form validation
- **Solved Issues**:
   + Resolved mobile viewport issues
   + Fixed label positioning bugs
   + Corrected input focus states

## Development server

before you run the project , if you download it from my github. first you have to install **node modules** using ths command

```bash
npm i
```

To start a local development server, run:

```bash
ng serve 
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
