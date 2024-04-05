export interface Order {
    customer: string;
    address: string;
    total: number;
    status?: number;
    method: number;
    products: any[];
    createdAt?: Date;
    updatedAt?: Date;
}
