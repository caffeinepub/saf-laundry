import Text "mo:core/Text";
import List "mo:core/List";

actor {
  type Service = {
    name : Text;
    price : Nat;
  };

  type BusinessInfo = {
    name : Text;
    location : Text;
    phone : Text;
    services : [Service];
  };

  let servicesList = List.empty<Service>();
  var businessInfo : ?BusinessInfo = null;

  public shared ({ caller }) func setBusinessInfo(name : Text, location : Text, phone : Text) : async () {
    businessInfo := ?{
      name;
      location;
      phone;
      services = [];
    };
  };

  public shared ({ caller }) func addService(serviceName : Text, price : Nat) : async () {
    let service : Service = {
      name = serviceName;
      price;
    };
    servicesList.add(service);

    switch (businessInfo) {
      case (null) { () };
      case (?existingInfo) {
        businessInfo := ?{
          existingInfo with
          services = servicesList.toArray();
        };
      };
    };
  };

  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    switch (businessInfo) {
      case (null) { { name = ""; location = ""; phone = ""; services = [] } };
      case (?info) { info };
    };
  };
};
