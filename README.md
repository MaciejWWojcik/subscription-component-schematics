# Subscription Component Schematics

Example schematics created for the purpose of this article https://indepth.dev/posts/1438/extend-angular-schematics-to-customize-your-development-process

### Use it in your project:

First things first, you will need to build schematics:

```bash
npm install
npm run build
```

To add the schematics project as dependency for your Angular project run:

```bash
npm install --save-dev ../path/to/subscription-component
```

Then to add it as a default collection, run:

```bash
ng add subscription-component-schematics
```

