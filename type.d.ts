

export interface ClaimeoType{
    text: string ;
    clip: string ;
    date: string ;
    description: string ;
    streamer: string ;
    flag: string ;
}

export interface ClaimeoError{
    text: {
        message: string;
        value: string;
    }
    description: {
        message: string;
        value: string;
    }
    clip: {
        message: string;
        value: string;
    } 
    date: {
        message: string;
        value: string;
    },
    streamer: {
        message: string;
        value: string;
    }
}