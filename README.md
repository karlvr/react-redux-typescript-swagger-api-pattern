# React + Redux + TypeScript pattern

This is a pattern for using React with Redux in TypeScript. This includes type-safety for FSA ([Flux standard actions](https://github.com/acdlite/flux-standard-action)) at the action creation and in the reducer.

React Components are wrapped in a Container that connects the Component to Redux. Interfaces are declared for the component's Props in the Container; split into `Props` and `Actions` to separate properties and action callbacks.

### Layout

The folder / file layout this pattern uses is:

* `src/modules/index.js` the root file for the Redux store and root reducer
* `src/modules/<module>` app modules, containing components, containers, actions and reducers.
* `src/modules/<module>/components` React components
* `src/modules/<module>/containers` React component containers
* `src/modules/<module>/actions.ts` Redux action creators
* `src/modules/<module>/reducer.ts` Redux reducer

## Dependencies

* [react](http://reactjs.org)
* [redux](https://redux.js.org)
* [react-redux](https://github.com/reactjs/react-redux) (connects React and Redux)
* [typescript-fsa](https://github.com/aikoven/typescript-fsa) (type-safe creators for flux standard actions)
* [typescript-fsa-reducers](https://github.com/dphilipson/typescript-fsa-reducers) (type-safe reducers for flux standard actions)
* [redux-devtools-extension](http://extension.remotedev.io) (debug Redux)

## Setup

This project was setup using [create-react-app](https://github.com/facebookincubator/create-react-app). You can reproduce this setup using the commands below.

Create the project using `create-react-app`:

```
create-react-app <project> --scripts-version=react-scripts-ts
cd <project>
```

Install dependencies:

```
npm install --save redux react-redux
npm install --save-dev @types/react-redux
npm install --save typescript-fsa-reducers typescript-fsa
```

Include the devtools:

```
npm install --save redux-devtools-extension
```

### IDE

Any development environment should suffice. I use [Visual Studio Code](https://code.visualstudio.com).

Download and install VSCode.

Install extensions by going to the Extensions tab (or selecting Extensions from the View menu).

Install the following extensions:
* TSLint

### Redux DevTools Extension

Install the Redux DevTools for Chrome, Firefox and others by visiting http://extension.remotedev.io and following the instructions.
