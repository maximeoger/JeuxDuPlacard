import axios from 'technical/request';

interface RequestStatus { 
  succeeded: boolean 
};

export async function performEmailVerification(verificationId: string) : Promise<RequestStatus> {
  let requestStatus = { succeeded: false };
  
  const response = await axios.get(`/email/verify`, { params: { verification_id: verificationId } });
  
  if(response.status !== 204) {
    requestStatus.succeeded = true;
  }

  return requestStatus;
} 