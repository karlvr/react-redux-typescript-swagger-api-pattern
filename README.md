# React + Redux + Typescript pattern

Includes example templates for:

* Module `modules/template`
  * React Component `modules/template/components/example.tsx`
  * React Component Container `modules/template/container/example.ts`
  * Redux Actions `modules/template/actions.ts`
  * Redux Reducers `modules/template/reducers.ts`

## Setup

Create the project using create-react-app:

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
