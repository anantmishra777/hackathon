export interface Lead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  message: string;
  file_name: string;
  source_type: string;
  company: string;
  status: string;
  created_at: string;
}

export interface LeadFormData {
  id: string;
  name: string;
  // attachment: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  message: string;
  file_name: string;
  company: string;
  source_type: string;
  status: string;
  created_at: string;
}