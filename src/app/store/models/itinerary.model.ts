export interface ItineraryResponse {
    data: {
        id: string;
        type: string;
        attributes: {
            'start-date': string;
            'end-date': string;
            'days-count': number;
            'continent': string;
            'transportation-plan': Array<{
                'step': number;
                'type': string;
                'icon': string;
                'top-text': string;
                'bottom-text': string;
                'bottom-text-bold': string;
                'day-index': number;
            }>
        }
        relationships: {
            'cities': {
                'data': Array<{
                    'id': string;
                    'type': string;
                }>
            }
            'days': {
                'data': Array<{
                    'id': string;
                    'type': string;
                }>
            }
            'grouped-days': {
                'data': Array<{
                    'city': {
                        'data': {
                            'id': string;
                            'type': string;
                        }
                    }
                    'days': {
                        'data': Array<{
                            'id': string;
                            'type': string;
                        }>
                    }
                }>
            }
        }
    }
    included: Array<{
        'id': string;
        'type': string;
        'attributes': {
            'name'?: string;
            'country-code'?: string;
            'country-name'?: string;
            'continent-name'?: string;
            'show-in-wizard'?: boolean;
            'wizard-order'?: number;
            'date'?: string;
            'index'?: number;
            'removable'?: boolean;
            'half-day'?: boolean;
            'first-day'?: boolean;
            'last-day'?: boolean;
            'position'?: number;
            'summary'?: string;
            'schedule'?: string;
            'has-alternative'?: boolean;
            'transport-type'?: string;
            'transport-name'?: string;
            'transport-description'?: string;
            'landscape-image-url'?: string;
            'square-image-url'?: string;
            'description'?: string;
            'image-url': string;
        }
        'relationships'?: {
            'starting-city'?: {
                'data'?: {
                    'id': string;
                    'type': string;
                }
            }
            'ending-city'?: {
                'data'?: {
                    'id': string;
                    'type': string;
                }
            }
            'tours'?: {
                'data'?: Array<{
                    'id': string;
                    'type': string;
                }>
            }
            'pois'?: {
                'data'?: Array<{
                    'id': string;
                    'type': string;
                }>
            }
            'city'?: {
                'data'?: {
                    'id': string;
                    'type': string;
                }
            }
        }
    }>
}

export interface FailureResponse {
    id: string;
    links: {
        about: string;
    }
    status: string;
    code: string;
    title: string;
    detail: string;
    source: {
        pointer: string;
        parameter: string;
    }
    meta: string;
}