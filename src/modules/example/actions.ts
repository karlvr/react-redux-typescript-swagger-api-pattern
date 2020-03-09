import actionCreatorFactory from 'typescript-fsa'

/**
 * The action creator for this module. Note that it contains the module name.
 */
const actionCreator = actionCreatorFactory('Example')

/* An example action with an interface as its payload. */
export interface ExampleActionPayload {
	value: string
}
export const exampleAction = actionCreator<ExampleActionPayload>('EXAMPLE')

/* An example action with a primitive payload. */
export const examplePrimitiveAction = actionCreator<string>('EXAMPLE_PRIMITIVE')

/* An example action with more types that can be used to use typing with this
action elsewhere in the code.
 */
export interface ExampleWithMoreTypesActionPayload {
	value: string
}
export const exampleWithMoreTypesAction = actionCreator<ExampleWithMoreTypesActionPayload>('EXAMPLE_MORE_TYPES')
export type ExampleWithMoreTypesAction = ReturnType<typeof exampleWithMoreTypesAction>
