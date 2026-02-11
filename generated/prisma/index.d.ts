
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model registered_master
 * 
 */
export type registered_master = $Result.DefaultSelection<Prisma.$registered_masterPayload>
/**
 * Model abstract_submission
 * 
 */
export type abstract_submission = $Result.DefaultSelection<Prisma.$abstract_submissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const registered_master_gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type registered_master_gender = (typeof registered_master_gender)[keyof typeof registered_master_gender]


export const abstract_submission_file_type: {
  PDF: 'PDF',
  DOC: 'DOC',
  DOCX: 'DOCX'
};

export type abstract_submission_file_type = (typeof abstract_submission_file_type)[keyof typeof abstract_submission_file_type]


export const abstract_submission_status: {
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  REVISION_REQUIRED: 'REVISION_REQUIRED'
};

export type abstract_submission_status = (typeof abstract_submission_status)[keyof typeof abstract_submission_status]

}

export type registered_master_gender = $Enums.registered_master_gender

export const registered_master_gender: typeof $Enums.registered_master_gender

export type abstract_submission_file_type = $Enums.abstract_submission_file_type

export const abstract_submission_file_type: typeof $Enums.abstract_submission_file_type

export type abstract_submission_status = $Enums.abstract_submission_status

export const abstract_submission_status: typeof $Enums.abstract_submission_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Registered_masters
 * const registered_masters = await prisma.registered_master.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Registered_masters
   * const registered_masters = await prisma.registered_master.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.registered_master`: Exposes CRUD operations for the **registered_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registered_masters
    * const registered_masters = await prisma.registered_master.findMany()
    * ```
    */
  get registered_master(): Prisma.registered_masterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abstract_submission`: Exposes CRUD operations for the **abstract_submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abstract_submissions
    * const abstract_submissions = await prisma.abstract_submission.findMany()
    * ```
    */
  get abstract_submission(): Prisma.abstract_submissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    registered_master: 'registered_master',
    abstract_submission: 'abstract_submission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registered_master" | "abstract_submission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      registered_master: {
        payload: Prisma.$registered_masterPayload<ExtArgs>
        fields: Prisma.registered_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registered_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registered_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          findFirst: {
            args: Prisma.registered_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registered_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          findMany: {
            args: Prisma.registered_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>[]
          }
          create: {
            args: Prisma.registered_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          createMany: {
            args: Prisma.registered_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.registered_masterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>[]
          }
          delete: {
            args: Prisma.registered_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          update: {
            args: Prisma.registered_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          deleteMany: {
            args: Prisma.registered_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registered_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.registered_masterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>[]
          }
          upsert: {
            args: Prisma.registered_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registered_masterPayload>
          }
          aggregate: {
            args: Prisma.Registered_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistered_master>
          }
          groupBy: {
            args: Prisma.registered_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Registered_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.registered_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Registered_masterCountAggregateOutputType> | number
          }
        }
      }
      abstract_submission: {
        payload: Prisma.$abstract_submissionPayload<ExtArgs>
        fields: Prisma.abstract_submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.abstract_submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.abstract_submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          findFirst: {
            args: Prisma.abstract_submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.abstract_submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          findMany: {
            args: Prisma.abstract_submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>[]
          }
          create: {
            args: Prisma.abstract_submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          createMany: {
            args: Prisma.abstract_submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.abstract_submissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>[]
          }
          delete: {
            args: Prisma.abstract_submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          update: {
            args: Prisma.abstract_submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          deleteMany: {
            args: Prisma.abstract_submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.abstract_submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.abstract_submissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>[]
          }
          upsert: {
            args: Prisma.abstract_submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abstract_submissionPayload>
          }
          aggregate: {
            args: Prisma.Abstract_submissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbstract_submission>
          }
          groupBy: {
            args: Prisma.abstract_submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Abstract_submissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.abstract_submissionCountArgs<ExtArgs>
            result: $Utils.Optional<Abstract_submissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    registered_master?: registered_masterOmit
    abstract_submission?: abstract_submissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model registered_master
   */

  export type AggregateRegistered_master = {
    _count: Registered_masterCountAggregateOutputType | null
    _avg: Registered_masterAvgAggregateOutputType | null
    _sum: Registered_masterSumAggregateOutputType | null
    _min: Registered_masterMinAggregateOutputType | null
    _max: Registered_masterMaxAggregateOutputType | null
  }

  export type Registered_masterAvgAggregateOutputType = {
    registration_id: number | null
    amount: Decimal | null
  }

  export type Registered_masterSumAggregateOutputType = {
    registration_id: bigint | null
    amount: Decimal | null
  }

  export type Registered_masterMinAggregateOutputType = {
    registration_id: bigint | null
    delegate_type: string | null
    salutation: string | null
    first_name: string | null
    last_name: string | null
    gender: $Enums.registered_master_gender | null
    affiliation: string | null
    email: string | null
    contact_no: string | null
    city: string | null
    postal_code: string | null
    category: string | null
    registration_fee_type: string | null
    amount: Decimal | null
    payment_mode: string | null
    transaction_id: string | null
    transaction_date: Date | null
    abstract_submitted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Registered_masterMaxAggregateOutputType = {
    registration_id: bigint | null
    delegate_type: string | null
    salutation: string | null
    first_name: string | null
    last_name: string | null
    gender: $Enums.registered_master_gender | null
    affiliation: string | null
    email: string | null
    contact_no: string | null
    city: string | null
    postal_code: string | null
    category: string | null
    registration_fee_type: string | null
    amount: Decimal | null
    payment_mode: string | null
    transaction_id: string | null
    transaction_date: Date | null
    abstract_submitted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Registered_masterCountAggregateOutputType = {
    registration_id: number
    delegate_type: number
    salutation: number
    first_name: number
    last_name: number
    gender: number
    affiliation: number
    email: number
    contact_no: number
    city: number
    postal_code: number
    category: number
    registration_fee_type: number
    amount: number
    payment_mode: number
    transaction_id: number
    transaction_date: number
    abstract_submitted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Registered_masterAvgAggregateInputType = {
    registration_id?: true
    amount?: true
  }

  export type Registered_masterSumAggregateInputType = {
    registration_id?: true
    amount?: true
  }

  export type Registered_masterMinAggregateInputType = {
    registration_id?: true
    delegate_type?: true
    salutation?: true
    first_name?: true
    last_name?: true
    gender?: true
    affiliation?: true
    email?: true
    contact_no?: true
    city?: true
    postal_code?: true
    category?: true
    registration_fee_type?: true
    amount?: true
    payment_mode?: true
    transaction_id?: true
    transaction_date?: true
    abstract_submitted?: true
    created_at?: true
    updated_at?: true
  }

  export type Registered_masterMaxAggregateInputType = {
    registration_id?: true
    delegate_type?: true
    salutation?: true
    first_name?: true
    last_name?: true
    gender?: true
    affiliation?: true
    email?: true
    contact_no?: true
    city?: true
    postal_code?: true
    category?: true
    registration_fee_type?: true
    amount?: true
    payment_mode?: true
    transaction_id?: true
    transaction_date?: true
    abstract_submitted?: true
    created_at?: true
    updated_at?: true
  }

  export type Registered_masterCountAggregateInputType = {
    registration_id?: true
    delegate_type?: true
    salutation?: true
    first_name?: true
    last_name?: true
    gender?: true
    affiliation?: true
    email?: true
    contact_no?: true
    city?: true
    postal_code?: true
    category?: true
    registration_fee_type?: true
    amount?: true
    payment_mode?: true
    transaction_id?: true
    transaction_date?: true
    abstract_submitted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Registered_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registered_master to aggregate.
     */
    where?: registered_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registered_masters to fetch.
     */
    orderBy?: registered_masterOrderByWithRelationInput | registered_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registered_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registered_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registered_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registered_masters
    **/
    _count?: true | Registered_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Registered_masterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Registered_masterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Registered_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Registered_masterMaxAggregateInputType
  }

  export type GetRegistered_masterAggregateType<T extends Registered_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistered_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistered_master[P]>
      : GetScalarType<T[P], AggregateRegistered_master[P]>
  }




  export type registered_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registered_masterWhereInput
    orderBy?: registered_masterOrderByWithAggregationInput | registered_masterOrderByWithAggregationInput[]
    by: Registered_masterScalarFieldEnum[] | Registered_masterScalarFieldEnum
    having?: registered_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Registered_masterCountAggregateInputType | true
    _avg?: Registered_masterAvgAggregateInputType
    _sum?: Registered_masterSumAggregateInputType
    _min?: Registered_masterMinAggregateInputType
    _max?: Registered_masterMaxAggregateInputType
  }

  export type Registered_masterGroupByOutputType = {
    registration_id: bigint
    delegate_type: string
    salutation: string | null
    first_name: string
    last_name: string
    gender: $Enums.registered_master_gender | null
    affiliation: string | null
    email: string
    contact_no: string | null
    city: string | null
    postal_code: string | null
    category: string | null
    registration_fee_type: string | null
    amount: Decimal
    payment_mode: string | null
    transaction_id: string | null
    transaction_date: Date | null
    abstract_submitted: boolean
    created_at: Date
    updated_at: Date
    _count: Registered_masterCountAggregateOutputType | null
    _avg: Registered_masterAvgAggregateOutputType | null
    _sum: Registered_masterSumAggregateOutputType | null
    _min: Registered_masterMinAggregateOutputType | null
    _max: Registered_masterMaxAggregateOutputType | null
  }

  type GetRegistered_masterGroupByPayload<T extends registered_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Registered_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Registered_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Registered_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Registered_masterGroupByOutputType[P]>
        }
      >
    >


  export type registered_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registration_id?: boolean
    delegate_type?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    gender?: boolean
    affiliation?: boolean
    email?: boolean
    contact_no?: boolean
    city?: boolean
    postal_code?: boolean
    category?: boolean
    registration_fee_type?: boolean
    amount?: boolean
    payment_mode?: boolean
    transaction_id?: boolean
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
    abstract_submission?: boolean | registered_master$abstract_submissionArgs<ExtArgs>
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registration_id?: boolean
    delegate_type?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    gender?: boolean
    affiliation?: boolean
    email?: boolean
    contact_no?: boolean
    city?: boolean
    postal_code?: boolean
    category?: boolean
    registration_fee_type?: boolean
    amount?: boolean
    payment_mode?: boolean
    transaction_id?: boolean
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registration_id?: boolean
    delegate_type?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    gender?: boolean
    affiliation?: boolean
    email?: boolean
    contact_no?: boolean
    city?: boolean
    postal_code?: boolean
    category?: boolean
    registration_fee_type?: boolean
    amount?: boolean
    payment_mode?: boolean
    transaction_id?: boolean
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectScalar = {
    registration_id?: boolean
    delegate_type?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    gender?: boolean
    affiliation?: boolean
    email?: boolean
    contact_no?: boolean
    city?: boolean
    postal_code?: boolean
    category?: boolean
    registration_fee_type?: boolean
    amount?: boolean
    payment_mode?: boolean
    transaction_id?: boolean
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type registered_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"registration_id" | "delegate_type" | "salutation" | "first_name" | "last_name" | "gender" | "affiliation" | "email" | "contact_no" | "city" | "postal_code" | "category" | "registration_fee_type" | "amount" | "payment_mode" | "transaction_id" | "transaction_date" | "abstract_submitted" | "created_at" | "updated_at", ExtArgs["result"]["registered_master"]>
  export type registered_masterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abstract_submission?: boolean | registered_master$abstract_submissionArgs<ExtArgs>
  }
  export type registered_masterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type registered_masterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $registered_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registered_master"
    objects: {
      abstract_submission: Prisma.$abstract_submissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      registration_id: bigint
      delegate_type: string
      salutation: string | null
      first_name: string
      last_name: string
      gender: $Enums.registered_master_gender | null
      affiliation: string | null
      email: string
      contact_no: string | null
      city: string | null
      postal_code: string | null
      category: string | null
      registration_fee_type: string | null
      amount: Prisma.Decimal
      payment_mode: string | null
      transaction_id: string | null
      transaction_date: Date | null
      abstract_submitted: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["registered_master"]>
    composites: {}
  }

  type registered_masterGetPayload<S extends boolean | null | undefined | registered_masterDefaultArgs> = $Result.GetResult<Prisma.$registered_masterPayload, S>

  type registered_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registered_masterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Registered_masterCountAggregateInputType | true
    }

  export interface registered_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registered_master'], meta: { name: 'registered_master' } }
    /**
     * Find zero or one Registered_master that matches the filter.
     * @param {registered_masterFindUniqueArgs} args - Arguments to find a Registered_master
     * @example
     * // Get one Registered_master
     * const registered_master = await prisma.registered_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registered_masterFindUniqueArgs>(args: SelectSubset<T, registered_masterFindUniqueArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registered_master that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registered_masterFindUniqueOrThrowArgs} args - Arguments to find a Registered_master
     * @example
     * // Get one Registered_master
     * const registered_master = await prisma.registered_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registered_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, registered_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registered_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterFindFirstArgs} args - Arguments to find a Registered_master
     * @example
     * // Get one Registered_master
     * const registered_master = await prisma.registered_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registered_masterFindFirstArgs>(args?: SelectSubset<T, registered_masterFindFirstArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registered_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterFindFirstOrThrowArgs} args - Arguments to find a Registered_master
     * @example
     * // Get one Registered_master
     * const registered_master = await prisma.registered_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registered_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, registered_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registered_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registered_masters
     * const registered_masters = await prisma.registered_master.findMany()
     * 
     * // Get first 10 Registered_masters
     * const registered_masters = await prisma.registered_master.findMany({ take: 10 })
     * 
     * // Only select the `registration_id`
     * const registered_masterWithRegistration_idOnly = await prisma.registered_master.findMany({ select: { registration_id: true } })
     * 
     */
    findMany<T extends registered_masterFindManyArgs>(args?: SelectSubset<T, registered_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registered_master.
     * @param {registered_masterCreateArgs} args - Arguments to create a Registered_master.
     * @example
     * // Create one Registered_master
     * const Registered_master = await prisma.registered_master.create({
     *   data: {
     *     // ... data to create a Registered_master
     *   }
     * })
     * 
     */
    create<T extends registered_masterCreateArgs>(args: SelectSubset<T, registered_masterCreateArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registered_masters.
     * @param {registered_masterCreateManyArgs} args - Arguments to create many Registered_masters.
     * @example
     * // Create many Registered_masters
     * const registered_master = await prisma.registered_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registered_masterCreateManyArgs>(args?: SelectSubset<T, registered_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registered_masters and returns the data saved in the database.
     * @param {registered_masterCreateManyAndReturnArgs} args - Arguments to create many Registered_masters.
     * @example
     * // Create many Registered_masters
     * const registered_master = await prisma.registered_master.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registered_masters and only return the `registration_id`
     * const registered_masterWithRegistration_idOnly = await prisma.registered_master.createManyAndReturn({
     *   select: { registration_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends registered_masterCreateManyAndReturnArgs>(args?: SelectSubset<T, registered_masterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registered_master.
     * @param {registered_masterDeleteArgs} args - Arguments to delete one Registered_master.
     * @example
     * // Delete one Registered_master
     * const Registered_master = await prisma.registered_master.delete({
     *   where: {
     *     // ... filter to delete one Registered_master
     *   }
     * })
     * 
     */
    delete<T extends registered_masterDeleteArgs>(args: SelectSubset<T, registered_masterDeleteArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registered_master.
     * @param {registered_masterUpdateArgs} args - Arguments to update one Registered_master.
     * @example
     * // Update one Registered_master
     * const registered_master = await prisma.registered_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registered_masterUpdateArgs>(args: SelectSubset<T, registered_masterUpdateArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registered_masters.
     * @param {registered_masterDeleteManyArgs} args - Arguments to filter Registered_masters to delete.
     * @example
     * // Delete a few Registered_masters
     * const { count } = await prisma.registered_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registered_masterDeleteManyArgs>(args?: SelectSubset<T, registered_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registered_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registered_masters
     * const registered_master = await prisma.registered_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registered_masterUpdateManyArgs>(args: SelectSubset<T, registered_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registered_masters and returns the data updated in the database.
     * @param {registered_masterUpdateManyAndReturnArgs} args - Arguments to update many Registered_masters.
     * @example
     * // Update many Registered_masters
     * const registered_master = await prisma.registered_master.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registered_masters and only return the `registration_id`
     * const registered_masterWithRegistration_idOnly = await prisma.registered_master.updateManyAndReturn({
     *   select: { registration_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends registered_masterUpdateManyAndReturnArgs>(args: SelectSubset<T, registered_masterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registered_master.
     * @param {registered_masterUpsertArgs} args - Arguments to update or create a Registered_master.
     * @example
     * // Update or create a Registered_master
     * const registered_master = await prisma.registered_master.upsert({
     *   create: {
     *     // ... data to create a Registered_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registered_master we want to update
     *   }
     * })
     */
    upsert<T extends registered_masterUpsertArgs>(args: SelectSubset<T, registered_masterUpsertArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registered_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterCountArgs} args - Arguments to filter Registered_masters to count.
     * @example
     * // Count the number of Registered_masters
     * const count = await prisma.registered_master.count({
     *   where: {
     *     // ... the filter for the Registered_masters we want to count
     *   }
     * })
    **/
    count<T extends registered_masterCountArgs>(
      args?: Subset<T, registered_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Registered_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registered_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registered_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Registered_masterAggregateArgs>(args: Subset<T, Registered_masterAggregateArgs>): Prisma.PrismaPromise<GetRegistered_masterAggregateType<T>>

    /**
     * Group by Registered_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registered_masterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends registered_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registered_masterGroupByArgs['orderBy'] }
        : { orderBy?: registered_masterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, registered_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistered_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registered_master model
   */
  readonly fields: registered_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registered_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registered_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abstract_submission<T extends registered_master$abstract_submissionArgs<ExtArgs> = {}>(args?: Subset<T, registered_master$abstract_submissionArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the registered_master model
   */
  interface registered_masterFieldRefs {
    readonly registration_id: FieldRef<"registered_master", 'BigInt'>
    readonly delegate_type: FieldRef<"registered_master", 'String'>
    readonly salutation: FieldRef<"registered_master", 'String'>
    readonly first_name: FieldRef<"registered_master", 'String'>
    readonly last_name: FieldRef<"registered_master", 'String'>
    readonly gender: FieldRef<"registered_master", 'registered_master_gender'>
    readonly affiliation: FieldRef<"registered_master", 'String'>
    readonly email: FieldRef<"registered_master", 'String'>
    readonly contact_no: FieldRef<"registered_master", 'String'>
    readonly city: FieldRef<"registered_master", 'String'>
    readonly postal_code: FieldRef<"registered_master", 'String'>
    readonly category: FieldRef<"registered_master", 'String'>
    readonly registration_fee_type: FieldRef<"registered_master", 'String'>
    readonly amount: FieldRef<"registered_master", 'Decimal'>
    readonly payment_mode: FieldRef<"registered_master", 'String'>
    readonly transaction_id: FieldRef<"registered_master", 'String'>
    readonly transaction_date: FieldRef<"registered_master", 'DateTime'>
    readonly abstract_submitted: FieldRef<"registered_master", 'Boolean'>
    readonly created_at: FieldRef<"registered_master", 'DateTime'>
    readonly updated_at: FieldRef<"registered_master", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * registered_master findUnique
   */
  export type registered_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter, which registered_master to fetch.
     */
    where: registered_masterWhereUniqueInput
  }

  /**
   * registered_master findUniqueOrThrow
   */
  export type registered_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter, which registered_master to fetch.
     */
    where: registered_masterWhereUniqueInput
  }

  /**
   * registered_master findFirst
   */
  export type registered_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter, which registered_master to fetch.
     */
    where?: registered_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registered_masters to fetch.
     */
    orderBy?: registered_masterOrderByWithRelationInput | registered_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registered_masters.
     */
    cursor?: registered_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registered_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registered_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registered_masters.
     */
    distinct?: Registered_masterScalarFieldEnum | Registered_masterScalarFieldEnum[]
  }

  /**
   * registered_master findFirstOrThrow
   */
  export type registered_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter, which registered_master to fetch.
     */
    where?: registered_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registered_masters to fetch.
     */
    orderBy?: registered_masterOrderByWithRelationInput | registered_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registered_masters.
     */
    cursor?: registered_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registered_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registered_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registered_masters.
     */
    distinct?: Registered_masterScalarFieldEnum | Registered_masterScalarFieldEnum[]
  }

  /**
   * registered_master findMany
   */
  export type registered_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter, which registered_masters to fetch.
     */
    where?: registered_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registered_masters to fetch.
     */
    orderBy?: registered_masterOrderByWithRelationInput | registered_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registered_masters.
     */
    cursor?: registered_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registered_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registered_masters.
     */
    skip?: number
    distinct?: Registered_masterScalarFieldEnum | Registered_masterScalarFieldEnum[]
  }

  /**
   * registered_master create
   */
  export type registered_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * The data needed to create a registered_master.
     */
    data: XOR<registered_masterCreateInput, registered_masterUncheckedCreateInput>
  }

  /**
   * registered_master createMany
   */
  export type registered_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registered_masters.
     */
    data: registered_masterCreateManyInput | registered_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registered_master createManyAndReturn
   */
  export type registered_masterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * The data used to create many registered_masters.
     */
    data: registered_masterCreateManyInput | registered_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registered_master update
   */
  export type registered_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * The data needed to update a registered_master.
     */
    data: XOR<registered_masterUpdateInput, registered_masterUncheckedUpdateInput>
    /**
     * Choose, which registered_master to update.
     */
    where: registered_masterWhereUniqueInput
  }

  /**
   * registered_master updateMany
   */
  export type registered_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registered_masters.
     */
    data: XOR<registered_masterUpdateManyMutationInput, registered_masterUncheckedUpdateManyInput>
    /**
     * Filter which registered_masters to update
     */
    where?: registered_masterWhereInput
    /**
     * Limit how many registered_masters to update.
     */
    limit?: number
  }

  /**
   * registered_master updateManyAndReturn
   */
  export type registered_masterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * The data used to update registered_masters.
     */
    data: XOR<registered_masterUpdateManyMutationInput, registered_masterUncheckedUpdateManyInput>
    /**
     * Filter which registered_masters to update
     */
    where?: registered_masterWhereInput
    /**
     * Limit how many registered_masters to update.
     */
    limit?: number
  }

  /**
   * registered_master upsert
   */
  export type registered_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * The filter to search for the registered_master to update in case it exists.
     */
    where: registered_masterWhereUniqueInput
    /**
     * In case the registered_master found by the `where` argument doesn't exist, create a new registered_master with this data.
     */
    create: XOR<registered_masterCreateInput, registered_masterUncheckedCreateInput>
    /**
     * In case the registered_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registered_masterUpdateInput, registered_masterUncheckedUpdateInput>
  }

  /**
   * registered_master delete
   */
  export type registered_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
    /**
     * Filter which registered_master to delete.
     */
    where: registered_masterWhereUniqueInput
  }

  /**
   * registered_master deleteMany
   */
  export type registered_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registered_masters to delete
     */
    where?: registered_masterWhereInput
    /**
     * Limit how many registered_masters to delete.
     */
    limit?: number
  }

  /**
   * registered_master.abstract_submission
   */
  export type registered_master$abstract_submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    where?: abstract_submissionWhereInput
  }

  /**
   * registered_master without action
   */
  export type registered_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registered_master
     */
    select?: registered_masterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registered_master
     */
    omit?: registered_masterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registered_masterInclude<ExtArgs> | null
  }


  /**
   * Model abstract_submission
   */

  export type AggregateAbstract_submission = {
    _count: Abstract_submissionCountAggregateOutputType | null
    _avg: Abstract_submissionAvgAggregateOutputType | null
    _sum: Abstract_submissionSumAggregateOutputType | null
    _min: Abstract_submissionMinAggregateOutputType | null
    _max: Abstract_submissionMaxAggregateOutputType | null
  }

  export type Abstract_submissionAvgAggregateOutputType = {
    abstract_id: number | null
    registration_id: number | null
    file_size_kb: number | null
  }

  export type Abstract_submissionSumAggregateOutputType = {
    abstract_id: bigint | null
    registration_id: bigint | null
    file_size_kb: number | null
  }

  export type Abstract_submissionMinAggregateOutputType = {
    abstract_id: bigint | null
    registration_id: bigint | null
    salutation: string | null
    first_name: string | null
    last_name: string | null
    designation: string | null
    abstract_title: string | null
    abstract_category: string | null
    keywords: string | null
    file_name: string | null
    file_type: $Enums.abstract_submission_file_type | null
    file_size_kb: number | null
    abstract_file: Bytes | null
    submission_date: Date | null
    status: $Enums.abstract_submission_status | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Abstract_submissionMaxAggregateOutputType = {
    abstract_id: bigint | null
    registration_id: bigint | null
    salutation: string | null
    first_name: string | null
    last_name: string | null
    designation: string | null
    abstract_title: string | null
    abstract_category: string | null
    keywords: string | null
    file_name: string | null
    file_type: $Enums.abstract_submission_file_type | null
    file_size_kb: number | null
    abstract_file: Bytes | null
    submission_date: Date | null
    status: $Enums.abstract_submission_status | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Abstract_submissionCountAggregateOutputType = {
    abstract_id: number
    registration_id: number
    salutation: number
    first_name: number
    last_name: number
    designation: number
    abstract_title: number
    abstract_category: number
    keywords: number
    file_name: number
    file_type: number
    file_size_kb: number
    abstract_file: number
    submission_date: number
    status: number
    remarks: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Abstract_submissionAvgAggregateInputType = {
    abstract_id?: true
    registration_id?: true
    file_size_kb?: true
  }

  export type Abstract_submissionSumAggregateInputType = {
    abstract_id?: true
    registration_id?: true
    file_size_kb?: true
  }

  export type Abstract_submissionMinAggregateInputType = {
    abstract_id?: true
    registration_id?: true
    salutation?: true
    first_name?: true
    last_name?: true
    designation?: true
    abstract_title?: true
    abstract_category?: true
    keywords?: true
    file_name?: true
    file_type?: true
    file_size_kb?: true
    abstract_file?: true
    submission_date?: true
    status?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type Abstract_submissionMaxAggregateInputType = {
    abstract_id?: true
    registration_id?: true
    salutation?: true
    first_name?: true
    last_name?: true
    designation?: true
    abstract_title?: true
    abstract_category?: true
    keywords?: true
    file_name?: true
    file_type?: true
    file_size_kb?: true
    abstract_file?: true
    submission_date?: true
    status?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type Abstract_submissionCountAggregateInputType = {
    abstract_id?: true
    registration_id?: true
    salutation?: true
    first_name?: true
    last_name?: true
    designation?: true
    abstract_title?: true
    abstract_category?: true
    keywords?: true
    file_name?: true
    file_type?: true
    file_size_kb?: true
    abstract_file?: true
    submission_date?: true
    status?: true
    remarks?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Abstract_submissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abstract_submission to aggregate.
     */
    where?: abstract_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abstract_submissions to fetch.
     */
    orderBy?: abstract_submissionOrderByWithRelationInput | abstract_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: abstract_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abstract_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abstract_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned abstract_submissions
    **/
    _count?: true | Abstract_submissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Abstract_submissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Abstract_submissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Abstract_submissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Abstract_submissionMaxAggregateInputType
  }

  export type GetAbstract_submissionAggregateType<T extends Abstract_submissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAbstract_submission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbstract_submission[P]>
      : GetScalarType<T[P], AggregateAbstract_submission[P]>
  }




  export type abstract_submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: abstract_submissionWhereInput
    orderBy?: abstract_submissionOrderByWithAggregationInput | abstract_submissionOrderByWithAggregationInput[]
    by: Abstract_submissionScalarFieldEnum[] | Abstract_submissionScalarFieldEnum
    having?: abstract_submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Abstract_submissionCountAggregateInputType | true
    _avg?: Abstract_submissionAvgAggregateInputType
    _sum?: Abstract_submissionSumAggregateInputType
    _min?: Abstract_submissionMinAggregateInputType
    _max?: Abstract_submissionMaxAggregateInputType
  }

  export type Abstract_submissionGroupByOutputType = {
    abstract_id: bigint
    registration_id: bigint
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category: string | null
    keywords: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date: Date
    status: $Enums.abstract_submission_status
    remarks: string | null
    created_at: Date
    updated_at: Date
    _count: Abstract_submissionCountAggregateOutputType | null
    _avg: Abstract_submissionAvgAggregateOutputType | null
    _sum: Abstract_submissionSumAggregateOutputType | null
    _min: Abstract_submissionMinAggregateOutputType | null
    _max: Abstract_submissionMaxAggregateOutputType | null
  }

  type GetAbstract_submissionGroupByPayload<T extends abstract_submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Abstract_submissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Abstract_submissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Abstract_submissionGroupByOutputType[P]>
            : GetScalarType<T[P], Abstract_submissionGroupByOutputType[P]>
        }
      >
    >


  export type abstract_submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abstract_id?: boolean
    registration_id?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    designation?: boolean
    abstract_title?: boolean
    abstract_category?: boolean
    keywords?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size_kb?: boolean
    abstract_file?: boolean
    submission_date?: boolean
    status?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abstract_submission"]>

  export type abstract_submissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abstract_id?: boolean
    registration_id?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    designation?: boolean
    abstract_title?: boolean
    abstract_category?: boolean
    keywords?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size_kb?: boolean
    abstract_file?: boolean
    submission_date?: boolean
    status?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abstract_submission"]>

  export type abstract_submissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    abstract_id?: boolean
    registration_id?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    designation?: boolean
    abstract_title?: boolean
    abstract_category?: boolean
    keywords?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size_kb?: boolean
    abstract_file?: boolean
    submission_date?: boolean
    status?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abstract_submission"]>

  export type abstract_submissionSelectScalar = {
    abstract_id?: boolean
    registration_id?: boolean
    salutation?: boolean
    first_name?: boolean
    last_name?: boolean
    designation?: boolean
    abstract_title?: boolean
    abstract_category?: boolean
    keywords?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size_kb?: boolean
    abstract_file?: boolean
    submission_date?: boolean
    status?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type abstract_submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"abstract_id" | "registration_id" | "salutation" | "first_name" | "last_name" | "designation" | "abstract_title" | "abstract_category" | "keywords" | "file_name" | "file_type" | "file_size_kb" | "abstract_file" | "submission_date" | "status" | "remarks" | "created_at" | "updated_at", ExtArgs["result"]["abstract_submission"]>
  export type abstract_submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }
  export type abstract_submissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }
  export type abstract_submissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
  }

  export type $abstract_submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "abstract_submission"
    objects: {
      registered_master: Prisma.$registered_masterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      abstract_id: bigint
      registration_id: bigint
      salutation: string
      first_name: string
      last_name: string
      designation: string
      abstract_title: string
      abstract_category: string | null
      keywords: string | null
      file_name: string
      file_type: $Enums.abstract_submission_file_type
      file_size_kb: number
      abstract_file: Prisma.Bytes
      submission_date: Date
      status: $Enums.abstract_submission_status
      remarks: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["abstract_submission"]>
    composites: {}
  }

  type abstract_submissionGetPayload<S extends boolean | null | undefined | abstract_submissionDefaultArgs> = $Result.GetResult<Prisma.$abstract_submissionPayload, S>

  type abstract_submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<abstract_submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Abstract_submissionCountAggregateInputType | true
    }

  export interface abstract_submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['abstract_submission'], meta: { name: 'abstract_submission' } }
    /**
     * Find zero or one Abstract_submission that matches the filter.
     * @param {abstract_submissionFindUniqueArgs} args - Arguments to find a Abstract_submission
     * @example
     * // Get one Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends abstract_submissionFindUniqueArgs>(args: SelectSubset<T, abstract_submissionFindUniqueArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Abstract_submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {abstract_submissionFindUniqueOrThrowArgs} args - Arguments to find a Abstract_submission
     * @example
     * // Get one Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends abstract_submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, abstract_submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abstract_submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionFindFirstArgs} args - Arguments to find a Abstract_submission
     * @example
     * // Get one Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends abstract_submissionFindFirstArgs>(args?: SelectSubset<T, abstract_submissionFindFirstArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abstract_submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionFindFirstOrThrowArgs} args - Arguments to find a Abstract_submission
     * @example
     * // Get one Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends abstract_submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, abstract_submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abstract_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abstract_submissions
     * const abstract_submissions = await prisma.abstract_submission.findMany()
     * 
     * // Get first 10 Abstract_submissions
     * const abstract_submissions = await prisma.abstract_submission.findMany({ take: 10 })
     * 
     * // Only select the `abstract_id`
     * const abstract_submissionWithAbstract_idOnly = await prisma.abstract_submission.findMany({ select: { abstract_id: true } })
     * 
     */
    findMany<T extends abstract_submissionFindManyArgs>(args?: SelectSubset<T, abstract_submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Abstract_submission.
     * @param {abstract_submissionCreateArgs} args - Arguments to create a Abstract_submission.
     * @example
     * // Create one Abstract_submission
     * const Abstract_submission = await prisma.abstract_submission.create({
     *   data: {
     *     // ... data to create a Abstract_submission
     *   }
     * })
     * 
     */
    create<T extends abstract_submissionCreateArgs>(args: SelectSubset<T, abstract_submissionCreateArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abstract_submissions.
     * @param {abstract_submissionCreateManyArgs} args - Arguments to create many Abstract_submissions.
     * @example
     * // Create many Abstract_submissions
     * const abstract_submission = await prisma.abstract_submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends abstract_submissionCreateManyArgs>(args?: SelectSubset<T, abstract_submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abstract_submissions and returns the data saved in the database.
     * @param {abstract_submissionCreateManyAndReturnArgs} args - Arguments to create many Abstract_submissions.
     * @example
     * // Create many Abstract_submissions
     * const abstract_submission = await prisma.abstract_submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abstract_submissions and only return the `abstract_id`
     * const abstract_submissionWithAbstract_idOnly = await prisma.abstract_submission.createManyAndReturn({
     *   select: { abstract_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends abstract_submissionCreateManyAndReturnArgs>(args?: SelectSubset<T, abstract_submissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Abstract_submission.
     * @param {abstract_submissionDeleteArgs} args - Arguments to delete one Abstract_submission.
     * @example
     * // Delete one Abstract_submission
     * const Abstract_submission = await prisma.abstract_submission.delete({
     *   where: {
     *     // ... filter to delete one Abstract_submission
     *   }
     * })
     * 
     */
    delete<T extends abstract_submissionDeleteArgs>(args: SelectSubset<T, abstract_submissionDeleteArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Abstract_submission.
     * @param {abstract_submissionUpdateArgs} args - Arguments to update one Abstract_submission.
     * @example
     * // Update one Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends abstract_submissionUpdateArgs>(args: SelectSubset<T, abstract_submissionUpdateArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abstract_submissions.
     * @param {abstract_submissionDeleteManyArgs} args - Arguments to filter Abstract_submissions to delete.
     * @example
     * // Delete a few Abstract_submissions
     * const { count } = await prisma.abstract_submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends abstract_submissionDeleteManyArgs>(args?: SelectSubset<T, abstract_submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abstract_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abstract_submissions
     * const abstract_submission = await prisma.abstract_submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends abstract_submissionUpdateManyArgs>(args: SelectSubset<T, abstract_submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abstract_submissions and returns the data updated in the database.
     * @param {abstract_submissionUpdateManyAndReturnArgs} args - Arguments to update many Abstract_submissions.
     * @example
     * // Update many Abstract_submissions
     * const abstract_submission = await prisma.abstract_submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abstract_submissions and only return the `abstract_id`
     * const abstract_submissionWithAbstract_idOnly = await prisma.abstract_submission.updateManyAndReturn({
     *   select: { abstract_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends abstract_submissionUpdateManyAndReturnArgs>(args: SelectSubset<T, abstract_submissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Abstract_submission.
     * @param {abstract_submissionUpsertArgs} args - Arguments to update or create a Abstract_submission.
     * @example
     * // Update or create a Abstract_submission
     * const abstract_submission = await prisma.abstract_submission.upsert({
     *   create: {
     *     // ... data to create a Abstract_submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abstract_submission we want to update
     *   }
     * })
     */
    upsert<T extends abstract_submissionUpsertArgs>(args: SelectSubset<T, abstract_submissionUpsertArgs<ExtArgs>>): Prisma__abstract_submissionClient<$Result.GetResult<Prisma.$abstract_submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abstract_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionCountArgs} args - Arguments to filter Abstract_submissions to count.
     * @example
     * // Count the number of Abstract_submissions
     * const count = await prisma.abstract_submission.count({
     *   where: {
     *     // ... the filter for the Abstract_submissions we want to count
     *   }
     * })
    **/
    count<T extends abstract_submissionCountArgs>(
      args?: Subset<T, abstract_submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Abstract_submissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abstract_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Abstract_submissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Abstract_submissionAggregateArgs>(args: Subset<T, Abstract_submissionAggregateArgs>): Prisma.PrismaPromise<GetAbstract_submissionAggregateType<T>>

    /**
     * Group by Abstract_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abstract_submissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends abstract_submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: abstract_submissionGroupByArgs['orderBy'] }
        : { orderBy?: abstract_submissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, abstract_submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbstract_submissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the abstract_submission model
   */
  readonly fields: abstract_submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for abstract_submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__abstract_submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registered_master<T extends registered_masterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, registered_masterDefaultArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the abstract_submission model
   */
  interface abstract_submissionFieldRefs {
    readonly abstract_id: FieldRef<"abstract_submission", 'BigInt'>
    readonly registration_id: FieldRef<"abstract_submission", 'BigInt'>
    readonly salutation: FieldRef<"abstract_submission", 'String'>
    readonly first_name: FieldRef<"abstract_submission", 'String'>
    readonly last_name: FieldRef<"abstract_submission", 'String'>
    readonly designation: FieldRef<"abstract_submission", 'String'>
    readonly abstract_title: FieldRef<"abstract_submission", 'String'>
    readonly abstract_category: FieldRef<"abstract_submission", 'String'>
    readonly keywords: FieldRef<"abstract_submission", 'String'>
    readonly file_name: FieldRef<"abstract_submission", 'String'>
    readonly file_type: FieldRef<"abstract_submission", 'abstract_submission_file_type'>
    readonly file_size_kb: FieldRef<"abstract_submission", 'Int'>
    readonly abstract_file: FieldRef<"abstract_submission", 'Bytes'>
    readonly submission_date: FieldRef<"abstract_submission", 'DateTime'>
    readonly status: FieldRef<"abstract_submission", 'abstract_submission_status'>
    readonly remarks: FieldRef<"abstract_submission", 'String'>
    readonly created_at: FieldRef<"abstract_submission", 'DateTime'>
    readonly updated_at: FieldRef<"abstract_submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * abstract_submission findUnique
   */
  export type abstract_submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter, which abstract_submission to fetch.
     */
    where: abstract_submissionWhereUniqueInput
  }

  /**
   * abstract_submission findUniqueOrThrow
   */
  export type abstract_submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter, which abstract_submission to fetch.
     */
    where: abstract_submissionWhereUniqueInput
  }

  /**
   * abstract_submission findFirst
   */
  export type abstract_submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter, which abstract_submission to fetch.
     */
    where?: abstract_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abstract_submissions to fetch.
     */
    orderBy?: abstract_submissionOrderByWithRelationInput | abstract_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abstract_submissions.
     */
    cursor?: abstract_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abstract_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abstract_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abstract_submissions.
     */
    distinct?: Abstract_submissionScalarFieldEnum | Abstract_submissionScalarFieldEnum[]
  }

  /**
   * abstract_submission findFirstOrThrow
   */
  export type abstract_submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter, which abstract_submission to fetch.
     */
    where?: abstract_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abstract_submissions to fetch.
     */
    orderBy?: abstract_submissionOrderByWithRelationInput | abstract_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abstract_submissions.
     */
    cursor?: abstract_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abstract_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abstract_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abstract_submissions.
     */
    distinct?: Abstract_submissionScalarFieldEnum | Abstract_submissionScalarFieldEnum[]
  }

  /**
   * abstract_submission findMany
   */
  export type abstract_submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter, which abstract_submissions to fetch.
     */
    where?: abstract_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abstract_submissions to fetch.
     */
    orderBy?: abstract_submissionOrderByWithRelationInput | abstract_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing abstract_submissions.
     */
    cursor?: abstract_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abstract_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abstract_submissions.
     */
    skip?: number
    distinct?: Abstract_submissionScalarFieldEnum | Abstract_submissionScalarFieldEnum[]
  }

  /**
   * abstract_submission create
   */
  export type abstract_submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a abstract_submission.
     */
    data: XOR<abstract_submissionCreateInput, abstract_submissionUncheckedCreateInput>
  }

  /**
   * abstract_submission createMany
   */
  export type abstract_submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many abstract_submissions.
     */
    data: abstract_submissionCreateManyInput | abstract_submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * abstract_submission createManyAndReturn
   */
  export type abstract_submissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * The data used to create many abstract_submissions.
     */
    data: abstract_submissionCreateManyInput | abstract_submissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * abstract_submission update
   */
  export type abstract_submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a abstract_submission.
     */
    data: XOR<abstract_submissionUpdateInput, abstract_submissionUncheckedUpdateInput>
    /**
     * Choose, which abstract_submission to update.
     */
    where: abstract_submissionWhereUniqueInput
  }

  /**
   * abstract_submission updateMany
   */
  export type abstract_submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update abstract_submissions.
     */
    data: XOR<abstract_submissionUpdateManyMutationInput, abstract_submissionUncheckedUpdateManyInput>
    /**
     * Filter which abstract_submissions to update
     */
    where?: abstract_submissionWhereInput
    /**
     * Limit how many abstract_submissions to update.
     */
    limit?: number
  }

  /**
   * abstract_submission updateManyAndReturn
   */
  export type abstract_submissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * The data used to update abstract_submissions.
     */
    data: XOR<abstract_submissionUpdateManyMutationInput, abstract_submissionUncheckedUpdateManyInput>
    /**
     * Filter which abstract_submissions to update
     */
    where?: abstract_submissionWhereInput
    /**
     * Limit how many abstract_submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * abstract_submission upsert
   */
  export type abstract_submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the abstract_submission to update in case it exists.
     */
    where: abstract_submissionWhereUniqueInput
    /**
     * In case the abstract_submission found by the `where` argument doesn't exist, create a new abstract_submission with this data.
     */
    create: XOR<abstract_submissionCreateInput, abstract_submissionUncheckedCreateInput>
    /**
     * In case the abstract_submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<abstract_submissionUpdateInput, abstract_submissionUncheckedUpdateInput>
  }

  /**
   * abstract_submission delete
   */
  export type abstract_submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
    /**
     * Filter which abstract_submission to delete.
     */
    where: abstract_submissionWhereUniqueInput
  }

  /**
   * abstract_submission deleteMany
   */
  export type abstract_submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abstract_submissions to delete
     */
    where?: abstract_submissionWhereInput
    /**
     * Limit how many abstract_submissions to delete.
     */
    limit?: number
  }

  /**
   * abstract_submission without action
   */
  export type abstract_submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abstract_submission
     */
    select?: abstract_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abstract_submission
     */
    omit?: abstract_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abstract_submissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Registered_masterScalarFieldEnum: {
    registration_id: 'registration_id',
    delegate_type: 'delegate_type',
    salutation: 'salutation',
    first_name: 'first_name',
    last_name: 'last_name',
    gender: 'gender',
    affiliation: 'affiliation',
    email: 'email',
    contact_no: 'contact_no',
    city: 'city',
    postal_code: 'postal_code',
    category: 'category',
    registration_fee_type: 'registration_fee_type',
    amount: 'amount',
    payment_mode: 'payment_mode',
    transaction_id: 'transaction_id',
    transaction_date: 'transaction_date',
    abstract_submitted: 'abstract_submitted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Registered_masterScalarFieldEnum = (typeof Registered_masterScalarFieldEnum)[keyof typeof Registered_masterScalarFieldEnum]


  export const Abstract_submissionScalarFieldEnum: {
    abstract_id: 'abstract_id',
    registration_id: 'registration_id',
    salutation: 'salutation',
    first_name: 'first_name',
    last_name: 'last_name',
    designation: 'designation',
    abstract_title: 'abstract_title',
    abstract_category: 'abstract_category',
    keywords: 'keywords',
    file_name: 'file_name',
    file_type: 'file_type',
    file_size_kb: 'file_size_kb',
    abstract_file: 'abstract_file',
    submission_date: 'submission_date',
    status: 'status',
    remarks: 'remarks',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Abstract_submissionScalarFieldEnum = (typeof Abstract_submissionScalarFieldEnum)[keyof typeof Abstract_submissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'registered_master_gender'
   */
  export type Enumregistered_master_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'registered_master_gender'>
    


  /**
   * Reference to a field of type 'registered_master_gender[]'
   */
  export type ListEnumregistered_master_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'registered_master_gender[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'abstract_submission_file_type'
   */
  export type Enumabstract_submission_file_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'abstract_submission_file_type'>
    


  /**
   * Reference to a field of type 'abstract_submission_file_type[]'
   */
  export type ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'abstract_submission_file_type[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'abstract_submission_status'
   */
  export type Enumabstract_submission_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'abstract_submission_status'>
    


  /**
   * Reference to a field of type 'abstract_submission_status[]'
   */
  export type ListEnumabstract_submission_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'abstract_submission_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type registered_masterWhereInput = {
    AND?: registered_masterWhereInput | registered_masterWhereInput[]
    OR?: registered_masterWhereInput[]
    NOT?: registered_masterWhereInput | registered_masterWhereInput[]
    registration_id?: BigIntFilter<"registered_master"> | bigint | number
    delegate_type?: StringFilter<"registered_master"> | string
    salutation?: StringNullableFilter<"registered_master"> | string | null
    first_name?: StringFilter<"registered_master"> | string
    last_name?: StringFilter<"registered_master"> | string
    gender?: Enumregistered_master_genderNullableFilter<"registered_master"> | $Enums.registered_master_gender | null
    affiliation?: StringNullableFilter<"registered_master"> | string | null
    email?: StringFilter<"registered_master"> | string
    contact_no?: StringNullableFilter<"registered_master"> | string | null
    city?: StringNullableFilter<"registered_master"> | string | null
    postal_code?: StringNullableFilter<"registered_master"> | string | null
    category?: StringNullableFilter<"registered_master"> | string | null
    registration_fee_type?: StringNullableFilter<"registered_master"> | string | null
    amount?: DecimalFilter<"registered_master"> | Decimal | DecimalJsLike | number | string
    payment_mode?: StringNullableFilter<"registered_master"> | string | null
    transaction_id?: StringNullableFilter<"registered_master"> | string | null
    transaction_date?: DateTimeNullableFilter<"registered_master"> | Date | string | null
    abstract_submitted?: BoolFilter<"registered_master"> | boolean
    created_at?: DateTimeFilter<"registered_master"> | Date | string
    updated_at?: DateTimeFilter<"registered_master"> | Date | string
    abstract_submission?: XOR<Abstract_submissionNullableScalarRelationFilter, abstract_submissionWhereInput> | null
  }

  export type registered_masterOrderByWithRelationInput = {
    registration_id?: SortOrder
    delegate_type?: SortOrder
    salutation?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrderInput | SortOrder
    affiliation?: SortOrderInput | SortOrder
    email?: SortOrder
    contact_no?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    registration_fee_type?: SortOrderInput | SortOrder
    amount?: SortOrder
    payment_mode?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    abstract_submission?: abstract_submissionOrderByWithRelationInput
  }

  export type registered_masterWhereUniqueInput = Prisma.AtLeast<{
    registration_id?: bigint | number
    email?: string
    AND?: registered_masterWhereInput | registered_masterWhereInput[]
    OR?: registered_masterWhereInput[]
    NOT?: registered_masterWhereInput | registered_masterWhereInput[]
    delegate_type?: StringFilter<"registered_master"> | string
    salutation?: StringNullableFilter<"registered_master"> | string | null
    first_name?: StringFilter<"registered_master"> | string
    last_name?: StringFilter<"registered_master"> | string
    gender?: Enumregistered_master_genderNullableFilter<"registered_master"> | $Enums.registered_master_gender | null
    affiliation?: StringNullableFilter<"registered_master"> | string | null
    contact_no?: StringNullableFilter<"registered_master"> | string | null
    city?: StringNullableFilter<"registered_master"> | string | null
    postal_code?: StringNullableFilter<"registered_master"> | string | null
    category?: StringNullableFilter<"registered_master"> | string | null
    registration_fee_type?: StringNullableFilter<"registered_master"> | string | null
    amount?: DecimalFilter<"registered_master"> | Decimal | DecimalJsLike | number | string
    payment_mode?: StringNullableFilter<"registered_master"> | string | null
    transaction_id?: StringNullableFilter<"registered_master"> | string | null
    transaction_date?: DateTimeNullableFilter<"registered_master"> | Date | string | null
    abstract_submitted?: BoolFilter<"registered_master"> | boolean
    created_at?: DateTimeFilter<"registered_master"> | Date | string
    updated_at?: DateTimeFilter<"registered_master"> | Date | string
    abstract_submission?: XOR<Abstract_submissionNullableScalarRelationFilter, abstract_submissionWhereInput> | null
  }, "registration_id" | "email">

  export type registered_masterOrderByWithAggregationInput = {
    registration_id?: SortOrder
    delegate_type?: SortOrder
    salutation?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrderInput | SortOrder
    affiliation?: SortOrderInput | SortOrder
    email?: SortOrder
    contact_no?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    registration_fee_type?: SortOrderInput | SortOrder
    amount?: SortOrder
    payment_mode?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: registered_masterCountOrderByAggregateInput
    _avg?: registered_masterAvgOrderByAggregateInput
    _max?: registered_masterMaxOrderByAggregateInput
    _min?: registered_masterMinOrderByAggregateInput
    _sum?: registered_masterSumOrderByAggregateInput
  }

  export type registered_masterScalarWhereWithAggregatesInput = {
    AND?: registered_masterScalarWhereWithAggregatesInput | registered_masterScalarWhereWithAggregatesInput[]
    OR?: registered_masterScalarWhereWithAggregatesInput[]
    NOT?: registered_masterScalarWhereWithAggregatesInput | registered_masterScalarWhereWithAggregatesInput[]
    registration_id?: BigIntWithAggregatesFilter<"registered_master"> | bigint | number
    delegate_type?: StringWithAggregatesFilter<"registered_master"> | string
    salutation?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    first_name?: StringWithAggregatesFilter<"registered_master"> | string
    last_name?: StringWithAggregatesFilter<"registered_master"> | string
    gender?: Enumregistered_master_genderNullableWithAggregatesFilter<"registered_master"> | $Enums.registered_master_gender | null
    affiliation?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    email?: StringWithAggregatesFilter<"registered_master"> | string
    contact_no?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    city?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    category?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    registration_fee_type?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    amount?: DecimalWithAggregatesFilter<"registered_master"> | Decimal | DecimalJsLike | number | string
    payment_mode?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    transaction_id?: StringNullableWithAggregatesFilter<"registered_master"> | string | null
    transaction_date?: DateTimeNullableWithAggregatesFilter<"registered_master"> | Date | string | null
    abstract_submitted?: BoolWithAggregatesFilter<"registered_master"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"registered_master"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"registered_master"> | Date | string
  }

  export type abstract_submissionWhereInput = {
    AND?: abstract_submissionWhereInput | abstract_submissionWhereInput[]
    OR?: abstract_submissionWhereInput[]
    NOT?: abstract_submissionWhereInput | abstract_submissionWhereInput[]
    abstract_id?: BigIntFilter<"abstract_submission"> | bigint | number
    registration_id?: BigIntFilter<"abstract_submission"> | bigint | number
    salutation?: StringFilter<"abstract_submission"> | string
    first_name?: StringFilter<"abstract_submission"> | string
    last_name?: StringFilter<"abstract_submission"> | string
    designation?: StringFilter<"abstract_submission"> | string
    abstract_title?: StringFilter<"abstract_submission"> | string
    abstract_category?: StringNullableFilter<"abstract_submission"> | string | null
    keywords?: StringNullableFilter<"abstract_submission"> | string | null
    file_name?: StringFilter<"abstract_submission"> | string
    file_type?: Enumabstract_submission_file_typeFilter<"abstract_submission"> | $Enums.abstract_submission_file_type
    file_size_kb?: IntFilter<"abstract_submission"> | number
    abstract_file?: BytesFilter<"abstract_submission"> | Bytes
    submission_date?: DateTimeFilter<"abstract_submission"> | Date | string
    status?: Enumabstract_submission_statusFilter<"abstract_submission"> | $Enums.abstract_submission_status
    remarks?: StringNullableFilter<"abstract_submission"> | string | null
    created_at?: DateTimeFilter<"abstract_submission"> | Date | string
    updated_at?: DateTimeFilter<"abstract_submission"> | Date | string
    registered_master?: XOR<Registered_masterScalarRelationFilter, registered_masterWhereInput>
  }

  export type abstract_submissionOrderByWithRelationInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    designation?: SortOrder
    abstract_title?: SortOrder
    abstract_category?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size_kb?: SortOrder
    abstract_file?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    registered_master?: registered_masterOrderByWithRelationInput
  }

  export type abstract_submissionWhereUniqueInput = Prisma.AtLeast<{
    abstract_id?: bigint | number
    registration_id?: bigint | number
    AND?: abstract_submissionWhereInput | abstract_submissionWhereInput[]
    OR?: abstract_submissionWhereInput[]
    NOT?: abstract_submissionWhereInput | abstract_submissionWhereInput[]
    salutation?: StringFilter<"abstract_submission"> | string
    first_name?: StringFilter<"abstract_submission"> | string
    last_name?: StringFilter<"abstract_submission"> | string
    designation?: StringFilter<"abstract_submission"> | string
    abstract_title?: StringFilter<"abstract_submission"> | string
    abstract_category?: StringNullableFilter<"abstract_submission"> | string | null
    keywords?: StringNullableFilter<"abstract_submission"> | string | null
    file_name?: StringFilter<"abstract_submission"> | string
    file_type?: Enumabstract_submission_file_typeFilter<"abstract_submission"> | $Enums.abstract_submission_file_type
    file_size_kb?: IntFilter<"abstract_submission"> | number
    abstract_file?: BytesFilter<"abstract_submission"> | Bytes
    submission_date?: DateTimeFilter<"abstract_submission"> | Date | string
    status?: Enumabstract_submission_statusFilter<"abstract_submission"> | $Enums.abstract_submission_status
    remarks?: StringNullableFilter<"abstract_submission"> | string | null
    created_at?: DateTimeFilter<"abstract_submission"> | Date | string
    updated_at?: DateTimeFilter<"abstract_submission"> | Date | string
    registered_master?: XOR<Registered_masterScalarRelationFilter, registered_masterWhereInput>
  }, "abstract_id" | "registration_id">

  export type abstract_submissionOrderByWithAggregationInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    designation?: SortOrder
    abstract_title?: SortOrder
    abstract_category?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size_kb?: SortOrder
    abstract_file?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: abstract_submissionCountOrderByAggregateInput
    _avg?: abstract_submissionAvgOrderByAggregateInput
    _max?: abstract_submissionMaxOrderByAggregateInput
    _min?: abstract_submissionMinOrderByAggregateInput
    _sum?: abstract_submissionSumOrderByAggregateInput
  }

  export type abstract_submissionScalarWhereWithAggregatesInput = {
    AND?: abstract_submissionScalarWhereWithAggregatesInput | abstract_submissionScalarWhereWithAggregatesInput[]
    OR?: abstract_submissionScalarWhereWithAggregatesInput[]
    NOT?: abstract_submissionScalarWhereWithAggregatesInput | abstract_submissionScalarWhereWithAggregatesInput[]
    abstract_id?: BigIntWithAggregatesFilter<"abstract_submission"> | bigint | number
    registration_id?: BigIntWithAggregatesFilter<"abstract_submission"> | bigint | number
    salutation?: StringWithAggregatesFilter<"abstract_submission"> | string
    first_name?: StringWithAggregatesFilter<"abstract_submission"> | string
    last_name?: StringWithAggregatesFilter<"abstract_submission"> | string
    designation?: StringWithAggregatesFilter<"abstract_submission"> | string
    abstract_title?: StringWithAggregatesFilter<"abstract_submission"> | string
    abstract_category?: StringNullableWithAggregatesFilter<"abstract_submission"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"abstract_submission"> | string | null
    file_name?: StringWithAggregatesFilter<"abstract_submission"> | string
    file_type?: Enumabstract_submission_file_typeWithAggregatesFilter<"abstract_submission"> | $Enums.abstract_submission_file_type
    file_size_kb?: IntWithAggregatesFilter<"abstract_submission"> | number
    abstract_file?: BytesWithAggregatesFilter<"abstract_submission"> | Bytes
    submission_date?: DateTimeWithAggregatesFilter<"abstract_submission"> | Date | string
    status?: Enumabstract_submission_statusWithAggregatesFilter<"abstract_submission"> | $Enums.abstract_submission_status
    remarks?: StringNullableWithAggregatesFilter<"abstract_submission"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"abstract_submission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"abstract_submission"> | Date | string
  }

  export type registered_masterCreateInput = {
    registration_id?: bigint | number
    delegate_type: string
    salutation?: string | null
    first_name: string
    last_name: string
    gender?: $Enums.registered_master_gender | null
    affiliation?: string | null
    email: string
    contact_no?: string | null
    city?: string | null
    postal_code?: string | null
    category?: string | null
    registration_fee_type?: string | null
    amount: Decimal | DecimalJsLike | number | string
    payment_mode?: string | null
    transaction_id?: string | null
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionCreateNestedOneWithoutRegistered_masterInput
  }

  export type registered_masterUncheckedCreateInput = {
    registration_id?: bigint | number
    delegate_type: string
    salutation?: string | null
    first_name: string
    last_name: string
    gender?: $Enums.registered_master_gender | null
    affiliation?: string | null
    email: string
    contact_no?: string | null
    city?: string | null
    postal_code?: string | null
    category?: string | null
    registration_fee_type?: string | null
    amount: Decimal | DecimalJsLike | number | string
    payment_mode?: string | null
    transaction_id?: string | null
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionUncheckedCreateNestedOneWithoutRegistered_masterInput
  }

  export type registered_masterUpdateInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUpdateOneWithoutRegistered_masterNestedInput
  }

  export type registered_masterUncheckedUpdateInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUncheckedUpdateOneWithoutRegistered_masterNestedInput
  }

  export type registered_masterCreateManyInput = {
    registration_id?: bigint | number
    delegate_type: string
    salutation?: string | null
    first_name: string
    last_name: string
    gender?: $Enums.registered_master_gender | null
    affiliation?: string | null
    email: string
    contact_no?: string | null
    city?: string | null
    postal_code?: string | null
    category?: string | null
    registration_fee_type?: string | null
    amount: Decimal | DecimalJsLike | number | string
    payment_mode?: string | null
    transaction_id?: string | null
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type registered_masterUpdateManyMutationInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registered_masterUncheckedUpdateManyInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abstract_submissionCreateInput = {
    abstract_id?: bigint | number
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category?: string | null
    keywords?: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date?: Date | string
    status?: $Enums.abstract_submission_status
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    registered_master: registered_masterCreateNestedOneWithoutAbstract_submissionInput
  }

  export type abstract_submissionUncheckedCreateInput = {
    abstract_id?: bigint | number
    registration_id: bigint | number
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category?: string | null
    keywords?: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date?: Date | string
    status?: $Enums.abstract_submission_status
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type abstract_submissionUpdateInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_master?: registered_masterUpdateOneRequiredWithoutAbstract_submissionNestedInput
  }

  export type abstract_submissionUncheckedUpdateInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abstract_submissionCreateManyInput = {
    abstract_id?: bigint | number
    registration_id: bigint | number
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category?: string | null
    keywords?: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date?: Date | string
    status?: $Enums.abstract_submission_status
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type abstract_submissionUpdateManyMutationInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abstract_submissionUncheckedUpdateManyInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumregistered_master_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.registered_master_gender | Enumregistered_master_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel> | $Enums.registered_master_gender | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Abstract_submissionNullableScalarRelationFilter = {
    is?: abstract_submissionWhereInput | null
    isNot?: abstract_submissionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type registered_masterCountOrderByAggregateInput = {
    registration_id?: SortOrder
    delegate_type?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    affiliation?: SortOrder
    email?: SortOrder
    contact_no?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    registration_fee_type?: SortOrder
    amount?: SortOrder
    payment_mode?: SortOrder
    transaction_id?: SortOrder
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterAvgOrderByAggregateInput = {
    registration_id?: SortOrder
    amount?: SortOrder
  }

  export type registered_masterMaxOrderByAggregateInput = {
    registration_id?: SortOrder
    delegate_type?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    affiliation?: SortOrder
    email?: SortOrder
    contact_no?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    registration_fee_type?: SortOrder
    amount?: SortOrder
    payment_mode?: SortOrder
    transaction_id?: SortOrder
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterMinOrderByAggregateInput = {
    registration_id?: SortOrder
    delegate_type?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    affiliation?: SortOrder
    email?: SortOrder
    contact_no?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    registration_fee_type?: SortOrder
    amount?: SortOrder
    payment_mode?: SortOrder
    transaction_id?: SortOrder
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterSumOrderByAggregateInput = {
    registration_id?: SortOrder
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumregistered_master_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.registered_master_gender | Enumregistered_master_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumregistered_master_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.registered_master_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumabstract_submission_file_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_file_type | Enumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel> | $Enums.abstract_submission_file_type
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type Enumabstract_submission_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_status | Enumabstract_submission_statusFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_statusFilter<$PrismaModel> | $Enums.abstract_submission_status
  }

  export type Registered_masterScalarRelationFilter = {
    is?: registered_masterWhereInput
    isNot?: registered_masterWhereInput
  }

  export type abstract_submissionCountOrderByAggregateInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    designation?: SortOrder
    abstract_title?: SortOrder
    abstract_category?: SortOrder
    keywords?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size_kb?: SortOrder
    abstract_file?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type abstract_submissionAvgOrderByAggregateInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    file_size_kb?: SortOrder
  }

  export type abstract_submissionMaxOrderByAggregateInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    designation?: SortOrder
    abstract_title?: SortOrder
    abstract_category?: SortOrder
    keywords?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size_kb?: SortOrder
    abstract_file?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type abstract_submissionMinOrderByAggregateInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    salutation?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    designation?: SortOrder
    abstract_title?: SortOrder
    abstract_category?: SortOrder
    keywords?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size_kb?: SortOrder
    abstract_file?: SortOrder
    submission_date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type abstract_submissionSumOrderByAggregateInput = {
    abstract_id?: SortOrder
    registration_id?: SortOrder
    file_size_kb?: SortOrder
  }

  export type Enumabstract_submission_file_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_file_type | Enumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_file_typeWithAggregatesFilter<$PrismaModel> | $Enums.abstract_submission_file_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel>
    _max?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type Enumabstract_submission_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_status | Enumabstract_submission_statusFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_statusWithAggregatesFilter<$PrismaModel> | $Enums.abstract_submission_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumabstract_submission_statusFilter<$PrismaModel>
    _max?: NestedEnumabstract_submission_statusFilter<$PrismaModel>
  }

  export type abstract_submissionCreateNestedOneWithoutRegistered_masterInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    connect?: abstract_submissionWhereUniqueInput
  }

  export type abstract_submissionUncheckedCreateNestedOneWithoutRegistered_masterInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    connect?: abstract_submissionWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumregistered_master_genderFieldUpdateOperationsInput = {
    set?: $Enums.registered_master_gender | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type abstract_submissionUpdateOneWithoutRegistered_masterNestedInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    upsert?: abstract_submissionUpsertWithoutRegistered_masterInput
    disconnect?: abstract_submissionWhereInput | boolean
    delete?: abstract_submissionWhereInput | boolean
    connect?: abstract_submissionWhereUniqueInput
    update?: XOR<XOR<abstract_submissionUpdateToOneWithWhereWithoutRegistered_masterInput, abstract_submissionUpdateWithoutRegistered_masterInput>, abstract_submissionUncheckedUpdateWithoutRegistered_masterInput>
  }

  export type abstract_submissionUncheckedUpdateOneWithoutRegistered_masterNestedInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    upsert?: abstract_submissionUpsertWithoutRegistered_masterInput
    disconnect?: abstract_submissionWhereInput | boolean
    delete?: abstract_submissionWhereInput | boolean
    connect?: abstract_submissionWhereUniqueInput
    update?: XOR<XOR<abstract_submissionUpdateToOneWithWhereWithoutRegistered_masterInput, abstract_submissionUpdateWithoutRegistered_masterInput>, abstract_submissionUncheckedUpdateWithoutRegistered_masterInput>
  }

  export type registered_masterCreateNestedOneWithoutAbstract_submissionInput = {
    create?: XOR<registered_masterCreateWithoutAbstract_submissionInput, registered_masterUncheckedCreateWithoutAbstract_submissionInput>
    connectOrCreate?: registered_masterCreateOrConnectWithoutAbstract_submissionInput
    connect?: registered_masterWhereUniqueInput
  }

  export type Enumabstract_submission_file_typeFieldUpdateOperationsInput = {
    set?: $Enums.abstract_submission_file_type
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type Enumabstract_submission_statusFieldUpdateOperationsInput = {
    set?: $Enums.abstract_submission_status
  }

  export type registered_masterUpdateOneRequiredWithoutAbstract_submissionNestedInput = {
    create?: XOR<registered_masterCreateWithoutAbstract_submissionInput, registered_masterUncheckedCreateWithoutAbstract_submissionInput>
    connectOrCreate?: registered_masterCreateOrConnectWithoutAbstract_submissionInput
    upsert?: registered_masterUpsertWithoutAbstract_submissionInput
    connect?: registered_masterWhereUniqueInput
    update?: XOR<XOR<registered_masterUpdateToOneWithWhereWithoutAbstract_submissionInput, registered_masterUpdateWithoutAbstract_submissionInput>, registered_masterUncheckedUpdateWithoutAbstract_submissionInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumregistered_master_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.registered_master_gender | Enumregistered_master_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel> | $Enums.registered_master_gender | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumregistered_master_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.registered_master_gender | Enumregistered_master_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.registered_master_gender[] | ListEnumregistered_master_genderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumregistered_master_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.registered_master_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumregistered_master_genderNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumabstract_submission_file_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_file_type | Enumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel> | $Enums.abstract_submission_file_type
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedEnumabstract_submission_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_status | Enumabstract_submission_statusFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_statusFilter<$PrismaModel> | $Enums.abstract_submission_status
  }

  export type NestedEnumabstract_submission_file_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_file_type | Enumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_file_type[] | ListEnumabstract_submission_file_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_file_typeWithAggregatesFilter<$PrismaModel> | $Enums.abstract_submission_file_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel>
    _max?: NestedEnumabstract_submission_file_typeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedEnumabstract_submission_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.abstract_submission_status | Enumabstract_submission_statusFieldRefInput<$PrismaModel>
    in?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.abstract_submission_status[] | ListEnumabstract_submission_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumabstract_submission_statusWithAggregatesFilter<$PrismaModel> | $Enums.abstract_submission_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumabstract_submission_statusFilter<$PrismaModel>
    _max?: NestedEnumabstract_submission_statusFilter<$PrismaModel>
  }

  export type abstract_submissionCreateWithoutRegistered_masterInput = {
    abstract_id?: bigint | number
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category?: string | null
    keywords?: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date?: Date | string
    status?: $Enums.abstract_submission_status
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type abstract_submissionUncheckedCreateWithoutRegistered_masterInput = {
    abstract_id?: bigint | number
    salutation: string
    first_name: string
    last_name: string
    designation: string
    abstract_title: string
    abstract_category?: string | null
    keywords?: string | null
    file_name: string
    file_type: $Enums.abstract_submission_file_type
    file_size_kb: number
    abstract_file: Bytes
    submission_date?: Date | string
    status?: $Enums.abstract_submission_status
    remarks?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type abstract_submissionCreateOrConnectWithoutRegistered_masterInput = {
    where: abstract_submissionWhereUniqueInput
    create: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
  }

  export type abstract_submissionUpsertWithoutRegistered_masterInput = {
    update: XOR<abstract_submissionUpdateWithoutRegistered_masterInput, abstract_submissionUncheckedUpdateWithoutRegistered_masterInput>
    create: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    where?: abstract_submissionWhereInput
  }

  export type abstract_submissionUpdateToOneWithWhereWithoutRegistered_masterInput = {
    where?: abstract_submissionWhereInput
    data: XOR<abstract_submissionUpdateWithoutRegistered_masterInput, abstract_submissionUncheckedUpdateWithoutRegistered_masterInput>
  }

  export type abstract_submissionUpdateWithoutRegistered_masterInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abstract_submissionUncheckedUpdateWithoutRegistered_masterInput = {
    abstract_id?: BigIntFieldUpdateOperationsInput | bigint | number
    salutation?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    abstract_title?: StringFieldUpdateOperationsInput | string
    abstract_category?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: Enumabstract_submission_file_typeFieldUpdateOperationsInput | $Enums.abstract_submission_file_type
    file_size_kb?: IntFieldUpdateOperationsInput | number
    abstract_file?: BytesFieldUpdateOperationsInput | Bytes
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumabstract_submission_statusFieldUpdateOperationsInput | $Enums.abstract_submission_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registered_masterCreateWithoutAbstract_submissionInput = {
    registration_id?: bigint | number
    delegate_type: string
    salutation?: string | null
    first_name: string
    last_name: string
    gender?: $Enums.registered_master_gender | null
    affiliation?: string | null
    email: string
    contact_no?: string | null
    city?: string | null
    postal_code?: string | null
    category?: string | null
    registration_fee_type?: string | null
    amount: Decimal | DecimalJsLike | number | string
    payment_mode?: string | null
    transaction_id?: string | null
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type registered_masterUncheckedCreateWithoutAbstract_submissionInput = {
    registration_id?: bigint | number
    delegate_type: string
    salutation?: string | null
    first_name: string
    last_name: string
    gender?: $Enums.registered_master_gender | null
    affiliation?: string | null
    email: string
    contact_no?: string | null
    city?: string | null
    postal_code?: string | null
    category?: string | null
    registration_fee_type?: string | null
    amount: Decimal | DecimalJsLike | number | string
    payment_mode?: string | null
    transaction_id?: string | null
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type registered_masterCreateOrConnectWithoutAbstract_submissionInput = {
    where: registered_masterWhereUniqueInput
    create: XOR<registered_masterCreateWithoutAbstract_submissionInput, registered_masterUncheckedCreateWithoutAbstract_submissionInput>
  }

  export type registered_masterUpsertWithoutAbstract_submissionInput = {
    update: XOR<registered_masterUpdateWithoutAbstract_submissionInput, registered_masterUncheckedUpdateWithoutAbstract_submissionInput>
    create: XOR<registered_masterCreateWithoutAbstract_submissionInput, registered_masterUncheckedCreateWithoutAbstract_submissionInput>
    where?: registered_masterWhereInput
  }

  export type registered_masterUpdateToOneWithWhereWithoutAbstract_submissionInput = {
    where?: registered_masterWhereInput
    data: XOR<registered_masterUpdateWithoutAbstract_submissionInput, registered_masterUncheckedUpdateWithoutAbstract_submissionInput>
  }

  export type registered_masterUpdateWithoutAbstract_submissionInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registered_masterUncheckedUpdateWithoutAbstract_submissionInput = {
    registration_id?: BigIntFieldUpdateOperationsInput | bigint | number
    delegate_type?: StringFieldUpdateOperationsInput | string
    salutation?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumregistered_master_genderFieldUpdateOperationsInput | $Enums.registered_master_gender | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contact_no?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    registration_fee_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_mode?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}