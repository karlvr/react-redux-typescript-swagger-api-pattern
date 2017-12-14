# React + Redux + Typescript pattern

This is a pattern for using React with Redux in Typescript. This includes type-safety for FSA (Flux standard actions) at the action creation and in the reducer.

React Components are wrapped in a Container that connects the Component to Redux. Interfaces are declared for the component's Props in the Container; split into `Props` and `Actions` to separate properties and action callbacks.

This pattern includes example templates for:

* Module `modules/template`
  * React Component `modules/template/components/example.tsx`
  * React Component Container `modules/template/container/example.ts`
  * Redux Actions `modules/template/actions.ts`
  * Redux Reducers `modules/template/reducers.ts`

## Dependencies

* [react](http://reactjs.org)
* [redux](https://redux.js.org)
* [react-redux](https://github.com/reactjs/react-redux)
* [typescript-fsa](https://github.com/aikoven/typescript-fsa)
* [typescript-fsa-reducers](https://github.com/dphilipson/typescript-fsa-reducers)
* [redux-devtools-extension](http://extension.remotedev.io)

## Setup

This project was setup using `create-react-app`. You can reproduce this setup using the commands below.

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

### Layout

The folder / file layout this pattern uses is:

* `src/lib` generic business code
* `src/modules` app modules, containing components, containers, actions and reducers.
* `src/modules/<module>/components` React components
* `src/modules/<module>/containers` React component containers
* `src/modules/<module>/actions.ts` Redux action creators
* `src/modules/<module>/reducer.ts` Redux reducer
