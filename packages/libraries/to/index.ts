export default <T>(resolveType: Promise<T>): Promise<[Error | undefined, T]> =>
  resolveType
    .then<[undefined, T]>((data: T) => [undefined, data])
    .catch<[Error, any]>((err: Error) => [err, undefined as any]);
