
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CoachProfile
 * 
 */
export type CoachProfile = $Result.DefaultSelection<Prisma.$CoachProfilePayload>
/**
 * Model ClientProfile
 * 
 */
export type ClientProfile = $Result.DefaultSelection<Prisma.$ClientProfilePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model AdminReview
 * 
 */
export type AdminReview = $Result.DefaultSelection<Prisma.$AdminReviewPayload>
/**
 * Model CommissionLog
 * 
 */
export type CommissionLog = $Result.DefaultSelection<Prisma.$CommissionLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PROSPECT: 'PROSPECT',
  COACH: 'COACH',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const MediaType: {
  CERTIFICATE: 'CERTIFICATE',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  OTHER: 'OTHER'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const ReviewAction: {
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING'
};

export type ReviewAction = (typeof ReviewAction)[keyof typeof ReviewAction]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type ReviewAction = $Enums.ReviewAction

export const ReviewAction: typeof $Enums.ReviewAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachProfile`: Exposes CRUD operations for the **CoachProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachProfiles
    * const coachProfiles = await prisma.coachProfile.findMany()
    * ```
    */
  get coachProfile(): Prisma.CoachProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientProfile`: Exposes CRUD operations for the **ClientProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientProfiles
    * const clientProfiles = await prisma.clientProfile.findMany()
    * ```
    */
  get clientProfile(): Prisma.ClientProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminReview`: Exposes CRUD operations for the **AdminReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminReviews
    * const adminReviews = await prisma.adminReview.findMany()
    * ```
    */
  get adminReview(): Prisma.AdminReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commissionLog`: Exposes CRUD operations for the **CommissionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommissionLogs
    * const commissionLogs = await prisma.commissionLog.findMany()
    * ```
    */
  get commissionLog(): Prisma.CommissionLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    User: 'User',
    CoachProfile: 'CoachProfile',
    ClientProfile: 'ClientProfile',
    Media: 'Media',
    Chat: 'Chat',
    Message: 'Message',
    AdminReview: 'AdminReview',
    CommissionLog: 'CommissionLog'
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
      modelProps: "user" | "coachProfile" | "clientProfile" | "media" | "chat" | "message" | "adminReview" | "commissionLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CoachProfile: {
        payload: Prisma.$CoachProfilePayload<ExtArgs>
        fields: Prisma.CoachProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          findFirst: {
            args: Prisma.CoachProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          findMany: {
            args: Prisma.CoachProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>[]
          }
          create: {
            args: Prisma.CoachProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          createMany: {
            args: Prisma.CoachProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>[]
          }
          delete: {
            args: Prisma.CoachProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          update: {
            args: Prisma.CoachProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          deleteMany: {
            args: Prisma.CoachProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>[]
          }
          upsert: {
            args: Prisma.CoachProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          aggregate: {
            args: Prisma.CoachProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachProfile>
          }
          groupBy: {
            args: Prisma.CoachProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CoachProfileCountAggregateOutputType> | number
          }
        }
      }
      ClientProfile: {
        payload: Prisma.$ClientProfilePayload<ExtArgs>
        fields: Prisma.ClientProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          findFirst: {
            args: Prisma.ClientProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          findMany: {
            args: Prisma.ClientProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          create: {
            args: Prisma.ClientProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          createMany: {
            args: Prisma.ClientProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          delete: {
            args: Prisma.ClientProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          update: {
            args: Prisma.ClientProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          deleteMany: {
            args: Prisma.ClientProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>[]
          }
          upsert: {
            args: Prisma.ClientProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientProfilePayload>
          }
          aggregate: {
            args: Prisma.ClientProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientProfile>
          }
          groupBy: {
            args: Prisma.ClientProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ClientProfileCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      AdminReview: {
        payload: Prisma.$AdminReviewPayload<ExtArgs>
        fields: Prisma.AdminReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          findFirst: {
            args: Prisma.AdminReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          findMany: {
            args: Prisma.AdminReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>[]
          }
          create: {
            args: Prisma.AdminReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          createMany: {
            args: Prisma.AdminReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>[]
          }
          delete: {
            args: Prisma.AdminReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          update: {
            args: Prisma.AdminReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          deleteMany: {
            args: Prisma.AdminReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>[]
          }
          upsert: {
            args: Prisma.AdminReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReviewPayload>
          }
          aggregate: {
            args: Prisma.AdminReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminReview>
          }
          groupBy: {
            args: Prisma.AdminReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminReviewCountArgs<ExtArgs>
            result: $Utils.Optional<AdminReviewCountAggregateOutputType> | number
          }
        }
      }
      CommissionLog: {
        payload: Prisma.$CommissionLogPayload<ExtArgs>
        fields: Prisma.CommissionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          findFirst: {
            args: Prisma.CommissionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          findMany: {
            args: Prisma.CommissionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>[]
          }
          create: {
            args: Prisma.CommissionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          createMany: {
            args: Prisma.CommissionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommissionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>[]
          }
          delete: {
            args: Prisma.CommissionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          update: {
            args: Prisma.CommissionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          deleteMany: {
            args: Prisma.CommissionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommissionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>[]
          }
          upsert: {
            args: Prisma.CommissionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionLogPayload>
          }
          aggregate: {
            args: Prisma.CommissionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommissionLog>
          }
          groupBy: {
            args: Prisma.CommissionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommissionLogCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionLogCountAggregateOutputType> | number
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
    user?: UserOmit
    coachProfile?: CoachProfileOmit
    clientProfile?: ClientProfileOmit
    media?: MediaOmit
    chat?: ChatOmit
    message?: MessageOmit
    adminReview?: AdminReviewOmit
    commissionLog?: CommissionLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messagesSent: number
    medias: number
    adminReviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    medias?: boolean | UserCountOutputTypeCountMediasArgs
    adminReviews?: boolean | UserCountOutputTypeCountAdminReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminReviewWhereInput
  }


  /**
   * Count Type CoachProfileCountOutputType
   */

  export type CoachProfileCountOutputType = {
    media: number
    chatsAsCoach: number
    adminReviews: number
    commissionLogs: number
  }

  export type CoachProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | CoachProfileCountOutputTypeCountMediaArgs
    chatsAsCoach?: boolean | CoachProfileCountOutputTypeCountChatsAsCoachArgs
    adminReviews?: boolean | CoachProfileCountOutputTypeCountAdminReviewsArgs
    commissionLogs?: boolean | CoachProfileCountOutputTypeCountCommissionLogsArgs
  }

  // Custom InputTypes
  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfileCountOutputType
     */
    select?: CoachProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeCountChatsAsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeCountAdminReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminReviewWhereInput
  }

  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeCountCommissionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionLogWhereInput
  }


  /**
   * Count Type ClientProfileCountOutputType
   */

  export type ClientProfileCountOutputType = {
    chats: number
  }

  export type ClientProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ClientProfileCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * ClientProfileCountOutputType without action
   */
  export type ClientProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfileCountOutputType
     */
    select?: ClientProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientProfileCountOutputType without action
   */
  export type ClientProfileCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.UserRole
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coachProfile?: boolean | User$coachProfileArgs<ExtArgs>
    clientProfile?: boolean | User$clientProfileArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    medias?: boolean | User$mediasArgs<ExtArgs>
    adminReviews?: boolean | User$adminReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coachProfile?: boolean | User$coachProfileArgs<ExtArgs>
    clientProfile?: boolean | User$clientProfileArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    medias?: boolean | User$mediasArgs<ExtArgs>
    adminReviews?: boolean | User$adminReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      coachProfile: Prisma.$CoachProfilePayload<ExtArgs> | null
      clientProfile: Prisma.$ClientProfilePayload<ExtArgs> | null
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      medias: Prisma.$MediaPayload<ExtArgs>[]
      adminReviews: Prisma.$AdminReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.UserRole
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coachProfile<T extends User$coachProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$coachProfileArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clientProfile<T extends User$clientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$clientProfileArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medias<T extends User$mediasArgs<ExtArgs> = {}>(args?: Subset<T, User$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminReviews<T extends User$adminReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.coachProfile
   */
  export type User$coachProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    where?: CoachProfileWhereInput
  }

  /**
   * User.clientProfile
   */
  export type User$clientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    where?: ClientProfileWhereInput
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.medias
   */
  export type User$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * User.adminReviews
   */
  export type User$adminReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    where?: AdminReviewWhereInput
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    cursor?: AdminReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminReviewScalarFieldEnum | AdminReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CoachProfile
   */

  export type AggregateCoachProfile = {
    _count: CoachProfileCountAggregateOutputType | null
    _avg: CoachProfileAvgAggregateOutputType | null
    _sum: CoachProfileSumAggregateOutputType | null
    _min: CoachProfileMinAggregateOutputType | null
    _max: CoachProfileMaxAggregateOutputType | null
  }

  export type CoachProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CoachProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CoachProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    discipline: string | null
    portfolio: string | null
    status: $Enums.ApprovalStatus | null
    statusReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    discipline: string | null
    portfolio: string | null
    status: $Enums.ApprovalStatus | null
    statusReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    discipline: number
    portfolio: number
    status: number
    statusReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoachProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CoachProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CoachProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    discipline?: true
    portfolio?: true
    status?: true
    statusReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    discipline?: true
    portfolio?: true
    status?: true
    statusReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    discipline?: true
    portfolio?: true
    status?: true
    statusReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoachProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachProfile to aggregate.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachProfiles
    **/
    _count?: true | CoachProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachProfileMaxAggregateInputType
  }

  export type GetCoachProfileAggregateType<T extends CoachProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachProfile[P]>
      : GetScalarType<T[P], AggregateCoachProfile[P]>
  }




  export type CoachProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachProfileWhereInput
    orderBy?: CoachProfileOrderByWithAggregationInput | CoachProfileOrderByWithAggregationInput[]
    by: CoachProfileScalarFieldEnum[] | CoachProfileScalarFieldEnum
    having?: CoachProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachProfileCountAggregateInputType | true
    _avg?: CoachProfileAvgAggregateInputType
    _sum?: CoachProfileSumAggregateInputType
    _min?: CoachProfileMinAggregateInputType
    _max?: CoachProfileMaxAggregateInputType
  }

  export type CoachProfileGroupByOutputType = {
    id: number
    userId: number
    bio: string | null
    discipline: string
    portfolio: string | null
    status: $Enums.ApprovalStatus
    statusReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: CoachProfileCountAggregateOutputType | null
    _avg: CoachProfileAvgAggregateOutputType | null
    _sum: CoachProfileSumAggregateOutputType | null
    _min: CoachProfileMinAggregateOutputType | null
    _max: CoachProfileMaxAggregateOutputType | null
  }

  type GetCoachProfileGroupByPayload<T extends CoachProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CoachProfileGroupByOutputType[P]>
        }
      >
    >


  export type CoachProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    discipline?: boolean
    portfolio?: boolean
    status?: boolean
    statusReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | CoachProfile$mediaArgs<ExtArgs>
    chatsAsCoach?: boolean | CoachProfile$chatsAsCoachArgs<ExtArgs>
    adminReviews?: boolean | CoachProfile$adminReviewsArgs<ExtArgs>
    commissionLogs?: boolean | CoachProfile$commissionLogsArgs<ExtArgs>
    _count?: boolean | CoachProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachProfile"]>

  export type CoachProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    discipline?: boolean
    portfolio?: boolean
    status?: boolean
    statusReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachProfile"]>

  export type CoachProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    discipline?: boolean
    portfolio?: boolean
    status?: boolean
    statusReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachProfile"]>

  export type CoachProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    discipline?: boolean
    portfolio?: boolean
    status?: boolean
    statusReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoachProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "discipline" | "portfolio" | "status" | "statusReason" | "createdAt" | "updatedAt", ExtArgs["result"]["coachProfile"]>
  export type CoachProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | CoachProfile$mediaArgs<ExtArgs>
    chatsAsCoach?: boolean | CoachProfile$chatsAsCoachArgs<ExtArgs>
    adminReviews?: boolean | CoachProfile$adminReviewsArgs<ExtArgs>
    commissionLogs?: boolean | CoachProfile$commissionLogsArgs<ExtArgs>
    _count?: boolean | CoachProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoachProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      chatsAsCoach: Prisma.$ChatPayload<ExtArgs>[]
      adminReviews: Prisma.$AdminReviewPayload<ExtArgs>[]
      commissionLogs: Prisma.$CommissionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bio: string | null
      discipline: string
      portfolio: string | null
      status: $Enums.ApprovalStatus
      statusReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coachProfile"]>
    composites: {}
  }

  type CoachProfileGetPayload<S extends boolean | null | undefined | CoachProfileDefaultArgs> = $Result.GetResult<Prisma.$CoachProfilePayload, S>

  type CoachProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachProfileCountAggregateInputType | true
    }

  export interface CoachProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachProfile'], meta: { name: 'CoachProfile' } }
    /**
     * Find zero or one CoachProfile that matches the filter.
     * @param {CoachProfileFindUniqueArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachProfileFindUniqueArgs>(args: SelectSubset<T, CoachProfileFindUniqueArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachProfileFindUniqueOrThrowArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindFirstArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachProfileFindFirstArgs>(args?: SelectSubset<T, CoachProfileFindFirstArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindFirstOrThrowArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachProfiles
     * const coachProfiles = await prisma.coachProfile.findMany()
     * 
     * // Get first 10 CoachProfiles
     * const coachProfiles = await prisma.coachProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachProfileWithIdOnly = await prisma.coachProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachProfileFindManyArgs>(args?: SelectSubset<T, CoachProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachProfile.
     * @param {CoachProfileCreateArgs} args - Arguments to create a CoachProfile.
     * @example
     * // Create one CoachProfile
     * const CoachProfile = await prisma.coachProfile.create({
     *   data: {
     *     // ... data to create a CoachProfile
     *   }
     * })
     * 
     */
    create<T extends CoachProfileCreateArgs>(args: SelectSubset<T, CoachProfileCreateArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachProfiles.
     * @param {CoachProfileCreateManyArgs} args - Arguments to create many CoachProfiles.
     * @example
     * // Create many CoachProfiles
     * const coachProfile = await prisma.coachProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachProfileCreateManyArgs>(args?: SelectSubset<T, CoachProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachProfiles and returns the data saved in the database.
     * @param {CoachProfileCreateManyAndReturnArgs} args - Arguments to create many CoachProfiles.
     * @example
     * // Create many CoachProfiles
     * const coachProfile = await prisma.coachProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachProfiles and only return the `id`
     * const coachProfileWithIdOnly = await prisma.coachProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachProfile.
     * @param {CoachProfileDeleteArgs} args - Arguments to delete one CoachProfile.
     * @example
     * // Delete one CoachProfile
     * const CoachProfile = await prisma.coachProfile.delete({
     *   where: {
     *     // ... filter to delete one CoachProfile
     *   }
     * })
     * 
     */
    delete<T extends CoachProfileDeleteArgs>(args: SelectSubset<T, CoachProfileDeleteArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachProfile.
     * @param {CoachProfileUpdateArgs} args - Arguments to update one CoachProfile.
     * @example
     * // Update one CoachProfile
     * const coachProfile = await prisma.coachProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachProfileUpdateArgs>(args: SelectSubset<T, CoachProfileUpdateArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachProfiles.
     * @param {CoachProfileDeleteManyArgs} args - Arguments to filter CoachProfiles to delete.
     * @example
     * // Delete a few CoachProfiles
     * const { count } = await prisma.coachProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachProfileDeleteManyArgs>(args?: SelectSubset<T, CoachProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachProfiles
     * const coachProfile = await prisma.coachProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachProfileUpdateManyArgs>(args: SelectSubset<T, CoachProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachProfiles and returns the data updated in the database.
     * @param {CoachProfileUpdateManyAndReturnArgs} args - Arguments to update many CoachProfiles.
     * @example
     * // Update many CoachProfiles
     * const coachProfile = await prisma.coachProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachProfiles and only return the `id`
     * const coachProfileWithIdOnly = await prisma.coachProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoachProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachProfile.
     * @param {CoachProfileUpsertArgs} args - Arguments to update or create a CoachProfile.
     * @example
     * // Update or create a CoachProfile
     * const coachProfile = await prisma.coachProfile.upsert({
     *   create: {
     *     // ... data to create a CoachProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachProfile we want to update
     *   }
     * })
     */
    upsert<T extends CoachProfileUpsertArgs>(args: SelectSubset<T, CoachProfileUpsertArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileCountArgs} args - Arguments to filter CoachProfiles to count.
     * @example
     * // Count the number of CoachProfiles
     * const count = await prisma.coachProfile.count({
     *   where: {
     *     // ... the filter for the CoachProfiles we want to count
     *   }
     * })
    **/
    count<T extends CoachProfileCountArgs>(
      args?: Subset<T, CoachProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachProfileAggregateArgs>(args: Subset<T, CoachProfileAggregateArgs>): Prisma.PrismaPromise<GetCoachProfileAggregateType<T>>

    /**
     * Group by CoachProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileGroupByArgs} args - Group by arguments.
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
      T extends CoachProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachProfileGroupByArgs['orderBy'] }
        : { orderBy?: CoachProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachProfile model
   */
  readonly fields: CoachProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends CoachProfile$mediaArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfile$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatsAsCoach<T extends CoachProfile$chatsAsCoachArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfile$chatsAsCoachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminReviews<T extends CoachProfile$adminReviewsArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfile$adminReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commissionLogs<T extends CoachProfile$commissionLogsArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfile$commissionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CoachProfile model
   */
  interface CoachProfileFieldRefs {
    readonly id: FieldRef<"CoachProfile", 'Int'>
    readonly userId: FieldRef<"CoachProfile", 'Int'>
    readonly bio: FieldRef<"CoachProfile", 'String'>
    readonly discipline: FieldRef<"CoachProfile", 'String'>
    readonly portfolio: FieldRef<"CoachProfile", 'String'>
    readonly status: FieldRef<"CoachProfile", 'ApprovalStatus'>
    readonly statusReason: FieldRef<"CoachProfile", 'String'>
    readonly createdAt: FieldRef<"CoachProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CoachProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachProfile findUnique
   */
  export type CoachProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile findUniqueOrThrow
   */
  export type CoachProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile findFirst
   */
  export type CoachProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachProfiles.
     */
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile findFirstOrThrow
   */
  export type CoachProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachProfiles.
     */
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile findMany
   */
  export type CoachProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfiles to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile create
   */
  export type CoachProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachProfile.
     */
    data: XOR<CoachProfileCreateInput, CoachProfileUncheckedCreateInput>
  }

  /**
   * CoachProfile createMany
   */
  export type CoachProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachProfiles.
     */
    data: CoachProfileCreateManyInput | CoachProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachProfile createManyAndReturn
   */
  export type CoachProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CoachProfiles.
     */
    data: CoachProfileCreateManyInput | CoachProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachProfile update
   */
  export type CoachProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachProfile.
     */
    data: XOR<CoachProfileUpdateInput, CoachProfileUncheckedUpdateInput>
    /**
     * Choose, which CoachProfile to update.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile updateMany
   */
  export type CoachProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachProfiles.
     */
    data: XOR<CoachProfileUpdateManyMutationInput, CoachProfileUncheckedUpdateManyInput>
    /**
     * Filter which CoachProfiles to update
     */
    where?: CoachProfileWhereInput
    /**
     * Limit how many CoachProfiles to update.
     */
    limit?: number
  }

  /**
   * CoachProfile updateManyAndReturn
   */
  export type CoachProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * The data used to update CoachProfiles.
     */
    data: XOR<CoachProfileUpdateManyMutationInput, CoachProfileUncheckedUpdateManyInput>
    /**
     * Filter which CoachProfiles to update
     */
    where?: CoachProfileWhereInput
    /**
     * Limit how many CoachProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachProfile upsert
   */
  export type CoachProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachProfile to update in case it exists.
     */
    where: CoachProfileWhereUniqueInput
    /**
     * In case the CoachProfile found by the `where` argument doesn't exist, create a new CoachProfile with this data.
     */
    create: XOR<CoachProfileCreateInput, CoachProfileUncheckedCreateInput>
    /**
     * In case the CoachProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachProfileUpdateInput, CoachProfileUncheckedUpdateInput>
  }

  /**
   * CoachProfile delete
   */
  export type CoachProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter which CoachProfile to delete.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile deleteMany
   */
  export type CoachProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachProfiles to delete
     */
    where?: CoachProfileWhereInput
    /**
     * Limit how many CoachProfiles to delete.
     */
    limit?: number
  }

  /**
   * CoachProfile.media
   */
  export type CoachProfile$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * CoachProfile.chatsAsCoach
   */
  export type CoachProfile$chatsAsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * CoachProfile.adminReviews
   */
  export type CoachProfile$adminReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    where?: AdminReviewWhereInput
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    cursor?: AdminReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminReviewScalarFieldEnum | AdminReviewScalarFieldEnum[]
  }

  /**
   * CoachProfile.commissionLogs
   */
  export type CoachProfile$commissionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    where?: CommissionLogWhereInput
    orderBy?: CommissionLogOrderByWithRelationInput | CommissionLogOrderByWithRelationInput[]
    cursor?: CommissionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionLogScalarFieldEnum | CommissionLogScalarFieldEnum[]
  }

  /**
   * CoachProfile without action
   */
  export type CoachProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
  }


  /**
   * Model ClientProfile
   */

  export type AggregateClientProfile = {
    _count: ClientProfileCountAggregateOutputType | null
    _avg: ClientProfileAvgAggregateOutputType | null
    _sum: ClientProfileSumAggregateOutputType | null
    _min: ClientProfileMinAggregateOutputType | null
    _max: ClientProfileMaxAggregateOutputType | null
  }

  export type ClientProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    heightCm: number | null
    weightKg: number | null
  }

  export type ClientProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    heightCm: number | null
    weightKg: number | null
  }

  export type ClientProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ageRange: string | null
    heightCm: number | null
    weightKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ageRange: string | null
    heightCm: number | null
    weightKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientProfileCountAggregateOutputType = {
    id: number
    userId: number
    ageRange: number
    heightCm: number
    weightKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    heightCm?: true
    weightKg?: true
  }

  export type ClientProfileSumAggregateInputType = {
    id?: true
    userId?: true
    heightCm?: true
    weightKg?: true
  }

  export type ClientProfileMinAggregateInputType = {
    id?: true
    userId?: true
    ageRange?: true
    heightCm?: true
    weightKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    ageRange?: true
    heightCm?: true
    weightKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientProfileCountAggregateInputType = {
    id?: true
    userId?: true
    ageRange?: true
    heightCm?: true
    weightKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProfile to aggregate.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientProfiles
    **/
    _count?: true | ClientProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientProfileMaxAggregateInputType
  }

  export type GetClientProfileAggregateType<T extends ClientProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateClientProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientProfile[P]>
      : GetScalarType<T[P], AggregateClientProfile[P]>
  }




  export type ClientProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientProfileWhereInput
    orderBy?: ClientProfileOrderByWithAggregationInput | ClientProfileOrderByWithAggregationInput[]
    by: ClientProfileScalarFieldEnum[] | ClientProfileScalarFieldEnum
    having?: ClientProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientProfileCountAggregateInputType | true
    _avg?: ClientProfileAvgAggregateInputType
    _sum?: ClientProfileSumAggregateInputType
    _min?: ClientProfileMinAggregateInputType
    _max?: ClientProfileMaxAggregateInputType
  }

  export type ClientProfileGroupByOutputType = {
    id: number
    userId: number
    ageRange: string | null
    heightCm: number | null
    weightKg: number | null
    createdAt: Date
    updatedAt: Date
    _count: ClientProfileCountAggregateOutputType | null
    _avg: ClientProfileAvgAggregateOutputType | null
    _sum: ClientProfileSumAggregateOutputType | null
    _min: ClientProfileMinAggregateOutputType | null
    _max: ClientProfileMaxAggregateOutputType | null
  }

  type GetClientProfileGroupByPayload<T extends ClientProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ClientProfileGroupByOutputType[P]>
        }
      >
    >


  export type ClientProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ageRange?: boolean
    heightCm?: boolean
    weightKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chats?: boolean | ClientProfile$chatsArgs<ExtArgs>
    _count?: boolean | ClientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ageRange?: boolean
    heightCm?: boolean
    weightKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ageRange?: boolean
    heightCm?: boolean
    weightKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientProfile"]>

  export type ClientProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    ageRange?: boolean
    heightCm?: boolean
    weightKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ageRange" | "heightCm" | "weightKg" | "createdAt" | "updatedAt", ExtArgs["result"]["clientProfile"]>
  export type ClientProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chats?: boolean | ClientProfile$chatsArgs<ExtArgs>
    _count?: boolean | ClientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ageRange: string | null
      heightCm: number | null
      weightKg: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientProfile"]>
    composites: {}
  }

  type ClientProfileGetPayload<S extends boolean | null | undefined | ClientProfileDefaultArgs> = $Result.GetResult<Prisma.$ClientProfilePayload, S>

  type ClientProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientProfileCountAggregateInputType | true
    }

  export interface ClientProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientProfile'], meta: { name: 'ClientProfile' } }
    /**
     * Find zero or one ClientProfile that matches the filter.
     * @param {ClientProfileFindUniqueArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientProfileFindUniqueArgs>(args: SelectSubset<T, ClientProfileFindUniqueArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientProfileFindUniqueOrThrowArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindFirstArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientProfileFindFirstArgs>(args?: SelectSubset<T, ClientProfileFindFirstArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindFirstOrThrowArgs} args - Arguments to find a ClientProfile
     * @example
     * // Get one ClientProfile
     * const clientProfile = await prisma.clientProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientProfiles
     * const clientProfiles = await prisma.clientProfile.findMany()
     * 
     * // Get first 10 ClientProfiles
     * const clientProfiles = await prisma.clientProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientProfileFindManyArgs>(args?: SelectSubset<T, ClientProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientProfile.
     * @param {ClientProfileCreateArgs} args - Arguments to create a ClientProfile.
     * @example
     * // Create one ClientProfile
     * const ClientProfile = await prisma.clientProfile.create({
     *   data: {
     *     // ... data to create a ClientProfile
     *   }
     * })
     * 
     */
    create<T extends ClientProfileCreateArgs>(args: SelectSubset<T, ClientProfileCreateArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientProfiles.
     * @param {ClientProfileCreateManyArgs} args - Arguments to create many ClientProfiles.
     * @example
     * // Create many ClientProfiles
     * const clientProfile = await prisma.clientProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientProfileCreateManyArgs>(args?: SelectSubset<T, ClientProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientProfiles and returns the data saved in the database.
     * @param {ClientProfileCreateManyAndReturnArgs} args - Arguments to create many ClientProfiles.
     * @example
     * // Create many ClientProfiles
     * const clientProfile = await prisma.clientProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientProfiles and only return the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientProfile.
     * @param {ClientProfileDeleteArgs} args - Arguments to delete one ClientProfile.
     * @example
     * // Delete one ClientProfile
     * const ClientProfile = await prisma.clientProfile.delete({
     *   where: {
     *     // ... filter to delete one ClientProfile
     *   }
     * })
     * 
     */
    delete<T extends ClientProfileDeleteArgs>(args: SelectSubset<T, ClientProfileDeleteArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientProfile.
     * @param {ClientProfileUpdateArgs} args - Arguments to update one ClientProfile.
     * @example
     * // Update one ClientProfile
     * const clientProfile = await prisma.clientProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientProfileUpdateArgs>(args: SelectSubset<T, ClientProfileUpdateArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientProfiles.
     * @param {ClientProfileDeleteManyArgs} args - Arguments to filter ClientProfiles to delete.
     * @example
     * // Delete a few ClientProfiles
     * const { count } = await prisma.clientProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientProfileDeleteManyArgs>(args?: SelectSubset<T, ClientProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientProfiles
     * const clientProfile = await prisma.clientProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientProfileUpdateManyArgs>(args: SelectSubset<T, ClientProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientProfiles and returns the data updated in the database.
     * @param {ClientProfileUpdateManyAndReturnArgs} args - Arguments to update many ClientProfiles.
     * @example
     * // Update many ClientProfiles
     * const clientProfile = await prisma.clientProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientProfiles and only return the `id`
     * const clientProfileWithIdOnly = await prisma.clientProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientProfile.
     * @param {ClientProfileUpsertArgs} args - Arguments to update or create a ClientProfile.
     * @example
     * // Update or create a ClientProfile
     * const clientProfile = await prisma.clientProfile.upsert({
     *   create: {
     *     // ... data to create a ClientProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientProfile we want to update
     *   }
     * })
     */
    upsert<T extends ClientProfileUpsertArgs>(args: SelectSubset<T, ClientProfileUpsertArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileCountArgs} args - Arguments to filter ClientProfiles to count.
     * @example
     * // Count the number of ClientProfiles
     * const count = await prisma.clientProfile.count({
     *   where: {
     *     // ... the filter for the ClientProfiles we want to count
     *   }
     * })
    **/
    count<T extends ClientProfileCountArgs>(
      args?: Subset<T, ClientProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientProfileAggregateArgs>(args: Subset<T, ClientProfileAggregateArgs>): Prisma.PrismaPromise<GetClientProfileAggregateType<T>>

    /**
     * Group by ClientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientProfileGroupByArgs} args - Group by arguments.
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
      T extends ClientProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientProfileGroupByArgs['orderBy'] }
        : { orderBy?: ClientProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientProfile model
   */
  readonly fields: ClientProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends ClientProfile$chatsArgs<ExtArgs> = {}>(args?: Subset<T, ClientProfile$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClientProfile model
   */
  interface ClientProfileFieldRefs {
    readonly id: FieldRef<"ClientProfile", 'Int'>
    readonly userId: FieldRef<"ClientProfile", 'Int'>
    readonly ageRange: FieldRef<"ClientProfile", 'String'>
    readonly heightCm: FieldRef<"ClientProfile", 'Int'>
    readonly weightKg: FieldRef<"ClientProfile", 'Int'>
    readonly createdAt: FieldRef<"ClientProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientProfile findUnique
   */
  export type ClientProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile findUniqueOrThrow
   */
  export type ClientProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile findFirst
   */
  export type ClientProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProfiles.
     */
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile findFirstOrThrow
   */
  export type ClientProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfile to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientProfiles.
     */
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile findMany
   */
  export type ClientProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter, which ClientProfiles to fetch.
     */
    where?: ClientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientProfiles to fetch.
     */
    orderBy?: ClientProfileOrderByWithRelationInput | ClientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientProfiles.
     */
    cursor?: ClientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientProfiles.
     */
    skip?: number
    distinct?: ClientProfileScalarFieldEnum | ClientProfileScalarFieldEnum[]
  }

  /**
   * ClientProfile create
   */
  export type ClientProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientProfile.
     */
    data: XOR<ClientProfileCreateInput, ClientProfileUncheckedCreateInput>
  }

  /**
   * ClientProfile createMany
   */
  export type ClientProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientProfiles.
     */
    data: ClientProfileCreateManyInput | ClientProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientProfile createManyAndReturn
   */
  export type ClientProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ClientProfiles.
     */
    data: ClientProfileCreateManyInput | ClientProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProfile update
   */
  export type ClientProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientProfile.
     */
    data: XOR<ClientProfileUpdateInput, ClientProfileUncheckedUpdateInput>
    /**
     * Choose, which ClientProfile to update.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile updateMany
   */
  export type ClientProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientProfiles.
     */
    data: XOR<ClientProfileUpdateManyMutationInput, ClientProfileUncheckedUpdateManyInput>
    /**
     * Filter which ClientProfiles to update
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to update.
     */
    limit?: number
  }

  /**
   * ClientProfile updateManyAndReturn
   */
  export type ClientProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * The data used to update ClientProfiles.
     */
    data: XOR<ClientProfileUpdateManyMutationInput, ClientProfileUncheckedUpdateManyInput>
    /**
     * Filter which ClientProfiles to update
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientProfile upsert
   */
  export type ClientProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientProfile to update in case it exists.
     */
    where: ClientProfileWhereUniqueInput
    /**
     * In case the ClientProfile found by the `where` argument doesn't exist, create a new ClientProfile with this data.
     */
    create: XOR<ClientProfileCreateInput, ClientProfileUncheckedCreateInput>
    /**
     * In case the ClientProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientProfileUpdateInput, ClientProfileUncheckedUpdateInput>
  }

  /**
   * ClientProfile delete
   */
  export type ClientProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
    /**
     * Filter which ClientProfile to delete.
     */
    where: ClientProfileWhereUniqueInput
  }

  /**
   * ClientProfile deleteMany
   */
  export type ClientProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientProfiles to delete
     */
    where?: ClientProfileWhereInput
    /**
     * Limit how many ClientProfiles to delete.
     */
    limit?: number
  }

  /**
   * ClientProfile.chats
   */
  export type ClientProfile$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * ClientProfile without action
   */
  export type ClientProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientProfile
     */
    select?: ClientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientProfile
     */
    omit?: ClientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientProfileInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    coachId: number | null
    sizeBytes: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    coachId: number | null
    sizeBytes: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    coachId: number | null
    url: string | null
    type: $Enums.MediaType | null
    mimeType: string | null
    sizeBytes: number | null
    description: string | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    coachId: number | null
    url: string | null
    type: $Enums.MediaType | null
    mimeType: string | null
    sizeBytes: number | null
    description: string | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    ownerId: number
    coachId: number
    url: number
    type: number
    mimeType: number
    sizeBytes: number
    description: number
    createdAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    ownerId?: true
    coachId?: true
    sizeBytes?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    ownerId?: true
    coachId?: true
    sizeBytes?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    ownerId?: true
    coachId?: true
    url?: true
    type?: true
    mimeType?: true
    sizeBytes?: true
    description?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    ownerId?: true
    coachId?: true
    url?: true
    type?: true
    mimeType?: true
    sizeBytes?: true
    description?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    ownerId?: true
    coachId?: true
    url?: true
    type?: true
    mimeType?: true
    sizeBytes?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    ownerId: number | null
    coachId: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes: number | null
    description: string | null
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    coachId?: boolean
    url?: boolean
    type?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    coachId?: boolean
    url?: boolean
    type?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    coachId?: boolean
    url?: boolean
    type?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    description?: boolean
    createdAt?: boolean
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    ownerId?: boolean
    coachId?: boolean
    url?: boolean
    type?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "coachId" | "url" | "type" | "mimeType" | "sizeBytes" | "description" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Media$ownerArgs<ExtArgs>
    coach?: boolean | Media$coachArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      coach: Prisma.$CoachProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number | null
      coachId: number | null
      url: string
      type: $Enums.MediaType
      mimeType: string
      sizeBytes: number | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Media$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Media$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coach<T extends Media$coachArgs<ExtArgs> = {}>(args?: Subset<T, Media$coachArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly ownerId: FieldRef<"Media", 'Int'>
    readonly coachId: FieldRef<"Media", 'Int'>
    readonly url: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly mimeType: FieldRef<"Media", 'String'>
    readonly sizeBytes: FieldRef<"Media", 'Int'>
    readonly description: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.owner
   */
  export type Media$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Media.coach
   */
  export type Media$coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachProfile
     */
    omit?: CoachProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    where?: CoachProfileWhereInput
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    coachId: number | null
    clientId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    coachId: number | null
    clientId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    coachId: number | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    coachId: number | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    coachId: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    coachId?: true
    clientId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    coachId?: true
    clientId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    coachId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    coachId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    coachId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    coachId: number
    clientId: number
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    coachId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    client?: boolean | ClientProfileDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      coach: Prisma.$CoachProfilePayload<ExtArgs>
      client: Prisma.$ClientProfilePayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coachId: number
      clientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfileDefaultArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientProfileDefaultArgs<ExtArgs>>): Prisma__ClientProfileClient<$Result.GetResult<Prisma.$ClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly coachId: FieldRef<"Chat", 'Int'>
    readonly clientId: FieldRef<"Chat", 'Int'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    senderId: number | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    senderId: number
    content: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    senderId?: true
    content?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    chatId: number
    senderId: number
    content: string
    isRead: boolean
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    senderId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "senderId" | "content" | "isRead" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      senderId: number
      content: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly chatId: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model AdminReview
   */

  export type AggregateAdminReview = {
    _count: AdminReviewCountAggregateOutputType | null
    _avg: AdminReviewAvgAggregateOutputType | null
    _sum: AdminReviewSumAggregateOutputType | null
    _min: AdminReviewMinAggregateOutputType | null
    _max: AdminReviewMaxAggregateOutputType | null
  }

  export type AdminReviewAvgAggregateOutputType = {
    id: number | null
    coachId: number | null
    adminId: number | null
  }

  export type AdminReviewSumAggregateOutputType = {
    id: number | null
    coachId: number | null
    adminId: number | null
  }

  export type AdminReviewMinAggregateOutputType = {
    id: number | null
    coachId: number | null
    adminId: number | null
    action: $Enums.ReviewAction | null
    comment: string | null
    createdAt: Date | null
  }

  export type AdminReviewMaxAggregateOutputType = {
    id: number | null
    coachId: number | null
    adminId: number | null
    action: $Enums.ReviewAction | null
    comment: string | null
    createdAt: Date | null
  }

  export type AdminReviewCountAggregateOutputType = {
    id: number
    coachId: number
    adminId: number
    action: number
    comment: number
    createdAt: number
    _all: number
  }


  export type AdminReviewAvgAggregateInputType = {
    id?: true
    coachId?: true
    adminId?: true
  }

  export type AdminReviewSumAggregateInputType = {
    id?: true
    coachId?: true
    adminId?: true
  }

  export type AdminReviewMinAggregateInputType = {
    id?: true
    coachId?: true
    adminId?: true
    action?: true
    comment?: true
    createdAt?: true
  }

  export type AdminReviewMaxAggregateInputType = {
    id?: true
    coachId?: true
    adminId?: true
    action?: true
    comment?: true
    createdAt?: true
  }

  export type AdminReviewCountAggregateInputType = {
    id?: true
    coachId?: true
    adminId?: true
    action?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type AdminReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminReview to aggregate.
     */
    where?: AdminReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReviews to fetch.
     */
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminReviews
    **/
    _count?: true | AdminReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminReviewMaxAggregateInputType
  }

  export type GetAdminReviewAggregateType<T extends AdminReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminReview[P]>
      : GetScalarType<T[P], AggregateAdminReview[P]>
  }




  export type AdminReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminReviewWhereInput
    orderBy?: AdminReviewOrderByWithAggregationInput | AdminReviewOrderByWithAggregationInput[]
    by: AdminReviewScalarFieldEnum[] | AdminReviewScalarFieldEnum
    having?: AdminReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminReviewCountAggregateInputType | true
    _avg?: AdminReviewAvgAggregateInputType
    _sum?: AdminReviewSumAggregateInputType
    _min?: AdminReviewMinAggregateInputType
    _max?: AdminReviewMaxAggregateInputType
  }

  export type AdminReviewGroupByOutputType = {
    id: number
    coachId: number
    adminId: number
    action: $Enums.ReviewAction
    comment: string | null
    createdAt: Date
    _count: AdminReviewCountAggregateOutputType | null
    _avg: AdminReviewAvgAggregateOutputType | null
    _sum: AdminReviewSumAggregateOutputType | null
    _min: AdminReviewMinAggregateOutputType | null
    _max: AdminReviewMaxAggregateOutputType | null
  }

  type GetAdminReviewGroupByPayload<T extends AdminReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminReviewGroupByOutputType[P]>
            : GetScalarType<T[P], AdminReviewGroupByOutputType[P]>
        }
      >
    >


  export type AdminReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    adminId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReview"]>

  export type AdminReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    adminId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReview"]>

  export type AdminReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    adminId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReview"]>

  export type AdminReviewSelectScalar = {
    id?: boolean
    coachId?: boolean
    adminId?: boolean
    action?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type AdminReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "adminId" | "action" | "comment" | "createdAt", ExtArgs["result"]["adminReview"]>
  export type AdminReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminReview"
    objects: {
      coach: Prisma.$CoachProfilePayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coachId: number
      adminId: number
      action: $Enums.ReviewAction
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["adminReview"]>
    composites: {}
  }

  type AdminReviewGetPayload<S extends boolean | null | undefined | AdminReviewDefaultArgs> = $Result.GetResult<Prisma.$AdminReviewPayload, S>

  type AdminReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminReviewCountAggregateInputType | true
    }

  export interface AdminReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminReview'], meta: { name: 'AdminReview' } }
    /**
     * Find zero or one AdminReview that matches the filter.
     * @param {AdminReviewFindUniqueArgs} args - Arguments to find a AdminReview
     * @example
     * // Get one AdminReview
     * const adminReview = await prisma.adminReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminReviewFindUniqueArgs>(args: SelectSubset<T, AdminReviewFindUniqueArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminReviewFindUniqueOrThrowArgs} args - Arguments to find a AdminReview
     * @example
     * // Get one AdminReview
     * const adminReview = await prisma.adminReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewFindFirstArgs} args - Arguments to find a AdminReview
     * @example
     * // Get one AdminReview
     * const adminReview = await prisma.adminReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminReviewFindFirstArgs>(args?: SelectSubset<T, AdminReviewFindFirstArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewFindFirstOrThrowArgs} args - Arguments to find a AdminReview
     * @example
     * // Get one AdminReview
     * const adminReview = await prisma.adminReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminReviews
     * const adminReviews = await prisma.adminReview.findMany()
     * 
     * // Get first 10 AdminReviews
     * const adminReviews = await prisma.adminReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminReviewWithIdOnly = await prisma.adminReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminReviewFindManyArgs>(args?: SelectSubset<T, AdminReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminReview.
     * @param {AdminReviewCreateArgs} args - Arguments to create a AdminReview.
     * @example
     * // Create one AdminReview
     * const AdminReview = await prisma.adminReview.create({
     *   data: {
     *     // ... data to create a AdminReview
     *   }
     * })
     * 
     */
    create<T extends AdminReviewCreateArgs>(args: SelectSubset<T, AdminReviewCreateArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminReviews.
     * @param {AdminReviewCreateManyArgs} args - Arguments to create many AdminReviews.
     * @example
     * // Create many AdminReviews
     * const adminReview = await prisma.adminReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminReviewCreateManyArgs>(args?: SelectSubset<T, AdminReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminReviews and returns the data saved in the database.
     * @param {AdminReviewCreateManyAndReturnArgs} args - Arguments to create many AdminReviews.
     * @example
     * // Create many AdminReviews
     * const adminReview = await prisma.adminReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminReviews and only return the `id`
     * const adminReviewWithIdOnly = await prisma.adminReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminReview.
     * @param {AdminReviewDeleteArgs} args - Arguments to delete one AdminReview.
     * @example
     * // Delete one AdminReview
     * const AdminReview = await prisma.adminReview.delete({
     *   where: {
     *     // ... filter to delete one AdminReview
     *   }
     * })
     * 
     */
    delete<T extends AdminReviewDeleteArgs>(args: SelectSubset<T, AdminReviewDeleteArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminReview.
     * @param {AdminReviewUpdateArgs} args - Arguments to update one AdminReview.
     * @example
     * // Update one AdminReview
     * const adminReview = await prisma.adminReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminReviewUpdateArgs>(args: SelectSubset<T, AdminReviewUpdateArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminReviews.
     * @param {AdminReviewDeleteManyArgs} args - Arguments to filter AdminReviews to delete.
     * @example
     * // Delete a few AdminReviews
     * const { count } = await prisma.adminReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminReviewDeleteManyArgs>(args?: SelectSubset<T, AdminReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminReviews
     * const adminReview = await prisma.adminReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminReviewUpdateManyArgs>(args: SelectSubset<T, AdminReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminReviews and returns the data updated in the database.
     * @param {AdminReviewUpdateManyAndReturnArgs} args - Arguments to update many AdminReviews.
     * @example
     * // Update many AdminReviews
     * const adminReview = await prisma.adminReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminReviews and only return the `id`
     * const adminReviewWithIdOnly = await prisma.adminReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminReview.
     * @param {AdminReviewUpsertArgs} args - Arguments to update or create a AdminReview.
     * @example
     * // Update or create a AdminReview
     * const adminReview = await prisma.adminReview.upsert({
     *   create: {
     *     // ... data to create a AdminReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminReview we want to update
     *   }
     * })
     */
    upsert<T extends AdminReviewUpsertArgs>(args: SelectSubset<T, AdminReviewUpsertArgs<ExtArgs>>): Prisma__AdminReviewClient<$Result.GetResult<Prisma.$AdminReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewCountArgs} args - Arguments to filter AdminReviews to count.
     * @example
     * // Count the number of AdminReviews
     * const count = await prisma.adminReview.count({
     *   where: {
     *     // ... the filter for the AdminReviews we want to count
     *   }
     * })
    **/
    count<T extends AdminReviewCountArgs>(
      args?: Subset<T, AdminReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminReviewAggregateArgs>(args: Subset<T, AdminReviewAggregateArgs>): Prisma.PrismaPromise<GetAdminReviewAggregateType<T>>

    /**
     * Group by AdminReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReviewGroupByArgs} args - Group by arguments.
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
      T extends AdminReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminReviewGroupByArgs['orderBy'] }
        : { orderBy?: AdminReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminReview model
   */
  readonly fields: AdminReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfileDefaultArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminReview model
   */
  interface AdminReviewFieldRefs {
    readonly id: FieldRef<"AdminReview", 'Int'>
    readonly coachId: FieldRef<"AdminReview", 'Int'>
    readonly adminId: FieldRef<"AdminReview", 'Int'>
    readonly action: FieldRef<"AdminReview", 'ReviewAction'>
    readonly comment: FieldRef<"AdminReview", 'String'>
    readonly createdAt: FieldRef<"AdminReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminReview findUnique
   */
  export type AdminReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter, which AdminReview to fetch.
     */
    where: AdminReviewWhereUniqueInput
  }

  /**
   * AdminReview findUniqueOrThrow
   */
  export type AdminReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter, which AdminReview to fetch.
     */
    where: AdminReviewWhereUniqueInput
  }

  /**
   * AdminReview findFirst
   */
  export type AdminReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter, which AdminReview to fetch.
     */
    where?: AdminReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReviews to fetch.
     */
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminReviews.
     */
    cursor?: AdminReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminReviews.
     */
    distinct?: AdminReviewScalarFieldEnum | AdminReviewScalarFieldEnum[]
  }

  /**
   * AdminReview findFirstOrThrow
   */
  export type AdminReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter, which AdminReview to fetch.
     */
    where?: AdminReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReviews to fetch.
     */
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminReviews.
     */
    cursor?: AdminReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminReviews.
     */
    distinct?: AdminReviewScalarFieldEnum | AdminReviewScalarFieldEnum[]
  }

  /**
   * AdminReview findMany
   */
  export type AdminReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter, which AdminReviews to fetch.
     */
    where?: AdminReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReviews to fetch.
     */
    orderBy?: AdminReviewOrderByWithRelationInput | AdminReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminReviews.
     */
    cursor?: AdminReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReviews.
     */
    skip?: number
    distinct?: AdminReviewScalarFieldEnum | AdminReviewScalarFieldEnum[]
  }

  /**
   * AdminReview create
   */
  export type AdminReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminReview.
     */
    data: XOR<AdminReviewCreateInput, AdminReviewUncheckedCreateInput>
  }

  /**
   * AdminReview createMany
   */
  export type AdminReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminReviews.
     */
    data: AdminReviewCreateManyInput | AdminReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminReview createManyAndReturn
   */
  export type AdminReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * The data used to create many AdminReviews.
     */
    data: AdminReviewCreateManyInput | AdminReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminReview update
   */
  export type AdminReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminReview.
     */
    data: XOR<AdminReviewUpdateInput, AdminReviewUncheckedUpdateInput>
    /**
     * Choose, which AdminReview to update.
     */
    where: AdminReviewWhereUniqueInput
  }

  /**
   * AdminReview updateMany
   */
  export type AdminReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminReviews.
     */
    data: XOR<AdminReviewUpdateManyMutationInput, AdminReviewUncheckedUpdateManyInput>
    /**
     * Filter which AdminReviews to update
     */
    where?: AdminReviewWhereInput
    /**
     * Limit how many AdminReviews to update.
     */
    limit?: number
  }

  /**
   * AdminReview updateManyAndReturn
   */
  export type AdminReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * The data used to update AdminReviews.
     */
    data: XOR<AdminReviewUpdateManyMutationInput, AdminReviewUncheckedUpdateManyInput>
    /**
     * Filter which AdminReviews to update
     */
    where?: AdminReviewWhereInput
    /**
     * Limit how many AdminReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminReview upsert
   */
  export type AdminReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminReview to update in case it exists.
     */
    where: AdminReviewWhereUniqueInput
    /**
     * In case the AdminReview found by the `where` argument doesn't exist, create a new AdminReview with this data.
     */
    create: XOR<AdminReviewCreateInput, AdminReviewUncheckedCreateInput>
    /**
     * In case the AdminReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminReviewUpdateInput, AdminReviewUncheckedUpdateInput>
  }

  /**
   * AdminReview delete
   */
  export type AdminReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
    /**
     * Filter which AdminReview to delete.
     */
    where: AdminReviewWhereUniqueInput
  }

  /**
   * AdminReview deleteMany
   */
  export type AdminReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminReviews to delete
     */
    where?: AdminReviewWhereInput
    /**
     * Limit how many AdminReviews to delete.
     */
    limit?: number
  }

  /**
   * AdminReview without action
   */
  export type AdminReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReview
     */
    select?: AdminReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReview
     */
    omit?: AdminReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReviewInclude<ExtArgs> | null
  }


  /**
   * Model CommissionLog
   */

  export type AggregateCommissionLog = {
    _count: CommissionLogCountAggregateOutputType | null
    _avg: CommissionLogAvgAggregateOutputType | null
    _sum: CommissionLogSumAggregateOutputType | null
    _min: CommissionLogMinAggregateOutputType | null
    _max: CommissionLogMaxAggregateOutputType | null
  }

  export type CommissionLogAvgAggregateOutputType = {
    id: number | null
    coachId: number | null
    amount: Decimal | null
  }

  export type CommissionLogSumAggregateOutputType = {
    id: number | null
    coachId: number | null
    amount: Decimal | null
  }

  export type CommissionLogMinAggregateOutputType = {
    id: number | null
    coachId: number | null
    amount: Decimal | null
    reference: string | null
    note: string | null
    createdAt: Date | null
  }

  export type CommissionLogMaxAggregateOutputType = {
    id: number | null
    coachId: number | null
    amount: Decimal | null
    reference: string | null
    note: string | null
    createdAt: Date | null
  }

  export type CommissionLogCountAggregateOutputType = {
    id: number
    coachId: number
    amount: number
    reference: number
    note: number
    createdAt: number
    _all: number
  }


  export type CommissionLogAvgAggregateInputType = {
    id?: true
    coachId?: true
    amount?: true
  }

  export type CommissionLogSumAggregateInputType = {
    id?: true
    coachId?: true
    amount?: true
  }

  export type CommissionLogMinAggregateInputType = {
    id?: true
    coachId?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
  }

  export type CommissionLogMaxAggregateInputType = {
    id?: true
    coachId?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
  }

  export type CommissionLogCountAggregateInputType = {
    id?: true
    coachId?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type CommissionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionLog to aggregate.
     */
    where?: CommissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLogs to fetch.
     */
    orderBy?: CommissionLogOrderByWithRelationInput | CommissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommissionLogs
    **/
    _count?: true | CommissionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommissionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommissionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionLogMaxAggregateInputType
  }

  export type GetCommissionLogAggregateType<T extends CommissionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCommissionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommissionLog[P]>
      : GetScalarType<T[P], AggregateCommissionLog[P]>
  }




  export type CommissionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionLogWhereInput
    orderBy?: CommissionLogOrderByWithAggregationInput | CommissionLogOrderByWithAggregationInput[]
    by: CommissionLogScalarFieldEnum[] | CommissionLogScalarFieldEnum
    having?: CommissionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionLogCountAggregateInputType | true
    _avg?: CommissionLogAvgAggregateInputType
    _sum?: CommissionLogSumAggregateInputType
    _min?: CommissionLogMinAggregateInputType
    _max?: CommissionLogMaxAggregateInputType
  }

  export type CommissionLogGroupByOutputType = {
    id: number
    coachId: number
    amount: Decimal
    reference: string | null
    note: string | null
    createdAt: Date
    _count: CommissionLogCountAggregateOutputType | null
    _avg: CommissionLogAvgAggregateOutputType | null
    _sum: CommissionLogSumAggregateOutputType | null
    _min: CommissionLogMinAggregateOutputType | null
    _max: CommissionLogMaxAggregateOutputType | null
  }

  type GetCommissionLogGroupByPayload<T extends CommissionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionLogGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionLogGroupByOutputType[P]>
        }
      >
    >


  export type CommissionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commissionLog"]>

  export type CommissionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commissionLog"]>

  export type CommissionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commissionLog"]>

  export type CommissionLogSelectScalar = {
    id?: boolean
    coachId?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type CommissionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "amount" | "reference" | "note" | "createdAt", ExtArgs["result"]["commissionLog"]>
  export type CommissionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }
  export type CommissionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }
  export type CommissionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }

  export type $CommissionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommissionLog"
    objects: {
      coach: Prisma.$CoachProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coachId: number
      amount: Prisma.Decimal
      reference: string | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["commissionLog"]>
    composites: {}
  }

  type CommissionLogGetPayload<S extends boolean | null | undefined | CommissionLogDefaultArgs> = $Result.GetResult<Prisma.$CommissionLogPayload, S>

  type CommissionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionLogCountAggregateInputType | true
    }

  export interface CommissionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommissionLog'], meta: { name: 'CommissionLog' } }
    /**
     * Find zero or one CommissionLog that matches the filter.
     * @param {CommissionLogFindUniqueArgs} args - Arguments to find a CommissionLog
     * @example
     * // Get one CommissionLog
     * const commissionLog = await prisma.commissionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionLogFindUniqueArgs>(args: SelectSubset<T, CommissionLogFindUniqueArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommissionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionLogFindUniqueOrThrowArgs} args - Arguments to find a CommissionLog
     * @example
     * // Get one CommissionLog
     * const commissionLog = await prisma.commissionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogFindFirstArgs} args - Arguments to find a CommissionLog
     * @example
     * // Get one CommissionLog
     * const commissionLog = await prisma.commissionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionLogFindFirstArgs>(args?: SelectSubset<T, CommissionLogFindFirstArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogFindFirstOrThrowArgs} args - Arguments to find a CommissionLog
     * @example
     * // Get one CommissionLog
     * const commissionLog = await prisma.commissionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommissionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommissionLogs
     * const commissionLogs = await prisma.commissionLog.findMany()
     * 
     * // Get first 10 CommissionLogs
     * const commissionLogs = await prisma.commissionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionLogWithIdOnly = await prisma.commissionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionLogFindManyArgs>(args?: SelectSubset<T, CommissionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommissionLog.
     * @param {CommissionLogCreateArgs} args - Arguments to create a CommissionLog.
     * @example
     * // Create one CommissionLog
     * const CommissionLog = await prisma.commissionLog.create({
     *   data: {
     *     // ... data to create a CommissionLog
     *   }
     * })
     * 
     */
    create<T extends CommissionLogCreateArgs>(args: SelectSubset<T, CommissionLogCreateArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommissionLogs.
     * @param {CommissionLogCreateManyArgs} args - Arguments to create many CommissionLogs.
     * @example
     * // Create many CommissionLogs
     * const commissionLog = await prisma.commissionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionLogCreateManyArgs>(args?: SelectSubset<T, CommissionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommissionLogs and returns the data saved in the database.
     * @param {CommissionLogCreateManyAndReturnArgs} args - Arguments to create many CommissionLogs.
     * @example
     * // Create many CommissionLogs
     * const commissionLog = await prisma.commissionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommissionLogs and only return the `id`
     * const commissionLogWithIdOnly = await prisma.commissionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommissionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CommissionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommissionLog.
     * @param {CommissionLogDeleteArgs} args - Arguments to delete one CommissionLog.
     * @example
     * // Delete one CommissionLog
     * const CommissionLog = await prisma.commissionLog.delete({
     *   where: {
     *     // ... filter to delete one CommissionLog
     *   }
     * })
     * 
     */
    delete<T extends CommissionLogDeleteArgs>(args: SelectSubset<T, CommissionLogDeleteArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommissionLog.
     * @param {CommissionLogUpdateArgs} args - Arguments to update one CommissionLog.
     * @example
     * // Update one CommissionLog
     * const commissionLog = await prisma.commissionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionLogUpdateArgs>(args: SelectSubset<T, CommissionLogUpdateArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommissionLogs.
     * @param {CommissionLogDeleteManyArgs} args - Arguments to filter CommissionLogs to delete.
     * @example
     * // Delete a few CommissionLogs
     * const { count } = await prisma.commissionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionLogDeleteManyArgs>(args?: SelectSubset<T, CommissionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommissionLogs
     * const commissionLog = await prisma.commissionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionLogUpdateManyArgs>(args: SelectSubset<T, CommissionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionLogs and returns the data updated in the database.
     * @param {CommissionLogUpdateManyAndReturnArgs} args - Arguments to update many CommissionLogs.
     * @example
     * // Update many CommissionLogs
     * const commissionLog = await prisma.commissionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommissionLogs and only return the `id`
     * const commissionLogWithIdOnly = await prisma.commissionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommissionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CommissionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommissionLog.
     * @param {CommissionLogUpsertArgs} args - Arguments to update or create a CommissionLog.
     * @example
     * // Update or create a CommissionLog
     * const commissionLog = await prisma.commissionLog.upsert({
     *   create: {
     *     // ... data to create a CommissionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommissionLog we want to update
     *   }
     * })
     */
    upsert<T extends CommissionLogUpsertArgs>(args: SelectSubset<T, CommissionLogUpsertArgs<ExtArgs>>): Prisma__CommissionLogClient<$Result.GetResult<Prisma.$CommissionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogCountArgs} args - Arguments to filter CommissionLogs to count.
     * @example
     * // Count the number of CommissionLogs
     * const count = await prisma.commissionLog.count({
     *   where: {
     *     // ... the filter for the CommissionLogs we want to count
     *   }
     * })
    **/
    count<T extends CommissionLogCountArgs>(
      args?: Subset<T, CommissionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommissionLogAggregateArgs>(args: Subset<T, CommissionLogAggregateArgs>): Prisma.PrismaPromise<GetCommissionLogAggregateType<T>>

    /**
     * Group by CommissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionLogGroupByArgs} args - Group by arguments.
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
      T extends CommissionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionLogGroupByArgs['orderBy'] }
        : { orderBy?: CommissionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommissionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommissionLog model
   */
  readonly fields: CommissionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommissionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfileDefaultArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommissionLog model
   */
  interface CommissionLogFieldRefs {
    readonly id: FieldRef<"CommissionLog", 'Int'>
    readonly coachId: FieldRef<"CommissionLog", 'Int'>
    readonly amount: FieldRef<"CommissionLog", 'Decimal'>
    readonly reference: FieldRef<"CommissionLog", 'String'>
    readonly note: FieldRef<"CommissionLog", 'String'>
    readonly createdAt: FieldRef<"CommissionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommissionLog findUnique
   */
  export type CommissionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter, which CommissionLog to fetch.
     */
    where: CommissionLogWhereUniqueInput
  }

  /**
   * CommissionLog findUniqueOrThrow
   */
  export type CommissionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter, which CommissionLog to fetch.
     */
    where: CommissionLogWhereUniqueInput
  }

  /**
   * CommissionLog findFirst
   */
  export type CommissionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter, which CommissionLog to fetch.
     */
    where?: CommissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLogs to fetch.
     */
    orderBy?: CommissionLogOrderByWithRelationInput | CommissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionLogs.
     */
    cursor?: CommissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionLogs.
     */
    distinct?: CommissionLogScalarFieldEnum | CommissionLogScalarFieldEnum[]
  }

  /**
   * CommissionLog findFirstOrThrow
   */
  export type CommissionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter, which CommissionLog to fetch.
     */
    where?: CommissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLogs to fetch.
     */
    orderBy?: CommissionLogOrderByWithRelationInput | CommissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionLogs.
     */
    cursor?: CommissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionLogs.
     */
    distinct?: CommissionLogScalarFieldEnum | CommissionLogScalarFieldEnum[]
  }

  /**
   * CommissionLog findMany
   */
  export type CommissionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter, which CommissionLogs to fetch.
     */
    where?: CommissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLogs to fetch.
     */
    orderBy?: CommissionLogOrderByWithRelationInput | CommissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommissionLogs.
     */
    cursor?: CommissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLogs.
     */
    skip?: number
    distinct?: CommissionLogScalarFieldEnum | CommissionLogScalarFieldEnum[]
  }

  /**
   * CommissionLog create
   */
  export type CommissionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CommissionLog.
     */
    data: XOR<CommissionLogCreateInput, CommissionLogUncheckedCreateInput>
  }

  /**
   * CommissionLog createMany
   */
  export type CommissionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommissionLogs.
     */
    data: CommissionLogCreateManyInput | CommissionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommissionLog createManyAndReturn
   */
  export type CommissionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * The data used to create many CommissionLogs.
     */
    data: CommissionLogCreateManyInput | CommissionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommissionLog update
   */
  export type CommissionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CommissionLog.
     */
    data: XOR<CommissionLogUpdateInput, CommissionLogUncheckedUpdateInput>
    /**
     * Choose, which CommissionLog to update.
     */
    where: CommissionLogWhereUniqueInput
  }

  /**
   * CommissionLog updateMany
   */
  export type CommissionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommissionLogs.
     */
    data: XOR<CommissionLogUpdateManyMutationInput, CommissionLogUncheckedUpdateManyInput>
    /**
     * Filter which CommissionLogs to update
     */
    where?: CommissionLogWhereInput
    /**
     * Limit how many CommissionLogs to update.
     */
    limit?: number
  }

  /**
   * CommissionLog updateManyAndReturn
   */
  export type CommissionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * The data used to update CommissionLogs.
     */
    data: XOR<CommissionLogUpdateManyMutationInput, CommissionLogUncheckedUpdateManyInput>
    /**
     * Filter which CommissionLogs to update
     */
    where?: CommissionLogWhereInput
    /**
     * Limit how many CommissionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommissionLog upsert
   */
  export type CommissionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CommissionLog to update in case it exists.
     */
    where: CommissionLogWhereUniqueInput
    /**
     * In case the CommissionLog found by the `where` argument doesn't exist, create a new CommissionLog with this data.
     */
    create: XOR<CommissionLogCreateInput, CommissionLogUncheckedCreateInput>
    /**
     * In case the CommissionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionLogUpdateInput, CommissionLogUncheckedUpdateInput>
  }

  /**
   * CommissionLog delete
   */
  export type CommissionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
    /**
     * Filter which CommissionLog to delete.
     */
    where: CommissionLogWhereUniqueInput
  }

  /**
   * CommissionLog deleteMany
   */
  export type CommissionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionLogs to delete
     */
    where?: CommissionLogWhereInput
    /**
     * Limit how many CommissionLogs to delete.
     */
    limit?: number
  }

  /**
   * CommissionLog without action
   */
  export type CommissionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionLog
     */
    select?: CommissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionLog
     */
    omit?: CommissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CoachProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    discipline: 'discipline',
    portfolio: 'portfolio',
    status: 'status',
    statusReason: 'statusReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoachProfileScalarFieldEnum = (typeof CoachProfileScalarFieldEnum)[keyof typeof CoachProfileScalarFieldEnum]


  export const ClientProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ageRange: 'ageRange',
    heightCm: 'heightCm',
    weightKg: 'weightKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientProfileScalarFieldEnum = (typeof ClientProfileScalarFieldEnum)[keyof typeof ClientProfileScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    coachId: 'coachId',
    url: 'url',
    type: 'type',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    senderId: 'senderId',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const AdminReviewScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    adminId: 'adminId',
    action: 'action',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type AdminReviewScalarFieldEnum = (typeof AdminReviewScalarFieldEnum)[keyof typeof AdminReviewScalarFieldEnum]


  export const CommissionLogScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    amount: 'amount',
    reference: 'reference',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type CommissionLogScalarFieldEnum = (typeof CommissionLogScalarFieldEnum)[keyof typeof CommissionLogScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReviewAction'
   */
  export type EnumReviewActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewAction'>
    


  /**
   * Reference to a field of type 'ReviewAction[]'
   */
  export type ListEnumReviewActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewAction[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    coachProfile?: XOR<CoachProfileNullableScalarRelationFilter, CoachProfileWhereInput> | null
    clientProfile?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
    messagesSent?: MessageListRelationFilter
    medias?: MediaListRelationFilter
    adminReviews?: AdminReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coachProfile?: CoachProfileOrderByWithRelationInput
    clientProfile?: ClientProfileOrderByWithRelationInput
    messagesSent?: MessageOrderByRelationAggregateInput
    medias?: MediaOrderByRelationAggregateInput
    adminReviews?: AdminReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    coachProfile?: XOR<CoachProfileNullableScalarRelationFilter, CoachProfileWhereInput> | null
    clientProfile?: XOR<ClientProfileNullableScalarRelationFilter, ClientProfileWhereInput> | null
    messagesSent?: MessageListRelationFilter
    medias?: MediaListRelationFilter
    adminReviews?: AdminReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CoachProfileWhereInput = {
    AND?: CoachProfileWhereInput | CoachProfileWhereInput[]
    OR?: CoachProfileWhereInput[]
    NOT?: CoachProfileWhereInput | CoachProfileWhereInput[]
    id?: IntFilter<"CoachProfile"> | number
    userId?: IntFilter<"CoachProfile"> | number
    bio?: StringNullableFilter<"CoachProfile"> | string | null
    discipline?: StringFilter<"CoachProfile"> | string
    portfolio?: StringNullableFilter<"CoachProfile"> | string | null
    status?: EnumApprovalStatusFilter<"CoachProfile"> | $Enums.ApprovalStatus
    statusReason?: StringNullableFilter<"CoachProfile"> | string | null
    createdAt?: DateTimeFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CoachProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: MediaListRelationFilter
    chatsAsCoach?: ChatListRelationFilter
    adminReviews?: AdminReviewListRelationFilter
    commissionLogs?: CommissionLogListRelationFilter
  }

  export type CoachProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    discipline?: SortOrder
    portfolio?: SortOrderInput | SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    chatsAsCoach?: ChatOrderByRelationAggregateInput
    adminReviews?: AdminReviewOrderByRelationAggregateInput
    commissionLogs?: CommissionLogOrderByRelationAggregateInput
  }

  export type CoachProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CoachProfileWhereInput | CoachProfileWhereInput[]
    OR?: CoachProfileWhereInput[]
    NOT?: CoachProfileWhereInput | CoachProfileWhereInput[]
    bio?: StringNullableFilter<"CoachProfile"> | string | null
    discipline?: StringFilter<"CoachProfile"> | string
    portfolio?: StringNullableFilter<"CoachProfile"> | string | null
    status?: EnumApprovalStatusFilter<"CoachProfile"> | $Enums.ApprovalStatus
    statusReason?: StringNullableFilter<"CoachProfile"> | string | null
    createdAt?: DateTimeFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CoachProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: MediaListRelationFilter
    chatsAsCoach?: ChatListRelationFilter
    adminReviews?: AdminReviewListRelationFilter
    commissionLogs?: CommissionLogListRelationFilter
  }, "id" | "userId">

  export type CoachProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    discipline?: SortOrder
    portfolio?: SortOrderInput | SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoachProfileCountOrderByAggregateInput
    _avg?: CoachProfileAvgOrderByAggregateInput
    _max?: CoachProfileMaxOrderByAggregateInput
    _min?: CoachProfileMinOrderByAggregateInput
    _sum?: CoachProfileSumOrderByAggregateInput
  }

  export type CoachProfileScalarWhereWithAggregatesInput = {
    AND?: CoachProfileScalarWhereWithAggregatesInput | CoachProfileScalarWhereWithAggregatesInput[]
    OR?: CoachProfileScalarWhereWithAggregatesInput[]
    NOT?: CoachProfileScalarWhereWithAggregatesInput | CoachProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoachProfile"> | number
    userId?: IntWithAggregatesFilter<"CoachProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"CoachProfile"> | string | null
    discipline?: StringWithAggregatesFilter<"CoachProfile"> | string
    portfolio?: StringNullableWithAggregatesFilter<"CoachProfile"> | string | null
    status?: EnumApprovalStatusWithAggregatesFilter<"CoachProfile"> | $Enums.ApprovalStatus
    statusReason?: StringNullableWithAggregatesFilter<"CoachProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoachProfile"> | Date | string
  }

  export type ClientProfileWhereInput = {
    AND?: ClientProfileWhereInput | ClientProfileWhereInput[]
    OR?: ClientProfileWhereInput[]
    NOT?: ClientProfileWhereInput | ClientProfileWhereInput[]
    id?: IntFilter<"ClientProfile"> | number
    userId?: IntFilter<"ClientProfile"> | number
    ageRange?: StringNullableFilter<"ClientProfile"> | string | null
    heightCm?: IntNullableFilter<"ClientProfile"> | number | null
    weightKg?: IntNullableFilter<"ClientProfile"> | number | null
    createdAt?: DateTimeFilter<"ClientProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chats?: ChatListRelationFilter
  }

  export type ClientProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ageRange?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type ClientProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ClientProfileWhereInput | ClientProfileWhereInput[]
    OR?: ClientProfileWhereInput[]
    NOT?: ClientProfileWhereInput | ClientProfileWhereInput[]
    ageRange?: StringNullableFilter<"ClientProfile"> | string | null
    heightCm?: IntNullableFilter<"ClientProfile"> | number | null
    weightKg?: IntNullableFilter<"ClientProfile"> | number | null
    createdAt?: DateTimeFilter<"ClientProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ClientProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chats?: ChatListRelationFilter
  }, "id" | "userId">

  export type ClientProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ageRange?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientProfileCountOrderByAggregateInput
    _avg?: ClientProfileAvgOrderByAggregateInput
    _max?: ClientProfileMaxOrderByAggregateInput
    _min?: ClientProfileMinOrderByAggregateInput
    _sum?: ClientProfileSumOrderByAggregateInput
  }

  export type ClientProfileScalarWhereWithAggregatesInput = {
    AND?: ClientProfileScalarWhereWithAggregatesInput | ClientProfileScalarWhereWithAggregatesInput[]
    OR?: ClientProfileScalarWhereWithAggregatesInput[]
    NOT?: ClientProfileScalarWhereWithAggregatesInput | ClientProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClientProfile"> | number
    userId?: IntWithAggregatesFilter<"ClientProfile"> | number
    ageRange?: StringNullableWithAggregatesFilter<"ClientProfile"> | string | null
    heightCm?: IntNullableWithAggregatesFilter<"ClientProfile"> | number | null
    weightKg?: IntNullableWithAggregatesFilter<"ClientProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ClientProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientProfile"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    ownerId?: IntNullableFilter<"Media"> | number | null
    coachId?: IntNullableFilter<"Media"> | number | null
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    mimeType?: StringFilter<"Media"> | string
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    description?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    coach?: XOR<CoachProfileNullableScalarRelationFilter, CoachProfileWhereInput> | null
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    coachId?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    coach?: CoachProfileOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    ownerId?: IntNullableFilter<"Media"> | number | null
    coachId?: IntNullableFilter<"Media"> | number | null
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    mimeType?: StringFilter<"Media"> | string
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    description?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    coach?: XOR<CoachProfileNullableScalarRelationFilter, CoachProfileWhereInput> | null
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    coachId?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    ownerId?: IntNullableWithAggregatesFilter<"Media"> | number | null
    coachId?: IntNullableWithAggregatesFilter<"Media"> | number | null
    url?: StringWithAggregatesFilter<"Media"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    mimeType?: StringWithAggregatesFilter<"Media"> | string
    sizeBytes?: IntNullableWithAggregatesFilter<"Media"> | number | null
    description?: StringNullableWithAggregatesFilter<"Media"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    coachId?: IntFilter<"Chat"> | number
    clientId?: IntFilter<"Chat"> | number
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
    client?: XOR<ClientProfileScalarRelationFilter, ClientProfileWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coach?: CoachProfileOrderByWithRelationInput
    client?: ClientProfileOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    coachId?: IntFilter<"Chat"> | number
    clientId?: IntFilter<"Chat"> | number
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
    client?: XOR<ClientProfileScalarRelationFilter, ClientProfileWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    coachId?: IntWithAggregatesFilter<"Chat"> | number
    clientId?: IntWithAggregatesFilter<"Chat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    chatId?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type AdminReviewWhereInput = {
    AND?: AdminReviewWhereInput | AdminReviewWhereInput[]
    OR?: AdminReviewWhereInput[]
    NOT?: AdminReviewWhereInput | AdminReviewWhereInput[]
    id?: IntFilter<"AdminReview"> | number
    coachId?: IntFilter<"AdminReview"> | number
    adminId?: IntFilter<"AdminReview"> | number
    action?: EnumReviewActionFilter<"AdminReview"> | $Enums.ReviewAction
    comment?: StringNullableFilter<"AdminReview"> | string | null
    createdAt?: DateTimeFilter<"AdminReview"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminReviewOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    coach?: CoachProfileOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
  }

  export type AdminReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminReviewWhereInput | AdminReviewWhereInput[]
    OR?: AdminReviewWhereInput[]
    NOT?: AdminReviewWhereInput | AdminReviewWhereInput[]
    coachId?: IntFilter<"AdminReview"> | number
    adminId?: IntFilter<"AdminReview"> | number
    action?: EnumReviewActionFilter<"AdminReview"> | $Enums.ReviewAction
    comment?: StringNullableFilter<"AdminReview"> | string | null
    createdAt?: DateTimeFilter<"AdminReview"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminReviewOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminReviewCountOrderByAggregateInput
    _avg?: AdminReviewAvgOrderByAggregateInput
    _max?: AdminReviewMaxOrderByAggregateInput
    _min?: AdminReviewMinOrderByAggregateInput
    _sum?: AdminReviewSumOrderByAggregateInput
  }

  export type AdminReviewScalarWhereWithAggregatesInput = {
    AND?: AdminReviewScalarWhereWithAggregatesInput | AdminReviewScalarWhereWithAggregatesInput[]
    OR?: AdminReviewScalarWhereWithAggregatesInput[]
    NOT?: AdminReviewScalarWhereWithAggregatesInput | AdminReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminReview"> | number
    coachId?: IntWithAggregatesFilter<"AdminReview"> | number
    adminId?: IntWithAggregatesFilter<"AdminReview"> | number
    action?: EnumReviewActionWithAggregatesFilter<"AdminReview"> | $Enums.ReviewAction
    comment?: StringNullableWithAggregatesFilter<"AdminReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminReview"> | Date | string
  }

  export type CommissionLogWhereInput = {
    AND?: CommissionLogWhereInput | CommissionLogWhereInput[]
    OR?: CommissionLogWhereInput[]
    NOT?: CommissionLogWhereInput | CommissionLogWhereInput[]
    id?: IntFilter<"CommissionLog"> | number
    coachId?: IntFilter<"CommissionLog"> | number
    amount?: DecimalFilter<"CommissionLog"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"CommissionLog"> | string | null
    note?: StringNullableFilter<"CommissionLog"> | string | null
    createdAt?: DateTimeFilter<"CommissionLog"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
  }

  export type CommissionLogOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    coach?: CoachProfileOrderByWithRelationInput
  }

  export type CommissionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommissionLogWhereInput | CommissionLogWhereInput[]
    OR?: CommissionLogWhereInput[]
    NOT?: CommissionLogWhereInput | CommissionLogWhereInput[]
    coachId?: IntFilter<"CommissionLog"> | number
    amount?: DecimalFilter<"CommissionLog"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"CommissionLog"> | string | null
    note?: StringNullableFilter<"CommissionLog"> | string | null
    createdAt?: DateTimeFilter<"CommissionLog"> | Date | string
    coach?: XOR<CoachProfileScalarRelationFilter, CoachProfileWhereInput>
  }, "id">

  export type CommissionLogOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommissionLogCountOrderByAggregateInput
    _avg?: CommissionLogAvgOrderByAggregateInput
    _max?: CommissionLogMaxOrderByAggregateInput
    _min?: CommissionLogMinOrderByAggregateInput
    _sum?: CommissionLogSumOrderByAggregateInput
  }

  export type CommissionLogScalarWhereWithAggregatesInput = {
    AND?: CommissionLogScalarWhereWithAggregatesInput | CommissionLogScalarWhereWithAggregatesInput[]
    OR?: CommissionLogScalarWhereWithAggregatesInput[]
    NOT?: CommissionLogScalarWhereWithAggregatesInput | CommissionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommissionLog"> | number
    coachId?: IntWithAggregatesFilter<"CommissionLog"> | number
    amount?: DecimalWithAggregatesFilter<"CommissionLog"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableWithAggregatesFilter<"CommissionLog"> | string | null
    note?: StringNullableWithAggregatesFilter<"CommissionLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommissionLog"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    medias?: MediaCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    medias?: MediaUncheckedCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    medias?: MediaUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    medias?: MediaUncheckedUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachProfileCreateInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachProfileInput
    media?: MediaCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatUncheckedCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachProfileNestedInput
    media?: MediaUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUncheckedUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileCreateManyInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProfileCreateInput = {
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientProfileInput
    chats?: ChatCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateInput = {
    id?: number
    userId: number
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUpdateInput = {
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientProfileNestedInput
    chats?: ChatUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileCreateManyInput = {
    id?: number
    userId: number
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientProfileUpdateManyMutationInput = {
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutMediasInput
    coach?: CoachProfileCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    ownerId?: number | null
    coachId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutMediasNestedInput
    coach?: CoachProfileUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    coachId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: number
    ownerId?: number | null
    coachId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    coachId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutChatsAsCoachInput
    client: ClientProfileCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    coachId: number
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutChatsAsCoachNestedInput
    client?: ClientProfileUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    coachId: number
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    chatId: number
    senderId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    chatId: number
    senderId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewCreateInput = {
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutAdminReviewsInput
    admin: UserCreateNestedOneWithoutAdminReviewsInput
  }

  export type AdminReviewUncheckedCreateInput = {
    id?: number
    coachId: number
    adminId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type AdminReviewUpdateInput = {
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutAdminReviewsNestedInput
    admin?: UserUpdateOneRequiredWithoutAdminReviewsNestedInput
  }

  export type AdminReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewCreateManyInput = {
    id?: number
    coachId: number
    adminId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type AdminReviewUpdateManyMutationInput = {
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutCommissionLogsInput
  }

  export type CommissionLogUncheckedCreateInput = {
    id?: number
    coachId: number
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type CommissionLogUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutCommissionLogsNestedInput
  }

  export type CommissionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogCreateManyInput = {
    id?: number
    coachId: number
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type CommissionLogUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type CoachProfileNullableScalarRelationFilter = {
    is?: CoachProfileWhereInput | null
    isNot?: CoachProfileWhereInput | null
  }

  export type ClientProfileNullableScalarRelationFilter = {
    is?: ClientProfileWhereInput | null
    isNot?: ClientProfileWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type AdminReviewListRelationFilter = {
    every?: AdminReviewWhereInput
    some?: AdminReviewWhereInput
    none?: AdminReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type CommissionLogListRelationFilter = {
    every?: CommissionLogWhereInput
    some?: CommissionLogWhereInput
    none?: CommissionLogWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommissionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    discipline?: SortOrder
    portfolio?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CoachProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    discipline?: SortOrder
    portfolio?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    discipline?: SortOrder
    portfolio?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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

  export type ClientProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ageRange?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
  }

  export type ClientProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ageRange?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ageRange?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
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

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coachId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coachId?: SortOrder
    sizeBytes?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coachId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coachId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coachId?: SortOrder
    sizeBytes?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type CoachProfileScalarRelationFilter = {
    is?: CoachProfileWhereInput
    isNot?: CoachProfileWhereInput
  }

  export type ClientProfileScalarRelationFilter = {
    is?: ClientProfileWhereInput
    isNot?: ClientProfileWhereInput
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    clientId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumReviewActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewAction | EnumReviewActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewActionFilter<$PrismaModel> | $Enums.ReviewAction
  }

  export type AdminReviewCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
  }

  export type AdminReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminReviewMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminReviewSumOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    adminId?: SortOrder
  }

  export type EnumReviewActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewAction | EnumReviewActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewActionWithAggregatesFilter<$PrismaModel> | $Enums.ReviewAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewActionFilter<$PrismaModel>
    _max?: NestedEnumReviewActionFilter<$PrismaModel>
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

  export type CommissionLogCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CommissionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
  }

  export type CommissionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CommissionLogMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CommissionLogSumOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    amount?: SortOrder
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

  export type CoachProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutUserInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type ClientProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput> | MediaCreateWithoutOwnerInput[] | MediaUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOwnerInput | MediaCreateOrConnectWithoutOwnerInput[]
    createMany?: MediaCreateManyOwnerInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type AdminReviewCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput> | AdminReviewCreateWithoutAdminInput[] | AdminReviewUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutAdminInput | AdminReviewCreateOrConnectWithoutAdminInput[]
    createMany?: AdminReviewCreateManyAdminInputEnvelope
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
  }

  export type CoachProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutUserInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type ClientProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput> | MediaCreateWithoutOwnerInput[] | MediaUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOwnerInput | MediaCreateOrConnectWithoutOwnerInput[]
    createMany?: MediaCreateManyOwnerInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type AdminReviewUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput> | AdminReviewCreateWithoutAdminInput[] | AdminReviewUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutAdminInput | AdminReviewCreateOrConnectWithoutAdminInput[]
    createMany?: AdminReviewCreateManyAdminInputEnvelope
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CoachProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutUserInput
    upsert?: CoachProfileUpsertWithoutUserInput
    disconnect?: CoachProfileWhereInput | boolean
    delete?: CoachProfileWhereInput | boolean
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutUserInput, CoachProfileUpdateWithoutUserInput>, CoachProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    upsert?: ClientProfileUpsertWithoutUserInput
    disconnect?: ClientProfileWhereInput | boolean
    delete?: ClientProfileWhereInput | boolean
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutUserInput, ClientProfileUpdateWithoutUserInput>, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput> | MediaCreateWithoutOwnerInput[] | MediaUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOwnerInput | MediaCreateOrConnectWithoutOwnerInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutOwnerInput | MediaUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MediaCreateManyOwnerInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutOwnerInput | MediaUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutOwnerInput | MediaUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type AdminReviewUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput> | AdminReviewCreateWithoutAdminInput[] | AdminReviewUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutAdminInput | AdminReviewCreateOrConnectWithoutAdminInput[]
    upsert?: AdminReviewUpsertWithWhereUniqueWithoutAdminInput | AdminReviewUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminReviewCreateManyAdminInputEnvelope
    set?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    disconnect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    delete?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    update?: AdminReviewUpdateWithWhereUniqueWithoutAdminInput | AdminReviewUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminReviewUpdateManyWithWhereWithoutAdminInput | AdminReviewUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoachProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutUserInput
    upsert?: CoachProfileUpsertWithoutUserInput
    disconnect?: CoachProfileWhereInput | boolean
    delete?: CoachProfileWhereInput | boolean
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutUserInput, CoachProfileUpdateWithoutUserInput>, CoachProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutUserInput
    upsert?: ClientProfileUpsertWithoutUserInput
    disconnect?: ClientProfileWhereInput | boolean
    delete?: ClientProfileWhereInput | boolean
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutUserInput, ClientProfileUpdateWithoutUserInput>, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput> | MediaCreateWithoutOwnerInput[] | MediaUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOwnerInput | MediaCreateOrConnectWithoutOwnerInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutOwnerInput | MediaUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MediaCreateManyOwnerInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutOwnerInput | MediaUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutOwnerInput | MediaUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type AdminReviewUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput> | AdminReviewCreateWithoutAdminInput[] | AdminReviewUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutAdminInput | AdminReviewCreateOrConnectWithoutAdminInput[]
    upsert?: AdminReviewUpsertWithWhereUniqueWithoutAdminInput | AdminReviewUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminReviewCreateManyAdminInputEnvelope
    set?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    disconnect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    delete?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    update?: AdminReviewUpdateWithWhereUniqueWithoutAdminInput | AdminReviewUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminReviewUpdateManyWithWhereWithoutAdminInput | AdminReviewUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoachProfileInput = {
    create?: XOR<UserCreateWithoutCoachProfileInput, UserUncheckedCreateWithoutCoachProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutCoachInput = {
    create?: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput> | MediaCreateWithoutCoachInput[] | MediaUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCoachInput | MediaCreateOrConnectWithoutCoachInput[]
    createMany?: MediaCreateManyCoachInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutCoachInput = {
    create?: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput> | ChatCreateWithoutCoachInput[] | ChatUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCoachInput | ChatCreateOrConnectWithoutCoachInput[]
    createMany?: ChatCreateManyCoachInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type AdminReviewCreateNestedManyWithoutCoachInput = {
    create?: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput> | AdminReviewCreateWithoutCoachInput[] | AdminReviewUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutCoachInput | AdminReviewCreateOrConnectWithoutCoachInput[]
    createMany?: AdminReviewCreateManyCoachInputEnvelope
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
  }

  export type CommissionLogCreateNestedManyWithoutCoachInput = {
    create?: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput> | CommissionLogCreateWithoutCoachInput[] | CommissionLogUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CommissionLogCreateOrConnectWithoutCoachInput | CommissionLogCreateOrConnectWithoutCoachInput[]
    createMany?: CommissionLogCreateManyCoachInputEnvelope
    connect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput> | MediaCreateWithoutCoachInput[] | MediaUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCoachInput | MediaCreateOrConnectWithoutCoachInput[]
    createMany?: MediaCreateManyCoachInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput> | ChatCreateWithoutCoachInput[] | ChatUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCoachInput | ChatCreateOrConnectWithoutCoachInput[]
    createMany?: ChatCreateManyCoachInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type AdminReviewUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput> | AdminReviewCreateWithoutCoachInput[] | AdminReviewUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutCoachInput | AdminReviewCreateOrConnectWithoutCoachInput[]
    createMany?: AdminReviewCreateManyCoachInputEnvelope
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
  }

  export type CommissionLogUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput> | CommissionLogCreateWithoutCoachInput[] | CommissionLogUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CommissionLogCreateOrConnectWithoutCoachInput | CommissionLogCreateOrConnectWithoutCoachInput[]
    createMany?: CommissionLogCreateManyCoachInputEnvelope
    connect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type UserUpdateOneRequiredWithoutCoachProfileNestedInput = {
    create?: XOR<UserCreateWithoutCoachProfileInput, UserUncheckedCreateWithoutCoachProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachProfileInput
    upsert?: UserUpsertWithoutCoachProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachProfileInput, UserUpdateWithoutCoachProfileInput>, UserUncheckedUpdateWithoutCoachProfileInput>
  }

  export type MediaUpdateManyWithoutCoachNestedInput = {
    create?: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput> | MediaCreateWithoutCoachInput[] | MediaUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCoachInput | MediaCreateOrConnectWithoutCoachInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCoachInput | MediaUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: MediaCreateManyCoachInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCoachInput | MediaUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCoachInput | MediaUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutCoachNestedInput = {
    create?: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput> | ChatCreateWithoutCoachInput[] | ChatUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCoachInput | ChatCreateOrConnectWithoutCoachInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutCoachInput | ChatUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: ChatCreateManyCoachInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutCoachInput | ChatUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutCoachInput | ChatUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type AdminReviewUpdateManyWithoutCoachNestedInput = {
    create?: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput> | AdminReviewCreateWithoutCoachInput[] | AdminReviewUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutCoachInput | AdminReviewCreateOrConnectWithoutCoachInput[]
    upsert?: AdminReviewUpsertWithWhereUniqueWithoutCoachInput | AdminReviewUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: AdminReviewCreateManyCoachInputEnvelope
    set?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    disconnect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    delete?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    update?: AdminReviewUpdateWithWhereUniqueWithoutCoachInput | AdminReviewUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: AdminReviewUpdateManyWithWhereWithoutCoachInput | AdminReviewUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
  }

  export type CommissionLogUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput> | CommissionLogCreateWithoutCoachInput[] | CommissionLogUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CommissionLogCreateOrConnectWithoutCoachInput | CommissionLogCreateOrConnectWithoutCoachInput[]
    upsert?: CommissionLogUpsertWithWhereUniqueWithoutCoachInput | CommissionLogUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CommissionLogCreateManyCoachInputEnvelope
    set?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    disconnect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    delete?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    connect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    update?: CommissionLogUpdateWithWhereUniqueWithoutCoachInput | CommissionLogUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CommissionLogUpdateManyWithWhereWithoutCoachInput | CommissionLogUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CommissionLogScalarWhereInput | CommissionLogScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput> | MediaCreateWithoutCoachInput[] | MediaUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCoachInput | MediaCreateOrConnectWithoutCoachInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCoachInput | MediaUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: MediaCreateManyCoachInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCoachInput | MediaUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCoachInput | MediaUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput> | ChatCreateWithoutCoachInput[] | ChatUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCoachInput | ChatCreateOrConnectWithoutCoachInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutCoachInput | ChatUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: ChatCreateManyCoachInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutCoachInput | ChatUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutCoachInput | ChatUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type AdminReviewUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput> | AdminReviewCreateWithoutCoachInput[] | AdminReviewUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: AdminReviewCreateOrConnectWithoutCoachInput | AdminReviewCreateOrConnectWithoutCoachInput[]
    upsert?: AdminReviewUpsertWithWhereUniqueWithoutCoachInput | AdminReviewUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: AdminReviewCreateManyCoachInputEnvelope
    set?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    disconnect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    delete?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    connect?: AdminReviewWhereUniqueInput | AdminReviewWhereUniqueInput[]
    update?: AdminReviewUpdateWithWhereUniqueWithoutCoachInput | AdminReviewUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: AdminReviewUpdateManyWithWhereWithoutCoachInput | AdminReviewUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
  }

  export type CommissionLogUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput> | CommissionLogCreateWithoutCoachInput[] | CommissionLogUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CommissionLogCreateOrConnectWithoutCoachInput | CommissionLogCreateOrConnectWithoutCoachInput[]
    upsert?: CommissionLogUpsertWithWhereUniqueWithoutCoachInput | CommissionLogUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CommissionLogCreateManyCoachInputEnvelope
    set?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    disconnect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    delete?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    connect?: CommissionLogWhereUniqueInput | CommissionLogWhereUniqueInput[]
    update?: CommissionLogUpdateWithWhereUniqueWithoutCoachInput | CommissionLogUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CommissionLogUpdateManyWithWhereWithoutCoachInput | CommissionLogUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CommissionLogScalarWhereInput | CommissionLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientProfileInput = {
    create?: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutClientInput = {
    create?: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput> | ChatCreateWithoutClientInput[] | ChatUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutClientInput | ChatCreateOrConnectWithoutClientInput[]
    createMany?: ChatCreateManyClientInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput> | ChatCreateWithoutClientInput[] | ChatUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutClientInput | ChatCreateOrConnectWithoutClientInput[]
    createMany?: ChatCreateManyClientInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutClientProfileNestedInput = {
    create?: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProfileInput
    upsert?: UserUpsertWithoutClientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientProfileInput, UserUpdateWithoutClientProfileInput>, UserUncheckedUpdateWithoutClientProfileInput>
  }

  export type ChatUpdateManyWithoutClientNestedInput = {
    create?: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput> | ChatCreateWithoutClientInput[] | ChatUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutClientInput | ChatCreateOrConnectWithoutClientInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutClientInput | ChatUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ChatCreateManyClientInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutClientInput | ChatUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutClientInput | ChatUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput> | ChatCreateWithoutClientInput[] | ChatUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutClientInput | ChatCreateOrConnectWithoutClientInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutClientInput | ChatUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ChatCreateManyClientInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutClientInput | ChatUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutClientInput | ChatUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMediasInput = {
    create?: XOR<UserCreateWithoutMediasInput, UserUncheckedCreateWithoutMediasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediasInput
    connect?: UserWhereUniqueInput
  }

  export type CoachProfileCreateNestedOneWithoutMediaInput = {
    create?: XOR<CoachProfileCreateWithoutMediaInput, CoachProfileUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutMediaInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type UserUpdateOneWithoutMediasNestedInput = {
    create?: XOR<UserCreateWithoutMediasInput, UserUncheckedCreateWithoutMediasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediasInput
    upsert?: UserUpsertWithoutMediasInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediasInput, UserUpdateWithoutMediasInput>, UserUncheckedUpdateWithoutMediasInput>
  }

  export type CoachProfileUpdateOneWithoutMediaNestedInput = {
    create?: XOR<CoachProfileCreateWithoutMediaInput, CoachProfileUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutMediaInput
    upsert?: CoachProfileUpsertWithoutMediaInput
    disconnect?: CoachProfileWhereInput | boolean
    delete?: CoachProfileWhereInput | boolean
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutMediaInput, CoachProfileUpdateWithoutMediaInput>, CoachProfileUncheckedUpdateWithoutMediaInput>
  }

  export type CoachProfileCreateNestedOneWithoutChatsAsCoachInput = {
    create?: XOR<CoachProfileCreateWithoutChatsAsCoachInput, CoachProfileUncheckedCreateWithoutChatsAsCoachInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutChatsAsCoachInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type ClientProfileCreateNestedOneWithoutChatsInput = {
    create?: XOR<ClientProfileCreateWithoutChatsInput, ClientProfileUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutChatsInput
    connect?: ClientProfileWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CoachProfileUpdateOneRequiredWithoutChatsAsCoachNestedInput = {
    create?: XOR<CoachProfileCreateWithoutChatsAsCoachInput, CoachProfileUncheckedCreateWithoutChatsAsCoachInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutChatsAsCoachInput
    upsert?: CoachProfileUpsertWithoutChatsAsCoachInput
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutChatsAsCoachInput, CoachProfileUpdateWithoutChatsAsCoachInput>, CoachProfileUncheckedUpdateWithoutChatsAsCoachInput>
  }

  export type ClientProfileUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ClientProfileCreateWithoutChatsInput, ClientProfileUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ClientProfileCreateOrConnectWithoutChatsInput
    upsert?: ClientProfileUpsertWithoutChatsInput
    connect?: ClientProfileWhereUniqueInput
    update?: XOR<XOR<ClientProfileUpdateToOneWithWhereWithoutChatsInput, ClientProfileUpdateWithoutChatsInput>, ClientProfileUncheckedUpdateWithoutChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type CoachProfileCreateNestedOneWithoutAdminReviewsInput = {
    create?: XOR<CoachProfileCreateWithoutAdminReviewsInput, CoachProfileUncheckedCreateWithoutAdminReviewsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutAdminReviewsInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdminReviewsInput = {
    create?: XOR<UserCreateWithoutAdminReviewsInput, UserUncheckedCreateWithoutAdminReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReviewActionFieldUpdateOperationsInput = {
    set?: $Enums.ReviewAction
  }

  export type CoachProfileUpdateOneRequiredWithoutAdminReviewsNestedInput = {
    create?: XOR<CoachProfileCreateWithoutAdminReviewsInput, CoachProfileUncheckedCreateWithoutAdminReviewsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutAdminReviewsInput
    upsert?: CoachProfileUpsertWithoutAdminReviewsInput
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutAdminReviewsInput, CoachProfileUpdateWithoutAdminReviewsInput>, CoachProfileUncheckedUpdateWithoutAdminReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutAdminReviewsNestedInput = {
    create?: XOR<UserCreateWithoutAdminReviewsInput, UserUncheckedCreateWithoutAdminReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminReviewsInput
    upsert?: UserUpsertWithoutAdminReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminReviewsInput, UserUpdateWithoutAdminReviewsInput>, UserUncheckedUpdateWithoutAdminReviewsInput>
  }

  export type CoachProfileCreateNestedOneWithoutCommissionLogsInput = {
    create?: XOR<CoachProfileCreateWithoutCommissionLogsInput, CoachProfileUncheckedCreateWithoutCommissionLogsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutCommissionLogsInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CoachProfileUpdateOneRequiredWithoutCommissionLogsNestedInput = {
    create?: XOR<CoachProfileCreateWithoutCommissionLogsInput, CoachProfileUncheckedCreateWithoutCommissionLogsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutCommissionLogsInput
    upsert?: CoachProfileUpsertWithoutCommissionLogsInput
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutCommissionLogsInput, CoachProfileUpdateWithoutCommissionLogsInput>, CoachProfileUncheckedUpdateWithoutCommissionLogsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReviewActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewAction | EnumReviewActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewActionFilter<$PrismaModel> | $Enums.ReviewAction
  }

  export type NestedEnumReviewActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewAction | EnumReviewActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewAction[] | ListEnumReviewActionFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewActionWithAggregatesFilter<$PrismaModel> | $Enums.ReviewAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewActionFilter<$PrismaModel>
    _max?: NestedEnumReviewActionFilter<$PrismaModel>
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

  export type CoachProfileCreateWithoutUserInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatUncheckedCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileCreateOrConnectWithoutUserInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
  }

  export type ClientProfileCreateWithoutUserInput = {
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutClientInput
  }

  export type ClientProfileUncheckedCreateWithoutUserInput = {
    id?: number
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientProfileCreateOrConnectWithoutUserInput = {
    where: ClientProfileWhereUniqueInput
    create: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    chatId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutOwnerInput = {
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
    coach?: CoachProfileCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutOwnerInput = {
    id?: number
    coachId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutOwnerInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput>
  }

  export type MediaCreateManyOwnerInputEnvelope = {
    data: MediaCreateManyOwnerInput | MediaCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AdminReviewCreateWithoutAdminInput = {
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutAdminReviewsInput
  }

  export type AdminReviewUncheckedCreateWithoutAdminInput = {
    id?: number
    coachId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type AdminReviewCreateOrConnectWithoutAdminInput = {
    where: AdminReviewWhereUniqueInput
    create: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput>
  }

  export type AdminReviewCreateManyAdminInputEnvelope = {
    data: AdminReviewCreateManyAdminInput | AdminReviewCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CoachProfileUpsertWithoutUserInput = {
    update: XOR<CoachProfileUpdateWithoutUserInput, CoachProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CoachProfileCreateWithoutUserInput, CoachProfileUncheckedCreateWithoutUserInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutUserInput, CoachProfileUncheckedUpdateWithoutUserInput>
  }

  export type CoachProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUncheckedUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type ClientProfileUpsertWithoutUserInput = {
    update: XOR<ClientProfileUpdateWithoutUserInput, ClientProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ClientProfileCreateWithoutUserInput, ClientProfileUncheckedCreateWithoutUserInput>
    where?: ClientProfileWhereInput
  }

  export type ClientProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientProfileWhereInput
    data: XOR<ClientProfileUpdateWithoutUserInput, ClientProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientProfileUpdateWithoutUserInput = {
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutClientNestedInput
  }

  export type ClientProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutOwnerInput, MediaUncheckedUpdateWithoutOwnerInput>
    create: XOR<MediaCreateWithoutOwnerInput, MediaUncheckedCreateWithoutOwnerInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutOwnerInput, MediaUncheckedUpdateWithoutOwnerInput>
  }

  export type MediaUpdateManyWithWhereWithoutOwnerInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutOwnerInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    ownerId?: IntNullableFilter<"Media"> | number | null
    coachId?: IntNullableFilter<"Media"> | number | null
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    mimeType?: StringFilter<"Media"> | string
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    description?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type AdminReviewUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminReviewWhereUniqueInput
    update: XOR<AdminReviewUpdateWithoutAdminInput, AdminReviewUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminReviewCreateWithoutAdminInput, AdminReviewUncheckedCreateWithoutAdminInput>
  }

  export type AdminReviewUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminReviewWhereUniqueInput
    data: XOR<AdminReviewUpdateWithoutAdminInput, AdminReviewUncheckedUpdateWithoutAdminInput>
  }

  export type AdminReviewUpdateManyWithWhereWithoutAdminInput = {
    where: AdminReviewScalarWhereInput
    data: XOR<AdminReviewUpdateManyMutationInput, AdminReviewUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminReviewScalarWhereInput = {
    AND?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
    OR?: AdminReviewScalarWhereInput[]
    NOT?: AdminReviewScalarWhereInput | AdminReviewScalarWhereInput[]
    id?: IntFilter<"AdminReview"> | number
    coachId?: IntFilter<"AdminReview"> | number
    adminId?: IntFilter<"AdminReview"> | number
    action?: EnumReviewActionFilter<"AdminReview"> | $Enums.ReviewAction
    comment?: StringNullableFilter<"AdminReview"> | string | null
    createdAt?: DateTimeFilter<"AdminReview"> | Date | string
  }

  export type UserCreateWithoutCoachProfileInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    medias?: MediaCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCoachProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    medias?: MediaUncheckedCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutCoachProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachProfileInput, UserUncheckedCreateWithoutCoachProfileInput>
  }

  export type MediaCreateWithoutCoachInput = {
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutMediasInput
  }

  export type MediaUncheckedCreateWithoutCoachInput = {
    id?: number
    ownerId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutCoachInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput>
  }

  export type MediaCreateManyCoachInputEnvelope = {
    data: MediaCreateManyCoachInput | MediaCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutCoachInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientProfileCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutCoachInput = {
    id?: number
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutCoachInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput>
  }

  export type ChatCreateManyCoachInputEnvelope = {
    data: ChatCreateManyCoachInput | ChatCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type AdminReviewCreateWithoutCoachInput = {
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutAdminReviewsInput
  }

  export type AdminReviewUncheckedCreateWithoutCoachInput = {
    id?: number
    adminId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type AdminReviewCreateOrConnectWithoutCoachInput = {
    where: AdminReviewWhereUniqueInput
    create: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput>
  }

  export type AdminReviewCreateManyCoachInputEnvelope = {
    data: AdminReviewCreateManyCoachInput | AdminReviewCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type CommissionLogCreateWithoutCoachInput = {
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type CommissionLogUncheckedCreateWithoutCoachInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type CommissionLogCreateOrConnectWithoutCoachInput = {
    where: CommissionLogWhereUniqueInput
    create: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput>
  }

  export type CommissionLogCreateManyCoachInputEnvelope = {
    data: CommissionLogCreateManyCoachInput | CommissionLogCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoachProfileInput = {
    update: XOR<UserUpdateWithoutCoachProfileInput, UserUncheckedUpdateWithoutCoachProfileInput>
    create: XOR<UserCreateWithoutCoachProfileInput, UserUncheckedCreateWithoutCoachProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachProfileInput, UserUncheckedUpdateWithoutCoachProfileInput>
  }

  export type UserUpdateWithoutCoachProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    medias?: MediaUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    medias?: MediaUncheckedUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutCoachInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutCoachInput, MediaUncheckedUpdateWithoutCoachInput>
    create: XOR<MediaCreateWithoutCoachInput, MediaUncheckedCreateWithoutCoachInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutCoachInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutCoachInput, MediaUncheckedUpdateWithoutCoachInput>
  }

  export type MediaUpdateManyWithWhereWithoutCoachInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutCoachInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutCoachInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutCoachInput, ChatUncheckedUpdateWithoutCoachInput>
    create: XOR<ChatCreateWithoutCoachInput, ChatUncheckedCreateWithoutCoachInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutCoachInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutCoachInput, ChatUncheckedUpdateWithoutCoachInput>
  }

  export type ChatUpdateManyWithWhereWithoutCoachInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutCoachInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    coachId?: IntFilter<"Chat"> | number
    clientId?: IntFilter<"Chat"> | number
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type AdminReviewUpsertWithWhereUniqueWithoutCoachInput = {
    where: AdminReviewWhereUniqueInput
    update: XOR<AdminReviewUpdateWithoutCoachInput, AdminReviewUncheckedUpdateWithoutCoachInput>
    create: XOR<AdminReviewCreateWithoutCoachInput, AdminReviewUncheckedCreateWithoutCoachInput>
  }

  export type AdminReviewUpdateWithWhereUniqueWithoutCoachInput = {
    where: AdminReviewWhereUniqueInput
    data: XOR<AdminReviewUpdateWithoutCoachInput, AdminReviewUncheckedUpdateWithoutCoachInput>
  }

  export type AdminReviewUpdateManyWithWhereWithoutCoachInput = {
    where: AdminReviewScalarWhereInput
    data: XOR<AdminReviewUpdateManyMutationInput, AdminReviewUncheckedUpdateManyWithoutCoachInput>
  }

  export type CommissionLogUpsertWithWhereUniqueWithoutCoachInput = {
    where: CommissionLogWhereUniqueInput
    update: XOR<CommissionLogUpdateWithoutCoachInput, CommissionLogUncheckedUpdateWithoutCoachInput>
    create: XOR<CommissionLogCreateWithoutCoachInput, CommissionLogUncheckedCreateWithoutCoachInput>
  }

  export type CommissionLogUpdateWithWhereUniqueWithoutCoachInput = {
    where: CommissionLogWhereUniqueInput
    data: XOR<CommissionLogUpdateWithoutCoachInput, CommissionLogUncheckedUpdateWithoutCoachInput>
  }

  export type CommissionLogUpdateManyWithWhereWithoutCoachInput = {
    where: CommissionLogScalarWhereInput
    data: XOR<CommissionLogUpdateManyMutationInput, CommissionLogUncheckedUpdateManyWithoutCoachInput>
  }

  export type CommissionLogScalarWhereInput = {
    AND?: CommissionLogScalarWhereInput | CommissionLogScalarWhereInput[]
    OR?: CommissionLogScalarWhereInput[]
    NOT?: CommissionLogScalarWhereInput | CommissionLogScalarWhereInput[]
    id?: IntFilter<"CommissionLog"> | number
    coachId?: IntFilter<"CommissionLog"> | number
    amount?: DecimalFilter<"CommissionLog"> | Decimal | DecimalJsLike | number | string
    reference?: StringNullableFilter<"CommissionLog"> | string | null
    note?: StringNullableFilter<"CommissionLog"> | string | null
    createdAt?: DateTimeFilter<"CommissionLog"> | Date | string
  }

  export type UserCreateWithoutClientProfileInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    medias?: MediaCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutClientProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    medias?: MediaUncheckedCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutClientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
  }

  export type ChatCreateWithoutClientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutChatsAsCoachInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutClientInput = {
    id?: number
    coachId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutClientInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput>
  }

  export type ChatCreateManyClientInputEnvelope = {
    data: ChatCreateManyClientInput | ChatCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientProfileInput = {
    update: XOR<UserUpdateWithoutClientProfileInput, UserUncheckedUpdateWithoutClientProfileInput>
    create: XOR<UserCreateWithoutClientProfileInput, UserUncheckedCreateWithoutClientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientProfileInput, UserUncheckedUpdateWithoutClientProfileInput>
  }

  export type UserUpdateWithoutClientProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    medias?: MediaUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutClientProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    medias?: MediaUncheckedUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChatUpsertWithWhereUniqueWithoutClientInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutClientInput, ChatUncheckedUpdateWithoutClientInput>
    create: XOR<ChatCreateWithoutClientInput, ChatUncheckedCreateWithoutClientInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutClientInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutClientInput, ChatUncheckedUpdateWithoutClientInput>
  }

  export type ChatUpdateManyWithWhereWithoutClientInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutMediasInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    adminReviews?: AdminReviewCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMediasInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMediasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediasInput, UserUncheckedCreateWithoutMediasInput>
  }

  export type CoachProfileCreateWithoutMediaInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachProfileInput
    chatsAsCoach?: ChatCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateWithoutMediaInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatsAsCoach?: ChatUncheckedCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileCreateOrConnectWithoutMediaInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutMediaInput, CoachProfileUncheckedCreateWithoutMediaInput>
  }

  export type UserUpsertWithoutMediasInput = {
    update: XOR<UserUpdateWithoutMediasInput, UserUncheckedUpdateWithoutMediasInput>
    create: XOR<UserCreateWithoutMediasInput, UserUncheckedCreateWithoutMediasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediasInput, UserUncheckedUpdateWithoutMediasInput>
  }

  export type UserUpdateWithoutMediasInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMediasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CoachProfileUpsertWithoutMediaInput = {
    update: XOR<CoachProfileUpdateWithoutMediaInput, CoachProfileUncheckedUpdateWithoutMediaInput>
    create: XOR<CoachProfileCreateWithoutMediaInput, CoachProfileUncheckedCreateWithoutMediaInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutMediaInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutMediaInput, CoachProfileUncheckedUpdateWithoutMediaInput>
  }

  export type CoachProfileUpdateWithoutMediaInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachProfileNestedInput
    chatsAsCoach?: ChatUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatsAsCoach?: ChatUncheckedUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileCreateWithoutChatsAsCoachInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachProfileInput
    media?: MediaCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateWithoutChatsAsCoachInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileCreateOrConnectWithoutChatsAsCoachInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutChatsAsCoachInput, CoachProfileUncheckedCreateWithoutChatsAsCoachInput>
  }

  export type ClientProfileCreateWithoutChatsInput = {
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientProfileInput
  }

  export type ClientProfileUncheckedCreateWithoutChatsInput = {
    id?: number
    userId: number
    ageRange?: string | null
    heightCm?: number | null
    weightKg?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientProfileCreateOrConnectWithoutChatsInput = {
    where: ClientProfileWhereUniqueInput
    create: XOR<ClientProfileCreateWithoutChatsInput, ClientProfileUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    senderId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type CoachProfileUpsertWithoutChatsAsCoachInput = {
    update: XOR<CoachProfileUpdateWithoutChatsAsCoachInput, CoachProfileUncheckedUpdateWithoutChatsAsCoachInput>
    create: XOR<CoachProfileCreateWithoutChatsAsCoachInput, CoachProfileUncheckedCreateWithoutChatsAsCoachInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutChatsAsCoachInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutChatsAsCoachInput, CoachProfileUncheckedUpdateWithoutChatsAsCoachInput>
  }

  export type CoachProfileUpdateWithoutChatsAsCoachInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachProfileNestedInput
    media?: MediaUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateWithoutChatsAsCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type ClientProfileUpsertWithoutChatsInput = {
    update: XOR<ClientProfileUpdateWithoutChatsInput, ClientProfileUncheckedUpdateWithoutChatsInput>
    create: XOR<ClientProfileCreateWithoutChatsInput, ClientProfileUncheckedCreateWithoutChatsInput>
    where?: ClientProfileWhereInput
  }

  export type ClientProfileUpdateToOneWithWhereWithoutChatsInput = {
    where?: ClientProfileWhereInput
    data: XOR<ClientProfileUpdateWithoutChatsInput, ClientProfileUncheckedUpdateWithoutChatsInput>
  }

  export type ClientProfileUpdateWithoutChatsInput = {
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientProfileNestedInput
  }

  export type ClientProfileUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    heightCm?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutChatsAsCoachInput
    client: ClientProfileCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: number
    coachId: number
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesSentInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
    medias?: MediaCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
    medias?: MediaUncheckedCreateNestedManyWithoutOwnerInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutChatsAsCoachNestedInput
    client?: ClientProfileUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
    medias?: MediaUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
    medias?: MediaUncheckedUpdateManyWithoutOwnerNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CoachProfileCreateWithoutAdminReviewsInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachProfileInput
    media?: MediaCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateWithoutAdminReviewsInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatUncheckedCreateNestedManyWithoutCoachInput
    commissionLogs?: CommissionLogUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileCreateOrConnectWithoutAdminReviewsInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutAdminReviewsInput, CoachProfileUncheckedCreateWithoutAdminReviewsInput>
  }

  export type UserCreateWithoutAdminReviewsInput = {
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    medias?: MediaCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAdminReviewsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.UserRole
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachProfile?: CoachProfileUncheckedCreateNestedOneWithoutUserInput
    clientProfile?: ClientProfileUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    medias?: MediaUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAdminReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminReviewsInput, UserUncheckedCreateWithoutAdminReviewsInput>
  }

  export type CoachProfileUpsertWithoutAdminReviewsInput = {
    update: XOR<CoachProfileUpdateWithoutAdminReviewsInput, CoachProfileUncheckedUpdateWithoutAdminReviewsInput>
    create: XOR<CoachProfileCreateWithoutAdminReviewsInput, CoachProfileUncheckedCreateWithoutAdminReviewsInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutAdminReviewsInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutAdminReviewsInput, CoachProfileUncheckedUpdateWithoutAdminReviewsInput>
  }

  export type CoachProfileUpdateWithoutAdminReviewsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachProfileNestedInput
    media?: MediaUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateWithoutAdminReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUncheckedUpdateManyWithoutCoachNestedInput
    commissionLogs?: CommissionLogUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUpsertWithoutAdminReviewsInput = {
    update: XOR<UserUpdateWithoutAdminReviewsInput, UserUncheckedUpdateWithoutAdminReviewsInput>
    create: XOR<UserCreateWithoutAdminReviewsInput, UserUncheckedCreateWithoutAdminReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminReviewsInput, UserUncheckedUpdateWithoutAdminReviewsInput>
  }

  export type UserUpdateWithoutAdminReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    medias?: MediaUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachProfile?: CoachProfileUncheckedUpdateOneWithoutUserNestedInput
    clientProfile?: ClientProfileUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    medias?: MediaUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CoachProfileCreateWithoutCommissionLogsInput = {
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachProfileInput
    media?: MediaCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateWithoutCommissionLogsInput = {
    id?: number
    userId: number
    bio?: string | null
    discipline: string
    portfolio?: string | null
    status?: $Enums.ApprovalStatus
    statusReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutCoachInput
    chatsAsCoach?: ChatUncheckedCreateNestedManyWithoutCoachInput
    adminReviews?: AdminReviewUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileCreateOrConnectWithoutCommissionLogsInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutCommissionLogsInput, CoachProfileUncheckedCreateWithoutCommissionLogsInput>
  }

  export type CoachProfileUpsertWithoutCommissionLogsInput = {
    update: XOR<CoachProfileUpdateWithoutCommissionLogsInput, CoachProfileUncheckedUpdateWithoutCommissionLogsInput>
    create: XOR<CoachProfileCreateWithoutCommissionLogsInput, CoachProfileUncheckedCreateWithoutCommissionLogsInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutCommissionLogsInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutCommissionLogsInput, CoachProfileUncheckedUpdateWithoutCommissionLogsInput>
  }

  export type CoachProfileUpdateWithoutCommissionLogsInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachProfileNestedInput
    media?: MediaUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateWithoutCommissionLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: StringFieldUpdateOperationsInput | string
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutCoachNestedInput
    chatsAsCoach?: ChatUncheckedUpdateManyWithoutCoachNestedInput
    adminReviews?: AdminReviewUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: number
    chatId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MediaCreateManyOwnerInput = {
    id?: number
    coachId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AdminReviewCreateManyAdminInput = {
    id?: number
    coachId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutOwnerInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewUpdateWithoutAdminInput = {
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutAdminReviewsNestedInput
  }

  export type AdminReviewUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyCoachInput = {
    id?: number
    ownerId?: number | null
    url: string
    type: $Enums.MediaType
    mimeType: string
    sizeBytes?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ChatCreateManyCoachInput = {
    id?: number
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminReviewCreateManyCoachInput = {
    id?: number
    adminId: number
    action: $Enums.ReviewAction
    comment?: string | null
    createdAt?: Date | string
  }

  export type CommissionLogCreateManyCoachInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type MediaUpdateWithoutCoachInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutMediasNestedInput
  }

  export type MediaUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutCoachInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientProfileUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewUpdateWithoutCoachInput = {
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAdminReviewsNestedInput
  }

  export type AdminReviewUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReviewUncheckedUpdateManyWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumReviewActionFieldUpdateOperationsInput | $Enums.ReviewAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogUpdateWithoutCoachInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogUncheckedUpdateWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionLogUncheckedUpdateManyWithoutCoachInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyClientInput = {
    id?: number
    coachId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateWithoutClientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutChatsAsCoachNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    coachId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: number
    senderId: number
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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