import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  MenuItem,
  Order,
  OrderItem,
  Restaurant,
  Status,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetRestaurants() {
  const { actor, isFetching } = useActor();
  return useQuery<Restaurant[]>({
    queryKey: ["restaurants"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRestaurants();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetRestaurant(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Restaurant | null>({
    queryKey: ["restaurant", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getRestaurant(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useGetMenuItems(restaurantId: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems", restaurantId?.toString()],
    queryFn: async () => {
      if (!actor || restaurantId === null) return [];
      return actor.getMenuItems(restaurantId);
    },
    enabled: !!actor && !isFetching && restaurantId !== null,
  });
}

export function useGetOrder(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Order | null>({
    queryKey: ["order", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) return null;
      return actor.getOrder(id);
    },
    enabled: !!actor && !isFetching && id !== null,
    refetchInterval: 10000, // poll every 10s for status updates
  });
}

export function useGetAllOrders() {
  const { actor, isFetching } = useActor();
  return useQuery<Order[]>({
    queryKey: ["allOrders"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePlaceOrder() {
  const { actor } = useActor();
  return useMutation<
    bigint,
    Error,
    {
      restaurantId: bigint;
      customerName: string;
      deliveryAddress: string;
      phone: string;
      items: OrderItem[];
    }
  >({
    mutationFn: async ({
      restaurantId,
      customerName,
      deliveryAddress,
      phone,
      items,
    }) => {
      if (!actor) throw new Error("No actor available");
      return actor.placeOrder(
        restaurantId,
        customerName,
        deliveryAddress,
        phone,
        items,
      );
    },
  });
}

export function useUpdateOrderStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation<void, Error, { id: bigint; status: Status }>({
    mutationFn: async ({ id, status }) => {
      if (!actor) throw new Error("No actor available");
      return actor.updateOrderStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrders"] });
    },
  });
}
