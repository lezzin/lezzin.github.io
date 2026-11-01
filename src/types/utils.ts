type SameKeys<T, U> =
    T extends readonly (infer TItem)[]
    ? U extends readonly (infer UItem)[]
    ? SameKeys<TItem, UItem>
    : false
    : T extends object
    ? U extends object
    ? [Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>] extends [never]
    ? false extends {
        [K in keyof T]: SameKeys<T[K], U[K & keyof U]>
    }[keyof T]
    ? false
    : true
    : false
    : false
    : true

export const withSameKeys = <Reference>() => <Candidate>(value: Candidate & (SameKeys<Reference, Candidate> extends true ? unknown : never)): Candidate => value