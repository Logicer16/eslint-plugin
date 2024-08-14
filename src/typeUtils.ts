/**
 * @file Utility functions for interacting with types.
 */

/**
 * Check if an array's element are all of a given type.
 *
 * @param array The array of values to check.
 * @param predicate A function whose return type is a predicate which checks if an element is of the desired type.
 * @returns True if all elements pass the predicate. Otherwise, returns false.
 */
export function isArrayOfType<ArrayValue, T extends ArrayValue>(
  array: ArrayValue[],
  predicate: (
    value: ArrayValue,
    index: number,
    array: ArrayValue[]
  ) => value is T
): array is T[] {
  return array.every((value, index, array) => {
    return predicate(value, index, array);
  });
}

/**
 * Permit an array of a type or the type itself, alone.
 */
export type ArrayOrSolo<T> = T | T[];
