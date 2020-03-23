/**
 * @author WMXPY
 * @namespace Throttle
 * @description Declare
 */

export type ExecuteFunction<Args extends any[]> = (...args: Args) => (void | Promise<void>);
