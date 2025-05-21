
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
 * Model TipoRacismo
 * 
 */
export type TipoRacismo = $Result.DefaultSelection<Prisma.$TipoRacismoPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>
/**
 * Model Resposta
 * 
 */
export type Resposta = $Result.DefaultSelection<Prisma.$RespostaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoRacismos
 * const tipoRacismos = await prisma.tipoRacismo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TipoRacismos
   * const tipoRacismos = await prisma.tipoRacismo.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.tipoRacismo`: Exposes CRUD operations for the **TipoRacismo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoRacismos
    * const tipoRacismos = await prisma.tipoRacismo.findMany()
    * ```
    */
  get tipoRacismo(): Prisma.TipoRacismoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resposta`: Exposes CRUD operations for the **Resposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas
    * const respostas = await prisma.resposta.findMany()
    * ```
    */
  get resposta(): Prisma.RespostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TipoRacismo: 'TipoRacismo',
    Localizacao: 'Localizacao',
    Resposta: 'Resposta',
    Avaliacao: 'Avaliacao'
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
      modelProps: "tipoRacismo" | "localizacao" | "resposta" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoRacismo: {
        payload: Prisma.$TipoRacismoPayload<ExtArgs>
        fields: Prisma.TipoRacismoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoRacismoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoRacismoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          findFirst: {
            args: Prisma.TipoRacismoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoRacismoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          findMany: {
            args: Prisma.TipoRacismoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>[]
          }
          create: {
            args: Prisma.TipoRacismoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          createMany: {
            args: Prisma.TipoRacismoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoRacismoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>[]
          }
          delete: {
            args: Prisma.TipoRacismoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          update: {
            args: Prisma.TipoRacismoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          deleteMany: {
            args: Prisma.TipoRacismoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoRacismoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoRacismoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>[]
          }
          upsert: {
            args: Prisma.TipoRacismoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRacismoPayload>
          }
          aggregate: {
            args: Prisma.TipoRacismoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoRacismo>
          }
          groupBy: {
            args: Prisma.TipoRacismoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoRacismoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoRacismoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoRacismoCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalizacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalizacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      Resposta: {
        payload: Prisma.$RespostaPayload<ExtArgs>
        fields: Prisma.RespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findFirst: {
            args: Prisma.RespostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findMany: {
            args: Prisma.RespostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>[]
          }
          create: {
            args: Prisma.RespostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          createMany: {
            args: Prisma.RespostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>[]
          }
          delete: {
            args: Prisma.RespostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          update: {
            args: Prisma.RespostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          deleteMany: {
            args: Prisma.RespostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RespostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>[]
          }
          upsert: {
            args: Prisma.RespostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          aggregate: {
            args: Prisma.RespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResposta>
          }
          groupBy: {
            args: Prisma.RespostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespostaCountArgs<ExtArgs>
            result: $Utils.Optional<RespostaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    tipoRacismo?: TipoRacismoOmit
    localizacao?: LocalizacaoOmit
    resposta?: RespostaOmit
    avaliacao?: AvaliacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TipoRacismoCountOutputType
   */

  export type TipoRacismoCountOutputType = {
    localizacoes: number
    avaliacoes: number
  }

  export type TipoRacismoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacoes?: boolean | TipoRacismoCountOutputTypeCountLocalizacoesArgs
    avaliacoes?: boolean | TipoRacismoCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * TipoRacismoCountOutputType without action
   */
  export type TipoRacismoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismoCountOutputType
     */
    select?: TipoRacismoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoRacismoCountOutputType without action
   */
  export type TipoRacismoCountOutputTypeCountLocalizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
  }

  /**
   * TipoRacismoCountOutputType without action
   */
  export type TipoRacismoCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type LocalizacaoCountOutputType
   */

  export type LocalizacaoCountOutputType = {
    respostas: number
  }

  export type LocalizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | LocalizacaoCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacaoCountOutputType
     */
    select?: LocalizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoRacismo
   */

  export type AggregateTipoRacismo = {
    _count: TipoRacismoCountAggregateOutputType | null
    _avg: TipoRacismoAvgAggregateOutputType | null
    _sum: TipoRacismoSumAggregateOutputType | null
    _min: TipoRacismoMinAggregateOutputType | null
    _max: TipoRacismoMaxAggregateOutputType | null
  }

  export type TipoRacismoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoRacismoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoRacismoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoRacismoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoRacismoCountAggregateOutputType = {
    id: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoRacismoAvgAggregateInputType = {
    id?: true
  }

  export type TipoRacismoSumAggregateInputType = {
    id?: true
  }

  export type TipoRacismoMinAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoRacismoMaxAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoRacismoCountAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoRacismoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRacismo to aggregate.
     */
    where?: TipoRacismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRacismos to fetch.
     */
    orderBy?: TipoRacismoOrderByWithRelationInput | TipoRacismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoRacismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRacismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRacismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoRacismos
    **/
    _count?: true | TipoRacismoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoRacismoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoRacismoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoRacismoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoRacismoMaxAggregateInputType
  }

  export type GetTipoRacismoAggregateType<T extends TipoRacismoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoRacismo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoRacismo[P]>
      : GetScalarType<T[P], AggregateTipoRacismo[P]>
  }




  export type TipoRacismoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoRacismoWhereInput
    orderBy?: TipoRacismoOrderByWithAggregationInput | TipoRacismoOrderByWithAggregationInput[]
    by: TipoRacismoScalarFieldEnum[] | TipoRacismoScalarFieldEnum
    having?: TipoRacismoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoRacismoCountAggregateInputType | true
    _avg?: TipoRacismoAvgAggregateInputType
    _sum?: TipoRacismoSumAggregateInputType
    _min?: TipoRacismoMinAggregateInputType
    _max?: TipoRacismoMaxAggregateInputType
  }

  export type TipoRacismoGroupByOutputType = {
    id: number
    descricao: string
    createdAt: Date
    updatedAt: Date
    _count: TipoRacismoCountAggregateOutputType | null
    _avg: TipoRacismoAvgAggregateOutputType | null
    _sum: TipoRacismoSumAggregateOutputType | null
    _min: TipoRacismoMinAggregateOutputType | null
    _max: TipoRacismoMaxAggregateOutputType | null
  }

  type GetTipoRacismoGroupByPayload<T extends TipoRacismoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoRacismoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoRacismoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoRacismoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoRacismoGroupByOutputType[P]>
        }
      >
    >


  export type TipoRacismoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localizacoes?: boolean | TipoRacismo$localizacoesArgs<ExtArgs>
    avaliacoes?: boolean | TipoRacismo$avaliacoesArgs<ExtArgs>
    _count?: boolean | TipoRacismoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoRacismo"]>

  export type TipoRacismoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoRacismo"]>

  export type TipoRacismoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoRacismo"]>

  export type TipoRacismoSelectScalar = {
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoRacismoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoRacismo"]>
  export type TipoRacismoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacoes?: boolean | TipoRacismo$localizacoesArgs<ExtArgs>
    avaliacoes?: boolean | TipoRacismo$avaliacoesArgs<ExtArgs>
    _count?: boolean | TipoRacismoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoRacismoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoRacismoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoRacismoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoRacismo"
    objects: {
      localizacoes: Prisma.$LocalizacaoPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoRacismo"]>
    composites: {}
  }

  type TipoRacismoGetPayload<S extends boolean | null | undefined | TipoRacismoDefaultArgs> = $Result.GetResult<Prisma.$TipoRacismoPayload, S>

  type TipoRacismoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoRacismoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoRacismoCountAggregateInputType | true
    }

  export interface TipoRacismoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoRacismo'], meta: { name: 'TipoRacismo' } }
    /**
     * Find zero or one TipoRacismo that matches the filter.
     * @param {TipoRacismoFindUniqueArgs} args - Arguments to find a TipoRacismo
     * @example
     * // Get one TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoRacismoFindUniqueArgs>(args: SelectSubset<T, TipoRacismoFindUniqueArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoRacismo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoRacismoFindUniqueOrThrowArgs} args - Arguments to find a TipoRacismo
     * @example
     * // Get one TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoRacismoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoRacismoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRacismo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoFindFirstArgs} args - Arguments to find a TipoRacismo
     * @example
     * // Get one TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoRacismoFindFirstArgs>(args?: SelectSubset<T, TipoRacismoFindFirstArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRacismo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoFindFirstOrThrowArgs} args - Arguments to find a TipoRacismo
     * @example
     * // Get one TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoRacismoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoRacismoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoRacismos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoRacismos
     * const tipoRacismos = await prisma.tipoRacismo.findMany()
     * 
     * // Get first 10 TipoRacismos
     * const tipoRacismos = await prisma.tipoRacismo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoRacismoWithIdOnly = await prisma.tipoRacismo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoRacismoFindManyArgs>(args?: SelectSubset<T, TipoRacismoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoRacismo.
     * @param {TipoRacismoCreateArgs} args - Arguments to create a TipoRacismo.
     * @example
     * // Create one TipoRacismo
     * const TipoRacismo = await prisma.tipoRacismo.create({
     *   data: {
     *     // ... data to create a TipoRacismo
     *   }
     * })
     * 
     */
    create<T extends TipoRacismoCreateArgs>(args: SelectSubset<T, TipoRacismoCreateArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoRacismos.
     * @param {TipoRacismoCreateManyArgs} args - Arguments to create many TipoRacismos.
     * @example
     * // Create many TipoRacismos
     * const tipoRacismo = await prisma.tipoRacismo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoRacismoCreateManyArgs>(args?: SelectSubset<T, TipoRacismoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoRacismos and returns the data saved in the database.
     * @param {TipoRacismoCreateManyAndReturnArgs} args - Arguments to create many TipoRacismos.
     * @example
     * // Create many TipoRacismos
     * const tipoRacismo = await prisma.tipoRacismo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoRacismos and only return the `id`
     * const tipoRacismoWithIdOnly = await prisma.tipoRacismo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoRacismoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoRacismoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoRacismo.
     * @param {TipoRacismoDeleteArgs} args - Arguments to delete one TipoRacismo.
     * @example
     * // Delete one TipoRacismo
     * const TipoRacismo = await prisma.tipoRacismo.delete({
     *   where: {
     *     // ... filter to delete one TipoRacismo
     *   }
     * })
     * 
     */
    delete<T extends TipoRacismoDeleteArgs>(args: SelectSubset<T, TipoRacismoDeleteArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoRacismo.
     * @param {TipoRacismoUpdateArgs} args - Arguments to update one TipoRacismo.
     * @example
     * // Update one TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoRacismoUpdateArgs>(args: SelectSubset<T, TipoRacismoUpdateArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoRacismos.
     * @param {TipoRacismoDeleteManyArgs} args - Arguments to filter TipoRacismos to delete.
     * @example
     * // Delete a few TipoRacismos
     * const { count } = await prisma.tipoRacismo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoRacismoDeleteManyArgs>(args?: SelectSubset<T, TipoRacismoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRacismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoRacismos
     * const tipoRacismo = await prisma.tipoRacismo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoRacismoUpdateManyArgs>(args: SelectSubset<T, TipoRacismoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRacismos and returns the data updated in the database.
     * @param {TipoRacismoUpdateManyAndReturnArgs} args - Arguments to update many TipoRacismos.
     * @example
     * // Update many TipoRacismos
     * const tipoRacismo = await prisma.tipoRacismo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoRacismos and only return the `id`
     * const tipoRacismoWithIdOnly = await prisma.tipoRacismo.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoRacismoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoRacismoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoRacismo.
     * @param {TipoRacismoUpsertArgs} args - Arguments to update or create a TipoRacismo.
     * @example
     * // Update or create a TipoRacismo
     * const tipoRacismo = await prisma.tipoRacismo.upsert({
     *   create: {
     *     // ... data to create a TipoRacismo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoRacismo we want to update
     *   }
     * })
     */
    upsert<T extends TipoRacismoUpsertArgs>(args: SelectSubset<T, TipoRacismoUpsertArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoRacismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoCountArgs} args - Arguments to filter TipoRacismos to count.
     * @example
     * // Count the number of TipoRacismos
     * const count = await prisma.tipoRacismo.count({
     *   where: {
     *     // ... the filter for the TipoRacismos we want to count
     *   }
     * })
    **/
    count<T extends TipoRacismoCountArgs>(
      args?: Subset<T, TipoRacismoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoRacismoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoRacismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoRacismoAggregateArgs>(args: Subset<T, TipoRacismoAggregateArgs>): Prisma.PrismaPromise<GetTipoRacismoAggregateType<T>>

    /**
     * Group by TipoRacismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRacismoGroupByArgs} args - Group by arguments.
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
      T extends TipoRacismoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoRacismoGroupByArgs['orderBy'] }
        : { orderBy?: TipoRacismoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoRacismoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoRacismoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoRacismo model
   */
  readonly fields: TipoRacismoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoRacismo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoRacismoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localizacoes<T extends TipoRacismo$localizacoesArgs<ExtArgs> = {}>(args?: Subset<T, TipoRacismo$localizacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends TipoRacismo$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, TipoRacismo$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoRacismo model
   */
  interface TipoRacismoFieldRefs {
    readonly id: FieldRef<"TipoRacismo", 'Int'>
    readonly descricao: FieldRef<"TipoRacismo", 'String'>
    readonly createdAt: FieldRef<"TipoRacismo", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoRacismo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoRacismo findUnique
   */
  export type TipoRacismoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRacismo to fetch.
     */
    where: TipoRacismoWhereUniqueInput
  }

  /**
   * TipoRacismo findUniqueOrThrow
   */
  export type TipoRacismoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRacismo to fetch.
     */
    where: TipoRacismoWhereUniqueInput
  }

  /**
   * TipoRacismo findFirst
   */
  export type TipoRacismoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRacismo to fetch.
     */
    where?: TipoRacismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRacismos to fetch.
     */
    orderBy?: TipoRacismoOrderByWithRelationInput | TipoRacismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRacismos.
     */
    cursor?: TipoRacismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRacismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRacismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRacismos.
     */
    distinct?: TipoRacismoScalarFieldEnum | TipoRacismoScalarFieldEnum[]
  }

  /**
   * TipoRacismo findFirstOrThrow
   */
  export type TipoRacismoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRacismo to fetch.
     */
    where?: TipoRacismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRacismos to fetch.
     */
    orderBy?: TipoRacismoOrderByWithRelationInput | TipoRacismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRacismos.
     */
    cursor?: TipoRacismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRacismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRacismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRacismos.
     */
    distinct?: TipoRacismoScalarFieldEnum | TipoRacismoScalarFieldEnum[]
  }

  /**
   * TipoRacismo findMany
   */
  export type TipoRacismoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRacismos to fetch.
     */
    where?: TipoRacismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRacismos to fetch.
     */
    orderBy?: TipoRacismoOrderByWithRelationInput | TipoRacismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoRacismos.
     */
    cursor?: TipoRacismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRacismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRacismos.
     */
    skip?: number
    distinct?: TipoRacismoScalarFieldEnum | TipoRacismoScalarFieldEnum[]
  }

  /**
   * TipoRacismo create
   */
  export type TipoRacismoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoRacismo.
     */
    data: XOR<TipoRacismoCreateInput, TipoRacismoUncheckedCreateInput>
  }

  /**
   * TipoRacismo createMany
   */
  export type TipoRacismoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoRacismos.
     */
    data: TipoRacismoCreateManyInput | TipoRacismoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoRacismo createManyAndReturn
   */
  export type TipoRacismoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoRacismos.
     */
    data: TipoRacismoCreateManyInput | TipoRacismoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoRacismo update
   */
  export type TipoRacismoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoRacismo.
     */
    data: XOR<TipoRacismoUpdateInput, TipoRacismoUncheckedUpdateInput>
    /**
     * Choose, which TipoRacismo to update.
     */
    where: TipoRacismoWhereUniqueInput
  }

  /**
   * TipoRacismo updateMany
   */
  export type TipoRacismoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoRacismos.
     */
    data: XOR<TipoRacismoUpdateManyMutationInput, TipoRacismoUncheckedUpdateManyInput>
    /**
     * Filter which TipoRacismos to update
     */
    where?: TipoRacismoWhereInput
    /**
     * Limit how many TipoRacismos to update.
     */
    limit?: number
  }

  /**
   * TipoRacismo updateManyAndReturn
   */
  export type TipoRacismoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * The data used to update TipoRacismos.
     */
    data: XOR<TipoRacismoUpdateManyMutationInput, TipoRacismoUncheckedUpdateManyInput>
    /**
     * Filter which TipoRacismos to update
     */
    where?: TipoRacismoWhereInput
    /**
     * Limit how many TipoRacismos to update.
     */
    limit?: number
  }

  /**
   * TipoRacismo upsert
   */
  export type TipoRacismoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoRacismo to update in case it exists.
     */
    where: TipoRacismoWhereUniqueInput
    /**
     * In case the TipoRacismo found by the `where` argument doesn't exist, create a new TipoRacismo with this data.
     */
    create: XOR<TipoRacismoCreateInput, TipoRacismoUncheckedCreateInput>
    /**
     * In case the TipoRacismo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoRacismoUpdateInput, TipoRacismoUncheckedUpdateInput>
  }

  /**
   * TipoRacismo delete
   */
  export type TipoRacismoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
    /**
     * Filter which TipoRacismo to delete.
     */
    where: TipoRacismoWhereUniqueInput
  }

  /**
   * TipoRacismo deleteMany
   */
  export type TipoRacismoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRacismos to delete
     */
    where?: TipoRacismoWhereInput
    /**
     * Limit how many TipoRacismos to delete.
     */
    limit?: number
  }

  /**
   * TipoRacismo.localizacoes
   */
  export type TipoRacismo$localizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    cursor?: LocalizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * TipoRacismo.avaliacoes
   */
  export type TipoRacismo$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * TipoRacismo without action
   */
  export type TipoRacismoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRacismo
     */
    select?: TipoRacismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRacismo
     */
    omit?: TipoRacismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRacismoInclude<ExtArgs> | null
  }


  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    tipoRacismoId: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    tipoRacismoId: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    bairro: string | null
    rua: string | null
    latitude: number | null
    longitude: number | null
    tipoRacismoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    bairro: string | null
    rua: string | null
    latitude: number | null
    longitude: number | null
    tipoRacismoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    bairro: number
    rua: number
    latitude: number
    longitude: number
    tipoRacismoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    tipoRacismoId?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    tipoRacismoId?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    bairro?: true
    rua?: true
    latitude?: true
    longitude?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    bairro?: true
    rua?: true
    latitude?: true
    longitude?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    bairro?: true
    rua?: true
    latitude?: true
    longitude?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    bairro: string | null
    rua: string | null
    latitude: number
    longitude: number
    tipoRacismoId: number
    createdAt: Date
    updatedAt: Date
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    bairro?: boolean
    rua?: boolean
    latitude?: boolean
    longitude?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
    respostas?: boolean | Localizacao$respostasArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    bairro?: boolean
    rua?: boolean
    latitude?: boolean
    longitude?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    bairro?: boolean
    rua?: boolean
    latitude?: boolean
    longitude?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    bairro?: boolean
    rua?: boolean
    latitude?: boolean
    longitude?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocalizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "bairro" | "rua" | "latitude" | "longitude" | "tipoRacismoId" | "createdAt" | "updatedAt", ExtArgs["result"]["localizacao"]>
  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
    respostas?: boolean | Localizacao$respostasArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalizacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }
  export type LocalizacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }

  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      tipoRacismo: Prisma.$TipoRacismoPayload<ExtArgs>
      respostas: Prisma.$RespostaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      bairro: string | null
      rua: string | null
      latitude: number
      longitude: number
      tipoRacismoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacaoFindUniqueArgs>(args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacaoFindFirstArgs>(args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacaoFindManyArgs>(args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends LocalizacaoCreateArgs>(args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacaoCreateManyArgs>(args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizacaos and returns the data saved in the database.
     * @param {LocalizacaoCreateManyAndReturnArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalizacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalizacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends LocalizacaoDeleteArgs>(args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacaoUpdateArgs>(args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacaoDeleteManyArgs>(args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacaoUpdateManyArgs>(args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos and returns the data updated in the database.
     * @param {LocalizacaoUpdateManyAndReturnArgs} args - Arguments to update many Localizacaos.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalizacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalizacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacaoUpsertArgs>(args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
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
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoRacismo<T extends TipoRacismoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoRacismoDefaultArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostas<T extends Localizacao$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Localizacao$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Localizacao model
   */
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'Int'>
    readonly nome: FieldRef<"Localizacao", 'String'>
    readonly descricao: FieldRef<"Localizacao", 'String'>
    readonly bairro: FieldRef<"Localizacao", 'String'>
    readonly rua: FieldRef<"Localizacao", 'String'>
    readonly latitude: FieldRef<"Localizacao", 'Float'>
    readonly longitude: FieldRef<"Localizacao", 'Float'>
    readonly tipoRacismoId: FieldRef<"Localizacao", 'Int'>
    readonly createdAt: FieldRef<"Localizacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Localizacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }

  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacao createManyAndReturn
   */
  export type LocalizacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao updateManyAndReturn
   */
  export type LocalizacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }

  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to delete.
     */
    limit?: number
  }

  /**
   * Localizacao.respostas
   */
  export type Localizacao$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    where?: RespostaWhereInput
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    cursor?: RespostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }


  /**
   * Model Resposta
   */

  export type AggregateResposta = {
    _count: RespostaCountAggregateOutputType | null
    _avg: RespostaAvgAggregateOutputType | null
    _sum: RespostaSumAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  export type RespostaAvgAggregateOutputType = {
    id: number | null
    localizacaoId: number | null
  }

  export type RespostaSumAggregateOutputType = {
    id: number | null
    localizacaoId: number | null
  }

  export type RespostaMinAggregateOutputType = {
    id: number | null
    comentario: string | null
    usuario: string | null
    localizacaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RespostaMaxAggregateOutputType = {
    id: number | null
    comentario: string | null
    usuario: string | null
    localizacaoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RespostaCountAggregateOutputType = {
    id: number
    comentario: number
    usuario: number
    localizacaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RespostaAvgAggregateInputType = {
    id?: true
    localizacaoId?: true
  }

  export type RespostaSumAggregateInputType = {
    id?: true
    localizacaoId?: true
  }

  export type RespostaMinAggregateInputType = {
    id?: true
    comentario?: true
    usuario?: true
    localizacaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RespostaMaxAggregateInputType = {
    id?: true
    comentario?: true
    usuario?: true
    localizacaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RespostaCountAggregateInputType = {
    id?: true
    comentario?: true
    usuario?: true
    localizacaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resposta to aggregate.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respostas
    **/
    _count?: true | RespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespostaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespostaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespostaMaxAggregateInputType
  }

  export type GetRespostaAggregateType<T extends RespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResposta[P]>
      : GetScalarType<T[P], AggregateResposta[P]>
  }




  export type RespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaWhereInput
    orderBy?: RespostaOrderByWithAggregationInput | RespostaOrderByWithAggregationInput[]
    by: RespostaScalarFieldEnum[] | RespostaScalarFieldEnum
    having?: RespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespostaCountAggregateInputType | true
    _avg?: RespostaAvgAggregateInputType
    _sum?: RespostaSumAggregateInputType
    _min?: RespostaMinAggregateInputType
    _max?: RespostaMaxAggregateInputType
  }

  export type RespostaGroupByOutputType = {
    id: number
    comentario: string
    usuario: string
    localizacaoId: number
    createdAt: Date
    updatedAt: Date
    _count: RespostaCountAggregateOutputType | null
    _avg: RespostaAvgAggregateOutputType | null
    _sum: RespostaSumAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  type GetRespostaGroupByPayload<T extends RespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespostaGroupByOutputType[P]>
            : GetScalarType<T[P], RespostaGroupByOutputType[P]>
        }
      >
    >


  export type RespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comentario?: boolean
    usuario?: boolean
    localizacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>

  export type RespostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comentario?: boolean
    usuario?: boolean
    localizacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>

  export type RespostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comentario?: boolean
    usuario?: boolean
    localizacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>

  export type RespostaSelectScalar = {
    id?: boolean
    comentario?: boolean
    usuario?: boolean
    localizacaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RespostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comentario" | "usuario" | "localizacaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["resposta"]>
  export type RespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }
  export type RespostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }
  export type RespostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacao?: boolean | LocalizacaoDefaultArgs<ExtArgs>
  }

  export type $RespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resposta"
    objects: {
      localizacao: Prisma.$LocalizacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comentario: string
      usuario: string
      localizacaoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resposta"]>
    composites: {}
  }

  type RespostaGetPayload<S extends boolean | null | undefined | RespostaDefaultArgs> = $Result.GetResult<Prisma.$RespostaPayload, S>

  type RespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespostaCountAggregateInputType | true
    }

  export interface RespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resposta'], meta: { name: 'Resposta' } }
    /**
     * Find zero or one Resposta that matches the filter.
     * @param {RespostaFindUniqueArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespostaFindUniqueArgs>(args: SelectSubset<T, RespostaFindUniqueArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespostaFindUniqueOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespostaFindUniqueOrThrowArgs>(args: SelectSubset<T, RespostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespostaFindFirstArgs>(args?: SelectSubset<T, RespostaFindFirstArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespostaFindFirstOrThrowArgs>(args?: SelectSubset<T, RespostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respostas
     * const respostas = await prisma.resposta.findMany()
     * 
     * // Get first 10 Respostas
     * const respostas = await prisma.resposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respostaWithIdOnly = await prisma.resposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespostaFindManyArgs>(args?: SelectSubset<T, RespostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resposta.
     * @param {RespostaCreateArgs} args - Arguments to create a Resposta.
     * @example
     * // Create one Resposta
     * const Resposta = await prisma.resposta.create({
     *   data: {
     *     // ... data to create a Resposta
     *   }
     * })
     * 
     */
    create<T extends RespostaCreateArgs>(args: SelectSubset<T, RespostaCreateArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respostas.
     * @param {RespostaCreateManyArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const resposta = await prisma.resposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespostaCreateManyArgs>(args?: SelectSubset<T, RespostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Respostas and returns the data saved in the database.
     * @param {RespostaCreateManyAndReturnArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const resposta = await prisma.resposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Respostas and only return the `id`
     * const respostaWithIdOnly = await prisma.resposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespostaCreateManyAndReturnArgs>(args?: SelectSubset<T, RespostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resposta.
     * @param {RespostaDeleteArgs} args - Arguments to delete one Resposta.
     * @example
     * // Delete one Resposta
     * const Resposta = await prisma.resposta.delete({
     *   where: {
     *     // ... filter to delete one Resposta
     *   }
     * })
     * 
     */
    delete<T extends RespostaDeleteArgs>(args: SelectSubset<T, RespostaDeleteArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resposta.
     * @param {RespostaUpdateArgs} args - Arguments to update one Resposta.
     * @example
     * // Update one Resposta
     * const resposta = await prisma.resposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespostaUpdateArgs>(args: SelectSubset<T, RespostaUpdateArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respostas.
     * @param {RespostaDeleteManyArgs} args - Arguments to filter Respostas to delete.
     * @example
     * // Delete a few Respostas
     * const { count } = await prisma.resposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespostaDeleteManyArgs>(args?: SelectSubset<T, RespostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respostas
     * const resposta = await prisma.resposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespostaUpdateManyArgs>(args: SelectSubset<T, RespostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas and returns the data updated in the database.
     * @param {RespostaUpdateManyAndReturnArgs} args - Arguments to update many Respostas.
     * @example
     * // Update many Respostas
     * const resposta = await prisma.resposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Respostas and only return the `id`
     * const respostaWithIdOnly = await prisma.resposta.updateManyAndReturn({
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
    updateManyAndReturn<T extends RespostaUpdateManyAndReturnArgs>(args: SelectSubset<T, RespostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resposta.
     * @param {RespostaUpsertArgs} args - Arguments to update or create a Resposta.
     * @example
     * // Update or create a Resposta
     * const resposta = await prisma.resposta.upsert({
     *   create: {
     *     // ... data to create a Resposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resposta we want to update
     *   }
     * })
     */
    upsert<T extends RespostaUpsertArgs>(args: SelectSubset<T, RespostaUpsertArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaCountArgs} args - Arguments to filter Respostas to count.
     * @example
     * // Count the number of Respostas
     * const count = await prisma.resposta.count({
     *   where: {
     *     // ... the filter for the Respostas we want to count
     *   }
     * })
    **/
    count<T extends RespostaCountArgs>(
      args?: Subset<T, RespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespostaAggregateArgs>(args: Subset<T, RespostaAggregateArgs>): Prisma.PrismaPromise<GetRespostaAggregateType<T>>

    /**
     * Group by Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaGroupByArgs} args - Group by arguments.
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
      T extends RespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespostaGroupByArgs['orderBy'] }
        : { orderBy?: RespostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resposta model
   */
  readonly fields: RespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localizacao<T extends LocalizacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalizacaoDefaultArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resposta model
   */
  interface RespostaFieldRefs {
    readonly id: FieldRef<"Resposta", 'Int'>
    readonly comentario: FieldRef<"Resposta", 'String'>
    readonly usuario: FieldRef<"Resposta", 'String'>
    readonly localizacaoId: FieldRef<"Resposta", 'Int'>
    readonly createdAt: FieldRef<"Resposta", 'DateTime'>
    readonly updatedAt: FieldRef<"Resposta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resposta findUnique
   */
  export type RespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta findUniqueOrThrow
   */
  export type RespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta findFirst
   */
  export type RespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta findFirstOrThrow
   */
  export type RespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta findMany
   */
  export type RespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta create
   */
  export type RespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resposta.
     */
    data: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
  }

  /**
   * Resposta createMany
   */
  export type RespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respostas.
     */
    data: RespostaCreateManyInput | RespostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resposta createManyAndReturn
   */
  export type RespostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * The data used to create many Respostas.
     */
    data: RespostaCreateManyInput | RespostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resposta update
   */
  export type RespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resposta.
     */
    data: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
    /**
     * Choose, which Resposta to update.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta updateMany
   */
  export type RespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostaWhereInput
    /**
     * Limit how many Respostas to update.
     */
    limit?: number
  }

  /**
   * Resposta updateManyAndReturn
   */
  export type RespostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostaWhereInput
    /**
     * Limit how many Respostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resposta upsert
   */
  export type RespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resposta to update in case it exists.
     */
    where: RespostaWhereUniqueInput
    /**
     * In case the Resposta found by the `where` argument doesn't exist, create a new Resposta with this data.
     */
    create: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
    /**
     * In case the Resposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
  }

  /**
   * Resposta delete
   */
  export type RespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter which Resposta to delete.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta deleteMany
   */
  export type RespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respostas to delete
     */
    where?: RespostaWhereInput
    /**
     * Limit how many Respostas to delete.
     */
    limit?: number
  }

  /**
   * Resposta without action
   */
  export type RespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    nota: number | null
    tipoRacismoId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    nota: number | null
    tipoRacismoId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    comentario: string | null
    nota: number | null
    tipoRacismoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    comentario: string | null
    nota: number | null
    tipoRacismoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    usuario: number
    comentario: number
    nota: number
    tipoRacismoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    nota?: true
    tipoRacismoId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    nota?: true
    tipoRacismoId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    usuario?: true
    comentario?: true
    nota?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    usuario?: true
    comentario?: true
    nota?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    usuario?: true
    comentario?: true
    nota?: true
    tipoRacismoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    usuario: string
    comentario: string
    nota: number
    tipoRacismoId: number
    createdAt: Date
    updatedAt: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    comentario?: boolean
    nota?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    comentario?: boolean
    nota?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    comentario?: boolean
    nota?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    usuario?: boolean
    comentario?: boolean
    nota?: boolean
    tipoRacismoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "comentario" | "nota" | "tipoRacismoId" | "createdAt" | "updatedAt", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRacismo?: boolean | TipoRacismoDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      tipoRacismo: Prisma.$TipoRacismoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      comentario: string
      nota: number
      tipoRacismoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoRacismo<T extends TipoRacismoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoRacismoDefaultArgs<ExtArgs>>): Prisma__TipoRacismoClient<$Result.GetResult<Prisma.$TipoRacismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly usuario: FieldRef<"Avaliacao", 'String'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly tipoRacismoId: FieldRef<"Avaliacao", 'Int'>
    readonly createdAt: FieldRef<"Avaliacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
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


  export const TipoRacismoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoRacismoScalarFieldEnum = (typeof TipoRacismoScalarFieldEnum)[keyof typeof TipoRacismoScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    bairro: 'bairro',
    rua: 'rua',
    latitude: 'latitude',
    longitude: 'longitude',
    tipoRacismoId: 'tipoRacismoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const RespostaScalarFieldEnum: {
    id: 'id',
    comentario: 'comentario',
    usuario: 'usuario',
    localizacaoId: 'localizacaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RespostaScalarFieldEnum = (typeof RespostaScalarFieldEnum)[keyof typeof RespostaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    comentario: 'comentario',
    nota: 'nota',
    tipoRacismoId: 'tipoRacismoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type TipoRacismoWhereInput = {
    AND?: TipoRacismoWhereInput | TipoRacismoWhereInput[]
    OR?: TipoRacismoWhereInput[]
    NOT?: TipoRacismoWhereInput | TipoRacismoWhereInput[]
    id?: IntFilter<"TipoRacismo"> | number
    descricao?: StringFilter<"TipoRacismo"> | string
    createdAt?: DateTimeFilter<"TipoRacismo"> | Date | string
    updatedAt?: DateTimeFilter<"TipoRacismo"> | Date | string
    localizacoes?: LocalizacaoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type TipoRacismoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localizacoes?: LocalizacaoOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type TipoRacismoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoRacismoWhereInput | TipoRacismoWhereInput[]
    OR?: TipoRacismoWhereInput[]
    NOT?: TipoRacismoWhereInput | TipoRacismoWhereInput[]
    descricao?: StringFilter<"TipoRacismo"> | string
    createdAt?: DateTimeFilter<"TipoRacismo"> | Date | string
    updatedAt?: DateTimeFilter<"TipoRacismo"> | Date | string
    localizacoes?: LocalizacaoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type TipoRacismoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoRacismoCountOrderByAggregateInput
    _avg?: TipoRacismoAvgOrderByAggregateInput
    _max?: TipoRacismoMaxOrderByAggregateInput
    _min?: TipoRacismoMinOrderByAggregateInput
    _sum?: TipoRacismoSumOrderByAggregateInput
  }

  export type TipoRacismoScalarWhereWithAggregatesInput = {
    AND?: TipoRacismoScalarWhereWithAggregatesInput | TipoRacismoScalarWhereWithAggregatesInput[]
    OR?: TipoRacismoScalarWhereWithAggregatesInput[]
    NOT?: TipoRacismoScalarWhereWithAggregatesInput | TipoRacismoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoRacismo"> | number
    descricao?: StringWithAggregatesFilter<"TipoRacismo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TipoRacismo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoRacismo"> | Date | string
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    nome?: StringFilter<"Localizacao"> | string
    descricao?: StringFilter<"Localizacao"> | string
    bairro?: StringNullableFilter<"Localizacao"> | string | null
    rua?: StringNullableFilter<"Localizacao"> | string | null
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    tipoRacismoId?: IntFilter<"Localizacao"> | number
    createdAt?: DateTimeFilter<"Localizacao"> | Date | string
    updatedAt?: DateTimeFilter<"Localizacao"> | Date | string
    tipoRacismo?: XOR<TipoRacismoScalarRelationFilter, TipoRacismoWhereInput>
    respostas?: RespostaListRelationFilter
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    bairro?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipoRacismo?: TipoRacismoOrderByWithRelationInput
    respostas?: RespostaOrderByRelationAggregateInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    nome?: StringFilter<"Localizacao"> | string
    descricao?: StringFilter<"Localizacao"> | string
    bairro?: StringNullableFilter<"Localizacao"> | string | null
    rua?: StringNullableFilter<"Localizacao"> | string | null
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    tipoRacismoId?: IntFilter<"Localizacao"> | number
    createdAt?: DateTimeFilter<"Localizacao"> | Date | string
    updatedAt?: DateTimeFilter<"Localizacao"> | Date | string
    tipoRacismo?: XOR<TipoRacismoScalarRelationFilter, TipoRacismoWhereInput>
    respostas?: RespostaListRelationFilter
  }, "id">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    bairro?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacao"> | number
    nome?: StringWithAggregatesFilter<"Localizacao"> | string
    descricao?: StringWithAggregatesFilter<"Localizacao"> | string
    bairro?: StringNullableWithAggregatesFilter<"Localizacao"> | string | null
    rua?: StringNullableWithAggregatesFilter<"Localizacao"> | string | null
    latitude?: FloatWithAggregatesFilter<"Localizacao"> | number
    longitude?: FloatWithAggregatesFilter<"Localizacao"> | number
    tipoRacismoId?: IntWithAggregatesFilter<"Localizacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Localizacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Localizacao"> | Date | string
  }

  export type RespostaWhereInput = {
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    id?: IntFilter<"Resposta"> | number
    comentario?: StringFilter<"Resposta"> | string
    usuario?: StringFilter<"Resposta"> | string
    localizacaoId?: IntFilter<"Resposta"> | number
    createdAt?: DateTimeFilter<"Resposta"> | Date | string
    updatedAt?: DateTimeFilter<"Resposta"> | Date | string
    localizacao?: XOR<LocalizacaoScalarRelationFilter, LocalizacaoWhereInput>
  }

  export type RespostaOrderByWithRelationInput = {
    id?: SortOrder
    comentario?: SortOrder
    usuario?: SortOrder
    localizacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localizacao?: LocalizacaoOrderByWithRelationInput
  }

  export type RespostaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    comentario?: StringFilter<"Resposta"> | string
    usuario?: StringFilter<"Resposta"> | string
    localizacaoId?: IntFilter<"Resposta"> | number
    createdAt?: DateTimeFilter<"Resposta"> | Date | string
    updatedAt?: DateTimeFilter<"Resposta"> | Date | string
    localizacao?: XOR<LocalizacaoScalarRelationFilter, LocalizacaoWhereInput>
  }, "id">

  export type RespostaOrderByWithAggregationInput = {
    id?: SortOrder
    comentario?: SortOrder
    usuario?: SortOrder
    localizacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RespostaCountOrderByAggregateInput
    _avg?: RespostaAvgOrderByAggregateInput
    _max?: RespostaMaxOrderByAggregateInput
    _min?: RespostaMinOrderByAggregateInput
    _sum?: RespostaSumOrderByAggregateInput
  }

  export type RespostaScalarWhereWithAggregatesInput = {
    AND?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    OR?: RespostaScalarWhereWithAggregatesInput[]
    NOT?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resposta"> | number
    comentario?: StringWithAggregatesFilter<"Resposta"> | string
    usuario?: StringWithAggregatesFilter<"Resposta"> | string
    localizacaoId?: IntWithAggregatesFilter<"Resposta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Resposta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resposta"> | Date | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    usuario?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    tipoRacismoId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    tipoRacismo?: XOR<TipoRacismoScalarRelationFilter, TipoRacismoWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipoRacismo?: TipoRacismoOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    usuario?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    tipoRacismoId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    tipoRacismo?: XOR<TipoRacismoScalarRelationFilter, TipoRacismoWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    usuario?: StringWithAggregatesFilter<"Avaliacao"> | string
    comentario?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    tipoRacismoId?: IntWithAggregatesFilter<"Avaliacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type TipoRacismoCreateInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localizacoes?: LocalizacaoCreateNestedManyWithoutTipoRacismoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoUncheckedCreateInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutTipoRacismoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUpdateManyWithoutTipoRacismoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutTipoRacismoNestedInput
  }

  export type TipoRacismoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput
  }

  export type TipoRacismoCreateManyInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoRacismoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoRacismoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoCreateInput = {
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoRacismo: TipoRacismoCreateNestedOneWithoutLocalizacoesInput
    respostas?: RespostaCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    tipoRacismoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: RespostaUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRacismo?: TipoRacismoUpdateOneRequiredWithoutLocalizacoesNestedInput
    respostas?: RespostaUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    tipoRacismoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    tipoRacismoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    tipoRacismoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaCreateInput = {
    comentario: string
    usuario: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localizacao: LocalizacaoCreateNestedOneWithoutRespostasInput
  }

  export type RespostaUncheckedCreateInput = {
    id?: number
    comentario: string
    usuario: string
    localizacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RespostaUpdateInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacao?: LocalizacaoUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    localizacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaCreateManyInput = {
    id?: number
    comentario: string
    usuario: string
    localizacaoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RespostaUpdateManyMutationInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    localizacaoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateInput = {
    usuario: string
    comentario: string
    nota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoRacismo: TipoRacismoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    usuario: string
    comentario: string
    nota?: number
    tipoRacismoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRacismo?: TipoRacismoUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    tipoRacismoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    usuario: string
    comentario: string
    nota?: number
    tipoRacismoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    tipoRacismoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type LocalizacaoListRelationFilter = {
    every?: LocalizacaoWhereInput
    some?: LocalizacaoWhereInput
    none?: LocalizacaoWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type LocalizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoRacismoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoRacismoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoRacismoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoRacismoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoRacismoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TipoRacismoScalarRelationFilter = {
    is?: TipoRacismoWhereInput
    isNot?: TipoRacismoWhereInput
  }

  export type RespostaListRelationFilter = {
    every?: RespostaWhereInput
    some?: RespostaWhereInput
    none?: RespostaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RespostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tipoRacismoId?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LocalizacaoScalarRelationFilter = {
    is?: LocalizacaoWhereInput
    isNot?: LocalizacaoWhereInput
  }

  export type RespostaCountOrderByAggregateInput = {
    id?: SortOrder
    comentario?: SortOrder
    usuario?: SortOrder
    localizacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RespostaAvgOrderByAggregateInput = {
    id?: SortOrder
    localizacaoId?: SortOrder
  }

  export type RespostaMaxOrderByAggregateInput = {
    id?: SortOrder
    comentario?: SortOrder
    usuario?: SortOrder
    localizacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RespostaMinOrderByAggregateInput = {
    id?: SortOrder
    comentario?: SortOrder
    usuario?: SortOrder
    localizacaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RespostaSumOrderByAggregateInput = {
    id?: SortOrder
    localizacaoId?: SortOrder
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    tipoRacismoId?: SortOrder
  }

  export type LocalizacaoCreateNestedManyWithoutTipoRacismoInput = {
    create?: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput> | LocalizacaoCreateWithoutTipoRacismoInput[] | LocalizacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutTipoRacismoInput | LocalizacaoCreateOrConnectWithoutTipoRacismoInput[]
    createMany?: LocalizacaoCreateManyTipoRacismoInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutTipoRacismoInput = {
    create?: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput> | AvaliacaoCreateWithoutTipoRacismoInput[] | AvaliacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTipoRacismoInput | AvaliacaoCreateOrConnectWithoutTipoRacismoInput[]
    createMany?: AvaliacaoCreateManyTipoRacismoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type LocalizacaoUncheckedCreateNestedManyWithoutTipoRacismoInput = {
    create?: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput> | LocalizacaoCreateWithoutTipoRacismoInput[] | LocalizacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutTipoRacismoInput | LocalizacaoCreateOrConnectWithoutTipoRacismoInput[]
    createMany?: LocalizacaoCreateManyTipoRacismoInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutTipoRacismoInput = {
    create?: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput> | AvaliacaoCreateWithoutTipoRacismoInput[] | AvaliacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTipoRacismoInput | AvaliacaoCreateOrConnectWithoutTipoRacismoInput[]
    createMany?: AvaliacaoCreateManyTipoRacismoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocalizacaoUpdateManyWithoutTipoRacismoNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput> | LocalizacaoCreateWithoutTipoRacismoInput[] | LocalizacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutTipoRacismoInput | LocalizacaoCreateOrConnectWithoutTipoRacismoInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutTipoRacismoInput | LocalizacaoUpsertWithWhereUniqueWithoutTipoRacismoInput[]
    createMany?: LocalizacaoCreateManyTipoRacismoInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutTipoRacismoInput | LocalizacaoUpdateWithWhereUniqueWithoutTipoRacismoInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutTipoRacismoInput | LocalizacaoUpdateManyWithWhereWithoutTipoRacismoInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutTipoRacismoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput> | AvaliacaoCreateWithoutTipoRacismoInput[] | AvaliacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTipoRacismoInput | AvaliacaoCreateOrConnectWithoutTipoRacismoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutTipoRacismoInput | AvaliacaoUpsertWithWhereUniqueWithoutTipoRacismoInput[]
    createMany?: AvaliacaoCreateManyTipoRacismoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutTipoRacismoInput | AvaliacaoUpdateWithWhereUniqueWithoutTipoRacismoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutTipoRacismoInput | AvaliacaoUpdateManyWithWhereWithoutTipoRacismoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocalizacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput> | LocalizacaoCreateWithoutTipoRacismoInput[] | LocalizacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutTipoRacismoInput | LocalizacaoCreateOrConnectWithoutTipoRacismoInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutTipoRacismoInput | LocalizacaoUpsertWithWhereUniqueWithoutTipoRacismoInput[]
    createMany?: LocalizacaoCreateManyTipoRacismoInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutTipoRacismoInput | LocalizacaoUpdateWithWhereUniqueWithoutTipoRacismoInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutTipoRacismoInput | LocalizacaoUpdateManyWithWhereWithoutTipoRacismoInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput> | AvaliacaoCreateWithoutTipoRacismoInput[] | AvaliacaoUncheckedCreateWithoutTipoRacismoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutTipoRacismoInput | AvaliacaoCreateOrConnectWithoutTipoRacismoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutTipoRacismoInput | AvaliacaoUpsertWithWhereUniqueWithoutTipoRacismoInput[]
    createMany?: AvaliacaoCreateManyTipoRacismoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutTipoRacismoInput | AvaliacaoUpdateWithWhereUniqueWithoutTipoRacismoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutTipoRacismoInput | AvaliacaoUpdateManyWithWhereWithoutTipoRacismoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type TipoRacismoCreateNestedOneWithoutLocalizacoesInput = {
    create?: XOR<TipoRacismoCreateWithoutLocalizacoesInput, TipoRacismoUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: TipoRacismoCreateOrConnectWithoutLocalizacoesInput
    connect?: TipoRacismoWhereUniqueInput
  }

  export type RespostaCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput> | RespostaCreateWithoutLocalizacaoInput[] | RespostaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutLocalizacaoInput | RespostaCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: RespostaCreateManyLocalizacaoInputEnvelope
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
  }

  export type RespostaUncheckedCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput> | RespostaCreateWithoutLocalizacaoInput[] | RespostaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutLocalizacaoInput | RespostaCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: RespostaCreateManyLocalizacaoInputEnvelope
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TipoRacismoUpdateOneRequiredWithoutLocalizacoesNestedInput = {
    create?: XOR<TipoRacismoCreateWithoutLocalizacoesInput, TipoRacismoUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: TipoRacismoCreateOrConnectWithoutLocalizacoesInput
    upsert?: TipoRacismoUpsertWithoutLocalizacoesInput
    connect?: TipoRacismoWhereUniqueInput
    update?: XOR<XOR<TipoRacismoUpdateToOneWithWhereWithoutLocalizacoesInput, TipoRacismoUpdateWithoutLocalizacoesInput>, TipoRacismoUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type RespostaUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput> | RespostaCreateWithoutLocalizacaoInput[] | RespostaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutLocalizacaoInput | RespostaCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: RespostaUpsertWithWhereUniqueWithoutLocalizacaoInput | RespostaUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: RespostaCreateManyLocalizacaoInputEnvelope
    set?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    disconnect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    delete?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    update?: RespostaUpdateWithWhereUniqueWithoutLocalizacaoInput | RespostaUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: RespostaUpdateManyWithWhereWithoutLocalizacaoInput | RespostaUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
  }

  export type RespostaUncheckedUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput> | RespostaCreateWithoutLocalizacaoInput[] | RespostaUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutLocalizacaoInput | RespostaCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: RespostaUpsertWithWhereUniqueWithoutLocalizacaoInput | RespostaUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: RespostaCreateManyLocalizacaoInputEnvelope
    set?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    disconnect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    delete?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    update?: RespostaUpdateWithWhereUniqueWithoutLocalizacaoInput | RespostaUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: RespostaUpdateManyWithWhereWithoutLocalizacaoInput | RespostaUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
  }

  export type LocalizacaoCreateNestedOneWithoutRespostasInput = {
    create?: XOR<LocalizacaoCreateWithoutRespostasInput, LocalizacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutRespostasInput
    connect?: LocalizacaoWhereUniqueInput
  }

  export type LocalizacaoUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutRespostasInput, LocalizacaoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutRespostasInput
    upsert?: LocalizacaoUpsertWithoutRespostasInput
    connect?: LocalizacaoWhereUniqueInput
    update?: XOR<XOR<LocalizacaoUpdateToOneWithWhereWithoutRespostasInput, LocalizacaoUpdateWithoutRespostasInput>, LocalizacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type TipoRacismoCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<TipoRacismoCreateWithoutAvaliacoesInput, TipoRacismoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: TipoRacismoCreateOrConnectWithoutAvaliacoesInput
    connect?: TipoRacismoWhereUniqueInput
  }

  export type TipoRacismoUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<TipoRacismoCreateWithoutAvaliacoesInput, TipoRacismoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: TipoRacismoCreateOrConnectWithoutAvaliacoesInput
    upsert?: TipoRacismoUpsertWithoutAvaliacoesInput
    connect?: TipoRacismoWhereUniqueInput
    update?: XOR<XOR<TipoRacismoUpdateToOneWithWhereWithoutAvaliacoesInput, TipoRacismoUpdateWithoutAvaliacoesInput>, TipoRacismoUncheckedUpdateWithoutAvaliacoesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LocalizacaoCreateWithoutTipoRacismoInput = {
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: RespostaCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUncheckedCreateWithoutTipoRacismoInput = {
    id?: number
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: RespostaUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoCreateOrConnectWithoutTipoRacismoInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput>
  }

  export type LocalizacaoCreateManyTipoRacismoInputEnvelope = {
    data: LocalizacaoCreateManyTipoRacismoInput | LocalizacaoCreateManyTipoRacismoInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutTipoRacismoInput = {
    usuario: string
    comentario: string
    nota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoUncheckedCreateWithoutTipoRacismoInput = {
    id?: number
    usuario: string
    comentario: string
    nota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutTipoRacismoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput>
  }

  export type AvaliacaoCreateManyTipoRacismoInputEnvelope = {
    data: AvaliacaoCreateManyTipoRacismoInput | AvaliacaoCreateManyTipoRacismoInput[]
    skipDuplicates?: boolean
  }

  export type LocalizacaoUpsertWithWhereUniqueWithoutTipoRacismoInput = {
    where: LocalizacaoWhereUniqueInput
    update: XOR<LocalizacaoUpdateWithoutTipoRacismoInput, LocalizacaoUncheckedUpdateWithoutTipoRacismoInput>
    create: XOR<LocalizacaoCreateWithoutTipoRacismoInput, LocalizacaoUncheckedCreateWithoutTipoRacismoInput>
  }

  export type LocalizacaoUpdateWithWhereUniqueWithoutTipoRacismoInput = {
    where: LocalizacaoWhereUniqueInput
    data: XOR<LocalizacaoUpdateWithoutTipoRacismoInput, LocalizacaoUncheckedUpdateWithoutTipoRacismoInput>
  }

  export type LocalizacaoUpdateManyWithWhereWithoutTipoRacismoInput = {
    where: LocalizacaoScalarWhereInput
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyWithoutTipoRacismoInput>
  }

  export type LocalizacaoScalarWhereInput = {
    AND?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    OR?: LocalizacaoScalarWhereInput[]
    NOT?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    nome?: StringFilter<"Localizacao"> | string
    descricao?: StringFilter<"Localizacao"> | string
    bairro?: StringNullableFilter<"Localizacao"> | string | null
    rua?: StringNullableFilter<"Localizacao"> | string | null
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    tipoRacismoId?: IntFilter<"Localizacao"> | number
    createdAt?: DateTimeFilter<"Localizacao"> | Date | string
    updatedAt?: DateTimeFilter<"Localizacao"> | Date | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutTipoRacismoInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutTipoRacismoInput, AvaliacaoUncheckedUpdateWithoutTipoRacismoInput>
    create: XOR<AvaliacaoCreateWithoutTipoRacismoInput, AvaliacaoUncheckedCreateWithoutTipoRacismoInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutTipoRacismoInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutTipoRacismoInput, AvaliacaoUncheckedUpdateWithoutTipoRacismoInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutTipoRacismoInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutTipoRacismoInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    usuario?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    tipoRacismoId?: IntFilter<"Avaliacao"> | number
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type TipoRacismoCreateWithoutLocalizacoesInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacoes?: AvaliacaoCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoUncheckedCreateWithoutLocalizacoesInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoCreateOrConnectWithoutLocalizacoesInput = {
    where: TipoRacismoWhereUniqueInput
    create: XOR<TipoRacismoCreateWithoutLocalizacoesInput, TipoRacismoUncheckedCreateWithoutLocalizacoesInput>
  }

  export type RespostaCreateWithoutLocalizacaoInput = {
    comentario: string
    usuario: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RespostaUncheckedCreateWithoutLocalizacaoInput = {
    id?: number
    comentario: string
    usuario: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RespostaCreateOrConnectWithoutLocalizacaoInput = {
    where: RespostaWhereUniqueInput
    create: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput>
  }

  export type RespostaCreateManyLocalizacaoInputEnvelope = {
    data: RespostaCreateManyLocalizacaoInput | RespostaCreateManyLocalizacaoInput[]
    skipDuplicates?: boolean
  }

  export type TipoRacismoUpsertWithoutLocalizacoesInput = {
    update: XOR<TipoRacismoUpdateWithoutLocalizacoesInput, TipoRacismoUncheckedUpdateWithoutLocalizacoesInput>
    create: XOR<TipoRacismoCreateWithoutLocalizacoesInput, TipoRacismoUncheckedCreateWithoutLocalizacoesInput>
    where?: TipoRacismoWhereInput
  }

  export type TipoRacismoUpdateToOneWithWhereWithoutLocalizacoesInput = {
    where?: TipoRacismoWhereInput
    data: XOR<TipoRacismoUpdateWithoutLocalizacoesInput, TipoRacismoUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type TipoRacismoUpdateWithoutLocalizacoesInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUpdateManyWithoutTipoRacismoNestedInput
  }

  export type TipoRacismoUncheckedUpdateWithoutLocalizacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput
  }

  export type RespostaUpsertWithWhereUniqueWithoutLocalizacaoInput = {
    where: RespostaWhereUniqueInput
    update: XOR<RespostaUpdateWithoutLocalizacaoInput, RespostaUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<RespostaCreateWithoutLocalizacaoInput, RespostaUncheckedCreateWithoutLocalizacaoInput>
  }

  export type RespostaUpdateWithWhereUniqueWithoutLocalizacaoInput = {
    where: RespostaWhereUniqueInput
    data: XOR<RespostaUpdateWithoutLocalizacaoInput, RespostaUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type RespostaUpdateManyWithWhereWithoutLocalizacaoInput = {
    where: RespostaScalarWhereInput
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyWithoutLocalizacaoInput>
  }

  export type RespostaScalarWhereInput = {
    AND?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
    OR?: RespostaScalarWhereInput[]
    NOT?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
    id?: IntFilter<"Resposta"> | number
    comentario?: StringFilter<"Resposta"> | string
    usuario?: StringFilter<"Resposta"> | string
    localizacaoId?: IntFilter<"Resposta"> | number
    createdAt?: DateTimeFilter<"Resposta"> | Date | string
    updatedAt?: DateTimeFilter<"Resposta"> | Date | string
  }

  export type LocalizacaoCreateWithoutRespostasInput = {
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoRacismo: TipoRacismoCreateNestedOneWithoutLocalizacoesInput
  }

  export type LocalizacaoUncheckedCreateWithoutRespostasInput = {
    id?: number
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    tipoRacismoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizacaoCreateOrConnectWithoutRespostasInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutRespostasInput, LocalizacaoUncheckedCreateWithoutRespostasInput>
  }

  export type LocalizacaoUpsertWithoutRespostasInput = {
    update: XOR<LocalizacaoUpdateWithoutRespostasInput, LocalizacaoUncheckedUpdateWithoutRespostasInput>
    create: XOR<LocalizacaoCreateWithoutRespostasInput, LocalizacaoUncheckedCreateWithoutRespostasInput>
    where?: LocalizacaoWhereInput
  }

  export type LocalizacaoUpdateToOneWithWhereWithoutRespostasInput = {
    where?: LocalizacaoWhereInput
    data: XOR<LocalizacaoUpdateWithoutRespostasInput, LocalizacaoUncheckedUpdateWithoutRespostasInput>
  }

  export type LocalizacaoUpdateWithoutRespostasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRacismo?: TipoRacismoUpdateOneRequiredWithoutLocalizacoesNestedInput
  }

  export type LocalizacaoUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    tipoRacismoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoRacismoCreateWithoutAvaliacoesInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localizacoes?: LocalizacaoCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutTipoRacismoInput
  }

  export type TipoRacismoCreateOrConnectWithoutAvaliacoesInput = {
    where: TipoRacismoWhereUniqueInput
    create: XOR<TipoRacismoCreateWithoutAvaliacoesInput, TipoRacismoUncheckedCreateWithoutAvaliacoesInput>
  }

  export type TipoRacismoUpsertWithoutAvaliacoesInput = {
    update: XOR<TipoRacismoUpdateWithoutAvaliacoesInput, TipoRacismoUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<TipoRacismoCreateWithoutAvaliacoesInput, TipoRacismoUncheckedCreateWithoutAvaliacoesInput>
    where?: TipoRacismoWhereInput
  }

  export type TipoRacismoUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: TipoRacismoWhereInput
    data: XOR<TipoRacismoUpdateWithoutAvaliacoesInput, TipoRacismoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type TipoRacismoUpdateWithoutAvaliacoesInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUpdateManyWithoutTipoRacismoNestedInput
  }

  export type TipoRacismoUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutTipoRacismoNestedInput
  }

  export type LocalizacaoCreateManyTipoRacismoInput = {
    id?: number
    nome: string
    descricao: string
    bairro?: string | null
    rua?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvaliacaoCreateManyTipoRacismoInput = {
    id?: number
    usuario: string
    comentario: string
    nota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizacaoUpdateWithoutTipoRacismoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateWithoutTipoRacismoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateManyWithoutTipoRacismoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUpdateWithoutTipoRacismoInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateWithoutTipoRacismoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutTipoRacismoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaCreateManyLocalizacaoInput = {
    id?: number
    comentario: string
    usuario: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RespostaUpdateWithoutLocalizacaoInput = {
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaUncheckedUpdateWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaUncheckedUpdateManyWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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