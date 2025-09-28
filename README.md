# servicenow-glide

Custom TypeScript type definitions for ServiceNow Glide Scriptable APIs, enhanced for multi-application development with the ServiceNow SDK.

## Overview

This package contains type declarations for Glide Scriptable APIs to be used with the ServiceNow SDK for comprehensive API type support in JavaScript module development.

Refer to [ServiceNow Documentation](https://docs.servicenow.com/bundle/washingtondc-api-reference/page/script/sdk/task/create-use-javascript-modules.html) for information regarding importing and using Glide APIs via this package.

## Why do we need this?

### The Problem with Standard TypeScript Development

This package is specifically designed for using TypeScript to build ES Modules for ServiceNow applications.

ServiceNow provides many Script Includes and APIs, and organizations often build their own custom APIs as well. However, maintaining type definitions for these APIs can be challenging long-term.

The standard ServiceNow documentation outlines how to add type definitions that are not previously defined in the official `@servicenow/glide` npm package. This approach is documented in the [ServiceNow TypeScript guide](https://www.servicenow.com/docs/bundle/zurich-application-development/page/build/servicenow-sdk/concept/using-typescript.html).

### The Multi-Application Challenge

While the standard approach works for individual applications, it becomes cumbersome when building multiple applications that interact with each other. 

The core issue is that TypeScript's `declare module` functionality, while allowing you to extend previously defined package definitions (adding your own types or currently missing ones), does not allow you to define these extensions once and export them for reuse across projects.

For example, if you define custom types like this:

```typescript
declare module '@servicenow/glide/sn_app_api' {
    class AppStoreAPI {
        static canUpgradeAnyStoreApp(): boolean
    }
}
```

You need to duplicate this declaration in each of your applications to use those types. This becomes difficult when scaling up with multiple applications, especially when applications need to interact with each other.

### The Solution

This library provides a de-transpiled version of the official ServiceNow npm library, enhanced to allow you to:

- **Define custom types once** in a centralized library
- **Share type definitions** across multiple applications
- **Maintain consistency** across your ServiceNow development ecosystem
- **Reduce duplication** and maintenance overhead

By using this custom package, you can maintain your type definitions in one place and use them across all your ServiceNow applications, making your development process more scalable and maintainable. 

