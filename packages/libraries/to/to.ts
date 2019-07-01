type Params<T> = Promise<T> | T | (() => T)
type Return<T> = [Error | undefined, T]

/**
 *
 * @param resolveType this promise to resolve
 */
const to = async <T>(resolveType: Params<T>): Promise<Return<T>> => {
  if (resolveType instanceof Promise) {
    return (
      resolveType
        .then<[undefined, T]>((data: T) => [undefined, data])
        // tslint:disable-next-line: no-any
        .catch<[Error, any]>((err: Error) => [err, undefined as any])
    )
  }

  if (resolveType instanceof Function) {
    return to(Promise.resolve(resolveType()))
  }

  return Promise.resolve([undefined, resolveType])
}

export default to
