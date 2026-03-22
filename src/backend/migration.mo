import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";

module {
  type Restaurant = {
    id : Nat;
    name : Text;
    location : Text;
    cuisineType : {
      #burgers;
      #pizza;
      #sushi;
      #tacos;
      #indian;
      #chinese;
    };
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
    category : {
      #starters;
      #mains;
      #drinks;
      #desserts;
    };
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
    status : {
      #pending;
      #preparing;
      #outForDelivery;
      #delivered;
    };
    timestamp : Time.Time;
  };

  type OldActor = {
    nextOrderId : Nat;
    restaurants : Map.Map<Nat, Restaurant>;
    menuItems : Map.Map<Nat, MenuItem>;
    orders : Map.Map<Nat, Order>;
  };

  type Doctor = {
    id : Nat;
    name : Text;
    specialty : Text;
    bio : Text;
  };

  type AppointmentStatus = {
    #pending;
    #confirmed;
    #cancelled;
  };

  type Appointment = {
    id : Nat;
    doctorId : Nat;
    patientName : Text;
    patientEmail : Text;
    date : Text;
    timeSlot : Text;
    reason : Text;
    status : AppointmentStatus;
    timestamp : Time.Time;
  };

  type NewActor = {
    nextAppointmentId : Nat;
    doctors : Map.Map<Nat, Doctor>;
    appointments : Map.Map<Nat, Appointment>;
  };

  public func run(_old : OldActor) : NewActor {
    let doctors = Map.fromIter<Nat, Doctor>(
      [
        (
          1,
          {
            id = 1;
            name = "Dr. Alice Thompson";
            specialty = "Cardiology";
            bio = "Expert in heart health with 15+ years of experience in cardiovascular medicine.";
          },
        ),
        (
          2,
          {
            id = 2;
            name = "Dr. Mark Patel";
            specialty = "Dermatology";
            bio = "Specialist in skin disorders and cosmetic dermatology treatments.";
          },
        ),
        (
          3,
          {
            id = 3;
            name = "Dr. Susan Lee";
            specialty = "Pediatrics";
            bio = "Caring pediatrician focused on children`s health and well-being from infancy to adolescence.";
          },
        ),
        (
          4,
          {
            id = 4;
            name = "Dr. John Kim";
            specialty = "Orthopedics";
            bio = "Experienced in treating bone, joint, and muscle conditions.";
          },
        ),
        (
          5,
          {
            id = 5;
            name = "Dr. Maria Gonzalez";
            specialty = "General Practice";
            bio = "Well-rounded family doctor providing comprehensive primary care.";
          },
        ),
      ].values(),
    );

    {
      nextAppointmentId = 1;
      doctors;
      appointments = Map.empty<Nat, Appointment>();
    };
  };
};
