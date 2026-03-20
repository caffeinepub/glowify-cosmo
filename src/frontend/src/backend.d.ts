import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    id: bigint;
    name: string;
    description: string;
    restaurantId: bigint;
    category: Category;
    price: bigint;
}
export type Time = bigint;
export interface OrderItem {
    name: string;
    quantity: bigint;
    price: bigint;
    menuItemId: bigint;
}
export interface Restaurant {
    id: bigint;
    deliveryFee: bigint;
    minOrder: bigint;
    name: string;
    cuisineType: CuisineType;
    description: string;
    isOpen: boolean;
    deliveryTime: bigint;
    location: string;
    avgRating: bigint;
}
export interface Order {
    id: bigint;
    customerName: string;
    status: Status;
    deliveryAddress: string;
    total: bigint;
    deliveryFee: bigint;
    restaurantId: bigint;
    timestamp: Time;
    phone: string;
    items: Array<OrderItem>;
    subtotal: bigint;
}
export enum Category {
    mains = "mains",
    desserts = "desserts",
    starters = "starters",
    drinks = "drinks"
}
export enum CuisineType {
    tacos = "tacos",
    chinese = "chinese",
    sushi = "sushi",
    indian = "indian",
    burgers = "burgers",
    pizza = "pizza"
}
export enum Status {
    preparing = "preparing",
    pending = "pending",
    outForDelivery = "outForDelivery",
    delivered = "delivered"
}
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getMenuItems(restaurantId: bigint): Promise<Array<MenuItem>>;
    getOrder(id: bigint): Promise<Order>;
    getRestaurant(id: bigint): Promise<Restaurant>;
    getRestaurants(): Promise<Array<Restaurant>>;
    placeOrder(restaurantId: bigint, customerName: string, deliveryAddress: string, phone: string, items: Array<OrderItem>): Promise<bigint>;
    updateOrderStatus(id: bigint, status: Status): Promise<void>;
}
