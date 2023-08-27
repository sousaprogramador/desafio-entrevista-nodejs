export declare class ValidatorRules {
    private value;
    private property;
    private constructor();
    static values(value: any, property: string): ValidatorRules;
    required(): this;
    string(): this;
    number(): this;
    maxLength(max: number): this;
    boolean(): this;
}
export declare function isEmpty(value: any): boolean;
export default ValidatorRules;
