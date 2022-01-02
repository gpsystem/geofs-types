# GeoFS Types

GeoFS' API is pretty mysterious, since its true source code has never popped into the public's view. This repo, and its associated npm package, aims to demystify it.

## How to use

You need to install the package from npm.

```sh
npm install @geps/geofs-types
```

Since this isn't an `@types` package, the TypeScript compiler won't automatically pick up these types. You will have to manually specify these types in the `tsconfig.json` of your project. It will look something like this:

```json
{
  "compilerOptions": {
    "types": ["@geps/geofs-types", "jquery"]
  }
}
```

**WARNING**: Be aware that when you declare the `types` property in your tsconfig, it turns off the compiler's ability to pick up types. You will have to add types to the tsconfig.

**WARNING**: These types rely on JQuery's types, so when you declare these types in your tsconfig, you must also declare JQuery's types in the tsconfig.

Currently, these types are still incomplete. We are still missing types for the following:

- [`Object3D`](./typings/Object3D.d.ts)
- [`instruments`](./typings/instruments.d.ts)
- [`geofs.camera`](./typings/geofs/camera.d.ts)

<!-- ## How to contribute

We accept PRs! Read our [contributing guide](./CONTRIBUTING.md) for more info. -->
