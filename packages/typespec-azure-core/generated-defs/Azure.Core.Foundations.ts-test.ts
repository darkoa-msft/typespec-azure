/** An error here would mean that the decorator is not exported or doesn't have the right name. */
import { $decorators } from "@azure-tools/typespec-azure-core";
import type { AzureCoreFoundationsDecorators } from "./Azure.Core.Foundations.js";
/** An error here would mean that the exported decorator is not using the same signature. Make sure to have export const $decName: DecNameDecorator = (...) => ... */
const _: AzureCoreFoundationsDecorators = $decorators["Azure.Core.Foundations"];
