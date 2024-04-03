/**
 * @file Utility Types.
 */
import type {Add, Compare, Subtract} from "ts-arithmetic";

type Enumerate<
  End extends number,
  Start extends number = 0,
  Accumulator extends number[] = []
> =
  Accumulator["length"] extends Subtract<End, Start>
    ? Accumulator
    : Enumerate<
        End,
        Start,
        [...Accumulator, Add<Accumulator["length"], Start>]
      >;

type BigEnumerate<
  End extends number,
  Start extends number = 0,
  Fallback = number,
  // This is due to typescript limitations (cumulative type instantiation).
  DepthRemaining extends number = 120,
  Accumulator extends number[] = [],
  ExpectedLength extends number = Subtract<End, Start>,
  NewStart extends number = Add<Start, DepthRemaining>
> = ExpectedLength extends Accumulator["length"]
  ? Accumulator[number]
  : DepthRemaining extends 0
    ? Fallback
    : BigEnumerate<
        End,
        NewStart,
        Fallback,
        Subtract<DepthRemaining, 1>,
        // @ts-expect-error: TS2321 Flawed typechecking due to recursion causes false positive citing uncertainty.
        [
          ...Accumulator,
          ...Enumerate<
            // Who said you'd never end up using high school algebra in the real world.
            // Equivalent to `Gt<Subtract<End, Start>, DepthRemaining>`.
            Compare<End, NewStart> extends 1 ? NewStart : End,
            Start
          >
        ],
        ExpectedLength
      >;

// Max value is the (DepthRemaining + 1)th triangle number.
/**
 * Generate a union of number literals within a specified range.
 *
 * Inclusive of `Start`; Exclusive of `End`.
 *
 * The maximum number of union items is 7260 due to typescript limitations (cumulative type instantiation). If the range exceeds this limit, it will default to `number`.
 */
export type IntRange<
  Start extends number,
  End extends number,
  Fallback = number
> = BigEnumerate<End, Start, Fallback>;

// type o = IntRange<0, 7260>;
// const b: o = 15;
// // @ts-expect-error
// const a: o = 8000;

type UnionMaxConsume<
  Value extends number,
  End extends number,
  Index extends number = 0,
  Fallback = number,
  Result extends number = Exclude<Value, Index>
> = [Result] extends [never]
  ? {done: true; value: Value}
  : Index extends End
    ? {done: false; value: Result}
    : UnionMaxConsume<Result, End, Add<Index, 1>, Fallback>;

type BigUnionMaxConsume<
  Value extends number,
  Index extends number = 0,
  Fallback = number,
  // This is due to typescript limitations (cumulative type instantiation).
  DepthRemaining extends number = 112,
  NewIndex extends number = Add<Index, DepthRemaining>,
  Result extends {done: boolean; value: number} = UnionMaxConsume<
    Value,
    NewIndex,
    Index
  >
> = Result["done"] extends true
  ? Result["value"]
  : DepthRemaining extends 0
    ? Fallback
    : BigUnionMaxConsume<
        Result["value"],
        NewIndex,
        Fallback,
        Subtract<DepthRemaining, 1>
      >;

// Max value is the (DepthRemaining - 1)th triangle number.
/**
 * Find the greatest number in a union.
 *
 * Searches from `Start` (inclusive) incrementally until the greatest value is reached.
 *
 * The maximum search range is 6328 due to typescript limitations (cumulative type instantiation). If the range exceeds this limit, it will default to `number`.
 */
export type UnionMax<
  In extends number,
  Start extends number = 0
> = BigUnionMaxConsume<In, Start>;

// type c = Max<10 | 6328>
// const a: c = 6328;
// // @ts-expect-error
// const b: c = 10;
