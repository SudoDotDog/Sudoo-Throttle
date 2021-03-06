/**
 * @author WMXPY
 * @namespace Throttle
 * @description Throttle
 */

import { ExecuteFunction } from "./declare";

export class Throttle<Args extends any[] = []> {

    // eslint-disable-next-line @typescript-eslint/no-shadow
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

    public ready(): boolean {

        const now: number = Date.now();
        const difference: number = now - this._lastExecuteTime;

        return difference > this._delay;
    }

    public execute(...args: Args): void {

        if (this.ready()) {

            const now: number = Date.now();
            this._lastExecuteTime = now;
            Promise.resolve(this._func(...args));
        }
    }

    public reset(): this {

        this._lastExecuteTime = 0;
        return this;
    }
}
