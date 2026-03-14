import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    name: string;
    price: bigint;
}
export interface BusinessInfo {
    name: string;
    phone: string;
    location: string;
    services: Array<Service>;
}
export interface backendInterface {
    addService(serviceName: string, price: bigint): Promise<void>;
    getBusinessInfo(): Promise<BusinessInfo>;
    setBusinessInfo(name: string, location: string, phone: string): Promise<void>;
}
