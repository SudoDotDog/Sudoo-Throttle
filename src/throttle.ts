/**
 * @author WMXPY
 * @namespace Throttle
 * @description Throttle
 */

import { ExecuteFunction } from "./declare";

export class Throttle<Args extends any[] = []> {

    public static create<Args extends any[] = []>(func: ExecuteFunction<Args>, delay: number): Throttle<Args> {

        return new Throttle<Args>(func, delay);
    }

    private readonly _func: ExecuteFunction<Args>;
    private readonly _delay: number;

    private _lastExecuteTime: number;

    private constructor(func: ExecuteFunction<Args>, delay: number) {

        this._func = func;
        this._delay = delay;

        this._lastExecuteTime = 0;
    }

    public execute(...args: Args): void {

        const now: number = Date.now();
        const difference: number = now - this._lastExecuteTime;

        if (difference > this._delay) {

            this._lastExecuteTime = now;
            Promise.resolve(this._func(...args));
        }
    }

    public reset(): this {

        this._lastExecuteTime = 0;
        return this;
    }
}
