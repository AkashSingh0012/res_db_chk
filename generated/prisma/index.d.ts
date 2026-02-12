
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model award_pillar
 * 
 */
export type award_pillar = $Result.DefaultSelection<Prisma.$award_pillarPayload>
/**
 * Model award_category
 * 
 */
export type award_category = $Result.DefaultSelection<Prisma.$award_categoryPayload>
/**
 * Model award_focus_area
 * 
 */
export type award_focus_area = $Result.DefaultSelection<Prisma.$award_focus_areaPayload>
/**
 * Model award_nomination
 * 
 */
export type award_nomination = $Result.DefaultSelection<Prisma.$award_nominationPayload>
/**
 * Model award_proof_link
 * 
 */
export type award_proof_link = $Result.DefaultSelection<Prisma.$award_proof_linkPayload>

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


export const nomination_status: {
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  SHORTLISTED: 'SHORTLISTED',
  REJECTED: 'REJECTED',
  AWARDED: 'AWARDED'
};

export type nomination_status = (typeof nomination_status)[keyof typeof nomination_status]

}

export type registered_master_gender = $Enums.registered_master_gender

export const registered_master_gender: typeof $Enums.registered_master_gender

export type abstract_submission_file_type = $Enums.abstract_submission_file_type

export const abstract_submission_file_type: typeof $Enums.abstract_submission_file_type

export type abstract_submission_status = $Enums.abstract_submission_status

export const abstract_submission_status: typeof $Enums.abstract_submission_status

export type nomination_status = $Enums.nomination_status

export const nomination_status: typeof $Enums.nomination_status

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  /**
   * `prisma.award_pillar`: Exposes CRUD operations for the **award_pillar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Award_pillars
    * const award_pillars = await prisma.award_pillar.findMany()
    * ```
    */
  get award_pillar(): Prisma.award_pillarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award_category`: Exposes CRUD operations for the **award_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Award_categories
    * const award_categories = await prisma.award_category.findMany()
    * ```
    */
  get award_category(): Prisma.award_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award_focus_area`: Exposes CRUD operations for the **award_focus_area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Award_focus_areas
    * const award_focus_areas = await prisma.award_focus_area.findMany()
    * ```
    */
  get award_focus_area(): Prisma.award_focus_areaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award_nomination`: Exposes CRUD operations for the **award_nomination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Award_nominations
    * const award_nominations = await prisma.award_nomination.findMany()
    * ```
    */
  get award_nomination(): Prisma.award_nominationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award_proof_link`: Exposes CRUD operations for the **award_proof_link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Award_proof_links
    * const award_proof_links = await prisma.award_proof_link.findMany()
    * ```
    */
  get award_proof_link(): Prisma.award_proof_linkDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    abstract_submission: 'abstract_submission',
    award_pillar: 'award_pillar',
    award_category: 'award_category',
    award_focus_area: 'award_focus_area',
    award_nomination: 'award_nomination',
    award_proof_link: 'award_proof_link'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registered_master" | "abstract_submission" | "award_pillar" | "award_category" | "award_focus_area" | "award_nomination" | "award_proof_link"
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
      award_pillar: {
        payload: Prisma.$award_pillarPayload<ExtArgs>
        fields: Prisma.award_pillarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.award_pillarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.award_pillarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          findFirst: {
            args: Prisma.award_pillarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.award_pillarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          findMany: {
            args: Prisma.award_pillarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>[]
          }
          create: {
            args: Prisma.award_pillarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          createMany: {
            args: Prisma.award_pillarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.award_pillarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>[]
          }
          delete: {
            args: Prisma.award_pillarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          update: {
            args: Prisma.award_pillarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          deleteMany: {
            args: Prisma.award_pillarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.award_pillarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.award_pillarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>[]
          }
          upsert: {
            args: Prisma.award_pillarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_pillarPayload>
          }
          aggregate: {
            args: Prisma.Award_pillarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward_pillar>
          }
          groupBy: {
            args: Prisma.award_pillarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Award_pillarGroupByOutputType>[]
          }
          count: {
            args: Prisma.award_pillarCountArgs<ExtArgs>
            result: $Utils.Optional<Award_pillarCountAggregateOutputType> | number
          }
        }
      }
      award_category: {
        payload: Prisma.$award_categoryPayload<ExtArgs>
        fields: Prisma.award_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.award_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.award_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          findFirst: {
            args: Prisma.award_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.award_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          findMany: {
            args: Prisma.award_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>[]
          }
          create: {
            args: Prisma.award_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          createMany: {
            args: Prisma.award_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.award_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>[]
          }
          delete: {
            args: Prisma.award_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          update: {
            args: Prisma.award_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          deleteMany: {
            args: Prisma.award_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.award_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.award_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>[]
          }
          upsert: {
            args: Prisma.award_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_categoryPayload>
          }
          aggregate: {
            args: Prisma.Award_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward_category>
          }
          groupBy: {
            args: Prisma.award_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Award_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.award_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Award_categoryCountAggregateOutputType> | number
          }
        }
      }
      award_focus_area: {
        payload: Prisma.$award_focus_areaPayload<ExtArgs>
        fields: Prisma.award_focus_areaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.award_focus_areaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.award_focus_areaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          findFirst: {
            args: Prisma.award_focus_areaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.award_focus_areaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          findMany: {
            args: Prisma.award_focus_areaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>[]
          }
          create: {
            args: Prisma.award_focus_areaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          createMany: {
            args: Prisma.award_focus_areaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.award_focus_areaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>[]
          }
          delete: {
            args: Prisma.award_focus_areaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          update: {
            args: Prisma.award_focus_areaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          deleteMany: {
            args: Prisma.award_focus_areaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.award_focus_areaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.award_focus_areaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>[]
          }
          upsert: {
            args: Prisma.award_focus_areaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_focus_areaPayload>
          }
          aggregate: {
            args: Prisma.Award_focus_areaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward_focus_area>
          }
          groupBy: {
            args: Prisma.award_focus_areaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Award_focus_areaGroupByOutputType>[]
          }
          count: {
            args: Prisma.award_focus_areaCountArgs<ExtArgs>
            result: $Utils.Optional<Award_focus_areaCountAggregateOutputType> | number
          }
        }
      }
      award_nomination: {
        payload: Prisma.$award_nominationPayload<ExtArgs>
        fields: Prisma.award_nominationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.award_nominationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.award_nominationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          findFirst: {
            args: Prisma.award_nominationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.award_nominationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          findMany: {
            args: Prisma.award_nominationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>[]
          }
          create: {
            args: Prisma.award_nominationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          createMany: {
            args: Prisma.award_nominationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.award_nominationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>[]
          }
          delete: {
            args: Prisma.award_nominationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          update: {
            args: Prisma.award_nominationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          deleteMany: {
            args: Prisma.award_nominationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.award_nominationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.award_nominationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>[]
          }
          upsert: {
            args: Prisma.award_nominationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_nominationPayload>
          }
          aggregate: {
            args: Prisma.Award_nominationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward_nomination>
          }
          groupBy: {
            args: Prisma.award_nominationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Award_nominationGroupByOutputType>[]
          }
          count: {
            args: Prisma.award_nominationCountArgs<ExtArgs>
            result: $Utils.Optional<Award_nominationCountAggregateOutputType> | number
          }
        }
      }
      award_proof_link: {
        payload: Prisma.$award_proof_linkPayload<ExtArgs>
        fields: Prisma.award_proof_linkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.award_proof_linkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.award_proof_linkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          findFirst: {
            args: Prisma.award_proof_linkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.award_proof_linkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          findMany: {
            args: Prisma.award_proof_linkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>[]
          }
          create: {
            args: Prisma.award_proof_linkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          createMany: {
            args: Prisma.award_proof_linkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.award_proof_linkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>[]
          }
          delete: {
            args: Prisma.award_proof_linkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          update: {
            args: Prisma.award_proof_linkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          deleteMany: {
            args: Prisma.award_proof_linkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.award_proof_linkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.award_proof_linkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>[]
          }
          upsert: {
            args: Prisma.award_proof_linkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$award_proof_linkPayload>
          }
          aggregate: {
            args: Prisma.Award_proof_linkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward_proof_link>
          }
          groupBy: {
            args: Prisma.award_proof_linkGroupByArgs<ExtArgs>
            result: $Utils.Optional<Award_proof_linkGroupByOutputType>[]
          }
          count: {
            args: Prisma.award_proof_linkCountArgs<ExtArgs>
            result: $Utils.Optional<Award_proof_linkCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    registered_master?: registered_masterOmit
    abstract_submission?: abstract_submissionOmit
    award_pillar?: award_pillarOmit
    award_category?: award_categoryOmit
    award_focus_area?: award_focus_areaOmit
    award_nomination?: award_nominationOmit
    award_proof_link?: award_proof_linkOmit
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
   * Count Type Registered_masterCountOutputType
   */

  export type Registered_masterCountOutputType = {
    awardNominations: number
  }

  export type Registered_masterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awardNominations?: boolean | Registered_masterCountOutputTypeCountAwardNominationsArgs
  }

  // Custom InputTypes
  /**
   * Registered_masterCountOutputType without action
   */
  export type Registered_masterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered_masterCountOutputType
     */
    select?: Registered_masterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Registered_masterCountOutputType without action
   */
  export type Registered_masterCountOutputTypeCountAwardNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_nominationWhereInput
  }


  /**
   * Count Type Award_pillarCountOutputType
   */

  export type Award_pillarCountOutputType = {
    categories: number
  }

  export type Award_pillarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Award_pillarCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * Award_pillarCountOutputType without action
   */
  export type Award_pillarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award_pillarCountOutputType
     */
    select?: Award_pillarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Award_pillarCountOutputType without action
   */
  export type Award_pillarCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_categoryWhereInput
  }


  /**
   * Count Type Award_categoryCountOutputType
   */

  export type Award_categoryCountOutputType = {
    focus_areas: number
    nominations: number
  }

  export type Award_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    focus_areas?: boolean | Award_categoryCountOutputTypeCountFocus_areasArgs
    nominations?: boolean | Award_categoryCountOutputTypeCountNominationsArgs
  }

  // Custom InputTypes
  /**
   * Award_categoryCountOutputType without action
   */
  export type Award_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award_categoryCountOutputType
     */
    select?: Award_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Award_categoryCountOutputType without action
   */
  export type Award_categoryCountOutputTypeCountFocus_areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_focus_areaWhereInput
  }

  /**
   * Award_categoryCountOutputType without action
   */
  export type Award_categoryCountOutputTypeCountNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_nominationWhereInput
  }


  /**
   * Count Type Award_focus_areaCountOutputType
   */

  export type Award_focus_areaCountOutputType = {
    awardNominations: number
  }

  export type Award_focus_areaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awardNominations?: boolean | Award_focus_areaCountOutputTypeCountAwardNominationsArgs
  }

  // Custom InputTypes
  /**
   * Award_focus_areaCountOutputType without action
   */
  export type Award_focus_areaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award_focus_areaCountOutputType
     */
    select?: Award_focus_areaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Award_focus_areaCountOutputType without action
   */
  export type Award_focus_areaCountOutputTypeCountAwardNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_nominationWhereInput
  }


  /**
   * Count Type Award_nominationCountOutputType
   */

  export type Award_nominationCountOutputType = {
    proof_links: number
  }

  export type Award_nominationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proof_links?: boolean | Award_nominationCountOutputTypeCountProof_linksArgs
  }

  // Custom InputTypes
  /**
   * Award_nominationCountOutputType without action
   */
  export type Award_nominationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award_nominationCountOutputType
     */
    select?: Award_nominationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Award_nominationCountOutputType without action
   */
  export type Award_nominationCountOutputTypeCountProof_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_proof_linkWhereInput
  }


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
    amount: Decimal | null
  }

  export type Registered_masterSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Registered_masterMinAggregateOutputType = {
    transaction_id: string | null
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
    transaction_date: Date | null
    abstract_submitted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Registered_masterMaxAggregateOutputType = {
    transaction_id: string | null
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
    transaction_date: Date | null
    abstract_submitted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Registered_masterCountAggregateOutputType = {
    transaction_id: number
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
    transaction_date: number
    abstract_submitted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Registered_masterAvgAggregateInputType = {
    amount?: true
  }

  export type Registered_masterSumAggregateInputType = {
    amount?: true
  }

  export type Registered_masterMinAggregateInputType = {
    transaction_id?: true
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
    transaction_date?: true
    abstract_submitted?: true
    created_at?: true
    updated_at?: true
  }

  export type Registered_masterMaxAggregateInputType = {
    transaction_id?: true
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
    transaction_date?: true
    abstract_submitted?: true
    created_at?: true
    updated_at?: true
  }

  export type Registered_masterCountAggregateInputType = {
    transaction_id?: true
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
    transaction_id: string
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
    transaction_id?: boolean
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
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
    abstract_submission?: boolean | registered_master$abstract_submissionArgs<ExtArgs>
    awardNominations?: boolean | registered_master$awardNominationsArgs<ExtArgs>
    _count?: boolean | Registered_masterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
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
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
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
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["registered_master"]>

  export type registered_masterSelectScalar = {
    transaction_id?: boolean
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
    transaction_date?: boolean
    abstract_submitted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type registered_masterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_id" | "delegate_type" | "salutation" | "first_name" | "last_name" | "gender" | "affiliation" | "email" | "contact_no" | "city" | "postal_code" | "category" | "registration_fee_type" | "amount" | "payment_mode" | "transaction_date" | "abstract_submitted" | "created_at" | "updated_at", ExtArgs["result"]["registered_master"]>
  export type registered_masterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abstract_submission?: boolean | registered_master$abstract_submissionArgs<ExtArgs>
    awardNominations?: boolean | registered_master$awardNominationsArgs<ExtArgs>
    _count?: boolean | Registered_masterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type registered_masterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type registered_masterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $registered_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registered_master"
    objects: {
      abstract_submission: Prisma.$abstract_submissionPayload<ExtArgs> | null
      awardNominations: Prisma.$award_nominationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: string
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
     * // Only select the `transaction_id`
     * const registered_masterWithTransaction_idOnly = await prisma.registered_master.findMany({ select: { transaction_id: true } })
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
     * // Create many Registered_masters and only return the `transaction_id`
     * const registered_masterWithTransaction_idOnly = await prisma.registered_master.createManyAndReturn({
     *   select: { transaction_id: true },
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
     * // Update zero or more Registered_masters and only return the `transaction_id`
     * const registered_masterWithTransaction_idOnly = await prisma.registered_master.updateManyAndReturn({
     *   select: { transaction_id: true },
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
    awardNominations<T extends registered_master$awardNominationsArgs<ExtArgs> = {}>(args?: Subset<T, registered_master$awardNominationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly transaction_id: FieldRef<"registered_master", 'String'>
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
   * registered_master.awardNominations
   */
  export type registered_master$awardNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    where?: award_nominationWhereInput
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    cursor?: award_nominationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
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
    file_size_kb: number | null
  }

  export type Abstract_submissionSumAggregateOutputType = {
    abstract_id: bigint | null
    file_size_kb: number | null
  }

  export type Abstract_submissionMinAggregateOutputType = {
    abstract_id: bigint | null
    transaction_id: string | null
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
    transaction_id: string | null
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
    transaction_id: number
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
    file_size_kb?: true
  }

  export type Abstract_submissionSumAggregateInputType = {
    abstract_id?: true
    file_size_kb?: true
  }

  export type Abstract_submissionMinAggregateInputType = {
    abstract_id?: true
    transaction_id?: true
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
    transaction_id?: true
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
    transaction_id?: true
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
    transaction_id: string
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
    transaction_id?: boolean
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
    transaction_id?: boolean
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
    transaction_id?: boolean
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
    transaction_id?: boolean
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

  export type abstract_submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"abstract_id" | "transaction_id" | "salutation" | "first_name" | "last_name" | "designation" | "abstract_title" | "abstract_category" | "keywords" | "file_name" | "file_type" | "file_size_kb" | "abstract_file" | "submission_date" | "status" | "remarks" | "created_at" | "updated_at", ExtArgs["result"]["abstract_submission"]>
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
      transaction_id: string
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
    readonly transaction_id: FieldRef<"abstract_submission", 'String'>
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
   * Model award_pillar
   */

  export type AggregateAward_pillar = {
    _count: Award_pillarCountAggregateOutputType | null
    _avg: Award_pillarAvgAggregateOutputType | null
    _sum: Award_pillarSumAggregateOutputType | null
    _min: Award_pillarMinAggregateOutputType | null
    _max: Award_pillarMaxAggregateOutputType | null
  }

  export type Award_pillarAvgAggregateOutputType = {
    id: number | null
  }

  export type Award_pillarSumAggregateOutputType = {
    id: bigint | null
  }

  export type Award_pillarMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
  }

  export type Award_pillarMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
  }

  export type Award_pillarCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type Award_pillarAvgAggregateInputType = {
    id?: true
  }

  export type Award_pillarSumAggregateInputType = {
    id?: true
  }

  export type Award_pillarMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type Award_pillarMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type Award_pillarCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type Award_pillarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_pillar to aggregate.
     */
    where?: award_pillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_pillars to fetch.
     */
    orderBy?: award_pillarOrderByWithRelationInput | award_pillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: award_pillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned award_pillars
    **/
    _count?: true | Award_pillarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Award_pillarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Award_pillarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Award_pillarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Award_pillarMaxAggregateInputType
  }

  export type GetAward_pillarAggregateType<T extends Award_pillarAggregateArgs> = {
        [P in keyof T & keyof AggregateAward_pillar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward_pillar[P]>
      : GetScalarType<T[P], AggregateAward_pillar[P]>
  }




  export type award_pillarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_pillarWhereInput
    orderBy?: award_pillarOrderByWithAggregationInput | award_pillarOrderByWithAggregationInput[]
    by: Award_pillarScalarFieldEnum[] | Award_pillarScalarFieldEnum
    having?: award_pillarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Award_pillarCountAggregateInputType | true
    _avg?: Award_pillarAvgAggregateInputType
    _sum?: Award_pillarSumAggregateInputType
    _min?: Award_pillarMinAggregateInputType
    _max?: Award_pillarMaxAggregateInputType
  }

  export type Award_pillarGroupByOutputType = {
    id: bigint
    name: string
    created_at: Date
    _count: Award_pillarCountAggregateOutputType | null
    _avg: Award_pillarAvgAggregateOutputType | null
    _sum: Award_pillarSumAggregateOutputType | null
    _min: Award_pillarMinAggregateOutputType | null
    _max: Award_pillarMaxAggregateOutputType | null
  }

  type GetAward_pillarGroupByPayload<T extends award_pillarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Award_pillarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Award_pillarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Award_pillarGroupByOutputType[P]>
            : GetScalarType<T[P], Award_pillarGroupByOutputType[P]>
        }
      >
    >


  export type award_pillarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    categories?: boolean | award_pillar$categoriesArgs<ExtArgs>
    _count?: boolean | Award_pillarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_pillar"]>

  export type award_pillarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["award_pillar"]>

  export type award_pillarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["award_pillar"]>

  export type award_pillarSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type award_pillarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["award_pillar"]>
  export type award_pillarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | award_pillar$categoriesArgs<ExtArgs>
    _count?: boolean | Award_pillarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type award_pillarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type award_pillarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $award_pillarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "award_pillar"
    objects: {
      categories: Prisma.$award_categoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      created_at: Date
    }, ExtArgs["result"]["award_pillar"]>
    composites: {}
  }

  type award_pillarGetPayload<S extends boolean | null | undefined | award_pillarDefaultArgs> = $Result.GetResult<Prisma.$award_pillarPayload, S>

  type award_pillarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<award_pillarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Award_pillarCountAggregateInputType | true
    }

  export interface award_pillarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['award_pillar'], meta: { name: 'award_pillar' } }
    /**
     * Find zero or one Award_pillar that matches the filter.
     * @param {award_pillarFindUniqueArgs} args - Arguments to find a Award_pillar
     * @example
     * // Get one Award_pillar
     * const award_pillar = await prisma.award_pillar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends award_pillarFindUniqueArgs>(args: SelectSubset<T, award_pillarFindUniqueArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award_pillar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {award_pillarFindUniqueOrThrowArgs} args - Arguments to find a Award_pillar
     * @example
     * // Get one Award_pillar
     * const award_pillar = await prisma.award_pillar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends award_pillarFindUniqueOrThrowArgs>(args: SelectSubset<T, award_pillarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_pillar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarFindFirstArgs} args - Arguments to find a Award_pillar
     * @example
     * // Get one Award_pillar
     * const award_pillar = await prisma.award_pillar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends award_pillarFindFirstArgs>(args?: SelectSubset<T, award_pillarFindFirstArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_pillar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarFindFirstOrThrowArgs} args - Arguments to find a Award_pillar
     * @example
     * // Get one Award_pillar
     * const award_pillar = await prisma.award_pillar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends award_pillarFindFirstOrThrowArgs>(args?: SelectSubset<T, award_pillarFindFirstOrThrowArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Award_pillars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Award_pillars
     * const award_pillars = await prisma.award_pillar.findMany()
     * 
     * // Get first 10 Award_pillars
     * const award_pillars = await prisma.award_pillar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const award_pillarWithIdOnly = await prisma.award_pillar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends award_pillarFindManyArgs>(args?: SelectSubset<T, award_pillarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award_pillar.
     * @param {award_pillarCreateArgs} args - Arguments to create a Award_pillar.
     * @example
     * // Create one Award_pillar
     * const Award_pillar = await prisma.award_pillar.create({
     *   data: {
     *     // ... data to create a Award_pillar
     *   }
     * })
     * 
     */
    create<T extends award_pillarCreateArgs>(args: SelectSubset<T, award_pillarCreateArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Award_pillars.
     * @param {award_pillarCreateManyArgs} args - Arguments to create many Award_pillars.
     * @example
     * // Create many Award_pillars
     * const award_pillar = await prisma.award_pillar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends award_pillarCreateManyArgs>(args?: SelectSubset<T, award_pillarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Award_pillars and returns the data saved in the database.
     * @param {award_pillarCreateManyAndReturnArgs} args - Arguments to create many Award_pillars.
     * @example
     * // Create many Award_pillars
     * const award_pillar = await prisma.award_pillar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Award_pillars and only return the `id`
     * const award_pillarWithIdOnly = await prisma.award_pillar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends award_pillarCreateManyAndReturnArgs>(args?: SelectSubset<T, award_pillarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award_pillar.
     * @param {award_pillarDeleteArgs} args - Arguments to delete one Award_pillar.
     * @example
     * // Delete one Award_pillar
     * const Award_pillar = await prisma.award_pillar.delete({
     *   where: {
     *     // ... filter to delete one Award_pillar
     *   }
     * })
     * 
     */
    delete<T extends award_pillarDeleteArgs>(args: SelectSubset<T, award_pillarDeleteArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award_pillar.
     * @param {award_pillarUpdateArgs} args - Arguments to update one Award_pillar.
     * @example
     * // Update one Award_pillar
     * const award_pillar = await prisma.award_pillar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends award_pillarUpdateArgs>(args: SelectSubset<T, award_pillarUpdateArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Award_pillars.
     * @param {award_pillarDeleteManyArgs} args - Arguments to filter Award_pillars to delete.
     * @example
     * // Delete a few Award_pillars
     * const { count } = await prisma.award_pillar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends award_pillarDeleteManyArgs>(args?: SelectSubset<T, award_pillarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Award_pillars
     * const award_pillar = await prisma.award_pillar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends award_pillarUpdateManyArgs>(args: SelectSubset<T, award_pillarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_pillars and returns the data updated in the database.
     * @param {award_pillarUpdateManyAndReturnArgs} args - Arguments to update many Award_pillars.
     * @example
     * // Update many Award_pillars
     * const award_pillar = await prisma.award_pillar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Award_pillars and only return the `id`
     * const award_pillarWithIdOnly = await prisma.award_pillar.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends award_pillarUpdateManyAndReturnArgs>(args: SelectSubset<T, award_pillarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award_pillar.
     * @param {award_pillarUpsertArgs} args - Arguments to update or create a Award_pillar.
     * @example
     * // Update or create a Award_pillar
     * const award_pillar = await prisma.award_pillar.upsert({
     *   create: {
     *     // ... data to create a Award_pillar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award_pillar we want to update
     *   }
     * })
     */
    upsert<T extends award_pillarUpsertArgs>(args: SelectSubset<T, award_pillarUpsertArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Award_pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarCountArgs} args - Arguments to filter Award_pillars to count.
     * @example
     * // Count the number of Award_pillars
     * const count = await prisma.award_pillar.count({
     *   where: {
     *     // ... the filter for the Award_pillars we want to count
     *   }
     * })
    **/
    count<T extends award_pillarCountArgs>(
      args?: Subset<T, award_pillarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Award_pillarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award_pillar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Award_pillarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Award_pillarAggregateArgs>(args: Subset<T, Award_pillarAggregateArgs>): Prisma.PrismaPromise<GetAward_pillarAggregateType<T>>

    /**
     * Group by Award_pillar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_pillarGroupByArgs} args - Group by arguments.
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
      T extends award_pillarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: award_pillarGroupByArgs['orderBy'] }
        : { orderBy?: award_pillarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, award_pillarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAward_pillarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the award_pillar model
   */
  readonly fields: award_pillarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for award_pillar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__award_pillarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends award_pillar$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, award_pillar$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the award_pillar model
   */
  interface award_pillarFieldRefs {
    readonly id: FieldRef<"award_pillar", 'BigInt'>
    readonly name: FieldRef<"award_pillar", 'String'>
    readonly created_at: FieldRef<"award_pillar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * award_pillar findUnique
   */
  export type award_pillarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter, which award_pillar to fetch.
     */
    where: award_pillarWhereUniqueInput
  }

  /**
   * award_pillar findUniqueOrThrow
   */
  export type award_pillarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter, which award_pillar to fetch.
     */
    where: award_pillarWhereUniqueInput
  }

  /**
   * award_pillar findFirst
   */
  export type award_pillarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter, which award_pillar to fetch.
     */
    where?: award_pillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_pillars to fetch.
     */
    orderBy?: award_pillarOrderByWithRelationInput | award_pillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_pillars.
     */
    cursor?: award_pillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_pillars.
     */
    distinct?: Award_pillarScalarFieldEnum | Award_pillarScalarFieldEnum[]
  }

  /**
   * award_pillar findFirstOrThrow
   */
  export type award_pillarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter, which award_pillar to fetch.
     */
    where?: award_pillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_pillars to fetch.
     */
    orderBy?: award_pillarOrderByWithRelationInput | award_pillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_pillars.
     */
    cursor?: award_pillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_pillars.
     */
    distinct?: Award_pillarScalarFieldEnum | Award_pillarScalarFieldEnum[]
  }

  /**
   * award_pillar findMany
   */
  export type award_pillarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter, which award_pillars to fetch.
     */
    where?: award_pillarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_pillars to fetch.
     */
    orderBy?: award_pillarOrderByWithRelationInput | award_pillarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing award_pillars.
     */
    cursor?: award_pillarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_pillars.
     */
    skip?: number
    distinct?: Award_pillarScalarFieldEnum | Award_pillarScalarFieldEnum[]
  }

  /**
   * award_pillar create
   */
  export type award_pillarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * The data needed to create a award_pillar.
     */
    data: XOR<award_pillarCreateInput, award_pillarUncheckedCreateInput>
  }

  /**
   * award_pillar createMany
   */
  export type award_pillarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many award_pillars.
     */
    data: award_pillarCreateManyInput | award_pillarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_pillar createManyAndReturn
   */
  export type award_pillarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * The data used to create many award_pillars.
     */
    data: award_pillarCreateManyInput | award_pillarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_pillar update
   */
  export type award_pillarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * The data needed to update a award_pillar.
     */
    data: XOR<award_pillarUpdateInput, award_pillarUncheckedUpdateInput>
    /**
     * Choose, which award_pillar to update.
     */
    where: award_pillarWhereUniqueInput
  }

  /**
   * award_pillar updateMany
   */
  export type award_pillarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update award_pillars.
     */
    data: XOR<award_pillarUpdateManyMutationInput, award_pillarUncheckedUpdateManyInput>
    /**
     * Filter which award_pillars to update
     */
    where?: award_pillarWhereInput
    /**
     * Limit how many award_pillars to update.
     */
    limit?: number
  }

  /**
   * award_pillar updateManyAndReturn
   */
  export type award_pillarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * The data used to update award_pillars.
     */
    data: XOR<award_pillarUpdateManyMutationInput, award_pillarUncheckedUpdateManyInput>
    /**
     * Filter which award_pillars to update
     */
    where?: award_pillarWhereInput
    /**
     * Limit how many award_pillars to update.
     */
    limit?: number
  }

  /**
   * award_pillar upsert
   */
  export type award_pillarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * The filter to search for the award_pillar to update in case it exists.
     */
    where: award_pillarWhereUniqueInput
    /**
     * In case the award_pillar found by the `where` argument doesn't exist, create a new award_pillar with this data.
     */
    create: XOR<award_pillarCreateInput, award_pillarUncheckedCreateInput>
    /**
     * In case the award_pillar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<award_pillarUpdateInput, award_pillarUncheckedUpdateInput>
  }

  /**
   * award_pillar delete
   */
  export type award_pillarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
    /**
     * Filter which award_pillar to delete.
     */
    where: award_pillarWhereUniqueInput
  }

  /**
   * award_pillar deleteMany
   */
  export type award_pillarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_pillars to delete
     */
    where?: award_pillarWhereInput
    /**
     * Limit how many award_pillars to delete.
     */
    limit?: number
  }

  /**
   * award_pillar.categories
   */
  export type award_pillar$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    where?: award_categoryWhereInput
    orderBy?: award_categoryOrderByWithRelationInput | award_categoryOrderByWithRelationInput[]
    cursor?: award_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_categoryScalarFieldEnum | Award_categoryScalarFieldEnum[]
  }

  /**
   * award_pillar without action
   */
  export type award_pillarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_pillar
     */
    select?: award_pillarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_pillar
     */
    omit?: award_pillarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_pillarInclude<ExtArgs> | null
  }


  /**
   * Model award_category
   */

  export type AggregateAward_category = {
    _count: Award_categoryCountAggregateOutputType | null
    _avg: Award_categoryAvgAggregateOutputType | null
    _sum: Award_categorySumAggregateOutputType | null
    _min: Award_categoryMinAggregateOutputType | null
    _max: Award_categoryMaxAggregateOutputType | null
  }

  export type Award_categoryAvgAggregateOutputType = {
    id: number | null
    pillar_id: number | null
    total_awards: number | null
    age_limit: number | null
  }

  export type Award_categorySumAggregateOutputType = {
    id: bigint | null
    pillar_id: bigint | null
    total_awards: number | null
    age_limit: number | null
  }

  export type Award_categoryMinAggregateOutputType = {
    id: bigint | null
    pillar_id: bigint | null
    name: string | null
    description: string | null
    total_awards: number | null
    age_limit: number | null
    gender_restriction: string | null
    created_at: Date | null
  }

  export type Award_categoryMaxAggregateOutputType = {
    id: bigint | null
    pillar_id: bigint | null
    name: string | null
    description: string | null
    total_awards: number | null
    age_limit: number | null
    gender_restriction: string | null
    created_at: Date | null
  }

  export type Award_categoryCountAggregateOutputType = {
    id: number
    pillar_id: number
    name: number
    description: number
    total_awards: number
    age_limit: number
    gender_restriction: number
    created_at: number
    _all: number
  }


  export type Award_categoryAvgAggregateInputType = {
    id?: true
    pillar_id?: true
    total_awards?: true
    age_limit?: true
  }

  export type Award_categorySumAggregateInputType = {
    id?: true
    pillar_id?: true
    total_awards?: true
    age_limit?: true
  }

  export type Award_categoryMinAggregateInputType = {
    id?: true
    pillar_id?: true
    name?: true
    description?: true
    total_awards?: true
    age_limit?: true
    gender_restriction?: true
    created_at?: true
  }

  export type Award_categoryMaxAggregateInputType = {
    id?: true
    pillar_id?: true
    name?: true
    description?: true
    total_awards?: true
    age_limit?: true
    gender_restriction?: true
    created_at?: true
  }

  export type Award_categoryCountAggregateInputType = {
    id?: true
    pillar_id?: true
    name?: true
    description?: true
    total_awards?: true
    age_limit?: true
    gender_restriction?: true
    created_at?: true
    _all?: true
  }

  export type Award_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_category to aggregate.
     */
    where?: award_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_categories to fetch.
     */
    orderBy?: award_categoryOrderByWithRelationInput | award_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: award_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned award_categories
    **/
    _count?: true | Award_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Award_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Award_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Award_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Award_categoryMaxAggregateInputType
  }

  export type GetAward_categoryAggregateType<T extends Award_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAward_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward_category[P]>
      : GetScalarType<T[P], AggregateAward_category[P]>
  }




  export type award_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_categoryWhereInput
    orderBy?: award_categoryOrderByWithAggregationInput | award_categoryOrderByWithAggregationInput[]
    by: Award_categoryScalarFieldEnum[] | Award_categoryScalarFieldEnum
    having?: award_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Award_categoryCountAggregateInputType | true
    _avg?: Award_categoryAvgAggregateInputType
    _sum?: Award_categorySumAggregateInputType
    _min?: Award_categoryMinAggregateInputType
    _max?: Award_categoryMaxAggregateInputType
  }

  export type Award_categoryGroupByOutputType = {
    id: bigint
    pillar_id: bigint
    name: string
    description: string | null
    total_awards: number
    age_limit: number | null
    gender_restriction: string | null
    created_at: Date
    _count: Award_categoryCountAggregateOutputType | null
    _avg: Award_categoryAvgAggregateOutputType | null
    _sum: Award_categorySumAggregateOutputType | null
    _min: Award_categoryMinAggregateOutputType | null
    _max: Award_categoryMaxAggregateOutputType | null
  }

  type GetAward_categoryGroupByPayload<T extends award_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Award_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Award_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Award_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Award_categoryGroupByOutputType[P]>
        }
      >
    >


  export type award_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pillar_id?: boolean
    name?: boolean
    description?: boolean
    total_awards?: boolean
    age_limit?: boolean
    gender_restriction?: boolean
    created_at?: boolean
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
    focus_areas?: boolean | award_category$focus_areasArgs<ExtArgs>
    nominations?: boolean | award_category$nominationsArgs<ExtArgs>
    _count?: boolean | Award_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_category"]>

  export type award_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pillar_id?: boolean
    name?: boolean
    description?: boolean
    total_awards?: boolean
    age_limit?: boolean
    gender_restriction?: boolean
    created_at?: boolean
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_category"]>

  export type award_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pillar_id?: boolean
    name?: boolean
    description?: boolean
    total_awards?: boolean
    age_limit?: boolean
    gender_restriction?: boolean
    created_at?: boolean
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_category"]>

  export type award_categorySelectScalar = {
    id?: boolean
    pillar_id?: boolean
    name?: boolean
    description?: boolean
    total_awards?: boolean
    age_limit?: boolean
    gender_restriction?: boolean
    created_at?: boolean
  }

  export type award_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pillar_id" | "name" | "description" | "total_awards" | "age_limit" | "gender_restriction" | "created_at", ExtArgs["result"]["award_category"]>
  export type award_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
    focus_areas?: boolean | award_category$focus_areasArgs<ExtArgs>
    nominations?: boolean | award_category$nominationsArgs<ExtArgs>
    _count?: boolean | Award_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type award_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
  }
  export type award_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | award_pillarDefaultArgs<ExtArgs>
  }

  export type $award_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "award_category"
    objects: {
      pillar: Prisma.$award_pillarPayload<ExtArgs>
      focus_areas: Prisma.$award_focus_areaPayload<ExtArgs>[]
      nominations: Prisma.$award_nominationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      pillar_id: bigint
      name: string
      description: string | null
      total_awards: number
      age_limit: number | null
      gender_restriction: string | null
      created_at: Date
    }, ExtArgs["result"]["award_category"]>
    composites: {}
  }

  type award_categoryGetPayload<S extends boolean | null | undefined | award_categoryDefaultArgs> = $Result.GetResult<Prisma.$award_categoryPayload, S>

  type award_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<award_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Award_categoryCountAggregateInputType | true
    }

  export interface award_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['award_category'], meta: { name: 'award_category' } }
    /**
     * Find zero or one Award_category that matches the filter.
     * @param {award_categoryFindUniqueArgs} args - Arguments to find a Award_category
     * @example
     * // Get one Award_category
     * const award_category = await prisma.award_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends award_categoryFindUniqueArgs>(args: SelectSubset<T, award_categoryFindUniqueArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {award_categoryFindUniqueOrThrowArgs} args - Arguments to find a Award_category
     * @example
     * // Get one Award_category
     * const award_category = await prisma.award_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends award_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, award_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryFindFirstArgs} args - Arguments to find a Award_category
     * @example
     * // Get one Award_category
     * const award_category = await prisma.award_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends award_categoryFindFirstArgs>(args?: SelectSubset<T, award_categoryFindFirstArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryFindFirstOrThrowArgs} args - Arguments to find a Award_category
     * @example
     * // Get one Award_category
     * const award_category = await prisma.award_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends award_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, award_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Award_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Award_categories
     * const award_categories = await prisma.award_category.findMany()
     * 
     * // Get first 10 Award_categories
     * const award_categories = await prisma.award_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const award_categoryWithIdOnly = await prisma.award_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends award_categoryFindManyArgs>(args?: SelectSubset<T, award_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award_category.
     * @param {award_categoryCreateArgs} args - Arguments to create a Award_category.
     * @example
     * // Create one Award_category
     * const Award_category = await prisma.award_category.create({
     *   data: {
     *     // ... data to create a Award_category
     *   }
     * })
     * 
     */
    create<T extends award_categoryCreateArgs>(args: SelectSubset<T, award_categoryCreateArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Award_categories.
     * @param {award_categoryCreateManyArgs} args - Arguments to create many Award_categories.
     * @example
     * // Create many Award_categories
     * const award_category = await prisma.award_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends award_categoryCreateManyArgs>(args?: SelectSubset<T, award_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Award_categories and returns the data saved in the database.
     * @param {award_categoryCreateManyAndReturnArgs} args - Arguments to create many Award_categories.
     * @example
     * // Create many Award_categories
     * const award_category = await prisma.award_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Award_categories and only return the `id`
     * const award_categoryWithIdOnly = await prisma.award_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends award_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, award_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award_category.
     * @param {award_categoryDeleteArgs} args - Arguments to delete one Award_category.
     * @example
     * // Delete one Award_category
     * const Award_category = await prisma.award_category.delete({
     *   where: {
     *     // ... filter to delete one Award_category
     *   }
     * })
     * 
     */
    delete<T extends award_categoryDeleteArgs>(args: SelectSubset<T, award_categoryDeleteArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award_category.
     * @param {award_categoryUpdateArgs} args - Arguments to update one Award_category.
     * @example
     * // Update one Award_category
     * const award_category = await prisma.award_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends award_categoryUpdateArgs>(args: SelectSubset<T, award_categoryUpdateArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Award_categories.
     * @param {award_categoryDeleteManyArgs} args - Arguments to filter Award_categories to delete.
     * @example
     * // Delete a few Award_categories
     * const { count } = await prisma.award_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends award_categoryDeleteManyArgs>(args?: SelectSubset<T, award_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Award_categories
     * const award_category = await prisma.award_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends award_categoryUpdateManyArgs>(args: SelectSubset<T, award_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_categories and returns the data updated in the database.
     * @param {award_categoryUpdateManyAndReturnArgs} args - Arguments to update many Award_categories.
     * @example
     * // Update many Award_categories
     * const award_category = await prisma.award_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Award_categories and only return the `id`
     * const award_categoryWithIdOnly = await prisma.award_category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends award_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, award_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award_category.
     * @param {award_categoryUpsertArgs} args - Arguments to update or create a Award_category.
     * @example
     * // Update or create a Award_category
     * const award_category = await prisma.award_category.upsert({
     *   create: {
     *     // ... data to create a Award_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award_category we want to update
     *   }
     * })
     */
    upsert<T extends award_categoryUpsertArgs>(args: SelectSubset<T, award_categoryUpsertArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Award_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryCountArgs} args - Arguments to filter Award_categories to count.
     * @example
     * // Count the number of Award_categories
     * const count = await prisma.award_category.count({
     *   where: {
     *     // ... the filter for the Award_categories we want to count
     *   }
     * })
    **/
    count<T extends award_categoryCountArgs>(
      args?: Subset<T, award_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Award_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Award_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Award_categoryAggregateArgs>(args: Subset<T, Award_categoryAggregateArgs>): Prisma.PrismaPromise<GetAward_categoryAggregateType<T>>

    /**
     * Group by Award_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_categoryGroupByArgs} args - Group by arguments.
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
      T extends award_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: award_categoryGroupByArgs['orderBy'] }
        : { orderBy?: award_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, award_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAward_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the award_category model
   */
  readonly fields: award_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for award_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__award_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pillar<T extends award_pillarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, award_pillarDefaultArgs<ExtArgs>>): Prisma__award_pillarClient<$Result.GetResult<Prisma.$award_pillarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    focus_areas<T extends award_category$focus_areasArgs<ExtArgs> = {}>(args?: Subset<T, award_category$focus_areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nominations<T extends award_category$nominationsArgs<ExtArgs> = {}>(args?: Subset<T, award_category$nominationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the award_category model
   */
  interface award_categoryFieldRefs {
    readonly id: FieldRef<"award_category", 'BigInt'>
    readonly pillar_id: FieldRef<"award_category", 'BigInt'>
    readonly name: FieldRef<"award_category", 'String'>
    readonly description: FieldRef<"award_category", 'String'>
    readonly total_awards: FieldRef<"award_category", 'Int'>
    readonly age_limit: FieldRef<"award_category", 'Int'>
    readonly gender_restriction: FieldRef<"award_category", 'String'>
    readonly created_at: FieldRef<"award_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * award_category findUnique
   */
  export type award_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter, which award_category to fetch.
     */
    where: award_categoryWhereUniqueInput
  }

  /**
   * award_category findUniqueOrThrow
   */
  export type award_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter, which award_category to fetch.
     */
    where: award_categoryWhereUniqueInput
  }

  /**
   * award_category findFirst
   */
  export type award_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter, which award_category to fetch.
     */
    where?: award_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_categories to fetch.
     */
    orderBy?: award_categoryOrderByWithRelationInput | award_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_categories.
     */
    cursor?: award_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_categories.
     */
    distinct?: Award_categoryScalarFieldEnum | Award_categoryScalarFieldEnum[]
  }

  /**
   * award_category findFirstOrThrow
   */
  export type award_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter, which award_category to fetch.
     */
    where?: award_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_categories to fetch.
     */
    orderBy?: award_categoryOrderByWithRelationInput | award_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_categories.
     */
    cursor?: award_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_categories.
     */
    distinct?: Award_categoryScalarFieldEnum | Award_categoryScalarFieldEnum[]
  }

  /**
   * award_category findMany
   */
  export type award_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter, which award_categories to fetch.
     */
    where?: award_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_categories to fetch.
     */
    orderBy?: award_categoryOrderByWithRelationInput | award_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing award_categories.
     */
    cursor?: award_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_categories.
     */
    skip?: number
    distinct?: Award_categoryScalarFieldEnum | Award_categoryScalarFieldEnum[]
  }

  /**
   * award_category create
   */
  export type award_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a award_category.
     */
    data: XOR<award_categoryCreateInput, award_categoryUncheckedCreateInput>
  }

  /**
   * award_category createMany
   */
  export type award_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many award_categories.
     */
    data: award_categoryCreateManyInput | award_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_category createManyAndReturn
   */
  export type award_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many award_categories.
     */
    data: award_categoryCreateManyInput | award_categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_category update
   */
  export type award_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a award_category.
     */
    data: XOR<award_categoryUpdateInput, award_categoryUncheckedUpdateInput>
    /**
     * Choose, which award_category to update.
     */
    where: award_categoryWhereUniqueInput
  }

  /**
   * award_category updateMany
   */
  export type award_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update award_categories.
     */
    data: XOR<award_categoryUpdateManyMutationInput, award_categoryUncheckedUpdateManyInput>
    /**
     * Filter which award_categories to update
     */
    where?: award_categoryWhereInput
    /**
     * Limit how many award_categories to update.
     */
    limit?: number
  }

  /**
   * award_category updateManyAndReturn
   */
  export type award_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * The data used to update award_categories.
     */
    data: XOR<award_categoryUpdateManyMutationInput, award_categoryUncheckedUpdateManyInput>
    /**
     * Filter which award_categories to update
     */
    where?: award_categoryWhereInput
    /**
     * Limit how many award_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_category upsert
   */
  export type award_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the award_category to update in case it exists.
     */
    where: award_categoryWhereUniqueInput
    /**
     * In case the award_category found by the `where` argument doesn't exist, create a new award_category with this data.
     */
    create: XOR<award_categoryCreateInput, award_categoryUncheckedCreateInput>
    /**
     * In case the award_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<award_categoryUpdateInput, award_categoryUncheckedUpdateInput>
  }

  /**
   * award_category delete
   */
  export type award_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
    /**
     * Filter which award_category to delete.
     */
    where: award_categoryWhereUniqueInput
  }

  /**
   * award_category deleteMany
   */
  export type award_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_categories to delete
     */
    where?: award_categoryWhereInput
    /**
     * Limit how many award_categories to delete.
     */
    limit?: number
  }

  /**
   * award_category.focus_areas
   */
  export type award_category$focus_areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    where?: award_focus_areaWhereInput
    orderBy?: award_focus_areaOrderByWithRelationInput | award_focus_areaOrderByWithRelationInput[]
    cursor?: award_focus_areaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_focus_areaScalarFieldEnum | Award_focus_areaScalarFieldEnum[]
  }

  /**
   * award_category.nominations
   */
  export type award_category$nominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    where?: award_nominationWhereInput
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    cursor?: award_nominationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
  }

  /**
   * award_category without action
   */
  export type award_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_category
     */
    select?: award_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_category
     */
    omit?: award_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_categoryInclude<ExtArgs> | null
  }


  /**
   * Model award_focus_area
   */

  export type AggregateAward_focus_area = {
    _count: Award_focus_areaCountAggregateOutputType | null
    _avg: Award_focus_areaAvgAggregateOutputType | null
    _sum: Award_focus_areaSumAggregateOutputType | null
    _min: Award_focus_areaMinAggregateOutputType | null
    _max: Award_focus_areaMaxAggregateOutputType | null
  }

  export type Award_focus_areaAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type Award_focus_areaSumAggregateOutputType = {
    id: bigint | null
    category_id: bigint | null
  }

  export type Award_focus_areaMinAggregateOutputType = {
    id: bigint | null
    category_id: bigint | null
    name: string | null
  }

  export type Award_focus_areaMaxAggregateOutputType = {
    id: bigint | null
    category_id: bigint | null
    name: string | null
  }

  export type Award_focus_areaCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    _all: number
  }


  export type Award_focus_areaAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type Award_focus_areaSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type Award_focus_areaMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
  }

  export type Award_focus_areaMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
  }

  export type Award_focus_areaCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    _all?: true
  }

  export type Award_focus_areaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_focus_area to aggregate.
     */
    where?: award_focus_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_focus_areas to fetch.
     */
    orderBy?: award_focus_areaOrderByWithRelationInput | award_focus_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: award_focus_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_focus_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_focus_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned award_focus_areas
    **/
    _count?: true | Award_focus_areaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Award_focus_areaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Award_focus_areaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Award_focus_areaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Award_focus_areaMaxAggregateInputType
  }

  export type GetAward_focus_areaAggregateType<T extends Award_focus_areaAggregateArgs> = {
        [P in keyof T & keyof AggregateAward_focus_area]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward_focus_area[P]>
      : GetScalarType<T[P], AggregateAward_focus_area[P]>
  }




  export type award_focus_areaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_focus_areaWhereInput
    orderBy?: award_focus_areaOrderByWithAggregationInput | award_focus_areaOrderByWithAggregationInput[]
    by: Award_focus_areaScalarFieldEnum[] | Award_focus_areaScalarFieldEnum
    having?: award_focus_areaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Award_focus_areaCountAggregateInputType | true
    _avg?: Award_focus_areaAvgAggregateInputType
    _sum?: Award_focus_areaSumAggregateInputType
    _min?: Award_focus_areaMinAggregateInputType
    _max?: Award_focus_areaMaxAggregateInputType
  }

  export type Award_focus_areaGroupByOutputType = {
    id: bigint
    category_id: bigint
    name: string
    _count: Award_focus_areaCountAggregateOutputType | null
    _avg: Award_focus_areaAvgAggregateOutputType | null
    _sum: Award_focus_areaSumAggregateOutputType | null
    _min: Award_focus_areaMinAggregateOutputType | null
    _max: Award_focus_areaMaxAggregateOutputType | null
  }

  type GetAward_focus_areaGroupByPayload<T extends award_focus_areaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Award_focus_areaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Award_focus_areaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Award_focus_areaGroupByOutputType[P]>
            : GetScalarType<T[P], Award_focus_areaGroupByOutputType[P]>
        }
      >
    >


  export type award_focus_areaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    awardNominations?: boolean | award_focus_area$awardNominationsArgs<ExtArgs>
    _count?: boolean | Award_focus_areaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_focus_area"]>

  export type award_focus_areaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_focus_area"]>

  export type award_focus_areaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_focus_area"]>

  export type award_focus_areaSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
  }

  export type award_focus_areaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "name", ExtArgs["result"]["award_focus_area"]>
  export type award_focus_areaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    awardNominations?: boolean | award_focus_area$awardNominationsArgs<ExtArgs>
    _count?: boolean | Award_focus_areaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type award_focus_areaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
  }
  export type award_focus_areaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
  }

  export type $award_focus_areaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "award_focus_area"
    objects: {
      category: Prisma.$award_categoryPayload<ExtArgs>
      awardNominations: Prisma.$award_nominationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      category_id: bigint
      name: string
    }, ExtArgs["result"]["award_focus_area"]>
    composites: {}
  }

  type award_focus_areaGetPayload<S extends boolean | null | undefined | award_focus_areaDefaultArgs> = $Result.GetResult<Prisma.$award_focus_areaPayload, S>

  type award_focus_areaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<award_focus_areaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Award_focus_areaCountAggregateInputType | true
    }

  export interface award_focus_areaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['award_focus_area'], meta: { name: 'award_focus_area' } }
    /**
     * Find zero or one Award_focus_area that matches the filter.
     * @param {award_focus_areaFindUniqueArgs} args - Arguments to find a Award_focus_area
     * @example
     * // Get one Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends award_focus_areaFindUniqueArgs>(args: SelectSubset<T, award_focus_areaFindUniqueArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award_focus_area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {award_focus_areaFindUniqueOrThrowArgs} args - Arguments to find a Award_focus_area
     * @example
     * // Get one Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends award_focus_areaFindUniqueOrThrowArgs>(args: SelectSubset<T, award_focus_areaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_focus_area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaFindFirstArgs} args - Arguments to find a Award_focus_area
     * @example
     * // Get one Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends award_focus_areaFindFirstArgs>(args?: SelectSubset<T, award_focus_areaFindFirstArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_focus_area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaFindFirstOrThrowArgs} args - Arguments to find a Award_focus_area
     * @example
     * // Get one Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends award_focus_areaFindFirstOrThrowArgs>(args?: SelectSubset<T, award_focus_areaFindFirstOrThrowArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Award_focus_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Award_focus_areas
     * const award_focus_areas = await prisma.award_focus_area.findMany()
     * 
     * // Get first 10 Award_focus_areas
     * const award_focus_areas = await prisma.award_focus_area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const award_focus_areaWithIdOnly = await prisma.award_focus_area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends award_focus_areaFindManyArgs>(args?: SelectSubset<T, award_focus_areaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award_focus_area.
     * @param {award_focus_areaCreateArgs} args - Arguments to create a Award_focus_area.
     * @example
     * // Create one Award_focus_area
     * const Award_focus_area = await prisma.award_focus_area.create({
     *   data: {
     *     // ... data to create a Award_focus_area
     *   }
     * })
     * 
     */
    create<T extends award_focus_areaCreateArgs>(args: SelectSubset<T, award_focus_areaCreateArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Award_focus_areas.
     * @param {award_focus_areaCreateManyArgs} args - Arguments to create many Award_focus_areas.
     * @example
     * // Create many Award_focus_areas
     * const award_focus_area = await prisma.award_focus_area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends award_focus_areaCreateManyArgs>(args?: SelectSubset<T, award_focus_areaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Award_focus_areas and returns the data saved in the database.
     * @param {award_focus_areaCreateManyAndReturnArgs} args - Arguments to create many Award_focus_areas.
     * @example
     * // Create many Award_focus_areas
     * const award_focus_area = await prisma.award_focus_area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Award_focus_areas and only return the `id`
     * const award_focus_areaWithIdOnly = await prisma.award_focus_area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends award_focus_areaCreateManyAndReturnArgs>(args?: SelectSubset<T, award_focus_areaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award_focus_area.
     * @param {award_focus_areaDeleteArgs} args - Arguments to delete one Award_focus_area.
     * @example
     * // Delete one Award_focus_area
     * const Award_focus_area = await prisma.award_focus_area.delete({
     *   where: {
     *     // ... filter to delete one Award_focus_area
     *   }
     * })
     * 
     */
    delete<T extends award_focus_areaDeleteArgs>(args: SelectSubset<T, award_focus_areaDeleteArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award_focus_area.
     * @param {award_focus_areaUpdateArgs} args - Arguments to update one Award_focus_area.
     * @example
     * // Update one Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends award_focus_areaUpdateArgs>(args: SelectSubset<T, award_focus_areaUpdateArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Award_focus_areas.
     * @param {award_focus_areaDeleteManyArgs} args - Arguments to filter Award_focus_areas to delete.
     * @example
     * // Delete a few Award_focus_areas
     * const { count } = await prisma.award_focus_area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends award_focus_areaDeleteManyArgs>(args?: SelectSubset<T, award_focus_areaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_focus_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Award_focus_areas
     * const award_focus_area = await prisma.award_focus_area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends award_focus_areaUpdateManyArgs>(args: SelectSubset<T, award_focus_areaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_focus_areas and returns the data updated in the database.
     * @param {award_focus_areaUpdateManyAndReturnArgs} args - Arguments to update many Award_focus_areas.
     * @example
     * // Update many Award_focus_areas
     * const award_focus_area = await prisma.award_focus_area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Award_focus_areas and only return the `id`
     * const award_focus_areaWithIdOnly = await prisma.award_focus_area.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends award_focus_areaUpdateManyAndReturnArgs>(args: SelectSubset<T, award_focus_areaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award_focus_area.
     * @param {award_focus_areaUpsertArgs} args - Arguments to update or create a Award_focus_area.
     * @example
     * // Update or create a Award_focus_area
     * const award_focus_area = await prisma.award_focus_area.upsert({
     *   create: {
     *     // ... data to create a Award_focus_area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award_focus_area we want to update
     *   }
     * })
     */
    upsert<T extends award_focus_areaUpsertArgs>(args: SelectSubset<T, award_focus_areaUpsertArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Award_focus_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaCountArgs} args - Arguments to filter Award_focus_areas to count.
     * @example
     * // Count the number of Award_focus_areas
     * const count = await prisma.award_focus_area.count({
     *   where: {
     *     // ... the filter for the Award_focus_areas we want to count
     *   }
     * })
    **/
    count<T extends award_focus_areaCountArgs>(
      args?: Subset<T, award_focus_areaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Award_focus_areaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award_focus_area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Award_focus_areaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Award_focus_areaAggregateArgs>(args: Subset<T, Award_focus_areaAggregateArgs>): Prisma.PrismaPromise<GetAward_focus_areaAggregateType<T>>

    /**
     * Group by Award_focus_area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_focus_areaGroupByArgs} args - Group by arguments.
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
      T extends award_focus_areaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: award_focus_areaGroupByArgs['orderBy'] }
        : { orderBy?: award_focus_areaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, award_focus_areaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAward_focus_areaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the award_focus_area model
   */
  readonly fields: award_focus_areaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for award_focus_area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__award_focus_areaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends award_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, award_categoryDefaultArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awardNominations<T extends award_focus_area$awardNominationsArgs<ExtArgs> = {}>(args?: Subset<T, award_focus_area$awardNominationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the award_focus_area model
   */
  interface award_focus_areaFieldRefs {
    readonly id: FieldRef<"award_focus_area", 'BigInt'>
    readonly category_id: FieldRef<"award_focus_area", 'BigInt'>
    readonly name: FieldRef<"award_focus_area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * award_focus_area findUnique
   */
  export type award_focus_areaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter, which award_focus_area to fetch.
     */
    where: award_focus_areaWhereUniqueInput
  }

  /**
   * award_focus_area findUniqueOrThrow
   */
  export type award_focus_areaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter, which award_focus_area to fetch.
     */
    where: award_focus_areaWhereUniqueInput
  }

  /**
   * award_focus_area findFirst
   */
  export type award_focus_areaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter, which award_focus_area to fetch.
     */
    where?: award_focus_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_focus_areas to fetch.
     */
    orderBy?: award_focus_areaOrderByWithRelationInput | award_focus_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_focus_areas.
     */
    cursor?: award_focus_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_focus_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_focus_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_focus_areas.
     */
    distinct?: Award_focus_areaScalarFieldEnum | Award_focus_areaScalarFieldEnum[]
  }

  /**
   * award_focus_area findFirstOrThrow
   */
  export type award_focus_areaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter, which award_focus_area to fetch.
     */
    where?: award_focus_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_focus_areas to fetch.
     */
    orderBy?: award_focus_areaOrderByWithRelationInput | award_focus_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_focus_areas.
     */
    cursor?: award_focus_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_focus_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_focus_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_focus_areas.
     */
    distinct?: Award_focus_areaScalarFieldEnum | Award_focus_areaScalarFieldEnum[]
  }

  /**
   * award_focus_area findMany
   */
  export type award_focus_areaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter, which award_focus_areas to fetch.
     */
    where?: award_focus_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_focus_areas to fetch.
     */
    orderBy?: award_focus_areaOrderByWithRelationInput | award_focus_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing award_focus_areas.
     */
    cursor?: award_focus_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_focus_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_focus_areas.
     */
    skip?: number
    distinct?: Award_focus_areaScalarFieldEnum | Award_focus_areaScalarFieldEnum[]
  }

  /**
   * award_focus_area create
   */
  export type award_focus_areaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * The data needed to create a award_focus_area.
     */
    data: XOR<award_focus_areaCreateInput, award_focus_areaUncheckedCreateInput>
  }

  /**
   * award_focus_area createMany
   */
  export type award_focus_areaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many award_focus_areas.
     */
    data: award_focus_areaCreateManyInput | award_focus_areaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_focus_area createManyAndReturn
   */
  export type award_focus_areaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * The data used to create many award_focus_areas.
     */
    data: award_focus_areaCreateManyInput | award_focus_areaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_focus_area update
   */
  export type award_focus_areaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * The data needed to update a award_focus_area.
     */
    data: XOR<award_focus_areaUpdateInput, award_focus_areaUncheckedUpdateInput>
    /**
     * Choose, which award_focus_area to update.
     */
    where: award_focus_areaWhereUniqueInput
  }

  /**
   * award_focus_area updateMany
   */
  export type award_focus_areaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update award_focus_areas.
     */
    data: XOR<award_focus_areaUpdateManyMutationInput, award_focus_areaUncheckedUpdateManyInput>
    /**
     * Filter which award_focus_areas to update
     */
    where?: award_focus_areaWhereInput
    /**
     * Limit how many award_focus_areas to update.
     */
    limit?: number
  }

  /**
   * award_focus_area updateManyAndReturn
   */
  export type award_focus_areaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * The data used to update award_focus_areas.
     */
    data: XOR<award_focus_areaUpdateManyMutationInput, award_focus_areaUncheckedUpdateManyInput>
    /**
     * Filter which award_focus_areas to update
     */
    where?: award_focus_areaWhereInput
    /**
     * Limit how many award_focus_areas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_focus_area upsert
   */
  export type award_focus_areaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * The filter to search for the award_focus_area to update in case it exists.
     */
    where: award_focus_areaWhereUniqueInput
    /**
     * In case the award_focus_area found by the `where` argument doesn't exist, create a new award_focus_area with this data.
     */
    create: XOR<award_focus_areaCreateInput, award_focus_areaUncheckedCreateInput>
    /**
     * In case the award_focus_area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<award_focus_areaUpdateInput, award_focus_areaUncheckedUpdateInput>
  }

  /**
   * award_focus_area delete
   */
  export type award_focus_areaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    /**
     * Filter which award_focus_area to delete.
     */
    where: award_focus_areaWhereUniqueInput
  }

  /**
   * award_focus_area deleteMany
   */
  export type award_focus_areaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_focus_areas to delete
     */
    where?: award_focus_areaWhereInput
    /**
     * Limit how many award_focus_areas to delete.
     */
    limit?: number
  }

  /**
   * award_focus_area.awardNominations
   */
  export type award_focus_area$awardNominationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    where?: award_nominationWhereInput
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    cursor?: award_nominationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
  }

  /**
   * award_focus_area without action
   */
  export type award_focus_areaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
  }


  /**
   * Model award_nomination
   */

  export type AggregateAward_nomination = {
    _count: Award_nominationCountAggregateOutputType | null
    _avg: Award_nominationAvgAggregateOutputType | null
    _sum: Award_nominationSumAggregateOutputType | null
    _min: Award_nominationMinAggregateOutputType | null
    _max: Award_nominationMaxAggregateOutputType | null
  }

  export type Award_nominationAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    focus_area_id: number | null
  }

  export type Award_nominationSumAggregateOutputType = {
    id: bigint | null
    category_id: bigint | null
    focus_area_id: bigint | null
  }

  export type Award_nominationMinAggregateOutputType = {
    id: bigint | null
    transaction_id: string | null
    category_id: bigint | null
    focus_area_id: bigint | null
    nominee_name: string | null
    designation: string | null
    organisation: string | null
    aadhaar: string | null
    pan: string | null
    dossier_file: Bytes | null
    dossier_filename: string | null
    achievement_writeup: string | null
    status: $Enums.nomination_status | null
    created_at: Date | null
  }

  export type Award_nominationMaxAggregateOutputType = {
    id: bigint | null
    transaction_id: string | null
    category_id: bigint | null
    focus_area_id: bigint | null
    nominee_name: string | null
    designation: string | null
    organisation: string | null
    aadhaar: string | null
    pan: string | null
    dossier_file: Bytes | null
    dossier_filename: string | null
    achievement_writeup: string | null
    status: $Enums.nomination_status | null
    created_at: Date | null
  }

  export type Award_nominationCountAggregateOutputType = {
    id: number
    transaction_id: number
    category_id: number
    focus_area_id: number
    nominee_name: number
    designation: number
    organisation: number
    aadhaar: number
    pan: number
    dossier_file: number
    dossier_filename: number
    achievement_writeup: number
    status: number
    created_at: number
    _all: number
  }


  export type Award_nominationAvgAggregateInputType = {
    id?: true
    category_id?: true
    focus_area_id?: true
  }

  export type Award_nominationSumAggregateInputType = {
    id?: true
    category_id?: true
    focus_area_id?: true
  }

  export type Award_nominationMinAggregateInputType = {
    id?: true
    transaction_id?: true
    category_id?: true
    focus_area_id?: true
    nominee_name?: true
    designation?: true
    organisation?: true
    aadhaar?: true
    pan?: true
    dossier_file?: true
    dossier_filename?: true
    achievement_writeup?: true
    status?: true
    created_at?: true
  }

  export type Award_nominationMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    category_id?: true
    focus_area_id?: true
    nominee_name?: true
    designation?: true
    organisation?: true
    aadhaar?: true
    pan?: true
    dossier_file?: true
    dossier_filename?: true
    achievement_writeup?: true
    status?: true
    created_at?: true
  }

  export type Award_nominationCountAggregateInputType = {
    id?: true
    transaction_id?: true
    category_id?: true
    focus_area_id?: true
    nominee_name?: true
    designation?: true
    organisation?: true
    aadhaar?: true
    pan?: true
    dossier_file?: true
    dossier_filename?: true
    achievement_writeup?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Award_nominationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_nomination to aggregate.
     */
    where?: award_nominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_nominations to fetch.
     */
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: award_nominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned award_nominations
    **/
    _count?: true | Award_nominationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Award_nominationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Award_nominationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Award_nominationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Award_nominationMaxAggregateInputType
  }

  export type GetAward_nominationAggregateType<T extends Award_nominationAggregateArgs> = {
        [P in keyof T & keyof AggregateAward_nomination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward_nomination[P]>
      : GetScalarType<T[P], AggregateAward_nomination[P]>
  }




  export type award_nominationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_nominationWhereInput
    orderBy?: award_nominationOrderByWithAggregationInput | award_nominationOrderByWithAggregationInput[]
    by: Award_nominationScalarFieldEnum[] | Award_nominationScalarFieldEnum
    having?: award_nominationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Award_nominationCountAggregateInputType | true
    _avg?: Award_nominationAvgAggregateInputType
    _sum?: Award_nominationSumAggregateInputType
    _min?: Award_nominationMinAggregateInputType
    _max?: Award_nominationMaxAggregateInputType
  }

  export type Award_nominationGroupByOutputType = {
    id: bigint
    transaction_id: string
    category_id: bigint
    focus_area_id: bigint | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar: string | null
    pan: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status: $Enums.nomination_status
    created_at: Date
    _count: Award_nominationCountAggregateOutputType | null
    _avg: Award_nominationAvgAggregateOutputType | null
    _sum: Award_nominationSumAggregateOutputType | null
    _min: Award_nominationMinAggregateOutputType | null
    _max: Award_nominationMaxAggregateOutputType | null
  }

  type GetAward_nominationGroupByPayload<T extends award_nominationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Award_nominationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Award_nominationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Award_nominationGroupByOutputType[P]>
            : GetScalarType<T[P], Award_nominationGroupByOutputType[P]>
        }
      >
    >


  export type award_nominationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    category_id?: boolean
    focus_area_id?: boolean
    nominee_name?: boolean
    designation?: boolean
    organisation?: boolean
    aadhaar?: boolean
    pan?: boolean
    dossier_file?: boolean
    dossier_filename?: boolean
    achievement_writeup?: boolean
    status?: boolean
    created_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
    proof_links?: boolean | award_nomination$proof_linksArgs<ExtArgs>
    _count?: boolean | Award_nominationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_nomination"]>

  export type award_nominationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    category_id?: boolean
    focus_area_id?: boolean
    nominee_name?: boolean
    designation?: boolean
    organisation?: boolean
    aadhaar?: boolean
    pan?: boolean
    dossier_file?: boolean
    dossier_filename?: boolean
    achievement_writeup?: boolean
    status?: boolean
    created_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
  }, ExtArgs["result"]["award_nomination"]>

  export type award_nominationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    category_id?: boolean
    focus_area_id?: boolean
    nominee_name?: boolean
    designation?: boolean
    organisation?: boolean
    aadhaar?: boolean
    pan?: boolean
    dossier_file?: boolean
    dossier_filename?: boolean
    achievement_writeup?: boolean
    status?: boolean
    created_at?: boolean
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
  }, ExtArgs["result"]["award_nomination"]>

  export type award_nominationSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    category_id?: boolean
    focus_area_id?: boolean
    nominee_name?: boolean
    designation?: boolean
    organisation?: boolean
    aadhaar?: boolean
    pan?: boolean
    dossier_file?: boolean
    dossier_filename?: boolean
    achievement_writeup?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type award_nominationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "category_id" | "focus_area_id" | "nominee_name" | "designation" | "organisation" | "aadhaar" | "pan" | "dossier_file" | "dossier_filename" | "achievement_writeup" | "status" | "created_at", ExtArgs["result"]["award_nomination"]>
  export type award_nominationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
    proof_links?: boolean | award_nomination$proof_linksArgs<ExtArgs>
    _count?: boolean | Award_nominationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type award_nominationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
  }
  export type award_nominationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registered_master?: boolean | registered_masterDefaultArgs<ExtArgs>
    category?: boolean | award_categoryDefaultArgs<ExtArgs>
    focus_area?: boolean | award_nomination$focus_areaArgs<ExtArgs>
  }

  export type $award_nominationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "award_nomination"
    objects: {
      registered_master: Prisma.$registered_masterPayload<ExtArgs>
      category: Prisma.$award_categoryPayload<ExtArgs>
      focus_area: Prisma.$award_focus_areaPayload<ExtArgs> | null
      proof_links: Prisma.$award_proof_linkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      transaction_id: string
      category_id: bigint
      focus_area_id: bigint | null
      nominee_name: string
      designation: string
      organisation: string
      aadhaar: string | null
      pan: string | null
      dossier_file: Prisma.Bytes
      dossier_filename: string
      achievement_writeup: string
      status: $Enums.nomination_status
      created_at: Date
    }, ExtArgs["result"]["award_nomination"]>
    composites: {}
  }

  type award_nominationGetPayload<S extends boolean | null | undefined | award_nominationDefaultArgs> = $Result.GetResult<Prisma.$award_nominationPayload, S>

  type award_nominationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<award_nominationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Award_nominationCountAggregateInputType | true
    }

  export interface award_nominationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['award_nomination'], meta: { name: 'award_nomination' } }
    /**
     * Find zero or one Award_nomination that matches the filter.
     * @param {award_nominationFindUniqueArgs} args - Arguments to find a Award_nomination
     * @example
     * // Get one Award_nomination
     * const award_nomination = await prisma.award_nomination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends award_nominationFindUniqueArgs>(args: SelectSubset<T, award_nominationFindUniqueArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award_nomination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {award_nominationFindUniqueOrThrowArgs} args - Arguments to find a Award_nomination
     * @example
     * // Get one Award_nomination
     * const award_nomination = await prisma.award_nomination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends award_nominationFindUniqueOrThrowArgs>(args: SelectSubset<T, award_nominationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_nomination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationFindFirstArgs} args - Arguments to find a Award_nomination
     * @example
     * // Get one Award_nomination
     * const award_nomination = await prisma.award_nomination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends award_nominationFindFirstArgs>(args?: SelectSubset<T, award_nominationFindFirstArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_nomination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationFindFirstOrThrowArgs} args - Arguments to find a Award_nomination
     * @example
     * // Get one Award_nomination
     * const award_nomination = await prisma.award_nomination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends award_nominationFindFirstOrThrowArgs>(args?: SelectSubset<T, award_nominationFindFirstOrThrowArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Award_nominations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Award_nominations
     * const award_nominations = await prisma.award_nomination.findMany()
     * 
     * // Get first 10 Award_nominations
     * const award_nominations = await prisma.award_nomination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const award_nominationWithIdOnly = await prisma.award_nomination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends award_nominationFindManyArgs>(args?: SelectSubset<T, award_nominationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award_nomination.
     * @param {award_nominationCreateArgs} args - Arguments to create a Award_nomination.
     * @example
     * // Create one Award_nomination
     * const Award_nomination = await prisma.award_nomination.create({
     *   data: {
     *     // ... data to create a Award_nomination
     *   }
     * })
     * 
     */
    create<T extends award_nominationCreateArgs>(args: SelectSubset<T, award_nominationCreateArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Award_nominations.
     * @param {award_nominationCreateManyArgs} args - Arguments to create many Award_nominations.
     * @example
     * // Create many Award_nominations
     * const award_nomination = await prisma.award_nomination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends award_nominationCreateManyArgs>(args?: SelectSubset<T, award_nominationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Award_nominations and returns the data saved in the database.
     * @param {award_nominationCreateManyAndReturnArgs} args - Arguments to create many Award_nominations.
     * @example
     * // Create many Award_nominations
     * const award_nomination = await prisma.award_nomination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Award_nominations and only return the `id`
     * const award_nominationWithIdOnly = await prisma.award_nomination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends award_nominationCreateManyAndReturnArgs>(args?: SelectSubset<T, award_nominationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award_nomination.
     * @param {award_nominationDeleteArgs} args - Arguments to delete one Award_nomination.
     * @example
     * // Delete one Award_nomination
     * const Award_nomination = await prisma.award_nomination.delete({
     *   where: {
     *     // ... filter to delete one Award_nomination
     *   }
     * })
     * 
     */
    delete<T extends award_nominationDeleteArgs>(args: SelectSubset<T, award_nominationDeleteArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award_nomination.
     * @param {award_nominationUpdateArgs} args - Arguments to update one Award_nomination.
     * @example
     * // Update one Award_nomination
     * const award_nomination = await prisma.award_nomination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends award_nominationUpdateArgs>(args: SelectSubset<T, award_nominationUpdateArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Award_nominations.
     * @param {award_nominationDeleteManyArgs} args - Arguments to filter Award_nominations to delete.
     * @example
     * // Delete a few Award_nominations
     * const { count } = await prisma.award_nomination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends award_nominationDeleteManyArgs>(args?: SelectSubset<T, award_nominationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_nominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Award_nominations
     * const award_nomination = await prisma.award_nomination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends award_nominationUpdateManyArgs>(args: SelectSubset<T, award_nominationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_nominations and returns the data updated in the database.
     * @param {award_nominationUpdateManyAndReturnArgs} args - Arguments to update many Award_nominations.
     * @example
     * // Update many Award_nominations
     * const award_nomination = await prisma.award_nomination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Award_nominations and only return the `id`
     * const award_nominationWithIdOnly = await prisma.award_nomination.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends award_nominationUpdateManyAndReturnArgs>(args: SelectSubset<T, award_nominationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award_nomination.
     * @param {award_nominationUpsertArgs} args - Arguments to update or create a Award_nomination.
     * @example
     * // Update or create a Award_nomination
     * const award_nomination = await prisma.award_nomination.upsert({
     *   create: {
     *     // ... data to create a Award_nomination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award_nomination we want to update
     *   }
     * })
     */
    upsert<T extends award_nominationUpsertArgs>(args: SelectSubset<T, award_nominationUpsertArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Award_nominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationCountArgs} args - Arguments to filter Award_nominations to count.
     * @example
     * // Count the number of Award_nominations
     * const count = await prisma.award_nomination.count({
     *   where: {
     *     // ... the filter for the Award_nominations we want to count
     *   }
     * })
    **/
    count<T extends award_nominationCountArgs>(
      args?: Subset<T, award_nominationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Award_nominationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award_nomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Award_nominationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Award_nominationAggregateArgs>(args: Subset<T, Award_nominationAggregateArgs>): Prisma.PrismaPromise<GetAward_nominationAggregateType<T>>

    /**
     * Group by Award_nomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_nominationGroupByArgs} args - Group by arguments.
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
      T extends award_nominationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: award_nominationGroupByArgs['orderBy'] }
        : { orderBy?: award_nominationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, award_nominationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAward_nominationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the award_nomination model
   */
  readonly fields: award_nominationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for award_nomination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__award_nominationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registered_master<T extends registered_masterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, registered_masterDefaultArgs<ExtArgs>>): Prisma__registered_masterClient<$Result.GetResult<Prisma.$registered_masterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends award_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, award_categoryDefaultArgs<ExtArgs>>): Prisma__award_categoryClient<$Result.GetResult<Prisma.$award_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    focus_area<T extends award_nomination$focus_areaArgs<ExtArgs> = {}>(args?: Subset<T, award_nomination$focus_areaArgs<ExtArgs>>): Prisma__award_focus_areaClient<$Result.GetResult<Prisma.$award_focus_areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proof_links<T extends award_nomination$proof_linksArgs<ExtArgs> = {}>(args?: Subset<T, award_nomination$proof_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the award_nomination model
   */
  interface award_nominationFieldRefs {
    readonly id: FieldRef<"award_nomination", 'BigInt'>
    readonly transaction_id: FieldRef<"award_nomination", 'String'>
    readonly category_id: FieldRef<"award_nomination", 'BigInt'>
    readonly focus_area_id: FieldRef<"award_nomination", 'BigInt'>
    readonly nominee_name: FieldRef<"award_nomination", 'String'>
    readonly designation: FieldRef<"award_nomination", 'String'>
    readonly organisation: FieldRef<"award_nomination", 'String'>
    readonly aadhaar: FieldRef<"award_nomination", 'String'>
    readonly pan: FieldRef<"award_nomination", 'String'>
    readonly dossier_file: FieldRef<"award_nomination", 'Bytes'>
    readonly dossier_filename: FieldRef<"award_nomination", 'String'>
    readonly achievement_writeup: FieldRef<"award_nomination", 'String'>
    readonly status: FieldRef<"award_nomination", 'nomination_status'>
    readonly created_at: FieldRef<"award_nomination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * award_nomination findUnique
   */
  export type award_nominationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter, which award_nomination to fetch.
     */
    where: award_nominationWhereUniqueInput
  }

  /**
   * award_nomination findUniqueOrThrow
   */
  export type award_nominationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter, which award_nomination to fetch.
     */
    where: award_nominationWhereUniqueInput
  }

  /**
   * award_nomination findFirst
   */
  export type award_nominationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter, which award_nomination to fetch.
     */
    where?: award_nominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_nominations to fetch.
     */
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_nominations.
     */
    cursor?: award_nominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_nominations.
     */
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
  }

  /**
   * award_nomination findFirstOrThrow
   */
  export type award_nominationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter, which award_nomination to fetch.
     */
    where?: award_nominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_nominations to fetch.
     */
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_nominations.
     */
    cursor?: award_nominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_nominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_nominations.
     */
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
  }

  /**
   * award_nomination findMany
   */
  export type award_nominationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter, which award_nominations to fetch.
     */
    where?: award_nominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_nominations to fetch.
     */
    orderBy?: award_nominationOrderByWithRelationInput | award_nominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing award_nominations.
     */
    cursor?: award_nominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_nominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_nominations.
     */
    skip?: number
    distinct?: Award_nominationScalarFieldEnum | Award_nominationScalarFieldEnum[]
  }

  /**
   * award_nomination create
   */
  export type award_nominationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * The data needed to create a award_nomination.
     */
    data: XOR<award_nominationCreateInput, award_nominationUncheckedCreateInput>
  }

  /**
   * award_nomination createMany
   */
  export type award_nominationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many award_nominations.
     */
    data: award_nominationCreateManyInput | award_nominationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_nomination createManyAndReturn
   */
  export type award_nominationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * The data used to create many award_nominations.
     */
    data: award_nominationCreateManyInput | award_nominationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_nomination update
   */
  export type award_nominationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * The data needed to update a award_nomination.
     */
    data: XOR<award_nominationUpdateInput, award_nominationUncheckedUpdateInput>
    /**
     * Choose, which award_nomination to update.
     */
    where: award_nominationWhereUniqueInput
  }

  /**
   * award_nomination updateMany
   */
  export type award_nominationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update award_nominations.
     */
    data: XOR<award_nominationUpdateManyMutationInput, award_nominationUncheckedUpdateManyInput>
    /**
     * Filter which award_nominations to update
     */
    where?: award_nominationWhereInput
    /**
     * Limit how many award_nominations to update.
     */
    limit?: number
  }

  /**
   * award_nomination updateManyAndReturn
   */
  export type award_nominationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * The data used to update award_nominations.
     */
    data: XOR<award_nominationUpdateManyMutationInput, award_nominationUncheckedUpdateManyInput>
    /**
     * Filter which award_nominations to update
     */
    where?: award_nominationWhereInput
    /**
     * Limit how many award_nominations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_nomination upsert
   */
  export type award_nominationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * The filter to search for the award_nomination to update in case it exists.
     */
    where: award_nominationWhereUniqueInput
    /**
     * In case the award_nomination found by the `where` argument doesn't exist, create a new award_nomination with this data.
     */
    create: XOR<award_nominationCreateInput, award_nominationUncheckedCreateInput>
    /**
     * In case the award_nomination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<award_nominationUpdateInput, award_nominationUncheckedUpdateInput>
  }

  /**
   * award_nomination delete
   */
  export type award_nominationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
    /**
     * Filter which award_nomination to delete.
     */
    where: award_nominationWhereUniqueInput
  }

  /**
   * award_nomination deleteMany
   */
  export type award_nominationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_nominations to delete
     */
    where?: award_nominationWhereInput
    /**
     * Limit how many award_nominations to delete.
     */
    limit?: number
  }

  /**
   * award_nomination.focus_area
   */
  export type award_nomination$focus_areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_focus_area
     */
    select?: award_focus_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_focus_area
     */
    omit?: award_focus_areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_focus_areaInclude<ExtArgs> | null
    where?: award_focus_areaWhereInput
  }

  /**
   * award_nomination.proof_links
   */
  export type award_nomination$proof_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    where?: award_proof_linkWhereInput
    orderBy?: award_proof_linkOrderByWithRelationInput | award_proof_linkOrderByWithRelationInput[]
    cursor?: award_proof_linkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Award_proof_linkScalarFieldEnum | Award_proof_linkScalarFieldEnum[]
  }

  /**
   * award_nomination without action
   */
  export type award_nominationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_nomination
     */
    select?: award_nominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_nomination
     */
    omit?: award_nominationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_nominationInclude<ExtArgs> | null
  }


  /**
   * Model award_proof_link
   */

  export type AggregateAward_proof_link = {
    _count: Award_proof_linkCountAggregateOutputType | null
    _avg: Award_proof_linkAvgAggregateOutputType | null
    _sum: Award_proof_linkSumAggregateOutputType | null
    _min: Award_proof_linkMinAggregateOutputType | null
    _max: Award_proof_linkMaxAggregateOutputType | null
  }

  export type Award_proof_linkAvgAggregateOutputType = {
    id: number | null
    nomination_id: number | null
  }

  export type Award_proof_linkSumAggregateOutputType = {
    id: bigint | null
    nomination_id: bigint | null
  }

  export type Award_proof_linkMinAggregateOutputType = {
    id: bigint | null
    nomination_id: bigint | null
    url: string | null
  }

  export type Award_proof_linkMaxAggregateOutputType = {
    id: bigint | null
    nomination_id: bigint | null
    url: string | null
  }

  export type Award_proof_linkCountAggregateOutputType = {
    id: number
    nomination_id: number
    url: number
    _all: number
  }


  export type Award_proof_linkAvgAggregateInputType = {
    id?: true
    nomination_id?: true
  }

  export type Award_proof_linkSumAggregateInputType = {
    id?: true
    nomination_id?: true
  }

  export type Award_proof_linkMinAggregateInputType = {
    id?: true
    nomination_id?: true
    url?: true
  }

  export type Award_proof_linkMaxAggregateInputType = {
    id?: true
    nomination_id?: true
    url?: true
  }

  export type Award_proof_linkCountAggregateInputType = {
    id?: true
    nomination_id?: true
    url?: true
    _all?: true
  }

  export type Award_proof_linkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_proof_link to aggregate.
     */
    where?: award_proof_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_proof_links to fetch.
     */
    orderBy?: award_proof_linkOrderByWithRelationInput | award_proof_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: award_proof_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_proof_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_proof_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned award_proof_links
    **/
    _count?: true | Award_proof_linkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Award_proof_linkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Award_proof_linkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Award_proof_linkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Award_proof_linkMaxAggregateInputType
  }

  export type GetAward_proof_linkAggregateType<T extends Award_proof_linkAggregateArgs> = {
        [P in keyof T & keyof AggregateAward_proof_link]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward_proof_link[P]>
      : GetScalarType<T[P], AggregateAward_proof_link[P]>
  }




  export type award_proof_linkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: award_proof_linkWhereInput
    orderBy?: award_proof_linkOrderByWithAggregationInput | award_proof_linkOrderByWithAggregationInput[]
    by: Award_proof_linkScalarFieldEnum[] | Award_proof_linkScalarFieldEnum
    having?: award_proof_linkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Award_proof_linkCountAggregateInputType | true
    _avg?: Award_proof_linkAvgAggregateInputType
    _sum?: Award_proof_linkSumAggregateInputType
    _min?: Award_proof_linkMinAggregateInputType
    _max?: Award_proof_linkMaxAggregateInputType
  }

  export type Award_proof_linkGroupByOutputType = {
    id: bigint
    nomination_id: bigint
    url: string
    _count: Award_proof_linkCountAggregateOutputType | null
    _avg: Award_proof_linkAvgAggregateOutputType | null
    _sum: Award_proof_linkSumAggregateOutputType | null
    _min: Award_proof_linkMinAggregateOutputType | null
    _max: Award_proof_linkMaxAggregateOutputType | null
  }

  type GetAward_proof_linkGroupByPayload<T extends award_proof_linkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Award_proof_linkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Award_proof_linkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Award_proof_linkGroupByOutputType[P]>
            : GetScalarType<T[P], Award_proof_linkGroupByOutputType[P]>
        }
      >
    >


  export type award_proof_linkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomination_id?: boolean
    url?: boolean
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_proof_link"]>

  export type award_proof_linkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomination_id?: boolean
    url?: boolean
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_proof_link"]>

  export type award_proof_linkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomination_id?: boolean
    url?: boolean
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award_proof_link"]>

  export type award_proof_linkSelectScalar = {
    id?: boolean
    nomination_id?: boolean
    url?: boolean
  }

  export type award_proof_linkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomination_id" | "url", ExtArgs["result"]["award_proof_link"]>
  export type award_proof_linkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }
  export type award_proof_linkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }
  export type award_proof_linkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nomination?: boolean | award_nominationDefaultArgs<ExtArgs>
  }

  export type $award_proof_linkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "award_proof_link"
    objects: {
      nomination: Prisma.$award_nominationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nomination_id: bigint
      url: string
    }, ExtArgs["result"]["award_proof_link"]>
    composites: {}
  }

  type award_proof_linkGetPayload<S extends boolean | null | undefined | award_proof_linkDefaultArgs> = $Result.GetResult<Prisma.$award_proof_linkPayload, S>

  type award_proof_linkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<award_proof_linkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Award_proof_linkCountAggregateInputType | true
    }

  export interface award_proof_linkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['award_proof_link'], meta: { name: 'award_proof_link' } }
    /**
     * Find zero or one Award_proof_link that matches the filter.
     * @param {award_proof_linkFindUniqueArgs} args - Arguments to find a Award_proof_link
     * @example
     * // Get one Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends award_proof_linkFindUniqueArgs>(args: SelectSubset<T, award_proof_linkFindUniqueArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award_proof_link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {award_proof_linkFindUniqueOrThrowArgs} args - Arguments to find a Award_proof_link
     * @example
     * // Get one Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends award_proof_linkFindUniqueOrThrowArgs>(args: SelectSubset<T, award_proof_linkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_proof_link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkFindFirstArgs} args - Arguments to find a Award_proof_link
     * @example
     * // Get one Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends award_proof_linkFindFirstArgs>(args?: SelectSubset<T, award_proof_linkFindFirstArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award_proof_link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkFindFirstOrThrowArgs} args - Arguments to find a Award_proof_link
     * @example
     * // Get one Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends award_proof_linkFindFirstOrThrowArgs>(args?: SelectSubset<T, award_proof_linkFindFirstOrThrowArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Award_proof_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Award_proof_links
     * const award_proof_links = await prisma.award_proof_link.findMany()
     * 
     * // Get first 10 Award_proof_links
     * const award_proof_links = await prisma.award_proof_link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const award_proof_linkWithIdOnly = await prisma.award_proof_link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends award_proof_linkFindManyArgs>(args?: SelectSubset<T, award_proof_linkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award_proof_link.
     * @param {award_proof_linkCreateArgs} args - Arguments to create a Award_proof_link.
     * @example
     * // Create one Award_proof_link
     * const Award_proof_link = await prisma.award_proof_link.create({
     *   data: {
     *     // ... data to create a Award_proof_link
     *   }
     * })
     * 
     */
    create<T extends award_proof_linkCreateArgs>(args: SelectSubset<T, award_proof_linkCreateArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Award_proof_links.
     * @param {award_proof_linkCreateManyArgs} args - Arguments to create many Award_proof_links.
     * @example
     * // Create many Award_proof_links
     * const award_proof_link = await prisma.award_proof_link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends award_proof_linkCreateManyArgs>(args?: SelectSubset<T, award_proof_linkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Award_proof_links and returns the data saved in the database.
     * @param {award_proof_linkCreateManyAndReturnArgs} args - Arguments to create many Award_proof_links.
     * @example
     * // Create many Award_proof_links
     * const award_proof_link = await prisma.award_proof_link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Award_proof_links and only return the `id`
     * const award_proof_linkWithIdOnly = await prisma.award_proof_link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends award_proof_linkCreateManyAndReturnArgs>(args?: SelectSubset<T, award_proof_linkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award_proof_link.
     * @param {award_proof_linkDeleteArgs} args - Arguments to delete one Award_proof_link.
     * @example
     * // Delete one Award_proof_link
     * const Award_proof_link = await prisma.award_proof_link.delete({
     *   where: {
     *     // ... filter to delete one Award_proof_link
     *   }
     * })
     * 
     */
    delete<T extends award_proof_linkDeleteArgs>(args: SelectSubset<T, award_proof_linkDeleteArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award_proof_link.
     * @param {award_proof_linkUpdateArgs} args - Arguments to update one Award_proof_link.
     * @example
     * // Update one Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends award_proof_linkUpdateArgs>(args: SelectSubset<T, award_proof_linkUpdateArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Award_proof_links.
     * @param {award_proof_linkDeleteManyArgs} args - Arguments to filter Award_proof_links to delete.
     * @example
     * // Delete a few Award_proof_links
     * const { count } = await prisma.award_proof_link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends award_proof_linkDeleteManyArgs>(args?: SelectSubset<T, award_proof_linkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_proof_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Award_proof_links
     * const award_proof_link = await prisma.award_proof_link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends award_proof_linkUpdateManyArgs>(args: SelectSubset<T, award_proof_linkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Award_proof_links and returns the data updated in the database.
     * @param {award_proof_linkUpdateManyAndReturnArgs} args - Arguments to update many Award_proof_links.
     * @example
     * // Update many Award_proof_links
     * const award_proof_link = await prisma.award_proof_link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Award_proof_links and only return the `id`
     * const award_proof_linkWithIdOnly = await prisma.award_proof_link.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends award_proof_linkUpdateManyAndReturnArgs>(args: SelectSubset<T, award_proof_linkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award_proof_link.
     * @param {award_proof_linkUpsertArgs} args - Arguments to update or create a Award_proof_link.
     * @example
     * // Update or create a Award_proof_link
     * const award_proof_link = await prisma.award_proof_link.upsert({
     *   create: {
     *     // ... data to create a Award_proof_link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award_proof_link we want to update
     *   }
     * })
     */
    upsert<T extends award_proof_linkUpsertArgs>(args: SelectSubset<T, award_proof_linkUpsertArgs<ExtArgs>>): Prisma__award_proof_linkClient<$Result.GetResult<Prisma.$award_proof_linkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Award_proof_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkCountArgs} args - Arguments to filter Award_proof_links to count.
     * @example
     * // Count the number of Award_proof_links
     * const count = await prisma.award_proof_link.count({
     *   where: {
     *     // ... the filter for the Award_proof_links we want to count
     *   }
     * })
    **/
    count<T extends award_proof_linkCountArgs>(
      args?: Subset<T, award_proof_linkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Award_proof_linkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award_proof_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Award_proof_linkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Award_proof_linkAggregateArgs>(args: Subset<T, Award_proof_linkAggregateArgs>): Prisma.PrismaPromise<GetAward_proof_linkAggregateType<T>>

    /**
     * Group by Award_proof_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {award_proof_linkGroupByArgs} args - Group by arguments.
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
      T extends award_proof_linkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: award_proof_linkGroupByArgs['orderBy'] }
        : { orderBy?: award_proof_linkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, award_proof_linkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAward_proof_linkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the award_proof_link model
   */
  readonly fields: award_proof_linkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for award_proof_link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__award_proof_linkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nomination<T extends award_nominationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, award_nominationDefaultArgs<ExtArgs>>): Prisma__award_nominationClient<$Result.GetResult<Prisma.$award_nominationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the award_proof_link model
   */
  interface award_proof_linkFieldRefs {
    readonly id: FieldRef<"award_proof_link", 'BigInt'>
    readonly nomination_id: FieldRef<"award_proof_link", 'BigInt'>
    readonly url: FieldRef<"award_proof_link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * award_proof_link findUnique
   */
  export type award_proof_linkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter, which award_proof_link to fetch.
     */
    where: award_proof_linkWhereUniqueInput
  }

  /**
   * award_proof_link findUniqueOrThrow
   */
  export type award_proof_linkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter, which award_proof_link to fetch.
     */
    where: award_proof_linkWhereUniqueInput
  }

  /**
   * award_proof_link findFirst
   */
  export type award_proof_linkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter, which award_proof_link to fetch.
     */
    where?: award_proof_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_proof_links to fetch.
     */
    orderBy?: award_proof_linkOrderByWithRelationInput | award_proof_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_proof_links.
     */
    cursor?: award_proof_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_proof_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_proof_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_proof_links.
     */
    distinct?: Award_proof_linkScalarFieldEnum | Award_proof_linkScalarFieldEnum[]
  }

  /**
   * award_proof_link findFirstOrThrow
   */
  export type award_proof_linkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter, which award_proof_link to fetch.
     */
    where?: award_proof_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_proof_links to fetch.
     */
    orderBy?: award_proof_linkOrderByWithRelationInput | award_proof_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for award_proof_links.
     */
    cursor?: award_proof_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_proof_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_proof_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of award_proof_links.
     */
    distinct?: Award_proof_linkScalarFieldEnum | Award_proof_linkScalarFieldEnum[]
  }

  /**
   * award_proof_link findMany
   */
  export type award_proof_linkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter, which award_proof_links to fetch.
     */
    where?: award_proof_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of award_proof_links to fetch.
     */
    orderBy?: award_proof_linkOrderByWithRelationInput | award_proof_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing award_proof_links.
     */
    cursor?: award_proof_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` award_proof_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` award_proof_links.
     */
    skip?: number
    distinct?: Award_proof_linkScalarFieldEnum | Award_proof_linkScalarFieldEnum[]
  }

  /**
   * award_proof_link create
   */
  export type award_proof_linkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * The data needed to create a award_proof_link.
     */
    data: XOR<award_proof_linkCreateInput, award_proof_linkUncheckedCreateInput>
  }

  /**
   * award_proof_link createMany
   */
  export type award_proof_linkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many award_proof_links.
     */
    data: award_proof_linkCreateManyInput | award_proof_linkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * award_proof_link createManyAndReturn
   */
  export type award_proof_linkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * The data used to create many award_proof_links.
     */
    data: award_proof_linkCreateManyInput | award_proof_linkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_proof_link update
   */
  export type award_proof_linkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * The data needed to update a award_proof_link.
     */
    data: XOR<award_proof_linkUpdateInput, award_proof_linkUncheckedUpdateInput>
    /**
     * Choose, which award_proof_link to update.
     */
    where: award_proof_linkWhereUniqueInput
  }

  /**
   * award_proof_link updateMany
   */
  export type award_proof_linkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update award_proof_links.
     */
    data: XOR<award_proof_linkUpdateManyMutationInput, award_proof_linkUncheckedUpdateManyInput>
    /**
     * Filter which award_proof_links to update
     */
    where?: award_proof_linkWhereInput
    /**
     * Limit how many award_proof_links to update.
     */
    limit?: number
  }

  /**
   * award_proof_link updateManyAndReturn
   */
  export type award_proof_linkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * The data used to update award_proof_links.
     */
    data: XOR<award_proof_linkUpdateManyMutationInput, award_proof_linkUncheckedUpdateManyInput>
    /**
     * Filter which award_proof_links to update
     */
    where?: award_proof_linkWhereInput
    /**
     * Limit how many award_proof_links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * award_proof_link upsert
   */
  export type award_proof_linkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * The filter to search for the award_proof_link to update in case it exists.
     */
    where: award_proof_linkWhereUniqueInput
    /**
     * In case the award_proof_link found by the `where` argument doesn't exist, create a new award_proof_link with this data.
     */
    create: XOR<award_proof_linkCreateInput, award_proof_linkUncheckedCreateInput>
    /**
     * In case the award_proof_link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<award_proof_linkUpdateInput, award_proof_linkUncheckedUpdateInput>
  }

  /**
   * award_proof_link delete
   */
  export type award_proof_linkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
    /**
     * Filter which award_proof_link to delete.
     */
    where: award_proof_linkWhereUniqueInput
  }

  /**
   * award_proof_link deleteMany
   */
  export type award_proof_linkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which award_proof_links to delete
     */
    where?: award_proof_linkWhereInput
    /**
     * Limit how many award_proof_links to delete.
     */
    limit?: number
  }

  /**
   * award_proof_link without action
   */
  export type award_proof_linkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the award_proof_link
     */
    select?: award_proof_linkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the award_proof_link
     */
    omit?: award_proof_linkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: award_proof_linkInclude<ExtArgs> | null
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
    transaction_id: 'transaction_id',
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
    transaction_date: 'transaction_date',
    abstract_submitted: 'abstract_submitted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Registered_masterScalarFieldEnum = (typeof Registered_masterScalarFieldEnum)[keyof typeof Registered_masterScalarFieldEnum]


  export const Abstract_submissionScalarFieldEnum: {
    abstract_id: 'abstract_id',
    transaction_id: 'transaction_id',
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


  export const Award_pillarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type Award_pillarScalarFieldEnum = (typeof Award_pillarScalarFieldEnum)[keyof typeof Award_pillarScalarFieldEnum]


  export const Award_categoryScalarFieldEnum: {
    id: 'id',
    pillar_id: 'pillar_id',
    name: 'name',
    description: 'description',
    total_awards: 'total_awards',
    age_limit: 'age_limit',
    gender_restriction: 'gender_restriction',
    created_at: 'created_at'
  };

  export type Award_categoryScalarFieldEnum = (typeof Award_categoryScalarFieldEnum)[keyof typeof Award_categoryScalarFieldEnum]


  export const Award_focus_areaScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name'
  };

  export type Award_focus_areaScalarFieldEnum = (typeof Award_focus_areaScalarFieldEnum)[keyof typeof Award_focus_areaScalarFieldEnum]


  export const Award_nominationScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    category_id: 'category_id',
    focus_area_id: 'focus_area_id',
    nominee_name: 'nominee_name',
    designation: 'designation',
    organisation: 'organisation',
    aadhaar: 'aadhaar',
    pan: 'pan',
    dossier_file: 'dossier_file',
    dossier_filename: 'dossier_filename',
    achievement_writeup: 'achievement_writeup',
    status: 'status',
    created_at: 'created_at'
  };

  export type Award_nominationScalarFieldEnum = (typeof Award_nominationScalarFieldEnum)[keyof typeof Award_nominationScalarFieldEnum]


  export const Award_proof_linkScalarFieldEnum: {
    id: 'id',
    nomination_id: 'nomination_id',
    url: 'url'
  };

  export type Award_proof_linkScalarFieldEnum = (typeof Award_proof_linkScalarFieldEnum)[keyof typeof Award_proof_linkScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'nomination_status'
   */
  export type Enumnomination_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'nomination_status'>
    


  /**
   * Reference to a field of type 'nomination_status[]'
   */
  export type ListEnumnomination_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'nomination_status[]'>
    


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
    transaction_id?: StringFilter<"registered_master"> | string
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
    transaction_date?: DateTimeNullableFilter<"registered_master"> | Date | string | null
    abstract_submitted?: BoolFilter<"registered_master"> | boolean
    created_at?: DateTimeFilter<"registered_master"> | Date | string
    updated_at?: DateTimeFilter<"registered_master"> | Date | string
    abstract_submission?: XOR<Abstract_submissionNullableScalarRelationFilter, abstract_submissionWhereInput> | null
    awardNominations?: Award_nominationListRelationFilter
  }

  export type registered_masterOrderByWithRelationInput = {
    transaction_id?: SortOrder
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
    transaction_date?: SortOrderInput | SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    abstract_submission?: abstract_submissionOrderByWithRelationInput
    awardNominations?: award_nominationOrderByRelationAggregateInput
  }

  export type registered_masterWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: string
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
    transaction_date?: DateTimeNullableFilter<"registered_master"> | Date | string | null
    abstract_submitted?: BoolFilter<"registered_master"> | boolean
    created_at?: DateTimeFilter<"registered_master"> | Date | string
    updated_at?: DateTimeFilter<"registered_master"> | Date | string
    abstract_submission?: XOR<Abstract_submissionNullableScalarRelationFilter, abstract_submissionWhereInput> | null
    awardNominations?: Award_nominationListRelationFilter
  }, "transaction_id" | "email">

  export type registered_masterOrderByWithAggregationInput = {
    transaction_id?: SortOrder
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
    transaction_id?: StringWithAggregatesFilter<"registered_master"> | string
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
    transaction_id?: StringFilter<"abstract_submission"> | string
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
    transaction_id?: SortOrder
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
    transaction_id?: string
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
  }, "abstract_id" | "transaction_id">

  export type abstract_submissionOrderByWithAggregationInput = {
    abstract_id?: SortOrder
    transaction_id?: SortOrder
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
    transaction_id?: StringWithAggregatesFilter<"abstract_submission"> | string
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

  export type award_pillarWhereInput = {
    AND?: award_pillarWhereInput | award_pillarWhereInput[]
    OR?: award_pillarWhereInput[]
    NOT?: award_pillarWhereInput | award_pillarWhereInput[]
    id?: BigIntFilter<"award_pillar"> | bigint | number
    name?: StringFilter<"award_pillar"> | string
    created_at?: DateTimeFilter<"award_pillar"> | Date | string
    categories?: Award_categoryListRelationFilter
  }

  export type award_pillarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    categories?: award_categoryOrderByRelationAggregateInput
  }

  export type award_pillarWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: award_pillarWhereInput | award_pillarWhereInput[]
    OR?: award_pillarWhereInput[]
    NOT?: award_pillarWhereInput | award_pillarWhereInput[]
    name?: StringFilter<"award_pillar"> | string
    created_at?: DateTimeFilter<"award_pillar"> | Date | string
    categories?: Award_categoryListRelationFilter
  }, "id">

  export type award_pillarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: award_pillarCountOrderByAggregateInput
    _avg?: award_pillarAvgOrderByAggregateInput
    _max?: award_pillarMaxOrderByAggregateInput
    _min?: award_pillarMinOrderByAggregateInput
    _sum?: award_pillarSumOrderByAggregateInput
  }

  export type award_pillarScalarWhereWithAggregatesInput = {
    AND?: award_pillarScalarWhereWithAggregatesInput | award_pillarScalarWhereWithAggregatesInput[]
    OR?: award_pillarScalarWhereWithAggregatesInput[]
    NOT?: award_pillarScalarWhereWithAggregatesInput | award_pillarScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"award_pillar"> | bigint | number
    name?: StringWithAggregatesFilter<"award_pillar"> | string
    created_at?: DateTimeWithAggregatesFilter<"award_pillar"> | Date | string
  }

  export type award_categoryWhereInput = {
    AND?: award_categoryWhereInput | award_categoryWhereInput[]
    OR?: award_categoryWhereInput[]
    NOT?: award_categoryWhereInput | award_categoryWhereInput[]
    id?: BigIntFilter<"award_category"> | bigint | number
    pillar_id?: BigIntFilter<"award_category"> | bigint | number
    name?: StringFilter<"award_category"> | string
    description?: StringNullableFilter<"award_category"> | string | null
    total_awards?: IntFilter<"award_category"> | number
    age_limit?: IntNullableFilter<"award_category"> | number | null
    gender_restriction?: StringNullableFilter<"award_category"> | string | null
    created_at?: DateTimeFilter<"award_category"> | Date | string
    pillar?: XOR<Award_pillarScalarRelationFilter, award_pillarWhereInput>
    focus_areas?: Award_focus_areaListRelationFilter
    nominations?: Award_nominationListRelationFilter
  }

  export type award_categoryOrderByWithRelationInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrderInput | SortOrder
    gender_restriction?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pillar?: award_pillarOrderByWithRelationInput
    focus_areas?: award_focus_areaOrderByRelationAggregateInput
    nominations?: award_nominationOrderByRelationAggregateInput
  }

  export type award_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: award_categoryWhereInput | award_categoryWhereInput[]
    OR?: award_categoryWhereInput[]
    NOT?: award_categoryWhereInput | award_categoryWhereInput[]
    pillar_id?: BigIntFilter<"award_category"> | bigint | number
    name?: StringFilter<"award_category"> | string
    description?: StringNullableFilter<"award_category"> | string | null
    total_awards?: IntFilter<"award_category"> | number
    age_limit?: IntNullableFilter<"award_category"> | number | null
    gender_restriction?: StringNullableFilter<"award_category"> | string | null
    created_at?: DateTimeFilter<"award_category"> | Date | string
    pillar?: XOR<Award_pillarScalarRelationFilter, award_pillarWhereInput>
    focus_areas?: Award_focus_areaListRelationFilter
    nominations?: Award_nominationListRelationFilter
  }, "id">

  export type award_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrderInput | SortOrder
    gender_restriction?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: award_categoryCountOrderByAggregateInput
    _avg?: award_categoryAvgOrderByAggregateInput
    _max?: award_categoryMaxOrderByAggregateInput
    _min?: award_categoryMinOrderByAggregateInput
    _sum?: award_categorySumOrderByAggregateInput
  }

  export type award_categoryScalarWhereWithAggregatesInput = {
    AND?: award_categoryScalarWhereWithAggregatesInput | award_categoryScalarWhereWithAggregatesInput[]
    OR?: award_categoryScalarWhereWithAggregatesInput[]
    NOT?: award_categoryScalarWhereWithAggregatesInput | award_categoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"award_category"> | bigint | number
    pillar_id?: BigIntWithAggregatesFilter<"award_category"> | bigint | number
    name?: StringWithAggregatesFilter<"award_category"> | string
    description?: StringNullableWithAggregatesFilter<"award_category"> | string | null
    total_awards?: IntWithAggregatesFilter<"award_category"> | number
    age_limit?: IntNullableWithAggregatesFilter<"award_category"> | number | null
    gender_restriction?: StringNullableWithAggregatesFilter<"award_category"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"award_category"> | Date | string
  }

  export type award_focus_areaWhereInput = {
    AND?: award_focus_areaWhereInput | award_focus_areaWhereInput[]
    OR?: award_focus_areaWhereInput[]
    NOT?: award_focus_areaWhereInput | award_focus_areaWhereInput[]
    id?: BigIntFilter<"award_focus_area"> | bigint | number
    category_id?: BigIntFilter<"award_focus_area"> | bigint | number
    name?: StringFilter<"award_focus_area"> | string
    category?: XOR<Award_categoryScalarRelationFilter, award_categoryWhereInput>
    awardNominations?: Award_nominationListRelationFilter
  }

  export type award_focus_areaOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    category?: award_categoryOrderByWithRelationInput
    awardNominations?: award_nominationOrderByRelationAggregateInput
  }

  export type award_focus_areaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: award_focus_areaWhereInput | award_focus_areaWhereInput[]
    OR?: award_focus_areaWhereInput[]
    NOT?: award_focus_areaWhereInput | award_focus_areaWhereInput[]
    category_id?: BigIntFilter<"award_focus_area"> | bigint | number
    name?: StringFilter<"award_focus_area"> | string
    category?: XOR<Award_categoryScalarRelationFilter, award_categoryWhereInput>
    awardNominations?: Award_nominationListRelationFilter
  }, "id">

  export type award_focus_areaOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    _count?: award_focus_areaCountOrderByAggregateInput
    _avg?: award_focus_areaAvgOrderByAggregateInput
    _max?: award_focus_areaMaxOrderByAggregateInput
    _min?: award_focus_areaMinOrderByAggregateInput
    _sum?: award_focus_areaSumOrderByAggregateInput
  }

  export type award_focus_areaScalarWhereWithAggregatesInput = {
    AND?: award_focus_areaScalarWhereWithAggregatesInput | award_focus_areaScalarWhereWithAggregatesInput[]
    OR?: award_focus_areaScalarWhereWithAggregatesInput[]
    NOT?: award_focus_areaScalarWhereWithAggregatesInput | award_focus_areaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"award_focus_area"> | bigint | number
    category_id?: BigIntWithAggregatesFilter<"award_focus_area"> | bigint | number
    name?: StringWithAggregatesFilter<"award_focus_area"> | string
  }

  export type award_nominationWhereInput = {
    AND?: award_nominationWhereInput | award_nominationWhereInput[]
    OR?: award_nominationWhereInput[]
    NOT?: award_nominationWhereInput | award_nominationWhereInput[]
    id?: BigIntFilter<"award_nomination"> | bigint | number
    transaction_id?: StringFilter<"award_nomination"> | string
    category_id?: BigIntFilter<"award_nomination"> | bigint | number
    focus_area_id?: BigIntNullableFilter<"award_nomination"> | bigint | number | null
    nominee_name?: StringFilter<"award_nomination"> | string
    designation?: StringFilter<"award_nomination"> | string
    organisation?: StringFilter<"award_nomination"> | string
    aadhaar?: StringNullableFilter<"award_nomination"> | string | null
    pan?: StringNullableFilter<"award_nomination"> | string | null
    dossier_file?: BytesFilter<"award_nomination"> | Bytes
    dossier_filename?: StringFilter<"award_nomination"> | string
    achievement_writeup?: StringFilter<"award_nomination"> | string
    status?: Enumnomination_statusFilter<"award_nomination"> | $Enums.nomination_status
    created_at?: DateTimeFilter<"award_nomination"> | Date | string
    registered_master?: XOR<Registered_masterScalarRelationFilter, registered_masterWhereInput>
    category?: XOR<Award_categoryScalarRelationFilter, award_categoryWhereInput>
    focus_area?: XOR<Award_focus_areaNullableScalarRelationFilter, award_focus_areaWhereInput> | null
    proof_links?: Award_proof_linkListRelationFilter
  }

  export type award_nominationOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrderInput | SortOrder
    nominee_name?: SortOrder
    designation?: SortOrder
    organisation?: SortOrder
    aadhaar?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    dossier_file?: SortOrder
    dossier_filename?: SortOrder
    achievement_writeup?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    registered_master?: registered_masterOrderByWithRelationInput
    category?: award_categoryOrderByWithRelationInput
    focus_area?: award_focus_areaOrderByWithRelationInput
    proof_links?: award_proof_linkOrderByRelationAggregateInput
  }

  export type award_nominationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: award_nominationWhereInput | award_nominationWhereInput[]
    OR?: award_nominationWhereInput[]
    NOT?: award_nominationWhereInput | award_nominationWhereInput[]
    transaction_id?: StringFilter<"award_nomination"> | string
    category_id?: BigIntFilter<"award_nomination"> | bigint | number
    focus_area_id?: BigIntNullableFilter<"award_nomination"> | bigint | number | null
    nominee_name?: StringFilter<"award_nomination"> | string
    designation?: StringFilter<"award_nomination"> | string
    organisation?: StringFilter<"award_nomination"> | string
    aadhaar?: StringNullableFilter<"award_nomination"> | string | null
    pan?: StringNullableFilter<"award_nomination"> | string | null
    dossier_file?: BytesFilter<"award_nomination"> | Bytes
    dossier_filename?: StringFilter<"award_nomination"> | string
    achievement_writeup?: StringFilter<"award_nomination"> | string
    status?: Enumnomination_statusFilter<"award_nomination"> | $Enums.nomination_status
    created_at?: DateTimeFilter<"award_nomination"> | Date | string
    registered_master?: XOR<Registered_masterScalarRelationFilter, registered_masterWhereInput>
    category?: XOR<Award_categoryScalarRelationFilter, award_categoryWhereInput>
    focus_area?: XOR<Award_focus_areaNullableScalarRelationFilter, award_focus_areaWhereInput> | null
    proof_links?: Award_proof_linkListRelationFilter
  }, "id">

  export type award_nominationOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrderInput | SortOrder
    nominee_name?: SortOrder
    designation?: SortOrder
    organisation?: SortOrder
    aadhaar?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    dossier_file?: SortOrder
    dossier_filename?: SortOrder
    achievement_writeup?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: award_nominationCountOrderByAggregateInput
    _avg?: award_nominationAvgOrderByAggregateInput
    _max?: award_nominationMaxOrderByAggregateInput
    _min?: award_nominationMinOrderByAggregateInput
    _sum?: award_nominationSumOrderByAggregateInput
  }

  export type award_nominationScalarWhereWithAggregatesInput = {
    AND?: award_nominationScalarWhereWithAggregatesInput | award_nominationScalarWhereWithAggregatesInput[]
    OR?: award_nominationScalarWhereWithAggregatesInput[]
    NOT?: award_nominationScalarWhereWithAggregatesInput | award_nominationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"award_nomination"> | bigint | number
    transaction_id?: StringWithAggregatesFilter<"award_nomination"> | string
    category_id?: BigIntWithAggregatesFilter<"award_nomination"> | bigint | number
    focus_area_id?: BigIntNullableWithAggregatesFilter<"award_nomination"> | bigint | number | null
    nominee_name?: StringWithAggregatesFilter<"award_nomination"> | string
    designation?: StringWithAggregatesFilter<"award_nomination"> | string
    organisation?: StringWithAggregatesFilter<"award_nomination"> | string
    aadhaar?: StringNullableWithAggregatesFilter<"award_nomination"> | string | null
    pan?: StringNullableWithAggregatesFilter<"award_nomination"> | string | null
    dossier_file?: BytesWithAggregatesFilter<"award_nomination"> | Bytes
    dossier_filename?: StringWithAggregatesFilter<"award_nomination"> | string
    achievement_writeup?: StringWithAggregatesFilter<"award_nomination"> | string
    status?: Enumnomination_statusWithAggregatesFilter<"award_nomination"> | $Enums.nomination_status
    created_at?: DateTimeWithAggregatesFilter<"award_nomination"> | Date | string
  }

  export type award_proof_linkWhereInput = {
    AND?: award_proof_linkWhereInput | award_proof_linkWhereInput[]
    OR?: award_proof_linkWhereInput[]
    NOT?: award_proof_linkWhereInput | award_proof_linkWhereInput[]
    id?: BigIntFilter<"award_proof_link"> | bigint | number
    nomination_id?: BigIntFilter<"award_proof_link"> | bigint | number
    url?: StringFilter<"award_proof_link"> | string
    nomination?: XOR<Award_nominationScalarRelationFilter, award_nominationWhereInput>
  }

  export type award_proof_linkOrderByWithRelationInput = {
    id?: SortOrder
    nomination_id?: SortOrder
    url?: SortOrder
    nomination?: award_nominationOrderByWithRelationInput
  }

  export type award_proof_linkWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: award_proof_linkWhereInput | award_proof_linkWhereInput[]
    OR?: award_proof_linkWhereInput[]
    NOT?: award_proof_linkWhereInput | award_proof_linkWhereInput[]
    nomination_id?: BigIntFilter<"award_proof_link"> | bigint | number
    url?: StringFilter<"award_proof_link"> | string
    nomination?: XOR<Award_nominationScalarRelationFilter, award_nominationWhereInput>
  }, "id">

  export type award_proof_linkOrderByWithAggregationInput = {
    id?: SortOrder
    nomination_id?: SortOrder
    url?: SortOrder
    _count?: award_proof_linkCountOrderByAggregateInput
    _avg?: award_proof_linkAvgOrderByAggregateInput
    _max?: award_proof_linkMaxOrderByAggregateInput
    _min?: award_proof_linkMinOrderByAggregateInput
    _sum?: award_proof_linkSumOrderByAggregateInput
  }

  export type award_proof_linkScalarWhereWithAggregatesInput = {
    AND?: award_proof_linkScalarWhereWithAggregatesInput | award_proof_linkScalarWhereWithAggregatesInput[]
    OR?: award_proof_linkScalarWhereWithAggregatesInput[]
    NOT?: award_proof_linkScalarWhereWithAggregatesInput | award_proof_linkScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"award_proof_link"> | bigint | number
    nomination_id?: BigIntWithAggregatesFilter<"award_proof_link"> | bigint | number
    url?: StringWithAggregatesFilter<"award_proof_link"> | string
  }

  export type registered_masterCreateInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionCreateNestedOneWithoutRegistered_masterInput
    awardNominations?: award_nominationCreateNestedManyWithoutRegistered_masterInput
  }

  export type registered_masterUncheckedCreateInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionUncheckedCreateNestedOneWithoutRegistered_masterInput
    awardNominations?: award_nominationUncheckedCreateNestedManyWithoutRegistered_masterInput
  }

  export type registered_masterUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUpdateOneWithoutRegistered_masterNestedInput
    awardNominations?: award_nominationUpdateManyWithoutRegistered_masterNestedInput
  }

  export type registered_masterUncheckedUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUncheckedUpdateOneWithoutRegistered_masterNestedInput
    awardNominations?: award_nominationUncheckedUpdateManyWithoutRegistered_masterNestedInput
  }

  export type registered_masterCreateManyInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type registered_masterUpdateManyMutationInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registered_masterUncheckedUpdateManyInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_id: string
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
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_id: string
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
    transaction_id?: StringFieldUpdateOperationsInput | string
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

  export type award_pillarCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string
    categories?: award_categoryCreateNestedManyWithoutPillarInput
  }

  export type award_pillarUncheckedCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string
    categories?: award_categoryUncheckedCreateNestedManyWithoutPillarInput
  }

  export type award_pillarUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: award_categoryUpdateManyWithoutPillarNestedInput
  }

  export type award_pillarUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: award_categoryUncheckedUpdateManyWithoutPillarNestedInput
  }

  export type award_pillarCreateManyInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string
  }

  export type award_pillarUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_pillarUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_categoryCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    pillar: award_pillarCreateNestedOneWithoutCategoriesInput
    focus_areas?: award_focus_areaCreateNestedManyWithoutCategoryInput
    nominations?: award_nominationCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryUncheckedCreateInput = {
    id?: bigint | number
    pillar_id: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    focus_areas?: award_focus_areaUncheckedCreateNestedManyWithoutCategoryInput
    nominations?: award_nominationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pillar?: award_pillarUpdateOneRequiredWithoutCategoriesNestedInput
    focus_areas?: award_focus_areaUpdateManyWithoutCategoryNestedInput
    nominations?: award_nominationUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pillar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    focus_areas?: award_focus_areaUncheckedUpdateManyWithoutCategoryNestedInput
    nominations?: award_nominationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryCreateManyInput = {
    id?: bigint | number
    pillar_id: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
  }

  export type award_categoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_categoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pillar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_focus_areaCreateInput = {
    id?: bigint | number
    name: string
    category: award_categoryCreateNestedOneWithoutFocus_areasInput
    awardNominations?: award_nominationCreateNestedManyWithoutFocus_areaInput
  }

  export type award_focus_areaUncheckedCreateInput = {
    id?: bigint | number
    category_id: bigint | number
    name: string
    awardNominations?: award_nominationUncheckedCreateNestedManyWithoutFocus_areaInput
  }

  export type award_focus_areaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: award_categoryUpdateOneRequiredWithoutFocus_areasNestedInput
    awardNominations?: award_nominationUpdateManyWithoutFocus_areaNestedInput
  }

  export type award_focus_areaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    awardNominations?: award_nominationUncheckedUpdateManyWithoutFocus_areaNestedInput
  }

  export type award_focus_areaCreateManyInput = {
    id?: bigint | number
    category_id: bigint | number
    name: string
  }

  export type award_focus_areaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type award_focus_areaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type award_nominationCreateInput = {
    id?: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    registered_master: registered_masterCreateNestedOneWithoutAwardNominationsInput
    category: award_categoryCreateNestedOneWithoutNominationsInput
    focus_area?: award_focus_areaCreateNestedOneWithoutAwardNominationsInput
    proof_links?: award_proof_linkCreateNestedManyWithoutNominationInput
  }

  export type award_nominationUncheckedCreateInput = {
    id?: bigint | number
    transaction_id: string
    category_id: bigint | number
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    proof_links?: award_proof_linkUncheckedCreateNestedManyWithoutNominationInput
  }

  export type award_nominationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_master?: registered_masterUpdateOneRequiredWithoutAwardNominationsNestedInput
    category?: award_categoryUpdateOneRequiredWithoutNominationsNestedInput
    focus_area?: award_focus_areaUpdateOneWithoutAwardNominationsNestedInput
    proof_links?: award_proof_linkUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    proof_links?: award_proof_linkUncheckedUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationCreateManyInput = {
    id?: bigint | number
    transaction_id: string
    category_id: bigint | number
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
  }

  export type award_nominationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_nominationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_proof_linkCreateInput = {
    id?: bigint | number
    url: string
    nomination: award_nominationCreateNestedOneWithoutProof_linksInput
  }

  export type award_proof_linkUncheckedCreateInput = {
    id?: bigint | number
    nomination_id: bigint | number
    url: string
  }

  export type award_proof_linkUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    nomination?: award_nominationUpdateOneRequiredWithoutProof_linksNestedInput
  }

  export type award_proof_linkUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomination_id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type award_proof_linkCreateManyInput = {
    id?: bigint | number
    nomination_id: bigint | number
    url: string
  }

  export type award_proof_linkUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type award_proof_linkUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nomination_id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
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

  export type Award_nominationListRelationFilter = {
    every?: award_nominationWhereInput
    some?: award_nominationWhereInput
    none?: award_nominationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type award_nominationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type registered_masterCountOrderByAggregateInput = {
    transaction_id?: SortOrder
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
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type registered_masterMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
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
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterMinOrderByAggregateInput = {
    transaction_id?: SortOrder
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
    transaction_date?: SortOrder
    abstract_submitted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type registered_masterSumOrderByAggregateInput = {
    amount?: SortOrder
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
    transaction_id?: SortOrder
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
    file_size_kb?: SortOrder
  }

  export type abstract_submissionMaxOrderByAggregateInput = {
    abstract_id?: SortOrder
    transaction_id?: SortOrder
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
    transaction_id?: SortOrder
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
    file_size_kb?: SortOrder
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

  export type Award_categoryListRelationFilter = {
    every?: award_categoryWhereInput
    some?: award_categoryWhereInput
    none?: award_categoryWhereInput
  }

  export type award_categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type award_pillarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type award_pillarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type award_pillarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type award_pillarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type award_pillarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Award_pillarScalarRelationFilter = {
    is?: award_pillarWhereInput
    isNot?: award_pillarWhereInput
  }

  export type Award_focus_areaListRelationFilter = {
    every?: award_focus_areaWhereInput
    some?: award_focus_areaWhereInput
    none?: award_focus_areaWhereInput
  }

  export type award_focus_areaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type award_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrder
    gender_restriction?: SortOrder
    created_at?: SortOrder
  }

  export type award_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrder
  }

  export type award_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrder
    gender_restriction?: SortOrder
    created_at?: SortOrder
  }

  export type award_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrder
    gender_restriction?: SortOrder
    created_at?: SortOrder
  }

  export type award_categorySumOrderByAggregateInput = {
    id?: SortOrder
    pillar_id?: SortOrder
    total_awards?: SortOrder
    age_limit?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Award_categoryScalarRelationFilter = {
    is?: award_categoryWhereInput
    isNot?: award_categoryWhereInput
  }

  export type award_focus_areaCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
  }

  export type award_focus_areaAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type award_focus_areaMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
  }

  export type award_focus_areaMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
  }

  export type award_focus_areaSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Enumnomination_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.nomination_status | Enumnomination_statusFieldRefInput<$PrismaModel>
    in?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumnomination_statusFilter<$PrismaModel> | $Enums.nomination_status
  }

  export type Award_focus_areaNullableScalarRelationFilter = {
    is?: award_focus_areaWhereInput | null
    isNot?: award_focus_areaWhereInput | null
  }

  export type Award_proof_linkListRelationFilter = {
    every?: award_proof_linkWhereInput
    some?: award_proof_linkWhereInput
    none?: award_proof_linkWhereInput
  }

  export type award_proof_linkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type award_nominationCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrder
    nominee_name?: SortOrder
    designation?: SortOrder
    organisation?: SortOrder
    aadhaar?: SortOrder
    pan?: SortOrder
    dossier_file?: SortOrder
    dossier_filename?: SortOrder
    achievement_writeup?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type award_nominationAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrder
  }

  export type award_nominationMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrder
    nominee_name?: SortOrder
    designation?: SortOrder
    organisation?: SortOrder
    aadhaar?: SortOrder
    pan?: SortOrder
    dossier_file?: SortOrder
    dossier_filename?: SortOrder
    achievement_writeup?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type award_nominationMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrder
    nominee_name?: SortOrder
    designation?: SortOrder
    organisation?: SortOrder
    aadhaar?: SortOrder
    pan?: SortOrder
    dossier_file?: SortOrder
    dossier_filename?: SortOrder
    achievement_writeup?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type award_nominationSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    focus_area_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Enumnomination_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nomination_status | Enumnomination_statusFieldRefInput<$PrismaModel>
    in?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumnomination_statusWithAggregatesFilter<$PrismaModel> | $Enums.nomination_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnomination_statusFilter<$PrismaModel>
    _max?: NestedEnumnomination_statusFilter<$PrismaModel>
  }

  export type Award_nominationScalarRelationFilter = {
    is?: award_nominationWhereInput
    isNot?: award_nominationWhereInput
  }

  export type award_proof_linkCountOrderByAggregateInput = {
    id?: SortOrder
    nomination_id?: SortOrder
    url?: SortOrder
  }

  export type award_proof_linkAvgOrderByAggregateInput = {
    id?: SortOrder
    nomination_id?: SortOrder
  }

  export type award_proof_linkMaxOrderByAggregateInput = {
    id?: SortOrder
    nomination_id?: SortOrder
    url?: SortOrder
  }

  export type award_proof_linkMinOrderByAggregateInput = {
    id?: SortOrder
    nomination_id?: SortOrder
    url?: SortOrder
  }

  export type award_proof_linkSumOrderByAggregateInput = {
    id?: SortOrder
    nomination_id?: SortOrder
  }

  export type abstract_submissionCreateNestedOneWithoutRegistered_masterInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    connect?: abstract_submissionWhereUniqueInput
  }

  export type award_nominationCreateNestedManyWithoutRegistered_masterInput = {
    create?: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput> | award_nominationCreateWithoutRegistered_masterInput[] | award_nominationUncheckedCreateWithoutRegistered_masterInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutRegistered_masterInput | award_nominationCreateOrConnectWithoutRegistered_masterInput[]
    createMany?: award_nominationCreateManyRegistered_masterInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
  }

  export type abstract_submissionUncheckedCreateNestedOneWithoutRegistered_masterInput = {
    create?: XOR<abstract_submissionCreateWithoutRegistered_masterInput, abstract_submissionUncheckedCreateWithoutRegistered_masterInput>
    connectOrCreate?: abstract_submissionCreateOrConnectWithoutRegistered_masterInput
    connect?: abstract_submissionWhereUniqueInput
  }

  export type award_nominationUncheckedCreateNestedManyWithoutRegistered_masterInput = {
    create?: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput> | award_nominationCreateWithoutRegistered_masterInput[] | award_nominationUncheckedCreateWithoutRegistered_masterInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutRegistered_masterInput | award_nominationCreateOrConnectWithoutRegistered_masterInput[]
    createMany?: award_nominationCreateManyRegistered_masterInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
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

  export type award_nominationUpdateManyWithoutRegistered_masterNestedInput = {
    create?: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput> | award_nominationCreateWithoutRegistered_masterInput[] | award_nominationUncheckedCreateWithoutRegistered_masterInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutRegistered_masterInput | award_nominationCreateOrConnectWithoutRegistered_masterInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutRegistered_masterInput | award_nominationUpsertWithWhereUniqueWithoutRegistered_masterInput[]
    createMany?: award_nominationCreateManyRegistered_masterInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutRegistered_masterInput | award_nominationUpdateWithWhereUniqueWithoutRegistered_masterInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutRegistered_masterInput | award_nominationUpdateManyWithWhereWithoutRegistered_masterInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
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

  export type award_nominationUncheckedUpdateManyWithoutRegistered_masterNestedInput = {
    create?: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput> | award_nominationCreateWithoutRegistered_masterInput[] | award_nominationUncheckedCreateWithoutRegistered_masterInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutRegistered_masterInput | award_nominationCreateOrConnectWithoutRegistered_masterInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutRegistered_masterInput | award_nominationUpsertWithWhereUniqueWithoutRegistered_masterInput[]
    createMany?: award_nominationCreateManyRegistered_masterInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutRegistered_masterInput | award_nominationUpdateWithWhereUniqueWithoutRegistered_masterInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutRegistered_masterInput | award_nominationUpdateManyWithWhereWithoutRegistered_masterInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
  }

  export type registered_masterCreateNestedOneWithoutAbstract_submissionInput = {
    create?: XOR<registered_masterCreateWithoutAbstract_submissionInput, registered_masterUncheckedCreateWithoutAbstract_submissionInput>
    connectOrCreate?: registered_masterCreateOrConnectWithoutAbstract_submissionInput
    connect?: registered_masterWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type award_categoryCreateNestedManyWithoutPillarInput = {
    create?: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput> | award_categoryCreateWithoutPillarInput[] | award_categoryUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: award_categoryCreateOrConnectWithoutPillarInput | award_categoryCreateOrConnectWithoutPillarInput[]
    createMany?: award_categoryCreateManyPillarInputEnvelope
    connect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
  }

  export type award_categoryUncheckedCreateNestedManyWithoutPillarInput = {
    create?: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput> | award_categoryCreateWithoutPillarInput[] | award_categoryUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: award_categoryCreateOrConnectWithoutPillarInput | award_categoryCreateOrConnectWithoutPillarInput[]
    createMany?: award_categoryCreateManyPillarInputEnvelope
    connect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
  }

  export type award_categoryUpdateManyWithoutPillarNestedInput = {
    create?: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput> | award_categoryCreateWithoutPillarInput[] | award_categoryUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: award_categoryCreateOrConnectWithoutPillarInput | award_categoryCreateOrConnectWithoutPillarInput[]
    upsert?: award_categoryUpsertWithWhereUniqueWithoutPillarInput | award_categoryUpsertWithWhereUniqueWithoutPillarInput[]
    createMany?: award_categoryCreateManyPillarInputEnvelope
    set?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    disconnect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    delete?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    connect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    update?: award_categoryUpdateWithWhereUniqueWithoutPillarInput | award_categoryUpdateWithWhereUniqueWithoutPillarInput[]
    updateMany?: award_categoryUpdateManyWithWhereWithoutPillarInput | award_categoryUpdateManyWithWhereWithoutPillarInput[]
    deleteMany?: award_categoryScalarWhereInput | award_categoryScalarWhereInput[]
  }

  export type award_categoryUncheckedUpdateManyWithoutPillarNestedInput = {
    create?: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput> | award_categoryCreateWithoutPillarInput[] | award_categoryUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: award_categoryCreateOrConnectWithoutPillarInput | award_categoryCreateOrConnectWithoutPillarInput[]
    upsert?: award_categoryUpsertWithWhereUniqueWithoutPillarInput | award_categoryUpsertWithWhereUniqueWithoutPillarInput[]
    createMany?: award_categoryCreateManyPillarInputEnvelope
    set?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    disconnect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    delete?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    connect?: award_categoryWhereUniqueInput | award_categoryWhereUniqueInput[]
    update?: award_categoryUpdateWithWhereUniqueWithoutPillarInput | award_categoryUpdateWithWhereUniqueWithoutPillarInput[]
    updateMany?: award_categoryUpdateManyWithWhereWithoutPillarInput | award_categoryUpdateManyWithWhereWithoutPillarInput[]
    deleteMany?: award_categoryScalarWhereInput | award_categoryScalarWhereInput[]
  }

  export type award_pillarCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<award_pillarCreateWithoutCategoriesInput, award_pillarUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: award_pillarCreateOrConnectWithoutCategoriesInput
    connect?: award_pillarWhereUniqueInput
  }

  export type award_focus_areaCreateNestedManyWithoutCategoryInput = {
    create?: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput> | award_focus_areaCreateWithoutCategoryInput[] | award_focus_areaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutCategoryInput | award_focus_areaCreateOrConnectWithoutCategoryInput[]
    createMany?: award_focus_areaCreateManyCategoryInputEnvelope
    connect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
  }

  export type award_nominationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput> | award_nominationCreateWithoutCategoryInput[] | award_nominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutCategoryInput | award_nominationCreateOrConnectWithoutCategoryInput[]
    createMany?: award_nominationCreateManyCategoryInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
  }

  export type award_focus_areaUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput> | award_focus_areaCreateWithoutCategoryInput[] | award_focus_areaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutCategoryInput | award_focus_areaCreateOrConnectWithoutCategoryInput[]
    createMany?: award_focus_areaCreateManyCategoryInputEnvelope
    connect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
  }

  export type award_nominationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput> | award_nominationCreateWithoutCategoryInput[] | award_nominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutCategoryInput | award_nominationCreateOrConnectWithoutCategoryInput[]
    createMany?: award_nominationCreateManyCategoryInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type award_pillarUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<award_pillarCreateWithoutCategoriesInput, award_pillarUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: award_pillarCreateOrConnectWithoutCategoriesInput
    upsert?: award_pillarUpsertWithoutCategoriesInput
    connect?: award_pillarWhereUniqueInput
    update?: XOR<XOR<award_pillarUpdateToOneWithWhereWithoutCategoriesInput, award_pillarUpdateWithoutCategoriesInput>, award_pillarUncheckedUpdateWithoutCategoriesInput>
  }

  export type award_focus_areaUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput> | award_focus_areaCreateWithoutCategoryInput[] | award_focus_areaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutCategoryInput | award_focus_areaCreateOrConnectWithoutCategoryInput[]
    upsert?: award_focus_areaUpsertWithWhereUniqueWithoutCategoryInput | award_focus_areaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: award_focus_areaCreateManyCategoryInputEnvelope
    set?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    disconnect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    delete?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    connect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    update?: award_focus_areaUpdateWithWhereUniqueWithoutCategoryInput | award_focus_areaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: award_focus_areaUpdateManyWithWhereWithoutCategoryInput | award_focus_areaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: award_focus_areaScalarWhereInput | award_focus_areaScalarWhereInput[]
  }

  export type award_nominationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput> | award_nominationCreateWithoutCategoryInput[] | award_nominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutCategoryInput | award_nominationCreateOrConnectWithoutCategoryInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutCategoryInput | award_nominationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: award_nominationCreateManyCategoryInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutCategoryInput | award_nominationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutCategoryInput | award_nominationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
  }

  export type award_focus_areaUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput> | award_focus_areaCreateWithoutCategoryInput[] | award_focus_areaUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutCategoryInput | award_focus_areaCreateOrConnectWithoutCategoryInput[]
    upsert?: award_focus_areaUpsertWithWhereUniqueWithoutCategoryInput | award_focus_areaUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: award_focus_areaCreateManyCategoryInputEnvelope
    set?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    disconnect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    delete?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    connect?: award_focus_areaWhereUniqueInput | award_focus_areaWhereUniqueInput[]
    update?: award_focus_areaUpdateWithWhereUniqueWithoutCategoryInput | award_focus_areaUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: award_focus_areaUpdateManyWithWhereWithoutCategoryInput | award_focus_areaUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: award_focus_areaScalarWhereInput | award_focus_areaScalarWhereInput[]
  }

  export type award_nominationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput> | award_nominationCreateWithoutCategoryInput[] | award_nominationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutCategoryInput | award_nominationCreateOrConnectWithoutCategoryInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutCategoryInput | award_nominationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: award_nominationCreateManyCategoryInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutCategoryInput | award_nominationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutCategoryInput | award_nominationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
  }

  export type award_categoryCreateNestedOneWithoutFocus_areasInput = {
    create?: XOR<award_categoryCreateWithoutFocus_areasInput, award_categoryUncheckedCreateWithoutFocus_areasInput>
    connectOrCreate?: award_categoryCreateOrConnectWithoutFocus_areasInput
    connect?: award_categoryWhereUniqueInput
  }

  export type award_nominationCreateNestedManyWithoutFocus_areaInput = {
    create?: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput> | award_nominationCreateWithoutFocus_areaInput[] | award_nominationUncheckedCreateWithoutFocus_areaInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutFocus_areaInput | award_nominationCreateOrConnectWithoutFocus_areaInput[]
    createMany?: award_nominationCreateManyFocus_areaInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
  }

  export type award_nominationUncheckedCreateNestedManyWithoutFocus_areaInput = {
    create?: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput> | award_nominationCreateWithoutFocus_areaInput[] | award_nominationUncheckedCreateWithoutFocus_areaInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutFocus_areaInput | award_nominationCreateOrConnectWithoutFocus_areaInput[]
    createMany?: award_nominationCreateManyFocus_areaInputEnvelope
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
  }

  export type award_categoryUpdateOneRequiredWithoutFocus_areasNestedInput = {
    create?: XOR<award_categoryCreateWithoutFocus_areasInput, award_categoryUncheckedCreateWithoutFocus_areasInput>
    connectOrCreate?: award_categoryCreateOrConnectWithoutFocus_areasInput
    upsert?: award_categoryUpsertWithoutFocus_areasInput
    connect?: award_categoryWhereUniqueInput
    update?: XOR<XOR<award_categoryUpdateToOneWithWhereWithoutFocus_areasInput, award_categoryUpdateWithoutFocus_areasInput>, award_categoryUncheckedUpdateWithoutFocus_areasInput>
  }

  export type award_nominationUpdateManyWithoutFocus_areaNestedInput = {
    create?: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput> | award_nominationCreateWithoutFocus_areaInput[] | award_nominationUncheckedCreateWithoutFocus_areaInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutFocus_areaInput | award_nominationCreateOrConnectWithoutFocus_areaInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutFocus_areaInput | award_nominationUpsertWithWhereUniqueWithoutFocus_areaInput[]
    createMany?: award_nominationCreateManyFocus_areaInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutFocus_areaInput | award_nominationUpdateWithWhereUniqueWithoutFocus_areaInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutFocus_areaInput | award_nominationUpdateManyWithWhereWithoutFocus_areaInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
  }

  export type award_nominationUncheckedUpdateManyWithoutFocus_areaNestedInput = {
    create?: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput> | award_nominationCreateWithoutFocus_areaInput[] | award_nominationUncheckedCreateWithoutFocus_areaInput[]
    connectOrCreate?: award_nominationCreateOrConnectWithoutFocus_areaInput | award_nominationCreateOrConnectWithoutFocus_areaInput[]
    upsert?: award_nominationUpsertWithWhereUniqueWithoutFocus_areaInput | award_nominationUpsertWithWhereUniqueWithoutFocus_areaInput[]
    createMany?: award_nominationCreateManyFocus_areaInputEnvelope
    set?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    disconnect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    delete?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    connect?: award_nominationWhereUniqueInput | award_nominationWhereUniqueInput[]
    update?: award_nominationUpdateWithWhereUniqueWithoutFocus_areaInput | award_nominationUpdateWithWhereUniqueWithoutFocus_areaInput[]
    updateMany?: award_nominationUpdateManyWithWhereWithoutFocus_areaInput | award_nominationUpdateManyWithWhereWithoutFocus_areaInput[]
    deleteMany?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
  }

  export type registered_masterCreateNestedOneWithoutAwardNominationsInput = {
    create?: XOR<registered_masterCreateWithoutAwardNominationsInput, registered_masterUncheckedCreateWithoutAwardNominationsInput>
    connectOrCreate?: registered_masterCreateOrConnectWithoutAwardNominationsInput
    connect?: registered_masterWhereUniqueInput
  }

  export type award_categoryCreateNestedOneWithoutNominationsInput = {
    create?: XOR<award_categoryCreateWithoutNominationsInput, award_categoryUncheckedCreateWithoutNominationsInput>
    connectOrCreate?: award_categoryCreateOrConnectWithoutNominationsInput
    connect?: award_categoryWhereUniqueInput
  }

  export type award_focus_areaCreateNestedOneWithoutAwardNominationsInput = {
    create?: XOR<award_focus_areaCreateWithoutAwardNominationsInput, award_focus_areaUncheckedCreateWithoutAwardNominationsInput>
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutAwardNominationsInput
    connect?: award_focus_areaWhereUniqueInput
  }

  export type award_proof_linkCreateNestedManyWithoutNominationInput = {
    create?: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput> | award_proof_linkCreateWithoutNominationInput[] | award_proof_linkUncheckedCreateWithoutNominationInput[]
    connectOrCreate?: award_proof_linkCreateOrConnectWithoutNominationInput | award_proof_linkCreateOrConnectWithoutNominationInput[]
    createMany?: award_proof_linkCreateManyNominationInputEnvelope
    connect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
  }

  export type award_proof_linkUncheckedCreateNestedManyWithoutNominationInput = {
    create?: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput> | award_proof_linkCreateWithoutNominationInput[] | award_proof_linkUncheckedCreateWithoutNominationInput[]
    connectOrCreate?: award_proof_linkCreateOrConnectWithoutNominationInput | award_proof_linkCreateOrConnectWithoutNominationInput[]
    createMany?: award_proof_linkCreateManyNominationInputEnvelope
    connect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
  }

  export type Enumnomination_statusFieldUpdateOperationsInput = {
    set?: $Enums.nomination_status
  }

  export type registered_masterUpdateOneRequiredWithoutAwardNominationsNestedInput = {
    create?: XOR<registered_masterCreateWithoutAwardNominationsInput, registered_masterUncheckedCreateWithoutAwardNominationsInput>
    connectOrCreate?: registered_masterCreateOrConnectWithoutAwardNominationsInput
    upsert?: registered_masterUpsertWithoutAwardNominationsInput
    connect?: registered_masterWhereUniqueInput
    update?: XOR<XOR<registered_masterUpdateToOneWithWhereWithoutAwardNominationsInput, registered_masterUpdateWithoutAwardNominationsInput>, registered_masterUncheckedUpdateWithoutAwardNominationsInput>
  }

  export type award_categoryUpdateOneRequiredWithoutNominationsNestedInput = {
    create?: XOR<award_categoryCreateWithoutNominationsInput, award_categoryUncheckedCreateWithoutNominationsInput>
    connectOrCreate?: award_categoryCreateOrConnectWithoutNominationsInput
    upsert?: award_categoryUpsertWithoutNominationsInput
    connect?: award_categoryWhereUniqueInput
    update?: XOR<XOR<award_categoryUpdateToOneWithWhereWithoutNominationsInput, award_categoryUpdateWithoutNominationsInput>, award_categoryUncheckedUpdateWithoutNominationsInput>
  }

  export type award_focus_areaUpdateOneWithoutAwardNominationsNestedInput = {
    create?: XOR<award_focus_areaCreateWithoutAwardNominationsInput, award_focus_areaUncheckedCreateWithoutAwardNominationsInput>
    connectOrCreate?: award_focus_areaCreateOrConnectWithoutAwardNominationsInput
    upsert?: award_focus_areaUpsertWithoutAwardNominationsInput
    disconnect?: award_focus_areaWhereInput | boolean
    delete?: award_focus_areaWhereInput | boolean
    connect?: award_focus_areaWhereUniqueInput
    update?: XOR<XOR<award_focus_areaUpdateToOneWithWhereWithoutAwardNominationsInput, award_focus_areaUpdateWithoutAwardNominationsInput>, award_focus_areaUncheckedUpdateWithoutAwardNominationsInput>
  }

  export type award_proof_linkUpdateManyWithoutNominationNestedInput = {
    create?: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput> | award_proof_linkCreateWithoutNominationInput[] | award_proof_linkUncheckedCreateWithoutNominationInput[]
    connectOrCreate?: award_proof_linkCreateOrConnectWithoutNominationInput | award_proof_linkCreateOrConnectWithoutNominationInput[]
    upsert?: award_proof_linkUpsertWithWhereUniqueWithoutNominationInput | award_proof_linkUpsertWithWhereUniqueWithoutNominationInput[]
    createMany?: award_proof_linkCreateManyNominationInputEnvelope
    set?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    disconnect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    delete?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    connect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    update?: award_proof_linkUpdateWithWhereUniqueWithoutNominationInput | award_proof_linkUpdateWithWhereUniqueWithoutNominationInput[]
    updateMany?: award_proof_linkUpdateManyWithWhereWithoutNominationInput | award_proof_linkUpdateManyWithWhereWithoutNominationInput[]
    deleteMany?: award_proof_linkScalarWhereInput | award_proof_linkScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type award_proof_linkUncheckedUpdateManyWithoutNominationNestedInput = {
    create?: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput> | award_proof_linkCreateWithoutNominationInput[] | award_proof_linkUncheckedCreateWithoutNominationInput[]
    connectOrCreate?: award_proof_linkCreateOrConnectWithoutNominationInput | award_proof_linkCreateOrConnectWithoutNominationInput[]
    upsert?: award_proof_linkUpsertWithWhereUniqueWithoutNominationInput | award_proof_linkUpsertWithWhereUniqueWithoutNominationInput[]
    createMany?: award_proof_linkCreateManyNominationInputEnvelope
    set?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    disconnect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    delete?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    connect?: award_proof_linkWhereUniqueInput | award_proof_linkWhereUniqueInput[]
    update?: award_proof_linkUpdateWithWhereUniqueWithoutNominationInput | award_proof_linkUpdateWithWhereUniqueWithoutNominationInput[]
    updateMany?: award_proof_linkUpdateManyWithWhereWithoutNominationInput | award_proof_linkUpdateManyWithWhereWithoutNominationInput[]
    deleteMany?: award_proof_linkScalarWhereInput | award_proof_linkScalarWhereInput[]
  }

  export type award_nominationCreateNestedOneWithoutProof_linksInput = {
    create?: XOR<award_nominationCreateWithoutProof_linksInput, award_nominationUncheckedCreateWithoutProof_linksInput>
    connectOrCreate?: award_nominationCreateOrConnectWithoutProof_linksInput
    connect?: award_nominationWhereUniqueInput
  }

  export type award_nominationUpdateOneRequiredWithoutProof_linksNestedInput = {
    create?: XOR<award_nominationCreateWithoutProof_linksInput, award_nominationUncheckedCreateWithoutProof_linksInput>
    connectOrCreate?: award_nominationCreateOrConnectWithoutProof_linksInput
    upsert?: award_nominationUpsertWithoutProof_linksInput
    connect?: award_nominationWhereUniqueInput
    update?: XOR<XOR<award_nominationUpdateToOneWithWhereWithoutProof_linksInput, award_nominationUpdateWithoutProof_linksInput>, award_nominationUncheckedUpdateWithoutProof_linksInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumnomination_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.nomination_status | Enumnomination_statusFieldRefInput<$PrismaModel>
    in?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumnomination_statusFilter<$PrismaModel> | $Enums.nomination_status
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumnomination_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nomination_status | Enumnomination_statusFieldRefInput<$PrismaModel>
    in?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.nomination_status[] | ListEnumnomination_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumnomination_statusWithAggregatesFilter<$PrismaModel> | $Enums.nomination_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnomination_statusFilter<$PrismaModel>
    _max?: NestedEnumnomination_statusFilter<$PrismaModel>
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

  export type award_nominationCreateWithoutRegistered_masterInput = {
    id?: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    category: award_categoryCreateNestedOneWithoutNominationsInput
    focus_area?: award_focus_areaCreateNestedOneWithoutAwardNominationsInput
    proof_links?: award_proof_linkCreateNestedManyWithoutNominationInput
  }

  export type award_nominationUncheckedCreateWithoutRegistered_masterInput = {
    id?: bigint | number
    category_id: bigint | number
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    proof_links?: award_proof_linkUncheckedCreateNestedManyWithoutNominationInput
  }

  export type award_nominationCreateOrConnectWithoutRegistered_masterInput = {
    where: award_nominationWhereUniqueInput
    create: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput>
  }

  export type award_nominationCreateManyRegistered_masterInputEnvelope = {
    data: award_nominationCreateManyRegistered_masterInput | award_nominationCreateManyRegistered_masterInput[]
    skipDuplicates?: boolean
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

  export type award_nominationUpsertWithWhereUniqueWithoutRegistered_masterInput = {
    where: award_nominationWhereUniqueInput
    update: XOR<award_nominationUpdateWithoutRegistered_masterInput, award_nominationUncheckedUpdateWithoutRegistered_masterInput>
    create: XOR<award_nominationCreateWithoutRegistered_masterInput, award_nominationUncheckedCreateWithoutRegistered_masterInput>
  }

  export type award_nominationUpdateWithWhereUniqueWithoutRegistered_masterInput = {
    where: award_nominationWhereUniqueInput
    data: XOR<award_nominationUpdateWithoutRegistered_masterInput, award_nominationUncheckedUpdateWithoutRegistered_masterInput>
  }

  export type award_nominationUpdateManyWithWhereWithoutRegistered_masterInput = {
    where: award_nominationScalarWhereInput
    data: XOR<award_nominationUpdateManyMutationInput, award_nominationUncheckedUpdateManyWithoutRegistered_masterInput>
  }

  export type award_nominationScalarWhereInput = {
    AND?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
    OR?: award_nominationScalarWhereInput[]
    NOT?: award_nominationScalarWhereInput | award_nominationScalarWhereInput[]
    id?: BigIntFilter<"award_nomination"> | bigint | number
    transaction_id?: StringFilter<"award_nomination"> | string
    category_id?: BigIntFilter<"award_nomination"> | bigint | number
    focus_area_id?: BigIntNullableFilter<"award_nomination"> | bigint | number | null
    nominee_name?: StringFilter<"award_nomination"> | string
    designation?: StringFilter<"award_nomination"> | string
    organisation?: StringFilter<"award_nomination"> | string
    aadhaar?: StringNullableFilter<"award_nomination"> | string | null
    pan?: StringNullableFilter<"award_nomination"> | string | null
    dossier_file?: BytesFilter<"award_nomination"> | Bytes
    dossier_filename?: StringFilter<"award_nomination"> | string
    achievement_writeup?: StringFilter<"award_nomination"> | string
    status?: Enumnomination_statusFilter<"award_nomination"> | $Enums.nomination_status
    created_at?: DateTimeFilter<"award_nomination"> | Date | string
  }

  export type registered_masterCreateWithoutAbstract_submissionInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    awardNominations?: award_nominationCreateNestedManyWithoutRegistered_masterInput
  }

  export type registered_masterUncheckedCreateWithoutAbstract_submissionInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    awardNominations?: award_nominationUncheckedCreateNestedManyWithoutRegistered_masterInput
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
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    awardNominations?: award_nominationUpdateManyWithoutRegistered_masterNestedInput
  }

  export type registered_masterUncheckedUpdateWithoutAbstract_submissionInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    awardNominations?: award_nominationUncheckedUpdateManyWithoutRegistered_masterNestedInput
  }

  export type award_categoryCreateWithoutPillarInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    focus_areas?: award_focus_areaCreateNestedManyWithoutCategoryInput
    nominations?: award_nominationCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryUncheckedCreateWithoutPillarInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    focus_areas?: award_focus_areaUncheckedCreateNestedManyWithoutCategoryInput
    nominations?: award_nominationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryCreateOrConnectWithoutPillarInput = {
    where: award_categoryWhereUniqueInput
    create: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput>
  }

  export type award_categoryCreateManyPillarInputEnvelope = {
    data: award_categoryCreateManyPillarInput | award_categoryCreateManyPillarInput[]
    skipDuplicates?: boolean
  }

  export type award_categoryUpsertWithWhereUniqueWithoutPillarInput = {
    where: award_categoryWhereUniqueInput
    update: XOR<award_categoryUpdateWithoutPillarInput, award_categoryUncheckedUpdateWithoutPillarInput>
    create: XOR<award_categoryCreateWithoutPillarInput, award_categoryUncheckedCreateWithoutPillarInput>
  }

  export type award_categoryUpdateWithWhereUniqueWithoutPillarInput = {
    where: award_categoryWhereUniqueInput
    data: XOR<award_categoryUpdateWithoutPillarInput, award_categoryUncheckedUpdateWithoutPillarInput>
  }

  export type award_categoryUpdateManyWithWhereWithoutPillarInput = {
    where: award_categoryScalarWhereInput
    data: XOR<award_categoryUpdateManyMutationInput, award_categoryUncheckedUpdateManyWithoutPillarInput>
  }

  export type award_categoryScalarWhereInput = {
    AND?: award_categoryScalarWhereInput | award_categoryScalarWhereInput[]
    OR?: award_categoryScalarWhereInput[]
    NOT?: award_categoryScalarWhereInput | award_categoryScalarWhereInput[]
    id?: BigIntFilter<"award_category"> | bigint | number
    pillar_id?: BigIntFilter<"award_category"> | bigint | number
    name?: StringFilter<"award_category"> | string
    description?: StringNullableFilter<"award_category"> | string | null
    total_awards?: IntFilter<"award_category"> | number
    age_limit?: IntNullableFilter<"award_category"> | number | null
    gender_restriction?: StringNullableFilter<"award_category"> | string | null
    created_at?: DateTimeFilter<"award_category"> | Date | string
  }

  export type award_pillarCreateWithoutCategoriesInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string
  }

  export type award_pillarUncheckedCreateWithoutCategoriesInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string
  }

  export type award_pillarCreateOrConnectWithoutCategoriesInput = {
    where: award_pillarWhereUniqueInput
    create: XOR<award_pillarCreateWithoutCategoriesInput, award_pillarUncheckedCreateWithoutCategoriesInput>
  }

  export type award_focus_areaCreateWithoutCategoryInput = {
    id?: bigint | number
    name: string
    awardNominations?: award_nominationCreateNestedManyWithoutFocus_areaInput
  }

  export type award_focus_areaUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number
    name: string
    awardNominations?: award_nominationUncheckedCreateNestedManyWithoutFocus_areaInput
  }

  export type award_focus_areaCreateOrConnectWithoutCategoryInput = {
    where: award_focus_areaWhereUniqueInput
    create: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput>
  }

  export type award_focus_areaCreateManyCategoryInputEnvelope = {
    data: award_focus_areaCreateManyCategoryInput | award_focus_areaCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type award_nominationCreateWithoutCategoryInput = {
    id?: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    registered_master: registered_masterCreateNestedOneWithoutAwardNominationsInput
    focus_area?: award_focus_areaCreateNestedOneWithoutAwardNominationsInput
    proof_links?: award_proof_linkCreateNestedManyWithoutNominationInput
  }

  export type award_nominationUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number
    transaction_id: string
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    proof_links?: award_proof_linkUncheckedCreateNestedManyWithoutNominationInput
  }

  export type award_nominationCreateOrConnectWithoutCategoryInput = {
    where: award_nominationWhereUniqueInput
    create: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput>
  }

  export type award_nominationCreateManyCategoryInputEnvelope = {
    data: award_nominationCreateManyCategoryInput | award_nominationCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type award_pillarUpsertWithoutCategoriesInput = {
    update: XOR<award_pillarUpdateWithoutCategoriesInput, award_pillarUncheckedUpdateWithoutCategoriesInput>
    create: XOR<award_pillarCreateWithoutCategoriesInput, award_pillarUncheckedCreateWithoutCategoriesInput>
    where?: award_pillarWhereInput
  }

  export type award_pillarUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: award_pillarWhereInput
    data: XOR<award_pillarUpdateWithoutCategoriesInput, award_pillarUncheckedUpdateWithoutCategoriesInput>
  }

  export type award_pillarUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_pillarUncheckedUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_focus_areaUpsertWithWhereUniqueWithoutCategoryInput = {
    where: award_focus_areaWhereUniqueInput
    update: XOR<award_focus_areaUpdateWithoutCategoryInput, award_focus_areaUncheckedUpdateWithoutCategoryInput>
    create: XOR<award_focus_areaCreateWithoutCategoryInput, award_focus_areaUncheckedCreateWithoutCategoryInput>
  }

  export type award_focus_areaUpdateWithWhereUniqueWithoutCategoryInput = {
    where: award_focus_areaWhereUniqueInput
    data: XOR<award_focus_areaUpdateWithoutCategoryInput, award_focus_areaUncheckedUpdateWithoutCategoryInput>
  }

  export type award_focus_areaUpdateManyWithWhereWithoutCategoryInput = {
    where: award_focus_areaScalarWhereInput
    data: XOR<award_focus_areaUpdateManyMutationInput, award_focus_areaUncheckedUpdateManyWithoutCategoryInput>
  }

  export type award_focus_areaScalarWhereInput = {
    AND?: award_focus_areaScalarWhereInput | award_focus_areaScalarWhereInput[]
    OR?: award_focus_areaScalarWhereInput[]
    NOT?: award_focus_areaScalarWhereInput | award_focus_areaScalarWhereInput[]
    id?: BigIntFilter<"award_focus_area"> | bigint | number
    category_id?: BigIntFilter<"award_focus_area"> | bigint | number
    name?: StringFilter<"award_focus_area"> | string
  }

  export type award_nominationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: award_nominationWhereUniqueInput
    update: XOR<award_nominationUpdateWithoutCategoryInput, award_nominationUncheckedUpdateWithoutCategoryInput>
    create: XOR<award_nominationCreateWithoutCategoryInput, award_nominationUncheckedCreateWithoutCategoryInput>
  }

  export type award_nominationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: award_nominationWhereUniqueInput
    data: XOR<award_nominationUpdateWithoutCategoryInput, award_nominationUncheckedUpdateWithoutCategoryInput>
  }

  export type award_nominationUpdateManyWithWhereWithoutCategoryInput = {
    where: award_nominationScalarWhereInput
    data: XOR<award_nominationUpdateManyMutationInput, award_nominationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type award_categoryCreateWithoutFocus_areasInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    pillar: award_pillarCreateNestedOneWithoutCategoriesInput
    nominations?: award_nominationCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryUncheckedCreateWithoutFocus_areasInput = {
    id?: bigint | number
    pillar_id: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    nominations?: award_nominationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryCreateOrConnectWithoutFocus_areasInput = {
    where: award_categoryWhereUniqueInput
    create: XOR<award_categoryCreateWithoutFocus_areasInput, award_categoryUncheckedCreateWithoutFocus_areasInput>
  }

  export type award_nominationCreateWithoutFocus_areaInput = {
    id?: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    registered_master: registered_masterCreateNestedOneWithoutAwardNominationsInput
    category: award_categoryCreateNestedOneWithoutNominationsInput
    proof_links?: award_proof_linkCreateNestedManyWithoutNominationInput
  }

  export type award_nominationUncheckedCreateWithoutFocus_areaInput = {
    id?: bigint | number
    transaction_id: string
    category_id: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    proof_links?: award_proof_linkUncheckedCreateNestedManyWithoutNominationInput
  }

  export type award_nominationCreateOrConnectWithoutFocus_areaInput = {
    where: award_nominationWhereUniqueInput
    create: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput>
  }

  export type award_nominationCreateManyFocus_areaInputEnvelope = {
    data: award_nominationCreateManyFocus_areaInput | award_nominationCreateManyFocus_areaInput[]
    skipDuplicates?: boolean
  }

  export type award_categoryUpsertWithoutFocus_areasInput = {
    update: XOR<award_categoryUpdateWithoutFocus_areasInput, award_categoryUncheckedUpdateWithoutFocus_areasInput>
    create: XOR<award_categoryCreateWithoutFocus_areasInput, award_categoryUncheckedCreateWithoutFocus_areasInput>
    where?: award_categoryWhereInput
  }

  export type award_categoryUpdateToOneWithWhereWithoutFocus_areasInput = {
    where?: award_categoryWhereInput
    data: XOR<award_categoryUpdateWithoutFocus_areasInput, award_categoryUncheckedUpdateWithoutFocus_areasInput>
  }

  export type award_categoryUpdateWithoutFocus_areasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pillar?: award_pillarUpdateOneRequiredWithoutCategoriesNestedInput
    nominations?: award_nominationUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryUncheckedUpdateWithoutFocus_areasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pillar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nominations?: award_nominationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type award_nominationUpsertWithWhereUniqueWithoutFocus_areaInput = {
    where: award_nominationWhereUniqueInput
    update: XOR<award_nominationUpdateWithoutFocus_areaInput, award_nominationUncheckedUpdateWithoutFocus_areaInput>
    create: XOR<award_nominationCreateWithoutFocus_areaInput, award_nominationUncheckedCreateWithoutFocus_areaInput>
  }

  export type award_nominationUpdateWithWhereUniqueWithoutFocus_areaInput = {
    where: award_nominationWhereUniqueInput
    data: XOR<award_nominationUpdateWithoutFocus_areaInput, award_nominationUncheckedUpdateWithoutFocus_areaInput>
  }

  export type award_nominationUpdateManyWithWhereWithoutFocus_areaInput = {
    where: award_nominationScalarWhereInput
    data: XOR<award_nominationUpdateManyMutationInput, award_nominationUncheckedUpdateManyWithoutFocus_areaInput>
  }

  export type registered_masterCreateWithoutAwardNominationsInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionCreateNestedOneWithoutRegistered_masterInput
  }

  export type registered_masterUncheckedCreateWithoutAwardNominationsInput = {
    transaction_id: string
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
    transaction_date?: Date | string | null
    abstract_submitted?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    abstract_submission?: abstract_submissionUncheckedCreateNestedOneWithoutRegistered_masterInput
  }

  export type registered_masterCreateOrConnectWithoutAwardNominationsInput = {
    where: registered_masterWhereUniqueInput
    create: XOR<registered_masterCreateWithoutAwardNominationsInput, registered_masterUncheckedCreateWithoutAwardNominationsInput>
  }

  export type award_categoryCreateWithoutNominationsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    pillar: award_pillarCreateNestedOneWithoutCategoriesInput
    focus_areas?: award_focus_areaCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryUncheckedCreateWithoutNominationsInput = {
    id?: bigint | number
    pillar_id: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
    focus_areas?: award_focus_areaUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type award_categoryCreateOrConnectWithoutNominationsInput = {
    where: award_categoryWhereUniqueInput
    create: XOR<award_categoryCreateWithoutNominationsInput, award_categoryUncheckedCreateWithoutNominationsInput>
  }

  export type award_focus_areaCreateWithoutAwardNominationsInput = {
    id?: bigint | number
    name: string
    category: award_categoryCreateNestedOneWithoutFocus_areasInput
  }

  export type award_focus_areaUncheckedCreateWithoutAwardNominationsInput = {
    id?: bigint | number
    category_id: bigint | number
    name: string
  }

  export type award_focus_areaCreateOrConnectWithoutAwardNominationsInput = {
    where: award_focus_areaWhereUniqueInput
    create: XOR<award_focus_areaCreateWithoutAwardNominationsInput, award_focus_areaUncheckedCreateWithoutAwardNominationsInput>
  }

  export type award_proof_linkCreateWithoutNominationInput = {
    id?: bigint | number
    url: string
  }

  export type award_proof_linkUncheckedCreateWithoutNominationInput = {
    id?: bigint | number
    url: string
  }

  export type award_proof_linkCreateOrConnectWithoutNominationInput = {
    where: award_proof_linkWhereUniqueInput
    create: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput>
  }

  export type award_proof_linkCreateManyNominationInputEnvelope = {
    data: award_proof_linkCreateManyNominationInput | award_proof_linkCreateManyNominationInput[]
    skipDuplicates?: boolean
  }

  export type registered_masterUpsertWithoutAwardNominationsInput = {
    update: XOR<registered_masterUpdateWithoutAwardNominationsInput, registered_masterUncheckedUpdateWithoutAwardNominationsInput>
    create: XOR<registered_masterCreateWithoutAwardNominationsInput, registered_masterUncheckedCreateWithoutAwardNominationsInput>
    where?: registered_masterWhereInput
  }

  export type registered_masterUpdateToOneWithWhereWithoutAwardNominationsInput = {
    where?: registered_masterWhereInput
    data: XOR<registered_masterUpdateWithoutAwardNominationsInput, registered_masterUncheckedUpdateWithoutAwardNominationsInput>
  }

  export type registered_masterUpdateWithoutAwardNominationsInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUpdateOneWithoutRegistered_masterNestedInput
  }

  export type registered_masterUncheckedUpdateWithoutAwardNominationsInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
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
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstract_submitted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    abstract_submission?: abstract_submissionUncheckedUpdateOneWithoutRegistered_masterNestedInput
  }

  export type award_categoryUpsertWithoutNominationsInput = {
    update: XOR<award_categoryUpdateWithoutNominationsInput, award_categoryUncheckedUpdateWithoutNominationsInput>
    create: XOR<award_categoryCreateWithoutNominationsInput, award_categoryUncheckedCreateWithoutNominationsInput>
    where?: award_categoryWhereInput
  }

  export type award_categoryUpdateToOneWithWhereWithoutNominationsInput = {
    where?: award_categoryWhereInput
    data: XOR<award_categoryUpdateWithoutNominationsInput, award_categoryUncheckedUpdateWithoutNominationsInput>
  }

  export type award_categoryUpdateWithoutNominationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pillar?: award_pillarUpdateOneRequiredWithoutCategoriesNestedInput
    focus_areas?: award_focus_areaUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryUncheckedUpdateWithoutNominationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pillar_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    focus_areas?: award_focus_areaUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type award_focus_areaUpsertWithoutAwardNominationsInput = {
    update: XOR<award_focus_areaUpdateWithoutAwardNominationsInput, award_focus_areaUncheckedUpdateWithoutAwardNominationsInput>
    create: XOR<award_focus_areaCreateWithoutAwardNominationsInput, award_focus_areaUncheckedCreateWithoutAwardNominationsInput>
    where?: award_focus_areaWhereInput
  }

  export type award_focus_areaUpdateToOneWithWhereWithoutAwardNominationsInput = {
    where?: award_focus_areaWhereInput
    data: XOR<award_focus_areaUpdateWithoutAwardNominationsInput, award_focus_areaUncheckedUpdateWithoutAwardNominationsInput>
  }

  export type award_focus_areaUpdateWithoutAwardNominationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: award_categoryUpdateOneRequiredWithoutFocus_areasNestedInput
  }

  export type award_focus_areaUncheckedUpdateWithoutAwardNominationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type award_proof_linkUpsertWithWhereUniqueWithoutNominationInput = {
    where: award_proof_linkWhereUniqueInput
    update: XOR<award_proof_linkUpdateWithoutNominationInput, award_proof_linkUncheckedUpdateWithoutNominationInput>
    create: XOR<award_proof_linkCreateWithoutNominationInput, award_proof_linkUncheckedCreateWithoutNominationInput>
  }

  export type award_proof_linkUpdateWithWhereUniqueWithoutNominationInput = {
    where: award_proof_linkWhereUniqueInput
    data: XOR<award_proof_linkUpdateWithoutNominationInput, award_proof_linkUncheckedUpdateWithoutNominationInput>
  }

  export type award_proof_linkUpdateManyWithWhereWithoutNominationInput = {
    where: award_proof_linkScalarWhereInput
    data: XOR<award_proof_linkUpdateManyMutationInput, award_proof_linkUncheckedUpdateManyWithoutNominationInput>
  }

  export type award_proof_linkScalarWhereInput = {
    AND?: award_proof_linkScalarWhereInput | award_proof_linkScalarWhereInput[]
    OR?: award_proof_linkScalarWhereInput[]
    NOT?: award_proof_linkScalarWhereInput | award_proof_linkScalarWhereInput[]
    id?: BigIntFilter<"award_proof_link"> | bigint | number
    nomination_id?: BigIntFilter<"award_proof_link"> | bigint | number
    url?: StringFilter<"award_proof_link"> | string
  }

  export type award_nominationCreateWithoutProof_linksInput = {
    id?: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
    registered_master: registered_masterCreateNestedOneWithoutAwardNominationsInput
    category: award_categoryCreateNestedOneWithoutNominationsInput
    focus_area?: award_focus_areaCreateNestedOneWithoutAwardNominationsInput
  }

  export type award_nominationUncheckedCreateWithoutProof_linksInput = {
    id?: bigint | number
    transaction_id: string
    category_id: bigint | number
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
  }

  export type award_nominationCreateOrConnectWithoutProof_linksInput = {
    where: award_nominationWhereUniqueInput
    create: XOR<award_nominationCreateWithoutProof_linksInput, award_nominationUncheckedCreateWithoutProof_linksInput>
  }

  export type award_nominationUpsertWithoutProof_linksInput = {
    update: XOR<award_nominationUpdateWithoutProof_linksInput, award_nominationUncheckedUpdateWithoutProof_linksInput>
    create: XOR<award_nominationCreateWithoutProof_linksInput, award_nominationUncheckedCreateWithoutProof_linksInput>
    where?: award_nominationWhereInput
  }

  export type award_nominationUpdateToOneWithWhereWithoutProof_linksInput = {
    where?: award_nominationWhereInput
    data: XOR<award_nominationUpdateWithoutProof_linksInput, award_nominationUncheckedUpdateWithoutProof_linksInput>
  }

  export type award_nominationUpdateWithoutProof_linksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_master?: registered_masterUpdateOneRequiredWithoutAwardNominationsNestedInput
    category?: award_categoryUpdateOneRequiredWithoutNominationsNestedInput
    focus_area?: award_focus_areaUpdateOneWithoutAwardNominationsNestedInput
  }

  export type award_nominationUncheckedUpdateWithoutProof_linksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_nominationCreateManyRegistered_masterInput = {
    id?: bigint | number
    category_id: bigint | number
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
  }

  export type award_nominationUpdateWithoutRegistered_masterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: award_categoryUpdateOneRequiredWithoutNominationsNestedInput
    focus_area?: award_focus_areaUpdateOneWithoutAwardNominationsNestedInput
    proof_links?: award_proof_linkUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateWithoutRegistered_masterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    proof_links?: award_proof_linkUncheckedUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateManyWithoutRegistered_masterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_categoryCreateManyPillarInput = {
    id?: bigint | number
    name: string
    description?: string | null
    total_awards: number
    age_limit?: number | null
    gender_restriction?: string | null
    created_at?: Date | string
  }

  export type award_categoryUpdateWithoutPillarInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    focus_areas?: award_focus_areaUpdateManyWithoutCategoryNestedInput
    nominations?: award_nominationUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryUncheckedUpdateWithoutPillarInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    focus_areas?: award_focus_areaUncheckedUpdateManyWithoutCategoryNestedInput
    nominations?: award_nominationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type award_categoryUncheckedUpdateManyWithoutPillarInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total_awards?: IntFieldUpdateOperationsInput | number
    age_limit?: NullableIntFieldUpdateOperationsInput | number | null
    gender_restriction?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_focus_areaCreateManyCategoryInput = {
    id?: bigint | number
    name: string
  }

  export type award_nominationCreateManyCategoryInput = {
    id?: bigint | number
    transaction_id: string
    focus_area_id?: bigint | number | null
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
  }

  export type award_focus_areaUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    awardNominations?: award_nominationUpdateManyWithoutFocus_areaNestedInput
  }

  export type award_focus_areaUncheckedUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    awardNominations?: award_nominationUncheckedUpdateManyWithoutFocus_areaNestedInput
  }

  export type award_focus_areaUncheckedUpdateManyWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type award_nominationUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_master?: registered_masterUpdateOneRequiredWithoutAwardNominationsNestedInput
    focus_area?: award_focus_areaUpdateOneWithoutAwardNominationsNestedInput
    proof_links?: award_proof_linkUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    proof_links?: award_proof_linkUncheckedUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateManyWithoutCategoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    focus_area_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_nominationCreateManyFocus_areaInput = {
    id?: bigint | number
    transaction_id: string
    category_id: bigint | number
    nominee_name: string
    designation: string
    organisation: string
    aadhaar?: string | null
    pan?: string | null
    dossier_file: Bytes
    dossier_filename: string
    achievement_writeup: string
    status?: $Enums.nomination_status
    created_at?: Date | string
  }

  export type award_nominationUpdateWithoutFocus_areaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_master?: registered_masterUpdateOneRequiredWithoutAwardNominationsNestedInput
    category?: award_categoryUpdateOneRequiredWithoutNominationsNestedInput
    proof_links?: award_proof_linkUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateWithoutFocus_areaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    proof_links?: award_proof_linkUncheckedUpdateManyWithoutNominationNestedInput
  }

  export type award_nominationUncheckedUpdateManyWithoutFocus_areaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    transaction_id?: StringFieldUpdateOperationsInput | string
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    nominee_name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    organisation?: StringFieldUpdateOperationsInput | string
    aadhaar?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    dossier_file?: BytesFieldUpdateOperationsInput | Bytes
    dossier_filename?: StringFieldUpdateOperationsInput | string
    achievement_writeup?: StringFieldUpdateOperationsInput | string
    status?: Enumnomination_statusFieldUpdateOperationsInput | $Enums.nomination_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type award_proof_linkCreateManyNominationInput = {
    id?: bigint | number
    url: string
  }

  export type award_proof_linkUpdateWithoutNominationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type award_proof_linkUncheckedUpdateWithoutNominationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type award_proof_linkUncheckedUpdateManyWithoutNominationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
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