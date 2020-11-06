export interface LoadItinerarySuccessActionResponse {
    data: {
        type: string;
        attributes: {
            'first-name': string;
            'last-name': string;
            email: string;
        }
    }
}

export interface LoadItineraryFailureActionResponse {
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