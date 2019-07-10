/**
 * DeepReadonly comes from the PR for conditional types on TypeScript
 * https://github.com/Microsoft/TypeScript/pull/21316
 * and are supported as of TypeScript 2.8.
 * 
 * With modifications from https://stackoverflow.com/a/49670389/1951952
 * 
 * You can wrap an interface with DeepReadonly and deep readonly properties through
 * interfaces / objects and arrays. Note that mutating functions will still be exposed
 * so you have to be careful not to use them, especially on arrays.
 */

type DeepReadonly<T> =
	T extends (infer R)[] ? DeepReadonlyArray<R> :
		T extends DeepReadonlyArray<infer R> ? T :
			T extends Function ? T :
				T extends object ? DeepReadonlyObject<T> :
					T

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>
}
