export enum LoggingLevel {
    ERROR,
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.WARN;

export function Log(level: LoggingLevel) : MethodDecorator{

    console.log(`Applying @log decorator`)

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        // console.log(`target:` ,target);
        // console.log(`propertyKey:` , propertyKey);
        // console.log(`descriptor:`, descriptor);

        const originalFunction = descriptor.value;

        descriptor.value = function(...args: any[] )  {

            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${propertyKey}, ${JSON.stringify(args)}`)
            }
            originalFunction.apply(this, args);  
        }        
    }

}


export function Perf(): MethodDecorator {
    console.log(`Applying @Perf Decorator`);

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        
        const originalFunction: Function = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`started at ${new Date().getTime()}`);
            originalFunction.apply(this, args);
            console.log(`ended at ${new Date().getTime()}`);
        }
        
    }

}