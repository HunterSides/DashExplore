interface RootObject {
  pagination: Pagination;
  result: Result[];
}

interface Result {
  paymentMethod: string;
  merchantId: string;
  name: string;
  address1?: string;
  country: string;
  source: string;
  sourceId: string;
  type: string;
  redeemType: string;
  latitude?: number;
  longitude?: number;
  territory?: string;
  city?: string;
  address2?: string;
  phone?: string;
  category?: string;
}

interface Pagination {
  page: number;
  pages: number;
  perPage: number;
  total: number;
}

export interface MerchantListings{
  data: RootObject;
}
