export interface TiraApiResponse {
  code: number;
  data: CoverNoteData[];
  message: string | null;
  statusCode: string | null;
  error: boolean;
}

export interface CoverNoteData {
  id: string | null;
  coverNoteNumber: string;
  coverNoteReferenceNumber: string;
  previousCoverNoteReferenceNumber: string | null;
  stickerNumber: string;
  coverNoteStartDate: number;
  coverNoteEndDate: number;
  issueDate: number;
  coverNoteDescription: string | null;
  operativeClause: string | null;
  currencyCode: string;
  exchangeRate: number | null;
  totalPremiumAmountExcludingTax: number;
  totalPremiumAmountIncludingTax: number;
  commisionPaid: number | null;
  commisionRate: number | null;
  vat: number | null;
  premiumLevy: number | null;
  officerName: string | null;
  officerTitle: string | null;
  isFleet: boolean | null;
  fleetIdentificationNumber: string | null;
  fleetSize: number | null;
  isMotor: boolean;
  coverNoteTypeId: number | null;
  covernoteCategoryId: number | null;
  company: CompanyData;
  motor: MotorData;
  statusId: number;
  statusTitle: string;
  endosementTypeId: number | null;
  salePoint: string | null;
  productName: string;
  classOfBusiness: string;
  riskCovered: string | null;
  productItems: string;
  policyHolders: any[];
  transactingCompany: string;
  transactingCompanyType: string;
}

export interface CompanyData {
  id: string | null;
  companyCode: string | null;
  companyNumber: string | null;
  companyName: string;
  companyPhone1: string | null;
  companyPhone2: string | null;
  companyFax: string | null;
  postalAddress: string | null;
  emailAddress: string | null;
  locationStreet: string | null;
}

export interface MotorData {
  id: string | null;
  registrationNumber: string;
  chassisNumber: string;
  make: string | null;
  model: string | null;
  modelNumber: string | null;
  bodyType: string | null;
  color: string | null;
  engineNumber: string | null;
  engineCapacity: string | null;
  fuelUsed: string | null;
  numberOfAxles: number | null;
  axleDistance: number | null;
  sittingCapacity: number | null;
  tareWeight: number | null;
  grossWeight: number | null;
  motorUsageId: number | null;
  ownerName: string | null;
  ownerCategoryId: number | null;
  motorCategoryId: number | null;
  coverNoteId: string | null;
  ownerAddress: string | null;
  yearOfManufacture: number | null;
}

export interface SearchPayload {
  paramType: number;
  searchParam: string;
}

// Updated API URL to match the specific redirect rule
const TIRA_API_URL = '/api/covernote/api/public/portal/verify';

export const verifyInsurance = async (payload: SearchPayload): Promise<TiraApiResponse> => {
  console.log('Making API request to:', TIRA_API_URL);
  console.log('Request payload:', payload);
  console.log('Environment:', import.meta.env.MODE);
  console.log('Base URL:', window.location.origin);
  console.log('Full URL will be:', window.location.origin + TIRA_API_URL);

  try {
    const response = await fetch(TIRA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Add additional headers that might be required
        'User-Agent': 'Mozilla/5.0 (compatible; TIRA-Verification-App)',
        'Origin': window.location.origin,
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    console.log('Response URL:', response.url);

    // Get response text first to check what we received
    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (!response.ok) {
      console.error('API Error Response:', responseText);
      
      // If we get a server error, return a structured error response
      return {
        code: response.status,
        data: [],
        message: `The insurance verification service returned an error (${response.status}). Please try again later.`,
        statusCode: response.status.toString(),
        error: true
      };
    }

    // Check if response is empty
    if (!responseText.trim()) {
      console.error('Empty response received');
      return {
        code: 204,
        data: [],
        message: 'No data received from the insurance verification service',
        statusCode: '204',
        error: true
      };
    }

    // Check if the response is HTML instead of JSON
    if (responseText.includes('<html') || responseText.includes('<!DOCTYPE')) {
      console.error('Received HTML response instead of JSON');
      return {
        code: 406,
        data: [],
        message: 'The insurance verification service returned HTML instead of JSON. This may indicate an issue with the API.',
        statusCode: 'INVALID_RESPONSE_FORMAT',
        error: true
      };
    }

    // Try to parse as JSON
    let data: TiraApiResponse;
    try {
      data = JSON.parse(responseText);
      
      // Additional validation to ensure response has expected structure
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid JSON structure');
      }
      
      // Check if the response looks like a proper TiraApiResponse
      if (!('code' in data) || !('data' in data) || !('error' in data)) {
        console.error('Response missing required fields');
        return {
          code: 400,
          data: [],
          message: 'Invalid response format: missing required fields',
          statusCode: 'INVALID_RESPONSE_STRUCTURE',
          error: true
        };
      }
      
      console.log('Parsed API Response data:', data);
      return data;
      
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      console.error('Response was:', responseText);
      
      return {
        code: 400,
        data: [],
        message: 'Invalid JSON format received from the insurance verification service',
        statusCode: 'INVALID_JSON',
        error: true
      };
    }
  } catch (error) {
    console.error('Detailed error information:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: typeof error,
      name: error instanceof Error ? error.name : undefined,
      url: TIRA_API_URL,
      fullUrl: window.location.origin + TIRA_API_URL
    });

    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      return {
        code: 0,
        data: [],
        message: 'Network error: Unable to connect to the insurance verification service. Please check your internet connection and try again.',
        statusCode: 'NETWORK_ERROR',
        error: true
      };
    }
    
    return {
      code: 500,
      data: [],
      message: `Failed to verify insurance: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
      statusCode: '500',
      error: true
    };
  }
};

// Helper function to determine paramType based on search type
export const getParamType = (searchType: string): number => {
  switch (searchType) {
    case 'policy':
      return 1; // Policy number
    case 'vehicle':
      return 2; // Vehicle registration/plate number
    case 'sticker':
      return 3; // Sticker number
    case 'chassis':
      return 4; // Chassis number
    default:
      return 2; // Default to vehicle search
  }
};
