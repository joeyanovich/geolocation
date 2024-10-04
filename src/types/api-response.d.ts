interface AddressType {
  country: string;
  state: string;
  city: string;
  road: string;
  postcode: string;
}

interface PinInfoResponse {
  address: AddressType;
}
