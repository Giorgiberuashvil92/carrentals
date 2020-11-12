export interface AffiliatePartnerActivitiesResponse {
    data: Array<{
        id: string;
        type: string;
        attributes: {
            'title': string;
            'url': string;
            'image-url': string;
            'partner-name': string;
            'about': string;
            'description': string;
            'price': number;
            'currency': string;
            'duration': {
                'hours': number;
            }
            'position': number;
        }
        relationships: {
            'activity-types': {
                'data': Array<{
                    'id': string;
                    'type': string;
                }>
            }
        }
    }>
}