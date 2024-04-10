export interface Agenda {
    title:string;
    time:string;
    venue:string;
    category:string;
}

export interface Gallery{
    pic:string;
    des:string;
}
export interface Memory {
	title: string;
	description: string;
	image: string;
}


export interface Benefits {
	title: string;
	description: string;
	image: string;
}

export interface Sponsors {
	logo: string;
	company: string;
	website: string;
}

export interface modelagenda {
	eventname: string;
	eventimage: string;
	eventtiming: string;
	price: string;
	description: string;
    tags: string[];
	register: string;
}