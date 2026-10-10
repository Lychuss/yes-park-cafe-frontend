// Tiny shared helper so the cart badge in the Header can follow the count
// that Products receives from the API (no more hard-coded pixel positions).
export const CART_COUNT_EVENT = "cart:count";

export function emitCartCount(count: number) {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent<number>(CART_COUNT_EVENT, { detail: count }));
}
