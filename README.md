# GeoFS Types

GeoFS' API is pretty mysterious, since its true source code has never popped into the public's view. This repo, and its associated npm package, aims to demystify it.

## How to use

You need to install the package from npm.

```sh
npm install @geps/geofs-types
```

Since this isn't an `@types` package, the TypeScript compiler won't automatically pick up these types. Because of that, you will need to manually request that the TypeScript compiler use these types.

The preferred method to use these types is through a [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html), like so:

```ts
/// <reference types="jquery" />
/// <reference types="@geps/geofs-types" />
```

You will then be able to access the types. Be careful to also include the JQuery types, as the types rely on them.

If the previous method doesn't work for your use case, you will have to manually specify these types in the `tsconfig.json` of your project. It will look something like this:

```json
{
  "compilerOptions": {
    "types": ["@geps/geofs-types", "jquery"]
  }
}
```

**WARNING**: Be aware that when you declare the `types` property in your tsconfig, it turns off the compiler's ability to pick up types. You will have to add types to the tsconfig.

**WARNING**: These types rely on JQuery's types, so when you declare these types in your tsconfig, you must be careful to also declare JQuery's types in the tsconfig.

<!-- ## How to contribute

We accept PRs! Read our [contributing guide](./CONTRIBUTING.md) for more info. -->
