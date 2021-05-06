import axios from 'technical/request';

interface RequestStatus { 
  data: [],
  succeeded: boolean,
};

interface getAnnouncementsQueryOptions {
  limit: number;
}

export async function getAnnouncements({limit}: getAnnouncementsQueryOptions) : Promise<RequestStatus> { 

  const requestStatus: RequestStatus = {
    data: [],
    succeeded: false,
  }

  const response = await axios.get(`/announcements`, { params: { limit } });
  
  if(response.status !== 200) {
    return requestStatus
  }

  requestStatus.data = response.data;
  requestStatus.succeeded = true;

  return requestStatus
} 