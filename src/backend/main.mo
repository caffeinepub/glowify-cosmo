import Map "mo:core/Map";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";



actor {
  module Order {
    public type Status = {
      #pending;
      #preparing;
      #outForDelivery;
      #delivered;
    };
  };

  module Restaurant {
    public type CuisineType = {
      #burgers;
      #pizza;
      #sushi;
      #tacos;
      #indian;
      #chinese;
    };
  };

  module MenuItem {
    public type Category = {
      #starters;
      #mains;
      #drinks;
      #desserts;
    };
  };

  type Restaurant = {
    id : Nat;
    name : Text;
    location : Text;
    cuisineType : Restaurant.CuisineType;
    description : Text;
    deliveryTime : Nat;
    minOrder : Nat;
    deliveryFee : Nat;
    avgRating : Nat;
    isOpen : Bool;
  };

  type MenuItem = {
    id : Nat;
    restaurantId : Nat;
    name : Text;
    description : Text;
    price : Nat;
    category : MenuItem.Category;
  };

  type OrderItem = {
    menuItemId : Nat;
    name : Text;
    price : Nat;
    quantity : Nat;
  };

  type Order = {
    id : Nat;
    restaurantId : Nat;
    customerName : Text;
    deliveryAddress : Text;
    phone : Text;
    items : [OrderItem];
    subtotal : Nat;
    deliveryFee : Nat;
    total : Nat;
    status : Order.Status;
    timestamp : Time.Time;
  };

  var nextOrderId = 1;

  let restaurants = Map.fromIter<Nat, Restaurant>([
    (
      1,
      {
        id = 1;
        name = "Smoky Stack Burgers";
        location = "Downtown Market St, Block 4";
        cuisineType = #burgers;
        description = "Flame-grilled smash burgers with secret sauce and fresh toppings — the real street burger experience.";
        deliveryTime = 30;
        minOrder = 1000;
        deliveryFee = 200;
        avgRating = 4;
        isOpen = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Napoli Street Pizza";
        location = "Old Town Square, Stall 12";
        cuisineType = #pizza;
        description = "Wood-fired Neapolitan pizzas made with imported Italian flour and San Marzano tomatoes.";
        deliveryTime = 25;
        minOrder = 1200;
        deliveryFee = 150;
        avgRating = 5;
        isOpen = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Edo Sushi Bar";
        location = "Harbor District, Pier 2";
        cuisineType = #sushi;
        description = "Fresh daily sushi and creative rolls crafted by a Tokyo-trained chef. Dine-in or delivered.";
        deliveryTime = 40;
        minOrder = 1500;
        deliveryFee = 250;
        avgRating = 4;
        isOpen = true;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Viva Taco Stand";
        location = "East Side Food Court, Row B";
        cuisineType = #tacos;
        description = "Authentic Mexican street tacos with slow-cooked meats, fresh salsas, and homemade tortillas.";
        deliveryTime = 20;
        minOrder = 800;
        deliveryFee = 100;
        avgRating = 4;
        isOpen = true;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Spice Route Kitchen";
        location = "Spice Bazaar Lane, Shop 7";
        cuisineType = #indian;
        description = "Northern Indian street food — rich curries, tandoor breads, and aromatic biryanis cooked fresh daily.";
        deliveryTime = 35;
        minOrder = 1300;
        deliveryFee = 200;
        avgRating = 5;
        isOpen = true;
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Golden Wok Street";
        location = "Chinatown Night Market, Alley 3";
        cuisineType = #chinese;
        description = "Classic dim sum, wok-tossed noodles, and bold Chinese street dishes from a family recipe spanning 3 generations.";
        deliveryTime = 28;
        minOrder = 900;
        deliveryFee = 180;
        avgRating = 4;
        isOpen = true;
      },
    ),
  ].values());

  let menuItems = Map.fromIter<Nat, MenuItem>([
    // Smoky Stack Burgers (1)
    (1, { id = 1; restaurantId = 1; name = "Smoky Stack Classic"; description = "Double beef patty, smoked cheddar, caramelised onions, secret sauce"; price = 850; category = #mains }),
    (2, { id = 2; restaurantId = 1; name = "Crispy Chicken Crunch"; description = "Fried chicken thigh, sriracha slaw, pickles, brioche bun"; price = 780; category = #mains }),
    (3, { id = 3; restaurantId = 1; name = "Loaded Chilli Fries"; description = "Thick-cut fries topped with beef chilli, jalapeños, and sour cream"; price = 450; category = #starters }),
    (4, { id = 4; restaurantId = 1; name = "Onion Ring Tower"; description = "Beer-battered onion rings with smoky BBQ dipping sauce"; price = 350; category = #starters }),
    (5, { id = 5; restaurantId = 1; name = "Salted Caramel Shake"; description = "Thick milkshake with salted caramel and whipped cream"; price = 300; category = #drinks }),
    (6, { id = 6; restaurantId = 1; name = "Brownie Bomb"; description = "Warm chocolate brownie with vanilla ice cream"; price = 400; category = #desserts }),

    // Napoli Street Pizza (2)
    (7, { id = 7; restaurantId = 2; name = "Margherita Classica"; description = "San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil"; price = 900; category = #mains }),
    (8, { id = 8; restaurantId = 2; name = "Diavola Picante"; description = "Spicy salami, chilli, mozzarella, tomato base"; price = 1050; category = #mains }),
    (9, { id = 9; restaurantId = 2; name = "Quattro Formaggi"; description = "Four-cheese blend: mozzarella, gorgonzola, parmesan, ricotta"; price = 1100; category = #mains }),
    (10, { id = 10; restaurantId = 2; name = "Bruschetta al Pomodoro"; description = "Grilled bread, tomato concasse, garlic, fresh basil"; price = 350; category = #starters }),
    (11, { id = 11; restaurantId = 2; name = "Arancini Balls"; description = "Crispy risotto balls stuffed with mozzarella and ragu"; price = 400; category = #starters }),
    (12, { id = 12; restaurantId = 2; name = "Limoncello Tiramisu"; description = "Classic tiramisu with a hint of lemon liqueur"; price = 450; category = #desserts }),
    (13, { id = 13; restaurantId = 2; name = "San Pellegrino Sparkling"; description = "Chilled Italian sparkling water, 500ml"; price = 200; category = #drinks }),

    // Edo Sushi Bar (3)
    (14, { id = 14; restaurantId = 3; name = "Dragon Roll"; description = "Shrimp tempura inside, avocado and tobiko on top"; price = 750; category = #mains }),
    (15, { id = 15; restaurantId = 3; name = "Salmon Nigiri (6 pcs)"; description = "Premium Atlantic salmon over seasoned sushi rice"; price = 650; category = #starters }),
    (16, { id = 16; restaurantId = 3; name = "Spicy Tuna Roll"; description = "Fresh tuna, spicy mayo, cucumber, sesame seeds"; price = 700; category = #mains }),
    (17, { id = 17; restaurantId = 3; name = "Tempura Udon"; description = "Silky udon noodles in dashi broth with prawn tempura"; price = 850; category = #mains }),
    (18, { id = 18; restaurantId = 3; name = "Edamame and Miso Soup"; description = "Salted edamame pods and classic tofu miso soup"; price = 300; category = #starters }),
    (19, { id = 19; restaurantId = 3; name = "Matcha Mochi Ice Cream"; description = "Chewy mochi filled with matcha green tea ice cream"; price = 380; category = #desserts }),
    (20, { id = 20; restaurantId = 3; name = "Yuzu Lemonade"; description = "Refreshing Japanese citrus lemonade, freshly squeezed"; price = 280; category = #drinks }),

    // Viva Taco Stand (4)
    (21, { id = 21; restaurantId = 4; name = "Al Pastor Tacos (3 pcs)"; description = "Marinated pork, pineapple, cilantro, onion on corn tortillas"; price = 550; category = #mains }),
    (22, { id = 22; restaurantId = 4; name = "Carne Asada Tacos (3 pcs)"; description = "Grilled beef, guacamole, pico de gallo, lime"; price = 600; category = #mains }),
    (23, { id = 23; restaurantId = 4; name = "Elote Street Corn"; description = "Grilled corn on the cob with chilli mayo, cotija cheese, and lime"; price = 280; category = #starters }),
    (24, { id = 24; restaurantId = 4; name = "Guacamole and Chips"; description = "Freshly made guacamole with crispy tortilla chips"; price = 350; category = #starters }),
    (25, { id = 25; restaurantId = 4; name = "Horchata"; description = "Sweet chilled rice drink with cinnamon"; price = 220; category = #drinks }),
    (26, { id = 26; restaurantId = 4; name = "Churros con Chocolate"; description = "Fried dough sticks dusted with cinnamon sugar and chocolate dip"; price = 380; category = #desserts }),

    // Spice Route Kitchen (5)
    (27, { id = 27; restaurantId = 5; name = "Butter Chicken"; description = "Tender chicken in a creamy tomato and spice sauce with naan"; price = 980; category = #mains }),
    (28, { id = 28; restaurantId = 5; name = "Lamb Biryani"; description = "Aromatic basmati rice layered with slow-cooked lamb and saffron"; price = 1100; category = #mains }),
    (29, { id = 29; restaurantId = 5; name = "Paneer Tikka"; description = "Marinated cottage cheese cubes grilled in tandoor, with mint chutney"; price = 650; category = #starters }),
    (30, { id = 30; restaurantId = 5; name = "Samosa Chaat"; description = "Crispy samosas topped with yoghurt, tamarind chutney, and sev"; price = 400; category = #starters }),
    (31, { id = 31; restaurantId = 5; name = "Mango Lassi"; description = "Chilled blended yoghurt with fresh Alphonso mango"; price = 300; category = #drinks }),
    (32, { id = 32; restaurantId = 5; name = "Gulab Jamun"; description = "Soft milk dumplings soaked in rose-flavoured sugar syrup"; price = 320; category = #desserts }),

    // Golden Wok Street (6)
    (33, { id = 33; restaurantId = 6; name = "Kung Pao Chicken"; description = "Spicy wok-tossed chicken with peanuts, dried chillies, and Sichuan pepper"; price = 870; category = #mains }),
    (34, { id = 34; restaurantId = 6; name = "BBQ Pork Char Siu"; description = "Slow-roasted honey-glazed pork with steamed jasmine rice"; price = 920; category = #mains }),
    (35, { id = 35; restaurantId = 6; name = "Crispy Spring Rolls (4 pcs)"; description = "Vegetable and glass noodle rolls with sweet chilli dipping sauce"; price = 380; category = #starters }),
    (36, { id = 36; restaurantId = 6; name = "Har Gow Dumplings"; description = "Steamed prawn dumplings in translucent rice pastry"; price = 450; category = #starters }),
    (37, { id = 37; restaurantId = 6; name = "Jasmine Iced Tea"; description = "Lightly sweetened cold-brewed jasmine green tea"; price = 240; category = #drinks }),
    (38, { id = 38; restaurantId = 6; name = "Mango Pudding"; description = "Silky chilled mango pudding with evaporated milk"; price = 300; category = #desserts }),
  ].values());

  let orders = Map.empty<Nat, Order>();

  public query ({ caller }) func getRestaurants() : async [Restaurant] {
    restaurants.values().toArray();
  };

  public query ({ caller }) func getRestaurant(id : Nat) : async Restaurant {
    switch (restaurants.get(id)) {
      case (null) { Runtime.trap("Restaurant not found") };
      case (?restaurant) { restaurant };
    };
  };

  public query ({ caller }) func getMenuItems(restaurantId : Nat) : async [MenuItem] {
    menuItems.values().toArray().filter(func(item) { item.restaurantId == restaurantId });
  };

  public shared ({ caller }) func placeOrder(
    restaurantId : Nat,
    customerName : Text,
    deliveryAddress : Text,
    phone : Text,
    items : [OrderItem],
  ) : async Nat {
    switch (restaurants.get(restaurantId)) {
      case (null) { Runtime.trap("Restaurant not found") };
      case (?restaurant) {
        let subtotal = items.foldLeft(0, func(total, item) { total + (item.price * item.quantity) });
        let total = subtotal + restaurant.deliveryFee;

        let order : Order = {
          id = nextOrderId;
          restaurantId;
          customerName;
          deliveryAddress;
          phone;
          items;
          subtotal;
          deliveryFee = restaurant.deliveryFee;
          total;
          status = #pending;
          timestamp = Time.now();
        };

        orders.add(nextOrderId, order);
        nextOrderId += 1;
        order.id;
      };
    };
  };

  public query ({ caller }) func getOrder(id : Nat) : async Order {
    switch (orders.get(id)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) { order };
    };
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  public shared ({ caller }) func updateOrderStatus(id : Nat, status : Order.Status) : async () {
    switch (orders.get(id)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) {
        let updatedOrder = {
          id = order.id;
          restaurantId = order.restaurantId;
          customerName = order.customerName;
          deliveryAddress = order.deliveryAddress;
          phone = order.phone;
          items = order.items;
          subtotal = order.subtotal;
          deliveryFee = order.deliveryFee;
          total = order.total;
          status;
          timestamp = order.timestamp;
        };
        orders.add(id, updatedOrder);
      };
    };
  };
};
